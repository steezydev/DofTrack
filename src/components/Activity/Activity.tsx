import { useEffect, useState } from "react";

//Components
import DifficultyBadge from "../DifficultyBadge/DifficultyBadge";
import ButtonStart from "../Buttons/Button";
import Timer from "./Timer";
import Placeholder from "./Placeholder";
import ActionMenu from "../ActionMenu/ActionMenu";

//Types
import { Difficulties } from "../../types/TypesDifficulties";
import { ActionItemData } from "../../types/TypesAction";
import { ActivityData } from "../../types/TypesActivity";

//Helpers
import { timerToSeconds } from "../../helpers/time";

import { doc, deleteDoc, setDoc } from "firebase/firestore";
import db from "../../firebase/firebase";

interface IProps extends ActivityData {
  goalId: string;
}

export default function Activity({
  id,
  title,
  goalTitle,
  timeSpent,
  difficulty,
  timeLeft,
  status,
  goalId
}: IProps) {
  const [timer, setTimer] = useState(-1);
  const [active, setActive] = useState(false);
  const [actStatus, setActStatus] = useState(status);

  //setTimer(isReached ? timeSpent : timeLeft)
  useEffect(() => {
    setTimer(actStatus == "UP" ? timeSpent : timeLeft);
  }, []);

  //Updating the timer
  useEffect(() => {
    let interval: any;
    let mod = actStatus == "UP" ? 1 : -1;
    if (active) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + mod);
      }, 1000);
    } else if (!active) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active]);

  //Checking the timer state
  useEffect(() => {
    if (timer == 0 && actStatus == "DOWN") {
      //TODO: Set value in the db
      setActive(false);
      setActStatus("REACHED");
    }
  }, [timer]);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  const handleContinue = () => {
    //TODO: Set value in the db
    setActStatus("UP")
  };

  const handleClose = () => {
    //TODO: Set value in the db
  };

  const handleEdit = () => {};

  const handleDelete = async () => {
    await deleteDoc(doc(doc(db, "goals", goalId), "activities", id));
  };

  //Action menu items
  const actionItems: ActionItemData[] = [
    {
      title: "Edit",
      action: handleEdit,
    },
    {
      title: "Archive",
      action: handleDelete,
    },
  ];

  return (
    <div className="container rounded-lg max-w-sm bg-white pt-1 select-none relative animate-fade-in">
      <ActionMenu actionItems={actionItems} />
      <div className="px-2 pb-1">
        <div className="flex flex-col">
          <span className="text-grey-darker font-medium text-sm">
            {goalTitle}
          </span>
          <span className="font-medium text-black text-xl">{title}</span>
          {/*<span className="font-medium text-black text-sm">{timeSpent}</span>*/}
        </div>
        {actStatus == "REACHED" && timeSpent == 0 ? (
          <div className="mt-5">
            <div className="grid place-items-center animate-fade-in-down">
              <span className="text-xl text-center">
                Would you like to <span className="text-red">close</span> the
                activity or <span className="text-blue">continue</span>?
              </span>
            </div>
            <div className="flex flex-row justify-center gap-4 mt-4 animate-fade-in">
              <ButtonStart action={handleClose} type={"close"} />
              <ButtonStart action={handleContinue} type={"continue"} />
            </div>
          </div>
        ) : (
          <div>
            <Timer time={timer} showGems={actStatus == "UP"}/>
            <div className="grid place-items-center mt-4">
              <ButtonStart
                action={handleClick}
                type={active ? "stop" : "start"}
              />
            </div>
          </div>
        )}

        <div className="grid place-items-end mt-1">
          <DifficultyBadge difficulty={difficulty} />
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { doc, addDoc, collection, updateDoc, increment } from "firebase/firestore";
import db from "../../firebase/firebase";

//Components
import ButtonSave from "../Buttons/ButtonSave";
import DifficultyBadgePicker from "../DifficultyBadge/DifficultyBadgePicker";
import TimerActivity from "../Timer/TimerActivity";
import Loading from "../Loading/Loading";

//Types
import { ActivityData } from "../../types/TypesActivity";
import { Difficulties } from "../../types/TypesDifficulties";
import { Timer } from "../../types/TypesTimer";

//Schemas
import { ActivitySchema } from "../../schemas/activitiesSchema";

//Hooks
import useGetGoal from "../../hooks/useGetGoal";

//Helpers
import { timerToSeconds } from "../../helpers/time";

export default NiceModal.create(({ goalId }: { goalId: string }) => {
  const modal = useModal();

  const [goalData, loading] = useGetGoal(goalId);
  const [newActivityData, setNewActivityData] = useState<ActivityData>(
    {} as ActivityData
  );
  const [buttonLoading, setButtonLoading] = useState(false);

  const setDifficulty = (value: Difficulties) => {
    setNewActivityData((prevState) => ({ ...prevState, difficulty: value }));
  };

  const handleChangeTitle = (e: any) => {
    setNewActivityData((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const setTimer = (value: Timer) => {
    setNewActivityData((prevState) => ({
      ...prevState,
      timeLeft: timerToSeconds(value),
    }));
  };

  const handleSave = async () => {
    if (!buttonLoading) {
      setButtonLoading(true);
      //Validation
      const newActivity = {
        ...newActivityData,
        isActive: true,
        timeSpent: 0,
        status: "DOWN",
      };
      const activity = ActivitySchema.safeParse(newActivity);

      if (activity.success) {
        modal.remove();
        updateDoc(doc(db, "goals", goalId), {
          "stats.activities": increment(1)
        });
        await addDoc(collection(doc(db, "goals", goalId), "activities"), activity.data);
      } else {
        console.log(activity.error);
      }
      setButtonLoading(false);
    }
  };

  return (
    <div
      className={`min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 animate-fade-in`}
    >
      <div
        className="absolute bg-black opacity-80 inset-0 z-0 "
        onClick={modal.remove}
      ></div>
      {!loading && goalData != undefined ? (
        <div className="w-full max-w-lg p-1 px-2 relative mx-auto my-auto rounded-lg shadow-lg bg-white animate-fade-in-up">
          <div className="flex flex-col mb-1">
            <span className="text-grey-darker font-medium text-sm">
              {goalData.title}
            </span>
            <input
              name="title"
              onChange={(e) => handleChangeTitle(e)}
              placeholder="Title"
              className="mr-6 font-medium text-black text-3xl border-b-2 border-dashed border-grey-darker"
            ></input>
          </div>
          <div className="flex row gap-2">
            <DifficultyBadgePicker setDifficulty={setDifficulty} />
          </div>
          <TimerActivity setTimer={setTimer} />
          <div className="mt-2 mb-1 grid place-items-end">
            <ButtonSave loading={buttonLoading} action={handleSave} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
});

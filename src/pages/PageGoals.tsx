import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { collection } from "firebase/firestore";
import db from "../firebase/firebase";

//Components
import NavBar from "../components/Nav/NavBar";
import Goal from "../components/Goals/Goal";
import GoalFinished from "../components/Goals/GoalFinished";
import ButtonsAddGoal from "../components/Buttons/ButtonsAddGoal";
import Loading from "../components/Loading/Loading";

//Types
import { GoalData } from "../types/TypesGoal";

//Constants
import { GoalsPageLinks } from "../constants/ConstantsGoalsPageLinks";

//Hooks
import { useCollectionData } from "react-firebase-hooks/firestore";


function GoalsEmpty() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-10">
      <span className="text-2xl text-grey-darker font-medium">
        You don't have any goals yet :(
      </span>
      <ButtonsAddGoal action={() => {}} />
    </div>
  );
}


export default function PageGoals() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const [goals, loading, error] = useCollectionData(collection(db, "goals"), {
    idField: "id",
  });

  useEffect(() => {
    console.log(goals);
    console.log(loading);
  }, [goals]);


  return (
    <main>
      <div>
        <header className="p-4 mb-3">
          <h1 className="text-center text-4xl font-bold">Goals</h1>
        </header>

        <NavBar links={GoalsPageLinks} />

        <div className="p-10">
          {!loading ? (
            goals != undefined && goals.length > 0 ? (
              <div className="flex flex-row justify-around gap-6 flex-wrap px-10 animate-fade-in">
                {goals.map((item, i) => {
                  {
                    return item.isActive ? (
                      <Goal
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        gems={item.gems}
                        goalGems={item.goalGems}
                        stats={item.stats}
                      />
                    ) : (
                      <GoalFinished
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        gems={item.gems}
                        stats={item.stats}
                        creationDate={item.creationDate}
                      />
                    );
                  }
                })}
                <ButtonsAddGoal action={() => {}} />
              </div>
            ) : (
              <GoalsEmpty />
            )
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </main>
  );
}

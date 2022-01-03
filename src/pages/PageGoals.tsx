import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

//Components
import NavBar from "../components/Nav/NavBar";
import Goal from "../components/Goals/Goal";
import GoalFinished from "../components/Goals/GoalFinished";
import ButtonsAddGoal from "../components/Buttons/ButtonsAddGoal";

//Types
import { GoalData } from "../types/TypesGoal";

//Constants
import { GoalsPageLinks } from "../constants/ConstantsGoalsPageLinks";

const goalsData: GoalData[] = [
  {
    id: "123",
    title: "Learn Javascript",
    percent: 55,
    gems: 4000,
    goalGems: 8500,
    stats: {
      tasks: 4,
      activities: 1,
    },
    daysSpent: 10,
    isActive: true,
  },
  {
    id: "123",
    title: "Learn Javascript",
    percent: 55,
    gems: 4000,
    goalGems: 8500,
    stats: {
      tasks: 4,
      activities: 1,
    },
    daysSpent: 10,
    isActive: true,
  },
  {
    id: "123",
    title: "Learn Javascript",
    percent: 55,
    gems: 4000,
    goalGems: 8500,
    stats: {
      tasks: 4,
      activities: 1,
    },
    daysSpent: 10,
    isActive: false,
  },
  {
    id: "123",
    title: "Learn Javascript",
    percent: 55,
    gems: 4000,
    goalGems: 8500,
    stats: {
      tasks: 4,
      activities: 1,
    },
    daysSpent: 10,
    isActive: true,
  },
  {
    id: "123",
    title: "Learn Javascript",
    percent: 55,
    gems: 4000,
    goalGems: 8500,
    stats: {
      tasks: 4,
      activities: 1,
    },
    daysSpent: 10,
    isActive: true,
  },
];

export default function PageGoals() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const [isBusy, setIsBusy] = useState(true);
  const [goals, setGoals] = useState([] as GoalData[]);

  useEffect(() => {
    //TODO: Get data from database
    if (filter == null || filter == "current" || filter == "complete") {
    }
    //* Use filter variable (null | current | finished) to sort data

    //!Mock data
    setGoals(goalsData);
    setIsBusy(false);
  }, []);

  return (
    <main>
      {!isBusy && (
        <div>
          <header className="p-4 mb-3">
            <h1 className="text-center text-4xl font-bold">Goals</h1>
          </header>

          <NavBar links={GoalsPageLinks} />
          <div className="p-10">
            <div className="flex flex-row justify-around gap-6 flex-wrap px-10">
              {goals.map((item, i) => {
                {
                  return item.isActive ? (
                    <Goal
                      key={i}
                      id={item.id}
                      title={item.title}
                      gems={item.gems}
                      goalGems={item.goalGems}
                      stats={item.stats}
                      percent={item.percent}
                    />
                  ) : (
                    <GoalFinished
                      key={i}
                      id={item.id}
                      title={item.title}
                      gems={item.gems}
                      stats={item.stats}
                      daysSpent={item.daysSpent}
                    />
                  );
                }
              })}
              <ButtonsAddGoal action={() => {}} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

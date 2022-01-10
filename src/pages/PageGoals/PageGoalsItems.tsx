import Goal from "../../components/Goals/Goal";
import GoalFinished from "../../components/Goals/GoalFinished";
import ButtonsAddGoal from "../../components/Buttons/ButtonsAddGoal";
import Loading from "../../components/Loading/Loading";

//Page Components
import PageGoalsEmpty from "./PageGoalsEmpty";

//Types
import { GoalData } from "../../types/TypesGoal";

export default function ({ goals, loading }: { goals: GoalData[]; loading: boolean }) {
  return (
    <div className="p-10">
      {!loading ? (
        goals != undefined && goals.length > 0 ? (
          <div className="flex flex-row justify-around gap-6 flex-wrap px-10 animate-fade-in">
            {goals.map((item: any, i: number) => {
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
          <PageGoalsEmpty />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
}

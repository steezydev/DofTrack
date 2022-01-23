import Goal from "../../components/Goals/Goal";
import GoalFinished from "../../components/Goals/GoalFinished";
import ButtonsAddGoal from "../../components/Buttons/ButtonsAddGoal";
import Loading from "../../components/Loading/Loading";

//Page Components
import PageDreamEmpty from "./PageDreamEmpty";

//Types
import { GoalData } from "../../types/TypesGoal";
import { DreamData } from "../../types/TypesDream";

//Modals
import { showNewGoal } from "../../modal/showModal";

export default function ({
  dreamData,
  goals,
  loading,
}: {
  dreamData: DreamData;
  goals: GoalData[] | undefined;
  loading: boolean;
}) {
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
                    dreamId={item.dreamId}
                    isActive={item.isActive}
                  />
                ) : (
                  <GoalFinished
                    key={item.id}
                    id={item.id}
                    dreamId={item.dreamId}
                    title={item.title}
                    gems={item.gems}
                    stats={item.stats}
                    creationDate={item.creationDate}
                    isActive={item.isActive}
                  />
                );
              }
            })}
            <ButtonsAddGoal action={() => showNewGoal(dreamData.id, dreamData.title)} />
          </div>
        ) : (
          <PageDreamEmpty dreamData={dreamData} />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
}

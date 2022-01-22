import Loading from "../../components/Loading/Loading";
import ButtonsAddDream from "../../components/Buttons/ButtonsAddDream";
import DreamActive from "../../components/Dream/DreamActive";
import DreamFinished from "../../components/Dream/DreamFinished";

//Page Components
import PageDreamsEmpty from "./PageDreamsEmpty";

//Types
import { GoalData } from "../../types/TypesGoal";
import { DreamData } from "../../types/TypesDream";

//Modals
import { showNewGoal } from "../../modal/showModal";


export default function ({
  dreams,
  loading,
}: {
  dreams: DreamData[];
  loading: boolean;
}) {
  return (
    <div className="p-10">
      {!loading ? (
        dreams != undefined && dreams.length > 0 ? (
          <div className="flex flex-row justify-around gap-6 flex-wrap px-10 animate-fade-in">
            {dreams.map((item: any, i: number) => {
              {
                return item.isActive ? (
                  <DreamActive
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    gems={item.gems}
                    goalGems={item.goalGems}
                    goalsNumber={item.goalsNumber}
                    daysNumber={item.daysNumber}
                    tasksNumber={item.tasksNumber}
                    creationDate={item.creationDate}
                    isActive={item.isActive}
                  />
                ) : (
                  <DreamFinished
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    gems={item.gems}
                    goalGems={item.goalGems}
                    goalsNumber={item.goalsNumber}
                    daysNumber={item.daysNumber}
                    tasksNumber={item.tasksNumber}
                    creationDate={item.creationDate}
                    isActive={item.isActive}
                  />
                );
              }
            })}
            <ButtonsAddDream action={showNewGoal} />
          </div>
        ) : (
          <PageDreamsEmpty />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
}

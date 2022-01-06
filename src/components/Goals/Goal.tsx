import { useNavigate } from "react-router-dom";

//Components
import GoalChart from "../Chart/GoalChart";

//Types
import { GoalData } from "../../types/TypesGoal";

type IProps = Omit<GoalData, 'creationDate'>

export default function Goal({
  id,
  title,
  gems,
  stats,
  goalGems,
}: IProps) {
  const navigate = useNavigate();

  const openGoalPage = () => {
    navigate(`/goal/${id}`);
  };

  const percent = gems / goalGems * 100

  return (
    <div
      onClick={openGoalPage}
      className="animation-grow container rounded-lg max-w-sm bg-white pt-1"
    >
      <div className="flex flex-col justify-center items-center gap-3 p-2">
        <span className="text-2xl font-medium text-center">{title}</span>
        <div>
          <GoalChart percent={percent} gems={gems} goalGems={goalGems} />
        </div>
        <div className="flex justify-center w-full gap-10 text-grey-darker">
          <span>{stats.tasks} tasks</span>
          <span>{stats.activities} activities</span>
        </div>
      </div>
    </div>
  );
}

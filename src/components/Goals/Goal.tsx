import React from "react";
import GoalChart from "../Chart/GoalChart";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: string;
  title: string;
  percent: number;
  gems: number;
  stats: {
    tasks: number;
    activities: number;
  };
  goalGems?: number;
}

export default function Goal({
  id,
  title,
  percent,
  gems,
  stats,
  goalGems = 0,
}: IProps) {
  const navigate = useNavigate();

  const openGoalPage = () => {
    navigate(`/goal/${id}`);
  };

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

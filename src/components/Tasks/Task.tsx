import React from "react";
import { TaskData } from "../../types/TypesTask";

import TaskActive from "./TaskActive";
import TaskFinished from "./TaskFinished";

interface IProps extends Omit<TaskData, 'text'> {
  goalId: string
}

export default function Task({
  id,
  title,
  goalTitle,
  isMore,
  deadline,
  difficulty,
  isActive,
  goalId,
  gems = 0,
}: IProps) {
  if (isActive) {
    return (
      <TaskActive
        id={id}
        title={title}
        goalTitle={goalTitle}
        isMore={isMore}
        deadline={deadline}
        difficulty={difficulty}
        goalId={goalId}
      />
    );
  }

  return (
    <TaskFinished
      id={id}
      title={title}
      goalTitle={goalTitle}
      isMore={isMore}
      deadline={deadline}
      difficulty={difficulty}
      gems={gems}
    />
  );
  return <div></div>;
}

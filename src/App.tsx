import { useState, FC } from "react";

import GoalFinished from "./components/Goals/GoalFinished";
import Goal from "./components/Goals/Goal";
import Activity from "./components/Activity/Activity";
import TaskActive from "./components/Tasks/TaskActive";
import TaskFinished from "./components/Tasks/TaskFinished";
import TaskFull from "./components/Tasks/TaskFull";
import DreamActive from "./components/Dream/DreamActive";
import ButtonAdd from "./components/Buttons/ButtonAdd";
import TaskNew from "./components/Tasks/TaskNew";

function showModal () {

}

function App() {
  function showModal (component: any) {
    return component
  }

  const [taskModal, setTaskModal] = useState({
    show: false,
    taskId: "",
  });

  const [newTaskModal, setNewTaskModal] = useState({
    show: false,
  });

  const openModal = (taskId: string) => {
    setTaskModal({ show: true, taskId });
  };

  const closeModal = () => {
    setTaskModal({ show: false, taskId: "" });
  };

  const openNewTask = () => {
    setNewTaskModal({ show: true });
  };

  const closeNewTask = () => {
    setNewTaskModal({ show: false });
  };

  return (
    <div className="App bg-back flex flex-col gap-4 p-2">
      <ButtonAdd action={openNewTask} />
      {/* <DreamActive title={"Become a Front-end developer"} gems={8900} gemsGoal={11000} goalsNumber={4} daysNumber={88} tasksNumber={94} isActive={true}/> */}
      <TaskActive
        id="123"
        title="Watch the video"
        goalTitle="Learn Javascript"
        isMore={true}
        deadline="10/11/2021"
        difficulty="easy"
        openModal={openModal}
      />
      {/*<GoalFinished id='123' title="Learn Javascript" days={21} gems={3000}/>*/}
      {/*<Goal id='123' title="Learn Javascript" percent={50} gems={3000} goalGems={6000}/>*/}
      {/*<Activity id='123' title='Do the project' goalTitle="Learn Javascript" timeSpent="1h 21min" difficulty="easy"/>*/}
      {/*<TaskFinished id='123' gems={2} title='Watch the video' goalTitle='Learn Javascript' isMore={true} deadline='10/11/2021' difficulty='easy'/>*/}
      {taskModal.show && (
        <TaskFull closeModal={closeModal} taskId={taskModal.taskId} />
      )}
      {newTaskModal.show && <TaskNew closeModal={closeNewTask} />}
    </div>
  );
}

export default App;

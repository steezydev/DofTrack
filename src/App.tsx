import { useState, FC } from "react";

import GoalFinished from "./components/Goals/GoalFinished";
import Goal from "./components/Goals/Goal";
import Activity from "./components/Activity/Activity";
import TaskActive from "./components/Tasks/TaskActive";

import TaskFinished from "./components/Tasks/TaskFinished";

import DreamActive from "./components/Dream/DreamActive";
import ButtonAdd from "./components/Buttons/ButtonAdd";

import ModalTaskNew from "./components/Modals/ModalTaskNew";


import NiceModal from '@ebay/nice-modal-react';

NiceModal.register('TaskNewModal', ModalTaskNew);


function App() {
  const showNewModal = () => {
    NiceModal.show('TaskNewModal')
  };

  return (
    <NiceModal.Provider>
      <div className="App bg-back flex flex-col gap-4 p-2">
        <ButtonAdd action={showNewModal} />
        {/* <DreamActive title={"Become a Front-end developer"} gems={8900} gemsGoal={11000} goalsNumber={4} daysNumber={88} tasksNumber={94} isActive={true}/> */}
        <TaskActive
          id="123"
          title="Watch the video"
          goalTitle="Learn Javascript"
          isMore={true}
          deadline="10/11/2021"
          difficulty="easy"
        />
        {/*<GoalFinished id='123' title="Learn Javascript" days={21} gems={3000}/>*/}
        {/*<Goal id='123' title="Learn Javascript" percent={50} gems={3000} goalGems={6000}/>*/}
        {/*<Activity id='123' title='Do the project' goalTitle="Learn Javascript" timeSpent="1h 21min" difficulty="easy"/>*/}
        {/*<TaskFinished id='123' gems={2} title='Watch the video' goalTitle='Learn Javascript' isMore={true} deadline='10/11/2021' difficulty='easy'/>*/}
      </div>
    </NiceModal.Provider>
  );
}

export default App;

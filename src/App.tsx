import { useState } from "react";

import GoalFinished from "./components/Goals/GoalFinished";
import Goal from "./components/Goals/Goal";
import ActivityGoing from "./components/Activity/Activity";
import TaskActive from "./components/Tasks/TaskActive";
import TaskFinished from "./components/Tasks/TaskFinished";

function App() {
  return (
    <div className="App bg-back flex gap-4 p-2">
      {/*<TaskActive id='123' title='Watch the video' goalTitle='Learn Javascript' isMore={true} deadline='10/11/2021' difficulty='easy'/>*/}
      {/*<GoalFinished id='123' title="Learn Javascript" days={21} gems={3000}/>*/}
      {/*<Goal id='123' title="Learn Javascript" percent={50} gems={3000} goalGems={6000}/>*/}
      <ActivityGoing id='123' title='Do the project' goalTitle="Learn Javascript" timeSpent="1h 21min" difficulty="easy"/>
    </div>
  );
}

export default App;

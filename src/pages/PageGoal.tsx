import NiceModal from "@ebay/nice-modal-react";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, doc, query, where } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

//Firebase
import db from "../firebase/firebase";

//Components
import Activity from "../components/Activity/Activity";
import TaskActive from "../components/Tasks/TaskActive";
import TaskFinished from "../components/Tasks/TaskFinished";
import ButtonAdd from "../components/Buttons/ButtonAdd";
import NavBar from "../components/Nav/NavBar";
import Loading from "../components/Loading/Loading";

//Types
import { GoalData } from "../types/TypesGoal";
import { ActivityData } from "../types/TypesActivity";
import { TaskData } from "../types/TypesTask";
import { ILink } from "../types/TypesLinks";

//Hooks
import {
  useDocumentData,
  useDocument,
  useCollectionData,
} from "react-firebase-hooks/firestore";

export default function PageGoal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  //console.log(filter);

  const { id } = useParams();

  if (id == undefined) {
    return <Navigate to="/404" />;
  }

  const [goalData, loadingGoals, errorGoals] = useDocumentData(
    doc(db, "goals", id)
  );

  const [activitiesData, loadingActivities, errorActivities] =
    useCollectionData(query(collection(doc(db, "goals", id), "activities")), {
      idField: "id",
    });

  const [tasksData, loadingTasks, errorTasks] = useCollectionData(
    query(
      collection(doc(db, "goals", id), "tasks"),
      where("isActive", "==", true)
    ),
    {
      idField: "id",
      transform: (item: any) => {
        return { ...item, deadline: new Date(item.deadline.seconds * 1000) };
      },
    }
  );

  const [tasksFinishedData, loadingTasksFinished, errorTasksFinished] =
    useCollectionData(
      query(
        collection(doc(db, "goals", id), "tasks"),
        where("isActive", "==", false)
      ),
      {
        idField: "id",
        transform: (item: any) => {
          return { ...item, deadline: new Date(item.deadline.seconds * 1000) };
        },
      }
    );

  const [etasksData, eloadingTasks, eerrorTasks] = useCollectionData(
    collection(doc(db, "goals", id), "tasks")
  );

  useEffect(() => {
    console.log(etasksData);
  }, [etasksData]);

  const showNewTaskModal = (goalId: string) => {
    NiceModal.show("TaskNewModal", { goalId });
  };

  const showNewActivityModal = (goalId: string) => {
    NiceModal.show("ActivityNewModal", { goalId });
  };

  const GoalPageLinks: ILink[] = [
    {
      title: "All",
      path: `/goal/${id}`,
    },
    {
      title: "Tasks",
      path: `/goal/${id}?filter=tasks`,
    },
    {
      title: "Activities",
      path: `/goal/${id}?filter=activities`,
    },
    {
      title: "Finished",
      path: `/goal/${id}?filter=finished`,
    },
  ];

  return (
    <main>
      {!loadingGoals ? (
        <div>
          {goalData != undefined ? (
            <header className="p-4 mb-3">
              <h1 className="text-center text-4xl font-bold">
                {goalData!.title}
              </h1>
              <div className="flex justify-center gap-1">
                <h2 className="text-center text-2xl">
                  {goalData!.gems} / {goalData!.goalGems}{" "}
                </h2>
                <img
                  className="object-scale-down w-6"
                  src="/images/gem.png"
                ></img>
              </div>
            </header>
          ) : (
            <Navigate to="/404" />
          )}
          <NavBar links={GoalPageLinks} />
          <div className="p-10">
            {!loadingActivities && !loadingTasks && (
              <div className="mb-10">
                <h1 className="text-2xl font-medium">Active</h1>
                <div className="flex flex-row justify-between w-full grow">
                  <div className="p-2 flex flex-col items-start gap-5 w-96 mr-5">
                    {activitiesData != undefined &&
                      activitiesData.length > 0 &&
                      activitiesData.map((item: any, i: number) => (
                        <Activity
                          key={i}
                          id={item.id}
                          title={item.title}
                          goalTitle={goalData!.title}
                          timeSpent={item.timeSpent}
                          difficulty={item.difficulty}
                          status={item.status}
                          timeLeft={item.timeLeft}
                        />
                      ))}
                    <ButtonAdd
                      action={() => showNewActivityModal(goalData!.id)}
                    />
                  </div>
                  <div className="p-2 flex flex-row justify-start content-start gap-5 items-start w-full flex-wrap ">
                    {tasksData != undefined &&
                      tasksData.length > 0 &&
                      tasksData.map((item, i) => (
                        <TaskActive
                          key={i}
                          id={item.id}
                          title={item.title}
                          goalTitle={goalData!.title}
                          isMore={item.isMore}
                          deadline={item.deadline}
                          difficulty={item.difficulty}
                        />
                      ))}
                    <ButtonAdd action={() => showNewTaskModal(goalData!.id)} />
                  </div>
                </div>
              </div>
            )}
            {!loadingTasksFinished &&
              (tasksFinishedData != undefined &&
              tasksFinishedData.length > 0 ? (
                <div>
                  <h1 className="text-2xl font-medium mb-3">Finished</h1>

                  <div className="flex flex-row justify-start content-start gap-5 items-start w-full flex-wrap">
                    {tasksFinishedData.map((item: any, i) => (
                      <TaskFinished
                        key={i}
                        id={item.id}
                        title={item.title}
                        goalTitle={goalData!.title}
                        isMore={item.isMore}
                        deadline={item.deadline}
                        difficulty={item.difficulty}
                        gems={item.gems}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div></div>
              ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
}

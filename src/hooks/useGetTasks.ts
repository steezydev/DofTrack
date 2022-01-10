import { useState, useEffect } from "react";
import { query, collection, doc, where } from "firebase/firestore";
import db from "../firebase/firebase";

//Schemas
import { TasksSchema } from "../schemas/tasksSchema";

//Types
import { TaskData } from "../types/TypesTask";

//Hooks
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function useGetTasks(goalId: string, active: boolean): [TaskData[], boolean] {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<TaskData[]>([] as TaskData[]);

  const [data, load, error] = useCollectionData(
    query(
      collection(doc(db, "goals", goalId), "tasks"),
      where("isActive", "==", active)
    ),
    {
      idField: "id",
      transform: (item: any) => {
        return { ...item, deadline: new Date(item.deadline.seconds * 1000) };
      },
    }
  );

  useEffect(() => {
    function validateGoals() {
      try {
        const tasks = TasksSchema.parse(data);
        setResult(tasks);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    if (load !== true) {
      validateGoals();
    }
  }, [load]);

  return [result, loading];
}

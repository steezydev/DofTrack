import { useState, useEffect } from "react";
import { doc } from "firebase/firestore";
import db from "../firebase/firebase";

//Schemas
import { TaskSchema } from "../schemas/tasksSchema";

//Types
import { TaskData } from "../types/TypesTask";

//Hooks
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

export default function useGetTask(
  taskId: string,
  goalId: string
): [TaskData | undefined, boolean] {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<TaskData | undefined>({} as TaskData | undefined);

  const [data, load, error] = useDocumentDataOnce(
    doc(doc(db, "goals", goalId), "tasks", taskId),
    {
      idField: "id",
      transform: (item: any) => {
        return { ...item, deadline: item.deadline != undefined ? new Date(item.deadline.seconds * 1000) : undefined };
      },
    }
  );

  useEffect(() => {
    function validateGoals() {
      try {
        const task = TaskSchema.parse(data);
        setResult(task);
        setLoading(false);
      } catch (error) {
        setResult(undefined);
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

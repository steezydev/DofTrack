import { doc, QueryDocumentSnapshot } from "firebase/firestore";
import db from "../firebase/firebase";

//Schemas
import { TaskSchema } from "../schemas/tasksSchema";

//Types
import { TaskData } from "../types/TypesTask";

//Hooks
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

const converter = {
  toFirestore: (data: TaskData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => {
    const item = snap.data();
    const task = {
      ...item,
      deadline:
        item.deadline != undefined
          ? new Date(item.deadline.seconds * 1000)
          : undefined,
    };

    return task as TaskData;
  },
};

export default function useGetTask(
  taskId: string,
  goalId: string
): [TaskData | undefined, boolean] {

  const [data, load, error] = useDocumentDataOnce(
    doc(doc(db, "goals", goalId), "tasks", taskId).withConverter(converter),
    {
      idField: "id"
    }
  );

  return [data, load];
}

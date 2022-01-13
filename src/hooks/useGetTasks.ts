import {
  query,
  collection,
  doc,
  where,
  QueryDocumentSnapshot
} from "firebase/firestore";
import db from "../firebase/firebase";

//Schemas
import { TaskSchema } from "../schemas/tasksSchema";

//Types
import { TaskData } from "../types/TypesTask";

//Hooks
import { useCollectionData } from "react-firebase-hooks/firestore";

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

export default function useGetTasks(
  goalId: string,
  active: boolean
): [TaskData[] | undefined, boolean] {
  const [data, load, error] = useCollectionData(
    query(
      collection(doc(db, "goals", goalId), "tasks").withConverter(converter),
      where("isActive", "==", active)
    ),
    {
      idField: "id",
    }
  );

  return [data, load];
}

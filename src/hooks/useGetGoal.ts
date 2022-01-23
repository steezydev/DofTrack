import { doc, QueryDocumentSnapshot } from "firebase/firestore";
import db from "../firebase/firebase";

//Schemas
import { GoalSchema } from "../schemas/goalsSchema";

//Types
import { GoalData } from "../types/TypesGoal";

//Hooks
import { useDocumentData } from "react-firebase-hooks/firestore";

const converter = {
  toFirestore: (data: GoalData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => {
    const item = snap.data();
    const goal = {
      ...item,
      creationDate:
        item.creationDate != undefined
          ? new Date(item.creationDate.seconds * 1000)
          : undefined,
    };

    return goal as GoalData;
  },
};

export default function useGetGoal(
  dreamId: string
): [GoalData | undefined, boolean] {
  const [data, load, error] = useDocumentData(
    doc(db, "goals", dreamId).withConverter(converter),
    {
      idField: "id",
    }
  );

  return [data, load];
}

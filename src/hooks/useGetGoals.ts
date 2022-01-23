import {
  collection,
  query,
  QueryDocumentSnapshot,
  where,
} from "firebase/firestore";
import db from "../firebase/firebase";

import { GoalSchema, GoalsSchema } from "../schemas/goalsSchema";

//Types
import { GoalData } from "../types/TypesGoal";

//Hooks
import { useCollectionData } from "react-firebase-hooks/firestore";

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

export default function useGetGoals(
  id?: string
): [GoalData[] | undefined, boolean] {
  let q;

  if (id != undefined) {
    q = query(
      collection(db, "goals").withConverter(converter),
      where("dreamId", "==", id)
    );
  } else {
    q = collection(db, "goals").withConverter(converter);
  }

  const [data, load, error] = useCollectionData(q, {
    idField: "id",
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return [data, load];
}

import {
  collection,
  doc,
  query,
  QueryDocumentSnapshot,
  where,
} from "firebase/firestore";
import db from "../firebase/firebase";

import { GoalSchema, GoalsSchema } from "../schemas/goalsSchema";

//Types
import { DreamData } from "../types/TypesDream";

//Hooks
import { useDocumentData } from "react-firebase-hooks/firestore";

//Helpers
import { getDifferenceInDays } from "../helpers/time";

const converter = {
  toFirestore: (data: DreamData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => {
    const item = snap.data();
    const goal = {
      ...item,
      daysNumber:
        item.creationDate != undefined
          ? getDifferenceInDays (new Date(item.creationDate.seconds * 1000))
          : undefined,
      creationDate:
        item.creationDate != undefined
          ? new Date(item.creationDate.seconds * 1000)
          : undefined,
    };

    return goal as DreamData;
  },
};

export default function useGetDream(
  id: string
): [DreamData | undefined, boolean] {
  const [data, load, error] = useDocumentData(
    doc(db, "dreams", id).withConverter(converter),
    {
      idField: "id",
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return [data, load];
}

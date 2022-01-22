import { collection, QueryDocumentSnapshot } from "firebase/firestore";
import db from "../firebase/firebase";

import { GoalSchema, GoalsSchema } from "../schemas/goalsSchema";

//Types
import { DreamData } from "../types/TypesDream";

//Hooks
import { useCollectionData } from "react-firebase-hooks/firestore";

const converter = {
  toFirestore: (data: DreamData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => {
    const item = snap.data();
    const goal = {
      ...item,
      creationDate:
        item.creationDate != undefined
          ? new Date(item.creationDate.seconds * 1000)
          : undefined,
    };

    return goal as DreamData;
  },
};

export default function useGetDreams(): any {
  const [data, load, error] = useCollectionData(
    collection(db, "dreams").withConverter(converter),
    {
      idField: "id",
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return [data, load];
}

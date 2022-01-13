import { useState, useEffect } from "react";
import { query, collection, doc, QueryDocumentSnapshot } from "firebase/firestore";
import db from "../firebase/firebase";

//Schemas
import { ActivitiesSchema } from "../schemas/activitiesSchema";

//Types
import { ActivityData } from "../types/TypesActivity";

//Hooks
import { useCollectionData } from "react-firebase-hooks/firestore";

const converter = {
  toFirestore: (data: ActivityData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => {
    const goal = snap.data();

    return goal as ActivityData;
  },
};

export default function useGetActivities(goalId: string): [ActivityData[] | undefined, boolean] {
  const [data, load, error] =
    useCollectionData(query(collection(doc(db, "goals", goalId), "activities").withConverter(converter)), {
      idField: "id",
    });

  return [data, load];
}

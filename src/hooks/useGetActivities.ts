import { useState, useEffect } from "react";
import { query, collection, doc } from "firebase/firestore";
import db from "../firebase/firebase";

//Schemas
import { ActivitiesSchema } from "../schemas/activitiesSchema";

//Types
import { ActivityData } from "../types/TypesActivity";

//Hooks
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function useGetActivities(goalId: string): [ActivityData[], boolean] {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<ActivityData[]>([] as ActivityData[]);

  const [data, load, error] =
    useCollectionData(query(collection(doc(db, "goals", goalId), "activities")), {
      idField: "id",
    });

  useEffect(() => {
    function validateGoals() {
      try {
        const activities = ActivitiesSchema.parse(data);
        setResult(activities);
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

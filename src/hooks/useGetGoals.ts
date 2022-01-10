import { useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import db from "../firebase/firebase";

import { GoalSchema, GoalsSchema } from "../schemas/goalsSchema";

//Types
import { GoalData } from "../types/TypesGoal";

//Hooks
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function useGetGoals(): any {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<GoalData[]>([] as GoalData[]);

  const [data, load, error] = useCollectionData(collection(db, "goals"), {
    idField: "id",
    transform: (item: any) => {
      return {
        ...item,
        creationDate: new Date(item.creationDate.seconds * 1000),
      };
    },
  });

  useEffect(() => {
    function validateGoals() {
      try {
        const goals = GoalsSchema.parse(data);
        setResult(goals);
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

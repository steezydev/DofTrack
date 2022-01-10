import { useState, useEffect } from "react";
import { doc } from "firebase/firestore";
import db from "../firebase/firebase";

//Schemas
import { GoalSchema } from "../schemas/goalsSchema";

//Types
import { GoalData } from "../types/TypesGoal";

//Hooks
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

export default function useGetGoal(id: string): [GoalData, boolean] {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<GoalData>({} as GoalData);

  const [data, load, error] = useDocumentDataOnce(
    doc(db, "goals", id),
    {
      idField: "id",
      transform: (item: any) => {
        return {
          ...item,
          creationDate: new Date(item.creationDate.seconds * 1000),
        };
      },
    }
  );

  useEffect(() => {
    function validateGoals() {
      try {
        const goal = GoalSchema.parse(data);
        setResult(goal);
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

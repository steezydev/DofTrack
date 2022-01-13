import { doc, deleteDoc, setDoc, increment, updateDoc } from "firebase/firestore";
import db from "./firebase";
import { gemsScale } from "../constants/gemsScale";

import { Difficulties } from "../types/TypesDifficulties";

export const deleteActivity = async (goalId: string, activityId: string,) => {
  updateDoc(doc(db, "goals", goalId), {
    "stats.activities": increment(-1),
  });
  await deleteDoc(doc(doc(db, "goals", goalId), "activities", activityId));
};
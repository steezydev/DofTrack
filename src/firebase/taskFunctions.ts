import { doc, deleteDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import db from "./firebase";
import { gemsScale } from "../constants/gemsScale";


//Types
import { Difficulties } from "../types/TypesDifficulties";

export const completeTask = (goalId: string, taskId: string, difficulty: Difficulties) => {
  setDoc(
    doc(doc(db, "goals", goalId), "tasks", taskId),
    { isActive: false, gems: gemsScale[difficulty] },
    { merge: true }
  );
  setDoc(
    doc(db, "goals", goalId),
    { gems: increment(gemsScale[difficulty]) },
    { merge: true }
  );
};

export const deleteTask = async (goalId: string, taskId: string) => {
  updateDoc(doc(db, "goals", goalId), {
    "stats.tasks": increment(-1),
  });
  await deleteDoc(doc(doc(db, "goals", goalId), "tasks", taskId));
};

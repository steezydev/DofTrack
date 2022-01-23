import {
  doc,
  deleteDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "./firebase";
import { gemsScale } from "../constants/gemsScale";

//Types
import { Difficulties } from "../types/TypesDifficulties";

export const completeTask = (
  goalId: string,
  taskId: string,
  difficulty: Difficulties,
  dreamId?: string
) => {
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
  if (dreamId != undefined) {
    setDoc(
      doc(db, "dreams", dreamId),
      { gems: increment(gemsScale[difficulty]) },
      { merge: true }
    );
  }
};

export const deleteTask = async (
  goalId: string,
  taskId: string,
  dreamId?: string
) => {
  updateDoc(doc(db, "goals", goalId), {
    "stats.tasks": increment(-1),
  });
  await deleteDoc(doc(doc(db, "goals", goalId), "tasks", taskId));

  if (dreamId != undefined) {
    updateDoc(doc(db, "dreams", dreamId), {
      tasksNumber: increment(-1),
    });
  }
};

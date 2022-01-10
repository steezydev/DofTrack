import { Difficulties } from "./TypesDifficulties";
import { Timer } from "./TypesTimer";

export interface ActivityData {
  id: string;
  title: string;
  goalTitle?: string;
  timeSpent: number; //seconds
  timeLeft: number; //seconds
  difficulty: Difficulties;
  status: "DOWN" | "REACHED" | "UP"
}

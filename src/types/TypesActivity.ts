import { Difficulties } from "./TypesDifficulties";
import { Timer } from "./TypesTimer";

export interface ActivityData {
  id: string;
  title: string;
  goalTitle: string;
  timeSpent: string;
  goalTime: Timer;
  difficulty: Difficulties;
}

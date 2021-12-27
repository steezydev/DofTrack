import { Difficulties } from "./TypesDifficulties";

export interface ActivityData {
  id: string;
  title: string;
  goalTitle: string;
  timeSpent: string;
  difficulty: Difficulties;
}

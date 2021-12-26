import { Difficulties } from "./TypesDifficulties";

export interface TaskData {
  title: string;
  goalTitle: string;
  text: string;
  deadline: string;
  difficulty: Difficulties;
  isActive?: boolean;
}

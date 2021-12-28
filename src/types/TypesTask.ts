import { Difficulties } from "./TypesDifficulties";

export interface TaskData {
  title: string;
  goalTitle: string;
  text: string;
  deadline: Date;
  difficulty: Difficulties;
  isActive?: boolean;
}

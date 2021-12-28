import { Difficulties } from "./TypesDifficulties";

export interface TaskData {
  id: string;
  title: string;
  goalTitle: string;
  text: string;
  deadline: Date;
  difficulty: Difficulties;
  isMore: boolean;
  isActive?: boolean;
  gems?: number;
}

export interface DreamData {
  id: number;
  title: string;
  gems: number;
  goalGems: number;
  goalsNumber: number;
  daysNumber: number;
  tasksNumber: number;
  creationDate: Date;
  isActive?: boolean;
}

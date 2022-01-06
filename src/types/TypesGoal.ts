export interface GoalData {
  id: string;
  title: string;
  gems: number;
  goalGems: number;
  stats: {
    tasks: number;
    activities: number;
  };
  creationDate: Date,
  isActive?: boolean
  isMain?: boolean
}

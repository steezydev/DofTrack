export interface GoalData {
  id: string;
  title: string;
  percent: number;
  gems: number;
  goalGems: number;
  stats: {
    tasks: number;
    activities: number;
  };
  daysSpent: number,
  isActive?: boolean
}

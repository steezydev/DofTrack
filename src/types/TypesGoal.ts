export interface GoalData {
  id: string;
  title: string | undefined;
  gems: number;
  goalGems: number;
  stats?: {
    tasks: number;
    activities: number;
  };
}

import { z } from "zod";
import { toZod } from "tozod";
import { GoalData } from "../types/TypesGoal";

export const GoalSchema: toZod<GoalData> = z.object({
  id: z.string(),
  title: z.string(),
  gems: z.number(),
  goalGems: z.number(),
  stats: z.object({
    activities: z.number(),
    tasks: z.number(),
  }),
  creationDate: z.date(),
  isActive: z.boolean(),
  isMain: z.boolean().optional(),
});

export const GoalsSchema = z.array(GoalSchema);

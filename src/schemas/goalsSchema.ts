import { z } from "zod";
import { toZod } from "tozod";
import { GoalData } from "../types/TypesGoal";

export const GoalSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  gems: z.number(),
  goalGems: z.number(),
  stats: z.object({
    activities: z.number(),
    tasks: z.number(),
  }),
  isActive: z.boolean(),
  isMain: z.boolean().optional(),
});

export const GoalsSchema = z.array(GoalSchema);

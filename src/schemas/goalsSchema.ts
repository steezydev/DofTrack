import { z } from "zod";

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
  dreamId: z.string().optional(),
  isMain: z.boolean().optional(),
});

export const GoalsSchema = z.array(GoalSchema);

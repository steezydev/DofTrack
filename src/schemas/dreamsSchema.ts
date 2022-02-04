import { z } from "zod";

export const DreamSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  gems: z.number(),
  goalGems: z.number(),
  goalsNumber: z.number(),
  tasksNumber: z.number(),
  isActive: z.boolean(),
});

export const DreamsSchema = z.array(DreamSchema);

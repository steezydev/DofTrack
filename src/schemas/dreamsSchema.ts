import { z } from "zod";

export const DreamSchema = z.object({
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

export const DreamsSchema = z.array(DreamSchema);

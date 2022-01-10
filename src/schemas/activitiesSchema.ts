import { z } from "zod";

export const ActivitySchema = z.object({
  id: z.string(),
  title: z.string(),
  goalTitle: z.string().optional(),
  timeSpent: z.number(),
  timeLeft: z.number(),
  difficulty: z.enum(["HARD", "MEDIUM", "EASY", "PICKER"]),
  status: z.enum(["DOWN", "REACHED", "UP"]),
});

export const ActivitiesSchema = z.array(ActivitySchema);

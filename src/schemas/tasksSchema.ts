import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  goalTitle: z.string().optional(),
  text: z.string(),
  deadline: z.date(),
  difficulty: z.enum(["HARD", "MEDIUM", "EASY", "PICKER"]),
  isActive: z.boolean(),
  isMore: z.boolean(),
  gems: z.number().optional()
});

export const TasksSchema = z.array(TaskSchema);

import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string().optional(),
  title: z.string().refine((val) => val.length <= 50, {
    message: "Title can't be more than 50 characters",
  }),
  goalTitle: z.string().optional(),
  text: z.string().optional(),
  deadline: z.date().optional(),
  difficulty: z.enum(["HARD", "MEDIUM", "EASY", "PICKER"]),
  isActive: z.boolean(),
  isMore: z.boolean(),
  gems: z.number().optional(),
});

export const TasksSchema = z.array(TaskSchema);

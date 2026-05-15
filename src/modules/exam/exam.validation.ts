import { z } from "zod";

const createExamZodSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1, "Exam title is required"),

    examDate: z.string().trim().min(1, "Exam date is required"),

    feeAmount: z
      .number()
      .positive("Fee amount must be greater than 0"),
  }),
});

export const ExamValidation = {
  createExamZodSchema,
};
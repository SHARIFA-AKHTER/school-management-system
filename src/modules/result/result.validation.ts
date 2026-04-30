import { z } from 'zod';

const createResultZodSchema = z.object({
  body: z.object({
    studentId: z
      .string()
      .trim()
      .min(1, 'Student ID is required'),

    subject: z
      .string()
      .trim()
      .min(1, 'Subject name is required'),

    marks: z
      .number({
        message: 'Marks are required',
      })
      .min(0, 'Marks cannot be less than 0')
      .max(100, 'Marks cannot be greater than 100'),
  }),
});

export const ResultValidation = {
  createResultZodSchema,
};
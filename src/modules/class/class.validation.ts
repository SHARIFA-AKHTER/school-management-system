import { z } from 'zod';

const createClassZodSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(1, 'Class name is required'),
  }),
});

export const ClassValidation = {
  createClassZodSchema,
};
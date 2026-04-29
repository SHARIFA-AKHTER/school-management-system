import { z } from 'zod';

const createStudentZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    classId: z.string().min(1, 'Class ID is required'),
    userId: z.string().optional(),
  }),
});

export const StudentValidation = {
  createStudentZodSchema,
};
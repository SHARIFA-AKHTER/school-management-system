import { z } from 'zod';

const createAttendanceZodSchema = z.object({
  body: z.object({
    studentId: z
      .string()
      .trim()
      .min(1, 'Student ID is required'),

    date: z
      .string()
      .trim()
      .min(1, 'Date is required')
      .refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format. Use YYYY-MM-DD',
      }),

    status: z.enum(['PRESENT', 'ABSENT', 'LATE'], {
      message: 'Status is required',
    }),
  }),
});

export const AttendanceValidation = {
  createAttendanceZodSchema,
};
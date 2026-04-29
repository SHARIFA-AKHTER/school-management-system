import { z } from 'zod';

const registerSchema = z.object({
  body: z.object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be 6 characters"),
    role: z.enum(['ADMIN', 'TEACHER', 'STUDENT']).optional(),
  }),
});

const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(1, "Password is required"),
  }),
});

export const AuthValidation = {
  registerSchema,
  loginSchema,
};
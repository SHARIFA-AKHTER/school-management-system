import { z } from 'zod';
const createTeacherZodSchema = z.object({
    body: z.object({
        name: z
            .string()
            .trim()
            .min(1, 'Teacher name is required')
            .min(2, 'Name must be at least 2 characters long'),
    }),
});
export const TeacherValidation = {
    createTeacherZodSchema,
};
//# sourceMappingURL=teacher.validation.js.map
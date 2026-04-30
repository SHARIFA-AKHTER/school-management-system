import { z } from 'zod';
const createSubjectZodSchema = z.object({
    body: z.object({
        name: z
            .string()
            .trim()
            .min(1, 'Subject name is required'),
        classId: z
            .string()
            .trim()
            .min(1, 'Class ID is required'),
    }),
});
export const SubjectValidation = {
    createSubjectZodSchema,
};
//# sourceMappingURL=subject.validation.js.map
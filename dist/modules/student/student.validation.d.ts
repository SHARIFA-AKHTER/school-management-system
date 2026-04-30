import { z } from 'zod';
export declare const StudentValidation: {
    createStudentZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            classId: z.ZodString;
            userId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=student.validation.d.ts.map
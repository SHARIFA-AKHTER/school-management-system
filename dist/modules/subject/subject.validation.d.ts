import { z } from 'zod';
export declare const SubjectValidation: {
    createSubjectZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            classId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=subject.validation.d.ts.map
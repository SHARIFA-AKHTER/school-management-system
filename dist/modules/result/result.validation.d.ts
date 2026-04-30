import { z } from 'zod';
export declare const ResultValidation: {
    createResultZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            studentId: z.ZodString;
            subject: z.ZodString;
            marks: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=result.validation.d.ts.map
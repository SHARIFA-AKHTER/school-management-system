import { z } from 'zod';
export declare const AuthValidation: {
    registerSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            email: z.ZodString;
            password: z.ZodString;
            role: z.ZodOptional<z.ZodEnum<{
                ADMIN: "ADMIN";
                TEACHER: "TEACHER";
                STUDENT: "STUDENT";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    loginSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
            password: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=auth.validation.d.ts.map
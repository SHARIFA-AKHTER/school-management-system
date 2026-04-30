import { z } from 'zod';
export declare const AttendanceValidation: {
    createAttendanceZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            studentId: z.ZodString;
            date: z.ZodString;
            status: z.ZodEnum<{
                PRESENT: "PRESENT";
                ABSENT: "ABSENT";
                LATE: "LATE";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=attendance.validation.d.ts.map
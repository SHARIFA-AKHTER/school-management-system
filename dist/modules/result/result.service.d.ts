import { IResult } from "./result.interface.js";
export declare const ResultService: {
    createResult: (data: IResult) => Promise<{
        student: {
            id: string;
            name: string;
            userId: string | null;
            classId: string;
        };
    } & {
        id: string;
        subject: string;
        studentId: string;
        marks: number;
    }>;
    getStudentResults: (studentId: string) => Promise<({
        student: {
            name: string;
            classId: string;
        };
    } & {
        id: string;
        subject: string;
        studentId: string;
        marks: number;
    })[]>;
    getAllResults: () => Promise<({
        student: {
            id: string;
            name: string;
            userId: string | null;
            classId: string;
        };
    } & {
        id: string;
        subject: string;
        studentId: string;
        marks: number;
    })[]>;
};
//# sourceMappingURL=result.service.d.ts.map
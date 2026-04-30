import { IStudent } from "./student.interface.js";
export declare const StudentService: {
    createStudent: (data: IStudent) => Promise<{
        class: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        userId: string | null;
        classId: string;
    }>;
    getAllStudents: () => Promise<({
        class: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        userId: string | null;
        classId: string;
    })[]>;
    getSingleStudent: (id: string) => Promise<({
        class: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        userId: string | null;
        classId: string;
    }) | null>;
};
//# sourceMappingURL=student.service.d.ts.map
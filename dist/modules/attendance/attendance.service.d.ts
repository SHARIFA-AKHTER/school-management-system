import { IAttendance } from "./attendance.interface.js";
export declare const AttendanceService: {
    createAttendance: (data: IAttendance) => Promise<{
        id: string;
        studentId: string;
        date: Date;
        status: string;
    }>;
    getStudentAttendanceId: (studentId: string) => Promise<{
        id: string;
        studentId: string;
        date: Date;
        status: string;
    }[]>;
    getAllStudentAttendance: () => Promise<({
        student: {
            class: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            name: string;
            userId: string | null;
            classId: string;
        };
    } & {
        id: string;
        studentId: string;
        date: Date;
        status: string;
    })[]>;
};
//# sourceMappingURL=attendance.service.d.ts.map
import { ITeacher } from "./teacher.interface.js";
export declare const TeacherService: {
    createTeacher: (data: ITeacher) => Promise<{
        id: string;
        name: string;
    }>;
    getAllTeachers: () => Promise<{
        id: string;
        name: string;
    }[]>;
    getSingleTeacher: (id: string) => Promise<{
        id: string;
        name: string;
    } | null>;
};
//# sourceMappingURL=teacher.service.d.ts.map
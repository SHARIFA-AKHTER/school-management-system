import { IClass } from "./class.interface.js";
export declare const ClassService: {
    createClass: (data: IClass) => Promise<{
        id: string;
        name: string;
    }>;
    getAllClasses: () => Promise<({
        students: {
            id: string;
            name: string;
            userId: string | null;
            classId: string;
        }[];
        subjects: {
            id: string;
            name: string;
            classId: string;
        }[];
    } & {
        id: string;
        name: string;
    })[]>;
    getSingleClass: (id: string) => Promise<({
        students: {
            id: string;
            name: string;
            userId: string | null;
            classId: string;
        }[];
    } & {
        id: string;
        name: string;
    }) | null>;
};
//# sourceMappingURL=class.service.d.ts.map
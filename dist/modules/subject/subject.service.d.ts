import { ISubject } from "./subject.interface.js";
export declare const SubjectService: {
    createSubject: (data: ISubject) => Promise<{
        class: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        classId: string;
    }>;
    getAllSubjects: () => Promise<({
        class: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        classId: string;
    })[]>;
    getSingleSubject: (id: string) => Promise<({
        class: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        classId: string;
    }) | null>;
};
//# sourceMappingURL=subject.service.d.ts.map
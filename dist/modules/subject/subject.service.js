import { prisma } from "../../lib/prisma.js";
const createSubject = async (data) => {
    const result = await prisma.subject.create({
        data,
        include: {
            class: true,
        }
    });
    return result;
};
const getAllSubjects = async () => {
    const result = await prisma.subject.findMany({
        include: {
            class: true
        }
    });
    return result;
};
const getSingleSubject = async (id) => {
    const result = await prisma.subject.findUnique({
        where: { id },
        include: {
            class: true
        }
    });
    return result;
};
export const SubjectService = {
    createSubject,
    getAllSubjects,
    getSingleSubject
};
//# sourceMappingURL=subject.service.js.map
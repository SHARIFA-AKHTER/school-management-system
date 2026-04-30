import { prisma } from "../../lib/prisma.js";
const createResult = async (data) => {
    const result = await prisma.result.create({
        data,
        include: {
            student: true,
        },
    });
    return result;
};
const getStudentResults = async (studentId) => {
    const result = await prisma.result.findMany({
        where: { studentId },
        include: {
            student: {
                select: { name: true, classId: true }
            }
        }
    });
    return result;
};
const getAllResults = async () => {
    return await prisma.result.findMany({
        include: {
            student: true,
        },
    });
};
export const ResultService = {
    createResult,
    getStudentResults,
    getAllResults,
};
//# sourceMappingURL=result.service.js.map
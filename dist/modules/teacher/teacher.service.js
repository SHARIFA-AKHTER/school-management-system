import { prisma } from "../../lib/prisma.js";
const createTeacher = async (data) => {
    const result = await prisma.teacher.create({
        data,
    });
    return result;
};
const getAllTeachers = async () => {
    const result = await prisma.teacher.findMany();
    return result;
};
const getSingleTeacher = async (id) => {
    const result = await prisma.teacher.findUnique({
        where: { id },
    });
    return result;
};
export const TeacherService = {
    createTeacher,
    getAllTeachers,
    getSingleTeacher,
};
//# sourceMappingURL=teacher.service.js.map
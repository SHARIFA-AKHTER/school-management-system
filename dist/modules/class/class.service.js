import { prisma } from "../../lib/prisma.js";
const createClass = async (data) => {
    const result = await prisma.class.create({
        data,
    });
    return result;
};
const getAllClasses = async () => {
    const result = await prisma.class.findMany({
        include: {
            students: true,
            subjects: true,
        },
    });
    return result;
};
const getSingleClass = async (id) => {
    const result = await prisma.class.findUnique({
        where: { id },
        include: {
            students: true,
        },
    });
    return result;
};
export const ClassService = {
    createClass,
    getAllClasses,
    getSingleClass,
};
//# sourceMappingURL=class.service.js.map
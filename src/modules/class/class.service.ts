import { prisma } from '../../lib/prisma.js';
import { IClass } from './class.interface.js';

const createClass = async (data: IClass) => {
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

const getSingleClass = async (id: string) => {
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
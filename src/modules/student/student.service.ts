import { prisma } from '../../lib/prisma.js';
import { IStudent } from './student.interface.js';

const createStudent = async (data: IStudent) => {
  const result = await prisma.student.create({
    data: {
      name: data.name,
      userId: data.userId,
      class: {
        connect: {
          id: data.classId,
        },
      },
    },
    include: {
      class: true,
    },
  });

  return result;
};

const getAllStudents = async () => {
  const result = await prisma.student.findMany({
    include: {
      class: true,
    },
  });
  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await prisma.student.findUnique({
    where: { id },
    include: {
      class: true,
    },
  });
  return result;
};

export const StudentService = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
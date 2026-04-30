import { prisma } from "../../lib/prisma.js";
import { ITeacher } from "./teacher.interface.js";


const createTeacher = async (data: ITeacher) => {
  const result = await prisma.teacher.create({
    data,
  });
  return result;
};

const getAllTeachers = async () => {
  const result = await prisma.teacher.findMany();
  return result;
};

const getSingleTeacher = async (id: string) => {
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
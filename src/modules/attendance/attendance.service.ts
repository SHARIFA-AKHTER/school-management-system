import { prisma } from '../../lib/prisma.js';
import { IAttendance } from './attendance.interface.js';

const createAttendance = async (data: IAttendance) => {

  const attendanceDate = new Date(data.date);
  attendanceDate.setHours(0, 0, 0, 0);

  const existingAttendance = await prisma.attendance.findFirst({
    where: {
      studentId: data.studentId,
      date: {
        gte: attendanceDate,
        lt: new Date(attendanceDate.getTime() + 24 * 60 * 60 * 1000),
      },
    },
  });

  if (existingAttendance) {
    throw new Error('Attendance already recorded for this student today!');
  }

  const result = await prisma.attendance.create({
    data: {
      ...data,
      date: attendanceDate,
    },
  });
  return result;
};

const getAllStudentAttendance = async () => {
  const result = await prisma.attendance.findMany({
    include: {
      student: {
        include: {
          class: true, 
        },
      },
    },
    orderBy: {
      date: 'desc',
    },
  });
  return result;
};

const getStudentAttendanceId = async (studentId: string) => {
  return await prisma.attendance.findMany({
    where: { studentId },
    orderBy: { date: 'desc' },
  });
};

export const AttendanceService = {
  createAttendance,
  getStudentAttendanceId,
  getAllStudentAttendance 
};
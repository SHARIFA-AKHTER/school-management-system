import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync.js';
import { AttendanceService } from './attendance.service.js';

const createAttendance = catchAsync(async (req: Request, res: Response) => {
  const result = await AttendanceService.createAttendance(req.body);
  res.status(200).json({
    success: true,
    message: 'Attendance recorded successfully!',
    data: result,
  });
});


const getAllStudentAttendance = catchAsync(async (req: Request, res: Response) => {
  const result = await AttendanceService.getAllStudentAttendance();

  res.status(200).json({
    success: true,
    message: 'All student attendance records fetched successfully',
    meta: {
        total: result.length 
    },
    data: result,
  });
});

const getStudentAttendanceId = catchAsync(async (req: Request, res: Response) => {
  const studentId = req.params.studentId as string;
  const result = await AttendanceService.getStudentAttendanceId(studentId);
  res.status(200).json({
    success: true,
    message: 'Attendance fetched successfully',
    data: result,
  });
});

export const AttendanceController = {
  createAttendance,
  getStudentAttendanceId,
  getAllStudentAttendance 
};
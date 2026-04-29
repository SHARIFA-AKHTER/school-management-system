import { Request, Response } from 'express';
import { TeacherService } from './teacher.service.js';
import catchAsync from '../../utils/catchAsync.js';

const createTeacher = catchAsync(async (req: Request, res: Response) => {
  const result = await TeacherService.createTeacher(req.body);
  res.status(200).json({
    success: true,
    message: 'Teacher created successfully!',
    data: result,
  });
});

const getAllTeachers = catchAsync(async (req: Request, res: Response) => {
  const result = await TeacherService.getAllTeachers();
  res.status(200).json({
    success: true,
    message: 'Teachers fetched successfully',
    data: result,
  });
});

const getSingleTeacher = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await TeacherService.getSingleTeacher(id);

  if (!result) {
    return res.status(404).json({
      success: false,
      message: 'Teacher not found!',
      data: null,
    });
  }

  res.status(200).json({
    success: true,
    message: 'Teacher fetched successfully',
    data: result,
  });
});

export const TeacherController = {
  createTeacher,
  getAllTeachers,
  getSingleTeacher,
};
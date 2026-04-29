import { Request, Response } from 'express';
import { ClassService } from './class.service.js';
import catchAsync from '../../utils/catchAsync.js';

const createClass = catchAsync(async (req: Request, res: Response) => {
  const result = await ClassService.createClass(req.body);
  res.status(200).json({
    success: true,
    message: 'Class created successfully!',
    data: result,
  });
});

const getAllClasses = catchAsync(async (req: Request, res: Response) => {
  const result = await ClassService.getAllClasses();
  res.status(200).json({
    success: true,
    message: 'Classes fetched successfully',
    data: result,
  });
});
const getSingleClass = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id || Array.isArray(id)) {
    throw new Error('Invalid class id');
  }

  const result = await ClassService.getSingleClass(id);

  res.status(200).json({
    success: true,
    message: 'Class fetched successfully',
    data: result,
  });
});

export const ClassController = {
  createClass,
  getAllClasses,
  getSingleClass,
};
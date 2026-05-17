import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import { ExamService } from "./exam.service.js";

const createExam = catchAsync(async(req: Request, res: Response) => {
    const result = await ExamService.createExam(req.body)
    res.status(200).json({
        success:true,
        message:'Exam created successfully!',
        data:result
    })
})

export const ExamController = {
    createExam
}
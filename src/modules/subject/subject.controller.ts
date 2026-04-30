import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { SubjectService } from "./subject.service";

const createSubject = catchAsync(async(req:Request, res:Response) =>{
    const result = await SubjectService.createSubject(req.body)
   res.status(200).json({
    success: true,
    message: 'Subject Create Successfully',
    data: result,
   })
})

const getAllSubjects = catchAsync(async(req:Request, res: Response)=>{
    const result = await SubjectService.getAllSubjects();
    res.status(200).json({
        success: true,
        message: 'Subjects fetched successfully',
        data: result
    })
})

const getSingleSubject = catchAsync(async(req:Request,res: Response)=>{
    const id = req.params.id as string;
    const result = await SubjectService.getSingleSubject(id)
    if(!result){
        return res.status(404).json({
            success: false,
            message: 'subject not Found',
            data: null,
        })
    }
    res.status(200).json({
        success:true,
        message: 'Subject Fetched successfully',
        data: result,
    })
})
export const SubjectController = {
    createSubject,
    getAllSubjects,
    getSingleSubject
}
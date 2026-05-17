import { prisma } from "../../lib/prisma.js"
import { IExamRequest } from "./exam.interface.js"

 const createExam = async(data: IExamRequest)=>{
    const result = await prisma.exam.create({
        data:{
            ...data,
            examDate:new Date(data.examDate)
        }
    })
    return result
 }

 export const ExamService = {
    createExam
 }
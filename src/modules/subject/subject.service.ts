import { prisma } from "../../lib/prisma";
import { ISubject } from "./subject.interface";

const createSubject = async (data: ISubject)=>{
    const result = await prisma.subject.create({
        data,
        include:{
            class: true,
        }
    })
    return result;
}

const getAllSubjects = async ()=>{
    const result = await prisma.subject.findMany({
        include:{
            class: true
        }
    })
    return result
}

const  getSingleSubject = async(id:string)=>{
    const result = await prisma.subject.findUnique({
        where: {id},
        include: {
            class: true
        }
    })
    return result
}
export const SubjectService = {
    createSubject,
    getAllSubjects ,
    getSingleSubject

}
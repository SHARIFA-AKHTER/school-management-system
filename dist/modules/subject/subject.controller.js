import catchAsync from "../../utils/catchAsync.js";
import { SubjectService } from "./subject.service.js";
const createSubject = catchAsync(async (req, res) => {
    const result = await SubjectService.createSubject(req.body);
    res.status(200).json({
        success: true,
        message: 'Subject Create Successfully',
        data: result,
    });
});
const getAllSubjects = catchAsync(async (req, res) => {
    const result = await SubjectService.getAllSubjects();
    res.status(200).json({
        success: true,
        message: 'Subjects fetched successfully',
        data: result
    });
});
const getSingleSubject = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await SubjectService.getSingleSubject(id);
    if (!result) {
        return res.status(404).json({
            success: false,
            message: 'subject not Found',
            data: null,
        });
    }
    res.status(200).json({
        success: true,
        message: 'Subject Fetched successfully',
        data: result,
    });
});
export const SubjectController = {
    createSubject,
    getAllSubjects,
    getSingleSubject
};
//# sourceMappingURL=subject.controller.js.map
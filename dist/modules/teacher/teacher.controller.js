import { TeacherService } from './teacher.service.js';
import catchAsync from '../../utils/catchAsync.js';
const createTeacher = catchAsync(async (req, res) => {
    const result = await TeacherService.createTeacher(req.body);
    res.status(200).json({
        success: true,
        message: 'Teacher created successfully!',
        data: result,
    });
});
const getAllTeachers = catchAsync(async (req, res) => {
    const result = await TeacherService.getAllTeachers();
    res.status(200).json({
        success: true,
        message: 'Teachers fetched successfully',
        data: result,
    });
});
const getSingleTeacher = catchAsync(async (req, res) => {
    const id = req.params.id;
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
//# sourceMappingURL=teacher.controller.js.map
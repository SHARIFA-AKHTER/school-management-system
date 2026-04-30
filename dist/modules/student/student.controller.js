import { StudentService } from './student.service.js';
import catchAsync from '../../utils/catchAsync.js';
const createStudent = catchAsync(async (req, res) => {
    const result = await StudentService.createStudent(req.body);
    res.status(200).json({
        success: true,
        message: 'Student created successfully',
        data: result,
    });
});
const getAllStudents = catchAsync(async (req, res) => {
    const result = await StudentService.getAllStudents();
    res.status(200).json({
        success: true,
        message: 'Students fetched successfully',
        data: result,
    });
});
const getSingleStudent = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await StudentService.getSingleStudent(id);
    if (!result) {
        return res.status(404).json({
            success: false,
            message: 'Student not found!',
            data: null,
        });
    }
    res.status(200).json({
        success: true,
        message: 'Student fetched successfully',
        data: result,
    });
});
export const StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudent
};
//# sourceMappingURL=student.controller.js.map
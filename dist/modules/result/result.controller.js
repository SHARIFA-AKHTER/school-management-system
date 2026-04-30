import { ResultService } from './result.service.js';
import catchAsync from '../../utils/catchAsync.js';
const createResult = catchAsync(async (req, res) => {
    const result = await ResultService.createResult(req.body);
    res.status(200).json({
        success: true,
        message: 'Result published successfully!',
        data: result,
    });
});
const getStudentResults = catchAsync(async (req, res) => {
    const studentId = req.params.studentId;
    const result = await ResultService.getStudentResults(studentId);
    res.status(200).json({
        success: true,
        message: 'Results fetched successfully',
        data: result,
    });
});
const getAllResults = catchAsync(async (req, res) => {
    const result = await ResultService.getAllResults();
    res.status(200).json({
        success: true,
        message: 'All results fetched successfully',
        data: result,
    });
});
export const ResultController = {
    createResult,
    getStudentResults,
    getAllResults,
};
//# sourceMappingURL=result.controller.js.map
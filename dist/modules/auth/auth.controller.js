import catchAsync from '../../utils/catchAsync.js';
import { AuthService } from './auth.service.js';
import sendResponse from '../../utils/sendResponse.js';
;
;
const register = catchAsync(async (req, res) => {
    const result = await AuthService.registerUser(req.body);
    res.cookie("accessToken", result.token, {
        secure: process.env.NODE_ENV === "development",
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User registered successfully",
        data: {
            user: {
                id: result.user.id,
                email: result.user.email,
                needPasswordChange: result.user.needPasswordChange,
            }
        },
    });
});
const login = catchAsync(async (req, res) => {
    const result = await AuthService.loginUser(req.body);
    res.cookie("accessToken", result.token, {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Login successful",
        data: {
            accessToken: result.token,
            needPasswordChange: result.user.needPasswordChange,
        },
    });
});
const getAllUsers = catchAsync(async (req, res) => {
    const result = await AuthService.getAllUsers();
    // Implement logic to get all users
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Users retrieved successfully",
        data: [result],
    });
});
export const AuthController = {
    register,
    login,
    getAllUsers,
};
//# sourceMappingURL=auth.controller.js.map
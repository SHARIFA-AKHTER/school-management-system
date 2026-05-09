import type { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync.js';
import { AuthService } from './auth.service.js';
import sendResponse from '../../utils/sendResponse.js';
;
;

const register = catchAsync(async (req: Request, res: Response) => {
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

const login = catchAsync(async (req: Request, res: Response) => {
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

const googleLogin = catchAsync(async (req: Request, res: Response) => {
  const { email, name } = req.body;
  const result = await AuthService.googleLogin({ email, name });

  res.cookie("accessToken", result.token, {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User logged in Successfully with Google!',
    data: {
      accessToken: result.token,
      user: result.user
    },
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.getAllUsers()
  // Implement logic to get all users
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users retrieved successfully",
    data: [result],
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  const result = await AuthService.updateUser(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User updated successfully",
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  await AuthService.deleteUser(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User deleted successfully",
    data: null,
  });
})

export const AuthController = {
  register,
  login,
  googleLogin,
  getAllUsers,
  updateUser, 
  deleteUser,
};
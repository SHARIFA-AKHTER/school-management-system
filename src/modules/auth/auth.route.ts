import express from 'express';
import { AuthController } from './auth.controller.js';





const router = express.Router();

router.post(
  '/register',
  // validateRequest(AuthValidation.registerSchema),
  AuthController.register
);

router.post(
  '/login',
  // validateRequest(AuthValidation.loginSchema),
  AuthController.login
);

router.get(
  '/users',
  AuthController.getAllUsers
)

export const AuthRoutes = router;
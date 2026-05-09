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

router.post(
  '/google-login',
  AuthController.googleLogin
);

router.get(
  '/users',
  AuthController.getAllUsers
)

router.patch('/users/:id', AuthController.updateUser);
router.delete('/users/:id', AuthController.deleteUser);
export const AuthRoutes = router;
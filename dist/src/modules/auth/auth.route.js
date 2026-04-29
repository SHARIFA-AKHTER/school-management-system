import express from 'express';
import { validateRequest } from '../../middlewares/validate.middleware';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
const router = express.Router();
router.post('/register', validateRequest(AuthValidation.registerSchema), AuthController.register);
router.post('/login', validateRequest(AuthValidation.loginSchema), AuthController.login);
export const AuthRoutes = router;
//# sourceMappingURL=auth.route.js.map
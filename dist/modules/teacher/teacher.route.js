import express from 'express';
import { TeacherController } from './teacher.controller.js';
import { validateRequest } from '../../middlewares/validate.middleware.js';
import { TeacherValidation } from './teacher.validation.js';
const router = express.Router();
router.post('/create-teacher', validateRequest(TeacherValidation.createTeacherZodSchema), TeacherController.createTeacher);
router.get('/', TeacherController.getAllTeachers);
router.get('/:id', TeacherController.getSingleTeacher);
export const TeacherRoutes = router;
//# sourceMappingURL=teacher.route.js.map
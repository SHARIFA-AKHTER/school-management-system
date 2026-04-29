import express from 'express';
import { StudentController } from './student.controller.js';

import { StudentValidation } from './student.validation.js';
import { validateRequest } from '../../middlewares/validate.middleware.js';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(StudentValidation.createStudentZodSchema),
  StudentController.createStudent
);

router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getSingleStudent);

export const StudentRoutes = router;
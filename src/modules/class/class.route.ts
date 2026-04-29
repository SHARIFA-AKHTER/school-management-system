import express from 'express';
import { ClassController } from './class.controller.js';

import { ClassValidation } from './class.validation.js';
import { validateRequest } from '../../middlewares/validate.middleware.js';

const router = express.Router();

router.post(
  '/create-class',
  validateRequest(ClassValidation.createClassZodSchema),
  ClassController.createClass
);

router.get('/', ClassController.getAllClasses);
router.get('/:id', ClassController.getSingleClass);

export const ClassRoutes = router;
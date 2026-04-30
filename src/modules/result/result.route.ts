import express from 'express';
import { ResultController } from './result.controller.js';

import { ResultValidation } from './result.validation.js';
import { validateRequest } from '../../middlewares/validate.middleware.js';

const router = express.Router();

router.post(
  '/add-result',
  validateRequest(ResultValidation.createResultZodSchema),
  ResultController.createResult
);

router.get('/', ResultController.getAllResults);
router.get('/:studentId', ResultController.getStudentResults);

export const ResultRoutes = router;
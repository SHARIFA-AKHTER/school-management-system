import express from 'express';
import { SubjectController } from './subject.controller.js';

import { SubjectValidation } from './subject.validation.js';
import { validateRequest } from '../../middlewares/validate.middleware.js';

const router = express.Router();

router.post(
  '/create-subject',
  validateRequest(SubjectValidation.createSubjectZodSchema),
  SubjectController.createSubject
);

router.get('/', SubjectController.getAllSubjects);
router.get('/:id', SubjectController.getSingleSubject);

export const SubjectRoutes = router;
import surveyController from '@/controllers/survey.controller';
import asyncHandler from '@/middlewares/asyncHandler';
import { Router } from 'express';
const router = Router();

router.post('/', asyncHandler(surveyController.createSurveyAnswer));

export default router;

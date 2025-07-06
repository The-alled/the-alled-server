import assignmentController from '@/controllers/assignment.controller';
import asyncHandler from '@/middlewares/asyncHandler';
import { Router } from 'express';
const router = Router();

router.post('/', asyncHandler(assignmentController.createAssignment));
router.post('/step1', asyncHandler(assignmentController.createAssignmentStep1));
router.get('/:class/:subject', asyncHandler(assignmentController.getAssignmentSubject));
export default router;

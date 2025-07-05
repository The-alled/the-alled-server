import assignmentController from '@/controllers/assignment.controller';
import asyncHandler from '@/middlewares/asyncHandler';
import { Router } from 'express';
const router = Router();

router.post('/', asyncHandler(assignmentController.createAssignment));
router.get('/:class/:subject', asyncHandler(assignmentController.getAssignmentSubject));
export default router;

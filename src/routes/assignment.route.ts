import assignmentController from "@/controllers/assignment.controller";
import asyncHandler from "@/middlewares/asyncHandler";
import { Router } from "express";
const router = Router();

router.post("/", asyncHandler(assignmentController.createAssignment));
export default router;

import { Router } from "express";
import assignmentRouter from "@/routes/assignment.route";
import surveyRouter from "@/routes/survey.route";
const router = Router();

router.use("/assignment", assignmentRouter);
router.use("/survey", surveyRouter);

export default router;

import { Router } from "express";
import assignmentRouter from "@/routes/assignment.route";
const router = Router();

router.use("/assignment", assignmentRouter);

export default router;

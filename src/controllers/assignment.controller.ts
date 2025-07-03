import { Request, Response } from 'express';
import assignmentService from '@/services/assignment.service';
class AssignmentController {
	async createAssignment(req: Request, res: Response) {
		const payload = req.body;
		res.status(201).send(await assignmentService.createAssignment(payload));
	}
}

const assignmentController = new AssignmentController();
export default assignmentController;

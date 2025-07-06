import { Request, Response } from 'express';

import assignmentService from '@/services/assignment.service';
import { BadRequestError } from '@/core/error.response';
import { AssignmentSubjectType } from '@/constant/assignmentSubject.constant';
import { AssignmentSubjectParseError } from '../validation/assignmentSubject.validation';

class AssignmentController {
	async createAssignment(req: Request, res: Response) {
		const payload = req.body;
		res.status(201).send(await assignmentService.createAssignment(payload));
	}
	async createAssignmentStep1(req: Request, res: Response) {
		const payload = req.body;
		res.status(201).send(await assignmentService.createAssignmentStep1(payload));
	}

	async getAssignmentSubject(req: Request, res: Response) {
		const subject = req.params.subject;
		const grade = req.params.class;

		const parseResult = await AssignmentSubjectType.safeParseAsync({ subject, grade });
		if (parseResult.success) {
			res.status(201).send(await assignmentService.getAssignmentSubject(parseResult.data));
		} else {
			throw new BadRequestError(
				JSON.stringify(AssignmentSubjectParseError(parseResult.error.message))
			);
		}
	}
}

const assignmentController = new AssignmentController();
export default assignmentController;

import { Request, Response } from 'express';
import assignmentService from '@/services/assignment.service';
import { BadRequestError } from '@/core/error.response';
import { AssignmentSubjectType } from '@/constant/assignmentSubject.constant';
class AssignmentController {
	async createAssignment(req: Request, res: Response) {
		const payload = req.body;
		res.status(201).send(await assignmentService.createAssignment(payload));
	}
	async getAssignmentSubject(req: Request, res: Response) {
		const subject = req.params.subject;
		const grade = req.params.class;

		const validSubjects: AssignmentSubjectType['subject'][] = ['toan', 'ly', 'hoa', 'sinh'];
		const validGrades: AssignmentSubjectType['class'][] = ['10', '11', '12'];

		if (!validSubjects.includes(subject as any)) {
			throw new BadRequestError('Invalid subject provided');
		}

		if (!validGrades.includes(grade as any)) {
			throw new BadRequestError('Invalid grade provided');
		}

		res.status(201).send(
			await assignmentService.getAssignmentSubject({
				subject: subject as AssignmentSubjectType['subject'],
				class: grade as AssignmentSubjectType['class'],
			})
		);
	}
}

const assignmentController = new AssignmentController();
export default assignmentController;

import { CreatedResponse } from '@/core/success.response';
import problemHandler from '@/config/generateProblem';
import generateContext from '@/utils/generateText';
import { subjectList } from '@/config/subjects';
import * as z from 'zod/v4';
import { AssignmentSubjectType } from '@/constant/assignmentSubject.constant';

class AssignmentService {
	// This service can contain methods to interact with the database or perform business logic related to assignments.
	async createAssignment(data: { fixedPrompt: string; quantity: number }) {
		// Logic to create an assignment
		const createdPrompt = problemHandler(data.fixedPrompt, data.quantity);
		//call google api
		const resultResponse = await generateContext(createdPrompt);

		if (!resultResponse) throw new Error('No internet');

		// await new Promise((res) => setTimeout(res, 300000));

		return new CreatedResponse('Assignment created successfully', {
			resultResponse,
		});
	}

	async createAssignmentStep1(data: any) {
		console.log(data);
		return new CreatedResponse('test', data);
	}

	async getAssignmentSubject(params: z.infer<typeof AssignmentSubjectType>) {
		return new CreatedResponse('Data retrieved', subjectList[params.subject][params.class]);
	}
}

const assignmentService = new AssignmentService();
export default assignmentService;

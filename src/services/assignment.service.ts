import { CreatedResponse } from '@/core/success.response';
import problemHandler from '@/config/generateProblem';
import generateContext from '@/utils/generateTextFile';
import { subjectList } from '@/config/subjects';
import * as z from 'zod/v4';
import { AssignmentSubjectType } from '@/constant/assignmentSubject.constant';
import generateProcess1 from '@/config/generateProcess1';

class AssignmentService {
	// This service can contain methods to interact with the database or perform business logic related to assignments.
	async createAssignment(data: { fixedPrompt: string; quantity: number }) {
		// Logic to create an assignment
		const createdPrompt = problemHandler(data.fixedPrompt, data.quantity);
		//call google api
		// const resultResponse = await generateContext(createdPrompt);

		// if (!resultResponse) throw new Error("No internet");

		// await new Promise((res) => setTimeout(res, 300000));

		// return new CreatedResponse("Assignment created successfully", {
		// 	resultResponse,
		// });
	}

	async createAssignmentStep1(Dulieu: { data: string; path: string[] }) {
		const { data, path } = Dulieu;
		const fullPrompt = generateProcess1(data);
		const aiResult = await generateContext(fullPrompt, path);
		return new CreatedResponse('AI result generated', { aiResult });
	}

	async getAssignmentSubject(data: z.infer<typeof AssignmentSubjectType>) {
		return new CreatedResponse('Data retrieved succesfully', subjectList[data.subject][data.class]);
	}
}

const assignmentService = new AssignmentService();
export default assignmentService;

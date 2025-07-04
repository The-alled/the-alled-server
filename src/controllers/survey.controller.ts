import { Request, Response } from 'express';
import surveyService from '@/services/survey.service';
class SurveyController {
	async createSurveyAnswer(req: Request, res: Response) {
		const payload = req.body;
		res.status(201).send(await surveyService.createAssignment(payload));
	}
}

const surveyController = new SurveyController();
export default surveyController;

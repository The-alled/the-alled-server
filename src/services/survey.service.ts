import { CreatedResponse } from '@/core/success.response';

class SurveyService {
	async createSurveyAnswer(data: string) {
		return new CreatedResponse('test', data);
	}
}

const surveyService = new SurveyService();
export default surveyService;

import { CreatedResponse } from '@/core/success.response';
import { effectivenessQuestions, uxQuestions } from '@/data/questions';
import sql from '@/config/sql';
import { BadRequestError } from '@/core/error.response';

class SurveyService {
	async createSurveyAnswer(data: any) {
		// Create schema and table if they don't exist
		await sql`CREATE SCHEMA IF NOT EXISTS survey`;
		await sql`
      CREATE TABLE IF NOT EXISTS survey.survey (
        "id" SERIAL PRIMARY KEY,
        "Họ và Tên" TEXT,
        "Trường" TEXT,
        "Vai trò" TEXT,
        "Thời gian sử dụng" TEXT,
        "Tần suất sử dụng" TEXT,
        "Hiệu quả câu 1" INTEGER,
        "Hiệu quả câu 2" INTEGER,
        "Hiệu quả câu 3" INTEGER,
        "Hiệu quả câu 4" INTEGER,
        "Hiệu quả câu 5" INTEGER,
        "Hiệu quả câu 6" INTEGER,
        "Hiệu quả câu 7" INTEGER,
        "Hiệu quả câu 8" INTEGER,
        "Lợi ích lớn nhất" TEXT,
        "Khó khăn khi học" TEXT,
        "UX câu 1" INTEGER,
        "UX câu 2" INTEGER,
        "UX câu 3" INTEGER,
        "UX câu 4" INTEGER,
        "UX câu 5" INTEGER,
        "UX câu 6" INTEGER,
        "UX câu 7" INTEGER,
        "UX câu 8" INTEGER,
        "UX câu 9" INTEGER,
        "UX câu 10" INTEGER,
        "UX câu 11" INTEGER,
        "UX câu 12" INTEGER,
        "UX câu 13" INTEGER,
        "UX câu 14" INTEGER,
        "UX câu 15" INTEGER,
        "UX câu 16" INTEGER,
        "UX câu 17" INTEGER,
        "UX câu 18" INTEGER,
        "UX câu 19" INTEGER,
        "UX câu 20" INTEGER,
        "UX câu 21" INTEGER,
        "UX câu 22" INTEGER,
        "UX câu 23" INTEGER,
        "UX câu 24" INTEGER,
        "UX câu 25" INTEGER,
        "UX câu 26" INTEGER,
        "Khả năng giới thiệu" TEXT,
        "Khối lớp" TEXT,
        "Đề xuất tính năng mới" TEXT,
        "Góp ý khác" TEXT
      )
    `;

		const transformedData = { ...data };

		// Insert data into the table
		await sql`
			INSERT INTO survey.survey (
				"Họ và Tên", "Trường", "Vai trò", "Thời gian sử dụng", "Tần suất sử dụng",
				"Hiệu quả câu 1", "Hiệu quả câu 2", "Hiệu quả câu 3", "Hiệu quả câu 4", "Hiệu quả câu 5",
				"Hiệu quả câu 6", "Hiệu quả câu 7", "Hiệu quả câu 8",
				"Lợi ích lớn nhất", "Khó khăn khi học",
				"UX câu 1", "UX câu 2", "UX câu 3", "UX câu 4", "UX câu 5",
				"UX câu 6", "UX câu 7", "UX câu 8", "UX câu 9", "UX câu 10",
				"UX câu 11", "UX câu 12", "UX câu 13", "UX câu 14", "UX câu 15",
				"UX câu 16", "UX câu 17", "UX câu 18", "UX câu 19", "UX câu 20",
				"UX câu 21", "UX câu 22", "UX câu 23", "UX câu 24", "UX câu 25", "UX câu 26",
				"Khả năng giới thiệu", "Khối lớp", "Đề xuất tính năng mới", "Góp ý khác"
			) VALUES (
				${transformedData['Họ và Tên']}, ${transformedData['Trường']}, ${transformedData['Vai trò']},
				${transformedData['Thời gian sử dụng']}, ${transformedData['Tần suất sử dụng']},
				${transformedData['Hiệu quả câu 1']},
				${transformedData['Hiệu quả câu 2']},
				${transformedData['Hiệu quả câu 3']},
				${transformedData['Hiệu quả câu 4']},
				${transformedData['Hiệu quả câu 5']},
				${transformedData['Hiệu quả câu 6']},
				${transformedData['Hiệu quả câu 7']},
				${transformedData['Hiệu quả câu 8']},
				${transformedData['Lợi ích lớn nhất']}, ${transformedData['Khó khăn khi học']},
				${transformedData['UX câu 1']},
				${transformedData['UX câu 2']},
				${transformedData['UX câu 3']},
				${transformedData['UX câu 4']},
				${transformedData['UX câu 5']},
				${transformedData['UX câu 6']},
				${transformedData['UX câu 7']},
				${transformedData['UX câu 8']},
				${transformedData['UX câu 9']},
				${transformedData['UX câu 10']},
				${transformedData['UX câu 11']},
				${transformedData['UX câu 12']},
				${transformedData['UX câu 13']},
				${transformedData['UX câu 14']},
				${transformedData['UX câu 15']},
				${transformedData['UX câu 16']},
				${transformedData['UX câu 17']},
				${transformedData['UX câu 18']},
				${transformedData['UX câu 19']},
				${transformedData['UX câu 20']},
				${transformedData['UX câu 21']},
				${transformedData['UX câu 22']},
				${transformedData['UX câu 23']},
				${transformedData['UX câu 24']},
				${transformedData['UX câu 25']},
				${transformedData['UX câu 26']},
				${transformedData['Khả năng giới thiệu']}, ${transformedData['Khối lớp']},
				${transformedData['Đề xuất tính năng mới']}, ${transformedData['Góp ý khác']}
			)
		`;

		return new CreatedResponse('Survey answer created successfully', transformedData);
	}
}

const surveyService = new SurveyService();
export default surveyService;

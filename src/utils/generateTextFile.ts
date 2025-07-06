import { BadRequestError } from '@/core/error.response';
import {
	createPartFromUri,
	createUserContent,
	GenerateContentConfig,
	GoogleGenAI,
} from '@google/genai';
import path from 'path';

export default async function generateContext(
	prompt: string,
	fileName: string,
	config?: GenerateContentConfig
) {
	const genAi = new GoogleGenAI({
		apiKey: process.env.GOOGLE_API_KEY,
	});

	const myFile = await genAi.files.upload({
		file: path.join(fileName),
	});
	if (!myFile.uri || !myFile.mimeType) throw new BadRequestError('Wrong file type');

	const response = await genAi.models.generateContent({
		model: 'gemini-2.5-pro',
		contents: createUserContent([createPartFromUri(myFile.uri, myFile.mimeType), '\n\n', prompt]),
		config: config ?? {
			temperature: 0.3,
		},
	});

	return response.text;
}

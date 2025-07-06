import { BadRequestError } from '@/core/error.response';
import {
	createPartFromUri,
	createUserContent,
	GenerateContentConfig,
	GoogleGenAI,
	Part,
} from '@google/genai';
import path from 'path';

export default async function generateContext(
	prompt: string,
	fileNames: string[],
	config?: GenerateContentConfig
) {
	const genAi = new GoogleGenAI({
		apiKey: process.env.GOOGLE_API_KEY,
	});

	const fileParts: Part[] = [];

	for (const fileName of fileNames) {
		const myFile = await genAi.files.upload({
			file: path.join(process.cwd(), fileName),
		});
		if (!myFile.uri || !myFile.mimeType) {
			console.error(`Failed to upload or get URI for file: ${fileName}`);
			continue;
		}
		fileParts.push(createPartFromUri(myFile.uri, myFile.mimeType));
	}

	if (fileParts.length === 0) {
		throw new BadRequestError('No files could be processed.');
	}

	const response = await genAi.models.generateContent({
		model: 'gemini-2.5-pro',
		contents: createUserContent([...fileParts, '\n\n', prompt]),
		config: config ?? {
			temperature: 0.3,
		},
	});

	return response.text;
}

import { GoogleGenAI } from '@google/genai';

export default async function generateContext(prompt: string) {
	const genAi = new GoogleGenAI({
		apiKey: process.env.GOOGLE_API_KEY,
	});

	const response = await genAi.models.generateContent({
		model: 'gemini-2.5-pro-exp',
		contents: [
			{
				text: prompt,
			},
		],
	});

	return response.text;
}

import { GenerateContentConfig, GoogleGenAI } from '@google/genai';

export default async function generateContext(prompt: string, config?: GenerateContentConfig) {
	const genAi = new GoogleGenAI({
		apiKey: process.env.GOOGLE_API_KEY,
	});

	const response = await genAi.models.generateContent({
		model: 'gemini-2.5-pro',
		contents: [
			{
				text: prompt,
			},
		],
		config: config ?? {
			temperature: 0.3,
		},
	});

	return response.text;
}

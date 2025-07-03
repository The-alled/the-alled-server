const GoogleGenAI = require('@google/genai');

export default async function generateContext(promt: string) {
	const genAi = new GoogleGenAI({
		apiKey: process.env.GOOGLE_API_KEY,
	});

	const response = await genAi.models.generateContent({
		model: 'gemini-2.5-pro',
		contents: [
			{
				text: promt,
			},
		],
	});

	return response.text;
}

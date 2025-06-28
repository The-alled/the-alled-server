import { GoogleGenAI } from "@google/genai";

export default async function generateContext(promt: string) {
  const genAi = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
  });

  const response = await genAi.models.generateContent({
    model: "gemini-2.5-pro-preview-06-05",
    contents: [
      {
        text: promt,
      },
    ],
  });

  return response.text;
}

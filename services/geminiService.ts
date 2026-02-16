
import { GoogleGenAI, Type } from "@google/genai";

// Use process.env.API_KEY directly for initialization.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMakeupAdvice = async (event: string, skinType: string, mood: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide expert makeup advice for a client attending a ${event}. 
                 The client has ${skinType} skin and wants a ${mood} look. 
                 Focus on modern Habesha beauty elements (glow, defined eyes, gold accents) 
                 and specifically suggest products or techniques used in professional musician/actor styling.
                 Keep the response elegant, professional, and concise.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            themeName: { type: Type.STRING },
            keyAdvice: { type: Type.STRING },
            suggestedProducts: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            proTip: { type: Type.STRING }
          },
          required: ["themeName", "keyAdvice", "suggestedProducts", "proTip"]
        }
      }
    });

    // Extract text output using the .text property directly.
    const text = response.text;
    if (!text) {
      return null;
    }
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Error fetching makeup advice:", error);
    return null;
  }
};
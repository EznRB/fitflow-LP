import { GoogleGenAI } from "@google/genai";

// Initialize Gemini with the API key from environment variables
// This follows the AI Studio standard for React/Vite apps
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export interface WorkoutPlan {
  title: string;
  exercises: { name: string; sets: string; reps: string; tips: string }[];
  aiAdvice: string;
}

export const generateAIWorkout = async (goal: string, level: string): Promise<WorkoutPlan> => {
  const prompt = `
    You are the AI Assistant for FitFlow Caraguá, a high-end gym management system.
    Generate a sample workout plan for a user with the following profile:
    - Goal: ${goal}
    - Experience Level: ${level}

    Return the response in a structured format that I can easily parse. 
    Include a catchy title, 4 core exercises with sets, reps, and a "Pro Tip" for each.
    Also include a brief "AI Coach Insight" at the end.
    
    Keep the tone professional, motivating, and modern.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: prompt,
    });

    const text = response.text || "";
    
    // For this demo, let's just parse the text. 
    // In a real app we'd use responseMimeType: "application/json" but for a landing page demo,
    // a formatted string is often enough if we parse it carefully or just display it.
    // However, to be "modern", let's use the JSON output mode.
    
    return await generateAIWorkoutJson(goal, level);
  } catch (error) {
    console.error("Error generating workout:", error);
    throw error;
  }
};

export const generateAIWorkoutJson = async (goal: string, level: string): Promise<WorkoutPlan> => {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: `Generate a workout plan for goal: ${goal}, level: ${level}.`,
    config: {
      systemInstruction: "You are an expert fitness coach for FitFlow. Return only JSON.",
      responseMimeType: "application/json",
      responseSchema: {
        type: "object" as any,
        properties: {
          title: { type: "string" },
          exercises: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                sets: { type: "string" },
                reps: { type: "string" },
                tips: { type: "string" }
              }
            }
          },
          aiAdvice: { type: "string" }
        }
      }
    }
  });

  return JSON.parse(response.text || "{}");
};

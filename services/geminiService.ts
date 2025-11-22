import { GoogleGenAI, Type } from "@google/genai";
import { PaperSummary } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePaperSummary = async (paperTitle: string, rawText: string): Promise<PaperSummary> => {
  const model = "gemini-2.5-flash"; // Using Flash for speed on standard text tasks
  
  const prompt = `
    You are an expert academic researcher in Operations Research and Call Center management.
    Analyze the following text, which are notes/slides from a research paper titled "${paperTitle}".
    
    Text content:
    """
    ${rawText}
    """
    
    If the text is incomplete, use your internal knowledge about this famous paper to fill in the gaps.
    
    Return a JSON object with the following fields:
    - author: The authors of the paper.
    - journal: The journal and year.
    - doi: The DOI if available, otherwise "N/A".
    - keywords: An array of 3-5 key terms.
    - introduction: A brief 1-2 sentence introduction.
    - problem_conclusion: What problem did they solve and what was the conclusion?
    - new_findings: What were the specific new findings?
    - value_implications: What is the managerial value or implication, specifically for emergency or high-volume call centers?
  `;

  const response = await ai.models.generateContent({
    model: model,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          author: { type: Type.STRING },
          journal: { type: Type.STRING },
          doi: { type: Type.STRING },
          keywords: { type: Type.ARRAY, items: { type: Type.STRING } },
          introduction: { type: Type.STRING },
          problem_conclusion: { type: Type.STRING },
          new_findings: { type: Type.STRING },
          value_implications: { type: Type.STRING }
        },
        required: ["author", "journal", "introduction", "problem_conclusion", "new_findings", "value_implications"]
      }
    }
  });

  if (!response.text) {
    throw new Error("No response from Gemini");
  }

  return JSON.parse(response.text) as PaperSummary;
};

export const generateComparison = async (paper1: string, paper2: string): Promise<string> => {
  // Using Pro for more complex reasoning if comparing papers
  const model = "gemini-3-pro-preview"; 
  
  const prompt = `Compare the methodologies of these two papers in the context of call center optimization: ${paper1} vs ${paper2}. Keep it brief.`;
  
  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
        thinkingConfig: { thinkingBudget: 1024 } // Using thinking for deeper comparison
    }
  });
  
  return response.text || "Could not generate comparison.";
}

import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

const ai1 = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const models = await ai1.models.list();
console.log(models);

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

/* Schemas (KEEP – runtime objects) */

const resumeAnalysisSchema = {
  type: Type.OBJECT,
  properties: {
    overallScore: { type: Type.NUMBER },
    resumeVerdict: { type: Type.STRING },
    extractedKeywords: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    actionableInsights: { type: Type.STRING },
    clarityScore: { type: Type.NUMBER },
    impactScore: { type: Type.NUMBER },
    concisenessScore: { type: Type.NUMBER },
  },
  required: [
    'overallScore',
    'resumeVerdict',
    'extractedKeywords',
    'actionableInsights',
    'clarityScore',
    'impactScore',
    'concisenessScore',
  ],
};

const careerAnalysisSchema = {
  type: Type.OBJECT,
  properties: {
    roleSuitability: { type: Type.STRING },
    recruiterPerspective: { type: Type.STRING },
    skillGaps: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    suggestedCourses: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
  },
  required: [
    'roleSuitability',
    'recruiterPerspective',
    'skillGaps',
    'suggestedCourses',
  ],
};

/* Resume Analysis */

export const analyzeResume = async (resumeFile) => {
  const promptText = `
Act as an expert career coach and professional resume reviewer with ATS experience.
Return JSON strictly following the provided schema.
`;

  try {
    const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: resumeFile.mimeType,
              data: resumeFile.data,
            },
          },
          { text: promptText },
        ],
      },
      config: {
        responseMimeType: 'application/json',
        responseSchema: resumeAnalysisSchema,
      },
    });

    const jsonStr = response.text?.trim();
    if (!jsonStr) throw new Error('Empty Gemini response');

    return JSON.parse(jsonStr);
  } catch (error) {
    console.error('Gemini resume analysis error:', error);
    throw new Error('Failed to analyze resume');
  }
};

/* Career Analysis */

export const analyzeCareerPath = async (resumeFile) => {
  const promptText = `
Act as a senior career counselor and recruiter.
Return JSON strictly following the provided schema.
`;

  try {
    const response = await ai.models.generateContent({
   model: 'gemini-2.5-flash',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: resumeFile.mimeType,
              data: resumeFile.data,
            },
          },
          { text: promptText },
        ],
      },
      config: {
        responseMimeType: 'application/json',
        responseSchema: careerAnalysisSchema,
      },
    });

    const jsonStr = response.text?.trim();
    if (!jsonStr) throw new Error('Empty Gemini response');

    return JSON.parse(jsonStr);
  } catch (error) {
    console.error('Gemini career analysis error:', error);
    throw new Error('Failed to analyze career path');
  }
};
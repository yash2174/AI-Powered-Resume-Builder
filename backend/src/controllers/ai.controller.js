import { analyzeResume, analyzeCareerPath } from '../services/geminiServices.js';

export const analyzeResumeController = async (req, res) => {
  try {
    const result = await analyzeResume(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const analyzeCareerController = async (req, res) => {
  try {
    const result = await analyzeCareerPath(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

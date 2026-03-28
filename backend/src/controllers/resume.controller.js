import Resume from '../models/Resume.model.js';

export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ userId: req.user.id });

    if (!resume) {
      return res.status(404).json({
        message: 'Resume not found for this user.',
      });
    }

    res.json(resume);
  } catch (error) {
    res.status(500).json({
      message: 'Server error fetching resume.',
      error: error.message,
    });
  }
};

export const saveResume = async (req, res) => {
  try {
    const { data, style } = req.body;
    const userId = req.user.id;

    const resume = await Resume.findOneAndUpdate(
      { userId },
      { data, style, userId },
      { new: true, upsert: true }
    );

    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({
      message: 'Server error saving resume.',
      error: error.message,
    });
  }
};

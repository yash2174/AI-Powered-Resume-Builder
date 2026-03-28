const API_URL = 'https://ai-powered-resume-builder-5uwq.onrender.com';

export const resumeService = {
  getResume: async (token) => {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch resume');
    }

    return response.json();
  },

  saveResume: async (resumeState, token) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(resumeState),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to save resume');
    }

    return response.json();
  },
};

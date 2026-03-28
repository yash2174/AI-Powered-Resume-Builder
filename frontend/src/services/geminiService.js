const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const analyzeResume = async (fileData) => {
  const response = await fetch(`${API_BASE_URL}/resume`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fileData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to analyze resume");
  }

  return response.json();
};

export const analyzeCareerPath = async (fileData) => {
  const response = await fetch(`${API_BASE_URL}/career`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fileData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to analyze career path");
  }

  return response.json();
};

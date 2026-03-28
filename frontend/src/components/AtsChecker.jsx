import { useState, useCallback, useEffect } from 'react';
import { analyzeResume } from '../services/geminiService';
import Icon from './common/Icon';



const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
  });

const getVerdictConfig = (verdict = '') => {
  switch (verdict.toLowerCase()) {
    case 'excellent':
      return { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800', ring: '#10b981' };
    case 'good':
      return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800', ring: '#3b82f6' };
    case 'moderate':
      return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800', ring: '#f59e0b' };
    case 'needs improvement':
      return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-100 text-red-800', ring: '#ef4444' };
    default:
      return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', badge: 'bg-gray-100 text-gray-800', ring: '#6b7280' };
  }
};

const ScoreRing = ({ score, color }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setAnimatedScore(current);
      if (current >= score) clearInterval(timer);
    }, 1200 / score);
    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="180" height="180" className="-rotate-90">
        <circle cx="90" cy="90" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="12" />
        <circle
          cx="90" cy="90" r={radius} fill="none"
          stroke={color} strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.05s ease' }}
        />
      </svg>
      <div className="absolute text-center">
        <span className="text-4xl font-black text-gray-800">{animatedScore}</span>
        <span className="text-lg font-bold text-gray-500">/100</span>
      </div>
    </div>
  );
};


const StatBar = ({ label, score, color }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(score), 200);
    return () => clearTimeout(t);
  }, [score]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <span className="text-sm font-bold text-gray-800">{score}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};



const AtsChecker = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (analysisResult) {
      const t = setTimeout(() => setShowResults(true), 100);
      return () => clearTimeout(t);
    }
  }, [analysisResult]);

  const handleFileChange = (file) => {
    if (!file) return;
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowedTypes.includes(file.type)) {
      setError('Invalid file type. Please upload a PDF, DOC, or DOCX file.');
      setResumeFile(null);
      return;
    }
    setResumeFile(file);
    setError(null);
  };

  const onDragOver = useCallback((e) => { e.preventDefault(); setIsDragOver(true); }, []);
  const onDragLeave = useCallback((e) => { e.preventDefault(); setIsDragOver(false); }, []);
  const onDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileChange(e.dataTransfer.files[0]);
  }, []);

  const handleAnalyze = async () => {
    if (!resumeFile) { setError('Please upload your resume file.'); return; }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);
    setShowResults(false);

    try {
      const base64Data = await fileToBase64(resumeFile);
      const result = await analyzeResume({ data: base64Data, mimeType: resumeFile.type });
      setAnalysisResult(result);
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred while analyzing the resume. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResumeFile(null);
    setAnalysisResult(null);
    setError(null);
    setShowResults(false);
  };

  const verdict = analysisResult?.resumeVerdict || '';
  const vc = getVerdictConfig(verdict);

  const insights = analysisResult?.actionableInsights
    ?.split('\n')
    .filter((line) => line.trim().startsWith('- '))
    .map((line) => line.substring(2).trim()) || [];

 
  if (!analysisResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl shadow-lg mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">ATS Resume Checker</h1>
            <p className="mt-2 text-gray-500 text-base">
              Upload your resume and get instant AI-powered ATS analysis
            </p>
          </div>

          {/* Upload Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

            {/* Drop Zone */}
            <div className="p-8">
              <div
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className={`relative border-2 border-dashed rounded-xl p-10 text-center transition-all duration-200 cursor-pointer
                  ${isDragOver
                    ? 'border-primary bg-blue-50 scale-[1.01]'
                    : resumeFile
                    ? 'border-emerald-400 bg-emerald-50'
                    : 'border-gray-200 hover:border-primary hover:bg-blue-50'
                  }`}
                onClick={() => document.getElementById('resume-upload').click()}
              >
                <input
                  type="file"
                  hidden
                  id="resume-upload"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e.target.files[0])}
                />

                {resumeFile ? (
                  <div className="space-y-2">
                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-bold text-gray-800 text-lg truncate max-w-xs mx-auto">{resumeFile.name}</p>
                    <p className="text-sm text-gray-400">{(resumeFile.size / 1024).toFixed(1)} KB — Click to change</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">
                        {isDragOver ? 'Drop your resume here' : 'Drag & drop your resume'}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">or <span className="text-primary font-semibold">browse files</span></p>
                    </div>
                    <p className="text-xs text-gray-300">Supports PDF, DOC, DOCX</p>
                  </div>
                )}
              </div>

              {/* Error */}
              {error && (
                <div className="mt-4 flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-lg p-3">
                  <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Analyze Button */}
              <button
                onClick={handleAnalyze}
                disabled={isLoading || !resumeFile}
                className="mt-6 w-full bg-primary text-white py-3.5 px-6 rounded-xl font-bold text-base
                  hover:opacity-90 active:scale-[0.98] transition-all duration-150
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100
                  flex items-center justify-center gap-2.5 shadow-lg shadow-primary/20"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Analyzing your resume…
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Analyze My Resume
                  </>
                )}
              </button>
            </div>

            {/* Feature hints */}
            <div className="border-t border-gray-50 bg-gray-50 px-8 py-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { label: 'ATS Score', icon: '📊' },
                  { label: 'Keywords', icon: '🔑' },
                  { label: 'Insights', icon: '💡' },
                ].map(({ label, icon }) => (
                  <div key={label} className="text-sm text-gray-400 font-medium">
                    <span className="block text-lg mb-0.5">{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /*  Results Screen  */
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 transition-opacity duration-500 ${showResults ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Header row */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Analysis Results</h1>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Analyze Another
          </button>
        </div>

        {/* Score + Verdict Card */}
        <div className={`bg-white rounded-2xl shadow-lg border ${vc.border} overflow-hidden`}>
          <div className={`${vc.bg} px-8 py-6 flex flex-col sm:flex-row items-center gap-6`}>
            <ScoreRing score={analysisResult.overallScore} color={vc.ring} />
            <div className="text-center sm:text-left">
              <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${vc.badge}`}>
                {verdict}
              </span>
              <h2 className="text-2xl font-black text-gray-900">ATS Compatibility Score</h2>
              <p className={`mt-1 font-medium ${vc.text}`}>
                {analysisResult.overallScore >= 80
                  ? 'Your resume is well-optimized for ATS systems.'
                  : analysisResult.overallScore >= 60
                  ? 'Your resume passes most ATS filters with some room to improve.'
                  : 'Your resume needs optimization to pass ATS screening.'}
              </p>
            </div>
          </div>

          {/* Stat Bars */}
          <div className="px-8 py-6 grid sm:grid-cols-3 gap-5 border-t border-gray-100">
            <StatBar label="Clarity" score={analysisResult.clarityScore} color={vc.ring} />
            <StatBar label="Impact" score={analysisResult.impactScore} color={vc.ring} />
            <StatBar label="Conciseness" score={analysisResult.concisenessScore} color={vc.ring} />
          </div>
        </div>

        {/* Keywords */}
        {analysisResult.extractedKeywords?.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-lg">🔑</span> Detected Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {analysisResult.extractedKeywords.map((kw) => (
                <span
                  key={kw}
                  className="bg-blue-50 text-primary text-sm font-semibold px-3 py-1.5 rounded-full border border-blue-100"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Insights */}
        {insights.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-lg">💡</span> Actionable Insights
            </h3>
            <ul className="space-y-3">
              {insights.map((insight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 text-xs font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{insight}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default AtsChecker;
import { useState, useCallback, useEffect } from 'react';
import { analyzeCareerPath } from '../services/geminiService';
import Icon from './common/Icon';

/*Helper*/
const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
  });

/*Sub Components*/

const ResultCard = ({ icon, title, children, accent = 'blue' }) => {
  const accents = {
    blue: { border: 'border-blue-100', iconBg: 'bg-blue-50', iconColor: 'text-blue-600', headerBg: 'bg-blue-50' },
    emerald: { border: 'border-emerald-100', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600', headerBg: 'bg-emerald-50' },
    amber: { border: 'border-amber-100', iconBg: 'bg-amber-50', iconColor: 'text-amber-600', headerBg: 'bg-amber-50' },
    violet: { border: 'border-violet-100', iconBg: 'bg-violet-50', iconColor: 'text-violet-600', headerBg: 'bg-violet-50' },
  };
  const a = accents[accent];

  return (
    <div className={`bg-white rounded-2xl shadow-md border ${a.border} overflow-hidden`}>
      <div className={`${a.headerBg} px-6 py-4 flex items-center gap-3 border-b ${a.border}`}>
        <div className={`w-9 h-9 rounded-xl ${a.iconBg} flex items-center justify-center flex-shrink-0`}>
          <span className={`text-lg ${a.iconColor}`}>{icon}</span>
        </div>
        <h3 className="text-base font-bold text-gray-800">{title}</h3>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
};

const SkillGapItem = ({ text, index }) => (
  <div className="flex items-start gap-3 py-2.5 border-b border-gray-50 last:border-0">
    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
      <span className="text-amber-700 text-xs font-bold">{index + 1}</span>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
  </div>
);

const CourseItem = ({ text, index }) => (
  <div className="flex items-start gap-3 py-2.5 border-b border-gray-50 last:border-0">
    <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
      <span className="text-violet-700 text-xs font-bold">{index + 1}</span>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
  </div>
);

/*Main Component*/
const ResumeAnalyzer = () => {
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
      const result = await analyzeCareerPath({ data: base64Data, mimeType: resumeFile.type });
      setAnalysisResult(result);
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred while analyzing your career path. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setAnalysisResult(null);
    setResumeFile(null);
    setError(null);
    setShowResults(false);
  };

  /*Upload Screen*/
  if (!analysisResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-indigo-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-600 rounded-2xl shadow-lg mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Career Path Analyzer</h1>
            <p className="mt-2 text-gray-500 text-base">
              Upload your resume and get AI-powered career insights, skill gaps & course recommendations
            </p>
          </div>

          {/* Upload Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8">
              {/* Drop Zone */}
              <div
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className={`relative border-2 border-dashed rounded-xl p-10 text-center transition-all duration-200 cursor-pointer
                  ${isDragOver
                    ? 'border-violet-500 bg-violet-50 scale-[1.01]'
                    : resumeFile
                    ? 'border-emerald-400 bg-emerald-50'
                    : 'border-gray-200 hover:border-violet-400 hover:bg-violet-50'
                  }`}
                onClick={() => document.getElementById('career-resume-upload').click()}
              >
                <input
                  type="file"
                  hidden
                  id="career-resume-upload"
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
                    <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">
                        {isDragOver ? 'Drop your resume here' : 'Drag & drop your resume'}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">or <span className="text-violet-600 font-semibold">browse files</span></p>
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
                className="mt-6 w-full bg-violet-600 text-white py-3.5 px-6 rounded-xl font-bold text-base
                  hover:bg-violet-700 active:scale-[0.98] transition-all duration-150
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100
                  flex items-center justify-center gap-2.5 shadow-lg shadow-violet-200"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Analyzing your career path…
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Analyze My Career Path
                  </>
                )}
              </button>
            </div>

            {/* Feature hints */}
            <div className="border-t border-gray-50 bg-gray-50 px-8 py-4">
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { label: 'Role Fit', icon: '🎯' },
                  { label: 'Recruiter View', icon: '👔' },
                  { label: 'Skill Gaps', icon: '📊' },
                  { label: 'Courses', icon: '🎓' },
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

  /* Results Screen */
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-indigo-50 py-12 px-4 transition-opacity duration-500 ${showResults ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Header row */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Career Analysis</h1>
            <p className="text-sm text-gray-400 mt-0.5">Based on your uploaded resume</p>
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-violet-600 transition-colors bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Analyze Another
          </button>
        </div>

        {/* Role Suitability */}
        <ResultCard icon="🎯" title="Role Suitability" accent="blue">
          <p className="text-gray-600 text-sm leading-relaxed">{analysisResult.roleSuitability}</p>
        </ResultCard>

        {/* Recruiter Perspective */}
        <ResultCard icon="👔" title="Recruiter's Perspective" accent="emerald">
          <p className="text-gray-600 text-sm leading-relaxed">{analysisResult.recruiterPerspective}</p>
        </ResultCard>

        {/* Skill Gaps */}
        {analysisResult.skillGaps?.length > 0 && (
          <ResultCard icon="📊" title="Skill Gap Analysis" accent="amber">
            <div className="divide-y divide-gray-50">
              {analysisResult.skillGaps.map((gap, i) => (
                <SkillGapItem key={i} text={gap} index={i} />
              ))}
            </div>
          </ResultCard>
        )}

        {/* Suggested Courses */}
        {analysisResult.suggestedCourses?.length > 0 && (
          <ResultCard icon="🎓" title="Recommended Courses" accent="violet">
            <div className="divide-y divide-gray-50">
              {analysisResult.suggestedCourses.map((course, i) => (
                <CourseItem key={i} text={course} index={i} />
              ))}
            </div>
          </ResultCard>
        )}

      </div>
    </div>
  );
};

export default ResumeAnalyzer;
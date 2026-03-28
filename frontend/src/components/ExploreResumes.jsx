import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EXPLORE_DOMAINS } from '../constants';
import ResumePreview from './ResumePreview';

const ExploreResumes = () => {
  const domains = Object.keys(EXPLORE_DOMAINS);
  const [activeDomain, setActiveDomain] = useState(domains[0]);

  const activeResumeData = EXPLORE_DOMAINS[activeDomain];

  const previewStyle = {
    templateId: 2,
    color: 'bg-blue-800',
    fontFamily: 'font-sans',
    fontSize: 1,
  };

  const domainIcons = {
    'Software Engineer': '💻',
    'Product Manager': '🎯',
    'DevOps Engineer': '⚙️',
    'Full Stack Developer': '🌐',
    'Cloud Architect': '☁️',
    'Cybersecurity Engineer': '🔐',
    'AI/ML Engineer': '🤖',
    'Data Scientist': '📊',
    'Data Analyst': '📈',
  };

  const getIcon = (domain) => domainIcons[domain] || '📄';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl shadow-lg mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            Explore Resume Templates
          </h1>
          <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
            Browse professionally crafted resumes by domain — pick one and make it yours in seconds.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-24">
              <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Choose Domain
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">{domains.length} templates available</p>
              </div>
              <ul className="p-3 space-y-1">
                {domains.map((domain) => (
                  <li key={domain}>
                    <button
                      onClick={() => setActiveDomain(domain)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl transition-all duration-150 flex items-center gap-3 text-sm font-medium
                        ${activeDomain === domain
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'text-gray-600 hover:bg-blue-50 hover:text-primary'
                        }`}
                    >
                      <span className="text-base flex-shrink-0">{getIcon(domain)}</span>
                      <span className="flex-1 text-left">{domain}</span>
                      {activeDomain === domain && (
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* CTA inside sidebar */}
              <div className="p-4 border-t border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-50">
                <p className="text-xs text-gray-500 mb-3 text-center">Like what you see?</p>
                <Link
                  to="/builder"
                  state={{ resumeData: activeResumeData }}
                  className="w-full bg-primary text-white font-bold py-2.5 px-4 rounded-xl
                    hover:opacity-90 active:scale-[0.98] transition-all duration-150
                    flex items-center justify-center gap-2 text-sm shadow-md shadow-primary/20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit This Resume
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Preview */}
          <main className="lg:w-3/4 w-full">

            {/* Top bar */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 px-6 py-4 mb-6 flex items-center justify-between sticky top-24 z-10">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getIcon(activeDomain)}</span>
                <div>
                  <h3 className="font-bold text-gray-800 text-base">{activeDomain}</h3>
                  <p className="text-xs text-gray-400">Professional resume template</p>
                </div>
              </div>
              <Link
                to="/builder"
                state={{ resumeData: activeResumeData }}
                className="bg-primary text-white font-bold py-2.5 px-6 rounded-xl
                  hover:opacity-90 active:scale-[0.98] transition-all duration-150
                  flex items-center gap-2 text-sm shadow-md shadow-primary/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Use This Template
              </Link>
            </div>

            {/* Resume preview */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 overflow-hidden">
              <ResumePreview data={activeResumeData} style={previewStyle} />
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default ExploreResumes;
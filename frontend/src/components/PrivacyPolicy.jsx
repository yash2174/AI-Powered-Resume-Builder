import { Link } from 'react-router-dom';

const sections = [
  {
    id: '1',
    title: 'Information We Collect',
    content: `We collect information you provide directly to us and information generated through your use of the Service.

Information you provide:
• Account information: email address and password when you register
• Resume content: personal details, work experience, education, skills, and any other information you enter into the resume builder
• Payment information: billing details processed securely through our payment provider (we do not store full card numbers)
• Communications: messages you send us via email or support channels

Information collected automatically:
• Usage data: pages visited, features used, time spent, clicks, and interactions within the Service
• Device information: browser type, operating system, IP address, and device identifiers
• Cookies and similar tracking technologies as described in our Cookie Policy`
  },
  {
    id: '2',
    title: 'How We Use Your Information',
    content: `We use the information we collect to:

• Provide, maintain, and improve the Service
• Process your resume data to generate previews, exports, and AI-powered suggestions
• Send ATS analysis results and career recommendations
• Authenticate your account and keep it secure
• Send transactional emails such as OTP verification and account notifications
• Respond to your comments, questions, and support requests
• Monitor and analyze usage patterns to improve the Service
• Detect, prevent, and address technical issues and fraudulent activity
• Comply with legal obligations

We do not sell your personal information to third parties. We do not use your resume content for any purpose other than providing the Service to you.`
  },
  {
    id: '3',
    title: 'AI Processing of Your Data',
    content: `When you use AI-powered features such as ATS analysis, content suggestions, or career path analysis, your resume content is sent to our AI service provider (Google Gemini API) for processing.

You should be aware that:
• Resume content is transmitted to the AI provider solely for the purpose of generating the requested analysis or suggestions
• We do not permit AI providers to use your data to train their models under our agreements
• AI processing is performed in real-time and results are returned directly to you
• We recommend not including highly sensitive personal information (such as government ID numbers or financial account details) in your resume

By using AI-powered features, you consent to this processing.`
  },
  {
    id: '4',
    title: 'Data Storage and Security',
    content: `Your data is stored securely on our servers. We implement industry-standard security measures including:

• Encryption of data in transit using TLS/HTTPS
• Encryption of sensitive data at rest
• Secure password hashing using bcrypt
• Regular security audits and vulnerability assessments
• Access controls limiting employee access to personal data

Your resume data is stored in our database linked to your account and is retained for as long as your account is active. You can delete your account and associated data at any time through your account settings.

While we implement strong security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.`
  },
  {
    id: '5',
    title: 'Sharing of Information',
    content: `We do not sell, trade, or rent your personal information. We may share your information only in the following limited circumstances:

Service providers: We share data with trusted third-party vendors who assist in operating the Service, including:
• Cloud hosting providers (for data storage and computing)
• AI API providers (for content analysis features)
• Email service providers (for transactional emails)
• Payment processors (for subscription billing)

All service providers are contractually obligated to protect your data and use it only as directed by us.

Legal requirements: We may disclose your information if required by law, subpoena, court order, or other legal process, or if we believe disclosure is necessary to protect our rights or the safety of others.

Business transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.`
  },
  {
    id: '6',
    title: 'Cookies and Tracking',
    content: `We use cookies and similar tracking technologies to enhance your experience. Types of cookies we use:

Essential cookies: Required for the Service to function (authentication tokens, session management). These cannot be disabled.

Analytics cookies: Help us understand how users interact with the Service so we can improve it. These are anonymous and aggregated.

Preference cookies: Remember your settings and preferences across sessions.

You can control cookie settings through your browser preferences. Disabling certain cookies may affect the functionality of the Service. We do not use cookies for advertising or cross-site tracking.`
  },
  {
    id: '7',
    title: 'Your Rights and Choices',
    content: `Depending on your location, you may have the following rights regarding your personal data:

• Access: Request a copy of the personal data we hold about you
• Correction: Request correction of inaccurate or incomplete data
• Deletion: Request deletion of your personal data ("right to be forgotten")
• Portability: Request your data in a structured, machine-readable format
• Objection: Object to certain types of processing of your data
• Restriction: Request restriction of processing in certain circumstances

To exercise any of these rights, contact us at privacy@airesumearchitect.com. We will respond within 30 days. We may need to verify your identity before fulfilling your request.

You may also delete your account directly from your account settings, which will initiate deletion of your personal data within 30 days.`
  },
  {
    id: '8',
    title: 'Data Retention',
    content: `We retain your personal data for as long as your account is active or as needed to provide the Service.

• Account data: Retained for the duration of your account plus 30 days after deletion to allow for recovery
• Resume content: Deleted immediately upon account deletion request
• Usage logs: Retained for up to 12 months for security and analytics purposes
• Payment records: Retained for 7 years as required by financial regulations
• Support communications: Retained for 2 years

After retention periods expire, data is securely deleted or anonymized.`
  },
  {
    id: '9',
    title: 'Children\'s Privacy',
    content: `The Service is not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information without parental consent, please contact us at privacy@airesumearchitect.com.

If we discover that we have inadvertently collected personal information from a child under 16, we will take steps to delete such information promptly.`
  },
  {
    id: '10',
    title: 'International Data Transfers',
    content: `AI Resume Architect operates from the United States. If you are accessing the Service from outside the United States, your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate.

We ensure that such transfers are made with appropriate safeguards in place, including Standard Contractual Clauses approved by relevant authorities where applicable. By using the Service, you consent to the transfer of your information to countries outside your country of residence.`
  },
  {
    id: '11',
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. When we make material changes, we will notify you by:

• Posting the updated policy on this page with a new "Last updated" date
• Sending an email notification to your registered email address
• Displaying a prominent notice within the Service

We encourage you to review this Privacy Policy periodically. Your continued use of the Service after changes take effect constitutes your acceptance of the revised policy.`
  },
  {
    id: '12',
    title: 'Contact & Data Controller',
    content: `AI Resume Architect is the data controller responsible for your personal information.

For privacy-related inquiries, requests, or concerns:

Email: privacy@airesumearchitect.com
Post: AI Resume Architect — Privacy Team, 123 Tech Street, San Francisco, CA 94105, United States

For EU/EEA residents, if you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.

We aim to respond to all privacy inquiries within 30 days.`
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(99,179,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-white/60 hover:text-white transition text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-black text-lg">AI Resume Architect</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-white/50 text-base">Last updated: February 21, 2026 · Effective immediately</p>
          <p className="mt-4 text-white/70 text-sm max-w-2xl leading-relaxed">
            Your privacy matters to us. This policy explains what data we collect, how we use it, and the choices you have. We are committed to being transparent and handling your data responsibly.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar TOC */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-5 sticky top-24">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</h2>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#section-${s.id}`}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition py-1.5 px-2 rounded-lg hover:bg-blue-50 group"
                  >
                    <span className="w-5 h-5 rounded-md bg-gray-100 group-hover:bg-primary/10 text-gray-400 group-hover:text-primary text-xs flex items-center justify-center font-bold flex-shrink-0 transition">
                      {s.id}
                    </span>
                    <span className="truncate">{s.title}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <Link to="/terms"
                  className="flex items-center gap-2 text-sm text-primary font-semibold hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Terms of Service →
                </Link>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 space-y-6">
            {/* GDPR badge */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex gap-4">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-emerald-800 font-semibold mb-1">Our Privacy Commitment</p>
                <p className="text-sm text-emerald-700 leading-relaxed">
                  We never sell your data. Your resume content is yours. We only use your information to provide and improve the Service. You can delete your account and all associated data at any time.
                </p>
              </div>
            </div>

            {/* Quick summary cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '🚫', label: 'No data selling', desc: 'Ever' },
                { icon: '🔐', label: 'Encrypted', desc: 'In transit & at rest' },
                { icon: '🗑️', label: 'Delete anytime', desc: 'Full account removal' },
                { icon: '🌍', label: 'GDPR aware', desc: 'Your rights protected' },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
                  <span className="text-2xl block mb-2">{icon}</span>
                  <p className="text-xs font-bold text-gray-800">{label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                </div>
              ))}
            </div>

            {sections.map((s) => (
              <div key={s.id} id={`section-${s.id}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-black text-sm">{s.id}</span>
                  </div>
                  <h2 className="text-lg font-black text-gray-900">{s.title}</h2>
                </div>
                <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{s.content}</div>
              </div>
            ))}

            {/* Footer note */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-500">
                Privacy questions or requests?{' '}
                <a href="mailto:privacy@airesumearchitect.com" className="text-primary font-semibold hover:underline">
                  Contact our privacy team
                </a>
              </p>
              <p className="text-xs text-gray-400 mt-2">© {new Date().getFullYear()} AI Resume Architect. All rights reserved.</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
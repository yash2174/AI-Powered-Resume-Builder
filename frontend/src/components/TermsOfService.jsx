import { Link } from 'react-router-dom';

const sections = [
  {
    id: '1',
    title: 'Acceptance of Terms',
    content: `By accessing or using AI Resume Architect ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all visitors, users, and others who access the Service.

We reserve the right to update or modify these Terms at any time. We will notify you of significant changes by posting a notice on our website or sending an email to your registered address. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.`
  },
  {
    id: '2',
    title: 'Description of Service',
    content: `AI Resume Architect provides an AI-powered resume building platform that includes:

• Resume creation and editing tools with live preview
• Multiple professionally designed templates
• ATS (Applicant Tracking System) score analysis
• Career path analysis and skill gap recommendations
• PDF export functionality
• Cloud-based resume storage tied to your account

The Service is provided "as is" and we reserve the right to modify, suspend, or discontinue any part of the Service at any time with or without notice.`
  },
  {
    id: '3',
    title: 'User Accounts',
    content: `To access certain features of the Service, you must create an account. You agree to:

• Provide accurate, current, and complete information during registration
• Maintain and promptly update your account information
• Keep your password secure and confidential
• Notify us immediately of any unauthorized use of your account
• Accept responsibility for all activities that occur under your account

You must be at least 16 years of age to create an account. By creating an account, you represent and warrant that you meet this age requirement. We reserve the right to terminate accounts that violate these Terms.`
  },
  {
    id: '4',
    title: 'Acceptable Use',
    content: `You agree to use the Service only for lawful purposes. You must not:

• Upload, post, or transmit any content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable
• Impersonate any person or entity or misrepresent your affiliation with any person or entity
• Attempt to gain unauthorized access to any part of the Service or its related systems
• Use the Service to transmit spam, chain letters, or other unsolicited communications
• Reverse engineer, decompile, or disassemble any part of the Service
• Use automated scripts or bots to scrape or interact with the Service
• Violate any applicable local, national, or international laws or regulations`
  },
  {
    id: '5',
    title: 'Intellectual Property',
    content: `The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of AI Resume Architect and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of AI Resume Architect.

Content you create using the Service — including your resume data, descriptions, and custom text — remains your intellectual property. By using the Service, you grant us a limited, non-exclusive license to store, process, and display your content solely for the purpose of providing the Service to you.`
  },
  {
    id: '6',
    title: 'AI-Generated Content',
    content: `The Service uses artificial intelligence to assist in generating resume content, ATS analysis, and career recommendations. You acknowledge that:

• AI-generated content is provided as a suggestion only and should be reviewed for accuracy
• We do not guarantee that AI-generated content is error-free, complete, or suitable for your specific circumstances
• You are solely responsible for reviewing, editing, and verifying all content before submitting your resume to employers
• AI-generated content may not be unique and similar suggestions may be provided to other users`
  },
  {
    id: '7',
    title: 'Payment and Billing',
    content: `Certain features of the Service may be offered on a paid subscription basis. If you choose a paid plan:

• You authorize us to charge your payment method on a recurring basis for the applicable subscription fee
• Subscriptions automatically renew unless cancelled before the renewal date
• Refunds are provided at our discretion and evaluated on a case-by-case basis
• We reserve the right to change pricing with 30 days' notice to existing subscribers
• Free tier features are provided at our discretion and may be modified or discontinued at any time`
  },
  {
    id: '8',
    title: 'Disclaimer of Warranties',
    content: `The Service is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

We do not warrant that:
• The Service will be uninterrupted, timely, secure, or error-free
• The results obtained from use of the Service will be accurate or reliable
• Any errors in the Service will be corrected
• Using the Service will result in employment or interview opportunities`
  },
  {
    id: '9',
    title: 'Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, AI Resume Architect and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:

• Your access to or use of (or inability to access or use) the Service
• Any conduct or content of any third party on the Service
• Any content obtained from the Service
• Unauthorized access, use, or alteration of your transmissions or content

In no event shall our total liability to you exceed the amount you paid us in the twelve months preceding the claim.`
  },
  {
    id: '10',
    title: 'Termination',
    content: `We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination:

• Your right to use the Service will immediately cease
• We may delete your account data after a reasonable retention period
• All provisions of these Terms which by their nature should survive termination shall survive

You may terminate your account at any time by contacting us or using the account deletion feature in your settings.`
  },
  {
    id: '11',
    title: 'Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Delaware.

If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms will otherwise remain in full force and effect.`
  },
  {
    id: '12',
    title: 'Contact Us',
    content: `If you have any questions about these Terms of Service, please contact us at:

Email: legal@airesumearchitect.com
Address: AI Resume Architect, 123 Tech Street, San Francisco, CA 94105, United States

We aim to respond to all legal inquiries within 5 business days.`
  },
];

const TermsOfService = () => {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-black text-lg">AI Resume Architect</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Terms of Service</h1>
          <p className="mt-3 text-white/50 text-base">Last updated: February 21, 2026 · Effective immediately</p>
          <p className="mt-4 text-white/70 text-sm max-w-2xl leading-relaxed">
            Please read these Terms carefully before using our Service. They govern your use of AI Resume Architect and outline both your rights and responsibilities.
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
                <Link to="/privacy"
                  className="flex items-center gap-2 text-sm text-primary font-semibold hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Privacy Policy →
                </Link>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 space-y-6">
            {/* Intro notice */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>Summary:</strong> By using AI Resume Architect, you agree to use the platform responsibly, keep your account secure, and understand that while we do our best to provide accurate AI assistance, you are responsible for reviewing all resume content before use.
              </p>
            </div>

            {sections.map((s) => (
              <div key={s.id} id={`section-${s.id}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-black text-sm">{s.id}</span>
                  </div>
                  <h2 className="text-lg font-black text-gray-900">{s.title}</h2>
                </div>
                <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{s.content}</div>
              </div>
            ))}

            {/* Footer note */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-500">
                Questions about these terms?{' '}
                <a href="mailto:legal@airesumearchitect.com" className="text-primary font-semibold hover:underline">
                  Contact our legal team
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

export default TermsOfService;
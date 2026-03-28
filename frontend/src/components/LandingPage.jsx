import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Icon from './common/Icon';

/*Animated Counter */
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev + step >= target) { clearInterval(timer); return target; }
        return prev + step;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count.toLocaleString()}{suffix}</span>;
};

/*Feature Card */
const FeatureCard = ({ icon, title, desc, gradient, delay }) => (
  <div
    className="group relative bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    style={{ animationDelay: delay }}
  >
    <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center mb-4 shadow-sm`}>
      <span className="text-2xl">{icon}</span>
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </div>
);

/*Step*/
const Step = ({ number, title, desc, icon }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-6">
      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-black">{number}</span>
      </div>
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{desc}</p>
  </div>
);

/*Testimonial*/
const Testimonial = ({ quote, name, role, avatar }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
    <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
        {avatar}
      </div>
      <div>
        <p className="font-bold text-gray-900 text-sm">{name}</p>
        <p className="text-gray-400 text-xs">{role}</p>
      </div>
    </div>
  </div>
);

/*Main Component */
const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-800 overflow-x-hidden">

    
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(99,179,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">AI-Powered Resume Builder</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
            Build Resumes That
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Get You Hired
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed">
            Craft ATS-optimized, recruiter-ready resumes in minutes with AI assistance,
            live previews, and professionally designed templates.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/builder"
              className="group bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-base transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 flex items-center gap-2"
            >
              Start Building Free
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/explore"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-8 rounded-xl text-base transition-all duration-200 backdrop-blur-sm"
            >
              View Templates
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: 50000, suffix: '+', label: 'Resumes Created' },
              { value: 95, suffix: '%', label: 'ATS Pass Rate' },
              { value: 9, suffix: '', label: 'Domain Templates' },
            ].map(({ value, suffix, label }) => (
              <div key={label}>
                <div className="text-3xl font-black text-white">
                  <Counter target={value} suffix={suffix} />
                </div>
                <div className="text-white/50 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path fill="white" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Features</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">Everything You Need to Stand Out</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Powerful tools designed to make your resume the one that gets the callback.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon="🤖" title="AI-Powered Content" gradient="bg-blue-50"
              desc="Smart suggestions to enhance clarity, impact, and keyword density tailored to your target role." delay="0ms" />
            <FeatureCard icon="👁️" title="Live Resume Preview" gradient="bg-indigo-50"
              desc="See every edit reflected instantly on your resume. What you see is exactly what you download." delay="50ms" />
            <FeatureCard icon="🎯" title="ATS Score Checker" gradient="bg-emerald-50"
              desc="Upload your resume and get an instant AI-powered ATS compatibility score with actionable improvements." delay="100ms" />
            <FeatureCard icon="🗂️" title="9 Domain Templates" gradient="bg-amber-50"
              desc="Professionally crafted resume templates for Software, Data, Cloud, Cybersecurity, AI/ML, and more." delay="150ms" />
            <FeatureCard icon="🎨" title="Full Style Control" gradient="bg-rose-50"
              desc="Customize colors, fonts, font sizes, and layouts to match your personal brand perfectly." delay="200ms" />
            <FeatureCard icon="📄" title="One-Click PDF Export" gradient="bg-violet-50"
              desc="Download a pixel-perfect, print-ready PDF that looks exactly like your live preview." delay="250ms" />
            <FeatureCard icon="💾" title="Auto-Save" gradient="bg-cyan-50"
              desc="Your progress is automatically saved so you never lose your work between sessions." delay="300ms" />
            <FeatureCard icon="🔭" title="Career Path Analyzer" gradient="bg-teal-50"
              desc="Get recruiter perspective, skill gap analysis, and course recommendations based on your resume." delay="350ms" />
            <FeatureCard icon="📱" title="Fully Responsive" gradient="bg-orange-50"
              desc="Edit and preview your resume on any device — desktop, tablet, or mobile." delay="400ms" />
          </div>
        </div>
      </section>

    
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">Your Dream Resume in 4 Steps</h2>
            <p className="text-gray-500 mt-3">Simple, fast, and designed for results.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-10 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />
            <Step number="1" icon="🗂️" title="Pick a Template" desc="Choose from 9 domain-specific professionally crafted resume templates." />
            <Step number="2" icon="✏️" title="Edit Your Content" desc="Fill in your details with AI assistance for maximum impact." />
            <Step number="3" icon="🎨" title="Customize Style" desc="Pick colors, fonts, and sizes to match your personal brand." />
            <Step number="4" icon="⬇️" title="Download & Apply" desc="Export a perfect PDF and start landing interviews immediately." />
          </div>
        </div>
      </section>


      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Templates</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">Built for Every Tech Career</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Pre-filled with industry-specific content so you start miles ahead.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: '💻', label: 'Software Engineer' },
              { icon: '🌐', label: 'Full Stack Dev' },
              { icon: '🤖', label: 'AI/ML Engineer' },
              { icon: '📊', label: 'Data Scientist' },
              { icon: '📈', label: 'Data Analyst' },
              { icon: '☁️', label: 'Cloud Architect' },
              { icon: '🔐', label: 'Cybersecurity' },
              { icon: '⚙️', label: 'DevOps Engineer' },
              { icon: '🎯', label: 'Product Manager' },
            ].map(({ icon, label }) => (
              <Link
                key={label}
                to="/explore"
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 text-center"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{icon}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">{label}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/explore"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-xl hover:opacity-90 transition shadow-lg shadow-primary/20">
              Explore All Templates
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/*TESTIMONIALS*/}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">Loved by Job Seekers</h2>
            <p className="text-gray-500 mt-3">Real results from real people who landed their dream roles.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial
              quote="Got 3 interview calls within a week of using this builder. The ATS checker was a game changer — my score went from 62% to 91%!"
              name="Ananya Sharma" role="Software Engineer at Google" avatar="AS" />
            <Testimonial
              quote="The domain templates for Data Science saved me hours. Had a polished, recruiter-ready resume in under 20 minutes."
              name="Marcus T." role="Data Scientist at Meta" avatar="MT" />
            <Testimonial
              quote="The career path analyzer showed me exactly which skills I was missing. Took two courses, updated my resume, and landed the job."
              name="Priya Nair" role="Cloud Architect at AWS" avatar="PN" />
          </div>
        </div>
      </section>

      {/*CTA*/}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(99,179,237,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500 opacity-10 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to Land Your
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Dream Job?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Join 50,000+ professionals who built their resumes with AI Resume Architect.
          </p>
          <Link
            to="/builder"
            className="inline-flex items-center gap-2 bg-white text-primary font-black py-4 px-10 rounded-xl text-lg hover:bg-blue-50 transition-all shadow-2xl hover:scale-105"
          >
            Build My Resume — It's Free
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/*FOOTER */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="font-bold text-lg">AI Resume Architect</span>
            </div>

            <div className="flex gap-6 text-sm text-white/50">
              <Link to="/builder" className="hover:text-white transition">Builder</Link>
              <Link to="/explore" className="hover:text-white transition">Templates</Link>
              <Link to="/ats-checker" className="hover:text-white transition">ATS Checker</Link>
              <Link to="/analyzer" className="hover:text-white transition">Career Analyzer</Link>
            </div>

            <p className="text-white/30 text-sm">© {new Date().getFullYear()} AI Resume Architect</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
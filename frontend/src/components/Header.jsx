import { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Icon from './common/Icon';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (isLandingPage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isLandingPage]);

  const headerClasses =
    isLandingPage && !isScrolled
      ? 'bg-transparent shadow-none'
      : 'bg-white/80 backdrop-blur-md shadow-sm';

  const linkColorClasses =
    isLandingPage && !isScrolled
      ? 'text-white hover:text-gray-200'
      : 'text-gray-600 hover:text-primary';

  const activeLinkClasses =
    isLandingPage && !isScrolled
      ? 'bg-white/10'
      : 'text-primary bg-blue-100';

  const buttonClasses =
    isLandingPage && !isScrolled
      ? 'text-white border-white/50 hover:bg-white/10'
      : 'text-primary border-primary/50 hover:bg-blue-50';

  const linkClasses = `transition duration-300 px-3 py-2 rounded-md text-sm font-medium ${linkColorClasses}`;
  const logoColorClass = isLandingPage && !isScrolled ? 'text-white' : 'text-primary';
  const mobileButtonColorClass =
    isLandingPage && !isScrolled
      ? 'text-white hover:bg-white/10'
      : 'text-gray-400 hover:text-white hover:bg-gray-700';

  return (
    <header className={`${headerClasses} fixed w-full top-0 z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to={isAuthenticated ? '/builder' : '/'} className="flex items-center gap-2">
  {/* Logo Icon */}
  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  </div>
  <span className={`text-xl font-bold ${logoColorClass}`}>
    AI Resume Architect
  </span>
</NavLink>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <NavLink to="/builder" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                  Resume Builder
                </NavLink>
                <NavLink to="/explore" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                  Explore
                </NavLink>
                <NavLink to="/ats-checker" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                  ATS Checker
                </NavLink>
                <NavLink to="/resume-analyzer" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                  AI Analyzer
                </NavLink>
                <button onClick={logout} className={`${linkClasses} flex items-center gap-2`}>
                  <Icon name="logout" className="w-4 h-4" /> Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={linkClasses}>Login</NavLink>
                <NavLink
                  to="/signup"
                  className={`border px-4 py-1.5 rounded-md text-sm font-medium transition ${buttonClasses}`}
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${mobileButtonColorClass}`}
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden ${isLandingPage && !isScrolled ? 'bg-primary/95' : 'bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {isAuthenticated ? (
              <>
                <NavLink to="/builder" className={`block ${linkClasses}`}>Resume Builder</NavLink>
                <NavLink to="/explore" className={`block ${linkClasses}`}>Explore</NavLink>
                <NavLink to="/ats-checker" className={`block ${linkClasses}`}>ATS Checker</NavLink>
                <NavLink to="/resume-analyzer" className={`block ${linkClasses}`}>AI Analyzer</NavLink>
                <button onClick={logout} className={`block w-full text-left ${linkClasses}`}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={`block ${linkClasses}`}>Login</NavLink>
                <NavLink to="/signup" className={`block ${linkClasses}`}>Sign Up</NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

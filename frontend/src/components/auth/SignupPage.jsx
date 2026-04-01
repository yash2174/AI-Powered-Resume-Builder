import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [timer, setTimer] = useState(600);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
  if (!otpStep) return;

  if (timer === 0) {
    setCanResend(true);
    return;
  }

  const interval = setInterval(() => {
    setTimer((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(interval);
}, [timer, otpStep]);

  const getStrength = () => {
    if (!password) return null;
    if (password.length < 6) return 'Weak';
    if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[@$!%*?&]/.test(password)) return 'Strong';
    return 'Medium';
  };

  const strengthConfig = {
    Weak:   { color: 'bg-red-500',    width: 'w-1/3', text: 'text-red-500' },
    Medium: { color: 'bg-amber-500',  width: 'w-2/3', text: 'text-amber-500' },
    Strong: { color: 'bg-emerald-500',width: 'w-full', text: 'text-emerald-500' },
  };

  const strength = getStrength();
  const sc = strength ? strengthConfig[strength] : null;

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) { toast.error('Passwords do not match'); return; }
    setIsLoading(true);
    try {
      const res = await authService.signup(email, password);
      toast.success(res.message);
      setOtpStep(true);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { token, user } = await authService.verifyOTP(email, otp);
      login(token, user);
      toast.success('Account verified successfully 🎉');
      navigate('/builder');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }

  };
  const handleResendOTP = async () => {
  try {
    setIsLoading(true);
    await authService.resendOTP(email);
    toast.success("OTP resent");

    setTimer(600);
    setCanResend(false);
  } catch (err) {
    toast.error(err.message);
  } finally {
    setIsLoading(false);
  }
};
  const formatTime = (sec) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

  return (
    <div className="min-h-screen flex">

      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex-col items-center justify-center p-12 overflow-hidden">

        {/* Grid background */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(99,179,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Glowing orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl" />

        <div className="relative z-10 text-center max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-white font-black text-xl">AI Resume Architect</span>
          </div>

          <h2 className="text-4xl font-black text-white leading-tight mb-4">
            Start Building Resumes That
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Get You Hired</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            Join 50,000+ professionals who use AI Resume Architect to land their dream roles faster.
          </p>

          {/* Feature list */}
          <div className="space-y-4 text-left">
            {[
              { icon: '🤖', text: 'AI-powered content suggestions' },
              { icon: '🎯', text: 'ATS score checker & optimizer' },
              { icon: '🗂️', text: '9 domain-specific templates' },
              { icon: '📄', text: 'One-click PDF download' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">{icon}</span>
                </div>
                <span className="text-white/70 text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { value: '50K+', label: 'Users' },
              { value: '95%', label: 'ATS Rate' },
              { value: 'Free', label: 'To Start' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-white/40 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-12">
        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="flex items-center justify-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-black text-gray-900 text-lg">AI Resume Architect</span>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

            {!otpStep ? (
              <>
                <div className="mb-8">
                  <h1 className="text-2xl font-black text-gray-900">Create your account</h1>
                  <p className="text-gray-400 text-sm mt-1">Start building your dream resume today — it's free.</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-5">

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                      <input
                        type="email" required placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'} required placeholder="Min. 8 characters"
                        className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition">
                        {showPassword ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Strength bar */}
                    {strength && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-400">Password strength</span>
                          <span className={`text-xs font-semibold ${sc.text}`}>{strength}</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full transition-all duration-500 ${sc.color} ${sc.width}`} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Confirm password</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <input
                        type="password" required placeholder="Re-enter your password"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition ${
                          confirmPassword && confirmPassword !== password ? 'border-red-300 bg-red-50' : 'border-gray-200'
                        }`}
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {confirmPassword && confirmPassword === password && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {confirmPassword && confirmPassword !== password && (
                      <p className="text-red-500 text-xs mt-1">Passwords don't match</p>
                    )}
                  </div>

                  <button type="submit" disabled={isLoading}
                    className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending OTP…
                      </>
                    ) : 'Create Account'}
                  </button>
                </form>
              </>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📧</span>
                  </div>
                  <h1 className="text-2xl font-black text-gray-900">Check your email</h1>
                  <p className="text-gray-400 text-sm mt-2">
                    We sent a 6-digit OTP to <span className="font-semibold text-gray-700">{email}</span>
                  </p>
                </div>

                <form onSubmit={handleVerifyOTP} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 text-center">Enter OTP</label>
                    <input
                      type="text" required placeholder="• • • • • •" maxLength={6}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl text-center text-2xl font-black tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    />
                   <p className="text-xs text-gray-400 text-center mt-2">
                  {canResend
                ? "OTP expired. You can resend now."
                 : `Resend OTP in ${formatTime(timer)}`}
                  </p>
                  </div>

                  <button type="submit" disabled={isLoading || otp.length < 6}
                    className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Verifying…
                      </>
                    ) : 'Verify & Continue'}
                  </button>
                  <button
                          type="button"
                          onClick={handleResendOTP}
                               disabled={!canResend || isLoading}
                                            >
                          Resend OTP
                          </button>

                  <button type="button" onClick={() => setOtpStep(false)}
                    className="w-full text-sm text-gray-400 hover:text-gray-600 transition py-2">
                    ← Back to signup
                  </button>
                </form>
              </>
            )}

            <p className="text-center text-sm mt-6 text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-bold hover:underline">Sign in</Link>
            </p>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
  By creating an account, you agree to our{' '}
  <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
  {' '}and{' '}
  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
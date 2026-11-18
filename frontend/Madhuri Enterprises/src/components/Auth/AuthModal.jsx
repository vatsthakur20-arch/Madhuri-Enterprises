import { useState } from 'react';
import { X, User, Mail, Lock, Phone, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AuthModal({ onClose }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
  const [localError, setLocalError] = useState('');
  const { login, register, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    let result;
    if (mode === 'login') {
      result = await login(form.email, form.password);
    } else {
      if (!form.name) { setLocalError('Name is required'); return; }
      result = await register(form.name, form.email, form.password, form.phone);
    }
    if (result.success) {
      onClose();
    } else {
      setLocalError(result.message);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="bg-white rounded-3xl overflow-hidden max-w-md w-full mx-4 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="relative p-6 text-center"
          style={{ background: 'linear-gradient(135deg, #B50916, #E8460A, #FF8C00)' }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
          >
            <X size={16} />
          </button>
          <div
            className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-black border-4 border-white/30"
            style={{ background: 'rgba(0,0,0,0.2)' }}
          >
            JBJ
          </div>
          <h2 className="text-xl font-black text-white">
            {mode === 'login' ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p className="text-white/80 text-sm mt-1">Jay Baba Ji Agarbatti</p>
        </div>

        <div className="p-6">
          {/* Toggle tabs */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            {['login', 'register'].map(m => (
              <button
                key={m}
                onClick={() => { setMode(m); setLocalError(''); }}
                className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  background: mode === m ? 'white' : 'transparent',
                  color: mode === m ? '#B50916' : '#6b7280',
                  boxShadow: mode === m ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                {m === 'login' ? 'Login' : 'Register'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {mode === 'register' && (
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50"
                />
              </div>
            )}

            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                placeholder="Email Address *"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50"
              />
            </div>

            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Password *"
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(s => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {mode === 'register' && (
              <div className="relative">
                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50"
                />
              </div>
            )}

            {localError && (
              <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-xl px-4 py-2.5 border border-red-100">
                <AlertCircle size={14} />
                {localError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-70"
              style={{ background: 'linear-gradient(135deg, #B50916, #E8460A)' }}
            >
              {loading ? (
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
              ) : (
                <User size={16} />
              )}
              {loading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

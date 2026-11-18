import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('jaybabaji_user');
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (email, password) => {
    setLoading(true); setError('');
    try {
      const res = await authAPI.login({ email, password });
      const userData = res.data;
      localStorage.setItem('jaybabaji_token', userData.token);
      localStorage.setItem('jaybabaji_user', JSON.stringify(userData));
      setUser(userData);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, message: err.message };
    } finally { setLoading(false); }
  };

  const register = async (name, email, password, phone) => {
    setLoading(true); setError('');
    try {
      const res = await authAPI.register({ name, email, password, phone });
      const userData = res.data;
      localStorage.setItem('jaybabaji_token', userData.token);
      localStorage.setItem('jaybabaji_user', JSON.stringify(userData));
      setUser(userData);
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, message: err.message };
    } finally { setLoading(false); }
  };

  const logout = () => {
    localStorage.removeItem('jaybabaji_token');
    localStorage.removeItem('jaybabaji_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

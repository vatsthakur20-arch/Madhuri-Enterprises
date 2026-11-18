const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getToken = () => localStorage.getItem('jaybabaji_token');

const request = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${endpoint}`, { ...options, headers });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || 'Something went wrong');
  return data;
};

// ─── Auth ─────────────────────────────────────────────────────────────────────
export const authAPI = {
  register: (body) => request('/auth/register', { method: 'POST', body: JSON.stringify(body) }),
  login:    (body) => request('/auth/login',    { method: 'POST', body: JSON.stringify(body) }),
  getMe:    ()     => request('/auth/me'),
  updateProfile: (body) => request('/auth/profile', { method: 'PUT', body: JSON.stringify(body) }),
};

// ─── Products ─────────────────────────────────────────────────────────────────
export const productAPI = {
  getAll: () => request('/products'),
  getOne: (id) => request(`/products/${id}`),
  seed:   () => request('/products/seed', { method: 'POST' }),
};

// ─── Orders ───────────────────────────────────────────────────────────────────
export const orderAPI = {
  create:     (body) => request('/orders',     { method: 'POST', body: JSON.stringify(body) }),
  getMyOrders: ()    => request('/orders/my'),
  getAll:      ()    => request('/orders'),
};

// ─── Contact ──────────────────────────────────────────────────────────────────
export const contactAPI = {
  submit: (body) => request('/contact', { method: 'POST', body: JSON.stringify(body) }),
};

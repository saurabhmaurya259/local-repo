// src/pages/AdminLogin.jsx
import { useState } from 'react';
import AuthCard from '../components/AuthCard';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin login attempt:', { email, password });
    // → admin-specific login logic here (different endpoint, role check, etc.)
  };

  return (
   <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100">
      <AuthCard title="Admin Portal" subtitle="Restricted administrative access">
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Admin Email"
            id="email"
            type="email"
            placeholder="admin@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <InputField
            label="Password"
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            isPassword={true}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-slate-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2">Remember this device</span>
            </label>

            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
              Forgot password?
            </a>
          </div>

          <Button type="submit" className="py-3 text-base font-medium w-full bg-primary-600 hover:bg-primary-700">
            Sign in as Administrator
          </Button>

          <p className="text-center text-sm text-slate-500 mt-6 pt-4 border-t border-slate-200">
            This area is restricted to authorized personnel only.
          </p>
        </form>
      </AuthCard>
    </div>
  );
}
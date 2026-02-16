// src/pages/UserLogin.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../components/AuthCard';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function UserLogin({ onShowRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User login attempt:', { email, password });
  };

  return (
    <AuthCard title="Welcome Back" subtitle="Sign in to your account">
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Admin access link - placed prominently at top */}
        <div className="flex justify-end mb-4">
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Admin Login</span>
          </Link>
        </div>

        <InputField
          label="Email Address"
          id="email"
          type="email"
          placeholder="name@company.com"
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
            <span className="ml-2">Remember me</span>
          </label>
          <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
            Forgot password?
          </a>
        </div>

        <Button type="submit" className="py-3 text-base font-medium">
          Sign In
        </Button>

        <p className="text-center text-sm text-slate-600 mt-4">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onShowRegister}
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            Create account
          </button>
        </p>
      </form>
    </AuthCard>
  );
}
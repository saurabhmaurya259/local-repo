// src/pages/Register.jsx
import { useState } from 'react';
import AuthCard from '../components/AuthCard';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function Register({ onBackToLogin }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    designation: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) return setError('Full name is required');
    if (!form.email.includes('@')) return setError('Please enter a valid email');
    if (form.password !== form.confirmPassword) return setError("Passwords don't match");
    if (form.password.length < 8) return setError('Password must be at least 8 characters');

    console.log('Register payload:', form);
    // → send to backend
  };

  return (
    <AuthCard title="Create Account" subtitle="Get started with your workspace">
      <form onSubmit={handleSubmit} className="space-y-2">
        <InputField
          label="Full Name"
          id="name"
          name="name"
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange}
          required
        />

        <InputField
          label="Email Address"
          id="email"
          name="email"
          type="email"
          placeholder="john@company.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <InputField
          label="Designation"
          id="designation"
          name="designation"
          placeholder="Software Engineer / Manager"
          value={form.designation}
          onChange={handleChange}
          required
        />

        <InputField
          label="Phone Number"
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <InputField
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          required
          isPassword={true}
        />

        <InputField
          label="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          isPassword={true}
        />

        {error && (
          <div className="text-red-600 text-sm text-center bg-red-50 py-2 px-3 rounded-md">
            {error}
          </div>
        )}

        <div className="pt-2">
          <Button type="submit" className="w-full py-2.5 text-base">
            Create My Account
          </Button>
        </div>

        <p className="text-center text-sm text-slate-600 mt-4">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onBackToLogin}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign in
          </button>
        </p>
      </form>
    </AuthCard>
  );
}
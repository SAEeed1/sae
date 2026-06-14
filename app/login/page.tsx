'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        setError('ایمیل یا رمز عبور اشتباه است');
      }
    } catch (err) {
      setError('خطایی در سرور رخ داد');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="glass-effect p-8 rounded-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">ورود به سیستم</h1>
            <p className="text-gray-400">به داشبورد ادمین خوش آمدید</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">ایمیل</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل خود را وارد کنید"
                className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">رمز عبور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="رمز عبور خود را وارد کنید"
                className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? 'در حال ورود...' : 'ورود'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>
              رمز خود را فراموش کردید؟{' '}
              <Link href="#" className="text-primary hover:text-secondary">
                بازیابی کنید
              </Link>
            </p>
          </div>
        </div>

        {/* Demo Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 glass-effect p-4 rounded-xl text-center text-sm text-gray-400"
        >
          <p className="mb-2">💻 برای آزمایش از اطلاعات زیر استفاده کنید:</p>
          <p>ایمیل: admin@aimarket.com</p>
          <p>رمز: 123456</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
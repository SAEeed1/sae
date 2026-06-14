'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Form:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            با ما <span className="gradient-text">تماس بگیرید</span>
          </h1>
          <p className="text-gray-400 text-lg">
            سؤالات خود را مطرح کنید و ما در اسرع وقت پاسخ خواهیم داد
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: '📧',
              title: 'ایمیل',
              value: 'support@aimarket.com',
            },
            {
              icon: '📱',
              title: 'تلفن',
              value: '+98 21 XXXX XXXX',
            },
            {
              icon: '📍',
              title: 'آدرس',
              value: 'تهران، ایران',
            },
          ].map((contact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <span className="text-4xl mb-4 block">{contact.icon}</span>
              <h3 className="font-semibold mb-2">{contact.title}</h3>
              <p className="text-gray-300">{contact.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl p-8 md:p-12"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 bg-green-500/20 border border-green-500 text-green-300 px-6 py-4 rounded-lg"
            >
              ✅ پیام شما با موفقیت ارسال شد. متشکریم!
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">نام</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="نام خود را وارد کنید"
                  className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">ایمیل</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ایمیل خود را وارد کنید"
                  className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold mb-2">موضوع</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="موضوع پیام خود را وارد کنید"
                className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">پیام</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="پیام خود را بنویسید..."
                rows={6}
                className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary w-full text-lg"
            >
              ارسال پیام
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
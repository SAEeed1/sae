'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-4 z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            بازار تخصصی
            <br />
            <span className="gradient-text">محصولات هوش مصنوعی</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          اجنت‌های هوشمند، چت‌بات‌های تخصصی، خدمات اتوماسیون، و محصولات رسانه‌ای با هوش مصنوعی
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto text-sm"
        >
          {['🎯 دقیق', '⚡ سریع', '🔒 امن'].map((feature, i) => (
            <div key={i} className="glass-effect px-4 py-3 rounded-lg">
              {feature}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/products">
            <button className="btn-primary">مشاهده محصولات</button>
          </Link>
          <Link href="/order">
            <button className="btn-secondary">ثبت سفارش</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
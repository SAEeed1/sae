'use client';

import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const mockProducts = [
  {
    id: '1',
    name: 'اجنت بیلینگ هوشمند',
    category: 'اجنت',
    description: 'اجنت هوشمند برای مدیریت و پیگیری صورت‌حساب‌ها',
    price: 499,
    icon: '🤖',
    admin: 'Admin 1',
  },
  {
    id: '2',
    name: 'چت‌بات پشتیبانی 24/7',
    category: 'چت‌بات',
    description: 'چت‌بات تخصصی برای پاسخ به سؤالات مشتریان',
    price: 299,
    icon: '💬',
    admin: 'Admin 2',
  },
  {
    id: '3',
    name: 'خدمات اتوماسیون RPA',
    category: 'اتوماسیون',
    description: 'خدمات اتوماسیون فرآیندهای تجاری پیشرفته',
    price: 799,
    icon: '⚙️',
    admin: 'Admin 1',
  },
  {
    id: '4',
    name: 'تولید ویدیو با هوش مصنوعی',
    category: 'رسانه',
    description: 'ایجاد ویدیوهای حرفه‌ای با استفاده از AI',
    price: 599,
    icon: '🎬',
    admin: 'Admin 3',
  },
  {
    id: '5',
    name: 'اسکریپت مولتی‌اجنت LLM',
    category: 'اسکریپت',
    description: 'اسکریپت پیشرفته برای ارکسترسیون چند اجنت',
    price: 899,
    icon: '📝',
    admin: 'Admin 2',
  },
  {
    id: '6',
    name: 'پلتفرم LLM Orchestration',
    category: 'LLM',
    description: 'پلتفرم کامل برای مدیریت و هماهنگی مدل‌های زبانی',
    price: 1299,
    icon: '🧠',
    admin: 'Admin 1',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            محصولات <span className="gradient-text">برجسته</span>
          </h2>
          <p className="text-gray-400 text-lg">بهترین محصولات هوش مصنوعی در یک مکان</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'محصول' },
            { number: '10K+', label: 'کاربر' },
            { number: '98%', label: 'رضایت' },
            { number: '24/7', label: 'پشتیبانی' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass-effect p-8 text-center rounded-xl"
            >
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const mockProduct = {
  id: '1',
  name: 'اجنت بیلینگ هوشمند',
  category: 'اجنت',
  description: 'اجنت هوشمند برای مدیریت و پیگیری صورت‌حساب‌ها',
  fullDescription:
    'این اجنت پیشرفته با استفاده از یادگیری ماشینی و شبکه‌های عصبی، تمام فرآیندهای بیلینگ شما را خودکار می‌کند. می‌تواند صورت‌حساب‌ها را تولید کند، پرداخت‌ها را پیگیری کند و گزارش‌های جامع تهیه کند.',
  price: 499,
  icon: '🤖',
  admin: 'Admin 1',
  rating: 4.8,
  reviews: 156,
  features: [
    '✅ تولید خودکار صورت‌حساب',
    '✅ پیگیری پرداخت‌های معوقه',
    '✅ گزارش‌های تفصیلی',
    '✅ یکپارچگی با سیستم‌های حسابداری',
    '✅ پشتیبانی 24/7',
    '✅ تحدیث خودکار',
  ],
  specifications: [
    { key: 'پلتفرم', value: 'Cloud-based' },
    { key: 'تعداد کاربران', value: 'نامحدود' },
    { key: 'ذخیره‌سازی', value: 'نامحدود' },
    { key: 'زبان پشتیبانی', value: 'فارسی، انگلیسی' },
  ],
};

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-sm text-gray-400"
        >
          <Link href="/" className="hover:text-primary">
            خانه
          </Link>
          {' / '}
          <Link href="/products" className="hover:text-primary">
            محصولات
          </Link>
          {' / '}
          <span className="text-white">{mockProduct.name}</span>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Image and Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="glass-effect rounded-xl p-12 text-center mb-6">
              <span className="text-8xl">{mockProduct.icon}</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-yellow-400">⭐ {mockProduct.rating}</span>
                <span className="text-gray-400">({mockProduct.reviews} نظر)</span>
              </div>

              <div className="glass-effect p-4 rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong>دسته‌بندی:</strong> {mockProduct.category}
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  <strong>توسط:</strong> {mockProduct.admin}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Info and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Title */}
            <h1 className="text-4xl font-bold mb-4">{mockProduct.name}</h1>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {mockProduct.fullDescription}
            </p>

            {/* Price */}
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2">قیمت</p>
              <p className="text-5xl font-bold gradient-text">
                ${mockProduct.price.toLocaleString()}
              </p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">تعداد</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-primary/20 hover:bg-primary/30 w-10 h-10 rounded-lg transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 bg-dark/50 border border-primary/30 rounded-lg text-center py-2"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-primary/20 hover:bg-primary/30 w-10 h-10 rounded-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <Link href="/order">
                <button className="btn-primary w-full">
                  سفارش دهید
                </button>
              </Link>
              <button className="btn-secondary w-full">
                درخواست دمو
              </button>
            </div>

            {/* Features */}
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-4">ویژگی‌های اصلی</h3>
              <ul className="space-y-2">
                {mockProduct.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 glass-effect p-8 rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-8">مشخصات فنی</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProduct.specifications.map((spec, i) => (
              <div key={i} className="bg-dark/50 p-4 rounded-lg border border-primary/20">
                <p className="text-gray-400 text-sm mb-2">{spec.key}</p>
                <p className="font-semibold text-lg">{spec.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import FilterBar from '@/components/FilterBar';

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
  {
    id: '7',
    name: 'چت‌بات تجارت الکترونیکی',
    category: 'چت‌بات',
    description: 'چت‌بات تخصصی برای فروش و کمک به خریداران',
    price: 449,
    icon: '💬',
    admin: 'Admin 3',
  },
  {
    id: '8',
    name: 'ابزار تحلیل داده‌های AI',
    category: 'اجنت',
    description: 'اجنت تحلیلی برای استخراج بینش‌های عمیق از داده‌ها',
    price: 699,
    icon: '📊',
    admin: 'Admin 2',
  },
  {
    id: '9',
    name: 'اتوماسیون ایمیل‌های بازاریابی',
    category: 'اتوماسیون',
    description: 'سیستم اتوماسیون برای کمپین‌های بازاریابی ایمیلی',
    price: 399,
    icon: '📧',
    admin: 'Admin 1',
  },
];

const categories = ['همه', 'اجنت', 'چت‌بات', 'اتوماسیون', 'رسانه', 'اسکریپت', 'LLM'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = mockProducts.filter((product) => {
    const matchCategory = selectedCategory === 'همه' || product.category === selectedCategory;
    const matchSearch =
      product.name.includes(searchQuery) ||
      product.description.includes(searchQuery) ||
      product.category.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold mb-4">
            تمام <span className="gradient-text">محصولات</span>
          </h1>
          <p className="text-gray-400 text-lg">انتخاب کنید و شروع کنید</p>
        </motion.div>
      </section>

      {/* Filters and Products */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        {/* Filter Bar */}
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Results Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-gray-400"
        >
          {filteredProducts.length} محصول یافت شد
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-400">محصولی یافت نشد</p>
            <p className="text-gray-500 mt-2">لطفا فیلترهای دیگری را امتحان کنید</p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
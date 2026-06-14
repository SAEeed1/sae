'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const orderSchema = z.object({
  fullName: z.string().min(2, 'نام و نام‌خانوادگی اجباری است'),
  email: z.string().email('ایمیل معتبر وارد کنید'),
  phone: z.string().min(10, 'شماره تلفن معتبر وارد کنید'),
  company: z.string().min(2, 'نام شرکت اجباری است'),
  productCategory: z.string().min(1, 'دسته‌بندی محصول را انتخاب کنید'),
  description: z.string().min(10, 'توضیحات حداقل 10 کاراکتر باشد'),
  budget: z.string().min(1, 'بودجه را انتخاب کنید'),
  timeline: z.string().min(1, 'زمان‌بندی را انتخاب کنید'),
});

type OrderFormData = z.infer<typeof orderSchema>;

const categories = ['اجنت', 'چت‌بات', 'اتوماسیون', 'رسانه', 'اسکریپت', 'LLM', 'سایر'];
const budgets = ['کمتر از 1000$', '1000$ - 5000$', '5000$ - 10000$', 'بیش از 10000$'];
const timelines = ['کمتر از 1 ماه', '1-3 ماه', '3-6 ماه', 'بیش از 6 ماه'];

export default function OrderPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = async (data: OrderFormData) => {
    // Here you would typically send the data to your backend
    console.log('Form Data:', data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
            سفارش یا <span className="gradient-text">درخواست</span>
          </h1>
          <p className="text-gray-400 text-lg">
            به ما بگویید چه نیاز دارید و ما برای شما بهترین محصول را انتخاب می‌کنیم
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl p-8 md:p-12"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-green-500/20 border border-green-500 text-green-300 px-6 py-4 rounded-lg"
            >
              ✅ درخواست شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  نام و نام‌خانوادگی
                </label>
                <input
                  {...register('fullName')}
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                {errors.fullName && (
                  <span className="text-red-400 text-sm mt-1">{errors.fullName.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">ایمیل</label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>
                )}
              </div>
            </div>

            {/* Phone and Company Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">شماره تلفن</label>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="شماره تلفن خود را وارد کنید"
                  className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                {errors.phone && (
                  <span className="text-red-400 text-sm mt-1">{errors.phone.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">نام شرکت</label>
                <input
                  {...register('company')}
                  type="text"
                  placeholder="نام شرکت خود را وارد کنید"
                  className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                {errors.company && (
                  <span className="text-red-400 text-sm mt-1">{errors.company.message}</span>
                )}
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                دسته‌بندی محصول
              </label>
              <select
                {...register('productCategory')}
                className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">انتخاب کنید...</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.productCategory && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.productCategory.message}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold mb-2">توضیحات درخواست</label>
              <textarea
                {...register('description')}
                placeholder="توضیحات مفصل درخواست خود را بنویسید..."
                rows={5}
                className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
              />
              {errors.description && (
                <span className="text-red-400 text-sm mt-1">{errors.description.message}</span>
              )}
            </div>

            {/* Budget and Timeline Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">بودجه</label>
                <select
                  {...register('budget')}
                  className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">انتخاب کنید...</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <span className="text-red-400 text-sm mt-1">{errors.budget.message}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">زمان‌بندی</label>
                <select
                  {...register('timeline')}
                  className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">انتخاب کنید...</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
                {errors.timeline && (
                  <span className="text-red-400 text-sm mt-1">{errors.timeline.message}</span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary w-full text-lg"
            >
              ارسال درخواست
            </motion.button>
          </form>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 glass-effect p-6 rounded-xl text-center"
        >
          <p className="text-gray-300">
            💡 درخواست خود را ارسال کنید و یکی از متخصصین ما به زودی با شما تماس خواهد گرفت.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
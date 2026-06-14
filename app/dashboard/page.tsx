'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface DashboardStats {
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
  activeAdmins: number;
}

interface Order {
  id: string;
  customerName: string;
  productCategory: string;
  status: 'pending' | 'approved' | 'completed';
  amount: number;
  date: string;
}

const mockStats: DashboardStats = {
  totalProducts: 156,
  totalOrders: 1240,
  totalRevenue: 125400,
  activeAdmins: 5,
};

const mockOrders: Order[] = [
  {
    id: '1',
    customerName: 'علی رضایی',
    productCategory: 'اجنت',
    status: 'pending',
    amount: 499,
    date: '1403/03/20',
  },
  {
    id: '2',
    customerName: 'فاطمه احمدی',
    productCategory: 'چت‌بات',
    status: 'approved',
    amount: 299,
    date: '1403/03/19',
  },
  {
    id: '3',
    customerName: 'محمد حسینی',
    productCategory: 'اتوماسیون',
    status: 'completed',
    amount: 799,
    date: '1403/03/18',
  },
  {
    id: '4',
    customerName: 'سارا کریمی',
    productCategory: 'رسانه',
    status: 'pending',
    amount: 599,
    date: '1403/03/17',
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-300';
      case 'approved':
        return 'bg-blue-500/20 text-blue-300';
      case 'completed':
        return 'bg-green-500/20 text-green-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-dark via-dark to-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">داشبورد مدیریت</h1>
              <p className="text-gray-400">خوش آمدید به پنل کنترلی AIMarket</p>
            </div>
            <Link href="/">
              <button className="btn-secondary">بازگشت به سایت</button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: '📦', label: 'محصولات', value: mockStats.totalProducts },
            { icon: '📋', label: 'سفارشات', value: mockStats.totalOrders },
            { icon: '💰', label: 'درآمد کل', value: `$${mockStats.totalRevenue.toLocaleString()}` },
            { icon: '👥', label: 'ادمین‌های فعال', value: mockStats.activeAdmins },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-effect p-6 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{stat.icon}</span>
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4 border-b border-primary/20">
          {[
            { id: 'overview', label: 'نمای کلی' },
            { id: 'orders', label: 'سفارشات' },
            { id: 'products', label: 'محصولات' },
            { id: 'admins', label: 'ادمین‌ها' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Orders */}
              <div className="lg:col-span-2">
                <div className="glass-effect p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6">آخرین سفارشات</h2>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <motion.div
                        key={order.id}
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-between p-4 bg-dark/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                      >
                        <div>
                          <p className="font-semibold">{order.customerName}</p>
                          <p className="text-sm text-gray-400">{order.productCategory}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold gradient-text">${order.amount}</p>
                          <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                            {order.status === 'pending' && 'در انتظار'}
                            {order.status === 'approved' && 'تایید شده'}
                            {order.status === 'completed' && 'تکمیل شده'}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-effect p-6 rounded-xl h-fit">
                <h2 className="text-2xl font-bold mb-6">عملیات سریع</h2>
                <div className="space-y-3">
                  <button className="btn-primary w-full justify-center">
                    ➕ محصول جدید
                  </button>
                  <button className="btn-secondary w-full justify-center">
                    📋 مشاهده سفارشات
                  </button>
                  <button className="btn-secondary w-full justify-center">
                    👥 مدیریت ادمین‌ها
                  </button>
                  <button className="btn-secondary w-full justify-center">
                    📊 گزارش‌ها
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="glass-effect p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">تمام سفارشات</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-right py-3 px-4">نام مشتری</th>
                      <th className="text-right py-3 px-4">دسته‌بندی</th>
                      <th className="text-right py-3 px-4">مبلغ</th>
                      <th className="text-right py-3 px-4">وضعیت</th>
                      <th className="text-right py-3 px-4">تاریخ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOrders.map((order) => (
                      <tr key={order.id} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4">{order.customerName}</td>
                        <td className="py-3 px-4">{order.productCategory}</td>
                        <td className="py-3 px-4">${order.amount}</td>
                        <td className="py-3 px-4">
                          <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                            {order.status === 'pending' && 'در انتظار'}
                            {order.status === 'approved' && 'تایید شده'}
                            {order.status === 'completed' && 'تکمیل شده'}
                          </span>
                        </td>
                        <td className="py-3 px-4">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">مدیریت محصولات</h2>
                <button className="btn-primary">➕ افزودن محصول</button>
              </div>
              <p className="text-gray-400">محصولات شما اینجا نمایش داده خواهند شد...</p>
            </div>
          )}

          {activeTab === 'admins' && (
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">مدیریت ادمین‌ها</h2>
                <button className="btn-primary">➕ افزودن ادمین</button>
              </div>
              <p className="text-gray-400">ادمین‌های سیستم اینجا نمایش داده خواهند شد...</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
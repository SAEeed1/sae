'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  const team = [
    {
      name: 'تیم توسعه',
      role: 'محصول و فناوری',
      description: 'متخصصین در ایجاد محصولات هوش مصنوعی پیشرفته',
    },
    {
      name: 'تیم پشتیبانی',
      role: 'خدمات مشتری',
      description: '24/7 در خدمت رفع مشکلات شما',
    },
    {
      name: 'تیم تحقیق',
      role: 'تحقیق و توسعه',
      description: 'بهبود مستمر و نوآوری محصولات',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            درباره <span className="gradient-text">AIMarket</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            بازار متخصص برای فروش بهترین محصولات و خدمات هوش مصنوعی
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">ماموریت ما</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              ما اعتقاد داریم که هوش مصنوعی می‌تواند تمام کسب‌وکارها را تبدیل کند. هدف ما فراهم کردن بهترین محصولات و خدمات AI برای شرکت‌ها و افراد است.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              از طریق AIMarket، متخصصان می‌توانند محصولات خود را به جهان معرفی کنند و کسب‌وکارها می‌توانند بهترین راه‌حل‌های AI را پیدا کنند.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-effect p-12 rounded-xl text-center"
          >
            <span className="text-8xl mb-4 block">🎯</span>
            <h3 className="text-2xl font-bold gradient-text">اهدافمان</h3>
            <p className="text-gray-300 mt-4">
              تبدیل جهان تجارت با هوش مصنوعی
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          ارزش‌های <span className="gradient-text">اساسی</span> ما
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '✨',
              title: 'کیفیت',
              description: 'تنها بهترین محصولات را ارائه می‌دهیم',
            },
            {
              icon: '🤝',
              title: 'همکاری',
              description: 'با متخصصان برتر کار می‌کنیم',
            },
            {
              icon: '🚀',
              title: 'نوآوری',
              description: 'پیوسته به دنبال بهتری هستیم',
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-effect p-8 rounded-xl text-center"
            >
              <span className="text-6xl mb-4 block">{value.icon}</span>
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          تیم <span className="gradient-text">ما</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-effect p-8 rounded-xl text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl">
                👤
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-3">{member.role}</p>
              <p className="text-gray-300">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-effect p-12 rounded-xl text-center"
        >
          <h2 className="text-4xl font-bold mb-6">آماده‌اید شروع کنید؟</h2>
          <p className="text-gray-300 text-lg mb-8">
            به جنبش هوش مصنوعی بپیوندید و تجربه نکنید چگونه فناوری تجارت شما را تغییر می‌دهد.
          </p>
          <Link href="/order">
            <button className="btn-primary">درخواست ارسال کنید</button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
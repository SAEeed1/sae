'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'محصولات',
      links: ['اجنت‌ها', 'چت‌بات‌ها', 'اتوماسیون', 'رسانه‌ها'],
    },
    {
      title: 'شرکت',
      links: ['درباره ما', 'تماس', 'شرایط', 'حریم‌خصوصی'],
    },
    {
      title: 'پشتیبانی',
      links: ['مستندات', 'FAQ', 'تیکت', 'جامعه'],
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-primary/20 to-transparent border-t border-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">🤖 AIMarket</h3>
            <p className="text-gray-400">بازار متخصص محصولات و خدمات هوش مصنوعی</p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
              <motion.button
                key={social}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors flex items-center justify-center"
              >
                {social[0]}
              </motion.button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} AIMarket. تمام حقوق محفوظ است.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'خانه', href: '/' },
    { name: 'محصولات', href: '/products' },
    { name: 'سفارش', href: '/order' },
    { name: 'درباره ما', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold gradient-text"
            >
              🤖 AIMarket
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-4">
            <Link href="/login">
              <button className="btn-secondary">ورود</button>
            </Link>
            <Link href="/dashboard">
              <button className="btn-primary">داشبورد</button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div className="block px-4 py-2 hover:bg-primary/20 rounded">
                  {item.name}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
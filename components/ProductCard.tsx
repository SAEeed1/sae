'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  icon: string;
  admin: string;
}

const ProductCard = ({
  id,
  name,
  category,
  description,
  price,
  icon,
  admin,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link href={`/products/${id}`}>
        <div className="glass-effect rounded-xl overflow-hidden h-full hover:border-primary/60 transition-all cursor-pointer">
          {/* Icon Section */}
          <div className="bg-gradient-to-br from-primary/30 to-secondary/30 p-8 text-center">
            <span className="text-5xl">{icon}</span>
            <p className="text-xs text-gray-400 mt-2">توسط {admin}</p>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category Badge */}
            <div className="inline-block bg-primary/20 text-primary text-xs px-3 py-1 rounded-full mb-3">
              {category}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{name}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
              {description}
            </p>

            {/* Price and Button */}
            <div className="flex items-center justify-between pt-4 border-t border-primary/20">
              <span className="text-2xl font-bold gradient-text">
                ${price.toLocaleString()}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-secondary px-4 py-2 rounded-lg text-white transition-colors"
              >
                مشاهده
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
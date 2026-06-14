'use client';

import { motion } from 'framer-motion';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const FilterBar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect rounded-xl p-6 mb-8"
    >
      <div className="space-y-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-semibold mb-2">جستجو</label>
          <input
            type="text"
            placeholder="جستجو در محصولات..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-dark/50 border border-primary/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary"
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-semibold mb-2">دسته‌بندی</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-primary/20 text-primary hover:bg-primary/30'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterBar;
"use client"

import { motion } from 'framer-motion';
import Cards from '../Cards';

const blogPosts = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18 
];

export default function Blog() {

  return (
    <div className="w-full justify-center items-center min-h-screen sm:p-10 px-4">
      {/* Header */}
      <header className="text-center my-12">
        <motion.h1
          className="text-3xl sm:text-5xl font-bold text-green-600"
          initial={{ opacity: 0, y: 80, scale: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Blog
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-4 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.3 }}
        >
          Discover insights, tips, and the latest updates in competitive gaming.
        </motion.p>
      </header>

      {/* Blog Cards */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {blogPosts.map((post,index) => (
          <motion.div
            key={post}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: Math.min(index * 0.1, 0.6), // staggered animation for each card
            }}
            whileOutOfView={{ opacity: 0, y: 50 }} 
            
          >
            <Cards/>
          </motion.div>
        ))}
      </main>
    </div>

  );
}

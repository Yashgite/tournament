"use client"

import { motion } from 'framer-motion';
import Cards from '../Cards';
import { Button } from '@/components/ui/button';

const blogPosts = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
];

export default function Blog() {

  return (
    <>
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
          {blogPosts.map((post, index) => (
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
              <Cards />
            </motion.div>
          ))}
        </main>
      </div>

      <div className="w-full items-center justify-center bg-gray-100 py-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-green-800">
            The easier, more affordable way to run golf tournaments
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-500 ">
            We believe that golf tournaments are better with Live Scoring. We also believe it shouldn't take a genius and a massive bank roll to offer this to your players. Live Tourney is the perfect blend of simple, flexible, and affordable.
          </p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="flex mx-auto justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Button className="rounded-full bg-green-600 transition-all">
            Subscribe Now
          </Button>
          <Button className=" ml-3 bg-green-600 rounded-full transition-all">
            Learn More
          </Button>
        </motion.div>
      </div>
    </>
  );
}

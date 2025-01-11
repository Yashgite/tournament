"use client"

import { motion } from 'framer-motion';
import Cards from '@/app/Cards';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import carddata from "@/data/carddata.json"


export default function Blog() {

  const router = useRouter();

  return (
    <>
      <div className="w-full justify-center items-center min-h-screen sm:p-10 px-4">
        {/* Header */}
        <header className="text-center my-12">
          <motion.h1
            className="text-3xl sm:text-5xl font-bold text-green-600"
            initial={{ opacity: 0, y: 80, scale: 1.2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-gray-600 mt-4 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Discover insights, tips, and the latest updates in competitive gaming.
          </motion.p>
        </header>

        {/* Blog Cards */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {carddata.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: Math.min(index * 0.1, 0.6), // staggered animation for each card
              }}
              onClick={() => router.push(`/blog/${post.id}`)}
            >
              <Cards image={post.image} alt={post.alt} content={post.content} />
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
        <motion.div
          className="flex mx-auto justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Button className="rounded-full transition-all">
            Subscribe Now
          </Button>
          <Button className=" ml-3 rounded-full transition-all">
            Learn More
          </Button>
        </motion.div>
      </div>
    </>
  );
}

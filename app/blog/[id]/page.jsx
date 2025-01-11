"use client";
import React from "react";
import { useParams,useRouter } from "next/navigation";
import carddata from "@/data/carddata.json"; // Import the card data
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


export default function BlogPost() {
    const AnimatedImage = motion.img
  const router = useRouter();
  const {id} = useParams();             //to get id from URL
  console.log(id);

  // Find the blog post by ID
  const post = carddata.find((item) => item.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Blog post not found.</p>
      </div>
    );
  }

  return (
    <>
    <div className="w-full justify-center items-center mx-auto max-w-4xl sm:p-10 px-4">
    {/* Header */}
    <header className="text-center my-10">
        <motion.h3
            className="text-3xl sm:text-4xl font-bold text-green-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
        >
            {post.alt}
        </motion.h3>
    </header>
    
    {/* Image Section */}
    <div className="flex justify-center items-center mb-8">
        <AnimatedImage 
            
            initial={{ opacity: 0, rotateX: 90, rotateY: 5 }}
            animate={{ opacity: 1, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={post.image}
            className="rounded-2xl object-cover "
            width={500}
            height={200}
            alt={post.alt}
        />
    </div>
        {/* Blog Post Content */}
        <main className="p-4 text-center sm:p-6 ">
          <p className="text-gray-700 text-lg sm:text-xl">{post.content}</p>
        </main>

        {/* Back Button */}
        <footer className="p-4 text-center ">
          <Button
          className="rounded-full"
            onClick={() => router.push("/blog")} 
          >
            Back to Blog
          </Button>
        </footer>
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














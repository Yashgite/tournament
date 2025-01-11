import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const Cards = ({ image, content, alt }) => {
  return (
    <motion.div
      className="p-6 mx-auto max-w-5xl border-none"
    >
      <Card className="border-none">
        <CardHeader >
          <motion.img
            src={image}
            alt={alt}
            className="w-full h-full object-cover rounded-t-md"
          />
        </CardHeader>
        <CardContent>
          <p className="text-lg ">
            {content}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Cards;

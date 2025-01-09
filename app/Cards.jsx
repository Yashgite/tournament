import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Cards = () => {
  const router = useRouter();

  return (
    <motion.div
      className="p-6 mx-auto max-w-3xl"
      initial={{ y: 50 }}
      animate={{y:0, opacity:1}}
      transition={{ duration: 1.5 }}
    >
      <Card>
        <CardHeader>
          <motion.img
            src="/abc.jpg"
            alt="Card Image"
            className="w-full h-48 object-cover rounded-t-md"
            initial={{ scale: 1.02 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <CardDescription>Attendees: 299</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Step into the arena and unleash your inner warrior at the ultimate Street Fighter Tournament! Fight for glory, combos, and the title of champion—are you ready to battle?
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <p>25 July 2025</p>
          <Button
            variant="default"
            onClick={() => router.push("/viewevent")}
          >
            View Event
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Cards;

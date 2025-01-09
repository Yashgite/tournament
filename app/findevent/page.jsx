"use client";

import React, { useState, useEffect } from "react";
import Cards from "../Cards";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "../Footer";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { signOut, useSession } from "next-auth/react";
import LoginForm from "../login/page";
import Registerform from "../register/page";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";



const FindEvent = () => {
  const theme = useTheme();
  const session = useSession();
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const AnimatedButton = motion(Button);

  useEffect(() => {
    if (session.status === "authenticated" && showLogin) {
      setShowLogin(false); // Close the modal if user logs in
    }
  }, [session.status]);

  return (
    <div className={`${(showLogin || showRegister) ? "relative" : ""}`}>
      {/* Blur overlay */}
      {(showLogin || showRegister) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
      )}

      {/* Main Content */}
      <div className={`${(showLogin || showRegister) ? "blur-sm" : ""}`}>
        <div className="flex items-center justify-center w-full">
          <nav className="flex items-center justify-center flex-wrap mx-20 my-10 w-full">
            <Link href={"/"} className="mr-8 font-bold text-2xl">
              Tournament-Hub
            </Link>
            <input
              className="border-none rounded-xl w-1/2 p-2 mr-5"
              placeholder="Search the Event"
            />
            <div className="flex gap-5">
              <AnimatedButton
              whileHover={{scale:1.1}}
              whileTap={{scale:0.3}}
              transition={{duration:0.8}}
              >Search</AnimatedButton>
              {session.status === "authenticated" ? (
                <div>
                <AnimatedButton 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.3}}
                transition={{duration:0.8}}
                onClick={() => signOut("google")}>Logout</AnimatedButton>
                <AnimatedButton 
                whileHover={{scale:1.1}}
                whileTap={{scale:0.3}}
                transition={{duration:0.8}}
                className="ml-5">UserProfile</AnimatedButton>
                </div>
              ) : (
                <div>
                  <AnimatedButton
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.3}}
                  transition={{duration:0.8}}
                    className="mr-5"
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </AnimatedButton>
                  <AnimatedButton 
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.3}}
                  transition={{duration:0.8}}
                  onClick = {()=> {
                          setShowRegister(true)
                          }}>Register</AnimatedButton>
                </div>
              )}
              <ModeToggle />
            </div>
          </nav>
        </div>
        <motion.div
        whileHover={{scale:1.2}}
          initial={{opacity:1, y:60}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.5}}
          className={`text-4xl hover:cursor-pointer flex my-10 items-center justify-center font-bold ${theme === "dark" ? "text-white ": "text-black "}`}>BLOG
        </motion.div>
        <div className="flex flex-wrap mx-20 mt-15">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div>
          <Footer />
        </div>
      </div>

      {/* Login Form Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="relative">
            <LoginForm />
            <Button
              type="button"
              className="absolute top-2 right-2"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </Button>
          </div>
        </div>
      )}

{showRegister && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="relative">
            <Registerform />
            <Button
              type="button"
              className="absolute top-2 right-2"
              onClick={() => setShowRegister(false)}
            >
              ✕
            </Button>
          </div>
        </div>
      )}

    </div>
  );
};

export default FindEvent;

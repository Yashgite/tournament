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


const FindEvent = () => {
  const session = useSession();
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

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
              <Button>Search</Button>
              {session.status === "authenticated" ? (
                <div>
                <Button onClick={() => signOut("google")}>Logout</Button>
                <Button className="ml-5">UserProfile</Button>
                </div>
              ) : (
                <div>
                  <Button
                    className="mr-5"
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </Button>
                  <Button onClick = {()=> {
                          setShowRegister(true)
                          }}>Register</Button>
                </div>
              )}
              <ModeToggle />
            </div>
          </nav>
        </div>
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

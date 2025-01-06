"use client";
import React from "react";
import Cards from "./Cards";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-black min-h-screen flex flex-col">
  {/* Header Section */}
  <header className="w-full h-[45vh] flex flex-col justify-center items-center bg-gray-300 relative">
    <h1 className="text-4xl text-black font-bold mb-10">Tournament-Hub</h1>

    <div className="flex gap-6">
      <Button variant="default">Create an Event</Button>
      <Button variant="default">Find Event</Button>
    </div>

    <div className="absolute top-4 right-4 md:top-4 md:right-4 flex flex-col items-center gap-4 w-full md:w-auto">
    <ModeToggle>mode</ModeToggle>
    </div>

    {/* Login and Register Buttons */}
    {/* <div className="absolute top-4 right-4 md:top-4 md:right-4 flex flex-col items-center gap-4 w-full md:w-auto">
      <Button
        onClick={() => router.push("login")}
        variant="default"
      >
        Login
      </Button>
      <Button
        variant="default"
        onClick={() => router.push("register")}
      >
        Register
      </Button>
    </div> */}
  </header>

      {/* Cards */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mx-8">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </main>

    </div>
  );
}

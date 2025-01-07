"use client";
import React from "react";
import Cards from "./Cards";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/ModeToggle";
import { useTheme } from "next-themes";
import Footer from "./Footer";

export default function Home() {
  const {theme} = useTheme();
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
  {/* Header Section */}
  <header className={`w-full h-[45vh] flex flex-col justify-center items-center relative transition-all duration-300 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-300 text-black"}`}>
    <h1 className={`text-4xl font-bold mb-10 ${theme === "dark" ? "text-white ": "text-black "}`}>Tournament-Hub</h1>

    <div className="flex gap-6">
      <Button variant="default">Create an Event</Button>
      <Button variant="default" onClick = {()=> router.push("/findevent")}>Find Event</Button>
    </div>

    <div className="absolute top-4 right-4 md:top-4 md:right-4 flex flex-col items-center gap-4 w-full md:w-auto">
    <ModeToggle/>
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
      <div className="p-6 mx-8">
  {/* Featured Event */}
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-center">Featured Event</h2>
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Cards/>
      <Cards />
      <Cards />
      <Cards />
    </main>
  </section>

  {/* Upcoming Event */}
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Event</h2>
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </main>
  </section>

  {/* Completed Event */}
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-center">Completed Event</h2>
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </main>
  </section>
</div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

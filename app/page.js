"use client";
import React from "react";
import Card from "./Card";  
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="w-full h-[45vh] flex flex-col justify-center items-center bg-gray-300">
        <h1 className="text-4xl text-black font-bold mb-10">Tournament-Hub</h1>
        
        <div className="flex gap-6">
          <button className="bg-blue-400 px-6 py-2 rounded hover:bg-blue-700">
            Create an Event
          </button>
          <button className=" bg-blue-400 px-6 py-2 rounded hover:bg-blue-700">
            Find Event
          </button>
        </div>
        <div className="absolute top-4 right-4 flex gap-4">
          <button
            onClick={() => router.push("login")}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Login
          </button>
          <button
            onClick={() => router.push("register")}
            className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
          >
            Register
          </button>
        </div>
      </header>

      {/* Cards */}
      <main className="flex flex-wrap justify-center gap-14 p-10 mt-6">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </main>
    </div>
  );
}

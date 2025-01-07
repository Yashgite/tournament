"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "../Footer";

const ViewEvent = () => {
  const router = useRouter();

  // Example event data
  const event = {
    id: 1,
    name: "Champions League Finals",
    date: "March 15, 2025",
    location: "Wembley Stadium, London",
    description:
      "Join us for the epic conclusion of the Champions League. Witness the best teams in Europe battle for the ultimate glory.",
    organizer: "SportsHub Inc.",
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between flex-wrap mx-5 my-10 w-full">
        <Link href={"/"} className="mr-8 font-bold text-2xl">
          Tournament-Hub
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
          <div className="text-gray-600 mb-2">
            <strong>Date:</strong> {event.date}
          </div>
          <div className="text-gray-600 mb-2">
            <strong>Location:</strong> {event.location}
          </div>
          <div className="text-gray-600 mb-4">
            <strong>Organizer:</strong> {event.organizer}
          </div>
          <p className="text-gray-700 mb-6">{event.description}</p>

          <div className="flex gap-4">
            <Button onClick={() => alert("Registered!")}>
              Register Now
            </Button>
            <Button onClick={() => router.push("/findevent")}>
              Back to Events
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ViewEvent;

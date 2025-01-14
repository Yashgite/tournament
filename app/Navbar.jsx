"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full justify-center items-center mx-auto max-w-4xl mt-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-600">
              Pickle-Play
            </Link>
          </div>

          {/* Menu (Desktop) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/feature" className="text-gray-700 hover:text-blue-600">
              Feature
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600">
              FAQ
            </Link>
          </div>

          {/* Login and Try Demo */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
            <Link
              href="/try-demo"
              className="px-4 py-2 bg-green-600 rounded-full text-white rounded hover:bg-green-700"
            >
              Try Demo
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-start space-y-2 py-4">
              <Link href="/blog" className="text-gray-700 ml-3 hover:text-green-600">
                Blog
              </Link>
              <Link
                href="/feature"
                className="ml-3 text-gray-700 hover:text-green-600"
              >
                Feature
              </Link>
              <Link
                href="/pricing"
                className="ml-3 text-gray-700 hover:text-green-600"
              >
                Pricing
              </Link>
              <Link href="/faq" className="ml-3 text-gray-700 hover:text-green-600">
                FAQ
              </Link>
              <Link href="/login" className="ml-3 text-gray-700 hover:text-green-600">
                Login
              </Link>
              <Link
                href="/try-demo"
                className="px-4 w-max py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
              >
                Try Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

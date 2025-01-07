import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Website Name and Quote */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl font-bold">Tournament Hub</h1>
            <p className="mt-2 text-lg">"Your journey starts here!"</p>
            <p className="mt-2 text-sm">Since 2025</p>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg">Contact Us</p>
            <p className="mt-2">Email: <a href="mailto:info@tournamenthub.com" className="text-blue-400">info@tournamenthub.com</a></p>
            <p className="mt-1">Phone: <a href="tel:+1234567890" className="text-blue-400">+1 234 567 890</a></p>
          </div>

          {/* Discover and Social Links */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg">Discover</p>
            <ul className="flex justify-center md:justify-start gap-4 mt-2">
              <li><a href="/" className="text-blue-400 hover:text-blue-600">About</a></li>
              <li><a href="/" className="text-blue-400 hover:text-blue-600">Events</a></li>
              <li><a href="/" className="text-blue-400 hover:text-blue-600">Blog</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg">Discover</p>
            <ul className="flex justify-center md:justify-start gap-4 mt-2">
              <li><a href="/" className="text-blue-400 hover:text-blue-600">Instagram</a></li>
              <li><a href="/" className="text-blue-400 hover:text-blue-600">Facebook</a></li>
              <li><a href="/" className="text-blue-400 hover:text-blue-600">Tweeter</a></li>
            </ul>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">Need help? <a href="/help" className="text-blue-400">Click here</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

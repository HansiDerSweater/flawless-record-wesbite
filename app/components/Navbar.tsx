"use client"

import { Menu, Mic, X } from "lucide-react";
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-lg">
              <Mic className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Flawless Record
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition">Pricing</a>
            <a href="#legal" className="text-gray-700 hover:text-purple-600 transition">Legal</a>
            <a 
              href="https://apps.apple.com/app/flawless-record" 
              target="_blank"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
            >
              Download Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-purple-600 transition">Features</a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-purple-600 transition">How It Works</a>
            <a href="#pricing" className="block text-gray-700 hover:text-purple-600 transition">Pricing</a>
            <a href="#legal" className="block text-gray-700 hover:text-purple-600 transition">Legal</a>
            <a 
              href="https://apps.apple.com/app/flawless-record" 
              target="_blank"
              className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg text-center"
            >
              Download Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
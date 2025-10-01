"use client"

import { Mic } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-lg">
                <Mic className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Flawless Record</span>
            </div>
            <p className="text-sm">Professional audio recording for hip-hop producers and sample makers.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#imprint" className="hover:text-white transition">Imprint</a></li>
              <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Markus Biermeier</li>
              <li>Otto-Kraus-Straße 9</li>
              <li>90441 Nürnberg, Germany</li>
              <li><a href="mailto:itsolutionsbiermeier@gmail.com" className="hover:text-white transition">itsolutionsbiermeier@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 Flawless Record. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
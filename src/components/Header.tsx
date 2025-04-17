"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:px-8 bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
            Coffely
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="#features" 
            className="text-gray-700 hover:text-amber-700 transition-colors font-medium text-sm uppercase tracking-wide"
          >
            Features
          </Link>
          <Link 
            href="#partner" 
            className="text-gray-700 hover:text-amber-700 transition-colors font-medium text-sm uppercase tracking-wide"
          >
            Für Cafés
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-gray-700 hover:text-amber-700 transition-colors font-medium text-sm uppercase tracking-wide"
          >
            So funktioniert's
          </Link>
          <Link 
            href="#about" 
            className="text-gray-700 hover:text-amber-700 transition-colors font-medium text-sm uppercase tracking-wide"
          >
            Über uns
          </Link>
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="#" 
            className="no-underline bg-gradient-to-r from-amber-700 to-amber-500 text-white px-5 py-2 rounded-full hover:shadow-lg transition-all font-medium text-sm"
          >
            App herunterladen
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-amber-600 hover:text-amber-800 focus:outline-none p-2 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-20 border-t">
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              href="#features" 
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#partner" 
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Für Cafés
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              So funktioniert's
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link 
              href="#" 
              className="bg-gradient-to-r from-amber-700 to-amber-500 text-white px-5 py-2 rounded-full font-medium text-center no-underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              App herunterladen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Coffee, Download } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-4 px-6 md:px-8 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#F7F1EB]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group relative">
          <div className="relative w-10 h-10 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-400 opacity-90"></div>
            <div className="absolute inset-[2px] bg-white rounded-full flex items-center justify-center">
              <Coffee size={18} className="text-amber-600" />
              {/* Steam animation */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-1 h-1 rounded-full bg-amber-200/80 animate-steam"></div>
                <div className="w-1 h-1 rounded-full bg-amber-200/80 animate-steam animation-delay-300 ml-1"></div>
              </div>
            </div>
          </div>
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#3A2724] to-amber-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-amber-600 group-hover:to-amber-400">
            Coffely
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {[
            { href: "#for-users", label: "Für Nutzer" },
            { href: "#for-cafes", label: "Für Cafés" },
            { href: "#how-it-works", label: "So funktioniert's" },
            { href: "#team", label: "Team" },
            { href: "#faq", label: "FAQ" }
          ].map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="px-4 py-2 text-gray-700 hover:text-[#3A2724] transition-colors font-medium rounded-md hover:bg-amber-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            href="#download" 
            className="bg-gradient-to-r from-[#3A2724] to-[#6B4F3B] text-[#F7F1EB] px-5 py-2.5 rounded-lg hover:shadow-lg transition-all font-medium text-sm flex items-center space-x-2 hover:translate-y-[-2px] hover:bg-gradient-to-r hover:from-[#6B4F3B] hover:to-[#F7F1EB] hover:text-[#3A2724]"
          >
            <Download size={16} />
            <span>App laden ☕️</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-[#3A2724] focus:outline-none bg-amber-50 p-2 rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-[#F7F1EB]/95 backdrop-blur-md z-20 border-t shadow-xl animate-fade-in-down">
          <nav className="flex flex-col p-6 space-y-6 h-full">
            {[
              { href: "#for-users", label: "Für Nutzer" },
              { href: "#for-cafes", label: "Für Cafés" },
              { href: "#how-it-works", label: "So funktioniert's" },
              { href: "#team", label: "Team" },
              { href: "#faq", label: "FAQ" }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-gray-700 hover:text-[#3A2724] transition-colors font-medium text-xl flex items-center space-x-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="pt-6 mt-auto">
              <Link 
                href="#download" 
                className="bg-gradient-to-r from-[#3A2724] to-[#6B4F3B] text-[#F7F1EB] px-5 py-3 rounded-lg font-medium text-center block hover:from-[#6B4F3B] hover:to-[#F7F1EB] hover:text-[#3A2724] transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                App laden ☕️
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 
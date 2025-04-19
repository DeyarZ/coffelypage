import Link from 'next/link';
import Image from 'next/image';
import { Coffee, Instagram, Linkedin, Mail, Star } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear() + 1; // Using 2025 as specified
  
  return (
    <footer className="bg-[#3A2724] text-[#F7F1EB] pt-16 pb-8 relative overflow-hidden">
      {/* Leo Illustration - Sleeping with empty coffee cup */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 md:opacity-40 pointer-events-none">
        <Image 
          src="/images/leo-coffee-phone.png"
          alt="Leo mit Kaffeetasse"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Navigation */}
          <div className="space-y-5">
            <h4 className="font-semibold text-[#F7F1EB] text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Startseite' },
                { href: '#for-users', label: 'Für Nutzer' },
                { href: '#for-cafes', label: 'Für Cafés' },
                { href: '#contact', label: 'Kontakt' },
                { href: '#imprint', label: 'Impressum & Datenschutz' }
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-[#F7F1EB]/80 hover:text-[#F7F1EB] transition-colors flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: App Download */}
          <div className="space-y-5">
            <h4 className="font-semibold text-[#F7F1EB] text-lg mb-4">Hol dir Coffely:</h4>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Link href="#app-store" className="transition-transform hover:scale-105">
                <Image 
                  src="/images/App Store.png" 
                  alt="Download on the App Store" 
                  width={140} 
                  height={42}
                  className="h-auto"
                />
              </Link>
              <Link href="#play-store" className="transition-transform hover:scale-105">
                <Image 
                  src="/images/Google Play.png" 
                  alt="Get it on Google Play" 
                  width={140} 
                  height={42}
                  className="h-auto"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Star className="text-amber-400" size={16} />
              <span className="text-[#F7F1EB]/90">4.8 / 1.200+ Bewertungen</span>
            </div>
          </div>

          {/* Column 3: Contact & Social Media */}
          <div className="space-y-5">
            <h4 className="font-semibold text-[#F7F1EB] text-lg mb-4">Kontakt & Social Media</h4>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-amber-400" />
              <a href="mailto:hello@coffely.app" className="text-[#F7F1EB]/80 hover:text-[#F7F1EB] transition-colors">
                hello@coffely.app
              </a>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-[#F7F1EB]/10 p-2 rounded-full text-[#F7F1EB] hover:bg-[#F7F1EB]/20 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#F7F1EB]/10 p-2 rounded-full text-[#F7F1EB] hover:bg-[#F7F1EB]/20 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-5">
            <h4 className="font-semibold text-[#F7F1EB] text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {[
                { href: '#agb', label: 'AGB & Datenschutz' },
                { href: '#imprint', label: 'Impressum' }
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-[#F7F1EB]/80 hover:text-[#F7F1EB] transition-colors flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F7F1EB]/10 my-8"></div>

        {/* Bottom Footer */}
        <div className="text-center">
          <p className="text-[#F7F1EB]/60 text-sm flex items-center justify-center">
            <span>© {currentYear} Coffely. Mit Liebe & Kaffee gebaut.</span>
            <Coffee size={16} className="ml-2 text-amber-400" />
          </p>
        </div>
      </div>
    </footer>
  );
} 
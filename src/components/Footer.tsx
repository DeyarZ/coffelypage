import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Mail, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#6F4E37] text-white py-10 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-6 md:mb-0">
          <div className="bg-white p-2 rounded-full mr-4 hover:rotate-12 transition-transform duration-300">
            <Image 
              src="/images/leo-coffee-phone.png" 
              alt="Leo icon" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
          </div>
          <span className="text-sm">© 2023 Coffely App</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <Link href="#" className="text-sm hover:underline hover:text-amber-200 transition-colors duration-300">Impressum</Link>
          <Link href="#" className="text-sm hover:underline hover:text-amber-200 transition-colors duration-300">Datenschutz</Link>
          <Link href="#" className="text-sm hover:underline hover:text-amber-200 transition-colors duration-300">Version 1.0</Link>
          <Link href="#" className="text-sm hover:underline hover:text-amber-200 transition-colors duration-300">GitHub</Link>
        </div>
      </div>
    </footer>
  );
} 
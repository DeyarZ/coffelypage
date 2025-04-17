"use client";

import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-amber-50" id="hero">
      <Header />
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Left Column - Text and CTA */}
          <div className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
              Track. Drink. Repeat.
            </h1>
            
            <p className="text-lg md:text-xl text-amber-800 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Coffely trackt deinen Kaffeekonsum – motivierend, stylish und mit echten Belohnungen.
              Jetzt kostenlos downloaden und deine Kaffeereise starten.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
              <Link href="#" className="transition hover:opacity-90 transform hover:-translate-y-1 hover:shadow-lg">
                <Image 
                  src="/images/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={140} 
                  height={42}
                  className="h-auto"
                />
              </Link>
              
              <Link href="#" className="transition hover:opacity-90 transform hover:-translate-y-1 hover:shadow-lg">
                <Image 
                  src="/images/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={155} 
                  height={42}
                  className="h-auto"
                />
              </Link>
            </div>
            
            {/* Mini CTA for Cafés */}
            <div className="pt-2">
              <p className="text-sm text-gray-600">
                Café-Besitzer? <Link href="#partner" className="text-amber-700 underline hover:text-amber-800 transition">Jetzt Partner werden</Link>
              </p>
            </div>
          </div>
          
          {/* Right Column - Leo Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-md">
              <div className="transform transition-transform hover:scale-102 duration-700">
                <Image
                  src="/images/leo-coffee-phone.png"
                  alt="Leo mit Kaffeetasse und Smartphone"
                  width={500}
                  height={600}
                  priority
                  className="z-10 relative drop-shadow-xl"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 w-64 h-64 bg-amber-200 rounded-full opacity-20 blur-3xl top-20 -left-10"></div>
              <div className="absolute -z-10 w-48 h-48 bg-amber-400 rounded-full opacity-20 blur-3xl bottom-20 right-10"></div>
              
              {/* Coffee steam animation */}
              <div className="absolute top-48 left-36 z-20">
                <div className="w-1 h-3 bg-white/60 rounded-full animate-steam opacity-0"></div>
                <div className="w-1 h-3 bg-white/60 rounded-full animate-steam animation-delay-300 opacity-0"></div>
                <div className="w-1 h-3 bg-white/60 rounded-full animate-steam animation-delay-600 opacity-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

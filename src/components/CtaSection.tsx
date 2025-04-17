"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 w-full bg-[#F5EFE6]" id="cta">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Main Heading - Centered */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-4">
            Bereit, Coffely zu erleben?
          </h2>
          <p className="text-lg text-[#2E2E2E] max-w-3xl mx-auto">
            Hol dir die App – oder werde als Café Teil der Bewegung. Der Kaffee wartet.
          </p>
        </div>

        {/* Split Layout - Two columns side by side */}
        <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 mt-12">
          {/* Left Column - For Users */}
          <div className="md:w-1/2 bg-white rounded-2xl p-8 shadow-md flex flex-col items-center text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Ich bin ein Kaffeeliebhaber</h3>
            <p className="mb-6 text-[#2E2E2E]">
              Tracke meinen Konsum, hol dir Belohnungen, steig ein ins Coffely-Universum.
            </p>
            <Link href="#download" className="mt-auto">
              <button className="w-full py-3 px-6 bg-[#A3D3BF] text-[#2E2E2E] rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105">
                App jetzt downloaden
              </button>
            </Link>
          </div>

          {/* Center Leo Image (Only visible on desktop) */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <Image
                src="/assets/images/Leo mit Founder.jpg"
                alt="Leo präsentiert Coffely"
                width={180}
                height={180}
                className="rounded-full border-4 border-white shadow-xl object-cover"
              />
              {/* Optional Coffely Logo above Leo */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <span className="text-sm font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
                    Coffely
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - For Cafés */}
          <div className="md:w-1/2 bg-white rounded-2xl p-8 shadow-md flex flex-col items-center text-center">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-xl font-semibold mb-2">Ich betreibe ein Café</h3>
            <p className="mb-6 text-[#2E2E2E]">
              Gewinne neue Stammkunden, erhalte Sichtbarkeit und steigere deinen Umsatz.
            </p>
            <Link href="#partner" className="mt-auto">
              <button className="w-full py-3 px-6 bg-[#6F4E37] text-white rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105">
                Partner werden
              </button>
            </Link>
          </div>
        </div>

        {/* Leo image for mobile view */}
        <div className="md:hidden flex justify-center mt-8 mb-8">
          <Image
            src="/assets/images/Leo mit Founder.jpg"
            alt="Leo präsentiert Coffely"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

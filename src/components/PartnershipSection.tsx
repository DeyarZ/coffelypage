"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function PartnershipSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24" id="partner">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Left Column - Leo Visual */}
          <div className="md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative">
              <Image
                src="/images/leo-stamp.png"
                alt="Leo as a barista with Coffely partner tablet"
                width={450}
                height={500}
                className="drop-shadow-xl relative z-10"
              />
              
              {/* Decorative elements */}
              <div className="absolute -z-0 w-64 h-64 bg-[#A3D3BF] rounded-full opacity-20 blur-3xl -bottom-10 -left-10"></div>
              <div className="absolute -z-0 w-48 h-48 bg-[#6F4E37] rounded-full opacity-20 blur-3xl top-20 -right-10"></div>
              
              {/* Small sign in background */}
              <div className="absolute top-10 right-12 z-20 bg-amber-100 px-3 py-1 rounded-md shadow-sm rotate-3 border border-amber-200">
                <p className="text-sm font-medium text-amber-800">Coffely-Partner</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="md:w-1/2 space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] leading-tight">
                Mehr Stammkunden. Mehr Umsatz. Kein Bullshit.
              </h2>
              
              <p className="text-lg text-[#2E2E2E] leading-relaxed">
                Coffely bringt dir loyale Kaffeetrinker – digital sichtbar, direkt belohnend, ohne Aufwand.
              </p>
            </div>
            
            {/* Feature List */}
            <div className="space-y-6">
              {/* Argument 1 */}
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="text-2xl mt-1">🚀</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E2E2E]">Neue Sichtbarkeit</h3>
                  <p className="text-[#2E2E2E]">Werde in der App als Coffely-Partner präsentiert – sichtbar für Kaffeenerds in deiner Umgebung.</p>
                </div>
              </div>
              
              {/* Argument 2 */}
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="text-2xl mt-1">🔁</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E2E2E]">Stammkunden durch Rewards</h3>
                  <p className="text-[#2E2E2E]">Kunden kommen wieder, weil sie bei dir Belohnungen erhalten. Kein teures Treuesystem notwendig.</p>
                </div>
              </div>
              
              {/* Argument 3 */}
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="text-2xl mt-1">🧾</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E2E2E]">Einfache Integration</h3>
                  <p className="text-[#2E2E2E]">Keine neue Hardware. Kein Abo. Einfach ein QR-Code & los.</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Link 
                href="#contact" 
                className="inline-block bg-[#6F4E37] hover:bg-amber-800 text-white font-bold py-4 px-8 rounded-lg transition transform hover:-translate-y-1 hover:shadow-lg text-lg"
              >
                🚀 Jetzt Partner werden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

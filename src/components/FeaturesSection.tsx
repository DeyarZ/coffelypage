"use client";

import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="w-full bg-[#F9F6F2] py-16 md:py-24" id="features">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] leading-tight">
                Coffely macht deinen Kaffeekonsum smart.
              </h2>
              
              <p className="text-lg text-[#2E2E2E] leading-relaxed">
                Keine leere Tasse mehr unbemerkt. Verfolge deinen Konsum, setze Ziele und hol dir echte Belohnungen.
              </p>
            </div>
            
            {/* Feature List */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#6F4E37] mt-1">☕</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E2E2E]">Tracke jede Tasse</h3>
                  <p className="text-[#2E2E2E]">Filter, Espresso, Cold Brew – du hast den Überblick.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#6F4E37] mt-1">🎯</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E2E2E]">Setze Ziele & bleib motiviert</h3>
                  <p className="text-[#2E2E2E]">Ob weniger Koffein oder 100 Tassen in 30 Tagen – deine Challenge.</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="text-2xl text-[#6F4E37] mt-1">🎁</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2E2E2E]">Belohnungen in echten Cafés</h3>
                  <p className="text-[#2E2E2E]">Level up & schalte Rewards bei Partnercafés frei.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Leo Visual */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative">
              <Image
                src="/images/leo-app.png"
                alt="Leo mit Coffely App"
                width={450}
                height={600}
                className="drop-shadow-xl relative z-10"
              />
              
              {/* Decorative elements */}
              <div className="absolute -z-0 w-64 h-64 bg-[#A3D3BF] rounded-full opacity-20 blur-3xl -bottom-10 -right-10"></div>
              <div className="absolute -z-0 w-48 h-48 bg-[#6F4E37] rounded-full opacity-20 blur-3xl top-20 -left-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

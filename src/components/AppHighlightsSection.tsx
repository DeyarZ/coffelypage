import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function AppHighlightsSection() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  
  // For mobile carousel
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // App screens data
  const appScreens = [
    {
      image: "/images/statistics-screen.png",
      title: "Kaffeestatistik-Ansicht",
      caption: "Verfolge deinen Konsum und erreiche deine Ziele"
    },
    {
      image: "/images/dashboard-screen.png", 
      title: "Ziele & Challenges",
      caption: "Motiviere dich mit täglichen Herausforderungen"
    },
    {
      // Using statistics screen as placeholder for the third screen
      image: "/images/statistics-screen.png", 
      title: "Reward-Übersicht",
      caption: "Löse Belohnungen bei deinen Lieblingscafés ein"
    }
  ];

  return (
    <section id="app-highlights" className="w-full py-16 md:py-28 px-6 md:px-24 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto">
        {/* Headline and Subheadline */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-['Poppins',sans-serif] text-3xl md:text-5xl font-bold text-[#6F4E37] tracking-tighter leading-tight mb-4">
            Alles im Griff – stylisch & einfach.
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Die Coffely-App vereint Design & Funktion: Verfolge deinen Konsum, unlocke Belohnungen und bleib motiviert – alles an einem Ort.
          </p>
        </div>

        {/* App Screens Section */}
        {isMobile ? (
          /* Mobile Carousel */
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {appScreens.map((screen, index) => (
                  <div key={index} className="min-w-full flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-[#6F4E37] rounded-3xl opacity-10 blur-md -rotate-1"></div>
                      <Image
                        src={screen.image}
                        alt={screen.title}
                        width={280}
                        height={550}
                        className="rounded-3xl shadow-xl relative z-10 border-2 border-gray-200"
                      />
                    </div>
                    <h3 className="font-medium text-lg text-[#6F4E37] mb-1">{screen.title}</h3>
                    <p className="text-sm text-gray-500 text-center max-w-xs">{screen.caption}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center items-center mt-6 gap-4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      currentSlide === index ? "bg-[#6F4E37]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Leo at the bottom on mobile */}
            <div className="relative mt-10 flex justify-center">
              <Image
                src="/images/leo-coffee-phone.png"
                alt="Leo chilling with coffee and phone"
                width={180}
                height={180}
                className="relative z-10"
              />
            </div>
          </div>
        ) : (
          /* Desktop Layout */
          <div className="relative">
            <div className="flex justify-center mb-16">
              {appScreens.map((screen, index) => (
                <div 
                  key={index} 
                  className="relative mx-4 transform transition-all duration-300 hover:scale-105"
                  style={{ 
                    transform: index === 0 ? 'rotate(-5deg)' : index === 2 ? 'rotate(5deg)' : 'rotate(0deg)',
                    zIndex: index === 1 ? 20 : 10
                  }}
                >
                  <div className="absolute inset-0 bg-[#6F4E37] rounded-3xl opacity-10 blur-md"></div>
                  <div className="flex flex-col items-center">
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      width={260}
                      height={520}
                      className="rounded-3xl shadow-xl relative z-10 border-2 border-gray-200"
                    />
                    <h3 className="font-medium text-lg text-[#6F4E37] mt-4 mb-1">{screen.title}</h3>
                    <p className="text-sm text-gray-500 text-center max-w-xs">{screen.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Leo at the bottom right on desktop */}
            <div className="absolute bottom-0 right-10">
              <Image
                src="/images/leo-coffee-phone.png"
                alt="Leo chilling with coffee and phone"
                width={200}
                height={200}
                className="relative z-30"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 
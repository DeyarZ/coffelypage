// Modular components for Coffely landing page
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PartnershipSection from '@/components/PartnershipSection';
import HighlightsSection from '@/components/HighlightsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-amber-50 overflow-hidden font-['Inter',sans-serif]">
      {/* Coffee bean background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute top-20 left-20 rotate-12">
          <Image src="/images/leo-stamp.png" alt="Coffee bean" width={100} height={100} />
        </div>
        <div className="absolute top-60 right-40 -rotate-12">
          <Image src="/images/leo-stamp.png" alt="Coffee bean" width={80} height={80} />
        </div>
        <div className="absolute bottom-40 left-40 rotate-45">
          <Image src="/images/leo-stamp.png" alt="Coffee bean" width={120} height={120} />
        </div>
        <div className="absolute bottom-80 right-20 -rotate-45">
          <Image src="/images/leo-stamp.png" alt="Coffee bean" width={90} height={90} />
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section - What Coffely offers */}
      <FeaturesSection />
      
      {/* Partnership Section - Why cooperate with Coffely */}
      <PartnershipSection />
      
      {/* Highlights Section */}
      <HighlightsSection />
      
      {/* CTA Section */}
      <CtaSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

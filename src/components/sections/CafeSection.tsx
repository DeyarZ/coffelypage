"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Coffee, Star, ArrowRight } from 'lucide-react';

const CafeSection = () => {
  return (
    <section id="partner" className="py-20 relative overflow-hidden" style={{ 
      background: 'linear-gradient(to top, #4B2E2B, #7B4F3D)',
      color: '#FFF7ED'
    }}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#7B4F3D] opacity-30 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-[#4B2E2B] opacity-20 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-amber-300/10 blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-amber-400/5 blur-xl"></div>
        
        {/* Coffee beans shape decorations */}
        <div className="absolute top-10 right-10 opacity-10">
          <Image 
            src="/images/coffee-beans.svg" 
            alt="Coffee beans decoration" 
            width={80} 
            height={80}
            className="rotate-12"
          />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Image 
            src="/images/coffee-beans.svg" 
            alt="Coffee beans decoration" 
            width={60} 
            height={60}
            className="-rotate-12"
          />
        </div>
      </div>
      
      <div className="container-custom relative z-10 px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <span className="bg-amber-100/10 text-[#FDEBD2] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
              Für Cafés
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Werdet sichtbar. Baut Beziehungen.<br />Und macht aus Gästen Stammkunden.
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#FDEBD2] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mit Coffely bekommt ihr eine digitale Stempelkarte, Sichtbarkeit in der App und 
            einen simplen Weg, Gäste zurückzubringen – ganz ohne Papier oder technisches Know-how.
          </motion.p>
        </div>

        {/* Three Main Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Benefit 1 */}
          <motion.div
            className="bg-[#5B3B38]/60 p-6 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-16 h-16 flex items-center justify-center bg-amber-200/20 rounded-full">
                <Users size={32} className="text-amber-200" />
                <div className="absolute w-20 h-20 rounded-full border border-amber-200/30 animate-pulse"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Mehr Wiederkehrer</h3>
            <p className="text-[#FDEBD2]">
              Gäste mit digitalen Stempelkarten kommen im Schnitt 3,4x schneller wieder. Kein Witz.
              Belohnung = Rückkehr = Umsatz.
            </p>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div
            className="bg-[#5B3B38]/60 p-6 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-16 h-16 flex items-center justify-center bg-amber-200/20 rounded-full">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-200">
                  <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 13L12 17.5L7.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 2L22 7H2L6 2H18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="7" y1="2" x2="7" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="17" y1="2" x2="17" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="absolute w-20 h-20 rounded-full border border-amber-200/30 animate-pulse"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Keine Papierkarten mehr</h3>
            <p className="text-[#FDEBD2]">
              Vergessene Karten, verlorene Stempel – Vergangenheit.
              Mit Coffely ist alles digital und für den Gast jederzeit verfügbar.
            </p>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div
            className="bg-[#5B3B38]/60 p-6 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-16 h-16 flex items-center justify-center bg-amber-200/20 rounded-full">
                <Star size={32} className="text-amber-200" />
                <div className="absolute w-20 h-20 rounded-full border border-amber-200/30 animate-pulse"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Sichtbarkeit in der App</h3>
            <p className="text-[#FDEBD2]">
              Neue Kunden entdecken euer Café direkt in der App – als Coffely-Partner werdet ihr empfohlen und hervorgehoben.
              Nutzt den Traffic clever.
            </p>
          </motion.div>
        </div>

        {/* Conclusion text */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl font-medium text-[#FDEBD2]">
            Einfach. Effektiv. Kostenlos starten.
          </p>
        </motion.div>

        {/* CTA with Mockup */}
        <motion.div
          className="bg-[#5B3B38]/40 p-8 rounded-2xl max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/10 to-amber-200/5 rounded-2xl blur-md opacity-70"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-lg border-4 border-[#5B3B38] bg-[#4B2E2B]">
                  <Image
                    src="/images/Leo Partner.png"
                    alt="Coffely Dashboard für Café-Besitzer"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Euer Café. Eure Daten.</h3>
              <p className="text-[#FDEBD2] mb-6">
                Mit unserem Partner-Dashboard behaltet ihr alles im Blick: Kundenwachstum, eingelöste Belohnungen und wichtige Trends.
              </p>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-[#4B2E2B] font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:from-amber-400 hover:to-amber-300">
                🚀 Jetzt Partner-Café werden
                <ArrowRight size={18} />
              </a>
              <p className="text-sm text-[#FDEBD2]/70 mt-3">
                Unverbindlich & kostenlos. Innerhalb von 24h eingerichtet.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CafeSection; 
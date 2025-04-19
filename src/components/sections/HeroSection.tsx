import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import { 
  Coffee, 
  Gift, 
  Users, 
  BarChart, 
  MapPin,
  Zap,
  Star,
} from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Warm Coffee Gradient Background with Texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8e8d4] via-[#f2d5ba] to-[#f8e8d4] z-0">
        {/* Textured Overlay - like recycled paper or coffee filters */}
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C28F5C\' fill-opacity=\'0.1\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3Cpath d=\'M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        ></div>
        
        {/* Sunlight Rays Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[200%] h-40 bg-gradient-to-r from-transparent via-[#e9be88]/30 to-transparent -rotate-12 top-1/4 -left-1/2 animate-[moveLight_15s_linear_infinite]"></div>
          <div className="absolute w-[200%] h-20 bg-gradient-to-r from-transparent via-[#e9be88]/20 to-transparent -rotate-12 top-2/3 -left-1/2 animate-[moveLight_18s_linear_infinite_reverse]" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
      
      {/* Steam Elements */}
      <div className="absolute top-10 left-[10%] z-10 hidden md:block">
        <div className="coffee-steam w-2 h-10 rounded-full bg-gradient-to-b from-[#f8e8d4] to-transparent opacity-50 animate-steam"></div>
        <div className="coffee-steam w-2 h-10 rounded-full bg-gradient-to-b from-[#f8e8d4] to-transparent opacity-50 animate-steam animation-delay-300 ml-5 mt-3"></div>
        <div className="coffee-steam w-2 h-10 rounded-full bg-gradient-to-b from-[#f8e8d4] to-transparent opacity-50 animate-steam animation-delay-600 ml-2 mt-1"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-10 pb-16">
          
          {/* Leo Illustration - Cafe Scene */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Cafe Environment Styling */}
              <div className="absolute -bottom-8 left-0 right-0 h-20 bg-gradient-to-t from-[#e9be88]/30 to-transparent rounded-full blur-md"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/4 left-0 w-16 h-16 rotate-12 opacity-30">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12C14.5 15.5 12.5 21.5 15 27C17.5 32.5 24 34 29.5 30.5C35 27 37 21 34.5 15.5C32 10 25.5 8.5 20 12Z" fill="#C28F5C" fillOpacity="0.3"/>
                  <path d="M20 12C14.5 15.5 12.5 21.5 15 27C17.5 32.5 24 34 29.5 30.5C35 27 37 21 34.5 15.5C32 10 25.5 8.5 20 12Z" stroke="#C28F5C" strokeOpacity="0.5" strokeWidth="1.5"/>
                  <path d="M33 30C27.5 33.5 25.5 39.5 28 45C30.5 50.5 37 52 42.5 48.5C48 45 50 39 47.5 33.5C45 28 38.5 26.5 33 30Z" fill="#C28F5C" fillOpacity="0.3"/>
                  <path d="M33 30C27.5 33.5 25.5 39.5 28 45C30.5 50.5 37 52 42.5 48.5C48 45 50 39 47.5 33.5C45 28 38.5 26.5 33 30Z" stroke="#C28F5C" strokeOpacity="0.5" strokeWidth="1.5"/>
                  <path d="M25 19C23 21 22 24 23 26" stroke="#C28F5C" strokeOpacity="0.7" strokeWidth="1" strokeLinecap="round"/>
                  <path d="M38 37C36 39 35 42 36 44" stroke="#C28F5C" strokeOpacity="0.7" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </div>
              
              {/* Main Leo Illustration - 20% larger */}
              <Image
                src="/images/leo-coffee-phone.png"
                alt="Leo, das Coffely Maskottchen im Café mit Kaffeetasse und Smartphone"
                width={600}
                height={720}
                className="relative z-10 w-[120%] max-w-[600px] h-auto object-contain max-h-[70vh] transform transition-all duration-500 hover:scale-[1.03]"
                style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.15))' }}
                priority
              />
              
              {/* Interactive Floating Elements */}
              <motion.div 
                className="absolute top-10 -right-5 bg-white rounded-lg shadow-lg p-3 z-20 border border-[#e9be88]/30 hover:border-[#e9be88]/80 transition-all"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <Coffee size={16} className="text-coffee-dark" />
                  <span className="text-sm font-medium">+20 neue Cafés</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-20 -left-5 bg-white rounded-lg shadow-lg p-3 z-20 border border-[#e9be88]/30 hover:border-[#e9be88]/80 transition-all"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-coffee-dark" />
                  <span className="text-sm font-medium">Finde neue Lieblingscafés</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="max-w-xl">
              {/* Headline with Fade-In Animation */}
              <motion.h1 
                className="text-4xl sm:text-5xl font-extrabold mb-4 lg:mb-6 leading-[1.1] mt-6 text-coffee-dark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Coffely verändert, wie du Kaffee trinkst.
              </motion.h1>
              
              <motion.p
                className="text-xl font-medium text-coffee-dark mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Keine Karten. Kein Papier. Nur du, dein Kaffee – und eine App, die's versteht.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Tracke deinen Konsum, sammle Treuepunkte, entdecke neue Lieblingscafés.
                Alles an einem Ort – ganz ohne unnötigen Bullshit.
              </motion.p>
              
              {/* Dual-Path Buttons with Animations */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <a href="#" className="bg-coffee-dark hover:bg-coffee-cream text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group relative overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-coffee-dark to-coffee-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    <Coffee size={20} className="mr-2 group-hover:animate-bounce" />
                    <span className="font-medium">Jetzt App laden</span>
                  </span>
                </a>
                
                <a href="#partner" className="border-2 border-coffee-dark bg-white text-coffee-dark px-6 py-3 rounded-lg hover:bg-coffee-light transition-all flex items-center justify-center font-medium shadow-sm hover:shadow-md group">
                  <div className="absolute w-0 h-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-coffee-light rounded-full" style={{ width: "30px", height: "30px", top: "calc(50% - 15px)", left: "calc(50% - 15px)" }}></div>
                  <span className="relative flex items-center">
                    <Zap size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                    <span>Partner-Café werden</span>
                  </span>
                </a>
              </motion.div>
              
              {/* App Store Ratings & Badges */}
              <motion.div
                className="flex items-center gap-2 mb-6 text-coffee-dark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < 4 ? 'text-coffee-cream' : i === 4 ? 'text-coffee-cream' : 'text-gray-300'} fill-current`} 
                    />
                  ))}
                </div>
                <span className="font-semibold">4.8 im App Store</span>
              </motion.div>
              
              {/* App Store Buttons */}
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <a href="#" className="h-12 transition-all hover:-translate-y-1">
                  <img 
                    src="/images/App Store.png" 
                    alt="Download on the App Store" 
                    className="h-12 object-contain"
                  />
                </a>
                <a href="#" className="h-12 transition-all hover:-translate-y-1">
                  <img 
                    src="/images/Google Play.png" 
                    alt="Get it on Google Play" 
                    className="h-12 object-contain"
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Social Proof Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {[
            { icon: Coffee, text: "120+ Cafés nutzen Coffely", value: "120" },
            { icon: Gift, text: "84K+ Stempel vergeben", value: "84000" },
            { icon: Users, text: "123K+ Nutzer", value: "123000" },
            { icon: BarChart, text: "32K+ freie Kaffees eingelöst", value: "32000" }
          ].map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg px-5 py-4 shadow-sm border border-[#e9be88]/30 hover:border-[#e9be88]/60 transition-all hover:shadow-md">
              <div className="flex items-center">
                <div className="bg-coffee-light p-2 rounded-lg mr-3">
                  <item.icon size={18} className="text-coffee-dark" />
                </div>
                <div>
                  <motion.div 
                    className="text-lg font-bold text-coffee-dark"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <CountUp 
                      className="counter-value" 
                      endValue={item.value} 
                      prefix="+" 
                    />
                  </motion.div>
                  <div className="text-gray-600 text-sm">{item.text.split("+")[1]}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Coffee } from 'lucide-react';

const UserSection: React.FC = () => {
  const stepCards = [
    {
      number: 1,
      title: "Finde dein Lieblingscafé",
      description: "Öffne die App, finde Coffely-Partner in deiner Nähe – vom hippen Third-Wave-Café bis zum gemütlichen Kiosk an der Ecke.",
      image: "/images/Leo mit Lupe.png",
      alt: "Leo schaut mit einer Lupe auf eine Karte"
    },
    {
      number: 2,
      title: "Sammle digitale Stempel",
      description: "Für jeden Kaffee bekommst du automatisch einen digitalen Stempel. Kein Papier. Kein Verlieren. Immer dabei.",
      image: "/images/Leo erklärt Stempelkarte.png",
      alt: "Leo erklärt die digitale Stempelkarte"
    },
    {
      number: 3,
      title: "Hol dir deinen Kaffee gratis",
      description: "Wenn deine Karte voll ist, bekommst du deinen Gratis-Kaffee direkt vom Café. Easy – und verdammt befriedigend.",
      image: "/images/leo_freecoffee.png",
      alt: "Leo mit einem Gratis-Kaffee"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8e8d4] to-[#f9f5f0] z-0">
        {/* Coffee stain texture overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-soft-light"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 100 100'%3E%3Cpath fill='%23C28F5C' fill-opacity='0.15' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'%3E%3C/path%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-coffee-dark mb-4">
            So funktioniert Coffely für dich.
          </h2>
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
            <p className="text-xl text-gray-600">
              Du trinkst Kaffee. Wir erledigen den Rest.
              Mit Coffely trackst du automatisch deine Stempel, entdeckst neue Lieblingscafés – und bekommst regelmäßig deinen Kaffee aufs Haus.
            </p>
            <div className="hidden sm:block">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="ml-2"
              >
                <div className="bg-coffee-light p-2 rounded-full border border-coffee-cream">
                  <CheckCircle size={20} className="text-coffee-cream" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Three Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {stepCards.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-coffee-cream/20 overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="p-6 flex-1">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-coffee-light mb-4">
                  <span className="text-coffee-dark font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-coffee-dark mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              <div className="relative h-56 sm:h-64 overflow-hidden bg-coffee-light/50">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Card 0 - Tracke deinen Kaffeekonsum */}
        <motion.div
          className="mt-16 bg-white rounded-xl shadow-md border border-coffee-cream/20 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-coffee-light mb-4">
                <span className="text-coffee-dark font-bold">+</span>
              </div>
              <h3 className="text-xl font-bold text-coffee-dark mb-3">Sieh, wie viel Kaffee du wirklich trinkst</h3>
              <p className="text-gray-600 mb-4">
                Mit Coffely trackst du automatisch, wie oft, wann und wo du Kaffee trinkst – clean visualisiert, spielerisch aufbereitet.
                Dein Koffein-Tagebuch – ganz ohne Aufwand.
              </p>
              
              {/* Trophies */}
              <div className="flex flex-wrap gap-3 mt-4">
                {["10 Kaffees/Woche", "Café-Entdecker", "Morgenmuffel"].map((achievement, i) => (
                  <div key={i} className="bg-coffee-light/60 rounded-full px-3 py-1 text-sm font-medium text-coffee-dark border border-coffee-cream/30">
                    <span className="mr-1">🏆</span> {achievement}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-coffee-light/50">
              <Image
                src="/images/leo-app.png"
                alt="Leo erklärt die Coffely App"
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
          </div>
        </motion.div>
        
        {/* App Conclusion */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-coffee-dark mb-8">
            Deine App. Dein Kaffeelife.
          </h3>
          
          <div className="relative max-w-sm mx-auto mb-8">
            <Image
              src="/images/dashboard-screen.png"
              alt="Coffely App Dashboard"
              width={300}
              height={600}
              className="mx-auto rounded-2xl shadow-lg border-8 border-white"
            />
            
            {/* App Store Reviews */}
            <motion.div
              className="absolute -bottom-10 -left-20 bg-white rounded-lg shadow-md p-3 max-w-[180px] transform rotate-[-8deg]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-sm">
                "Endlich kein Papierkram mehr!" 
              </p>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -right-20 bg-white rounded-lg shadow-md p-3 max-w-[180px] transform rotate-[5deg]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-sm">
                "Ich liebe es, neue Cafés zu entdecken."
              </p>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Final CTA */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-coffee-dark mb-6">
              🔥 Werde Teil von 123.000 Koffeinjunkies.
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Hol dir Coffely kostenlos – und hol dir zurück, was dir zusteht.
            </p>
            
            <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-coffee-dark hover:bg-coffee-cream text-white rounded-lg shadow-md hover:shadow-lg transition-all font-medium">
              <Coffee size={20} />
              <span>Jetzt App laden ☕️</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UserSection; 
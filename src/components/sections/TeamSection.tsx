import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Deyar Zakir",
      role: "Co-Founder & Visionär",
      description: "Der Stratege mit dem Blick fürs große Ganze durch sein Studium in Engineering & Management. Liebt Espresso doppio & gutes Design."
    },
    {
      name: "Leo",
      role: "Chief Coffee Officer",
      description: "Koffeinsüchtig seit 2023. Lieblingsdrink: Flat White mit extra Personality."
    },
    {
      name: "Manu Worlitzer",
      role: "Co-Founder & Tech-Magier",
      description: "Mit seinem Computer Science Background bringt den Code zum Laufen – und die Kaffeemaschine gleich mit."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-[#FDF8F4]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">
            Wir sind Coffely.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Drei Koffeinjunkies mit einem Ziel:
            Kaffee smarter machen – für dich, für dein Lieblingscafé und für die Zukunft des Trinkens.
          </p>
        </motion.div>
        
        {/* Team Image */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/Leo mit Founder.jpg"
              alt="Das Coffely Team"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-amber-200/50 overflow-hidden flex flex-col p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-bold text-coffee-dark mb-1">{member.name}</h3>
              <p className="text-amber-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Quote */}
        <motion.div
          className="mt-16 bg-white rounded-xl shadow-md border border-amber-200/50 overflow-hidden p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-xl italic text-gray-700 mb-6">
            „Wir bauen Coffely nicht nur für Nutzer – sondern weil wir selbst Kaffee lieben. 
            Und weil wir glauben, dass Technologie auch Seele haben darf."
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mt-8">
            <a href="#" className="bg-white p-3 rounded-full text-amber-600 shadow-sm hover:text-amber-500 hover:shadow-md transition-all">
              <Mail size={20} />
            </a>
            <a href="#" className="bg-white p-3 rounded-full text-amber-600 shadow-sm hover:text-amber-500 hover:shadow-md transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-white p-3 rounded-full text-amber-600 shadow-sm hover:text-amber-500 hover:shadow-md transition-all">
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="mt-4">
            <a href="#" className="text-amber-600 hover:text-amber-700 font-medium transition-colors">
              Hast du ein Café? Schreib uns direkt →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection; 
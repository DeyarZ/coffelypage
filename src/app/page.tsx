"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import UserSection from "@/components/sections/UserSection";
import CafeSection from "@/components/sections/CafeSection";
import TeamSection from "@/components/sections/TeamSection";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import { 
  Smartphone, 
  Coffee, 
  Gift, 
  Users, 
  BarChart, 
  ChevronRight,
  MapPin,
  Zap,
  Star,
  ArrowRight,
  Apple,
  Check,
  QrCode,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* HERO SECTION */}
      <HeroSection />

      {/* BENEFITS FOR APP USERS */}
      <UserSection />

      {/* BENEFITS FOR CAFÉS */}
      <CafeSection />
      
      {/* TEAM SECTION */}
      <TeamSection />
      
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

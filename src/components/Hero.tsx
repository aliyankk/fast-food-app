import React from 'react';
import { Flame, Star, MessageSquare, ArrowRight, ShieldCheck, MapPin, Phone, Award, Gem } from 'lucide-react';
import { motion } from 'motion/react';
import HERO_FEAST from '../assets/images/gourmet_hero_feast_1781164098980.png';

interface HeroProps {
  whatsappNumber: string;
}

export default function Hero({ whatsappNumber }: HeroProps) {
  const handleScrollToMenu = () => {
    const element = document.getElementById('menu-catalog-section');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 140;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Convert Pakistani country code 92... to easy display 0...
  const displayPhone = whatsappNumber.startsWith('92') 
    ? '0' + whatsappNumber.slice(2) 
    : whatsappNumber;

  return (
    <div 
      id="hero-section-container"
      className="w-full bg-[#faf8f5] py-8 sm:py-14 px-3 sm:px-6 md:px-8 select-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Cpath d='M0 20c20-20 20 20 40 0s20-20 40 0h-80z' fill='%23e6dec9' fill-opacity='0.15'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 40px'
      }}
    >
      {/* Red Main Card Banner styled like an elite luxury dining invitation */}
      <div 
        id="hero-banner" 
        className="max-w-7xl mx-auto relative bg-gradient-to-br from-[#5c0011] via-[#42000c] to-[#1a0003] text-white rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-6 sm:px-12 md:px-20 shadow-2xl border-2 border-[#D4AF37]/50 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
      >
        {/* Subtle noise and light overlays */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none w-full h-full">
          <div 
            className="absolute inset-0 bg-repeat opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48c-2 0-3 1-3 3v4c0 2 1 3 3 3h4c2 0 3-1 3-3v-4c0-2-1-3-3-3h-4zm-48 0c-2 0-3 1-3 3v4c0 2 1 3 3 3h4c2 0 3-1 3-3v-4c0-2-1-3-3-3h-4zm0-32c-2 0-3 1-3 3v4c0 2 1 3 3 3h4c2 0 3-1 3-3v-4c0-2-1-3-3-3h-4zm48 0c-2 0-3 1-3 3v4c0 2 1 3 3 3h4c2 0 3-1 3-3v-4c0-2-1-3-3-3h-4zM30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 10c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20z' fill='%23D4AF37' fill-opacity='0.12' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }}
          ></div>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent"></div>
        </div>

        {/* 1. LEFT GOLD SHAPE HEADER - ESTD Stamp */}
        <div 
          className="absolute top-0 left-0 w-44 sm:w-60 h-44 sm:h-60 bg-[#D4AF37] rounded-br-[80px] sm:rounded-br-[120px] flex flex-col justify-start items-start p-4 sm:p-7 shadow-2xl border-r border-b border-[#FFF2CC]/30 z-10"
          style={{ clipPath: 'ellipse(95% 95% at 0% 0%)' }}
        >
          {/* Logo badge */}
          <div className="w-12 h-12 sm:w-20 sm:h-20 bg-[#5c0011] rounded-full flex flex-col items-center justify-center text-[#D4AF37] border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] transform -rotate-12 hover:scale-105 transition duration-300">
            <span className="text-[11px] sm:text-[16px] leading-none font-sans font-black tracking-tight select-none">کامی</span>
            <span className="text-[6px] sm:text-[10px] font-sans font-black tracking-[0.12em] text-white mt-1">KAMI</span>
          </div>
        </div>

        {/* 2. MAIN TYPOGRAPHICAL MENU CONTAINER (Left Side in Banner) */}
        <div className="relative z-10 flex-grow max-w-xl text-center lg:text-left mt-14 lg:mt-0 flex flex-col items-center lg:items-start space-y-4">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[10px] sm:text-xs tracking-widest text-[#D4AF37] uppercase font-black">
            <Award className="w-3.5 h-3.5" />
            <span>Karachi's Premium Gastronomy</span>
          </div>

          {/* Luxury Typography Style */}
          <div className="relative w-full text-center lg:text-left select-none flex flex-col items-center lg:items-start">
            
            {/* "Super" Script Word */}
            <span className="font-satisfy text-4xl sm:text-5.5xl md:text-6.5xl text-[#FFFDF5] font-normal block -rotate-3 transform origin-left drop-shadow-[0_4px_6px_rgba(0,0,0,0.45)] z-25 relative left-3 sm:left-6">
              Superb
            </span>
            
            {/* "Delicious" Block Stamp Word */}
            <h2 className="font-serif text-5xl sm:text-7.5xl md:text-[6.5rem] font-extrabold tracking-tight uppercase block leading-none text-gold-luxury drop-shadow-[0_5px_15px_rgba(0,0,0,0.55)] my-1 sm:my-2">
              Deluxe
            </h2>

            {/* "Menu" Elegant Cascading Word */}
            <span className="font-serif text-5xl sm:text-7.5xl md:text-[7.5rem] font-light text-white block lowercase tracking-wide italic leading-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]">
              culinary catalogue
            </span>

            {/* Subtitle statement */}
            <p className="mt-4 text-xs sm:text-base text-[#F9F5EB]/80 max-w-md font-sans leading-relaxed tracking-wide font-normal">
              Freshly hand-crafted, charcoal-kissed meats of Karachi standard, elevated with premium ingredients & local culinary royalty.
            </p>
          </div>

          {/* Buttons & Pricing */}
          <div className="pt-6 flex flex-col sm:flex-row items-center gap-6 w-full justify-center lg:justify-start">
            {/* Round yellow "ORDER NOW" button directly below text */}
            <button
              onClick={handleScrollToMenu}
              className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-white hover:to-white text-[#5c0011] font-sans font-black text-xs sm:text-sm px-10 py-4 rounded-full shadow-[0_12px_28px_rgba(212,175,55,0.25)] hover:shadow-white/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 uppercase tracking-widest cursor-pointer"
            >
              Explore Royal Catalog
            </button>

            {/* Phone numbers & domain */}
            <div className="text-center sm:text-left select-text border-t sm:border-t-0 sm:border-l border-white/20 pt-4 sm:pt-0 sm:pl-6">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="font-sans font-black text-2xl sm:text-3xl text-[#FFFDF5] block tracking-wide hover:text-[#D4AF37] transition duration-250 leading-tight"
              >
                {displayPhone}
              </a>
              <span className="block text-[8px] sm:text-[9.5px] text-[#D4AF37] tracking-[0.35em] font-black uppercase mt-1">
                KAMI-FAST-FOOD.PK
              </span>
            </div>
          </div>

        </div>

        {/* 3. ROTATING LARGE PIZZA CONTAINER (Right Side in Banner) */}
        <div className="relative z-10 flex-shrink-0 flex justify-center items-center py-6 sm:py-0">
          
          {/* Custom Gold plate annotation marker: Imperial Delivery */}
          <div className="absolute -top-14 sm:-top-18 right-6 text-center pointer-events-none select-none z-10 transform -rotate-12 flex flex-col items-center scale-90 sm:scale-100">
            <span className="font-satisfy text-xl sm:text-2xl text-[#D4AF37] font-bold tracking-wider drop-shadow-md">
              Imperial Home Delivery
            </span>
            <svg className="w-8 sm:w-12 h-6 sm:h-8 text-[#D4AF37] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Pizza spinning dish wrapper */}
          <div className="relative w-64 sm:w-76 md:w-[360px] lg:w-[390px] h-64 sm:h-76 md:h-[360px] lg:h-[390px] rounded-full p-2.5 bg-[#120003]/85 shadow-[0_20px_55px_rgba(0,0,0,0.8)] flex items-center justify-center border-4 border-[#D4AF37]/50">
            
            {/* Spinning Pizza picture (The user requested that the pizza rotating) */}
            <motion.div
              className="w-full h-full rounded-full overflow-hidden"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
            >
              <img
                src={HERO_FEAST}
                alt="Delicious Crispy Kami Pizza Feast Platter"
                className="w-full h-full object-cover rounded-full select-none"
              />
            </motion.div>

            {/* Subtle light gloss shading over the pizza */}
            <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>

            {/* Sparkle doodles inside the banner space */}
            <div className="absolute -top-4 -left-4 w-4 h-4 text-[#D4AF37] opacity-75 animate-ping">★</div>
            <div className="absolute -bottom-3 -right-3 w-5 h-5 text-[#D4AF37] opacity-80 animate-pulse">★</div>
          </div>

          {/* Annotation 3: Wavy Gold organic corner badge */}
          <div 
            className="absolute -bottom-10 -right-4 sm:-right-8 bg-[#D4AF37] text-[#5c0011] px-6 sm:px-8 py-5 rounded-tl-[40px] rounded-br-[32px] rounded-tr-[24px] rounded-bl-[48px] shadow-2xl border border-white/20 select-none hidden sm:block max-w-[170px] transform rotate-6 hover:scale-105 transition duration-300"
          >
            <span className="font-satisfy text-xs sm:text-base font-black tracking-tight leading-none text-[#5c0011] block text-center italic">
              order now direct via WhatsApp
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}

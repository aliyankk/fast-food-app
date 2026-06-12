import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { MENU_ITEMS, CATEGORIES } from './data';
import { MenuItemCategory } from './types';
import { ShoppingBag, MessageSquare, Trash2, X, Plus, Minus, Flame, Star, Sparkles, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SafeImage from './components/SafeImage';

// 1. Stylized Gourmet Burger Vector
function BurgerVector({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Upper Sesame Bun with gold/warm colors */}
      <path d="M70 250C70 145 150 100 256 100C362 100 442 145 442 250H70Z" fill="url(#burgerBunGold)" />
      {/* Sesame Seeds */}
      <path d="M160 170Q165 160 170 170" stroke="#FFF8DC" strokeWidth="6" strokeLinecap="round" />
      <path d="M240 140Q245 130 250 140" stroke="#FFF8DC" strokeWidth="6" strokeLinecap="round" />
      <path d="M330 170Q335 160 340 170" stroke="#FFF8DC" strokeWidth="6" strokeLinecap="round" />
      <path d="M200 200Q205 190 210 200" stroke="#FFF8DC" strokeWidth="6" strokeLinecap="round" />
      <path d="M290 200Q295 190 300 200" stroke="#FFF8DC" strokeWidth="6" strokeLinecap="round" />
      
      {/* Lettuce leaves (crimped and stylized with gorgeous light and shade) */}
      <path d="M50 250H462C475 250 480 262 470 270C460 278 440 272 430 282C420 292 422 300 405 300C388 300 380 285 365 292C350 300 345 315 325 315C305 315 298 290 285 295C272 300 265 310 250 310C235 310 228 295 215 298C202 302 195 315 175 315C155 315 150 295 135 298C120 302 112 312 95 312C78 312 70 290 55 290C40 290 35 270 45 260C50 255 45 250 50 250Z" fill="#2E7D32" />
      
      {/* Melting golden cheese slice */}
      <path d="M80 290 L432 290 L400 340 L310 298 L240 360 L180 302 L110 335 Z" fill="#FFC107" />

      {/* Thick charred Patty */}
      <rect x="75" y="318" width="362" height="65" rx="30" fill="url(#pattyDark)" />
      {/* Char marks */}
      <rect x="120" y="333" width="12" height="35" rx="4" fill="#1A0D00" opacity="0.6" transform="rotate(15 120 333)" />
      <rect x="200" y="333" width="12" height="35" rx="4" fill="#1A0D00" opacity="0.6" transform="rotate(15 200 333)" />
      <rect x="280" y="333" width="12" height="35" rx="4" fill="#1A0D00" opacity="0.6" transform="rotate(15 280 333)" />
      <rect x="360" y="333" width="12" height="35" rx="4" fill="#1A0D00" opacity="0.6" transform="rotate(15 360 333)" />

      {/* Bottom Bun */}
      <path d="M80 380C80 435 150 445 256 445C362 445 432 435 432 380H80Z" fill="url(#burgerBunGoldDark)" />

      <defs>
        <linearGradient id="burgerBunGold" x1="256" y1="100" x2="256" y2="250" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="35%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8F6B10" />
        </linearGradient>
        <linearGradient id="burgerBunGoldDark" x1="256" y1="380" x2="256" y2="445" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AA7C11" />
          <stop offset="100%" stopColor="#5E4304" />
        </linearGradient>
        <linearGradient id="pattyDark" x1="256" y1="318" x2="256" y2="383" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4E2B02" />
          <stop offset="60%" stopColor="#2E1600" />
          <stop offset="100%" stopColor="#120900" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 2. Stylized Golden French Fries Vector
function FriesVector({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Individual shoestring fries projecting in gorgeous gold shimmers */}
      <g stroke="url(#fryGoldGradient)" strokeWidth="18" strokeLinecap="round">
        <line x1="160" y1="230" x2="110" y2="70" />
        <line x1="190" y1="210" x2="160" y2="50" />
        <line x1="220" y1="220" x2="210" y2="40" strokeWidth="20" />
        <line x1="256" y1="240" x2="260" y2="30" strokeWidth="22" />
        <line x1="290" y1="220" x2="310" y2="45" strokeWidth="20" />
        <line x1="320" y1="210" x2="355" y2="60" />
        <line x1="350" y1="230" x2="410" y2="85" />
        
        {/* Secondary overlapping layer */}
        <line x1="180" y1="240" x2="135" y2="100" stroke="#FFF8DC" strokeWidth="14" />
        <line x1="235" y1="220" x2="230" y2="80" stroke="#FFF8DC" strokeWidth="16" />
        <line x1="275" y1="220" x2="285" y2="70" stroke="#FFF8DC" strokeWidth="16" />
        <line x1="325" y1="240" x2="375" y2="110" stroke="#FFF8DC" strokeWidth="14" />
      </g>

      {/* Iconic premium red paper pocket with gold lining */}
      <path d="M120 220 L150 440 C155 465 180 480 256 480 C332 480 357 465 362 440 L392 220 Z" fill="url(#friesPocketRed)" />
      <path d="M110 220 C180 250 332 250 402 220 C382 300 372 380 362 440 C357 460 335 468 256 468 C177 468 155 460 150 440 C140 380 130 300 110 220 Z" fill="url(#friesPocketRedGlow)" />

      {/* Gold brand logo plate on the fries holder */}
      <circle cx="256" cy="350" r="45" fill="url(#fryLogoGold)" stroke="#FFF8DC" strokeWidth="3" />
      <path d="M236 350 C242 334 270 334 276 350 M242 359 C248 348 264 348 270 359" stroke="#5E4304" strokeWidth="4" strokeLinecap="round" fill="none" />

      <defs>
        <linearGradient id="fryGoldGradient" x1="256" y1="30" x2="256" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="40%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B58900" />
        </linearGradient>
        <linearGradient id="friesPocketRed" x1="256" y1="220" x2="256" y2="480" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A51D24" />
          <stop offset="50%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#4A0000" />
        </linearGradient>
        <linearGradient id="friesPocketRedGlow" x1="256" y1="220" x2="256" y2="468" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B22222" />
          <stop offset="100%" stopColor="#8B0000" opacity="0" />
        </linearGradient>
        <linearGradient id="fryLogoGold" x1="256" y1="305" x2="256" y2="395" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 3. Charcoal BBQ Seekh Kebab / Skewer Vector
function BBQSkewerVector({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Heavy metallic stainless steel skewer rod */}
      <rect x="248" y="20" width="16" height="420" rx="6" fill="url(#steelGradient)" />
      
      {/* Sharp skewer tip */}
      <path d="M248 20 L256 4 L264 20 Z" fill="#E2E8F0" />
      {/* Elegant wooden/insulated handle at bottom */}
      <rect x="236" y="420" width="40" height="84" rx="10" fill="url(#woodenHandle)" />
      {/* Brass ring */}
      <rect x="240" y="415" width="32" height="8" rx="2" fill="#D4AF37" />

      {/* Overlapping Juicy Grilled Seekh Kebab Tikka Meat Blocks with grill char marks */}
      {/* Chunk 1 */}
      <g id="kebab-chunk-1">
        <rect x="180" y="70" width="152" height="90" rx="36" fill="url(#meatCharrGradient1)" />
        {/* Char lines */}
        <line x1="210" y1="88" x2="235" y2="138" stroke="#1A0D00" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
        <line x1="245" y1="88" x2="270" y2="138" stroke="#1A0D00" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
        <line x1="280" y1="88" x2="305" y2="138" stroke="#1A0D00" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
        {/* Glistening spots */}
        <circle cx="215" cy="115" r="5" fill="#FFF8DC" opacity="0.3" />
        <circle cx="295" cy="115" r="4.5" fill="#FFF8DC" opacity="0.35" />
      </g>

      {/* Chunk 2 */}
      <g id="kebab-chunk-2">
        <rect x="172" y="178" width="168" height="95" rx="38" fill="url(#meatCharrGradient2)" />
        {/* Char lines */}
        <line x1="205" y1="198" x2="230" y2="248" stroke="#1A0D00" strokeWidth="9" strokeLinecap="round" opacity="0.85" />
        <line x1="242" y1="198" x2="267" y2="248" stroke="#1A0D00" strokeWidth="9" strokeLinecap="round" opacity="0.85" />
        <line x1="280" y1="198" x2="305" y2="248" stroke="#1A0D00" strokeWidth="9" strokeLinecap="round" opacity="0.85" />
        {/* Glistening spots */}
        <circle cx="220" cy="225" r="5.5" fill="#FFF8DC" opacity="0.3" />
        <circle cx="290" cy="225" r="5" fill="#FFF8DC" opacity="0.4" />
      </g>

      {/* Chunk 3 */}
      <g id="kebab-chunk-3">
        <rect x="184" y="290" width="144" height="88" rx="34" fill="url(#meatCharrGradient3)" />
        {/* Char lines */}
        <line x1="215" y1="305" x2="240" y2="355" stroke="#1A0D00" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
        <line x1="250" y1="305" x2="275" y2="355" stroke="#1A0D00" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
        <line x1="282" y1="305" x2="307" y2="355" stroke="#1A0D00" strokeWidth="8" strokeLinecap="round" opacity="0.85" />
        {/* Glistening spots */}
        <circle cx="225" cy="335" r="4" fill="#FFF8DC" opacity="0.3" />
        <circle cx="275" cy="330" r="4" fill="#FFF8DC" opacity="0.32" />
      </g>

      {/* Sizzling charcoal heat rays */}
      <path d="M120 256 C140 240 140 270 160 256" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" opacity="0.25" />
      <path d="M350 180 C370 165 370 195 390 180" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" opacity="0.25" />

      <defs>
        <linearGradient id="steelGradient" x1="248" y1="20" x2="264" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="45%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="woodenHandle" x1="236" y1="420" x2="276" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5C2508" />
          <stop offset="60%" stopColor="#321102" />
          <stop offset="100%" stopColor="#1B0700" />
        </linearGradient>
        <linearGradient id="meatCharrGradient1" x1="256" y1="70" x2="256" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AA7C11" />
          <stop offset="35%" stopColor="#80210A" />
          <stop offset="100%" stopColor="#3D0B00" />
        </linearGradient>
        <linearGradient id="meatCharrGradient2" x1="256" y1="178" x2="256" y2="273" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="30%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#4A0202" />
        </linearGradient>
        <linearGradient id="meatCharrGradient3" x1="256" y1="290" x2="256" y2="378" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A8770C" />
          <stop offset="40%" stopColor="#7A1D06" />
          <stop offset="100%" stopColor="#300700" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 4. Stylized Zesty Paratha Roll Vector
function ParathaRollVector({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Cylindrical wrap body (rolled paratha) */}
      <g transform="rotate(-30 256 256)">
        {/* Paratha flaky golden pastry layers */}
        <rect x="170" y="60" width="172" height="392" rx="86" fill="url(#parathaPastry)" />
        
        {/* Spiraling golden brown cooked spots */}
        <path d="M172 180 Q220 190 280 160 Q320 140 340 180" stroke="#AA7C11" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.65" />
        <path d="M172 260 Q240 280 300 240 Q330 220 340 260" stroke="#AA7C11" strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.65" />
        <path d="M172 340 Q210 330 260 360 Q310 380 340 330" stroke="#8A5A00" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.55" />

        {/* Meat filling and mayo */}
        <path d="M210 65 C190 35 240 10 256 45 C270 12 320 35 300 65 Z" fill="url(#rollFillingTikka)" />
        <ellipse cx="256" cy="65" rx="40" ry="25" fill="#FFFDF2" opacity="0.95" />
        <circle cx="240" cy="50" r="14" fill="#80210A" />
        <circle cx="270" cy="45" r="15" fill="#99310D" /> 

        {/* Silver foil wrap covering the lower half */}
        <path d="M168 220 L342 220 L330 450 C330 450 256 460 180 450 Z" fill="url(#silverFoilGradient)" />
        {/* Wrinkle highlights */}
        <path d="M170 260 L240 225 L340 280" stroke="#F1F5F9" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
        <path d="M172 350 L270 330 L335 370" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <path d="M185 410 L220 395 L310 425" stroke="#94A3B8" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
      </g>

      <defs>
        <linearGradient id="parathaPastry" x1="256" y1="60" x2="256" y2="452" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="25%" stopColor="#E9D18A" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
        <linearGradient id="rollFillingTikka" x1="256" y1="10" x2="256" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF4500" />
          <stop offset="50%" stopColor="#B22222" />
          <stop offset="100%" stopColor="#80210A" />
        </linearGradient>
        <linearGradient id="silverFoilGradient" x1="256" y1="220" x2="256" y2="455" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="30%" stopColor="#CBD5E1" />
          <stop offset="70%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<MenuItemCategory>('BURGER');
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [pktTime, setPktTime] = useState('');
  
  // Locked WhatsApp Number: 923222629836 (Kami Gourmet Korangi Karachi)
  const whatsappNumber = '923222629836';

  // Karachi Time status check (UTC + 5 hours)
  useEffect(() => {
    function updateStatus() {
      const utcDate = new Date();
      // Shift by +5 hours to PKT (Karachi)
      const pkTime = new Date(utcDate.getTime() + (5 * 60 * 60 * 1000));
      const hours = pkTime.getUTCHours();
      const minutes = pkTime.getUTCMinutes();
      
      // Timing: 5:00 PM (17) to 4:00 AM (4)
      // Open if hours is >= 17 (5:00 PM) OR < 4 (4:00 AM)
      const open = hours >= 17 || hours < 4;
      setIsShopOpen(open);

      // Display format
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, '0');
      setPktTime(`${displayHours}:${displayMinutes} ${ampm}`);
    }

    updateStatus();
    const interval = setInterval(updateStatus, 15000); // Check every 15s
    return () => clearInterval(interval);
  }, []);

  // Client-safe multi-item order compiler (Order Slip) with explicit types
  const [orderSlip, setOrderSlip] = useState<Record<string, number>>({});
  const [isSlipOpen, setIsSlipOpen] = useState(false);

  // Smooth scroll back to top indicator toggling
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Dynamically calculate sticky header height to position CategoryNav perfectly
  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerEl = document.getElementById('main-header');
      if (headerEl) {
        setHeaderHeight(headerEl.offsetHeight);
      }
    };

    updateHeaderHeight();

    const headerEl = document.getElementById('main-header');
    if (headerEl && typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => {
        updateHeaderHeight();
      });
      observer.observe(headerEl);
      return () => observer.disconnect();
    } else {
      window.addEventListener('resize', updateHeaderHeight);
      return () => {
        window.removeEventListener('resize', updateHeaderHeight);
      };
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Performance-optimized Combined Scroll Listener for Scroll Spy and Scroll to Top
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // 1. Scroll-to-Top Button Visibility with functional bailing out
          const shouldShowTop = window.pageYOffset > 500;
          setShowScrollTop((prev) => (prev !== shouldShowTop ? shouldShowTop : prev));

          // 2. Category Scroll Spy
          if (!searchQuery) {
            const threshold = 120;
            let activeId = CATEGORIES[0].id;

            for (const cat of CATEGORIES) {
              const el = document.getElementById(`category-${cat.id}`);
              if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= threshold) {
                  activeId = cat.id;
                } else {
                  break;
                }
              }
            }

            setActiveCategory((prev) => (prev !== activeId ? activeId : prev));
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [searchQuery, headerHeight]);

  // Order slip calculations with full explicit types
  const totalItemsCount: number = (Object.values(orderSlip) as number[]).reduce((sum: number, qty: number) => sum + qty, 0);
  const totalPrice: number = (Object.entries(orderSlip) as [string, number][]).reduce((sum: number, entry: [string, number]) => {
    const itemId = entry[0];
    const qty = entry[1];
    const item = MENU_ITEMS.find((mi) => mi.id === itemId);
    const itemPrice = item ? item.price : 0;
    return sum + (itemPrice * qty);
  }, 0);

  const updateSlipQuantity = (itemId: string, delta: number) => {
    setOrderSlip((prev) => {
      const currentQty = prev[itemId] || 0;
      const newQty = currentQty + delta;
      
      if (newQty <= 0) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }
      return { ...prev, [itemId]: newQty };
    });
  };

  const clearOrderSlip = () => {
    setOrderSlip({});
    setIsSlipOpen(false);
  };

  // Compile full list for WhatsApp order message
  const handleCheckoutSlipOnWhatsApp = () => {
    let orderDetailString = '';
    Object.entries(orderSlip).forEach((entry: [string, number]) => {
      const itemId = entry[0];
      const qty = entry[1];
      const item = MENU_ITEMS.find((mi) => mi.id === itemId);
      if (item) {
        orderDetailString += `• *${qty}x* ${item.name} (${item.urduName}) - Rs. ${item.price * qty}\n`;
      }
    });

    const fullMessage = `Assalam-o-Alaikum Kami Fast Food! 🇵🇰\nI would like to place a custom order:\n\n${orderDetailString}\n📍 *Total Amount: Rs. ${totalPrice}*\n\n🏠 *Delivery Address:* [Please enter your full house/flat address here]\n\nPlease confirm my order. Thanks!`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    
    window.open(waUrl, '_blank', 'noreferrer');
  };

  return (
    <div className="min-h-screen bg-wavy-pattern flex flex-col font-sans text-gray-800 relative overflow-x-clip pr-0 sm:pr-6">
      {/* 
        AESTHETIC FLOATING BACKGROUND WATERMARKS & CULINARY ILLUSTRATIONS
        These are large, premium floating watermark elements of gourmet grilled burgers, crispy hot fries, and BBQ skewers,
        strategically placed in the background area on the left & right margins to frame the restaurant menu beautifully.
        They are now visible on standard laptop screen sizes (from 'lg' upwards) and have rich appetizing golden tones.
      */}
      {/* Beautiful Floating Zinger Burger (Left Upper Margin) */}
      <div 
        id="bg-watermark-burger-1"
        className="float-bg-burger absolute left-[-130px] lg:left-[-110px] xl:left-[-60px] top-[500px] w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] xl:w-[390px] xl:h-[390px] opacity-[0.16] lg:opacity-[0.18] pointer-events-none select-none z-0 hidden lg:block"
      >
        <BurgerVector className="w-full h-full object-contain" />
      </div>

      {/* Beautiful Floating Golden French Fries (Right Middle Margin) */}
      <div 
        id="bg-watermark-fries"
        className="float-bg-fries absolute right-[-130px] lg:right-[-110px] xl:right-[-60px] top-[1050px] w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] xl:w-[410px] xl:h-[410px] opacity-[0.16] lg:opacity-[0.18] pointer-events-none select-none z-0 hidden lg:block"
      >
        <FriesVector className="w-full h-full object-contain" />
      </div>

      {/* Beautiful Floating Seekh Kebab BBQ Skewers (Left Lower Margin) */}
      <div 
        id="bg-watermark-bbq"
        className="float-bg-bbq absolute left-[-140px] lg:left-[-120px] xl:left-[-80px] top-[1650px] w-[300px] h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[420px] xl:h-[420px] opacity-[0.15] lg:opacity-[0.16] pointer-events-none select-none z-0 hidden lg:block"
      >
        <BBQSkewerVector className="w-full h-full object-contain" />
      </div>

      {/* Beautiful Floating Zinger/Paratha Roll (Right Lower Margin) */}
      <div 
        id="bg-watermark-roll"
        className="float-bg-roll absolute right-[-130px] lg:right-[-100px] xl:right-[-50px] top-[2300px] w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] xl:w-[380px] xl:h-[380px] opacity-[0.15] lg:opacity-[0.16] pointer-events-none select-none z-0 hidden lg:block"
      >
        <ParathaRollVector className="w-full h-full object-contain" />
      </div>

      {/* Dynamic Header Component */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        whatsappNumber={whatsappNumber}
        isShopOpen={isShopOpen}
        pktTime={pktTime}
        totalItemsCount={totalItemsCount}
        isSlipOpen={isSlipOpen}
        setIsSlipOpen={setIsSlipOpen}
      />

      {/* Hero Header Area */}
      <Hero whatsappNumber={whatsappNumber} />

      {/* Quick alert bar pointing out the interactive checkout compiler */}
      <div className="bg-[#F9F5EB] font-sans py-3 px-4 text-center text-xs sm:text-sm font-extrabold text-[#5c0011] border-b border-[#D4AF37]/45 relative z-10 shadow-sm">
        <span className="inline-flex items-center gap-1.5 uppercase tracking-wide">
          <Sparkles className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
          <span>Need multiple items? Use our <strong className="underline decoration-[#D4AF37]">Custom Order Slip Builder</strong> below inside each category!</span>
        </span>
      </div>

      {/* Horizontal categories quick selection tab bar */}
      <CategoryNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        headerHeight={headerHeight}
        searchQuery={searchQuery}
        onClearSearch={() => setSearchQuery('')}
      />

      {/* main content container: Split menu catalog & Order compiler previewer */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Menu Feed (Col 1-8 if slip is open, otherwise 12) */}
          <div className={totalItemsCount > 0 && isSlipOpen ? 'lg:col-span-8' : 'lg:col-span-12'}>
            
            {/* Interactive Grid listing */}
            <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-luxury-glow border border-zinc-100 relative overflow-hidden">
              {/* Subtle Elegant inner-card Brand Watermark of a Burger */}
              <div className="absolute right-[-40px] bottom-[-40px] w-96 h-96 opacity-[0.015] md:opacity-[0.02] pointer-events-none select-none z-0 mix-blend-multiply">
                <BurgerVector className="w-full h-full object-contain grayscale scale-125 rotate-12" />
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-5 mb-8 gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#5c0011] flex items-center gap-2">
                    <Flame className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
                    <span>Kami Food Catalog Menu</span>
                  </h2>
                  <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1 font-sans">
                    Fresh crispy frying ingredients, charcoal-kissed meats. Pure Karachi standard.
                  </p>
                </div>
                
                {/* Clear filter or statistics statement */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-sans">
                    {MENU_ITEMS.length} original recipes
                  </span>
                  {totalItemsCount > 0 && (
                    <button
                      id="toggle-combo-drawer-btn"
                      onClick={() => setIsSlipOpen(!isSlipOpen)}
                      className="bg-[#5c0011] hover:bg-[#800016] text-white font-bold text-xs px-4 py-2.5 rounded-full cursor-pointer shadow-md flex items-center gap-1.5 transition border-2 border-[#D4AF37]/30 hover:border-[#D4AF37]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{isSlipOpen ? 'Hide Slip' : 'Show Slip'} ({totalItemsCount})</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Grid of Food cards with Add-to-Slip utility */}
              <div className="relative">
                <MenuSection
                  searchQuery={searchQuery}
                  activeCategory={activeCategory}
                  whatsappNumber={whatsappNumber}
                  orderSlip={orderSlip}
                  onUpdateSlipQuantity={updateSlipQuantity}
                  isShopOpen={isShopOpen}
                />
              </div>
            </div>

            {/* Custom Interactive Combo Slip builder section placed in menu row context */}
            <div className="mt-10 bg-gradient-to-br from-[#5c0011] via-[#45000c] to-[#120003] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 overflow-hidden relative">
              <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 pointer-events-none hidden md:block">
                <BurgerVector className="w-full h-full object-contain scale-110 translate-x-12 translate-y-12 rotate-12" />
              </div>

              <div className="relative z-10 max-w-xl space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#5c0011] font-black text-[10px] px-3 py-1 rounded-md uppercase tracking-wider">
                  <Star className="w-3 h-3 fill-[#5c0011]" />
                  <span>How to order multi-items</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black">Want to select and combine several delicious items?</h3>
                <p className="text-[#FFF8DC]/90 text-xs sm:text-sm leading-relaxed font-sans">
                  Browse our categories above. To build your custom combo (e.g. Zinger + Broast + 2 Parathas), click on any item's card to quickly add to slip. Then checkout on WhatsApp with a single unified chat list!
                </p>

                {/* Direct Order Pad Config List Builder */}
                <div className="pt-2">
                  <span className="block text-xs uppercase text-[#D4AF37] font-black tracking-wider mb-2">
                    Build Quick Combo Instantly:
                  </span>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {MENU_ITEMS.filter(m => m.isPopular).slice(0, 4).map((item) => {
                      const qty = orderSlip[item.id] || 0;
                      return (
                        <button
                          key={item.id}
                          onClick={() => updateSlipQuantity(item.id, 1)}
                          className={`text-xs px-3 py-2 rounded-xl font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                            qty > 0
                              ? 'bg-[#D4AF37] text-[#5c0011] border-white shadow'
                              : 'bg-white/10 hover:bg-white/20 text-white border-white/15'
                          }`}
                        >
                          <Plus className="w-3 h-3" />
                          <span>{item.name}</span>
                          {qty > 0 && <span className="bg-[#5c0011] text-[#D4AF37] font-black px-1.5 py-0.2 text-[10px] rounded-full">{qty}</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Persistent Order Slip Col on Large screens (Col 9-12 if visible) */}
          <AnimatePresence>
            {totalItemsCount > 0 && isSlipOpen && (
              <>
                {/* Backdrop overlay visible on mobile only */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsSlipOpen(false)}
                  className="fixed inset-0 bg-black z-45 lg:hidden"
                  id="mobile-drawer-backdrop"
                />

                <motion.aside
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white p-6 shadow-2xl flex flex-col border-l-2 border-[#D4AF37] lg:static lg:flex lg:col-span-4 lg:h-auto lg:rounded-3xl lg:p-5 lg:shadow-xl lg:border-2 lg:border-[#D4AF37]/35 lg:transform-none lg:sticky lg:top-[120px]"
                  id="sticky-order-slip-aside"
                >
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4 flex-shrink-0">
                    <div className="flex items-center gap-1.5">
                      <ShoppingBag className="w-5 h-5 text-[#5c0011]" />
                      <h3 className="font-extrabold text-gray-900 text-sm sm:text-base">Gourmet Order Slip</h3>
                    </div>
                    <button
                      onClick={() => setIsSlipOpen(false)}
                      className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* List of items inside order slip */}
                  <div className="space-y-3 overflow-y-auto pr-1 flex-grow lg:max-h-[350px] xl:max-h-[500px]">
                    {Object.entries(orderSlip).map((entry: [string, number]) => {
                      const itemId = entry[0];
                      const qty = entry[1];
                      const item = MENU_ITEMS.find((mi) => mi.id === itemId);
                      if (!item) return null;
                      return (
                        <div
                          key={itemId}
                          className="flex flex-col gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-xs"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex-grow min-w-0">
                              <h4 className="font-extrabold text-gray-900 truncate">{item.name}</h4>
                              <span className="text-gray-500 font-sans">
                                Rs. {item.price} each • <span className="text-[#5c0011] font-semibold">{item.urduName}</span>
                              </span>
                            </div>

                            {/* Plus and minus toggle buttons */}
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <button
                                onClick={() => updateSlipQuantity(itemId, -1)}
                                className="w-6 h-6 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg flex items-center justify-center font-bold font-sans cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-black w-4 text-center">{qty}</span>
                              <button
                                onClick={() => updateSlipQuantity(itemId, 1)}
                                className="w-6 h-6 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg flex items-center justify-center font-bold font-sans cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          {/* Direct Order only this item action step */}
                          <button
                            disabled={!isShopOpen}
                            onClick={() => {
                              if (!isShopOpen) return;
                              const itemTotal = item.price * qty;
                              const message = `Assalam-o-Alaikum Kami Fast Food! 🇵🇰\nI want to order:\n\n🍔 *${qty}x ${item.name}* (${item.urduName})\n💰 Price: Rs. ${item.price} each\n📍 *Total Amount: Rs. ${itemTotal}*\n\n🏠 *Delivery Address:* [Please enter your full address here]\n\nPlease confirm my order. Thank you!`;
                              const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                              window.open(waUrl, '_blank', 'noreferrer');
                            }}
                            className={`w-full font-extrabold text-[10px] py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition ${
                              isShopOpen 
                                ? 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer' 
                                : 'bg-zinc-100 text-zinc-400 border border-zinc-200 cursor-not-allowed select-none'
                            }`}
                          >
                            <MessageSquare className="w-3.5 h-3.5 fill-current" />
                            <span>{isShopOpen ? `Order only this item (${qty}x)` : 'CLOSED'}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Subtotals and Checkout details */}
                  <div className="border-t border-gray-100 mt-4 pt-4 space-y-3 flex-shrink-0">
                    <div className="flex justify-between items-center text-xs text-gray-500 font-sans font-extrabold uppercase">
                      <span>Total items:</span>
                      <span className="font-black text-gray-900">{totalItemsCount} pcs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-black text-gray-900">Total Bill Amount:</span>
                      <span className="text-lg font-black text-[#5c0011]">Rs. {totalPrice}</span>
                    </div>

                    <button
                      disabled={!isShopOpen}
                      onClick={() => {
                        if (!isShopOpen) return;
                        handleCheckoutSlipOnWhatsApp();
                      }}
                      className={`w-full font-extrabold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition ${
                        isShopOpen 
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md hover:shadow-emerald-100 cursor-pointer' 
                          : 'bg-zinc-100 text-zinc-400 border border-zinc-200 cursor-not-allowed select-none'
                      }`}
                    >
                      <MessageSquare className="w-5 h-5 fill-current" />
                      <span>{isShopOpen ? 'Send Order on WhatsApp' : 'CLOSED (Opens 5 PM)'}</span>
                    </button>

                    <button
                      onClick={clearOrderSlip}
                      className="w-full border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-rose-600 font-bold py-1.5 rounded-lg text-xs transition cursor-pointer flex items-center justify-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear Entire Slip</span>
                    </button>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>

        </div>
      </main>

      {/* BOTTOM FLOATING BAR: Active if slip has items but closed */}
      <AnimatePresence>
        {totalItemsCount > 0 && !isSlipOpen && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-24 left-4 right-4 md:left-auto md:right-24 z-45 max-w-md bg-zinc-950 text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border-2 border-[#D4AF37] flex items-center justify-between gap-4"
            id="floating-order-slip-dock"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37] text-[#5c0011] rounded-xl flex items-center justify-center font-black shadow border border-white">
                {totalItemsCount}
              </div>
              <div>
                <span className="block text-[10px] uppercase text-zinc-400 font-black leading-none">Kami Order Slip</span>
                <span className="text-sm font-extrabold text-[#D4AF37]">Total: Rs. {totalPrice}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setIsSlipOpen(true)}
                className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-black px-3.5 py-2 rounded-xl transition cursor-pointer border border-zinc-700"
              >
                Inspect List
              </button>
              <button
                disabled={!isShopOpen}
                onClick={() => {
                  if (!isShopOpen) return;
                  handleCheckoutSlipOnWhatsApp();
                }}
                className={`text-xs font-extrabold px-4 py-2 rounded-xl flex items-center gap-1.5 transition ${
                  isShopOpen 
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md hover:shadow-emerald-950 cursor-pointer' 
                    : 'bg-zinc-800 text-zinc-500 border border-zinc-700 cursor-not-allowed select-none'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>{isShopOpen ? 'Order Now' : 'CLOSED'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Standard Required Floating WhatsApp widget button */}
      <a
        id="floating-sticky-whatsapp-button"
        href={`https://wa.me/${whatsappNumber}?text=Hi%20Kami%20Fast%20Food!%20I%20would%20like%20to%20view%20your%20menu%20and%20order%20some%20spicy%20fast%20food.`}
        target="_blank"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 right-8 z-50 bg-emerald-600 hover:bg-[#52ba63] text-white rounded-full p-4 shadow-2xl flex items-center justify-center transform hover:scale-110 active:scale-95 transition duration-200 group border-2 border-white cursor-pointer"
        title="Quick chat on WhatsApp"
      >
        <MessageSquare className="w-6.5 h-6.5 fill-white" />
        <span className="absolute right-full mr-2.5 bg-zinc-950 text-white text-xs font-black py-1.5 px-3 rounded-xl border border-[#f1be00] shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none hidden sm:block">
          Order Now on WhatsApp 🇵🇰
        </span>
      </a>

      {/* Absolute Decorative Side Strip mimicking Kami Fast Food Brand Ribbon */}
      <div 
        id="kami-brand-side-strip" 
        className="fixed top-0 bottom-0 right-0 w-6 bg-[#5c0011] border-l border-[#D4AF37] z-40 shadow-2xl pointer-events-none hidden sm:block"
      />

      {/* Styled Interactive Scroll To Top Button recreating user image layout precisely */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={scrollToTop}
            className="fixed bottom-24 lg:bottom-28 right-0 z-50 w-12 h-12 bg-[#2D2D2D] hover:bg-[#1E1E1E] text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white/10 cursor-pointer active:scale-95 transition-all duration-200"
            title="Scroll to Top"
            id="scroll-to-top-button"
          >
            <ArrowUp className="w-6 h-6 stroke-[3px]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Styled Footer */}
      <Footer whatsappNumber={whatsappNumber} />
    </div>
  );
}

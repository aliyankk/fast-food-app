import React, { useState, useEffect, useRef } from 'react';
import { Phone, Search, Clock, MapPin, Menu, X, ExternalLink, Flame, Sparkles, MessageSquare, ArrowRight, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import SafeImage from './SafeImage';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  whatsappNumber: string;
  isShopOpen: boolean;
  pktTime: string;
  totalItemsCount: number;
  isSlipOpen: boolean;
  setIsSlipOpen: (open: boolean) => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  whatsappNumber,
  isShopOpen,
  pktTime,
  totalItemsCount = 0,
  isSlipOpen = false,
  setIsSlipOpen,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter menu items for real-time live predictive dropdown search
  const liveMatches = searchQuery.trim()
    ? MENU_ITEMS.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.urduName.includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleItemClick = (itemId: string) => {
    // Clear search query so full roster expands immediately
    setSearchQuery('');
    setMobileMenuOpen(false);

    // Give browsers a microsecond frame to layout fully
    setTimeout(() => {
      const element = document.getElementById(`menu-item-${itemId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Dynamic highlight flash styling with solid transitions
        element.classList.add('ring-4', 'ring-brand-yellow', 'scale-[1.03]', 'shadow-2xl');
        element.style.transition = 'all 0.4s ease-in-out';
        
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-brand-yellow', 'scale-[1.03]', 'shadow-2xl');
        }, 2500);
      }
    }, 120);
  };

  const formattedWhatsApp = (num: string) => {
    if (num.startsWith('92')) {
      return `0${num.slice(2, 5)} ${num.slice(5)}`;
    }
    return num;
  };

  return (
    <>
      {/* Top Banner Information Row */}
      <div id="top-bar" className="bg-[#120003] text-white py-2 px-4 text-xs font-sans border-b border-brand-yellow/30 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-2">
          <span id="timing-info" className="flex items-center gap-2 text-[#FFFDF5] font-semibold text-[10px] sm:text-xs tracking-wide truncate">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37] animate-spin-lazy flex-shrink-0" /> Timings: <strong className="text-[#D4AF37] font-black">5:00 PM – 4:00 AM</strong> (Daily)
          </span>
          
          <div className="flex items-center gap-5 flex-wrap justify-end">
            <span id="karachi-location-address" className="flex items-center gap-1.5 text-zinc-300 font-medium text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Sector 50 D, Korangi, Karachi
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header: Premium Solid Cabernet and Royal Gold design */}
      <header id="main-header" className="relative z-45 bg-[#5c0011] text-white shadow-luxury-glow border-b-2 border-[#D4AF37] luxury-shine-overlay">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4.5 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          {/* Brand Logo and Title */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* Pristine white rounded plate logo shield replicating user screenshot exact look */}
            <a href="#" className="flex items-center gap-2 sm:gap-3.5 group select-none">
              <div id="brand-logo-crest" className="w-[52px] h-[52px] sm:w-[68px] sm:h-[68px] bg-white rounded-2xl flex flex-col items-center justify-center font-black shadow-[0_10px_25px_rgba(0,0,0,0.35)] border-2 border-[#D4AF37] transform transition-all duration-300 group-hover:scale-[1.04] group-hover:border-white p-1">
                <span className="text-xl sm:text-2.5xl leading-none font-sans font-black tracking-tighter text-[#5c0011] mt-0.5">کامی</span>
                <span className="text-[7px] sm:text-[9px] font-black tracking-[0.18em] leading-none mt-1 text-[#D4AF37] font-sans">KAMI</span>
              </div>
              <div className="flex flex-col">
                <h1 id="restaurant-name-title" className="text-xl sm:text-2.5xl md:text-3xl font-black tracking-tight flex items-baseline gap-1 sm:gap-1.5 leading-none text-white transition duration-300">
                  <span className="text-[#D4AF37] font-black tracking-tighter">KAMI</span> <span className="font-light tracking-[0.08em] text-white text-xs sm:text-base opacity-95">FAST FOOD</span>
                </h1>
                <span id="restaurant-urdu-slogan" className="text-[#F9F5EB]/90 text-[10px] sm:text-xs font-bold tracking-wider mt-1.5 font-sans flex items-center gap-1.5">
                  <span className="text-[#D4AF37] font-black text-xs">کامی فاسٹ فوڈ</span> 
                  <span className="text-[#D4AF37]/40">•</span> 
                  <span className="font-medium text-[9px] sm:text-[11px] text-[#F9F5EB]/80 italic">The Taste of Royalty</span>
                </span>
              </div>
            </a>
          </div>

          {/* Quick theme alignment badges replicating Noman Restaurant screen recording */}
          <div className="hidden md:flex items-center gap-4">
            {/* Delivery address badge */}
            <div className="bg-[#D4AF37] hover:bg-white text-[#5c0011] transition-all duration-300 text-xs font-sans font-black pl-2.5 pr-5 py-1.5 rounded-full flex items-center gap-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-white/20 select-none group">
              <div className="w-8 h-8 rounded-full bg-[#5c0011] text-[#D4AF37] flex items-center justify-center font-bold shadow-sm transition-transform duration-300 group-hover:scale-110">
                <MapPin className="w-4 h-4 fill-transparent" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[8px] sm:text-[9px] opacity-80 font-sans tracking-wide uppercase font-extrabold text-zinc-800">Delivery to</span>
                <span className="font-sans font-black text-[#5c0011] text-[11px] sm:text-[12px] tracking-tight">Sector 50-D, Korangi</span>
              </div>
            </div>

            {/* Instant call badge */}
            <a
              id="header-noman-phone"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-[#D4AF37] hover:bg-white text-[#5c0011] transition-all duration-300 text-xs font-sans font-black pl-2.5 pr-5 py-1.5 rounded-full flex items-center gap-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-white/20 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-[#5c0011] text-[#D4AF37] flex items-center justify-center font-bold shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Phone className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[8px] sm:text-[9px] opacity-80 font-sans tracking-wide uppercase font-extrabold text-zinc-800">Order Now</span>
                <span className="font-sans font-black text-[#5c0011] text-[11px] sm:text-[12px] tracking-tight">{formattedWhatsApp(whatsappNumber)}</span>
              </div>
            </a>
          </div>

          {/* Search bar inside the header to make it extremely responsive */}
          <div className="hidden lg:flex flex-col relative w-full max-w-xs xl:max-w-sm" id="desktop-search-container">
            <div className="relative flex items-center w-full">
              <Search className="absolute left-3.5 text-white/50 w-4 h-4 pointer-events-none" />
              <input
                id="desktop-search-input"
                type="text"
                placeholder="Search spicy Zinger, BBQ, Broast..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/30 hover:bg-black/45 focus:bg-white focus:text-gray-900 placeholder-white/60 text-white pl-10 pr-12 py-2.5 rounded-full border border-white/20 focus:border-[#D4AF37] focus:outline-none transition-all text-sm shadow-inner"
              />
              {searchQuery && (
                <button
                  id="clear-desktop-search"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 text-white hover:text-[#D4AF37] cursor-pointer text-xs font-bold font-sans"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Predictive Live Autocomplete Search Results dropdown popup (Desktop) */}
            <AnimatePresence>
              {liveMatches.length > 0 && (
                <motion.div
                  id="desktop-search-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl shadow-black/45 border-2 border-[#D4AF37] overflow-hidden z-50 p-2 text-gray-800"
                >
                  <div className="px-3 py-1.5 border-b border-gray-150 flex justify-between items-center bg-gray-50/50 rounded-t-xl">
                    <span className="text-[10px] uppercase font-black text-gray-400 tracking-wider font-sans">
                      Quick Suggestions ({liveMatches.length})
                    </span>
                    <span className="text-[9px] text-[#5c0011] font-bold">
                      Click to jump
                    </span>
                  </div>

                  <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                    {liveMatches.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleItemClick(item.id)}
                        className="w-full text-left p-2.5 hover:bg-[#D4AF37]/10 active:bg-[#D4AF37]/20 rounded-xl transition flex items-center gap-3 cursor-pointer group"
                      >
                        <SafeImage
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-10 h-10 object-cover rounded-lg flex-shrink-0 border border-gray-100"
                          category={item.category}
                        />
                        <div className="flex-grow min-w-0">
                          <div className="flex justify-between items-baseline gap-2">
                            <h5 className="font-extrabold text-sm text-gray-900 group-hover:text-[#5c0011] transition truncate">
                              {item.name}
                            </h5>
                            <span className="text-white font-black text-xs whitespace-nowrap bg-[#5c0011] px-1.5 py-0.5 rounded font-sans border border-[#D4AF37]/30">
                              {item.urduName}
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-0.5">
                            <p className="text-[10px] text-gray-400 font-medium font-sans uppercase">
                              In {item.category}
                            </p>
                            <span className="text-xs font-black text-emerald-600">
                              Rs. {item.price}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#5c0011] transition flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick contact and Status badge */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Dynamic Status Badge */}
            <div id="service-status-container" className="flex items-center">
              {isShopOpen ? (
                <div id="status-open-badge" className="bg-emerald-600 border border-emerald-400 text-white font-extrabold text-[10px] sm:text-xs px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 animate-pulse shadow-lg select-none">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full inline-block animate-ping flex-shrink-0"></span>
                  <span>OPEN NOW</span>
                </div>
              ) : (
                <div id="status-closed-badge" className="bg-zinc-900 border border-zinc-700 text-zinc-300 font-extrabold text-[10px] sm:text-xs px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 shadow-lg select-none">
                  <span className="w-2 h-2 bg-rose-500 rounded-full inline-block flex-shrink-0"></span>
                  <span>CLOSED</span>
                </div>
              )}
            </div>

            {/* Premium Shopping Cart Badge (recreating user screenshot top-right cart count element) */}
            <button
              id="header-shopping-cart-badge"
              onClick={() => setIsSlipOpen(!isSlipOpen)}
              className="relative w-10 h-10 sm:w-11 sm:h-11 bg-[#D4AF37] hover:bg-white text-gray-900 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(212,175,55,0.35)] border border-white/20 hover:scale-[1.06] active:scale-95 transition-all duration-300 cursor-pointer group"
              title="Toggle Order Slip"
            >
              <ShoppingCart className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-gray-900 group-hover:text-[#5c0011] transition-colors" />
              
              {/* Dynamic Notification Bubble */}
              <AnimatePresence>
                {totalItemsCount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 sm:w-5.5 sm:h-5.5 bg-[#5c0011] text-white text-[9.5px] sm:text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-md font-sans"
                  >
                    {totalItemsCount}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-navigation-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:text-brand-yellow p-1 transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide open bar for Search and Quick Contacts */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#2d0006] border-t border-[#D4AF37]/30 pb-4 px-4 overflow-hidden shadow-lg text-white"
            >
              <div id="mobile-search-wrapper" className="mt-3 relative">
                <div className="relative flex items-center">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-red-200/50 w-4.5 h-4.5 pointer-events-none" />
                  <input
                    id="mobile-search-input"
                    type="text"
                    placeholder="Search Zinger, Broast, BBQ, Parathas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#5c0011]/40 placeholder-red-200/80 text-white pl-11 pr-12 py-2.5 rounded-xl border border-[#D4AF37]/30 focus:outline-none focus:border-[#D4AF37] text-sm font-sans"
                  />
                  {searchQuery && (
                    <button
                      id="clear-mobile-search"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#D4AF37] text-xs font-bold font-sans"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Predictive Live Autocomplete Search Results popup (Mobile) */}
                <AnimatePresence>
                  {liveMatches.length > 0 && (
                    <motion.div
                      id="mobile-search-dropdown"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="mt-2 bg-white rounded-xl shadow-xl overflow-hidden z-55 p-1 text-gray-800 border border-[#D4AF37]/10"
                    >
                      <div className="px-2.5 py-1 border-b border-gray-50 flex justify-between items-center bg-gray-50 rounded-t-lg">
                        <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">
                          Instant Matches ({liveMatches.length})
                        </span>
                        <span className="text-[9px] text-[#5c0011] font-bold">
                          Tap to select
                        </span>
                      </div>

                      <div className="divide-y divide-gray-50 max-h-60 overflow-y-auto">
                        {liveMatches.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleItemClick(item.id)}
                            className="w-full text-left p-2 hover:bg-[#D4AF37]/15 active:bg-[#D4AF37]/25 rounded-lg transition flex items-center gap-2 cursor-pointer"
                          >
                            <SafeImage
                              src={item.imageUrl}
                              alt={item.name}
                              className="w-8 h-8 object-cover rounded-md flex-shrink-0 border border-gray-100"
                              category={item.category}
                            />
                            <div className="flex-grow min-w-0">
                              <div className="flex justify-between items-center">
                                <h5 className="font-extrabold text-xs text-gray-900 truncate">
                                  {item.name}
                                </h5>
                                <span className="text-[#5c0011] font-black text-[10px] bg-red-50 px-1 py-0.2 rounded">
                                  {item.urduName}
                                </span>
                              </div>
                              <div className="flex justify-between items-center mt-0.5 text-[9px] text-gray-400">
                                <span className="uppercase">{item.category}</span>
                                <span className="text-emerald-600 font-extrabold">Rs. {item.price}</span>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Status details on Mobile */}
              <div className="mt-4 flex flex-col gap-2 bg-[#5c0011]/30 p-2.5 rounded-lg border border-[#D4AF37]/30">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-red-200">Current Status:</span>
                  <span className={isShopOpen ? "text-emerald-400 font-bold flex items-center gap-1" : "text-rose-400 font-bold flex items-center gap-1"}>
                    <Clock className="w-3 h-3" /> {isShopOpen ? 'Open for orders!' : 'Closed (Opens 5PM)'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-red-200">Karachi Local Time:</span>
                  <span className="text-[#D4AF37] font-mono">{pktTime || 'Calculating...'}</span>
                </div>
                <div className="flex justify-between items-center text-xs border-t border-[#faf9f5]/15 pt-2 mt-1">
                  <span className="text-red-200">WhatsApp Delivery Number:</span>
                  <span className="text-white font-bold">{formattedWhatsApp(whatsappNumber)}</span>
                </div>
              </div>

              {/* Mobile primary action button */}
              <div id="mobile-call-to-action-container" className="mt-3.5">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-center font-bold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call / Order {formattedWhatsApp(whatsappNumber)}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

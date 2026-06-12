import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, Heart, Star, Compass, ArrowUp, Send } from 'lucide-react';

interface FooterProps {
  whatsappNumber: string;
}

export default function Footer({ whatsappNumber }: FooterProps) {
  const formattedWhatsApp = (num: string) => {
    if (num.startsWith('92')) {
      return `0${num.slice(2, 5)} ${num.slice(5)}`;
    }
    return num;
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-zinc-950 text-white pt-14 pb-8 border-t border-[#D4AF37]/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left column: Restaurant statement */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-[#D4AF37] text-[#5c0011] rounded-full flex items-center justify-center font-black text-sm border border-white">
              کامی
            </div>
            <h4 className="text-xl font-black tracking-tight text-white uppercase">
              Kami Gourmet
            </h4>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            Since 2018, Kami Fast Food has been serving scrumptious, high-quality, and hygienic culinary delights to the residents of Sector 50-D, Korangi, Karachi. Enjoy premium flavors crafted to perfection!
          </p>
          <div className="flex items-center gap-2 py-1">
            <span className="text-[#D4AF37] text-sm">★</span>
            <span className="text-[#D4AF37] text-sm">★</span>
            <span className="text-[#D4AF37] text-sm">★</span>
            <span className="text-[#D4AF37] text-sm">★</span>
            <span className="text-[#D4AF37] text-sm">★</span>
            <span className="text-zinc-400 text-xs ml-1">(4.8 Verified Rating)</span>
          </div>
        </div>

        {/* Middle column: Order info & Timings */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-[#D4AF37] font-black text-sm uppercase tracking-widest border-b border-zinc-850 pb-2 block w-full">
            Opening Hours & Timings
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <div>
                <strong className="block text-white font-semibold">Everyday Operations:</strong>
                <span className="text-zinc-400 text-xs">5:00 PM – 4:00 AM (Daily)</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <div>
                <strong className="block text-white font-semibold">Address Location:</strong>
                <span className="text-zinc-400 text-xs">Sector 50-D, Korangi, Karachi, Pakistan</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <div>
                <strong className="block text-white font-semibold">WhatsApp Delivery Order:</strong>
                <span className="text-zinc-405 text-xs">{formattedWhatsApp(whatsappNumber)}</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right column: Google Maps and Quick Links */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-[#D4AF37] font-black text-sm uppercase tracking-widest border-b border-zinc-850 pb-2 block w-full">
            Google Maps & Location
          </h4>
          
          {/* Real embedded maps widget coordinates of Sector 50-D Korangi Karachi with exact search parameter */}
          <div className="relative rounded-xl overflow-hidden shadow-md h-36 bg-zinc-900 border border-zinc-800">
            <iframe
              src="https://maps.google.com/maps?q=Kami%20Fast%20Food,%20Sector%2050%20D,%20Korangi,%20Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kami Fast Food Location Map"
            ></iframe>
          </div>

          <a
            id="footer-google-maps-directions-link"
            href="https://www.google.com/maps/search/?api=1&query=Kami+Fast+Food+Sector+50+D+Korangi+Karachi"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-white transition duration-200 underline"
          >
            <Compass className="w-3.5 h-3.5 animate-pulse" />
            <span>Open Google Maps Navigation Pin</span>
          </a>
        </div>
      </div>

      {/* Lower Footer brand credits */}
      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <div>
          © {new Date().getFullYear()} <strong>Kami Gourmet Korangi Karachi</strong>. All rights reserved.
        </div>
        
        <div className="flex items-center gap-1.5 text-[11px]">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-[#5c0011] fill-[#5c0011] animate-pulse" />
          <span>for the gourmet food lovers of Karachi</span>
        </div>

        {/* Back to top button */}
        <button
          id="scroll-to-top-btn"
          onClick={handleScrollTop}
          className="bg-[#5c0011] text-[#D4AF37] p-2.5 rounded-full shadow hover:bg-[#800016] border border-[#D4AF37]/35 transition focus:outline-none cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}

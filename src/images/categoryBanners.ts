export const svgToDataUrl = (svgCode: string) => {
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgCode.trim())));
};

// --- BURGER CATEGORY BANNER ---
export const BURGER_BANNER = svgToDataUrl(`
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3D0000" />
      <stop offset="50%" stop-color="#8B0000" />
      <stop offset="100%" stop-color="#1F0000" />
    </linearGradient>
    <linearGradient id="bun" x1="600" y1="100" x2="600" y2="280" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFF8DC" />
      <stop offset="40%" stop-color="#FFD700" />
      <stop offset="100%" stop-color="#AA7C11" />
    </linearGradient>
    <linearGradient id="goldText" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFF8DC" />
      <stop offset="50%" stop-color="#FFD700" />
      <stop offset="100%" stop-color="#AA7C11" />
    </linearGradient>
  </defs>

  {/* Rich background */}
  <rect width="1200" height="400" fill="url(#bg)" />
  <circle cx="200" cy="200" r="180" fill="#FFD700" opacity="0.05" />
  <circle cx="1000" cy="200" r="300" fill="#FFD700" opacity="0.03" />

  {/* Left Side: Text and badge */}
  <g transform="translate(100, 80)">
    {/* Miniature crown or star */}
    <path d="M0 -30 L10 -15 L30 -15 L15 -2 L20 18 L0 5 L-20 18 L-15 -2 L-30 -15 L-10 -15 Z" fill="#FFD700" />
    <text x="50" y="-10" font-family="'Inter', sans-serif" font-weight="900" font-size="20" fill="#FFD700" letter-spacing="4">KAMI GOURMET</text>
    <text x="0" y="70" font-family="'Lilita One', sans-serif" font-weight="900" font-size="80" fill="#FFFFFF">ROYAL BURGERS</text>
    <text x="0" y="140" font-family="'Inter', sans-serif" font-weight="700" font-size="24" fill="#FFF8DC" opacity="0.8">Crispy Zingers & Flame-Smash Grilled Masterpieces</text>
    
    <rect y="180" width="220" height="45" rx="22.5" fill="none" stroke="#FFD700" stroke-width="2.5" />
    <text x="110" y="208" font-family="'Inter', sans-serif" font-weight="900" font-size="14" fill="#FFD700" text-anchor="middle" letter-spacing="2">100% PREMIUM BEEF & CHICKEN</text>
  </g>

  {/* Right Side: Giant Premium Burger Vector */}
  <g transform="translate(850, 200) scale(0.65)">
    {/* Upper Bun */}
    <path d="M-220 -40 C-220 -150 -100 -200 0 -200 C100 -200 220 -150 220 -40 Z" fill="url(#bun)" />
    {/* sesame seeds */}
    <ellipse cx="-80" cy="-120" rx="6" ry="12" fill="#FFF8DC" transform="rotate(30 -80 -120)" />
    <ellipse cx="0" cy="-140" rx="6" ry="12" fill="#FFF8DC" transform="rotate(-15 0 -140)" />
    <ellipse cx="80" cy="-110" rx="6" ry="12" fill="#FFF8DC" transform="rotate(45 80 -110)" />
    <ellipse cx="-40" cy="-70" rx="6" ry="12" fill="#FFF8DC" transform="rotate(-30 -40 -70)" />
    <ellipse cx="50" cy="-75" rx="6" ry="12" fill="#FFF8DC" transform="rotate(15 50 -75)" />

    {/* Lettuce */}
    <path d="M-240 -40 H240 C255 -40 260 -25 245 -15 C230 -5 210 -15 195 -5 C180 5 185 15 165 15 C145 15 130 -5 110 5 C90 15 85 30 65 30 C45 30 35 10 15 15 C-5 20 -15 30 -35 30 C-55 30 -65 10 -85 15 C-105 20 -115 30 -135 30 C-155 30 -165 10 -185 15 C-205 20 -220 5 -235 -5 C-250 -15 -255 -40 -240 -40 Z" fill="#2E7D32" />

    {/* Melted Cheese */}
    <path d="M-210 0 H210 L180 60 L120 15 L60 80 L0 10 L-60 70 L-120 15 Z" fill="#FFC107" />

    {/* Double Patty */}
    <rect x="-220" y="20" width="440" height="70" rx="35" fill="#4E2B02" />
    <rect x="-215" y="40" width="430" height="15" rx="7.5" fill="#2E1600" />
    
    <rect x="-220" y="100" width="440" height="70" rx="35" fill="#3D1D00" />

    {/* Bottom Bun */}
    <path d="M-220 170 C-220 230 -140 240 0 240 C140 240 220 230 220 170 Z" fill="#AA7C11" />
  </g>
</svg>
`);

// --- BROAST CATEGORY BANNER ---
export const BROAST_BANNER = svgToDataUrl(`
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-broast" x1="0" y1="0" x2="1200" y2="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#4A0202" />
      <stop offset="60%" stop-color="#8B0000" />
      <stop offset="100%" stop-color="#2D0000" />
    </linearGradient>
    <linearGradient id="broastGold" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFF8DC" />
      <stop offset="50%" stop-color="#FFD700" />
      <stop offset="100%" stop-color="#AA7C11" />
    </linearGradient>
  </defs>

  <rect width="1200" height="400" fill="url(#bg-broast)" />
  <circle cx="950" cy="200" r="220" fill="#FFD700" opacity="0.06" />

  <g transform="translate(100, 80)">
    <rect width="160" height="35" rx="17.5" fill="#FFD700" />
    <text x="80" y="22" font-family="'Inter', sans-serif" font-weight="900" font-size="12" fill="#4A0202" text-anchor="middle" letter-spacing="2">KARACHI CRUNCH</text>
    <text x="0" y="90" font-family="'Lilita One', sans-serif" font-weight="900" font-size="80" fill="#FFFFFF">CRISPY BROAST</text>
    <text x="0" y="160" font-family="'Inter', sans-serif" font-weight="700" font-size="24" fill="#FFF8DC" opacity="0.8">Double Hand-Breaded Spicy & Golden Deep Fried Chicken</text>
  </g>

  {/* Heavy deep fried chicken drumstick vector */}
  <g transform="translate(880, 180) scale(0.95)">
    {/* Bone back */}
    <rect x="-10" y="90" width="30" height="110" rx="15" fill="#E2E8F0" transform="rotate(-30)" />
    <circle cx="50" cy="180" r="22" fill="#E2E8F0" />
    <circle cx="80" cy="160" r="22" fill="#E2E8F0" />

    {/* Golden crunchy chicken meat flesh */}
    <path d="M-130 -80 C-40 -120 70 -80 110 -30 C150 20 130 110 50 120 C-30 130 -120 110 -150 40 C-180 -30 -170 -60 -130 -80 Z" fill="url(#broastGold)" />
    {/* Crunchy flakes and texture decoration */}
    <path d="M-90 -40 Q-80 -55 -70 -40" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" />
    <path d="M-20 -60 Q-10 -75 0 -60" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" />
    <path d="M40 -30 Q50 -45 60 -30" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" />
    <path d="M-110 10 Q-100 -5 -90 10" stroke="#8A5A00" stroke-width="10" stroke-linecap="round" />
    <path d="M-50 40 Q-40 25 -30 40" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" />
    <path d="M15 50 Q25 35 35 50" stroke="#8A5A00" stroke-width="10" stroke-linecap="round" />
  </g>
</svg>
`);

// --- FRIES CATEGORY BANNER ---
export const FRIES_BANNER = svgToDataUrl(`
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-fries" x1="0" y1="0" x2="1200" y2="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#1A0D00" />
      <stop offset="50%" stop-color="#580000" />
      <stop offset="100%" stop-color="#1A0D00" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFF8DC" />
      <stop offset="100%" stop-color="#FFD700" />
    </linearGradient>
  </defs>

  <rect width="1200" height="400" fill="url(#bg-fries)" />
  
  <g transform="translate(100, 80)">
    <text x="0" y="30" font-family="'Inter', sans-serif" font-weight="900" font-size="18" fill="#FFD700" letter-spacing="4">HOT &amp; SEASONED</text>
    <text x="0" y="110" font-family="'Lilita One', sans-serif" font-weight="900" font-size="80" fill="#FFFFFF">CRISPY FRENCH FRIES</text>
    <text x="0" y="170" font-family="'Inter', sans-serif" font-weight="700" font-size="24" fill="#FFF8DC" opacity="0.8">Tossed with Secret Local Karachi Chatpata Spice Masala</text>
  </g>

  {/* Golden Fries holder box Vector */}
  <g transform="translate(880, 200) scale(0.72)">
    <g stroke="url(#goldGrad)" stroke-width="20" stroke-linecap="round">
      <line x1="-120" y1="-30" x2="-180" y2="-210" />
      <line x1="-70" y1="-60" x2="-100" y2="-240" />
      <line x1="-20" y1="-50" x2="-30" y2="-260" stroke-width="24" />
      <line x1="30" y1="-40" x2="40" y2="-270" stroke-width="26" />
      <line x1="80" y1="-60" x2="110" y2="-240" stroke-width="24" />
      <line x1="130" y1="-30" x2="190" y2="-210" />
    </g>
    {/* Pocket */}
    <path d="M-150 -50 L-100 180 C-90 220 90 220 100 180 L150 -50 Z" fill="#8B0000" stroke="#FFD700" stroke-width="5" />
    {/* Gold Seal */}
    <circle cx="0" cy="60" r="45" fill="#FFD700" />
    <path d="M-15 65 C-10 50 10 50 15 65" stroke="#580000" stroke-width="6" stroke-linecap="round" fill="none" />
  </g>
</svg>
`);

// --- SANDWICHES CATEGORY BANNER ---
export const SANDWICH_BANNER = svgToDataUrl(`
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="400" fill="#3A0808" />
  <circle cx="950" cy="200" r="220" fill="#FFD700" opacity="0.04" />
  <g transform="translate(100, 100)">
    <text x="0" y="10" font-family="'Inter', sans-serif" font-weight="950" font-size="16" fill="#FFD700" letter-spacing="4">TRIPLE-DECKER FEAST</text>
    <text x="0" y="80" font-family="'Lilita One', sans-serif" font-weight="900" font-size="70" fill="#FFFFFF">CLUB SANDWICHES</text>
    <text x="0" y="140" font-family="'Inter', sans-serif" font-weight="600" font-size="22" fill="#FFF8DC" opacity="0.8">Grilled slices stacked with smoky Tikka chunks, eggs &amp; cheese</text>
  </g>
  {/* Sandwich isometric slice vector */}
  <g transform="translate(880, 190) scale(0.85)">
    <path d="M-150 100 L150 100 L0 -100 Z" fill="#FFF8DC" stroke="#AA7C11" stroke-width="10" stroke-linejoin="round" />
    {/* layers */}
    <path d="M-130 90 L130 90 L0 -70 Z" fill="#2E7D32" />
    <path d="M-110 80 L110 80 L0 -50 Z" fill="#FFF4B8" />
    <path d="M-90 70 L90 70 L0 -30 Z" fill="#AA7000" />
    <path d="M-70 60 L70 60 L0 -10 Z" fill="#B22222" />
    <path d="M-135 100 L135 100 L0 -80 Z" fill="none" stroke="#D4AF37" stroke-width="8" stroke-linejoin="round" />
  </g>
</svg>
`);

// --- BBQ CATEGORY BANNER ---
export const BBQ_BANNER = svgToDataUrl(`
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="400" fill="#2B0505" />
  {/* Red fire glow */}
  <circle cx="950" cy="200" r="180" fill="#B22222" opacity="0.30" filter="blur(40px)" />
  <g transform="translate(100, 100)">
    <text x="0" y="10" font-family="'Inter', sans-serif" font-weight="900" font-size="16" fill="#FFD700" letter-spacing="4">RED-HOT COAL FIRED</text>
    <text x="0" y="80" font-family="'Lilita One', sans-serif" font-weight="900" font-size="70" fill="#FFFFFF">CHARCOAL BBQ</text>
    <text x="0" y="140" font-family="'Inter', sans-serif" font-weight="600" font-size="22" fill="#FFF8DC" opacity="0.8">Seekh Kababs, Creamy Malai Botis, and Spicy Tikkas</text>
  </g>
  {/* BBQ skewer vector */}
  <g transform="translate(880, 200) scale(0.85) rotate(45)">
    <line x1="-200" y1="0" x2="200" y2="0" stroke="#CBD5E1" stroke-width="12" stroke-linecap="round" />
    {/* Kebab chunks */}
    <rect x="-130" y="-30" width="70" height="60" rx="20" fill="#691D0E" stroke="#FFD700" stroke-width="3" />
    <rect x="-30" y="-35" width="80" height="70" rx="25" fill="#8B0000" stroke="#FFD700" stroke-width="3" />
    <rect x="70" y="-30" width="70" height="60" rx="20" fill="#580000" stroke="#FFD700" stroke-width="3" />
    {/* Black grill lines */}
    <line x1="-110" y1="-25" x2="-80" y2="25" stroke="#000000" stroke-width="5" />
    <line x1="10" y1="-30" x2="40" y2="30" stroke="#000000" stroke-width="5" />
    <line x1="90" y1="-25" x2="120" y2="25" stroke="#000000" stroke-width="5" />
  </g>
</svg>
`);

// --- MEGA DEALS CATEGORY BANNER ---
export const DEALS_BANNER = svgToDataUrl(`
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="400" fill="#4B0000" />
  <g transform="translate(100, 100)">
    <text x="0" y="10" font-family="'Inter', sans-serif" font-weight="900" font-size="16" fill="#FFD700" letter-spacing="4">MEGA DISCOUNT PACKS</text>
    <text x="0" y="80" font-family="'Lilita One', sans-serif" font-weight="900" font-size="75" fill="#FFFFFF">SPECIAL MEALS &amp; DEALS</text>
    <text x="0" y="140" font-family="'Inter', sans-serif" font-weight="600" font-size="22" fill="#FFF8DC" opacity="0.8">Pocket-friendly combination meals packed for full families</text>
  </g>
  {/* Deal vector: Star emblem badge inside circular ribbon */}
  <g transform="translate(900, 200) scale(1)">
    <circle cx="0" cy="0" r="110" fill="#FFD700" />
    <circle cx="0" cy="0" r="95" fill="#8B0000" />
    {/* Star */}
    <path d="M0 -60 L18 -20 L60 -20 L26 10 L40 50 L0 30 L-40 50 L-26 10 L-60 -20 L-18 -20 Z" fill="#FFD700" />
    <text x="0" y="75" font-family="'Inter', sans-serif" font-weight="950" font-size="18" fill="#FFD700" text-anchor="middle" letter-spacing="3">SAVE BIG</text>
  </g>
</svg>
`);

// --- PARATHA ROLLS CATEGORY BANNER ---
export const ROLL_BANNER = svgToDataUrl(`
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="400" fill="#2E0A0A" />
  <g transform="translate(100, 100)">
    <text x="0" y="10" font-family="'Inter', sans-serif" font-weight="900" font-size="16" fill="#FFD700" letter-spacing="4">FLAKY &amp; WRAPPED</text>
    <text x="0" y="80" font-family="'Lilita One', sans-serif" font-weight="900" font-size="70" fill="#FFFFFF">PARATHA ROLLS</text>
    <text x="0" y="140" font-family="'Inter', sans-serif" font-weight="600" font-size="22" fill="#FFF8DC" opacity="0.8">Tikka Botis &amp; Zingers cozy wrapped in signature crispy puri paratha</text>
  </g>
  {/* Paratha roll wrapped in silver foil */}
  <g transform="translate(880, 200) scale(0.85) rotate(-35)">
    <rect x="-50" y="-120" width="90" height="250" rx="45" fill="#FFF8DC" stroke="#D4AF37" stroke-width="5" />
    <path d="M-50 10 L40 10 L40 130 L-50 130 Z" fill="#CBD5E1" />
    {/* foil wrinkles */}
    <line x1="-40" y1="40" x2="30" y2="70" stroke="#94A3B8" stroke-width="4" />
    <line x1="-30" y1="90" x2="20" y2="105" stroke="#FFFFFF" stroke-width="4" />
    {/* Tikka stuffing coming out */}
    <circle cx="-10" cy="-125" r="20" fill="#B22222" />
    <circle cx="15" cy="-118" r="18" fill="#AA7C11" />
  </g>
</svg>
`);

// --- BEVERAGES CATEGORY BANNER ---
export const BEVERAGES_BANNER = svgToDataUrl(`
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="400" fill="#0D2E14" />
  <g transform="translate(100, 100)">
    <text x="0" y="10" font-family="'Inter', sans-serif" font-weight="900" font-size="16" fill="#FFD700" letter-spacing="4">ICE COLD QUENCHERS</text>
    <text x="0" y="80" font-family="'Lilita One', sans-serif" font-weight="900" font-size="70" fill="#FFFFFF">CHILLED BEVERAGES</text>
    <text x="0" y="140" font-family="'Inter', sans-serif" font-weight="600" font-size="22" fill="#FFF8DC" opacity="0.8">Carbonated sodas &amp; mineral drinks served ice dead cold</text>
  </g>
  {/* Cold can soda vector with Pakola branding */}
  <g transform="translate(880, 200) scale(0.9)">
    <rect x="-50" y="-100" width="100" height="190" rx="20" fill="#10B981" stroke="#FFF8DC" stroke-width="5" />
    {/* Can lid top */}
    <ellipse cx="0" cy="-100" rx="50" ry="15" fill="#E2E8F0" stroke="#FFF8DC" stroke-width="3" />
    <rect x="-10" y="-102" width="20" height="10" rx="3" fill="#94A3B8" />
    {/* Pakola star/moon white vector graphic imprint */}
    <circle cx="0" cy="0" r="30" fill="#FFFFFF" />
    <circle cx="8" cy="-2" r="24" fill="#10B981" />
    <path d="M-15 -10 L-8 5 L6 -10 L-15 -10" fill="#FFFFFF" />
    {/* Condensation ice drops */}
    <circle cx="-35" cy="40" r="4" fill="#FFFFFF" opacity="0.7" />
    <circle cx="28" cy="-40" r="3.5" fill="#FFFFFF" opacity="0.6" />
    <circle cx="-20" cy="-60" r="5" fill="#FFFFFF" opacity="0.8" />
  </g>
</svg>
`);

// --- SIDES CATEGORY BANNER ---
export const SIDES_BANNER = svgToDataUrl(`
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="400" fill="#221102" />
  <g transform="translate(100, 100)">
    <text x="0" y="10" font-family="'Inter', sans-serif" font-weight="900" font-size="16" fill="#FFD700" letter-spacing="4">ADD DELICIOUS EXTRAS</text>
    <text x="0" y="80" font-family="'Lilita One', sans-serif" font-weight="900" font-size="70" fill="#FFFFFF">SIDES &amp; EXTRAS</text>
    <text x="0" y="140" font-family="'Inter', sans-serif" font-weight="600" font-size="22" fill="#FFF8DC" opacity="0.8">Buttery roasted buns, puri parathas, and spicy dip sauces</text>
  </g>
  {/* Dip sauce bowl vector */}
  <g transform="translate(880, 200) scale(0.95)">
    <path d="M-90 -10 C-90 60 90 60 90 -10 Z" fill="#E2E8F0" stroke="#FFD700" stroke-width="4" />
    {/* Sauce cream */}
    <ellipse cx="0" cy="-10" rx="86" ry="25" fill="#F1F5F9" />
    {/* Garlic chunks */}
    <circle cx="-30" cy="-8" r="6" fill="#E2E8F0" />
    <circle cx="10" cy="-15" r="5" fill="#E2E8F0" />
    <circle cx="40" cy="-6" r="7" fill="#CBD5E1" />
    {/* Herb leaf */}
    <path d="M-5 -25 Q15 -35 25 -20 Q5 -15 -5 -25" fill="#16A34A" />
  </g>
</svg>
`);

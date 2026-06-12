import { svgToDataUrl } from './categoryBanners';

export const HERO_FEAST = svgToDataUrl(`
<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="feastBg" cx="300" cy="300" r="300" fx="300" fy="300" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#3D0808" />
      <stop offset="65%" stop-color="#1E0202" />
      <stop offset="100%" stop-color="#050000" />
    </radialGradient>
    <linearGradient id="ironPlate" x1="150" y1="150" x2="450" y2="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#475569" />
      <stop offset="50%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>
    <linearGradient id="burgerGold" x1="300" y1="180" x2="300" y2="340" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFF8DC" />
      <stop offset="40%" stop-color="#FFD700" />
      <stop offset="100%" stop-color="#AA7C11" />
    </linearGradient>
  </defs>

  {/* Base Plate background */}
  <circle cx="300" cy="300" r="280" fill="url(#feastBg)" />
  <circle cx="300" cy="300" r="260" fill="url(#ironPlate)" stroke="#D4AF37" stroke-width="6" />
  
  {/* Inner grill ridges */}
  <circle cx="300" cy="300" r="230" fill="none" stroke="#000" stroke-width="8" opacity="0.4" />
  <circle cx="300" cy="300" r="200" fill="none" stroke="#000" stroke-width="4" opacity="0.3" />

  {/* Sizzling Heat waves */}
  <path d="M190 220 Q200 190 210 220" stroke="#FFD700" stroke-width="3" stroke-linecap="round" opacity="0.2" />
  <path d="M410 220 Q420 190 430 220" stroke="#FFD700" stroke-width="3" stroke-linecap="round" opacity="0.2" />
  <path d="M300 130 Q310 100 320 130" stroke="#FFD700" stroke-width="3" stroke-linecap="round" opacity="0.25" />

  {/* Fries Pile (Left Side Layout) */}
  <g transform="translate(180, 310) rotate(-35)">
    <g stroke="#FFD700" stroke-width="14" stroke-linecap="round">
      <line x1="-60" y1="20" x2="-80" y2="-90" />
      <line x1="-30" y1="30" x2="-35" y2="-100" stroke="#FFF8DC" />
      <line x1="0" y1="10" x2="5" y2="-110" />
      <line x1="30" y1="20" x2="40" y2="-95" stroke="#FFF8DC" />
      <line x1="60" y1="30" x2="80" y2="-80" />
    </g>
  </g>

  {/* BBQ Seekh Kabab Logs (Right Side Layout) */}
  <g transform="translate(420, 270) rotate(55)">
    <rect x="-110" y="-30" width="220" height="42" rx="16" fill="#5C2508" stroke="#D4AF37" stroke-width="3" />
    <line x1="-80" y1="-10" x2="-50" y2="-10" stroke="#100302" stroke-width="6" stroke-linecap="round" />
    <line x1="0" y1="-10" x2="30" y2="-10" stroke="#100302" stroke-width="6" stroke-linecap="round" />

    <rect x="-90" y="25" width="200" height="40" rx="15" fill="#421102" stroke="#AA7C11" stroke-width="3" />
  </g>

  {/* Sizzling Red Pepper slices */}
  <circle cx="210" cy="420" r="15" fill="none" stroke="#EF4444" stroke-width="8" />
  <circle cx="390" cy="410" r="12" fill="none" stroke="#EF4444" stroke-width="6" />

  {/* Centerpiece: Majestic Double Zinger Burger */}
  <g transform="translate(300, 320) scale(0.9)">
    {/* Upper Bun */}
    <path d="M-130 -30 C-130 -115 -60 -150 0 -150 C60 -150 130 -115 130 -30 Z" fill="url(#burgerGold)" stroke="#FFF8DC" stroke-width="3" />
    {/* Sesames */}
    <ellipse cx="-40" cy="-90" rx="4" ry="8" fill="#FFFDF2" transform="rotate(20 -40 -90)" />
    <ellipse cx="40" cy="-80" rx="4" ry="8" fill="#FFFDF2" transform="rotate(-20 40 -80)" />
    <ellipse cx="0" cy="-105" rx="4" ry="8" fill="#FFFDF2" />

    {/* Crisp Lettuce */}
    <path d="M-140 -30 H140 C145 -30 150 -20 142 -10 C135 0 120 -10 110 0 C100 10 90 20 75 15 C60 10 50 0 35 5 C20 10 10 20 -10 20 C-30 20 -40 10 -55 15 C-70 20 -80 15 -95 10 C-110 5 -120 0 -130 5 C-140 10 -145 -20 -140 -30 Z" fill="#2E7D32" />

    {/* Melted Cheese drip */}
    <path d="M-125 0 H125 L110 35 L80 10 L40 45 L0 5 L-40 40 L-80 10 Z" fill="#FFC107" />

    {/* Crunchy Patty 1 */}
    <rect x="-135" y="15" width="270" height="42" rx="21" fill="#A51D24" stroke="#FFD700" stroke-width="2" />

    {/* Melted Cheese drip 2 */}
    <path d="M-125 55 H125 L105 85 L70 65 L30 90 L-10 60 L-50 85 L-90 60 Z" fill="#FFB300" />

    {/* Patty 2 */}
    <rect x="-135" y="65" width="270" height="42" rx="21" fill="#801015" stroke="#AA7C11" stroke-width="2" />

    {/* Bottom Bun */}
    <path d="M-130 105 C-130 145 -80 150 0 150 C80 150 130 145 130 105 Z" fill="#AA7C11" />
  </g>

  {/* Brand ribbon stars garnish */}
  <path d="M120 160 L130 175 L150 175 L135 185 L140 205 L120 195 L100 205 L105 185 L90 175 L110 175 Z" fill="#FFD700" />
  <path d="M480 160 L490 175 L510 175 L495 185 L500 205 L480 195 L460 205 L465 185 L450 175 L470 175 Z" fill="#FFD700" />
</svg>
`);

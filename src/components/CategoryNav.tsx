import React, { useRef, useEffect, useState } from 'react';
import { CATEGORIES } from '../data';
import { MenuItemCategory } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryNavProps {
  activeCategory: MenuItemCategory;
  onSelectCategory: (category: MenuItemCategory) => void;
  headerHeight: number;
  searchQuery: string;
  onClearSearch: () => void;
}

export default function CategoryNav({ 
  activeCategory, 
  onSelectCategory, 
  headerHeight, 
  searchQuery, 
  onClearSearch,
}: CategoryNavProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Auto-scroll inside horizontal navbar to center the active category item when activeCategory changes
  useEffect(() => {
    const activeBtn = document.getElementById(`nav-item-${activeCategory}`);
    const container = scrollContainerRef.current;
    if (activeBtn && container) {
      const containerWidth = container.offsetWidth;
      const btnLeft = activeBtn.offsetLeft;
      const btnWidth = activeBtn.offsetWidth;
      
      // Calculate scroll position to center the active button inside the horizontal scrolling bar
      const targetScrollLeft = btnLeft - (containerWidth / 2) + (btnWidth / 2);
      
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);

  // Scroll handler to toggle arrows visibility
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const isLeft = el.scrollLeft > 10;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const isRight = el.scrollLeft < maxScroll - 10;
      
      setShowLeftArrow((prev) => (prev !== isLeft ? isLeft : prev));
      setShowRightArrow((prev) => (prev !== isRight ? isRight : prev));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Trigger initial check
      checkScroll();
      // Handle resize check
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  // Smooth scroll click
  const scrollToCategory = (catId: MenuItemCategory) => {
    if (searchQuery) {
      onClearSearch();
    }
    onSelectCategory(catId);
    
    // Smooth delay allows React to fully re-render and insert the matching list items in the DOM
    setTimeout(() => {
      const element = document.getElementById(`category-${catId}`);
      if (element) {
        // Dynamic combined offset for stickiness
        const headerOffset = headerHeight + 68;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 120);
  };

  const handleScrollLeft = () => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    const el = scrollContainerRef.current;
    if (el) {
      el.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="category-navigation-sticky-wrapper" 
      className="sticky z-30 bg-[#5c0011]/95 backdrop-blur-md shadow-luxury-glow border-b border-[#D4AF37]/50 py-3.5 transition-all duration-300"
      style={{ top: '0px' }}
    >
      <div className="max-w-7xl mx-auto px-4 relative flex items-center">
        {/* Left Arrow Button for Desktop Scrolling */}
        {showLeftArrow && (
          <button
            id="scroll-category-left"
            onClick={handleScrollLeft}
            className="absolute left-1 z-10 bg-[#D4AF37] text-[#5c0011] p-2 rounded-full shadow-lg hover:bg-white border border-white transition focus:outline-none cursor-pointer hidden md:flex"
            aria-label="Scroll left categories"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
        )}

        {/* Scrollable category list */}
        <div
          id="category-scroll-container"
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex items-center gap-2 sm:gap-3.5 overflow-x-auto no-scrollbar py-1 w-full scroll-smooth select-none px-2"
        >
          {CATEGORIES.map((cat, i) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                id={`nav-item-${cat.id}`}
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`py-2 px-6 rounded-full font-sans font-extrabold text-xs sm:text-sm tracking-wider transition-all duration-300 uppercase whitespace-nowrap cursor-pointer flex items-center gap-1 border-2 ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#5c0011] border-[#D4AF37] scale-105 shadow-md font-black'
                    : 'bg-transparent text-[#FFFDF5]/85 border-transparent hover:text-[#D4AF37] hover:scale-102 hover:border-[#D4AF37]/20'
                }`}
              >
                <span className="font-sans tracking-wide">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Right Arrow Button for Desktop Scrolling */}
        {showRightArrow && (
          <button
            id="scroll-category-right"
            onClick={handleScrollRight}
            className="absolute right-1 z-10 bg-[#D4AF37] text-white p-1.5 rounded-full shadow-lg hover:bg-white border border-white transition focus:outline-none cursor-pointer hidden md:flex"
            aria-label="Scroll right categories"
          >
            <ChevronRight className="w-5 h-5 flex m-auto text-[#5c0011]" />
          </button>
        )}
      </div>
    </div>
  );
}

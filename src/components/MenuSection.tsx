import React, { useMemo } from 'react';
import { MenuItem, MenuItemCategory } from '../types';
import { MENU_ITEMS, CATEGORIES } from '../data';
import { Flame, Sparkles, AlertCircle, Plus } from 'lucide-react';
import SafeImage from './SafeImage';

interface MenuItemCardProps {
  item: MenuItem;
  quantity: number;
  onUpdateSlipQuantity: (itemId: string, delta: number) => void;
  isShopOpen: boolean;
}

const MenuItemCard = React.memo(
  function MenuItemCard({
    item,
    quantity,
    onUpdateSlipQuantity,
    isShopOpen,
  }: MenuItemCardProps) {
    return (
      <div
        id={`menu-item-${item.id}`}
        className="bg-white rounded-3xl overflow-hidden shadow-luxury-glow hover:shadow-[0_20px_45px_rgba(92,0,17,0.12)] border border-zinc-100 hover:border-[#D4AF37] transition-all duration-300 flex flex-row items-stretch justify-between p-4 sm:p-5 gap-3.5 sm:gap-4.5 group relative hover:-translate-y-1"
      >
        {/* Left Column: Product Details and Action Buttons */}
        <div className="flex flex-col justify-between flex-grow min-w-0">
          <div>
            {/* Urdu & English Titles */}
            <div className="flex items-baseline gap-2 flex-wrap">
              <h4 className="text-base sm:text-lg font-extrabold text-zinc-900 group-hover:text-[#5c0011] transition-colors duration-200 leading-snug break-words">
                {item.name}
              </h4>
              <span className="text-[#5c0011] font-black text-[10px] sm:text-xs bg-[#F9F5EB] border border-[#D4AF37]/30 px-2 py-0.5 rounded-lg whitespace-nowrap">
                {item.urduName}
              </span>
            </div>

            {/* Description text */}
            <p className="text-zinc-500 text-[11px] sm:text-xs leading-relaxed mt-2 line-clamp-2 select-none font-sans font-normal">
              {item.description}
            </p>

            {/* Status and taste flags */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {item.isPopular && (
                <span className="bg-[#5c0011]/8 text-[#5c0011] text-[8px] sm:text-[9px] font-black px-2.5 py-0.5 rounded-full tracking-wider font-sans uppercase border border-[#5c0011]/15">
                  ★ Chef Spec
                </span>
              )}
              {item.isSpicy && (
                <span className="bg-[#D4AF37]/15 text-[#800016] text-[8px] sm:text-[9px] font-black px-2.5 py-0.5 rounded-full tracking-wider font-sans uppercase border border-[#D4AF37]/20">
                  🌶 SPICY AUTHENTIC
                </span>
              )}
            </div>
          </div>

          {/* Price & Action counter row */}
          <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between gap-1.5 sm:gap-4">
            <div className="flex flex-col">
              <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-wider font-sans">Price</span>
              <span className="text-sm sm:text-base font-black text-[#5c0011] leading-none">
                Rs. {item.price}
              </span>
            </div>

            {/* Action Control Trigger */}
            <div className="flex items-center">
              {isShopOpen ? (
                quantity === 0 ? (
                  <button
                    onClick={() => onUpdateSlipQuantity(item.id, 1)}
                    className="bg-[#5c0011] hover:bg-[#800016] text-white font-sans font-black text-[10px] sm:text-xs px-3.5 sm:px-4.5 py-2 rounded-full transition-all flex items-center justify-center gap-1 shadow-sm hover:scale-105 active:scale-95 border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] cursor-pointer leading-none"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[3px] text-[#D4AF37]" />
                    <span>ADD</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-2 bg-[#F9F5EB] border border-[#D4AF37]/20 p-1 rounded-full shadow-inner">
                    <button
                      onClick={() => onUpdateSlipQuantity(item.id, -1)}
                      className="w-5 sm:w-6 h-5 sm:h-6 bg-white hover:bg-zinc-100 text-[#5c0011] font-black rounded-full flex items-center justify-center text-xs cursor-pointer active:scale-90 border border-zinc-100"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="font-sans font-black text-xs text-[#5c0011] w-3.5 text-center select-none">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onUpdateSlipQuantity(item.id, 1)}
                      className="w-5 sm:w-6 h-5 sm:h-6 bg-white hover:bg-zinc-100 text-[#5c0011] font-black rounded-full flex items-center justify-center text-xs cursor-pointer active:scale-90 border border-zinc-100"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                )
              ) : (
                <span className="text-[9px] bg-zinc-100 text-zinc-400 font-black px-2.5 py-1 rounded-full uppercase tracking-wider select-none">
                  CLOSED
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Circular Food Thumbnail */}
        <div className="flex-shrink-0 flex items-center justify-center pl-1">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 rounded-full overflow-hidden border-2 border-[#D4AF37]/45 shadow-lg transform group-hover:scale-103 transition duration-500">
            <SafeImage
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-108 transition-all duration-750 ease-out"
              category={item.category}
            />
            {/* Subtle dark glow shading at bottom */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.quantity === nextProps.quantity &&
      prevProps.isShopOpen === nextProps.isShopOpen &&
      prevProps.item.id === nextProps.item.id &&
      prevProps.item.price === nextProps.item.price &&
      prevProps.item.name === nextProps.item.name &&
      prevProps.item.imageUrl === nextProps.item.imageUrl
    );
  }
);

interface MenuSectionProps {
  searchQuery: string;
  activeCategory: MenuItemCategory;
  whatsappNumber: string;
  orderSlip: { [itemId: string]: number };
  onUpdateSlipQuantity: (itemId: string, delta: number) => void;
  isShopOpen: boolean;
}

function MenuSectionComponent({
  searchQuery,
  orderSlip,
  onUpdateSlipQuantity,
  isShopOpen,
}: MenuSectionProps) {
  
  // Filter items dynamically using useMemo so we don't recalculate on other state changes
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.urduName.includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  // Group filtered items by category using useMemo
  const categoriesList = useMemo(() => {
    return CATEGORIES.filter((cat) => {
      if (searchQuery) {
        return filteredItems.some((item) => item.category === cat.id);
      }
      return true;
    });
  }, [searchQuery, filteredItems]);

  return (
    <section id="menu-catalog-section" className="py-2 px-1 max-w-7xl mx-auto">
      {searchQuery && (
        <div className="mb-8 p-4 bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-5 h-5 text-[#5c0011] animate-pulse" />
            <p className="text-sm font-sans text-gray-800">
              Showing search results for "<strong className="text-[#5c0011]">{searchQuery}</strong>". Found{' '}
              <strong>{filteredItems.length}</strong> delicious items.
            </p>
          </div>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="text-xs font-black text-[#5c0011] hover:underline uppercase cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}

      {filteredItems.length === 0 ? (
        <div id="no-search-results" className="text-center py-20 bg-white rounded-3xl border border-gray-100 max-w-lg mx-auto shadow-luxury-glow">
          <div className="w-16 h-16 bg-[#5c0011]/10 text-[#5c0011] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D4AF37]/30">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-black text-[#5c0011]">No delicious foods match your search!</h3>
          <p className="text-gray-500 text-sm mt-1.5 font-sans px-6">
            Try checking spelling or type other tags like "Cheese", "Fries", "Zinger", "Tikka", "Kabab", etc.
          </p>
        </div>
      ) : (
        <div className="space-y-16">
          {categoriesList.map((cat) => {
            const catItems = filteredItems.filter((item) => item.category === cat.id);

            return (
              <div
                key={cat.id}
                id={`category-${cat.id}`}
                className="scroll-mt-header"
              >
                {/* Clean, Premium Category Header Ribbon: Cabernet & gold classic border */}
                <div className="relative overflow-hidden bg-gradient-to-r from-[#5c0011] via-[#4d000e] to-[#300008] text-white py-6 px-6 sm:px-10 rounded-3xl shadow-[0_12px_32px_rgba(92,0,17,0.15)] border-b-2 border-[#D4AF37] mb-8 select-none flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Subtle decorative gold light */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="flex flex-col text-center md:text-left relative z-10">
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2.5 sm:gap-4">
                      <h3 className="font-serif text-3xl sm:text-4xl text-white font-black tracking-wide drop-shadow mb-0 uppercase">
                        {cat.title}
                      </h3>
                      <span className="bg-[#D4AF37] text-[#5c0011] text-[11px] sm:text-xs font-sans font-black px-3 py-0.5 rounded-full shadow-sm">
                        {cat.urduTitle}
                      </span>
                    </div>
                    {cat.description && (
                      <p className="text-zinc-200/95 text-xs sm:text-sm font-sans font-medium mt-2 max-w-xl leading-relaxed">
                        {cat.description}
                      </p>
                    )}
                  </div>
                  <div className="hidden md:block flex-shrink-0 text-[#D4AF37]/15 font-serif font-black text-3xl select-none pointer-events-none uppercase tracking-wider italic">
                    KAMI GOURMET
                  </div>
                </div>

                {/* Grid List of Cards in current Category (Horizontal Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                  {catItems.map((item) => {
                    const quantity = orderSlip[item.id] || 0;
                    return (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        quantity={quantity}
                        onUpdateSlipQuantity={onUpdateSlipQuantity}
                        isShopOpen={isShopOpen}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

// Wrap complete MenuSection in React.memo so it skips rendering unless its core props change
export default React.memo(MenuSectionComponent);

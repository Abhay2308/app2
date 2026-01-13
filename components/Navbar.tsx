
import React, { useState, useRef, useEffect } from 'react';
import { PRODUCTS } from './Products';

interface NavbarProps {
  onProductSelect: (id: number) => void;
  onLogoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onProductSelect, onLogoClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const links = [
    { name: "Best Sellers", href: "#all-products" },
    { name: "All Products", href: "#all-products" },
    { name: "About Us", href: "#about-us" },
    { name: "Business Enquiry", href: "#business-enquiry" }
  ];

  const filteredResults = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.tag.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const handleLogoInternal = (e: React.MouseEvent) => {
    e.preventDefault();
    onLogoClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (id: number) => {
    onProductSelect(id);
    setSearchQuery('');
    setShowDropdown(false);
    setIsOpen(false);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="sticky top-20 md:top-28 w-full bg-white/95 backdrop-blur-md z-[90] border-b-2 border-brandOrange py-4 px-6 md:px-12 flex justify-between items-center transition-all">
        <div 
          onClick={handleLogoInternal}
          className="logo-text text-2xl tracking-tighter text-black flex items-center shrink-0 cursor-pointer group"
        >
          SNACKBURST<span className="text-brandOrange text-4xl leading-none transition-transform group-hover:scale-125 inline-block">.</span>
        </div>
        
        {/* Desktop Links & Search */}
        <div className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
          <div className="flex space-x-8 mr-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-poppins font-bold text-[11px] transition-colors duration-300 hover:text-brandOrange uppercase tracking-[0.25em]"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Functional Search Bar with Dropdown */}
          <div className="relative group max-w-xs w-full" ref={dropdownRef}>
            <input
              type="text"
              value={searchQuery}
              onFocus={() => setShowDropdown(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
              }}
              placeholder="Search flavors..."
              className="w-full bg-gray-50 border-2 border-transparent focus:border-brandOrange focus:ring-4 focus:ring-brandOrange/10 focus:bg-white px-5 py-2.5 rounded-full outline-none font-poppins font-bold text-[11px] uppercase tracking-wider transition-all duration-300 shadow-inner"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brandOrange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Results Dropdown */}
            {showDropdown && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-2xl border-2 border-gray-100 overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2 duration-300">
                {filteredResults.length > 0 ? (
                  <div className="p-2">
                    <p className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50">Results</p>
                    {filteredResults.map(p => (
                      <div 
                        key={p.id}
                        onClick={() => handleSelectProduct(p.id)}
                        className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer group/item"
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100 group-hover/item:border-brandOrange transition-all">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-poppins font-black text-xs uppercase tracking-tight group-hover/item:text-brandOrange transition-colors">{p.name}</span>
                          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{p.tag}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="font-poppins font-bold text-xs uppercase text-gray-400">No crunch found</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-black focus:outline-none p-2 rounded-lg bg-gray-50 border border-gray-100 active:scale-90 transition-transform"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[101] transition-all duration-500 ease-in-out lg:hidden ${isOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <div className="p-8 flex flex-col h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <div 
              onClick={(e) => { handleLogoInternal(e); setIsOpen(false); }}
              className="logo-text text-2xl tracking-tighter text-black cursor-pointer"
            >
              SNACKBURST<span className="text-brandOrange text-4xl leading-none">.</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-4 bg-brandOrange text-white rounded-2xl shadow-xl active:scale-95 transition-transform"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-12 relative">
            <label className="font-poppins font-black text-[10px] uppercase tracking-widest text-gray-400 mb-3 block">Find your crunch</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="EG. PERI PERI..."
                className="w-full bg-gray-100 border-4 border-transparent focus:border-brandOrange px-6 py-5 rounded-3xl outline-none font-poppins font-black text-xl uppercase tracking-tighter transition-all"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-brandOrange">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {searchQuery && (
              <div className="mt-4 bg-gray-50 rounded-3xl p-4 space-y-4 max-h-[40vh] overflow-y-auto border-2 border-gray-100">
                {filteredResults.map(p => (
                  <div key={p.id} onClick={() => handleSelectProduct(p.id)} className="flex items-center space-x-4 p-2 bg-white rounded-2xl shadow-sm border border-transparent active:border-brandOrange">
                    <img src={p.image} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <p className="font-poppins font-black text-sm uppercase tracking-tight">{p.name}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{p.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex flex-col space-y-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => { setIsOpen(false); onLogoClick(); }}
                className="font-poppins font-black text-4xl uppercase tracking-tighter hover:text-brandOrange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

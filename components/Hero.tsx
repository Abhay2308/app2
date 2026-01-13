
import React, { useState, useEffect } from 'react';

const SHARED_IMAGE = "https://i0.wp.com/aartimadan.com/wp-content/uploads/2020/07/Makhana-4-Flavours.jpg?w=1000&ssl=1";
const NEW_IMAGE = "https://5.imimg.com/data5/SELLER/Default/2021/9/YJ/UZ/BD/2464751/roasted-makhana-picture.jpg";

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [SHARED_IMAGE, NEW_IMAGE];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full bg-white h-[60vh] md:h-[80vh] p-4 md:p-8 overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brandOrange opacity-[0.05] rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandOrange opacity-[0.05] rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-8 md:border-[16px] border-brandOrange shadow-2xl bg-white">
        {slides.map((url, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-110'
            }`}
          >
            <img
              src={url}
              alt={`Flavoured Makhana Showcase ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-[4s] ease-linear transform scale-100 hover:scale-105"
            />
          </div>
        ))}

        {/* Floating Premium Badge - Adjusted for mobile/tablet responsive sizing */}
        <div className="absolute top-4 sm:top-8 md:top-12 left-4 sm:left-8 md:left-12 z-30 bg-black text-white px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 rounded-full font-poppins font-black text-[7px] sm:text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase border-2 border-brandOrange/30 shadow-2xl transition-all duration-300">
          Premium Snacking
        </div>

        {/* Bottom Carousel Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-3 rounded-full transition-all duration-700 shadow-xl ${
                idx === activeIndex ? 'w-24 bg-brandOrange' : 'w-4 bg-white/40 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

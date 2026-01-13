
import React from 'react';

export const AnnouncementBar: React.FC = () => {
  const fragments = [
    "100% Guilt Free", 
    "No Palm Oil", 
    "Gluten Free", 
    "Baked - Never Fried", 
    "Protein Rich"
  ];
  
  const set = (
    <div className="flex items-center">
      {fragments.map((text, idx) => (
        <React.Fragment key={idx}>
          <span className="px-8 md:px-16 font-poppins font-bold text-[10px] md:text-[11px] tracking-[0.3em] text-white uppercase whitespace-nowrap">
            {text}
          </span>
          <span className="text-white/30 font-light text-xl select-none">/</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-full h-8 md:h-10 bg-brandOrange z-[110] flex items-center overflow-hidden border-b border-black/5">
      {/* Subtle Grain Overlay for Premium Feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="animate-marquee flex items-center">
        {set}
        {set}
        {set}
        {set}
      </div>
    </div>
  );
};


import React from 'react';

export const AnnouncementBar: React.FC = () => {
  const fragments = ["100% Guilt Free", "No Palm Oil", "Gluten Free"];
  
  // Create a reusable set of fragments for the marquee loop
  const set = (
    <div className="flex items-center">
      {fragments.map((text, idx) => (
        <React.Fragment key={idx}>
          <span className="px-12 md:px-24 font-poppins font-black text-2xl md:text-4xl tracking-tighter text-white uppercase whitespace-nowrap">
            {text}
          </span>
          <span className="text-white/40 font-black text-4xl md:text-5xl select-none">•</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-full h-20 md:h-28 bg-brandOrange z-[100] flex items-center overflow-hidden border-b-4 border-black/10 shadow-2xl">
      <div className="animate-marquee flex items-center">
        {set}
        {set}
        {set}
        {set}
      </div>
    </div>
  );
};

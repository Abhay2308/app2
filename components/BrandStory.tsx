
import React from 'react';

const SHARED_IMAGE = "https://i0.wp.com/aartimadan.com/wp-content/uploads/2020/07/Makhana-4-Flavours.jpg?w=1000&ssl=1";

export const BrandStory: React.FC = () => {
  return (
    <section id="about-us" className="py-24 px-6 md:px-12 bg-brandOrange text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative z-10">
          <h2 className="section-heading mb-10 border-l-4 border-white pl-6 uppercase tracking-tighter">The Vibe</h2>
          <div className="body-text space-y-8 text-xl md:text-2xl font-light">
            <p className="leading-relaxed">
              <span className="bg-white text-brandOrange px-4 py-1 font-extrabold rounded-lg inline-block transform -rotate-1 shadow-lg">Born foodies, turned snack-geeks</span>— we refuse to call snacking a sin. 
            </p>
            <p className="leading-relaxed font-medium">
              So we took India's very own superfood, spiced it up with <span className="underline decoration-white decoration-4 underline-offset-8 font-black">crazy-good flavours</span>, and made guilt-free munching a global vibe. 
            </p>
            <p className="leading-relaxed font-poppins font-extrabold text-3xl md:text-5xl uppercase tracking-tighter mt-12">
              Snack without regret, we have got your back.
            </p>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-6 border-4 border-white/20 rounded-[3rem] -rotate-3"></div>
          <img
            src={SHARED_IMAGE}
            alt="Makhana Superfood"
            className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5] relative z-10 border-4 border-white transform hover:rotate-1 transition-transform duration-700"
          />
          {/* Pop-out element */}
          <div className="absolute -bottom-10 -right-10 bg-black text-white p-10 rounded-[2.5rem] z-20 shadow-2xl hidden md:block border-4 border-white">
            <p className="font-poppins font-black text-4xl uppercase leading-none">Zero<br/><span className="text-brandOrange">Guilt</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

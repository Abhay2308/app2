
import React from 'react';

const SHARED_IMAGE = "https://i0.wp.com/aartimadan.com/wp-content/uploads/2020/07/Makhana-4-Flavours.jpg?w=1000&ssl=1";

const TESTIMONIALS = [
  { id: 1, name: "@sarah_fit", content: "Best office snacks I've ever had. No mid-day crash!", image: SHARED_IMAGE },
  { id: 2, name: "@thehealthychef", content: "Love the ingredient list. Clean, simple, and actually tasty.", image: SHARED_IMAGE },
  { id: 3, name: "@snack_enthusiast", content: "The Makhana is to die for. 10/10 recommendation.", image: SHARED_IMAGE },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-brandOrange font-bold uppercase tracking-[0.4em] text-xs">Community Feedback</span>
          <h2 className="section-heading mt-4 uppercase tracking-tighter">
            What <span className="text-brandOrange">Snack Bursters</span> Have To Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative group overflow-hidden rounded-[3rem] aspect-[3/4] bg-black border-4 border-transparent hover:border-brandOrange transition-all duration-500 shadow-xl">
              <img
                src={t.image}
                alt={t.name}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-full bg-brandOrange flex items-center justify-center text-white mb-6 shadow-2xl transform group-hover:rotate-12 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.75a16,16,0,0,1-24.32-13.75V40a16,16,0,0,1,24.32-13.75l144.08,88.24A15.74,15.74,0,0,1,240,128Z"></path></svg>
                  </div>
                  <p className="text-white font-inter italic text-lg mb-4 leading-relaxed line-clamp-3">
                    "{t.content}"
                  </p>
                  <p className="text-brandOrange font-poppins font-black tracking-widest uppercase text-sm">
                    {t.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

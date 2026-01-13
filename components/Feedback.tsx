
import React from 'react';

export const Feedback: React.FC = () => {
  return (
    <section id="business-enquiry" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-black">
          <div className="bg-black p-12 md:p-16 text-white">
            <h2 className="section-heading mb-6 leading-tight uppercase tracking-tighter">Spill the <span className="text-brandOrange italic underline underline-offset-8">Beans</span></h2>
            <p className="body-text text-gray-400 mb-10 font-medium">
              Every crunch matters. Tell us how we can make your snacking experience even more explosive!
            </p>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="YOUR NAME"
                className="w-full bg-white/5 border-b-2 border-white/10 px-4 py-4 focus:border-brandOrange outline-none transition-all font-poppins font-bold text-xs tracking-[0.3em] uppercase"
              />
              <textarea
                placeholder="YOUR FEEDBACK"
                rows={4}
                className="w-full bg-white/5 border-b-2 border-white/10 px-4 py-4 focus:border-brandOrange outline-none transition-all font-poppins font-bold text-xs tracking-[0.3em] uppercase"
              ></textarea>
              <button className="button-text w-full bg-brandOrange text-white py-6 rounded-2xl hover:bg-white hover:text-black transition-all text-lg uppercase font-black tracking-widest shadow-xl">
                SEND VIBES
              </button>
            </form>
          </div>

          <div className="bg-brandOrange p-12 md:p-16 flex flex-col justify-center space-y-16">
            <div>
              <h3 className="font-poppins font-black text-2xl mb-4 text-black uppercase italic tracking-tighter">Direct Hotline</h3>
              <a href="mailto:customercare@snackburst.shop" className="text-2xl md:text-3xl lg:text-4xl font-poppins font-black text-white hover:text-black transition-colors break-words underline decoration-white/30 decoration-4">
                customercare@snackburst.shop
              </a>
            </div>
            
            <div className="space-y-8">
              <h3 className="font-poppins font-black text-2xl text-black uppercase italic tracking-tighter">Join the Fam</h3>
              <div className="flex flex-wrap gap-4">
                {['Instagram', 'TikTok', 'LinkedIn'].map(social => (
                  <button key={social} className="px-10 py-4 rounded-full bg-black text-white hover:bg-white hover:text-black transition-all text-[10px] font-black uppercase tracking-[0.25em] shadow-lg">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

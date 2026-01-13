
import React from 'react';

export const Footer: React.FC = () => {
  const sections = [
    { title: "Support", links: ["FAQ", "Contact Us", "Shipping", "Returns"] },
    { title: "Policies", links: ["Terms of Use", "Privacy Policy", "Refund Policy", "Cookie Policy"] },
    { title: "Know More", links: ["Our Farm", "Ingredients", "Health Benefits", "Wholesale"] },
    { title: "Enquiry", links: ["Distributor Enquiry", "Corporate Gifting", "Events"] }
  ];

  return (
    <footer className="bg-white border-t-8 border-brandOrange pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-brandOrange/5 -z-0 rounded-tl-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-poppins font-black text-xs uppercase tracking-[0.2em] mb-8 text-black bg-brandOrange/10 px-3 py-1 inline-block rounded-md">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-inter text-sm font-medium text-gray-500 hover:text-brandOrange transition-colors uppercase tracking-wider">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-16 space-y-8 md:space-y-0">
          <div className="logo-text text-4xl text-black font-black tracking-tighter">
            SNACKBURST<span className="text-brandOrange">.</span>
          </div>
          
          <div className="text-center md:text-left">
            <p className="font-poppins text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
              © 2025 Snackburst Inc. All rights reserved.
            </p>
            <p className="font-inter text-[10px] text-brandOrange font-bold uppercase mt-1">
              Crafted with zero-guilt in India
            </p>
          </div>

          <div className="flex space-x-4">
             {['IG', 'FB', 'TW'].map((social) => (
               <div key={social} className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-brandOrange hover:scale-110 cursor-pointer transition-all shadow-lg font-poppins font-black text-[10px]">
                 {social}
               </div>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

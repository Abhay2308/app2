
import React from 'react';

export const PRODUCTS = [
  { 
    id: 1, 
    name: "Peri Peri", 
    image: "https://images.unsplash.com/photo-1628102422238-d784a601569e?q=80&w=1000&auto=format&fit=crop", 
    tag: "Hot & Spicy",
    brandColor: "#FF5500", // Orange
    description: "Our signature African bird's eye chili blend that brings the perfect heat to every crunch. Baked to perfection for that iconic Snackburst snap.",
    calories: "120 kcal",
    weight: "80g"
  },
  { 
    id: 2, 
    name: "Fresh Pudina", 
    image: "https://i0.wp.com/aartimadan.com/wp-content/uploads/2020/07/Makhana-4-Flavours.jpg?w=1000&ssl=1", 
    tag: "Cooling Vibe",
    brandColor: "#2D5A27", // Deep Green
    description: "A refreshing burst of garden-fresh pudina leaves and rock salt. The ultimate cooling snack for any time of day.",
    calories: "110 kcal",
    weight: "80g"
  },
  { 
    id: 3, 
    name: "Himalayan salt and pepper", 
    image: "https://images.unsplash.com/photo-1599490659223-e1539e7af924?q=80&w=1000&auto=format&fit=crop", 
    tag: "Classic Crunch",
    brandColor: "#E87A82", // Pinkish Red
    description: "Pure mineral-rich Himalayan pink salt paired with freshly cracked black peppercorns. Minimalist, premium, and perfectly balanced.",
    calories: "105 kcal",
    weight: "80g"
  },
  { 
    id: 4, 
    name: "Achari masti", 
    image: "https://i0.wp.com/aartimadan.com/wp-content/uploads/2020/07/Makhana-4-Flavours.jpg?w=1000&ssl=1", 
    tag: "Desi Twist",
    brandColor: "#5D2E8C", // Purple
    description: "The nostalgic tang of slow-matured pickles and artisanal Indian spices. A bold, traditional flavour with a modern superfood twist.",
    calories: "125 kcal",
    weight: "80g"
  },
];

interface ProductsProps {
  onProductSelect: (id: number) => void;
}

export const Products: React.FC<ProductsProps> = ({ onProductSelect }) => {
  return (
    <section id="all-products" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="relative">
            <h2 className="section-heading border-l-8 border-brandOrange pl-6 uppercase tracking-tighter leading-none">
              Our <span className="text-brandOrange">Iconic</span><br/>Flavours
            </h2>
            <div className="absolute -top-6 -left-2 text-brandOrange opacity-10 font-poppins font-black text-6xl select-none uppercase">
              Munch
            </div>
          </div>
          <p className="body-text text-gray-500 max-w-sm border-r-2 border-brandOrange/20 pr-6 text-right font-medium italic">
            Handpicked foxnuts roasted to perfection with our secret artisanal spice blends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              onClick={() => onProductSelect(product.id)}
              className="group cursor-pointer relative bg-gray-50/50 p-6 rounded-[3rem] border-2 border-gray-100 hover:bg-white hover:border-brandOrange/30 hover:shadow-2xl transition-all duration-500"
            >
              <div 
                className="absolute -top-4 -right-4 z-20 text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg border-2 border-white"
                style={{ backgroundColor: product.brandColor }}
              >
                {product.tag}
              </div>
              <div className="aspect-square overflow-hidden rounded-[2.5rem] bg-gray-100 mb-8 border-4 border-transparent transition-all group-hover:border-brandOrange">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <h3 className="font-poppins font-black text-3xl md:text-4xl group-hover:text-brandOrange transition-all duration-500 uppercase tracking-tighter leading-[0.9] transform group-hover:scale-[1.03] origin-left">
                  {product.name}
                </h3>
                <div className="flex items-center mt-6 space-x-2">
                   <div className="h-1.5 bg-brandOrange w-8 group-hover:w-full transition-all duration-700 rounded-full"></div>
                   <span className="text-brandOrange font-bold text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

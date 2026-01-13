
import React, { useState } from 'react';
import { PRODUCTS } from './Products';

interface ProductDetailProps {
  productId: number;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBack }) => {
  const product = PRODUCTS.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="p-24 text-center font-poppins font-black text-4xl">Product Not Found</div>;

  const brandColor = product.brandColor || "#FF5500";

  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center space-x-4 mb-12 text-black font-poppins font-black text-xs uppercase tracking-[0.4em] hover:text-brandOrange transition-colors"
        >
          <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center group-hover:border-brandOrange group-hover:translate-x-[-4px] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
          </div>
          <span>Back to Home</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image Showcase */}
          <div className="relative">
            <div className="absolute -inset-4 border-2 rounded-[4rem] -rotate-3 opacity-20" style={{ borderColor: brandColor }}></div>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden border-8 shadow-2xl bg-gray-50 transition-all" style={{ borderColor: brandColor }}>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-10 right-10 bg-black text-white px-8 py-4 rounded-3xl font-poppins font-black uppercase text-xl shadow-2xl border-2" style={{ borderColor: brandColor }}>
                {product.tag}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="font-poppins font-black uppercase tracking-[0.6em] text-[10px] mb-4" style={{ color: brandColor }}>Baked To Perfection</span>
            <h1 className="font-poppins font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-8">
              {product.name}
            </h1>
            
            <p className="body-text text-gray-600 text-xl leading-relaxed mb-10 italic border-l-4 pl-8" style={{ borderLeftColor: brandColor }}>
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-[2rem] border-2 border-gray-100">
                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-2">Calories</p>
                <p className="font-poppins font-black text-2xl text-black uppercase tracking-tighter">{product.calories}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-[2rem] border-2 border-gray-100">
                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-2">Net Weight</p>
                <p className="font-poppins font-black text-2xl text-black uppercase tracking-tighter">{product.weight}</p>
              </div>
            </div>

            {/* Why buy this section - Based on icons from pack */}
            <div className="space-y-4 mb-12">
              <div className="flex items-center space-x-4 text-sm font-black uppercase tracking-widest">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: brandColor }}></div>
                <span>Protein Rich</span>
              </div>
              <div className="flex items-center space-x-4 text-sm font-black uppercase tracking-widest">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: brandColor }}></div>
                <span>Gluten Free</span>
              </div>
              <div className="flex items-center space-x-4 text-sm font-black uppercase tracking-widest">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: brandColor }}></div>
                <span>100% Guilt Free</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              <div className="flex items-center bg-gray-100 rounded-3xl p-2 border-2 border-gray-200">
                <button onClick={() => setQuantity(Math.max(1, quantity-1))} className="w-14 h-14 flex items-center justify-center font-black text-2xl hover:text-brandOrange transition-colors">-</button>
                <span className="w-12 text-center font-poppins font-black text-xl">{quantity}</span>
                <button onClick={() => setQuantity(quantity+1)} className="w-14 h-14 flex items-center justify-center font-black text-2xl hover:text-brandOrange transition-colors">+</button>
              </div>
              <button 
                className="flex-1 text-white py-6 rounded-3xl font-poppins font-black uppercase tracking-[0.2em] text-lg transition-all shadow-2xl active:scale-95"
                style={{ backgroundColor: brandColor }}
              >
                Add to Cart • ₹120
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t-2 border-gray-100 pt-24">
          <div>
            <h4 className="font-poppins font-black text-xl uppercase tracking-tighter mb-6 underline decoration-4" style={{ textDecorationColor: brandColor }}>The Ingredients</h4>
            <p className="text-gray-500 font-medium leading-loose uppercase text-[10px] tracking-widest">
              Popped Water Lily Seeds, Artisanal Spices, Olive Oil (Cold Pressed), Dried Herbs, Rock Salt, Natural Seasonings. No Artificial Preservatives.
            </p>
          </div>
          <div>
            <h4 className="font-poppins font-black text-xl uppercase tracking-tighter mb-6 underline decoration-4" style={{ textDecorationColor: brandColor }}>Storage Tip</h4>
            <p className="text-gray-500 font-medium leading-loose uppercase text-[10px] tracking-widest">
              Keep in a cool, dry place. Seal the bag tight after munching to keep the crunch alive. Best consumed within 30 days of opening.
            </p>
          </div>
          <div>
            <h4 className="font-poppins font-black text-xl uppercase tracking-tighter mb-6 underline decoration-4" style={{ textDecorationColor: brandColor }}>The Crunch Factor</h4>
            <p className="text-gray-500 font-medium leading-loose uppercase text-[10px] tracking-widest">
              Double-roasted for that extra snap. We don't do soggy. Our Makhana is strictly for serious snackers who demand the perfect bite every single time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

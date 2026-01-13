
import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Testimonials } from './components/Testimonials';
import { BrandStory } from './components/BrandStory';
import { Feedback } from './components/Feedback';
import { Footer } from './components/Footer';
import { ProductDetail } from './components/ProductDetail';

const App: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProductId]);

  const handleLogoClick = () => {
    setSelectedProductId(null);
  };

  return (
    <div className="min-h-screen selection:bg-brandOrange selection:text-white">
      <AnnouncementBar />
      <div className="relative mt-[80px] md:mt-[112px]">
        <Navbar 
          onProductSelect={(id) => setSelectedProductId(id)} 
          onLogoClick={handleLogoClick}
        />
        
        <main>
          {selectedProductId ? (
            <ProductDetail 
              productId={selectedProductId} 
              onBack={() => setSelectedProductId(null)} 
            />
          ) : (
            <>
              <Hero />
              <Products 
                onProductSelect={(id) => setSelectedProductId(id)} 
              />
              <Testimonials />
              <BrandStory />
              <Feedback />
            </>
          )}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;

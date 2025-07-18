import React from 'react';
import { Header } from '@/components/Header';
import { VegetableCard } from '@/components/VegetableCard';
import { CartDrawer } from '@/components/CartDrawer';
import { vegetables } from '@/data/vegetables';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/20">
      <Header />
      <CartDrawer />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Fresh Vegetables
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get farm-fresh vegetables delivered to your doorstep. 
            Quality produce at the best prices!
          </p>
        </div>

        {/* Vegetables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vegetables.map((vegetable) => (
            <VegetableCard key={vegetable.id} vegetable={vegetable} />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-card rounded-lg shadow-card">
              <h3 className="font-semibold text-lg mb-2">Fresh Quality</h3>
              <p className="text-muted-foreground">
                Hand-picked vegetables sourced directly from local farms
              </p>
            </div>
            <div className="p-6 bg-gradient-card rounded-lg shadow-card">
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick delivery within 2-4 hours of placing your order
              </p>
            </div>
            <div className="p-6 bg-gradient-card rounded-lg shadow-card">
              <h3 className="font-semibold text-lg mb-2">Best Prices</h3>
              <p className="text-muted-foreground">
                Competitive pricing with no hidden charges
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

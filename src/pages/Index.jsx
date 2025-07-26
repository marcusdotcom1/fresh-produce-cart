import React from 'react';
import { Header } from '@/components/Header';
import { VegetableCard } from '@/components/VegetableCard';
import { CartDrawer } from '@/components/CartDrawer';
import { vegetables } from '@/data/vegetables';
import { Search, MapPin, Clock, Truck, Shield, Zap } from 'lucide-react';

const Index = () => {
  const categories = [
    { id: 1, name: 'Vegetables', icon: '🥕', color: 'bg-yellow-100 text-yellow-700' },
    { id: 2, name: 'Fruits', icon: '🍎', color: 'bg-yellow-100 text-yellow-700' },
    { id: 3, name: 'Dairy', icon: '🥛', color: 'bg-yellow-100 text-yellow-700' },
    { id: 4, name: 'Snacks', icon: '🍿', color: 'bg-yellow-100 text-yellow-700' },
    { id: 5, name: 'Beverages', icon: '🥤', color: 'bg-yellow-100 text-yellow-700' },
    { id: 6, name: 'Meat', icon: '🥩', color: 'bg-yellow-100 text-yellow-700' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CartDrawer />

      {/* Delivery Banner */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Delivery in 10-15 mins</span>
            </div>
            <div className="flex items-center space-x-1">
              <Truck className="w-4 h-4" />
              <span>Free delivery on orders above ₹199</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Fresh Vegetables
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Get farm-fresh vegetables delivered to your doorstep. 
            Quality produce at the best prices!
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for vegetables, fruits..."
                className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent shadow-sm transition-all"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex flex-col items-center p-4 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">{category.name}</span>
              </button>
            ))}
          </div>
        </section> */}

        {/* Featured Offers */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Fresh Vegetables</h3>
                  <p className="text-lg opacity-90 mb-4">Up to 30% OFF on fresh produce</p>
                  <button className="bg-white text-yellow-600 px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors shadow-lg">
                    Shop Now →
                  </button>
                </div>
                <div className="text-8xl opacity-20">🥕</div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
          </div>
        </section>

        {/* Vegetables Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Fresh Vegetables</h2>
            <div className="flex items-center space-x-2 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{vegetables.length} items available</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vegetables.map((vegetable) => (
              <div key={vegetable.id} className="transform hover:scale-105 transition-transform duration-200">
                <VegetableCard vegetable={vegetable} />
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Info Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose FreshMart?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <InfoCard 
              icon={<Zap className="w-8 h-8 text-yellow-600" />}
              title="Lightning Fast Delivery"
              description="Get your fresh vegetables delivered in just 10-15 minutes. We're faster than your local grocery run!"
              bgColor="bg-yellow-50"
              iconBg="bg-yellow-100"
            />
            <InfoCard 
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Premium Quality Assured"
              description="Hand-picked vegetables sourced directly from local farms. Every item goes through quality checks."
              bgColor="bg-blue-50"
              iconBg="bg-blue-100"
            />
            <InfoCard 
              icon={<Truck className="w-8 h-8 text-green-600" />}
              title="Free & Fast Delivery"
              description="Enjoy free delivery on orders above ₹199. No hidden charges, no delivery fees."
              bgColor="bg-green-50"
              iconBg="bg-green-100"
            />
          </div>
        </section>

        {/* Additional Features */}
        <section className="mt-16 bg-gradient-to-r from-gray-50 to-yellow-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Reasons to Love Us</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Experience the future of grocery shopping with our innovative features and customer-first approach.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureItem 
              icon="💰"
              title="Best Prices"
              description="Competitive pricing with regular discounts"
            />
            <FeatureItem 
              icon="🔄"
              title="Easy Returns"
              description="Not satisfied? Return within 24 hours"
            />
            <FeatureItem 
              icon="📱"
              title="Order Tracking"
              description="Track your order in real-time"
            />
            <FeatureItem 
              icon="⭐"
              title="5-Star Service"
              description="Rated excellent by 10,000+ customers"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

// Enhanced InfoCard component
const InfoCard = ({ icon, title, description, bgColor, iconBg }) => (
  <div className={`p-8 ${bgColor} rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
    <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
      {icon}
    </div>
    <h3 className="font-bold text-xl mb-3 text-center text-gray-900">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
  </div>
);

// New FeatureItem component
const FeatureItem = ({ icon, title, description }) => (
  <div className="text-center p-4">
    <div className="text-3xl mb-3">{icon}</div>
    <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Index;
// src/components/Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import { ThumbsUp, Truck, ShieldCheck, Smile } from 'lucide-react';
import furniture from '../assets/furniture.jpg';
import sofa1 from '../assets/sofa1.jpg';
import sofa2 from '../assets/sofa2.jpg';
import sofa3 from '../assets/sofa3.jpg';
import table1 from '../assets/table1.jpg';
import table2 from '../assets/table2.jpg';
import table3 from '../assets/table3.jpg';
import chair1 from '../assets/chair1.jpg';
import chair2 from '../assets/chair2.jpg';
import chair3 from '../assets/chair3.jpg';
import bed1 from '../assets/bed1.jpg';
import bed2 from '../assets/bed2.jpg';
import bed3 from '../assets/bed3.jpg';
import lightning1 from '../assets/lightning1.jpg';
import lightning2 from '../assets/lightning2.jpg';
import lightning3 from '../assets/lightning3.jpg';
import decore1 from '../assets/decore1.jpg';
import decore2 from '../assets/decore2.jpg';
import decore3 from '../assets/decore3.jpg';
import Footer from './Footer'; // Import the Footer component

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(furniture);
  const [activeCategory, setActiveCategory] = useState('Sofa');
  const { searchQuery } = useSearch();

  const categoryImages = {
    Sofa: [
      { id: '1', image: sofa1, name: 'Modern Sofa' },
      { id: '2', image: sofa2, name: 'Classic Sofa' },
      { id: '3', image: sofa3, name: 'Sectional Sofa' },
    ],
    Table: [
      { id: '4', image: table1, name: 'Dining Table' },
      { id: '5', image: table2, name: 'Coffee Table' },
      { id: '6', image: table3, name: 'Office Table' },
    ],
    Chair: [
      { id: '7', image: chair1, name: 'Wooden Chair' },
      { id: '8', image: chair2, name: 'Dining Chair' },
      { id: '9', image: chair3, name: 'Office Chair' },
    ],
    Bed: [
      { id: '10', image: bed1, name: 'King Bed' },
      { id: '11', image: bed2, name: 'Queen Bed' },
      { id: '12', image: bed3, name: 'Single Bed' },
    ],
    Lightning: [
      { id: '13', image: lightning1, name: 'Ceiling Light' },
      { id: '14', image: lightning2, name: 'Floor Lamp' },
      { id: '15', image: lightning3, name: 'Table Lamp' },
    ],
    Decore: [
      { id: '16', image: decore1, name: 'Wall Art' },
      { id: '17', image: decore2, name: 'Vase' },
      { id: '18', image: decore3, name: 'Rug' },
    ],
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleProductClick = (image) => {
    setBackgroundImage(image);
  };

  // Flatten all products for global search
  const allProducts = Object.values(categoryImages).flat();
  const filteredProducts = allProducts.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={backgroundImage}
          alt="Furniture Background"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">70% SALE OFF</h1>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">FURNITURE AT COST</h2>
            <p className="text-lg text-gray-700 mb-6">
              Discover premium furniture at unbeatable prices. Transform your home with our exclusive collection today!
            </p>
            <Link
              to="/product"
              className="inline-block bg-orange-400 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-orange-400 mb-2">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Popular Products'}
          </h2>
          <p className="text-gray-600 mb-10">
            {searchQuery
              ? `Showing products matching "${searchQuery}".`
              : 'Explore top categories our customers love the most!'}
          </p>

          {!searchQuery && (
            <div className="flex justify-center flex-wrap gap-3 mb-8">
              {Object.keys(categoryImages).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 text-gray-700 hover:text-blue-600 ${
                    activeCategory === category ? 'border-b-2 border-orange-500 text-orange-500' : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {searchQuery
              ? filteredProducts.map((item, index) => (
                  <Link
                    to={`/product/${item.id}`}
                    key={index}
                    className="block"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover rounded-lg cursor-pointer shadow hover:scale-105 transition"
                      onClick={() => handleProductClick(item.image)}
                    />
                    <div className="p-2 text-center">
                      <p className="text-gray-900 font-medium">{item.name}</p>
                    </div>
                  </Link>
                ))
              : categoryImages[activeCategory].map((item, index) => (
                  <Link
                    to={`/product/${item.id}`} // Use the item's id directly
                    key={index}
                    className="block"
                  >
                    <img
                      src={item.image}
                      alt={`${item.name}`}
                      className="w-full h-64 object-cover rounded-lg cursor-pointer shadow hover:scale-105 transition"
                      onClick={() => handleProductClick(item.image)}
                    />
                    <div className="p-2 text-center">
                      <p className="text-gray-900 font-medium">{item.name}</p>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
            <div className="flex flex-col items-center space-y-3">
              <Truck className="text-orange-400" size={32} />
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-sm">Get your order delivered quickly to your doorstep.</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <ShieldCheck className="text-orange-400" size={32} />
              <h3 className="font-semibold text-lg">Secure Payments</h3>
              <p className="text-sm">Safe and protected transactions every time.</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <ThumbsUp className="text-orange-400" size={32} />
              <h3 className="font-semibold text-lg">Quality Guarantee</h3>
              <p className="text-sm">Only the best materials and craftsmanship.</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Smile className="text-orange-400" size={32} />
              <h3 className="font-semibold text-lg">Customer Support</h3>
              <p className="text-sm">Friendly help when you need it most.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
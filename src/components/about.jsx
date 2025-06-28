// src/components/About.jsx
import { Info, Sparkles } from 'lucide-react';
import furnitureImage from '../assets/furniture.jpg';

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-green-50 overflow-hidden">
      {/* Background animation blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header with icon */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-300 p-3 rounded-full text-white shadow-md">
              <Info size={28} />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">About Us</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Furniture that fits your lifestyle, crafted with passion and delivered with care.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              At <span className="font-semibold text-gray-900">FurnitureStore</span>, we believe your home should reflect your personality. That's why we offer thoughtfully curated pieces designed for style, comfort, and durability — without breaking the bank.
            </p>
            <p>
              Our team of designers and furniture experts constantly explore the latest trends to bring you high-quality products that blend modern and classic aesthetics.
            </p>
            <p>
              Whether you're furnishing a cozy apartment or upgrading your entire home, we’re here to make the process seamless and enjoyable.
            </p>
            <div className="flex items-center space-x-2 text-orange-300 font-medium">
              <Sparkles size={20} />
              <span>Transforming spaces. Inspiring lives.</span>
            </div>
          </div>

          {/* Optional Image or Illustration */}
          <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
            <img
                src={furnitureImage}
              alt="About our furniture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

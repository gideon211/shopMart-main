// src/components/Navbar.jsx
import { useSearch } from '../context/SearchContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import logo from '../assets/shopper.png';

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { cartCount } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled via state change
  };

  return (
    <nav className="sticky top-0 z-50 shadow-sm bg-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="E-commerce Logo" className="h-8 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-700 hover:text-gray-900 font-medium">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-700 hover:text-gray-900 font-medium">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
                style={{ background: 'none' }}
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </form>
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-700" size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        {/* Mobile menu placeholder */}
      </div>
    </nav>
  );
};

export default Navbar;
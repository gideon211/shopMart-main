// src/components/Product.jsx
import { Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
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
import Leather from '../assets/leather.jpg';
import desk from '../assets/desk.jpg';

const Product = () => {
    const { searchQuery } = useSearch();
  
  const products = [
    { id: '1', name: 'Modern Sofa', price: '$299', image: sofa1 },
    { id: '2', name: 'Classic Dining Table', price: '$349', image: table1 },
    { id: '3', name: 'Wooden Chair', price: '$99', image: chair1 },
    { id: '4', name: 'King Size Bed', price: '$599', image: bed1 },
    { id: '5', name: 'Office Desk', price: '$199', image: desk },
    { id: '6', name: 'Leather Recliner', price: '$449', image: Leather },
    { id: '7', name: 'Coffee Table', price: '$149', image: table2 },
    { id: '8', name: 'Bookshelf', price: '$129', image: decore3 },
    { id: '9', name: 'Dining Chair Set', price: '$249', image: table3 },
    { id: '10', name: 'Nightstand', price: '$89', image: lightning2},
    { id: '11', name: 'Sectional Sofa', price: '$699', image: sofa3 },
    { id: '12', name: 'TV Stand', price: '$179', image: decore2 },
  ];


    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
        </h2>
        <p className="text-gray-600 mb-8">
          {searchQuery
            ? `Showing products matching "${searchQuery}".`
            : 'Explore our full range of furniture products.'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchQuery
            ? filteredProducts.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-gray-700">{product.price}</p>
                  </div>
                </Link>
              ))
            : products.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-gray-700">{product.price}</p>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
// src/components/Details.jsx
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
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

const Details = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const products = [
    { id: '1', name: 'Modern Sofa', price: '$299', image: sofa1, description: 'A sleek and comfortable modern sofa perfect for any living room.' },
    { id: '2', name: 'Classic Dining Table', price: '$349', image: table1, description: 'A sturdy classic dining table with elegant design.' },
    { id: '3', name: 'Wooden Chair', price: '$99', image: chair1, description: 'A simple yet durable wooden chair for dining or office use.' },
    { id: '4', name: 'King Size Bed', price: '$599', image: bed1, description: 'A luxurious king-size bed with a solid wood frame.' },
    { id: '5', name: 'Office Desk', price: '$199', image: desk, description: 'A modern office desk with ample storage space.' },
    { id: '6', name: 'Leather Recliner', price: '$449', image: Leather, description: 'A premium leather recliner for ultimate relaxation.' },
    { id: '7', name: 'Coffee Table', price: '$149', image: table2, description: 'A stylish coffee table with a glass top.' },
    { id: '8', name: 'Bookshelf', price: '$129', image: decore3, description: 'A tall bookshelf with adjustable shelves.' },
    { id: '9', name: 'Dining Chair Set', price: '$249', image: table3, description: 'A set of four elegant dining chairs.' },
    { id: '10', name: 'Nightstand', price: '$89', image: lightning2, description: 'A compact nightstand with a drawer.' },
    { id: '11', name: 'Sectional Sofa', price: '$699', image: sofa3, description: 'A spacious sectional sofa for large families.' },
    { id: '12', name: 'TV Stand', price: '$179', image: decore2, description: 'A modern TV stand with storage compartments.' },
  ];

  const product = products.find((p) => p.id === id) || { name: 'Product Not Found', price: '$0', image: 'https://via.placeholder.com/400x300', description: 'Product details unavailable.' };

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{product.name}</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-96 object-cover rounded-lg"
          />
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 mb-4"><strong>Price:</strong> {product.price}</p>
            <p className="text-gray-700">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className="mt-6 bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
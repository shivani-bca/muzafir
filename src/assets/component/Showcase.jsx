import React, { useState } from 'react';
import gloves from '../Images/gloves.webp';
import handbag from '../Images/handbag lux.jpg';
import perfume from '../Images/perfume.jpg';
import scarf from '../Images/scarf.jpg';
import watch from '../Images/watch.jpg';
import hat from '../Images/hat.jpg';
import heel from '../Images/heel.jpg';

const Showcase = () => {
  const allProducts = [
    { id: "p1", name: "Luxury Handbag", category: "Bag", price: "₹6200", instock: true, image: handbag },
    { id: "p2", name: "Rose Gold Perfume", category: "Perfume", price: "₹3500", instock: true, image: perfume },
    { id: "p3", name: "Parisian Scarf", category: "Scarf", price: "₹2400", instock: false, image: scarf },
    { id: "p4", name: "Classic Watch", category: "Watch", price: "₹7200", instock: true, image: watch },
    { id: "p5", name: "Luxury Hat", category: "Hat", price: "₹4300", instock: true, image: hat },
    { id: "p6", name: "Silk Gloves", category: "Gloves", price: "₹1500", instock: true, image: gloves },
    {id:"p7", name: "crystal high heels" , category:"shoes" , price:"₹5000", instock: true, image: heel},
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Bag', 'Perfume', 'Scarf', 'Watch', 'Hat', 'Gloves','Shoes'];

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-pink-50 to-rose-100'} min-h-screen p-6`}>
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 font-poppins text-sm"
        />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-4 py-2 rounded-full bg-rose-500 text-white font-poppins hover:bg-rose-600"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm font-poppins border transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-rose-500 text-white border-rose-500'
                : 'bg-white text-rose-500 border-rose-300 hover:bg-rose-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`rounded-xl overflow-hidden shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer ${
              product.instock ? 'bg-white' : 'bg-gray-200 opacity-60'
            }`}
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h2 className="text-xl font-playfair text-rose-700 mb-2">{product.name}</h2>
            <p className="text-sm text-gray-500 mb-1 font-poppins">Category: {product.category}</p>
            <p className="text-md font-bold text-gray-700 mb-4 font-poppins">Price: {product.price}</p>

            {product.instock ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product);
                }}
                className={`px-4 py-2 rounded-full font-poppins text-white ${
                  wishlist.includes(product.id) ? 'bg-green-500 hover:bg-green-600' : 'bg-rose-500 hover:bg-rose-600'
                }`}
              >
                {wishlist.includes(product.id) ? 'Wishlisted' : 'Add to Wishlist'}
              </button>
            ) : (
              <p className="text-red-500 font-semibold font-poppins">Sold Out</p>
            )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full shadow-xl relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-rose-500"
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-playfair text-rose-700 mb-2">{selectedProduct.name}</h2>
            <p className="font-poppins text-sm text-gray-600 mb-1">Category: {selectedProduct.category}</p>
            <p className="font-poppins font-bold text-md text-gray-800 mb-3">Price: {selectedProduct.price}</p>
            <p className="text-sm font-poppins text-gray-500">
              This exclusive item is part of the luxury xyz collection, handpicked for your elegance.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showcase;
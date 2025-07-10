import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-rose-100 via-rose-200 to-rose-100 shadow-md px-5 py-1 flex  sticky top-0 justify-between items-center">
      <h1 className="text-xl sm:text-2xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-500 to-rose-800 tracking-wide">
        xyz
      </h1>
      <div className="space-x-5 font-poppins text-gray-700 text-sm">
        <a href="#" className="hover:text-rose-700">Home</a>
        <a href="#" className="hover:text-rose-700">Collections</a>
        <a href="#" className="hover:text-rose-700">About</a>
        <a href="#" className="hover:text-rose-700">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
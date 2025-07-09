import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-rose-100 via-rose-200 to-rose-100 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-rose-400 tracking-wide">
        Saifarle
      </h1>
      <div className="space-x-6 font-poppins text-gray-700 text-sm">
        <a href="#" className="hover:text-rose-700">Home</a>
        <a href="#" className="hover:text-rose-700">Collections</a>
        <a href="#" className="hover:text-rose-700">About</a>
        <a href="#" className="hover:text-rose-700">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
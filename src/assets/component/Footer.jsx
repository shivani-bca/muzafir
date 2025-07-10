import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-100 via-pink-200 to-rose-100 text-center py-6 mt-10 shadow-inner">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600 font-poppins">
        <p>
          © 2025 <span className="text-xl sm:text-2xl font-playfair  bg-gradient-to-r from-rose-500  via-amber-400 to-pink-500  text-transparent bg-clip-text font-bold tracking-wide">
        Muzafir</span> — Crafted with elegance in Paris 🗼
        </p>
        <p className="hidden sm:inline-block">|</p>
        <p>
          Designed by <span className="text-rose-500 font-semibold">Me 💖</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
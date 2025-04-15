import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link to="/">Shop</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:bg-blue-700 px-4 py-2 rounded">
            Home
          </Link>
          <Link to="/necklace" className="text-white hover:bg-blue-700 px-4 py-2 rounded">
            Necklaces
          </Link>
          {/* Add more links as needed */}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-2">
          <Link to="/" className="text-white block hover:bg-blue-700 px-4 py-2 rounded">
            Home
          </Link>
          <Link to="/necklace" className="text-white block hover:bg-blue-700 px-4 py-2 rounded">
            Necklaces
          </Link>
          {/* Add more mobile links here */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#FFB6C1] text-white font-semibold p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-sm">SheShare Vacation Rental &copy; 2024 </p>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

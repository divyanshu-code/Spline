import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
   
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden fixed mt-11 top-0 right-4 z-50 text-white"
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      <nav className="fixed top-0 w-full h-32 bg-[#1E1E1E] shadow-2xl ">
        <div className=" ml-16 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mt-10  px-4">
            <div className="text-3xl font-bold  text-blue-600">
              <Link  to="/">Spline</Link>
            </div>

       
            <div className="hidden md:flex gap-13 text-xl text-gray-500 mr-44 font-bold">
              <Link className="hover:text-blue-700 transition" to="/">Home</Link>
              <Link className="hover:text-blue-700 transition" to="/about">About</Link>
              <Link className="hover:text-blue-700 transition" to="/contact">Contact Us</Link>
              <Link className="hover:text-blue-700 transition" to="/version">Version</Link>
            </div>

          </div>
        </div>
      </nav>


      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1E1E1E] transition-transform duration-500 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden shadow-xl`}
      >
        <div className="flex flex-col p-10 mt-16 gap-6 text-xl font-medium text-gray-500">
          <Link onClick={() => setMenuOpen(false)} to="/" className="">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className="hover:text-blue-500 mt-5">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact" className="hover:text-blue-500 mt-5">Contact Us</Link>
          <Link onClick={() => setMenuOpen(false)} to="/version" className="hover:text-blue-500 mt-5">Version</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

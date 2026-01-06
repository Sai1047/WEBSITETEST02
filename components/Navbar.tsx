import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-background/80 backdrop-blur-xl border-b border-primary/20 py-4">
      <div className="max-w-7xl mx-auto px-5 w-full flex justify-between items-center">
        <a href="/" className="block">
          <h1 className="text-2xl font-black tracking-tighter text-white">
            SJ<span className="text-primary">IT</span>LTD
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-white hover:text-primary transition-colors font-medium text-base">Home</a>
          <div className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-primary transition-colors font-medium text-base">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {/* Dropdown */}
            <div className="absolute top-full left-0 pt-2 w-48 transition-all duration-300 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="glass rounded-md shadow-lg overflow-hidden py-2 border border-primary/20">
                <a href="#team" className="block px-4 py-2 text-white hover:bg-primary/20 hover:text-primary text-sm font-medium">Our Team</a>
                <a href="#history" className="block px-4 py-2 text-white hover:bg-primary/20 hover:text-primary text-sm font-medium">Our History</a>
              </div>
            </div>
          </div>
          <a href="#about" className="text-white hover:text-primary transition-colors font-medium text-base">About</a>
          <a href="#development" className="text-white hover:text-primary transition-colors font-medium text-base">Development</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:flex px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all rounded-xl font-semibold text-sm">
            Contact Us
          </a>
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-40 pt-24 px-5 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-6 right-5 text-white p-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Close icon could be X, but using Menu tap to close or outside click is standard. 
              Let's add a close button or just rely on links closing it. 
              The original code used the menu button to toggle, but here the menu overlays the screen.
          */}
           <span className="text-3xl">&times;</span>
        </button>
        <div className="flex flex-col gap-6 text-xl">
          <a href="#" className="text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#services" className="text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#about" className="text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#development" className="text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Development</a>
          <a href="#contact" className="text-primary border border-primary px-4 py-3 rounded-xl text-center" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
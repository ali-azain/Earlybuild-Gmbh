
import React from 'react';
import { FiFacebook, FiLinkedin, FiInstagram, FiChevronDown } from 'react-icons/fi';

interface NavbarProps {
  onNavigate: (view: 'home' | 'about') => void;
  currentView: 'home' | 'about';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <header className="w-full z-50">
      {/* Top Info Bar */}
      <div className="bg-white border-b border-slate-100 py-2 px-6 text-[11px] font-medium text-slate-500">
        <div className="container mx-auto flex justify-between items-center">
          <div>Celebrating 10 years: <span className="text-early-green">2015 – 2025 BIM & AI</span></div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">Call us: <span className="font-bold text-slate-700">+49 9103 9184685</span></div>
            <div className="flex items-center gap-3">
              <FiFacebook className="cursor-pointer hover:text-early-green" />
              <FiLinkedin className="cursor-pointer hover:text-early-green" />
              <FiInstagram className="cursor-pointer hover:text-early-green" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <img src="https://flagcdn.com/w20/gb.png" className="w-4 h-3" alt="EN" />
              <span>EN</span>
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 border-b border-slate-100 py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => onNavigate('home')}>
            <span className="text-2xl font-bold tracking-tight text-early-green">earlybuild</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-slate-700">
            <button 
              onClick={() => onNavigate('home')} 
              className={`hover:text-early-green transition-colors pb-1 ${currentView === 'home' ? 'border-b-2 border-early-green' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className={`hover:text-early-green transition-colors pb-1 ${currentView === 'about' ? 'border-b-2 border-early-green' : ''}`}
            >
              About us
            </button>
            <a href="#" className="hover:text-early-green transition-colors">Products</a>
            <a href="#" className="hover:text-early-green transition-colors">Services</a>
            <a href="#" className="hover:text-early-green transition-colors">Contact Page</a>
            <a href="#" className="hover:text-early-green transition-colors">Blog Page</a>
          </div>

          <div className="lg:hidden">
            <button className="text-slate-700 font-bold">Menu</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GeminiAssistant from './components/GeminiAssistant';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />

      {currentView === 'home' ? <Home /> : <AboutUs />}

      {/* Footer (Common for both pages) */}
      <footer className="py-20 bg-mint border-t border-black/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-3xl font-bold text-early-green mb-8">earlybuild</div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                Create high-quality, style-consistent, proprietary assets for your real estate.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="font-extrabold heading-blue">Download:</h5>
              <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded text-xs font-bold w-full max-w-[180px]">
                <span className="w-4 h-4 flex items-center justify-center">↓</span> PDF Download
              </button>
              <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded text-xs font-bold w-full max-w-[180px]">
                <span className="w-4 h-4 flex items-center justify-center">↓</span> PDF Download
              </button>
            </div>

            <div className="space-y-4">
              <h5 className="font-extrabold heading-blue">Company:</h5>
              <ul className="text-sm space-y-3 text-slate-600">
                <li><a href="#" className="hover:text-early-green">Services</a></li>
                <li><button onClick={() => setCurrentView('about')} className="hover:text-early-green">About Us</button></li>
                <li><a href="#" className="hover:text-early-green">Our Team</a></li>
                <li><a href="#" className="hover:text-early-green">Our Blog</a></li>
              </ul>
            </div>

            <div className="space-y-6">
               <div className="bg-white/40 p-6 rounded-2xl flex items-start gap-4">
                  <div className="p-3 bg-early-green rounded-xl text-white">
                     <span className="w-6 h-6 flex items-center justify-center">→</span>
                  </div>
                  <div>
                    <h5 className="font-extrabold heading-blue mb-1">Sign Up For Our Newsletter</h5>
                  </div>
               </div>
               <div className="flex gap-2 bg-white/40 p-2 rounded-xl">
                  <input type="email" placeholder="Enter your email" className="bg-transparent px-4 py-2 text-sm flex-1 focus:outline-none" />
                  <button className="p-2 bg-early-green text-white rounded-lg"><span className="w-4 h-4 flex items-center justify-center">→</span></button>
               </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-black/5 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <p>Copyright © 2025 Earlybuild. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#">Privacy Policy</a>
              <a href="#">Term of Use</a>
            </div>
          </div>
        </div>
      </footer>

      <GeminiAssistant />
    </div>
  );
};

export default App;

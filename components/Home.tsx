
import React from 'react';
import { FiChevronRight, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg pt-20 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="z-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-6xl font-extrabold heading-blue mb-8 tracking-tight">
              Earlybuild
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mb-10">
              Earlybuild is an innovative B2B SaaS Cloud platform specifically designed for the digitalization of project development in the real estate industry. This all-in-one solution elevates the location due diligence process. Decision-relevant data on locations, markets, and properties are automatically collected and analyzed using artificial intelligence.
            </p>
            <button className="btn-early shadow-lg">
              Learn more 
              <span className="icon-circle"><FiChevronRight /></span>
            </button>
          </div>
          <div className="relative z-10 hidden lg:block">
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
               <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Building Analysis" className="rounded-2xl w-full h-[400px] object-cover opacity-90" />
               <div className="absolute inset-0 bg-gradient-to-tr from-early-dark-blue/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-6">
             <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg w-full h-[250px] object-cover" alt="Architectural Plan" />
             <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg w-full h-[250px] object-cover" alt="Construction Site" />
             <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-lg w-full h-[250px] object-cover" alt="Site Model" />
          </div>

          <div className="flex flex-col justify-start">
            <p className="text-early-green font-bold text-sm mb-4">Rethinking construction: Faster speed, lower costs, better decisions</p>
            <h2 className="text-4xl font-extrabold heading-blue mb-8 leading-tight">
              No more inefficient processes, costly delays, and inaccurate gut decisions.
            </h2>
            <p className="text-slate-600 mb-12">
              Any property developer or real estate developer who still relies on slow, inefficient processes despite rising construction costs and stagnating productivity is missing out on potential returns. Earlybuild shows you how data-driven decisions, AI-supported site assessment, and innovative tools can help you realize your real estate projects faster, more cost-effectively, and more securely.
            </p>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-early-dark-blue">
                   <FiCheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold heading-blue mb-2">How can Earlybuild minimize risks and increase returns?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    With Earlybuild, you invest with risk awareness and cost transparency. Our platform enables you to identify opportunities early, accurately assess risks, and optimally manage your capital investments.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-early-dark-blue">
                   <FiCheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold heading-blue mb-2">More effective project initiation and project development</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    From initial concept to completion, Earlybuild supports property developers and real estate developers in planning and implementing projects more efficiently.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-extrabold heading-blue mt-16 leading-tight">
              Secure your competitive edge — with Earlybuild, the platform for data-driven real estate development, digital building models and smart due diligence.
            </h3>
          </div>
        </div>
      </section>

      {/* 2x2 Feature Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mx-auto flex items-center justify-center">
                    <FiArrowRight className="text-early-dark-blue text-2xl" />
                 </div>
                 <h4 className="text-xl font-extrabold heading-blue">What return on investment advantages does using Earlybuild offer?</h4>
                 <p className="text-slate-500 text-sm">How can you maximize your returns with Earlybuild? We support you with AI technology right from the early project phases.</p>
                 <button className="btn-outline-early">Learn more</button>
              </div>

              <div className="text-center space-y-4">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mx-auto flex items-center justify-center">
                    <FiArrowRight className="text-early-dark-blue text-2xl" />
                 </div>
                 <h4 className="text-xl font-extrabold heading-blue">Can Earlybuild help identify the best investment opportunities?</h4>
                 <p className="text-slate-500 text-sm">Discover the best investment opportunities with sound expert knowledge — complemented by personal advice.</p>
                 <button className="btn-outline-early">Learn more</button>
              </div>

              <div className="text-center space-y-4">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mx-auto flex items-center justify-center">
                    <FiArrowRight className="text-early-dark-blue text-2xl" />
                 </div>
                 <h4 className="text-xl font-extrabold heading-blue">What return on investment advantages does using Earlybuild offer?</h4>
                 <p className="text-slate-500 text-sm">Why is early building the key to higher returns? Benefit from the early advantages of the build-before-build principle.</p>
                 <button className="btn-outline-early">Learn more</button>
              </div>

              <div className="text-center space-y-4">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mx-auto flex items-center justify-center">
                    <FiArrowRight className="text-early-dark-blue text-2xl" />
                 </div>
                 <h4 className="text-xl font-extrabold heading-blue">Can Earlybuild analyze all German markets?</h4>
                 <p className="text-slate-500 text-sm">Mastering German markets: How Earlybuild analyzes nationwide opportunities.</p>
                 <button className="btn-outline-early">Learn more</button>
              </div>
           </div>
        </div>
      </section>

      {/* Dark Isometric Section */}
      <section className="py-24 bg-[#1a2b3c] text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="relative h-[400px]">
              {/* Symbolic building shape */}
              <div className="absolute inset-0 flex items-center justify-center opacity-80">
                 <div className="w-64 h-96 border-4 border-blue-400 rounded-xl relative transform -rotate-12 skew-x-12">
                    <div className="absolute top-10 left-0 w-full h-1 bg-blue-400"></div>
                    <div className="absolute top-20 left-0 w-full h-1 bg-blue-400"></div>
                    <div className="absolute top-30 left-0 w-full h-1 bg-blue-400"></div>
                    <div className="absolute bottom-10 left-0 w-full h-1 bg-blue-400"></div>
                 </div>
              </div>
           </div>

           <div className="space-y-6">
              <p className="text-early-green font-bold text-sm uppercase">For landlords and property managers</p>
              <h2 className="text-5xl font-extrabold mb-8 leading-tight">
                How does Earlybuild optimize the return on investment of rental properties?
              </h2>
              <p className="text-slate-300 text-lg">
                How Earlybuild is revolutionizing project presentation: Digital, visual, and compelling. With our digital building models, you can make complex projects tangible, transparent, and instantly understandable.
              </p>
              <ul className="space-y-4 pt-4">
                 <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-blue-400 flex items-center justify-center text-blue-400 text-xs">→</span>
                    <span>Earlybuild supports the renovation of properties through digital twins.</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-blue-400 flex items-center justify-center text-blue-400 text-xs">→</span>
                    <span>Earlybuild improves communication with architects and planners with precise calculation methods.</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-blue-400 flex items-center justify-center text-blue-400 text-xs">→</span>
                    <span>Earlybuild is also suitable for smaller real estate portfolios.</span>
                 </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 bg-mint relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-extrabold heading-blue mb-10 leading-tight">
                Let's start a project together! Book a consultation now.
              </h2>
              <p className="text-slate-600 text-lg mb-12">
                To lead the real estate market, you need ambition and possibilities to grow. We assist our clients in achieving real business results.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-early-dark-blue flex items-center justify-center text-white"><FiArrowRight /></div>
                <div className="w-10 h-10 rounded bg-early-dark-blue flex items-center justify-center text-white"><FiArrowRight /></div>
                <div className="w-10 h-10 rounded bg-early-dark-blue flex items-center justify-center text-white"><FiArrowRight /></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div className="col-span-1">
                <label className="text-[10px] font-bold uppercase text-slate-500">What is your name?*</label>
                <input type="text" className="form-input" placeholder="Your name" />
              </div>
              <div className="col-span-1">
                <label className="text-[10px] font-bold uppercase text-slate-500">What company do you represent?</label>
                <input type="text" className="form-input" placeholder="Company" />
              </div>
              <div className="col-span-1">
                <label className="text-[10px] font-bold uppercase text-slate-500">Phone number?*</label>
                <input type="text" className="form-input" placeholder="+49" />
              </div>
              <div className="col-span-1">
                <label className="text-[10px] font-bold uppercase text-slate-500">E-mail*</label>
                <input type="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div className="col-span-2">
                <label className="text-[10px] font-bold uppercase text-slate-500">A few words about your project*</label>
                <textarea rows={4} className="form-input resize-none" placeholder="How can we help?"></textarea>
              </div>
              <div className="col-span-2 pt-4">
                <button className="btn-early">
                  Send 
                  <span className="icon-circle"><FiArrowRight /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

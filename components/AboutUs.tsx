
import React, { useState } from 'react';
import { FiArrowRight, FiCheck, FiPlus, FiMinus } from 'react-icons/fi';

const AboutUs: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale opacity-80" 
            alt="About us background" 
          />
          <div className="absolute inset-0 bg-early-dark-blue/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight">About us</h1>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold heading-blue mb-6 leading-tight">
              Empowering People Through Data-Driven Design
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              The intelligent integration of location data, evaluation criteria, and financing options leads to well-founded and future-proof decisions at an early stage – efficiently, transparently, and digitally. We support real estate developers and project developers in shaping the future today.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                <span className="w-5 h-5 rounded-full bg-early-dark-blue text-white flex items-center justify-center text-[10px] tracking-widest">→</span>
                Market and location data
              </li>
              <li className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                <span className="w-5 h-5 rounded-full bg-early-dark-blue text-white flex items-center justify-center text-[10px] tracking-widest">→</span>
                Individual evaluation criteria
              </li>
              <li className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                <span className="w-5 h-5 rounded-full bg-early-dark-blue text-white flex items-center justify-center text-[10px] tracking-widest">→</span>
                Forecast of rental and sales revenues
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            {/* Visual spacer or placeholder for the image in the screenshot if needed */}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold heading-blue mb-20">Our solution for the real estate industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-5xl mx-auto mb-20">
            <div>
              <h3 className="text-2xl font-bold text-early-green mb-4">Transparent and evidence-based data</h3>
              <p className="text-slate-600 leading-relaxed">
                We offer access to a wide range of data points and visualized analyses that enable transparent and evidence-based decision-making and minimize investment risks.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-early-green mb-4">AI-based analytics platform</h3>
              <p className="text-slate-600 leading-relaxed">
                Our proprietary platform uses advanced AI and big data to accurately assess real estate locations and produce comprehensive feasibility studies in a fraction of the time.
              </p>
            </div>
          </div>

          {/* Color Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden">
            <div className="bg-[#28C263] text-white p-12 flex flex-col items-center justify-center text-center space-y-4 aspect-square md:aspect-auto h-64">
              <span className="text-4xl font-black uppercase">80% Time Savings</span>
              <p className="text-sm opacity-90">In site auditing, data visualization, and reporting</p>
            </div>
            <div className="bg-[#7A7A7A] text-white p-12 flex flex-col items-center justify-center text-center space-y-4 aspect-square md:aspect-auto h-64">
              <span className="text-4xl font-black uppercase">Cloud-Hosted</span>
              <p className="text-sm opacity-90">Fully scalable and highly automated all-in-one platform.</p>
            </div>
            <div className="bg-[#003E6B] text-white p-12 flex flex-col items-center justify-center text-center space-y-4 aspect-square md:aspect-auto h-64">
              <span className="text-4xl font-black uppercase text-[28px] leading-tight">Transparent Cost Calculation</span>
              <p className="text-sm opacity-90">Financial compliance reports and assessment of ESG criteria</p>
            </div>
            <div className="bg-[#87CEEB] text-white p-12 flex flex-col items-center justify-center text-center space-y-4 aspect-square md:aspect-auto h-64">
              <span className="text-4xl font-black uppercase">60% Cost Reduction</span>
              <p className="text-sm opacity-90">In building planning and design</p>
            </div>
            <div className="bg-white p-12 hidden md:block aspect-square md:aspect-auto h-64"></div>
            <div className="bg-[#00FF00] text-early-dark-blue p-12 flex flex-col items-center justify-center text-center space-y-4 aspect-square md:aspect-auto h-64">
              <span className="text-4xl font-black uppercase">AI - Technology</span>
              <p className="text-sm font-bold opacity-80 uppercase tracking-tighter">Analysis, prediction, and evaluation of decision-making processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold heading-blue mb-6">Our Team</h2>
          <p className="text-early-green font-bold max-w-4xl mx-auto mb-20 leading-relaxed uppercase tracking-tight">
            We have the knowledge and experience to develop and implement advanced algorithms in the areas of geodata analysis, digital twins, artificial intelligence and big data analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
              <h4 className="text-xl font-extrabold heading-blue">Dr. Manuel Mühlbauer</h4>
              <p className="text-early-green font-bold text-lg mb-6">Visionary</p>
              <ul className="text-left space-y-3 w-full">
                <li className="flex items-center gap-2 text-xs font-bold text-slate-600"><FiCheck className="text-early-green" /> Industry Expert</li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-600"><FiCheck className="text-early-green" /> Brand Strategy</li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-600"><FiCheck className="text-early-green" /> Marketing and Sales</li>
              </ul>
            </div>
            {/* Team Member 2 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
              <h4 className="text-xl font-extrabold heading-blue">Mohannad Atta</h4>
              <p className="text-early-green font-bold text-lg mb-6">Technology</p>
              <ul className="text-left space-y-3 w-full">
                <li className="flex items-center gap-2 text-xs font-bold text-slate-600"><FiCheck className="text-early-green" /> Industry Cooperations</li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-600"><FiCheck className="text-early-green" /> Product Implementation</li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-600"><FiCheck className="text-early-green" /> Software Architecture</li>
              </ul>
            </div>
            {/* Team Member 3 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
              <h4 className="text-xl font-extrabold heading-blue">Elsaeed Aboyoussed</h4>
              <p className="text-early-green font-bold text-lg mb-6">Product</p>
              <ul className="text-left space-y-3 w-full">
                <li className="flex items-center gap-2 text-xs font-bold text-slate-600"><FiCheck className="text-early-green" /> Digital Twins</li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-600"><FiCheck className="text-early-green" /> User Interface Design</li>
                <li className="flex items-center gap-2 text-xs font-bold text-slate-600"><FiCheck className="text-early-green" /> Research Coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proptech Era Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-70" alt="New Era" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                       <span className="border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></span>
                    </div>
                 </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-early-green font-bold text-sm tracking-widest uppercase">Our Platform</p>
              <h2 className="text-4xl font-extrabold heading-blue mb-8 leading-tight">
                A New Era: Proptech Innovation
              </h2>
              <h4 className="font-bold heading-blue text-lg">Interactive Data Management and Reporting</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <span className="w-5 h-5 bg-early-green text-white rounded flex items-center justify-center text-[10px] tracking-widest">→</span>
                  Advanced Flutter-based technology
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <span className="w-5 h-5 bg-early-green text-white rounded flex items-center justify-center text-[10px] tracking-widest">→</span>
                  Integrated machine learning capabilities
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <span className="w-5 h-5 bg-early-green text-white rounded flex items-center justify-center text-[10px] tracking-widest">→</span>
                  Fully Implemented Data Collection Pipeline
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Final Form Section */}
      <section className="py-24 bg-mint/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold heading-blue mb-16">FAQs <br /><span className="text-3xl font-bold">Frequently Asked Questions</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-4">
              <FAQItem question="What exactly does Earlybuild do?" />
              <FAQItem question="Who is behind Earlybuild?" />
              <FAQItem question="What are you currently working on?" />
              <FAQItem question="How do you differ from traditional planning offices or software providers?" />
              <FAQItem question="Is Earlybuild only suitable for new construction projects?" />
              <FAQItem question="How can I participate – as a partner or team member?" />
            </div>

            <div className="bg-white p-8 rounded-[3rem] shadow-xl space-y-6 self-start">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500">Phone number?*</label>
                  <input type="text" className="form-input border-b-slate-100 py-2" placeholder="+49" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500">Email*</label>
                  <input type="text" className="form-input border-b-slate-100 py-2" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-500">A few words about your project*</label>
                <textarea rows={4} className="form-input border-b-slate-100 py-2 resize-none" placeholder="Describe..."></textarea>
              </div>
              <button className="btn-early w-full justify-center">
                Send <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Let's start a project section (Common with Home but repeated visually as per screenshot) */}
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
                <div className="w-10 h-10 rounded bg-early-dark-blue flex items-center justify-center text-white cursor-pointer hover:bg-slate-700 transition-colors"><FiArrowRight /></div>
                <div className="w-10 h-10 rounded bg-early-dark-blue flex items-center justify-center text-white cursor-pointer hover:bg-slate-700 transition-colors"><FiArrowRight /></div>
                <div className="w-10 h-10 rounded bg-early-dark-blue flex items-center justify-center text-white cursor-pointer hover:bg-slate-700 transition-colors"><FiArrowRight /></div>
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
    </div>
  );
};

const FAQItem: React.FC<{ question: string }> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border-b border-slate-100 overflow-hidden rounded-xl shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left font-bold heading-blue hover:bg-slate-50 transition-colors"
      >
        <span>{question}</span>
        {isOpen ? <FiMinus className="text-early-green" /> : <FiPlus className="text-early-green" />}
      </button>
      {isOpen && (
        <div className="px-8 pb-6 animate-in slide-in-from-top-1 duration-200">
          <p className="text-sm text-slate-600 leading-relaxed">
            Placeholder for answer content. At Earlybuild, we ensure the highest transparency in real estate data through AI and machine learning, providing developers with actionable insights within minutes.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;

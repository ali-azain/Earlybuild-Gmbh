
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { FiMessageSquare, FiSend, FiX, FiCpu } from 'react-icons/fi';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Guten Tag! Ich bin Ihr Earlybuild-Berater. Wie kann ich Sie bei der Digitalisierung Ihrer Projektentwicklung unterstützen?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the Earlybuild.ai professional consultant. 
          Focus on precision, data-driven decisions, and the German real estate market. 
          The brand identity is expert, reliable, and innovative.
          Language: German.`,
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "Entschuldigung, ich konnte keine Antwort generieren." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#003E6B] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
      >
        <FiMessageSquare className="text-white text-2xl" />
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-[380px] h-[500px] bg-white rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-slate-200 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#003E6B] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <FiCpu className="text-white text-xl" />
              </div>
              <div className="text-white">
                <p className="font-bold text-sm">Earlybuild Consultant</p>
                <p className="text-[10px] opacity-70">AI-Powered Advisor</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-2 rounded-full">
              <FiX />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#28C263] text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 rounded-tl-none shadow-sm border border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl text-xs text-slate-400 italic">
                  Berater schreibt...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ihre Nachricht..."
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-[#28C263] outline-none"
              />
              <button 
                onClick={handleSend}
                className="bg-[#28C263] text-white p-2 rounded-xl hover:scale-105 transition-transform"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;

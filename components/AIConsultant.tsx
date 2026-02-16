
import React, { useState } from 'react';
import { getMakeupAdvice } from '../services/geminiService';
import { Sparkles, Loader2 } from 'lucide-react';

export const AIConsultant: React.FC = () => {
  const [event, setEvent] = useState('');
  const [skin, setSkin] = useState('');
  const [mood, setMood] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const advice = await getMakeupAdvice(event, skin, mood);
    setResult(advice);
    setLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-20 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">AI Beauty Consultant</h2>
            <p className="text-gray-400">Get personalized makeup recommendations tailored for the camera.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <form onSubmit={handleSubmit} className="space-y-6 bg-black/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
              <div>
                <label className="block text-sm font-medium text-amber-500 mb-2">The Event</label>
                <input 
                  type="text" 
                  placeholder="e.g. Music Video Shoot, Red Carpet" 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 focus:border-amber-500 outline-none transition"
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-500 mb-2">Skin Type</label>
                <select 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 focus:border-amber-500 outline-none transition appearance-none"
                  value={skin}
                  onChange={(e) => setSkin(e.target.value)}
                  required
                >
                  <option value="">Select Skin Type</option>
                  <option value="Oily">Oily</option>
                  <option value="Dry">Dry</option>
                  <option value="Combination">Combination</option>
                  <option value="Normal">Normal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-500 mb-2">Mood/Vibe</label>
                <input 
                  type="text" 
                  placeholder="e.g. Ethereal, Bold, Classic Habesha" 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 focus:border-amber-500 outline-none transition"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  required
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 rounded-lg font-bold bg-[#D4AF37] text-black hover:bg-amber-400 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                <span>{loading ? 'Consulting Experts...' : 'Generate Look Plan'}</span>
              </button>
            </form>

            <div className="min-h-[300px] flex flex-col justify-center">
              {result ? (
                <div className="bg-gradient-to-br from-amber-500/10 to-transparent p-8 rounded-2xl border border-amber-500/20 animate-in fade-in slide-in-from-right duration-500">
                  <h3 className="text-2xl font-serif text-amber-500 mb-4">{result.themeName}</h3>
                  <p className="text-gray-300 mb-6 italic">"{result.keyAdvice}"</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Key Products</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.suggestedProducts.map((p: string, i: number) => (
                        <span key={i} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-sm">{p}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/40 p-4 rounded-lg border-l-4 border-amber-500">
                    <span className="text-xs font-bold text-amber-500 uppercase block mb-1">Pro Camera Tip</span>
                    <p className="text-sm text-gray-400">{result.proTip}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8 border border-dashed border-white/10 rounded-2xl text-gray-500">
                  <Sparkles size={48} className="mx-auto mb-4 opacity-20" />
                  <p>Your personalized beauty blueprint will appear here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

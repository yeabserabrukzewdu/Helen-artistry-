
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { TRANSLATIONS, PORTFOLIO_DATA } from '../constants';
import { HabeshaPattern } from '../components/HabeshaPattern';

interface WorksProps {
  lang: 'en' | 'am';
  onBack: () => void;
}

const Works: React.FC<WorksProps> = ({ lang, onBack }) => {
  const t = TRANSLATIONS[lang];
  
  // Reordered: Body Scars moved to the end
  const categories = [
    { id: 'Makeup', label: t.work.categories.makeup },
    { id: 'Costume', label: t.work.categories.costume },
    { id: 'Jewelry', label: t.work.categories.jewelry },
    { id: 'Body Scars', label: t.work.categories.scars }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 relative overflow-hidden"
    >
      <HabeshaPattern className="absolute inset-0 pointer-events-none opacity-[0.03]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-24">
          <button 
            onClick={onBack} 
            className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-all mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>{lang === 'en' ? 'Back to Home' : 'ወደ ቤት ተመለስ'}</span>
          </button>
          
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-serif font-black tracking-tighter mb-8">{t.work.heading}</h2>
          <p className="opacity-40 text-lg sm:text-xl font-sans max-w-2xl leading-relaxed">{t.work.subheading}</p>
        </header>

        <div className="space-y-32">
          {categories.map((cat, catIdx) => {
            const items = PORTFOLIO_DATA.filter(item => item.category === cat.id);
            if (items.length === 0) return null;

            return (
              <section key={cat.id} className="relative">
                <div className="flex items-baseline space-x-4 mb-12">
                  <span className="text-[10px] font-bold text-[#d97706] tracking-[0.5em] opacity-40">0{catIdx + 1}</span>
                  <h3 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight">{cat.label}</h3>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-current/10 to-transparent ml-8"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {items.map((item, i) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-current/10 shadow-xl"
                    >
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h4 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-xs text-gray-300 font-sans line-clamp-3">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Works;

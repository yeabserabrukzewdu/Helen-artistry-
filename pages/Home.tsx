
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Film, Sparkles, Scissors, Gem, Camera, Music, Star, Mail, Instagram, ChevronDown, ChevronUp } from 'lucide-react';
import { HabeshaPattern, AccentDivider } from '../components/HabeshaPattern';
import { PortfolioSlider } from '../components/PortfolioSlider';
import { IMAGES, TRANSLATIONS, PORTFOLIO_DATA } from '../constants';
import { PortfolioItem } from '../types';

interface HomeProps {
  lang: 'en' | 'am';
  theme: 'dark' | 'light';
}

const CategoryGrid: React.FC<{ 
  category: string; 
  label: string; 
  index: number; 
  items: PortfolioItem[];
  lang: 'en' | 'am';
}> = ({ category, label, index, items, lang }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_COUNT = 4;
  const visibleItems = isExpanded ? items : items.slice(0, INITIAL_COUNT);

  return (
    <section className="mb-32 relative">
      <div className="flex items-baseline space-x-4 mb-12">
        <span className="text-[10px] font-bold text-[#d97706] tracking-[0.5em] opacity-40">0{index + 1}</span>
        <h3 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight">{label}</h3>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-current/10 to-transparent ml-8"></div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, i) => (
            <motion.div 
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: isExpanded ? 0 : i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-current/10 shadow-xl"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-xl font-serif font-bold text-white mb-2">{item.title}</h4>
                <p className="text-[10px] text-gray-300 font-sans line-clamp-2 uppercase tracking-widest">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {items.length > INITIAL_COUNT && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-3 px-10 py-4 rounded-full border border-current/20 hover:border-[#d97706] transition-all group font-bold uppercase tracking-widest text-[10px]"
          >
            <span>{isExpanded ? (lang === 'en' ? 'Show Less' : 'ቀንስ') : (lang === 'en' ? `Show More ${label}` : 'ተጨማሪ አሳይ')}</span>
            {isExpanded ? <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" /> : <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />}
          </button>
        </div>
      )}
    </section>
  );
};

const Home: React.FC<HomeProps> = ({ lang, theme }) => {
  const t = TRANSLATIONS[lang];

  // For the highlights slider
  const featuredWorks = useMemo(() => {
    return [...PORTFOLIO_DATA]
      .sort(() => Math.random() - 0.5)
      .slice(0, 15);
  }, []);

  const categories = [
    { id: 'Makeup', label: t.work.categories.makeup },
    { id: 'Costume', label: t.work.categories.costume },
    { id: 'Jewelry', label: t.work.categories.jewelry },
    { id: 'Body Scars', label: t.work.categories.scars }
  ];

  const getSkillIcon = (index: number) => {
    switch (index) {
      case 0: return <Film size={24} />;
      case 1: return <Sparkles size={24} />;
      case 2: return <Scissors size={24} />;
      case 3: return <Gem size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0: return <Film size={28} />;
      case 1: return <Camera size={28} />;
      case 2: return <Music size={28} />;
      case 3: return <Star size={28} />;
      default: return <Sparkles size={28} />;
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero */}
      <header className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
        <HabeshaPattern className="absolute inset-0 z-0 opacity-[0.05] lg:opacity-10" />
        <div className="relative w-full lg:w-1/2 h-[45vh] lg:h-screen flex items-center justify-center overflow-hidden">
           <motion.div initial={{ scale: 1.15, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} className="absolute inset-0 z-0">
             <img src={IMAGES.hero.portrait} alt="Helen" className="w-full h-full object-cover grayscale-[0.1]" />
             <div className={`absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r ${theme === 'dark' ? 'from-transparent via-transparent to-[#1a0f0e]' : 'from-transparent via-transparent to-[#fffaf5]'}`}></div>
           </motion.div>
        </div>
        <div className="w-full lg:w-1/2 min-h-[55vh] lg:min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12 lg:py-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h4 className="text-[#d97706] text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase mb-6 border-l-2 border-[#d97706] pl-4">
              {t.hero.location}
            </h4>
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-serif font-black leading-[0.95] tracking-tighter mb-8">
              {t.hero.headingStart} <br/> 
              <span className="gradient-accent italic block my-1">{t.hero.headingAccent}</span> 
              {t.hero.headingEnd}
            </h1>
            <div className="mb-10">
              <p className="text-base sm:text-lg lg:text-xl opacity-50 leading-relaxed font-sans mb-8 pr-4">
                {t.hero.subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => {
                  const el = document.getElementById('work');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }} className="bg-[#d97706] text-[#fffaf5] px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-3 hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/10 group">
                  <span>{lang === 'en' ? 'Explore Works' : 'ስራዎችን ያስሱ'}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-current opacity-20">
              {['Makeup', 'Costume', 'Jewelry', 'Scars'].map((pillar, i) => (
                <div key={pillar} className="text-left">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d97706] mb-1">0{i+1}</p>
                  <p className="text-[10px] sm:text-xs opacity-60 font-medium">{pillar}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className={`aspect-[4/5] overflow-hidden rounded-[2rem] sm:rounded-[3rem] border relative z-10 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
                <img src={IMAGES.about.mainImage} alt="Helen" className="w-full h-full object-cover grayscale-[0.2]" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h4 className="text-[#d97706] text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{t.about.tag}</h4>
                <h2 className="text-3xl sm:text-5xl font-serif mb-6 leading-tight">{t.about.heading} <br/><span className="gradient-accent italic">{t.about.accent}</span></h2>
                <p className="opacity-60 text-base sm:text-lg leading-relaxed mb-6 font-sans">{t.about.bio}</p>
                <div className="p-4 rounded-2xl border-l-4 border-[#d97706] bg-current/5">
                  <p className="text-xs sm:text-sm italic opacity-40 font-sans">{t.about.quote}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.about.skills.map((skill, i) => (
                  <div key={i} className="space-y-2 p-4 rounded-2xl transition-colors hover:bg-current/5">
                    <div className="text-[#d97706]">{getSkillIcon(i)}</div>
                    <h5 className="font-serif text-lg">{skill.title}</h5>
                    <p className="text-[10px] sm:text-xs leading-relaxed opacity-40 font-sans">{skill.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Slider */}
      <section className="py-24 relative overflow-hidden bg-current/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-serif mb-6 tracking-tighter">Artistry <span className="italic gradient-accent">Highlights</span></h2>
            <p className="opacity-40 text-base font-sans">A curated mix of our most transformative cinematic works for global production houses.</p>
          </div>
          <PortfolioSlider items={featuredWorks} />
        </div>
      </section>

      {/* Detailed Works Section - The 4 Droppable Sections */}
      <section id="work" className="py-24 sm:py-32 relative">
        <HabeshaPattern className="absolute inset-0 pointer-events-none opacity-[0.03]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-7xl font-serif font-black tracking-tighter mb-8">{t.work.heading}</h2>
            <p className="opacity-40 text-lg font-sans leading-relaxed">{t.work.subheading}</p>
          </div>

          <div className="space-y-4">
            {categories.map((cat, idx) => {
              const items = PORTFOLIO_DATA.filter(item => item.category === cat.id);
              return (
                <CategoryGrid 
                  key={cat.id} 
                  category={cat.id} 
                  label={cat.label} 
                  index={idx} 
                  items={items}
                  lang={lang}
                />
              );
            })}
          </div>
        </div>
      </section>

      <AccentDivider />

      {/* Services */}
      <section id="services" className="py-24 sm:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-6xl font-serif mb-6 tracking-tight">{t.services.heading}</h2>
            <p className="opacity-40 text-base sm:text-lg font-sans">{t.services.subheading}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.data.map((service, i) => (
              <div key={i} className="p-8 rounded-[2rem] border transition-all hover:border-[#d97706]/40 bg-current/5">
                <div className="mb-6 p-4 w-fit mx-auto rounded-xl bg-current/5 text-[#d97706]">
                  {getServiceIcon(i)}
                </div>
                <h3 className="text-lg font-serif mb-4">{service.title}</h3>
                <p className="opacity-30 text-xs sm:text-sm font-sans">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-current/5">
        <HabeshaPattern className="absolute inset-0 pointer-events-none opacity-[0.03]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            <div>
              <h2 className="text-4xl sm:text-7xl font-serif mb-8 tracking-tighter">
                {t.contact.heading} <br/><span className="gradient-accent italic">{t.contact.accent}</span>
              </h2>
              <p className="opacity-30 text-base sm:text-lg mb-12 max-w-md font-sans">{t.contact.sub}</p>
              <div className="flex flex-col space-y-6">
                <a href="mailto:hello@helenartistry.com" className="flex items-center space-x-4 text-lg transition-colors hover:text-[#d97706]">
                  <Mail size={20} className="text-[#d97706]" />
                  <span>hello@helenartistry.com</span>
                </a>
                <a href="#" className="flex items-center space-x-4 text-lg transition-colors hover:text-[#d97706]">
                  <Instagram size={20} className="text-[#d97706]" />
                  <span>@helen_artistry</span>
                </a>
              </div>
            </div>
            <form className="space-y-6 p-6 sm:p-10 rounded-[2rem] border bg-current/5 backdrop-blur-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder={t.contact.form.name} className="w-full bg-transparent border-b border-current/20 py-4 outline-none focus:border-[#d97706] transition-all font-sans" />
                <input type="email" placeholder={t.contact.form.email} className="w-full bg-transparent border-b border-current/20 py-4 outline-none focus:border-[#d97706] transition-all font-sans" />
              </div>
              <select className="w-full bg-transparent border-b border-current/20 py-4 outline-none focus:border-[#d97706] transition-all font-sans opacity-50 appearance-none">
                <option>Select Focus</option>
                <option>SFX / Body Scars</option>
                <option>Makeup</option>
                <option>Costume</option>
              </select>
              <textarea placeholder={t.contact.form.details} className="w-full bg-transparent border-b border-current/20 py-4 outline-none focus:border-[#d97706] transition-all font-sans h-32"></textarea>
              <button className="w-full py-6 rounded-full font-bold bg-[#d97706] text-[#fffaf5] hover:bg-orange-400 transition-all uppercase tracking-widest text-xs">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
          <p className="text-center text-[10px] font-bold uppercase tracking-widest opacity-10">
            &copy; 2024 Helen Artistry. All Rights Reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;

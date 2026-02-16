
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Film, Sparkles, Scissors, Gem, Camera, Music, Star, Mail, Instagram } from 'lucide-react';
import { HabeshaPattern, AccentDivider } from '../components/HabeshaPattern';
import { PortfolioSlider } from '../components/PortfolioSlider';
import { IMAGES, TRANSLATIONS, PORTFOLIO_DATA } from '../constants';

interface HomeProps {
  lang: 'en' | 'am';
  theme: 'dark' | 'light';
  onViewWorks: () => void;
}

const Home: React.FC<HomeProps> = ({ lang, theme, onViewWorks }) => {
  const t = TRANSLATIONS[lang];

  // Randomize the portfolio items for the home page to show a mix of categories
  const featuredWorks = useMemo(() => {
    return [...PORTFOLIO_DATA]
      .sort(() => Math.random() - 0.5)
      .slice(0, 15);
  }, []);

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
                <button onClick={onViewWorks} className="bg-[#d97706] text-[#fffaf5] px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-3 hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/10 group">
                  <span>{lang === 'en' ? 'The Portfolio' : 'ስራዎችን ይመልከቱ'}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-current opacity-20">
              {['Scars', 'Makeup', 'Costume', 'Jewelry'].map((pillar, i) => (
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

      {/* Portfolio Slider Section (Limited to 15 items for Home Page highlights) */}
      <section id="work" className="py-24 sm:py-32 relative overflow-hidden bg-current/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-6xl font-serif mb-6 tracking-tighter">{t.work.heading}</h2>
              <p className="opacity-40 text-base sm:text-lg font-sans">A curated selection of cinematic transformations and editorial artistry for global artists.</p>
            </div>
            <button onClick={onViewWorks} className="text-[#d97706] font-bold uppercase tracking-[0.2em] text-[10px] flex items-center space-x-2 group border-b border-[#d97706]/20 pb-1">
              <span>See All Category Works</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <PortfolioSlider items={featuredWorks} />
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

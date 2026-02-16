
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, Sun, Moon, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HabeshaPattern } from './components/HabeshaPattern';
import { WhatsAppToggle } from './components/WhatsAppToggle';
import Home from './pages/Home';
import Works from './pages/Works';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'works'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<'en' | 'am'>('en');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const initialTheme = mediaQuery.matches ? 'dark' : 'light';
    setTheme(initialTheme);
    if (initialTheme === 'light') document.documentElement.classList.add('light');
    else document.documentElement.classList.remove('light');

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      if (newTheme === 'light') document.documentElement.classList.add('light');
      else document.documentElement.classList.remove('light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') document.documentElement.classList.add('light');
    else document.documentElement.classList.remove('light');
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'am' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = TRANSLATIONS[lang];

  const handleNavigate = (page: 'home' | 'works', anchor?: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    if (page === 'home' && anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-[#d97706] selection:text-white transition-colors duration-500 ${theme === 'dark' ? 'bg-[#1a0f0e] text-[#fffaf5]' : 'bg-[#fffaf5] text-[#1a0f0e]'}`}>
      {/* Shared Nav */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || currentPage === 'works' ? 'bg-inherit/95 backdrop-blur-md py-3 shadow-xl border-b border-orange-900/10' : 'bg-transparent py-6 lg:py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="flex items-center space-x-2 relative z-[60] cursor-pointer" 
            onClick={() => handleNavigate('home')}
          >
            <span className="text-xl lg:text-2xl font-serif font-bold tracking-tighter gradient-accent">HELEN</span>
            <span className="text-[9px] lg:text-[10px] tracking-[0.3em] font-light text-amber-500/40 pt-1 uppercase">Artistry</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8 text-[12px] font-bold tracking-[0.3em] uppercase opacity-60">
            <button onClick={() => handleNavigate('home', 'about')} className="hover:text-[#d97706] transition-colors relative group">
              {t.nav.about}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d97706] transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavigate('works')} className={`hover:text-[#d97706] transition-colors relative group ${currentPage === 'works' ? 'text-[#d97706]' : ''}`}>
              {t.nav.work}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#d97706] transition-all group-hover:w-full ${currentPage === 'works' ? 'w-full' : 'w-0'}`}></span>
            </button>
            <button onClick={() => handleNavigate('home', 'services')} className="hover:text-[#d97706] transition-colors relative group">
              {t.nav.services}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d97706] transition-all group-hover:w-full"></span>
            </button>
            
            <div className="flex items-center space-x-4 border-l border-orange-900/10 pl-8">
              <button onClick={toggleTheme} className="hover:text-[#d97706] transition-colors" title="Toggle Theme">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={toggleLang} className="flex items-center space-x-1 hover:text-[#d97706] transition-colors" title="Toggle Language">
                <Languages size={18} />
                <span>{lang === 'en' ? 'AM' : 'EN'}</span>
              </button>
            </div>

            <button onClick={() => handleNavigate('home', 'contact')} className="bg-[#d97706] text-[#fffaf5] px-6 py-2 rounded-full hover:bg-orange-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/10">
              {t.nav.book}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3 relative z-[60]">
             <button onClick={toggleTheme} className="p-2 opacity-60">{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}</button>
             <button onClick={toggleLang} className="p-2 opacity-60 font-bold text-[10px]">{lang === 'en' ? 'AM' : 'EN'}</button>
             <button className="p-2 ml-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: '100%' }} 
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed inset-0 w-full h-screen z-50 flex flex-col justify-center px-10 ${theme === 'dark' ? 'bg-[#1a0f0e]' : 'bg-[#fffaf5]'} overflow-hidden`}
            >
              <HabeshaPattern className="absolute inset-0 opacity-10 pointer-events-none" />
              <div className="relative z-10 space-y-8 flex flex-col">
                <button onClick={() => handleNavigate('home', 'about')} className="text-4xl sm:text-6xl font-serif font-black tracking-tighter text-left">
                  {t.nav.about}
                </button>
                <button onClick={() => handleNavigate('works')} className="text-4xl sm:text-6xl font-serif font-black tracking-tighter text-left">
                  {t.nav.work}
                </button>
                <button onClick={() => handleNavigate('home', 'services')} className="text-4xl sm:text-6xl font-serif font-black tracking-tighter text-left">
                  {t.nav.services}
                </button>
                <button onClick={() => handleNavigate('home', 'contact')} className="text-4xl sm:text-6xl font-serif font-black tracking-tighter text-left">
                  {t.nav.contact}
                </button>
                
                <div className="pt-10 border-t border-orange-900/10 flex flex-col gap-6">
                  <button onClick={() => handleNavigate('home', 'contact')} className="bg-[#d97706] text-[#fffaf5] px-10 py-5 rounded-full font-bold text-center uppercase tracking-widest text-xs">
                    {t.nav.book}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Pages */}
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <Home key="home" lang={lang} theme={theme} onViewWorks={() => setCurrentPage('works')} />
        ) : (
          <Works key="works" lang={lang} onBack={() => setCurrentPage('home')} />
        )}
      </AnimatePresence>

      {/* Floating Elements */}
      <WhatsAppToggle />
    </div>
  );
};

export default App;

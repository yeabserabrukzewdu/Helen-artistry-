
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';

interface Props {
  items: PortfolioItem[];
}

export const PortfolioSlider: React.FC<Props> = ({ items }) => {
  return (
    <div className="w-full py-6 sm:py-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="portfolio-swiper !pb-12 sm:!pb-14"
        breakpoints={{
          320: { slidesPerView: 1.15, spaceBetween: 15 },
          480: { slidesPerView: 1.3, spaceBetween: 20 },
          768: { slidesPerView: 1.8, spaceBetween: 30 },
          1024: { slidesPerView: 2.3, spaceBetween: 40 },
          1280: { slidesPerView: 2.6, spaceBetween: 50 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="!w-[280px] sm:!w-[380px] lg:!w-[450px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] overflow-hidden rounded-[1.5rem] sm:rounded-3xl bg-[#2d1e1c] shadow-2xl border border-white/5"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0e] via-transparent to-transparent opacity-90"></div>
              <div className="absolute inset-0 p-5 sm:p-10 flex flex-col justify-end">
                <span className="text-[#fca5a5] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] mb-2 sm:mb-3">{item.category}</span>
                <h3 className="text-xl sm:text-3xl font-serif font-bold mb-2 sm:mb-3 leading-tight">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 line-clamp-2 opacity-80">{item.description}</p>
                <button className="flex items-center text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest space-x-2 group/btn w-fit">
                  <span className="border-b border-transparent group-hover/btn:border-[#d97706] transition-all">Details</span>
                  <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

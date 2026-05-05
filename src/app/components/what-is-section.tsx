import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../lib/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

// Imported assets
import img1 from 'figma:asset/422b830d8ef9164b05bcdaa841baad2d1587fe5d.png';
import img2 from 'figma:asset/7c9cfeee6c8a0e69e222bc0422bb3d7648d83832.png';
import img3 from 'figma:asset/09e0e64d4a20f620944028cc1df7569d3789f542.png';
import img4 from 'figma:asset/2cd36d8be5189684db60e16e68686a3d4ec17086.png';
import img5 from 'figma:asset/5f776cfcd1ce87b1d29b549300ae5df11d62cbe1.png';
import img6 from 'figma:asset/7934dd8de50947fdb92f159ffbcd25a75e559fdc.png';

export function WhatIsSection() {
  const { t } = useLanguage();
  
  const cards = [
    {
      eyebrow: t('whatis.1.eyebrow'),
      title: t('whatis.1.title'),
      description: t('whatis.1.desc'),
      image: img1,
      alt: "Workspace"
    },
    {
      eyebrow: t('whatis.2.eyebrow'),
      title: t('whatis.2.title'),
      description: t('whatis.2.desc'),
      image: img2,
      alt: "Abstract"
    },
    {
      eyebrow: t('whatis.3.eyebrow'),
      title: t('whatis.3.title'),
      description: t('whatis.3.desc'),
      image: img3,
      alt: "Student"
    },
    {
      eyebrow: t('whatis.4.eyebrow'),
      title: t('whatis.4.title'),
      description: t('whatis.4.desc'),
      image: img4,
      alt: "Folders"
    },
    {
      eyebrow: t('whatis.5.eyebrow'),
      title: t('whatis.5.title'),
      description: t('whatis.5.desc'),
      image: img5,
      alt: "Sync"
    },
    {
      eyebrow: t('whatis.6.eyebrow'),
      title: t('whatis.6.title'),
      description: t('whatis.6.desc'),
      image: img6,
      alt: "Analytics"
    }
  ];

  return (
    <section id="que-es" className="w-full py-24 bg-slate-50/50">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 pl-2"
        >
          <h2 className="text-4xl font-bold tracking-tight text-[#0F1A33] sm:text-5xl">
            {t('about.whatis.title')}
          </h2>
        </motion.div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {cards.map((card, index) => (
              <CarouselItem key={index} className="pl-5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col items-center justify-between h-[480px] overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                >
                  {/* Content Top */}
                  <div className="flex flex-col items-center text-center z-10 w-full">
                    <div className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#2D6BFF]">{card.eyebrow}</div>
                    <h3 className="text-2xl font-bold text-[#0F1A33] leading-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 line-clamp-3 px-2">
                      {card.description}
                    </p>
                  </div>

                  {/* Image Bottom */}
                  <div className="mt-6 w-full flex-1 relative rounded-2xl overflow-hidden bg-slate-50 group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                    <ImageWithFallback 
                      src={card.image}
                      alt={card.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    
                    {/* Floating Action Button / Link */}
                    <div className="absolute bottom-4 right-4 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                       <div className="w-8 h-8 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white shadow-lg">
                          <ChevronRight className="w-4 h-4" />
                       </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Controls */}
          <div className="flex justify-end gap-4 mt-10 pr-4">
            <CarouselPrevious className="static translate-y-0 translate-x-0 hover:bg-white hover:border-blue-200" />
            <CarouselNext className="static translate-y-0 translate-x-0 hover:bg-white hover:border-blue-200" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

// Imported assets
import intuitiveImage from 'figma:asset/6819c56e51f3aca25c57ccf51b9db10ecdfe7180.png';
import customizableImage from 'figma:asset/8eef9776d436d0b0ffb65991640a90e301cfbe77.png';
import multiDeviceImage from 'figma:asset/fafa79e255dff266a9db62984fd1ea806efd4bdb.png';
import nightModeImage from 'figma:asset/6920b3065e3cd17681d5b9b3acdf96ef6f885ce2.png';
import analyticsImage from 'figma:asset/0e02fa5eb2ade68b060ce59b48c7ca1e007664e1.png';
import communityImage from 'figma:asset/7139b9aec7e1c9c28e3425875185d5865560ecb1.png';

export function PillarsSection() {
  const { t } = useLanguage();
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const cards = [
    {
      id: 1,
      eyebrow: t('pillars.1.eyebrow'),
      title: t('pillars.1.title'),
      shortDesc: t('pillars.1.short'),
      fullDesc: t('pillars.1.full'),
      image: intuitiveImage,
      bgClass: "bg-white",
      textClass: "text-[#0F1A33]",
      accentClass: "text-[#2D6BFF]",
      isDark: false
    },
    {
      id: 2,
      eyebrow: t('pillars.2.eyebrow'),
      title: t('pillars.2.title'),
      shortDesc: t('pillars.2.short'),
      fullDesc: t('pillars.2.full'),
      image: customizableImage,
      bgClass: "bg-slate-50",
      textClass: "text-[#0F1A33]",
      accentClass: "text-[#4EA3FF]",
      isDark: false
    },
    {
      id: 3,
      eyebrow: t('pillars.3.eyebrow'),
      title: t('pillars.3.title'),
      shortDesc: t('pillars.3.short'),
      fullDesc: t('pillars.3.full'),
      image: multiDeviceImage,
      bgClass: "bg-blue-50",
      textClass: "text-[#0F1A33]",
      accentClass: "text-[#2D6BFF]",
      isDark: false
    },
    {
      id: 4,
      eyebrow: t('pillars.4.eyebrow'),
      title: t('pillars.4.title'),
      shortDesc: t('pillars.4.short'),
      fullDesc: t('pillars.4.full'),
      image: nightModeImage,
      bgClass: "bg-black",
      textClass: "text-white",
      accentClass: "text-blue-400",
      isDark: true
    },
    {
      id: 5,
      eyebrow: t('pillars.5.eyebrow'),
      title: t('pillars.5.title'),
      shortDesc: t('pillars.5.short'),
      fullDesc: t('pillars.5.full'),
      image: analyticsImage,
      bgClass: "bg-white",
      textClass: "text-[#0F1A33]",
      accentClass: "text-[#2D6BFF]",
      isDark: false
    },
    {
      id: 6,
      eyebrow: t('pillars.6.eyebrow'),
      title: t('pillars.6.title'),
      shortDesc: t('pillars.6.short'),
      fullDesc: t('pillars.6.full'),
      image: communityImage,
      bgClass: "bg-slate-100",
      textClass: "text-[#0F1A33]",
      accentClass: "text-[#2D6BFF]",
      isDark: false
    }
  ];

  const openCard = (card: any) => {
    setSelectedCard(card);
    setIsDialogOpen(true);
  };

  return (
    <section className="w-full py-24 bg-[#2D6BFF]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t('pillars.title')}
          </h2>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {cards.map((card, index) => (
              <CarouselItem key={card.id} className="pl-5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => openCard(card)}
                  className={`group relative flex flex-col h-[520px] w-full overflow-hidden rounded-[32px] ${card.bgClass} shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-black/5`}
                >
                  {/* Card Content Layer */}
                  <div className={`relative z-20 p-8 flex flex-col h-full ${card.textClass}`}>
                    <div className="space-y-1">
                      <p className={`text-[11px] font-bold uppercase tracking-widest opacity-90 ${card.accentClass}`}>
                        {card.eyebrow}
                      </p>
                      <h3 className="text-3xl font-bold leading-tight">
                        {card.title}
                      </h3>
                      <p className={`mt-2 text-sm font-medium opacity-70 max-w-[80%]`}>
                        {card.shortDesc}
                      </p>
                    </div>
                    
                    <div className="mt-auto flex justify-end">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${card.isDark ? 'bg-white text-black' : 'bg-[#0F1A33] text-white'} shadow-lg transition-transform group-hover:scale-110`}>
                        <Plus className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-10">
                     <div className={`absolute inset-0 ${card.isDark ? 'bg-gradient-to-b from-black/60 via-transparent to-transparent' : 'bg-gradient-to-b from-white/80 via-transparent to-transparent'}`} />
                     <img 
                      src={card.image} 
                      alt={card.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                     />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:flex justify-end gap-4 mt-8 pr-4">
            <CarouselPrevious className="static translate-y-0 translate-x-0" />
            <CarouselNext className="static translate-y-0 translate-x-0" />
          </div>
        </Carousel>

        {/* Detail Popup */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md overflow-hidden p-0 border-0 rounded-[32px] [&>button]:hidden">
             {selectedCard && (
               <div className="relative flex flex-col">
                  {/* Image Header */}
                  <div className="relative h-64 w-full overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                     <img 
                        src={selectedCard.image} 
                        alt={selectedCard.title}
                        className="h-full w-full object-cover"
                     />
                     <button 
                        onClick={() => setIsDialogOpen(false)}
                        className="absolute top-4 right-4 z-20 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
                     >
                        <X className="h-4 w-4" />
                     </button>
                     <div className="absolute bottom-4 left-6 z-20">
                        <span className={`text-[10px] font-bold uppercase tracking-wider text-white/90 bg-black/30 px-2 py-1 rounded backdrop-blur-md`}>
                           {selectedCard.eyebrow}
                        </span>
                        <DialogTitle className="mt-2 text-2xl font-bold text-white">
                           {selectedCard.title}
                        </DialogTitle>
                     </div>
                  </div>
                  
                  {/* Content Body */}
                  <div className="p-8 bg-white">
                     <DialogDescription className="text-base leading-relaxed text-slate-600">
                        {selectedCard.fullDesc}
                     </DialogDescription>
                     
                     <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-xs font-medium text-slate-400">{t('pillars.details')}</span>
                        <a 
                          href="https://dashboard.lexoraflashcards.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-bold text-[#2D6BFF] hover:underline"
                        >
                           {t('pillars.explore')} <ArrowRight className="h-4 w-4" />
                        </a>
                     </div>
                  </div>
               </div>
             )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

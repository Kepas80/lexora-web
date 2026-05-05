import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { 
  Brain, 
  FileText, 
  Smartphone, 
  BarChart3, 
  Trophy, 
  Sparkles, 
  FileSpreadsheet, 
  Download, 
  Calendar, 
  Repeat, 
  Layers, 
  Zap,
  Palette,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogClose,
  DialogTitle,
  DialogDescription
} from '../components/ui/dialog';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CameraSection } from '../components/CameraSection';
import { GenerativeAISection } from '../components/GenerativeAISection';
import { DocumentsImportSection } from '../components/DocumentsImportSection';
import { TutorAISection } from '../components/TutorAISection';
import { ExamModesDemo } from '../components/ExamModesDemo';
import { useLanguage } from '../lib/LanguageContext';
import appPreview from 'figma:asset/7bc40b0bbd7a0dbcac8d445ee903b5749ce398f9.png';
import gamificationImage from 'figma:asset/cbb89dc63a9ed2caf4eaf1ca97590e99d9886fec.png';
import learningPlayingImage from 'figma:asset/ddc8f78a440f43ebf5bba523d21f3918fbd8727f.png';
import statsImage from 'figma:asset/ed961f4358ff72f705cfff3e7753d7873c17a0fd.png';
import studentLibraryImage from 'figma:asset/dc176154edb3b14cc57ccb562ca7514847f465a5.png';
import pdfProcessingImage from 'figma:asset/e0989a8a606ad27f0c25b4b0b539dbdfdce6c4f6.png';
import libraryInterfaceImage from 'figma:asset/c3776eca16b1a5409b19b28255386ec1bb649b5a.png';
import { Link } from 'wouter';

// Reusable Apple-style card component with specific animations
function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0,
  animationType = "fade" 
}: { 
  title: string; 
  description: string; 
  icon: any; 
  delay?: number;
  animationType?: "fade" | "bounce" | "flow" | "unfold" | "grow" 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group relative h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(45,107,255,0.1)] transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50/80 text-[#2D6BFF]">
          <motion.div
             whileHover={
               animationType === "bounce" ? { y: -4 } :
               animationType === "flow" ? { x: 3 } :
               animationType === "grow" ? { scale: 1.1 } :
               animationType === "unfold" ? { rotateY: 180 } :
               {}
             }
             transition={{ repeat: animationType === "bounce" ? Infinity : 0, repeatType: "reverse", duration: 0.5 }}
          >
            <Icon className="h-6 w-6" strokeWidth={2} />
          </motion.div>
        </div>
        <h3 className="mb-2 text-lg font-bold tracking-tight text-[#0F1A33]">{title}</h3>
        <p className="text-sm font-medium leading-relaxed text-slate-500">{description}</p>
      </div>
    </motion.div>
  );
}

export function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 340; // approx card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const studyFeatures = [
    {
      id: 'modes',
      title: t('about.features.modes.title'),
      short: t('about.features.modes.short'),
      long: t('about.features.modes.long'),
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      icon: Layers,
      visual: appPreview
    },
    {
      id: 'calendar',
      title: t('about.features.calendar.title'),
      short: t('about.features.calendar.short'),
      long: t('about.features.calendar.long'),
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      icon: Calendar,
      visual: statsImage
    },
    {
      id: 'spaced',
      title: t('about.features.spaced.title'),
      short: t('about.features.spaced.short'),
      long: t('about.features.spaced.long'),
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      icon: Repeat,
      visual: learningPlayingImage
    },
    {
      id: 'custom',
      title: t('about.features.custom.title'),
      short: t('about.features.custom.short'),
      long: t('about.features.custom.long'),
      gradient: "from-blue-600 via-indigo-600 to-violet-600",
      icon: Palette,
      visual: gamificationImage
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] pb-32">
      
      {/* 1. HERO PRINCIPAL */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
          {/* Badge */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="flex justify-center mb-8"
          >
             <span className="inline-flex items-center rounded-full bg-blue-50/50 backdrop-blur-md border border-blue-100 px-6 py-2 text-xs font-bold text-[#2D6BFF] uppercase tracking-[0.2em] shadow-sm">
                {t('features_page.hero.badge')}
             </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-[#0F1A33] mb-8 leading-[0.9]"
          >
            {t('features_page.hero.title_pre')} <br className="hidden md:block" />
            <motion.span 
               className="bg-gradient-to-r from-[#2D6BFF] via-[#9F53FF] to-[#2D6BFF] bg-[length:200%_auto] bg-clip-text text-transparent inline-block"
               animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
               {t('features_page.hero.title_span')}
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-3xl font-medium text-slate-500 max-w-4xl mx-auto leading-relaxed"
          >
            {t('features_page.hero.subtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <a 
              href="https://dashboard.lexoraflashcards.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F1A33] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 shadow-xl shadow-blue-900/10"
            >
              {t('features_page.hero.cta')} <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
          
          {/* Background Atmosphere */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] max-w-[1000px] -z-10 pointer-events-none flex items-center justify-center"
            animate={{ 
              scale: [0.95, 1.05, 0.95],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
              
              {/* Main Rotating Gradient Circle - Nested for independent animations */}
              <motion.div 
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute"
              >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, #2D6BFF, #9F53FF, #2D6BFF, transparent)'
                    }}
                  />
              </motion.div>

              {/* Secondary Counter-Rotating Ring - Nested */}
              <motion.div 
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute"
              >
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-[450px] h-[450px] rounded-full opacity-30 blur-2xl"
                    style={{
                      background: 'conic-gradient(from 180deg, transparent, #00C2FF, #2D6BFF, transparent)'
                    }}
                  />
              </motion.div>

              {/* Pulsing Core */}
               <motion.div 
                 animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute w-[300px] h-[300px] bg-indigo-500/30 rounded-full blur-[60px]"
              />
          </motion.div>
        </div>

        {/* Collage / Visual Context */}
        {/* Module moved to About.tsx */}

        {/* Bento Grid Features Module */}
        <div className="mt-32 mx-auto max-w-6xl px-6 relative z-10" id="features-grid">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-[#0F1A33] mb-6"
            >
              {t('features_page.bento.title')}
            </motion.h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
               {t('features_page.bento.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* 1. IA Generativa (Purple) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               onClick={() => document.getElementById('generative-ai')?.scrollIntoView({ behavior: 'smooth' })}
               className="group relative h-80 md:h-96 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-purple-100/40 overflow-hidden flex flex-col items-center justify-center hover:shadow-purple-200/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               {/* Glow Blob */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-purple-400/20 blur-[80px] rounded-full group-hover:bg-purple-400/30 transition-colors duration-500" />

               {/* 3D Icon Container */}
               <div className="relative z-10 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="relative w-28 h-28 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-xl flex items-center justify-center">
                     <Brain className="w-14 h-14 text-purple-600 drop-shadow-xl" />
                     {/* Glass Glare */}
                     <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/60 to-transparent rounded-3xl pointer-events-none" />
                  </div>
               </div>

               <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">{t('features_page.bento.card1.title')}</h3>
               <p className="relative z-10 text-purple-600 font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{t('features_page.bento.demo')}</p>
            </motion.div>

            {/* 2. Documentos (Teal) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               onClick={() => document.getElementById('documents-import')?.scrollIntoView({ behavior: 'smooth' })}
               className="group relative h-80 md:h-96 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-teal-100/40 overflow-hidden flex flex-col items-center justify-center hover:shadow-teal-200/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-teal-400/20 blur-[80px] rounded-full group-hover:bg-teal-400/30 transition-colors duration-500" />

               <div className="relative z-10 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="relative w-28 h-28 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-xl flex items-center justify-center">
                     <div className="relative">
                        <FileText className="w-14 h-14 text-teal-600 drop-shadow-xl relative z-10" />
                        <div className="absolute -right-3 -bottom-2 w-10 h-12 bg-teal-100/80 rounded-lg -z-10 rotate-12" />
                     </div>
                     <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/60 to-transparent rounded-3xl pointer-events-none" />
                  </div>
               </div>

               <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">{t('features_page.bento.card2.title')}</h3>
               <p className="relative z-10 text-teal-600 font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{t('features_page.bento.demo')}</p>
            </motion.div>

            {/* 3. Cámara (Sky Blue) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               onClick={() => document.getElementById('camera-section')?.scrollIntoView({ behavior: 'smooth' })}
               className="group relative h-80 md:h-96 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-sky-100/40 overflow-hidden flex flex-col items-center justify-center hover:shadow-sky-200/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-sky-400/20 blur-[80px] rounded-full group-hover:bg-sky-400/30 transition-colors duration-500" />

               <div className="relative z-10 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="relative w-28 h-28 bg-white/40 backdrop-blur-xl rounded-full border border-white/60 shadow-xl flex items-center justify-center overflow-hidden">
                     <Smartphone className="w-14 h-14 text-sky-600 drop-shadow-xl relative z-10" />
                     {/* Lens reflection simulation */}
                     <div className="absolute inset-4 border border-white/40 rounded-full" />
                     <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/60 to-transparent rounded-full pointer-events-none" />
                  </div>
               </div>

               <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">{t('features_page.bento.card3.title')}</h3>
               <p className="relative z-10 text-sky-600 font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{t('features_page.bento.demo')}</p>
            </motion.div>

            {/* 4. Repetición (Indigo) */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.3 }}
               onClick={() => document.getElementById('tutor-ai')?.scrollIntoView({ behavior: 'smooth' })}
               className="group relative h-80 md:h-96 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-indigo-100/40 overflow-hidden flex flex-col items-center justify-center hover:shadow-indigo-200/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-indigo-400/20 blur-[80px] rounded-full group-hover:bg-indigo-400/30 transition-colors duration-500" />

               <div className="relative z-10 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="relative w-28 h-28 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-xl flex items-center justify-center">
                     <Repeat className="w-14 h-14 text-indigo-600 drop-shadow-xl" />
                     <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/60 to-transparent rounded-3xl pointer-events-none" />
                  </div>
               </div>

               <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">{t('features_page.bento.card4.title')}</h3>
               <p className="relative z-10 text-indigo-600 font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{t('features_page.bento.demo')}</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Feature Modules */}
      <GenerativeAISection />
      <DocumentsImportSection />
      <div id="camera-section">
        <CameraSection />
      </div>
      <TutorAISection />

      <div id="features-grid" className="mx-auto max-w-7xl px-6 lg:px-8 space-y-32">
        
        {/* SECTION 1: ORGANIZACIÓN */}
        <section className="relative mt-24 py-24 px-6 md:px-12 rounded-[3rem] bg-slate-50 border border-slate-100 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-100/40 rounded-full blur-[100px]" />
             <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-indigo-100/40 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D6BFF] mb-4"
            >
              {t('features_page.org.eyebrow')}
            </motion.h2>
            <motion.h3 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl font-bold tracking-tight text-[#0F1A33]"
            >
              {t('features_page.org.title')}
            </motion.h3>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Flashcards - Large */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-400 shadow-sm hover:shadow-[0_0_30px_rgba(45,107,255,0.2)] transition-all duration-300 hover:scale-[1.02] h-[360px] md:h-[400px]"
            >
               <div className="absolute inset-0">
                  <div className="w-full h-full bg-gradient-to-br from-white via-slate-50 to-blue-50 group-hover:from-slate-50 group-hover:via-slate-100 group-hover:to-blue-100 transition-colors duration-500 flex items-center justify-center relative">
                     <div className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                     <div className="relative w-28 md:w-32 h-40 md:h-44 transform transition-transform duration-500 group-hover:scale-110 rotate-3 group-hover:rotate-0">
                        <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-12 -translate-x-4 border border-slate-200 shadow-sm transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-5" />
                        <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-6 -translate-x-2 border border-slate-200 shadow-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:-translate-x-2.5" />
                        <div className="absolute inset-0 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-4 flex flex-col items-center justify-center">
                           <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-blue-600">
                              <Layers className="w-5 h-5" />
                           </div>
                           <div className="w-16 h-1.5 bg-slate-100 rounded-full mb-2" />
                           <div className="w-12 h-1.5 bg-slate-100 rounded-full" />
                        </div>
                     </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
               </div>
               <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <Sparkles className="w-5 h-5" />
                     </div>
                     <span className="text-blue-600 font-bold text-sm tracking-wide">{t('features_page.org.card1.tag')}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-[#0F1A33] mb-2">{t('features_page.org.card1.title')}</h4>
                  <div className="grid grid-cols-1 grid-rows-1 max-w-xs">
                     <p className="col-start-1 row-start-1 text-slate-600 font-medium leading-relaxed transition-opacity duration-300 opacity-100 group-hover:opacity-0 text-sm md:text-base">
                        {t('features_page.org.card1.desc1')}
                     </p>
                     <p className="col-start-1 row-start-1 text-slate-600 font-medium leading-relaxed transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-sm md:text-base">
                        {t('features_page.org.card1.desc2')}
                     </p>
                  </div>
               </div>
            </motion.div>

            {/* Card 2: PDF - Large */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
               className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-400 shadow-sm hover:shadow-[0_0_30px_rgba(45,107,255,0.2)] transition-all duration-300 hover:scale-[1.02] h-[360px] md:h-[400px]"
            >
               <div className="absolute inset-0">
                  <div className="w-full h-full bg-gradient-to-br from-white via-slate-50 to-blue-50 group-hover:from-slate-50 group-hover:via-slate-100 group-hover:to-blue-100 transition-colors duration-500 relative overflow-hidden flex items-center justify-center">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_50%)]" />
                     <div className="w-[140%] h-[140%] grid grid-cols-2 gap-4 p-4 opacity-90 origin-top-left" style={{ transform: 'perspective(1000px) rotateX(15deg) rotateY(-12deg) rotateZ(2deg) translateX(5%) translateY(0%)' }}>
                        {/* Mock Card 1 */}
                        <div className="bg-white rounded-xl p-4 shadow-xl flex flex-col gap-3 h-48 transform transition-transform duration-500 hover:-translate-y-2 border border-slate-200">
                           <div className="flex justify-between items-start">
                              <div className="w-20 h-2 bg-slate-200 rounded-full" />
                              <div className="w-4 h-4 rounded-full bg-slate-100" />
                           </div>
                           <div className="w-12 h-5 rounded-full bg-slate-100" />
                           <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                              <div className="w-2/3 h-full bg-blue-500 rounded-full" />
                           </div>
                           <div className="mt-auto w-full h-8 bg-[#8b5cf6] rounded-lg shadow-sm flex items-center justify-center">
                              <div className="w-16 h-2 bg-white/30 rounded-full" />
                           </div>
                        </div>
                        {/* Mock Card 2 */}
                        <div className="bg-white rounded-xl p-4 shadow-xl flex flex-col gap-3 h-48 transform transition-transform duration-500 hover:-translate-y-2 delay-75 border border-slate-200">
                           <div className="flex justify-between items-start">
                              <div className="w-24 h-2 bg-slate-200 rounded-full" />
                              <div className="w-4 h-4 rounded-full bg-slate-100" />
                           </div>
                           <div className="w-16 h-5 rounded-full bg-slate-100" />
                           <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                              <div className="w-1/3 h-full bg-blue-500 rounded-full" />
                           </div>
                           <div className="mt-auto w-full h-8 bg-[#8b5cf6] rounded-lg shadow-sm flex items-center justify-center">
                              <div className="w-16 h-2 bg-white/30 rounded-full" />
                           </div>
                        </div>
                        {/* Mock Card 3 */}
                        <div className="bg-white rounded-xl p-4 shadow-xl flex flex-col gap-3 h-48 transform transition-transform duration-500 hover:-translate-y-2 delay-100 border border-slate-200">
                           <div className="flex justify-between items-start">
                              <div className="w-16 h-2 bg-slate-200 rounded-full" />
                              <div className="w-4 h-4 rounded-full bg-slate-100" />
                           </div>
                           <div className="w-14 h-5 rounded-full bg-slate-100" />
                           <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                              <div className="w-full h-full bg-blue-500 rounded-full" />
                           </div>
                           <div className="mt-auto w-full h-8 bg-[#8b5cf6] rounded-lg shadow-sm flex items-center justify-center">
                              <div className="w-16 h-2 bg-white/30 rounded-full" />
                           </div>
                        </div>
                        {/* Mock Card 4 */}
                        <div className="bg-white rounded-xl p-4 shadow-xl flex flex-col gap-3 h-48 transform transition-transform duration-500 hover:-translate-y-2 delay-150 border border-slate-200">
                           <div className="flex justify-between items-start">
                              <div className="w-20 h-2 bg-slate-200 rounded-full" />
                              <div className="w-4 h-4 rounded-full bg-slate-100" />
                           </div>
                           <div className="w-10 h-5 rounded-full bg-slate-100" />
                           <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                              <div className="w-1/4 h-full bg-blue-500 rounded-full" />
                           </div>
                           <div className="mt-auto w-full h-8 bg-[#8b5cf6] rounded-lg shadow-sm flex items-center justify-center">
                              <div className="w-16 h-2 bg-white/30 rounded-full" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
               </div>
               <div className="absolute top-0 left-0 p-6 md:p-10 w-full h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <FileText className="w-5 h-5" />
                     </div>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-[#0F1A33] mb-2">{t('features_page.org.card2.title')}</h4>
                  <div className="grid grid-cols-1 grid-rows-1 max-w-sm mb-auto">
                     <p className="col-start-1 row-start-1 text-slate-600 font-medium leading-relaxed transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                        {t('features_page.org.card2.desc1')}
                     </p>
                     <p className="col-start-1 row-start-1 text-slate-600 font-medium leading-relaxed transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        {t('features_page.org.card2.desc2')}
                     </p>
                  </div>
                  
                  <div className="self-start mt-4">
                    <a href="https://dashboard.lexoraflashcards.com/" className="inline-flex items-center gap-2 text-white font-bold text-sm bg-[#0F1A33] px-4 py-2 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-blue-900/10">
                      {t('features_page.org.card2.cta')} <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
               </div>
            </motion.div>

            {/* Card 3: Excel - Small */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="group relative overflow-hidden rounded-[2.5rem] bg-white hover:bg-slate-50 border border-slate-100 hover:border-blue-400 shadow-sm hover:shadow-[0_0_30px_rgba(45,107,255,0.2)] transition-all duration-300 hover:scale-[1.02] h-[320px] md:h-[300px] flex flex-col justify-between p-8"
            >
               <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <FileSpreadsheet className="w-40 h-40 text-[#2D6BFF] -rotate-12" />
               </div>
               <div className="relative z-10">
                 <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-4 shadow-sm">
                    <FileSpreadsheet className="w-5 h-5" />
                 </div>
                 <h4 className="text-2xl font-bold text-[#0F1A33] mb-2">{t('features_page.org.card3.title')}</h4>
                 <div className="grid grid-cols-1 grid-rows-1">
                    <p className="col-start-1 row-start-1 text-slate-500 font-medium transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                       {t('features_page.org.card3.desc1')}
                    </p>
                    <p className="col-start-1 row-start-1 text-slate-500 font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                       {t('features_page.org.card3.desc2')}
                    </p>
                 </div>
               </div>
            </motion.div>

             {/* Card 4: Backup - Small Dark */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="group relative overflow-hidden rounded-[2.5rem] bg-[#0F1A33] shadow-sm hover:shadow-[0_0_30px_rgba(45,107,255,0.2)] transition-all duration-300 hover:scale-[1.02] h-[320px] md:h-[300px] p-8"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50 group-hover:from-slate-50 group-hover:via-slate-100 group-hover:to-blue-100 transition-colors duration-500">
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                  <div className="absolute inset-0 border border-slate-100 group-hover:border-blue-400/50 transition-colors duration-300 rounded-[2.5rem] pointer-events-none" />
                  
                  {/* 3D Lock/Backup Concept */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 transform transition-transform duration-500 group-hover:scale-105 opacity-20 group-hover:opacity-30">
                     <div className="w-full h-full bg-blue-500 rounded-full blur-2xl" />
                  </div>
                  
                  <div className="absolute top-6 right-6 w-28 h-28 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                     {/* Lock Shackle */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 border-[10px] border-slate-200 rounded-t-full transform -translate-y-1/2" />
                     {/* Lock Body */}
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1.5rem] shadow-[0_15px_30px_rgba(37,99,235,0.25)] flex items-center justify-center border-t border-white/20">
                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                           <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                        </div>
                     </div>
                     {/* Check Badge (Backup Success) */}
                     <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full border-[3px] border-white flex items-center justify-center shadow-md">
                        <div className="w-3 h-2 border-l-[2.5px] border-b-[2.5px] border-white -rotate-45 -translate-y-0.5" />
                     </div>
                  </div>
               </div>
               <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-auto">
                    <Download className="w-5 h-5" />
                 </div>
                 <h4 className="text-2xl font-bold text-[#0F1A33] mb-2">{t('features_page.org.card4.title')}</h4>
                 <div className="grid grid-cols-1 grid-rows-1">
                    <p className="col-start-1 row-start-1 text-slate-500 font-medium transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                       {t('features_page.org.card4.desc1')}
                    </p>
                    <p className="col-start-1 row-start-1 text-slate-500 font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                       {t('features_page.org.card4.desc2')}
                    </p>
                 </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Animated Connection Arrow - Tech Style */}
        <div className="relative h-48 w-full flex flex-col justify-center items-center -my-20 z-20 pointer-events-none">
           {/* Glowing Data Line */}
           <div className="relative w-[1px] h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent overflow-hidden">
              <motion.div 
                 className="absolute top-0 left-[-1px] w-[3px] h-20 bg-gradient-to-b from-transparent via-[#6366F1] to-transparent shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                 initial={{ y: "-100%" }}
                 whileInView={{ y: "300%" }}
                 transition={{ 
                    duration: 2, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    repeatDelay: 0.5 
                 }}
              />
           </div>
           
           {/* Tech Node */}
           <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute bottom-8 w-6 h-6 bg-white rounded-full border-2 border-[#6366F1] shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center justify-center z-10"
           >
              <motion.div 
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="w-2 h-2 rounded-full bg-[#6366F1]" 
              />
              <div className="absolute inset-0 bg-[#6366F1] rounded-full animate-ping opacity-20" />
           </motion.div>
        </div>

        {/* SECTION 2: MOTIVACIÓN */}
        <section className="relative mt-24 py-24 px-6 md:px-12 rounded-[3rem] bg-slate-50 border border-slate-100 overflow-hidden">
          {/* Decorative Background - Purple Theme */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-100/40 rounded-full blur-[100px]" />
             <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-fuchsia-100/40 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-sm font-bold uppercase tracking-[0.2em] text-[#9F53FF] mb-4"
            >
              {t('features_page.mot.eyebrow')}
            </motion.h2>
            <motion.h3 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl font-bold tracking-tight text-[#0F1A33]"
            >
              {t('features_page.mot.title')}
            </motion.h3>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Card 1 */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(159,83,255,0.15)] transition-all duration-300 hover:scale-[1.02] flex flex-col p-6 h-[380px] md:h-[420px]"
            >
               <div className="flex-1 relative bg-slate-50 rounded-[1.5rem] overflow-hidden mb-6 flex items-center justify-center border border-slate-50 group-hover:border-purple-50 transition-colors">
                  <motion.img src={gamificationImage} className="w-[85%] object-contain drop-shadow-md" whileHover={{ scale: 1.1, rotate: -2 }} transition={{ type: "spring", stiffness: 300 }} />
               </div>
               <h4 className="text-xl font-bold text-[#0F1A33] mb-2">{t('features_page.mot.card1.title')}</h4>
               <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">{t('features_page.mot.card1.desc')}</p>
             </motion.div>

             {/* Card 2 */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(159,83,255,0.15)] transition-all duration-300 hover:scale-[1.02] flex flex-col p-6 h-[380px] md:h-[420px]"
            >
               <div className="flex-1 relative bg-slate-50 rounded-[1.5rem] overflow-hidden mb-6 flex items-center justify-center border border-slate-50 group-hover:border-purple-50 transition-colors">
                  <motion.img src={statsImage} className="w-[90%] object-contain drop-shadow-md" whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }} />
               </div>
               <h4 className="text-xl font-bold text-[#0F1A33] mb-2">{t('features_page.mot.card2.title')}</h4>
               <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">{t('features_page.mot.card2.desc')}</p>
             </motion.div>

             {/* Card 3 */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(159,83,255,0.15)] transition-all duration-300 hover:scale-[1.02] flex flex-col p-6 h-[380px] md:h-[420px]"
            >
               <div className="flex-1 relative bg-slate-50 rounded-[1.5rem] overflow-hidden mb-6 flex items-center justify-center border border-slate-50 group-hover:border-purple-50 transition-colors">
                  <motion.img src={learningPlayingImage} className="w-[85%] object-contain drop-shadow-md" whileHover={{ scale: 1.1, rotate: 2 }} transition={{ type: "spring", stiffness: 300 }} />
               </div>
               <h4 className="text-xl font-bold text-[#0F1A33] mb-2">{t('features_page.mot.card3.title')}</h4>
               <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">{t('features_page.mot.card3.desc')}</p>
             </motion.div>
          </div>
        </section>

        {/* CTA Section - Apple Style Closure */}
        <section className="relative overflow-hidden rounded-[3rem] bg-[#0F1A33] px-6 py-24 text-center shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#2D6BFF]/20 via-transparent to-[#9F53FF]/20 opacity-60" />
           {/* Animated blobs */}
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
           
           <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                {t('features_page.cta.title')}
              </h2>
              <p className="text-xl text-slate-300 font-medium max-w-xl mx-auto">
                {t('features_page.cta.desc')}
              </p>
              <div>
                <a 
                  href="https://dashboard.lexoraflashcards.com/" 
                  className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-[#0F1A33] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  {t('features_page.cta.button')}
                </a>
              </div>
           </div>
        </section>

      </div>


    </div>
  );
}
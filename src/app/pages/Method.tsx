import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronRight, ChevronDown, Check, Flame, Zap, Brain, Lightbulb, Dna } from 'lucide-react';
import inputBgImage from 'figma:asset/13517d660b040e40c3c7842c18d132d43b9552f0.png';
import studySmartImage from 'figma:asset/c2d47d24ac1216bbcf71179586a0efec7c9c7daa.png';
import aiGenImage from 'figma:asset/56c598b6e7257aafbd9e4cfd3bf4e942c1669cc9.png';
import modeStudyImage from 'figma:asset/07acfd7eabc4127ddc60621a316c77b8a66c892a.png';
import modeExerciseImage from 'figma:asset/e4536ef380ada62a80084f524bce9d616d9981a6.png';
import modeProImage from 'figma:asset/4d58546fb197aa5e71050727db621f8afb7830ce.png';
import modeExamImage from 'figma:asset/a96ef7d665dac1d6362cf44af0667b726f0bd746.png';
import { useLanguage } from '../lib/LanguageContext';
import { NeuralBrain } from '../components/NeuralBrain';

export function Method() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const tabs = [
    {
      title: t('method_page.tabs.1.title'),
      desc: t('method_page.tabs.1.desc'),
      image: modeStudyImage
    },
    {
      title: t('method_page.tabs.2.title'),
      desc: t('method_page.tabs.2.desc'),
      image: modeExerciseImage
    },
    {
      title: t('method_page.tabs.3.title'),
      desc: t('method_page.tabs.3.desc'),
      image: modeProImage
    },
    {
      title: t('method_page.tabs.4.title'),
      desc: t('method_page.tabs.4.desc'),
      image: modeExamImage
    }
  ];

  return (
    <div className="bg-white text-[#0F1A33] selection:bg-[#2D6BFF]/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-32 text-center w-full relative overflow-hidden bg-[#0F1A33]">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
           <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white"
          >
            {t('method_page.hero.title').replace(/\.$/, '')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed mb-12"
          >
            {t('method_page.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full flex justify-center"
          >
             <NeuralBrain />
          </motion.div>
        </div>
      </section>

      {/* Scientific Section 1 */}
      {/* Visual Journey Section */}
      <section className="py-32 px-6 bg-[#0F1A33] text-white overflow-hidden relative">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
           <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Central Neon Beam */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent -translate-x-1/2 md:block hidden">
            <motion.div 
               initial={{ height: "0%" }}
               whileInView={{ height: "100%" }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="absolute top-0 left-0 w-full bg-blue-400 blur-[2px]" 
            />
          </div>

          <div className="space-y-20 md:space-y-48">
            
            {/* Step 1: Input (Image Left) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
               {/* Center Node */}
               <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0F1A33] border-2 border-blue-500 rounded-full z-20 md:flex items-center justify-center hidden"
               >
                  <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]" />
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="relative"
               >
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 group aspect-[4/3] max-w-sm mx-auto md:max-w-none">
                    <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition-colors duration-500 z-10 pointer-events-none" />
                    <ImageWithFallback src={inputBgImage} alt="Centraliza tu estudio" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                 className="text-left md:pl-16 flex flex-col items-center md:items-start text-center md:text-left"
               >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4 md:mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                    {t('method.phase1.badge')}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                    {t('method.phase1.title')}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                    {t('method.phase1.desc')}
                  </p>
               </motion.div>
            </div>

            {/* Step 2: Process (Text Left) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
               {/* Center Node */}
               <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0F1A33] border-2 border-purple-500 rounded-full z-20 md:flex items-center justify-center hidden"
               >
                  <div className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,1)]" />
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                 className="text-left md:text-right md:pr-16 order-2 md:order-1 flex flex-col items-center md:items-end text-center md:text-right"
               >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4 md:mb-6 md:ml-auto md:flex-row-reverse">
                    <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
                    {t('method.phase2.badge')}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                    {t('method.phase2.title')}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-lg" dangerouslySetInnerHTML={{ __html: t('method.phase2.desc') }} />
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="relative order-1 md:order-2"
               >
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 group aspect-[4/3] max-w-sm mx-auto md:max-w-none">
                    <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/0 transition-colors duration-500 z-10 pointer-events-none" />
                    <ImageWithFallback src={aiGenImage} alt="AI Processing" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
               </motion.div>
            </div>

            {/* Step 3: Mastery (Image Left) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
               {/* Center Node */}
               <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#0F1A33] border-2 border-teal-500 rounded-full z-20 md:flex items-center justify-center hidden"
               >
                  <div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,1)]" />
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="relative"
               >
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-teal-900/20 group aspect-[4/3] max-w-sm mx-auto md:max-w-none">
                     <div className="absolute inset-0 bg-teal-500/10 group-hover:bg-teal-500/0 transition-colors duration-500 z-10 pointer-events-none" />
                     <ImageWithFallback src={studySmartImage} alt="Mastery" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                 className="text-left md:pl-16 flex flex-col items-center md:items-start text-center md:text-left"
               >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/30 border border-teal-500/30 text-teal-300 text-sm font-medium mb-4 md:mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
                    {t('method.phase3.badge')}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200">
                    {t('method.phase3.title')}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                    {t('method.phase3.desc')}
                  </p>
               </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Section removed as requested */}


      {/* Section 3: Interactive Modes (Apple Style Accordion) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight">{t('method_page.tabs.title').replace(/\.$/, '')}</h2>
           <a 
             href="https://dashboard.lexoraflashcards.com/" 
             target="_blank"
             rel="noopener noreferrer"
             className="text-[#0066CC] hover:underline text-lg font-medium flex items-center gap-1 transition-colors"
           >
              {t('method.modes.title')} <ChevronRight className="w-4 h-4 mt-0.5" />
           </a>
        </div>

        <div className="max-w-6xl mx-auto bg-[#F5F5F7] rounded-[32px] overflow-hidden flex flex-row min-h-[400px] md:min-h-[600px]">
          {/* Left Column: Accordion */}
          <div className="w-1/2 md:w-1/2 p-4 md:p-16 flex flex-col justify-center">
            {tabs.map((tab, index) => (
              <div 
                key={index} 
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer border-b border-slate-200 py-4 md:py-6 last:border-0 transition-all duration-300`}
              >
                <div className="flex justify-between items-center group">
                  <h3 className={`text-lg md:text-3xl font-bold transition-colors duration-300 leading-tight ${activeTab === index ? 'text-[#1d1d1f]' : 'text-slate-400 group-hover:text-slate-500'}`}>
                    {tab.title}
                  </h3>
                  {activeTab !== index && (
                    <ChevronDown className="text-slate-400 group-hover:text-slate-500 transition-colors w-4 h-4 md:w-6 md:h-6" strokeWidth={2.5} />
                  )}
                </div>
                <AnimatePresence>
                  {activeTab === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs md:text-lg text-slate-600 leading-relaxed font-medium md:pr-4">
                        {tab.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic Image */}
          <div className="w-1/2 md:w-1/2 bg-[#FAFAFC] relative overflow-hidden flex items-center justify-center p-4 md:p-12 min-h-[300px] md:min-h-full">
             <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-auto max-h-[200px] md:max-h-[450px] object-contain drop-shadow-xl"
                />
             </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Section 7: Smart Lists & Streak (Two Modules) */}
      <section className="py-24 px-6 bg-white">
         <div className="max-w-6xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#1d1d1f] text-center md:text-left tracking-tight">{t('method_page.essentials.title').replace(/\.$/, '')}</h2>
           <div className="grid md:grid-cols-2 gap-6">
             
             {/* Module 1: Listas Inteligentes */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F5F5F7] rounded-[32px] p-8 pt-12 md:px-12 md:pt-16 text-center overflow-hidden flex flex-col items-center min-h-[520px] group relative"
             >
               <div className="relative z-10 flex flex-col items-center w-full max-w-md">
                  <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-[#0066CC]/10 border border-[#0066CC]/20">
                    <span className="text-[#0066CC] font-bold text-xs tracking-wide uppercase">{t('method_page.essentials.1.tag')}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f] tracking-tight">{t('method_page.essentials.1.title')}</h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    {t('method_page.essentials.1.desc')}
                  </p>
                  <a href="https://dashboard.lexoraflashcards.com/register" className="text-[#0066CC] hover:underline hover:text-[#004499] mb-8 flex items-center gap-1 text-lg font-medium transition-colors">
                    {t('method_page.card1.cta')} <ChevronRight className="w-4 h-4 mt-0.5" strokeWidth={2.5} />
                  </a>
               </div>
               
               {/* Animated Icon: Smart List / Check items */}
               <div className="mt-auto w-full flex justify-center items-end h-[240px] pb-8">
                  <div className="relative w-48 h-48 bg-white rounded-2xl shadow-2xl border border-slate-100/50 flex flex-col p-6 gap-4 overflow-hidden">
                      {[1, 2, 3].map((i) => (
                        <motion.div 
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.3 + 0.2, duration: 0.5 }}
                          className="flex items-center gap-3 z-10"
                        >
                            <motion.div 
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: i * 0.3 + 0.4, type: "spring" }}
                              className="w-6 h-6 rounded-full bg-[#0066CC] flex items-center justify-center shrink-0"
                            >
                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                            </motion.div>
                            <div className="h-2.5 bg-slate-100 rounded-full flex-1 w-full" />
                        </motion.div>
                      ))}
                      {/* Decorative glow */}
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                  </div>
               </div>
             </motion.div>

             {/* Module 2: Racha y Progreso */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#F5F5F7] rounded-[32px] p-8 pt-12 md:px-12 md:pt-16 text-center overflow-hidden flex flex-col items-center min-h-[520px] group relative"
             >
               <div className="relative z-10 flex flex-col items-center w-full max-w-md">
                  <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-[#F56300]/10 border border-[#F56300]/20">
                    <span className="text-[#F56300] font-bold text-xs tracking-wide uppercase">{t('method_page.essentials.2.tag')}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f] tracking-tight">{t('method_page.essentials.2.title')}</h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    {t('method_page.essentials.2.desc')}
                  </p>
                  <a href="https://dashboard.lexoraflashcards.com/register" className="text-[#0066CC] hover:underline hover:text-[#004499] mb-8 flex items-center gap-1 text-lg font-medium transition-colors">
                    {t('method_page.essentials.2.cta')} <ChevronRight className="w-4 h-4 mt-0.5" strokeWidth={2.5} />
                  </a>
               </div>

               {/* Animated Icon: Streak / Chart */}
               <div className="mt-auto w-full flex justify-center items-end h-[240px] pb-8">
                 <div className="flex items-end gap-3 h-40">
                    {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 1].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: "10%" }}
                        whileInView={{ height: `${height * 100}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "circOut" }}
                        className={`w-4 md:w-6 rounded-t-full ${i === 6 ? 'bg-gradient-to-t from-[#F56300] to-orange-400' : 'bg-slate-200'}`}
                      />
                    ))}
                    <motion.div 
                       initial={{ scale: 0, opacity: 0 }}
                       whileInView={{ scale: 1, opacity: 1 }}
                       transition={{ delay: 1, type: "spring" }}
                       className="absolute -top-6 right-0 bg-white rounded-full p-2 shadow-lg border border-slate-100"
                       style={{ left: 'auto', right: '15%' }} // Approx position above last bar
                    >
                       <Flame className="w-5 h-5 text-[#F56300] fill-[#F56300]" />
                    </motion.div>
                 </div>
               </div>
             </motion.div>

           </div>
         </div>
      </section>



      {/* Scientific Section 2 */}
      <section className="py-24 px-6 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block tracking-tight pb-2">
              {t('method.science.title')}
            </h2>
          </div>

          <div 
            className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory px-4 -mx-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
             {/* Card 1: Repetición Espaciada */}
             <div className="min-w-[320px] md:min-w-[400px] snap-center bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,122,255,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,122,255,0.05)_0%,rgba(88,86,214,0.02)_50%,transparent_70%)] -z-10" />
                
                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                    <Brain className="w-7 h-7 text-blue-500" />
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {t('method.science.card1.title')}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t('method.science.card1.desc')}
                </p>
             </div>

             {/* Card 2: Recuerdo Activo */}
             <div className="min-w-[320px] md:min-w-[400px] snap-center bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,122,255,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,122,255,0.05)_0%,rgba(88,86,214,0.02)_50%,transparent_70%)] -z-10" />
                
                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <motion.div animate={{ opacity: [0.6, 1, 0.6], filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    <Lightbulb className="w-7 h-7 text-blue-500" />
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {t('method.science.card2.title')}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t('method.science.card2.desc')}
                </p>
             </div>

             {/* Card 3: Consolidación */}
             <div className="min-w-[320px] md:min-w-[400px] snap-center bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,122,255,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,122,255,0.05)_0%,rgba(88,86,214,0.02)_50%,transparent_70%)] -z-10" />
                
                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                   <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <Dna className="w-7 h-7 text-blue-500" />
                   </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {t('method.science.card3.title')}
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t('method.science.card3.desc')}
                </p>
             </div>
          </div>

          <div className="flex justify-center gap-3 mt-4">
            <div className="w-8 h-2.5 rounded-full bg-blue-600 shadow-sm"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300/80"></div>
          </div>
        </div>
      </section>

      {/* Scientific Section 3 */}


      {/* Section 8: Racha y Progreso (Hidden in original, keeping it hidden but translated just in case) */}
      <section className="py-24 px-6 mb-12 hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <span className="text-[#2D6BFF] font-semibold tracking-wide uppercase text-sm mb-4 block">{t('method_page.essentials.2.tag')}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('method_page.essentials.2.title')}</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t('method_page.essentials.2.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 px-6 text-center border-t border-slate-100">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-[#0F1A33]">
            {t('method_page.footer.title').replace(/\.$/, '')}
          </h2>
          
          <a
            href="https://dashboard.lexoraflashcards.com/register"
            className="inline-block rounded-full bg-[#2D6BFF] text-white px-8 py-4 text-lg font-medium hover:bg-blue-600 transition-all hover:scale-105"
          >
            {t('method_page.footer.cta')}
          </a>
        </motion.div>
      </section>
    </div>
  );
}
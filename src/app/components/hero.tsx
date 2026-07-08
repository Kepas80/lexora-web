import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Brain, Command, Zap, CheckCircle2, Play } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const [demoState, setDemoState] = useState<'idle' | 'typing' | 'processing' | 'cards' | 'complete'>('idle');
  const [typedText, setTypedText] = useState('');
  const fullText = t('hero.full_text');

  useEffect(() => {
    if (demoState === 'typing') {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        if (i > fullText.length) {
          clearInterval(interval);
          setTimeout(() => setDemoState('processing'), 600);
        }
      }, 40);
      return () => clearInterval(interval);
    }

    if (demoState === 'processing') {
      const timer = setTimeout(() => setDemoState('cards'), 1500);
      return () => clearTimeout(timer);
    }

    if (demoState === 'cards') {
      const timer = setTimeout(() => setDemoState('complete'), 2500);
      return () => clearTimeout(timer);
    }
  }, [demoState, fullText]);

  const startDemo = () => {
    setDemoState('typing');
    setTypedText('');
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center overflow-hidden bg-white pt-20 pb-20">
      {/* 1. Background Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 via-white to-white -z-20" />
      
      {/* 2. The "Interactive Demo" (Right Side) */}
      <div className="relative w-full lg:absolute lg:top-0 lg:right-0 lg:w-[55%] lg:h-full z-0 flex items-center justify-center lg:pr-20 order-2 lg:order-none min-h-[500px] lg:min-h-0 mt-8 lg:mt-0">
         <div className="relative w-full max-w-[500px] aspect-[4/3] lg:aspect-square">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-100/30 blur-[100px] rounded-full opacity-50" />

            {/* Main Demo Container */}
            <div className="relative w-full h-full flex items-center justify-center font-sans text-slate-800">
              
              {/* Fondo decorativo sutil (Local to this container) */}
              <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none" />

              <AnimatePresence mode="wait">
                
                {/* PASO 1: Botón Inicial (IDLE) */}
                {demoState === 'idle' && (
                  <motion.button
                    key="idle"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    onClick={startDemo}
                    className="group relative px-8 py-4 bg-white/80 backdrop-blur-xl border border-white/50 rounded-full shadow-lg hover:shadow-blue-200/50 hover:scale-105 transition-all duration-500 ease-out flex items-center gap-3 overflow-hidden z-20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold text-lg tracking-wide">
                       Crear mis flashcards gratis
                    </span>
                    <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
                  </motion.button>
                )}

                {/* PASO 2 & 3: Input Escribiendo / Generando */}
                {(demoState === 'typing' || demoState === 'processing') && (
                  <motion.div 
                     key="typing"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     className="flex flex-col items-center gap-6 z-20 w-full px-4"
                  >
                     <div className={`
                        relative px-6 py-4 bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm
                        transition-all duration-700 w-full max-w-[400px] flex items-center justify-center
                        ${demoState === 'processing' ? 'scale-105 shadow-blue-300/30 border-blue-200' : ''}
                     `}>
                        <span className="text-lg md:text-xl text-slate-700 font-medium tracking-tight text-center min-h-[1.5em]">
                           {demoState === 'typing' ? (
                              <motion.span
                                 initial={{ clipPath: 'inset(0 100% 0 0)' }}
                                 animate={{ clipPath: 'inset(0 0% 0 0)' }}
                                 transition={{ duration: 1.5, ease: "linear" }}
                                 className="inline-block"
                              >
                                 Introducción a la Astrofísica
                              </motion.span>
                           ) : (
                              "Introducción a la Astrofísica"
                           )}
                           {demoState === 'typing' && <span className="animate-pulse border-r-2 border-blue-500 ml-1 h-5 inline-block align-middle">&nbsp;</span>}
                        </span>
                        
                        {/* Icono de carga/IA al generar */}
                        {demoState === 'processing' && (
                           <motion.div 
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2"
                           >
                              <div className="relative">
                                 <div className="absolute inset-0 bg-blue-400 blur-lg opacity-40 animate-ping" />
                                 <Brain className="w-8 h-8 text-blue-600 relative z-10 animate-[spin_3s_linear_infinite]" />
                              </div>
                           </motion.div>
                        )}
                     </div>
                     
                     {demoState === 'processing' && (
                        <motion.p 
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           className="text-blue-500/80 text-sm font-medium animate-pulse text-center"
                        >
                           La IA está forjando tu conocimiento...
                        </motion.p>
                     )}
                  </motion.div>
                )}

                {/* PASO 4: Resultado Final (Flashcards) */}
                {(demoState === 'cards' || demoState === 'complete') && (
                  <motion.div 
                     key="completed"
                     initial={{ opacity: 0, y: 40 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                     className="w-full h-full flex flex-col items-center justify-center z-20"
                  >
                     <div className="text-center mb-6 md:mb-8">
                        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-1">Aquí tienes tu set</h2>
                        <p className="text-sm text-slate-500">Toca las tarjetas para ver el reverso</p>
                     </div>

                     {/* Carousel de Flashcards */}
                     <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px]">
                        {(() => {
                           const FlipCard = ({ data, index }) => {
                              const [isFlipped, setIsFlipped] = useState(false);
                              
                              return (
                                 <div 
                                    className="relative w-full h-full cursor-pointer group perspective-[1000px]"
                                    onClick={() => setIsFlipped(!isFlipped)}
                                 >
                                    <motion.div 
                                       initial={{ rotateY: 0 }}
                                       animate={{ rotateY: isFlipped ? 180 : 0 }}
                                       transition={{ duration: 0.6, ease: "easeInOut" }}
                                       className="w-full h-full relative [transform-style:preserve-3d] origin-center"
                                    >
                                       {/* FRENTE */}
                                       <div className="absolute top-0 left-0 w-full h-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl shadow-blue-900/5 flex flex-col items-center justify-center p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 ease-out group-hover:shadow-2xl group-hover:shadow-blue-200/40 overflow-hidden [backface-visibility:hidden]">
                                             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full -mr-12 -mt-12" />
                                             <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-500 shadow-inner">
                                                <span className="font-bold text-lg">{index + 1}</span>
                                             </div>
                                             <h3 className="text-xl md:text-2xl font-bold text-slate-800 text-center leading-tight">{data.front}</h3>
                                             <p className="absolute bottom-6 text-xs text-slate-400 font-medium uppercase tracking-wider">Toca para girar</p>
                                       </div>

                                       {/* REVERSO */}
                                       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl shadow-blue-900/20 flex flex-col items-center justify-center p-6 md:p-8 text-white overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent scale-150" />
                                             <p className="text-base md:text-lg font-medium text-center leading-relaxed relative z-10">{data.back}</p>
                                             <div className="absolute bottom-4 right-4 opacity-50">
                                                <Sparkles className="w-5 h-5 text-white" />
                                             </div>
                                       </div>
                                    </motion.div>
                                 </div>
                              );
                           };

                           const FlashcardCarousel = () => {
                              const [currentIndex, setCurrentIndex] = useState(0);
                              const [direction, setDirection] = useState(0);
                              const cards = [
                                 { id: 1, front: "Agujero Negro", back: "Región del espacio con gravedad tan fuerte que ni la luz puede escapar." },
                                 { id: 2, front: "Supernova", back: "Explosión estelar potente que ocurre al final de la vida de una estrella masiva." },
                                 { id: 3, front: "Materia Oscura", back: "Materia invisible que no interactúa con la luz pero ejerce gravedad." },
                                 { id: 4, front: "Quásar", back: "Núcleo galáctico activo y brillante alimentado por un agujero negro supermasivo." },
                                 { id: 5, front: "Nebulosa", back: "Nube gigante de polvo y gas en el espacio donde nacen nuevas estrellas." }
                              ];

                              const handleNext = () => {
                                 if (currentIndex < cards.length - 1) {
                                    setDirection(1);
                                    setCurrentIndex(prev => prev + 1);
                                 }
                              };

                              const handlePrev = () => {
                                 if (currentIndex > 0) {
                                    setDirection(-1);
                                    setCurrentIndex(prev => prev - 1);
                                 }
                              };

                              return (
                                 <div className="flex flex-col items-center gap-8 w-full">
                                    <div className="relative w-64 h-80 md:w-80 md:h-96 perspective-[1000px]">
                                       <AnimatePresence initial={false} custom={direction} mode="wait">
                                          <motion.div
                                             key={currentIndex}
                                             custom={direction}
                                             initial={{ opacity: 0, x: direction * 50, rotateY: direction * -5 }}
                                             animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                             exit={{ opacity: 0, x: direction * -50, rotateY: direction * 5 }}
                                             transition={{ duration: 0.3 }}
                                             className="absolute inset-0 w-full h-full"
                                          >
                                             <FlipCard data={cards[currentIndex]} index={currentIndex} />
                                          </motion.div>
                                       </AnimatePresence>
                                    </div>

                                    {/* Navigation Controls */}
                                    <div className="flex items-center gap-6">
                                       <button 
                                          onClick={handlePrev} 
                                          disabled={currentIndex === 0}
                                          className="p-3 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md active:scale-95"
                                       >
                                          <Play className="w-5 h-5 rotate-180 fill-current" />
                                       </button>
                                       
                                       <div className="flex gap-2">
                                          {cards.map((_, idx) => (
                                             <div 
                                                key={idx} 
                                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-blue-500 w-6' : 'bg-slate-300 w-1.5'}`} 
                                             />
                                          ))}
                                       </div>

                                       <button 
                                          onClick={handleNext} 
                                          disabled={currentIndex === cards.length - 1}
                                          className="p-3 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md active:scale-95"
                                       >
                                          <Play className="w-5 h-5 fill-current" />
                                       </button>
                                    </div>
                                 </div>
                              );
                           };

                           return <FlashcardCarousel />;
                        })()}
                     </div>

                     {demoState === 'complete' && (
                        <motion.div 
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 1 }}
                           className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4"
                        >
                           <button 
                              onClick={() => setDemoState('idle')} 
                              className="px-5 py-2 rounded-full text-slate-500 hover:bg-white/50 transition-colors text-sm"
                           >
                              Volver a empezar
                           </button>
                           <a href="https://dashboard.lexoraflashcards.com/register" className="px-6 py-2.5 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-blue-500/30 hover:bg-blue-700 transition-all font-medium flex items-center gap-2 text-sm">
                              Empezar a crear <CheckCircle2 className="w-4 h-4" />
                           </a>
                        </motion.div>
                     )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
         </div>
      </div>

      {/* 3. Content Container (Left Side) - UNCHANGED but re-included for context */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pointer-events-none order-1 lg:order-none mb-12 lg:mb-0">
         <div className="max-w-xl pointer-events-auto">
            <motion.div
               initial={{ opacity: 0, y: 24 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.25 }}
            >
               <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ duration: 0.25, delay: 0 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-[#2D6BFF] border border-blue-100 mb-8 shadow-sm"
               >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D6BFF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D6BFF]"></span>
                  </span>
                  {t('hero.new_ai')}
               </motion.div>

               <h1 className="text-balance text-5xl font-bold tracking-tight text-[#0F1A33] sm:text-6xl lg:text-7xl leading-[1.1]">
                  {t('hero.title_1')}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D6BFF] to-[#4EA3FF] drop-shadow-sm">
                     {t('hero.title_2')}
                  </span>
               </h1>

               <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
                  {t('hero.desc')}
               </p>

               <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="https://dashboard.lexoraflashcards.com/register" className="group relative overflow-hidden rounded-2xl bg-[#0F1A33] px-8 py-4 text-white shadow-xl shadow-blue-900/20 transition-transform hover:scale-[1.02] active:scale-[0.98] inline-block">
                     <div className="absolute inset-0 bg-[#2D6BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     <span className="relative flex items-center gap-2 font-bold">
                        {t('hero.start_free')} <Command className="w-4 h-4 opacity-70" />
                     </span>
                  </a>
                  
                  <button onClick={startDemo} className="group rounded-2xl bg-white px-8 py-4 text-[#0F1A33] shadow-lg shadow-slate-200/50 border border-slate-100 font-medium transition-transform hover:scale-[1.02] hover:border-blue-200 active:scale-[0.98]">
                     {t('hero.watch_demo')}
                  </button>
               </div>

               <div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-400">
                  <div className="flex items-center gap-2">
                     <Sparkles className="w-4 h-4 text-[#2D6BFF]" />
                     <span>{t('hero.gen_ai')}</span>
                  </div>
                  <div className="w-px h-4 bg-slate-200" />
                  <div className="flex items-center gap-2">
                     <Brain className="w-4 h-4 text-[#2D6BFF]" />
                     <span>{t('hero.neuro')}</span>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
    </section>
  );
}

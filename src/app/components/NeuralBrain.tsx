import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Check, Brain, User, Sparkles, ChevronRight } from "lucide-react";

// --- Configuration for Background Brain ---
const CARD_POSITIONS = [
  { id: 1, x: 35, y: -10, r: 5, type: 'text' },
  { id: 2, x: 45, y: 5, r: -3, type: 'lines' },
  { id: 3, x: 25, y: -25, r: 8, type: 'lines' },
  { id: 4, x: 30, y: 20, r: -5, type: 'text' },
  { id: 5, x: 5, y: -35, r: 2, type: 'lines' },
  { id: 6, x: -15, y: -40, r: -4, type: 'text' },
  { id: 7, x: 15, y: -20, r: 6, type: 'lines' },
  { id: 8, x: -5, y: -10, r: 0, type: 'glow' },
  { id: 9, x: -35, y: -25, r: -6, type: 'lines' },
  { id: 10, x: -45, y: -5, r: 4, type: 'text' },
  { id: 11, x: -30, y: 10, r: -2, type: 'lines' },
  { id: 12, x: -5, y: 20, r: 3, type: 'lines' },
  { id: 13, x: 10, y: 35, r: -5, type: 'text' },
  { id: 14, x: -20, y: 30, r: 4, type: 'lines' },
  { id: 15, x: -35, y: 40, r: -8, type: 'lines' },
  { id: 16, x: -45, y: 25, r: 2, type: 'lines' },
  { id: 17, x: 0, y: 0, r: 10, type: 'lines' },
  { id: 18, x: 20, y: 5, r: -7, type: 'glow' },
  { id: 19, x: -15, y: 5, r: 3, type: 'lines' },
  { id: 20, x: 5, y: -50, r: -2, type: 'lines' },
];

const CONNECTIONS = [
  [1, 2], [2, 4], [3, 1], [5, 6], [6, 9], [9, 10], [10, 15], 
  [15, 16], [12, 13], [13, 14], [8, 17], [17, 18], [18, 4], [7, 3]
];

// --- Interactive Terms Data ---
const INTERACTIVE_TERMS = [
  { id: 'concepts', label: 'Conceptos', x: -120, y: -60, mobileX: -80, mobileY: -90, color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { id: 'dates', label: 'Fechas', x: 120, y: -60, mobileX: 80, mobileY: -90, color: 'bg-purple-100 text-purple-700 border-purple-200' },
  { id: 'formulas', label: 'Fórmulas', x: -110, y: 90, mobileX: -60, mobileY: 100, color: 'bg-teal-100 text-teal-700 border-teal-200' },
  { id: 'examples', label: 'Ejemplos', x: 110, y: 90, mobileX: 60, mobileY: 100, color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  { id: 'relations', label: 'Relaciones', x: 0, y: -120, mobileX: 0, mobileY: -130, color: 'bg-rose-100 text-rose-700 border-rose-200' },
  { id: 'mistakes', label: 'Errores', x: -170, y: 20, mobileX: -100, mobileY: 0, color: 'bg-orange-100 text-orange-700 border-orange-200' },
  { id: 'ai-review', label: 'Repaso IA', x: 170, y: 20, mobileX: 100, mobileY: 0, color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
];

function BackgroundFlashcard({ data, index }: { data: any, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (index % 5 === 0) {
      const interval = setInterval(() => {
        setIsFlipped(prev => !prev);
      }, 4000 + (index * 500));
      return () => clearInterval(interval);
    }
  }, [index]);

  return (
    <motion.div
      className="absolute w-12 h-8 bg-white/40 backdrop-blur-sm rounded-sm shadow-sm border border-white/60 flex items-center justify-center overflow-hidden"
      style={{
        left: `calc(50% + ${data.x * 2.5}px)`,
        top: `calc(50% + ${data.y * 2.5}px)`,
        zIndex: 5,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 0.5, 
        scale: 1, 
        rotate: data.r,
        y: [0, -3, 0],
      }}
      transition={{ 
        opacity: { duration: 1 },
        scale: { duration: 0.8 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }
      }}
    >
      <div className="w-full px-1 flex flex-col gap-0.5 opacity-60">
        <div className="h-[2px] w-full bg-slate-300 rounded-full" />
        <div className="h-[2px] w-2/3 bg-slate-300 rounded-full" />
      </div>
    </motion.div>
  );
}

function ConnectionLine({ start, end }: { start: any, end: any }) {
  const x1 = `calc(50% + ${start.x * 2.5}px)`;
  const y1 = `calc(50% + ${start.y * 2.5}px)`;
  const x2 = `calc(50% + ${end.x * 2.5}px)`;
  const y2 = `calc(50% + ${end.y * 2.5}px)`;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <motion.line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#CBD5E1"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
      />
    </svg>
  );
}

export function NeuralBrain() {
  const [absorbedTerms, setAbsorbedTerms] = useState<string[]>([]);
  const isComplete = absorbedTerms.length === INTERACTIVE_TERMS.length;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDragEnd = (termId: string, info: any) => {
    // Simple distance check from center (approximately)
    // We check if the drag ended somewhat near the center (offset large enough in the correct direction)
    const term = INTERACTIVE_TERMS.find(t => t.id === termId);
    if (!term) return;

    // Calculate roughly if it moved towards center
    // Center is (0,0) relative to container center
    // Term starts at (term.x, term.y)
    // If term.x is negative, we need positive drag x.
    const deltaX = info.offset.x;
    const deltaY = info.offset.y;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Check if dragged towards center (simple heuristic: distance > 30px)
    // And also check direction? For simplicity, just check distance > 50px
    if (distance > 50) {
      setAbsorbedTerms(prev => [...prev, termId]);
    }
  };

  return (
    <div className="w-full h-[600px] relative rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl overflow-hidden flex items-center justify-center select-none">
      {/* --- Ambient Background Layer (The Brain Silhouette) --- */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none grayscale-[0.5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1),rgba(241,245,249,0.5))]" />
        
        {CONNECTIONS.map((pair, i) => {
            const start = CARD_POSITIONS.find(c => c.id === pair[0]);
            const end = CARD_POSITIONS.find(c => c.id === pair[1]);
            if (!start || !end) return null;
            return <ConnectionLine key={i} start={start} end={end} />;
        })}

        {CARD_POSITIONS.map((card, index) => (
          <BackgroundFlashcard key={card.id} data={card} index={index} />
        ))}
      </div>

      {/* --- Interactive Layer --- */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div 
              key="interactive"
              className="relative w-full h-full flex items-center justify-center"
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
            >
              {/* Silhouette / Brain Target */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                 <motion.div 
                   className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl"
                   animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                   transition={{ duration: 4, repeat: Infinity }}
                 />
                 {/* Silhouette Head */}
                 <svg viewBox="0 0 100 100" className="w-56 h-56 text-slate-200 fill-slate-100 drop-shadow-sm">
                    <path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0 Z M50 90 C28 90 10 72 10 50 C10 28 28 10 50 10 C72 10 90 28 90 50 C90 72 72 90 50 90 Z" fill="currentColor" />
                 </svg>
                 
                 {/* Abstract Brain inside */}
                 <div className="absolute inset-0 flex items-center justify-center pb-2">
                    <motion.div
                       animate={{ 
                         scale: [1, 1.05, 1],
                         filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
                       }}
                       transition={{ duration: 3, repeat: Infinity }}
                    >
                       <Brain className="w-32 h-32 text-slate-400" strokeWidth={1.5} />
                    </motion.div>
                 </div>

                 {/* Pulse effect when item absorbed */}
                 <AnimatePresence>
                   {absorbedTerms.length > 0 && (
                     <motion.div
                       key={absorbedTerms.length}
                       className="absolute inset-0 rounded-full border-2 border-blue-400"
                       initial={{ scale: 1, opacity: 1 }}
                       animate={{ scale: 1.5, opacity: 0 }}
                       transition={{ duration: 0.8 }}
                     />
                   )}
                 </AnimatePresence>
              </div>

              {/* Draggable Terms */}
              {INTERACTIVE_TERMS.map((term) => {
                 if (absorbedTerms.includes(term.id)) return null;
                 const x = isMobile ? term.mobileX : term.x;
                 const y = isMobile ? term.mobileY : term.y;
                 
                 return (
                   <motion.div
                     key={term.id}
                     drag
                     dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                     dragElastic={0.1}
                     onDragEnd={(e, info) => handleDragEnd(term.id, info)}
                     className={`absolute px-4 py-2 rounded-full shadow-md cursor-grab active:cursor-grabbing font-medium text-xs md:text-sm flex items-center gap-2 backdrop-blur-md whitespace-nowrap ${term.color}`}
                     style={{ x, y }}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     initial={{ scale: 0, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                   >
                     <Sparkles className="w-3 h-3 opacity-50" />
                     {term.label}
                   </motion.div>
                 );
              })}
              
              <div className="absolute bottom-12 text-slate-400 text-sm font-medium animate-pulse">
                Arrastra los conceptos al cerebro
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-6 bg-white/40 backdrop-blur-sm z-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Brain className="w-12 h-12" strokeWidth={2} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 tracking-tight">
                Lexora adapta <br/>el estudio a ti
              </h3>
              <p className="text-slate-600 text-lg mb-8 max-w-xs mx-auto">
                Tu conocimiento, organizado y potenciado por IA.
              </p>
              
              <motion.a
                 href="https://dashboard.lexoraflashcards.com/register"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="flex items-center gap-2 bg-[#0F1A33] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-slate-800 transition-colors"
              >
                 Comenzar Ya <ChevronRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

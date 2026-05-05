import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';

export function InteractiveDemo() {
  const [step, setStep] = useState(0);
  const [text, setText] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  
  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    let typeInterval: NodeJS.Timeout;

    const runSequence = () => {
      // Reset state
      setStep(0);
      setText("");
      setIsFlipped(false);
      
      // Step 1: Wait 1s then start typing
      timeouts.push(setTimeout(() => {
        setStep(1);
        const targetText = "Biología celular avanzada...";
        let i = 0;
        
        // Slower typing speed
        typeInterval = setInterval(() => {
          if (i < targetText.length) {
            setText(targetText.slice(0, i + 1));
            i++;
          } else {
            clearInterval(typeInterval);
            // Step 2: Generating appears after a brief pause
            timeouts.push(setTimeout(() => setStep(2), 500));
          }
        }, 80); // Increased from 50ms to 80ms
      }, 1000));

      // Step 3: Show Result Text (Replacing Loading) after 2.5s of loading
      timeouts.push(setTimeout(() => setStep(3), 5000));

      // Step 4: Spawn card BELOW the text after a delay (1.5s reading time)
      timeouts.push(setTimeout(() => setStep(4), 6500));

      // Step 5: Flip card after user has seen it for a bit (1.5s)
      timeouts.push(setTimeout(() => setIsFlipped(true), 8000));

      // Loop sequence (longer overall duration)
      timeouts.push(setTimeout(runSequence, 14000));
    };

    runSequence();

    return () => {
      timeouts.forEach(clearTimeout);
      if (typeInterval) clearInterval(typeInterval);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-[#0F1A33] rounded-3xl p-8 shadow-2xl overflow-hidden h-[480px] flex flex-col items-center justify-center border border-slate-800/50">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D6BFF] opacity-20 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4EA3FF] opacity-10 blur-[60px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm flex flex-col gap-8">
        {/* Input Bar */}
        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 flex items-center gap-3 shadow-lg transition-all duration-700 shrink-0">
          <Search className="w-4 h-4 text-slate-500" />
          <div className="h-5 w-px bg-slate-700 mx-1" />
          <span className={`text-sm font-medium ${text ? 'text-slate-200' : 'text-slate-500'} font-mono`}>
            {text || "Escribe el tema que desees"}
            {step === 1 && <span className="animate-pulse text-[#2D6BFF] ml-0.5">|</span>}
          </span>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 relative flex flex-col items-center">
          <AnimatePresence mode="popLayout">
            
            {/* State: Generating */}
            {step === 2 && (
              <motion.div 
                key="generating"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-3 absolute top-0 w-full"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-slate-700 border-t-[#2D6BFF] animate-spin" style={{ animationDuration: '1.5s' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#2D6BFF] rounded-full" />
                  </div>
                </div>
                <span className="text-[#4EA3FF] font-medium text-sm animate-pulse">Generando flashcards...</span>
              </motion.div>
            )}

            {/* State: Result Text + Card */}
            {step >= 3 && (
              <div className="w-full flex flex-col gap-8 items-center">
                {/* Result Text */}
                <motion.div 
                  key="result-text"
                  layout
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-center space-y-2 w-full"
                >
                  <div className="text-xl font-semibold text-white">¿Qué hace la mitocondria?</div>
                  <div className="text-[#4EA3FF] font-medium">Produce energía para la célula.</div>
                </motion.div>

                {/* Card Spawn */}
                {step >= 4 && (
                  <motion.div
                    key="card-component"
                    layout
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 1.2 }}
                    className="w-full perspective-[1000px]"
                  >
                    <motion.div 
                      className="relative w-full h-44 bg-white rounded-2xl shadow-2xl cursor-pointer group"
                      animate={{ rotateX: isFlipped ? 180 : 0 }}
                      transition={{ duration: 1.2, type: "spring", stiffness: 100, damping: 20 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front */}
                      <div 
                        className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center p-6 text-center bg-white rounded-2xl border border-slate-200"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2D6BFF] flex items-center justify-center mb-2">
                            <span className="font-bold text-xs">?</span>
                        </div>
                        <p className="text-[#0F1A33] font-bold text-lg leading-tight">¿Qué hace la mitocondria?</p>
                        <div className="absolute bottom-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">Frente</div>
                      </div>

                      {/* Back */}
                      <div 
                        className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#2D6BFF] to-[#2558D9] rounded-2xl border border-[#2D6BFF]"
                        style={{ 
                          transform: "rotateX(180deg)",
                          backfaceVisibility: 'hidden' 
                        }}
                      >
                         <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center mb-2">
                            <span className="font-bold text-xs">!</span>
                        </div>
                        <p className="text-white font-bold text-lg leading-tight">Produce energía para la célula.</p>
                        <div className="absolute bottom-3 text-[10px] text-blue-200 font-bold uppercase tracking-wider">Reverso</div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

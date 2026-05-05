import { useEffect, useState } from 'react';
import { FileText, Upload, CheckCircle2, FileUp } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function DocumentsImportSection() {
  const [step, setStep] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    // 0: Idle, 1: Drop, 2: Analyze, 3: Success, 4: Card 1 Front, 5: Card 1 Back, 6: Card 2 Front, 7: Card 2 Back
    const stepDurations = [1500, 1000, 1500, 2000, 2500, 2500, 2500, 2500];
    
    const timeout = setTimeout(() => {
      setStep((prev) => (prev + 1) % 8);
    }, stepDurations[step]);

    return () => clearTimeout(timeout);
  }, [step]);

  const showCards = step >= 4;
  const currentCard = step >= 6 ? 2 : 1;
  const isBack = step === 5 || step === 7;

  return (
    <section id="documents-import" className="py-24 px-6 bg-teal-50 overflow-hidden font-sans border-t border-teal-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Right Animation */}
        <div className="relative flex justify-center order-1">
          <div className="relative w-full max-w-[480px] aspect-[4/5] md:aspect-square bg-slate-50 rounded-3xl border border-slate-100 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8">
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            
            {/* Drop Zone */}
            <div className={`relative w-64 h-80 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-all duration-500 ${step >= 3 ? 'border-teal-200 bg-teal-50/50' : 'border-slate-300 bg-white'}`}>
               
               {/* Floating File */}
               <div className={`absolute transition-all duration-700 ease-in-out z-20 
                  ${step === 0 ? '-top-20 opacity-0' : 
                    step === 1 ? 'top-1/2 -translate-y-1/2 opacity-100 scale-110' : 
                    'top-1/2 -translate-y-1/2 opacity-0 scale-50'
                  }`}>
                  <div className="w-20 h-24 bg-white rounded-xl shadow-xl border border-slate-200 flex items-center justify-center text-teal-600">
                     <FileText className="w-10 h-10" />
                     <div className="absolute -right-2 -top-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">PDF</div>
                  </div>
               </div>

               {/* Processing State */}
               <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${step === 2 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-teal-500 animate-spin mb-4"></div>
                  <span className="text-teal-600 font-medium">{t('features.doc.demo.analyzing')}</span>
               </div>

               {/* Success State (Cards) */}
               <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${step === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="relative w-48 h-64">
                     <div className="absolute inset-0 bg-white rounded-xl shadow-lg border border-teal-100 transform rotate-[-6deg] z-10"></div>
                     <div className="absolute inset-0 bg-white rounded-xl shadow-lg border border-teal-100 transform rotate-[3deg] z-20"></div>
                     <div className="absolute inset-0 bg-white rounded-xl shadow-xl border border-teal-100 z-30 flex flex-col items-center justify-center p-4 text-center">
                        <CheckCircle2 className="w-12 h-12 text-teal-500 mb-2" />
                        <span className="text-slate-800 font-bold">{t('features.doc.demo.imported')}</span>
                        <span className="text-xs text-slate-500 mt-1">{t('features.doc.demo.created')}</span>
                     </div>
                  </div>
               </div>

               {/* Example Flashcards (Steps 4-7) */}
               <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 ${showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                  <div 
                    className="w-56 h-72 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col relative transition-transform duration-700 [transform-style:preserve-3d]"
                    style={{ transform: isBack ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                  >
                      {/* Front Face */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 [backface-visibility:hidden] bg-white rounded-2xl" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                         <div className="text-[10px] font-bold text-teal-600 uppercase tracking-wider mb-4 px-2 py-1 bg-teal-50 rounded-full">
                            Flashcard {currentCard} de 24
                         </div>
                         <div className="text-lg font-bold text-slate-800 text-center leading-snug">
                            {currentCard === 1 ? t('features.gen_ai.demo.card1.term') : t('features.gen_ai.demo.card2.term')}
                         </div>
                         <div className="mt-8 text-xs font-medium text-slate-400 uppercase tracking-widest text-[10px]">Anverso</div>
                      </div>

                      {/* Back Face */}
                      <div 
                        className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl [backface-visibility:hidden] border border-teal-100" 
                        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                      >
                         <div className="text-[10px] font-bold text-teal-600 uppercase tracking-wider mb-4 px-2 py-1 bg-white rounded-full shadow-sm">
                            Flashcard {currentCard} de 24
                         </div>
                         <div className="text-sm font-medium text-slate-700 text-center leading-relaxed">
                            {currentCard === 1 ? t('features.gen_ai.demo.card1.def') : t('features.gen_ai.demo.card2.def')}
                         </div>
                         <div className="mt-8 text-xs font-medium text-teal-500 uppercase tracking-widest text-[10px]">Reverso</div>
                      </div>
                  </div>
               </div>

               {/* Initial Placeholder Text */}
               <div className={`text-center transition-opacity duration-300 ${step === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
                     <Upload className="w-6 h-6" />
                  </div>
                  <p className="text-slate-400 font-medium">{t('features.doc.demo.drop')}</p>
               </div>

            </div>
          </div>

        </div>

        {/* Left Content (Actually Right in layout now due to order-2) */}
        <div className="text-center lg:text-left order-2">
          <div className="inline-flex items-center gap-2 py-1.5 px-3.5 bg-teal-50 text-teal-600 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
            <FileUp className="w-3 h-3" />
            <span>{t('features.doc.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            {t('features.doc.title')}<br />
            <span className="text-[#2D6BFF]">{t('features.doc.subtitle')}</span>
          </h2>
          <p className="text-xl text-slate-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {t('features.doc.desc')}
          </p>
           <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
            <li className="flex items-start gap-3 text-slate-600">
              <div className="mt-1 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-3 h-3 text-teal-600" />
              </div>
              <span>{t('features.doc.list1')}</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600">
              <div className="mt-1 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-3 h-3 text-teal-600" />
              </div>
              <span>{t('features.doc.list2')}</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
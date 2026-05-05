import { useEffect, useState } from 'react';
import { Repeat, GraduationCap, BarChart3, ThumbsUp, Lightbulb } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function TutorAISection() {
  const [step, setStep] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    // 0: Question visible
    // 1: Flip to Answer
    // 2: Feedback Click (Orange/Hard highlight)
    // 3: AI Help Tip (Extended duration)
    // 4: Next Card Transition
    const stepDurations = [3000, 1500, 1500, 6000, 1000]; 
    
    const timeout = setTimeout(() => {
      setStep((prev) => (prev + 1) % 5);
    }, stepDurations[step]);

    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <section id="tutor-ai" className="py-24 px-6 bg-indigo-50 overflow-hidden font-sans border-t border-indigo-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 py-1.5 px-3.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
            <GraduationCap className="w-3 h-3" />
            <span>{t('features.tutor.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            {t('features.tutor.title')}<br />
            <span className="text-[#2D6BFF]">{t('features.tutor.subtitle')}</span>
          </h2>
          <p className="text-xl text-slate-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {t('features.tutor.desc')}
          </p>
          <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
             <li className="flex items-start gap-3 text-slate-600">
              <div className="mt-1 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-3 h-3 text-indigo-600" />
              </div>
              <span>{t('features.tutor.list1')}</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600">
              <div className="mt-1 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <Repeat className="w-3 h-3 text-indigo-600" />
              </div>
              <span>{t('features.tutor.list2')}</span>
            </li>
          </ul>
        </div>

        {/* Right Animation */}
        <div className="relative flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[480px] aspect-[4/5] md:aspect-square bg-slate-50 rounded-3xl border border-slate-100 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-6 sm:p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

            {/* Progress Header */}
            <div className="absolute top-6 left-6 right-6 sm:top-8 sm:left-8 sm:right-8 flex justify-between items-center z-10">
               <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-400 uppercase">{t('features.tutor.demo.progress')}</span>
                  <span className="text-lg font-bold text-slate-800">85%</span>
               </div>
               <div className="w-20 sm:w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-indigo-500 transition-all duration-1000 ${step >= 2 ? 'w-[85%]' : 'w-[70%]'}`}></div>
               </div>
            </div>

            {/* Card Container */}
            <div className="relative w-64 h-80 perspective-1000 z-10 scale-[0.85] sm:scale-100">
               
               {/* Card */}
               <div className={`w-full h-full relative transition-all duration-700 preserve-3d 
                  ${step === 4 ? 'translate-x-[120%] rotate-12 opacity-0' : 'translate-x-0 opacity-100'} 
                  ${step >= 1 && step < 4 ? 'rotate-y-180' : 'rotate-y-0'}
               `} style={{ transformStyle: 'preserve-3d', transform: step >= 1 && step < 4 ? 'rotateY(180deg)' : step === 4 ? 'translateX(120%) rotate(12deg)' : 'rotateY(0deg)' }}>
                  
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-xl border border-indigo-50 flex flex-col items-center justify-center p-6 text-center">
                     <span className="text-xs text-indigo-500 font-bold tracking-wider mb-4">{t('features.tutor.demo.q')}</span>
                     <p className="text-slate-800 font-medium text-lg">{t('features.tutor.demo.q_text')}</p>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden bg-indigo-600 rounded-2xl shadow-xl border border-indigo-500 flex flex-col items-center justify-center p-6 text-center text-white rotate-y-180" style={{ transform: 'rotateY(180deg)' }}>
                     <span className="text-xs text-indigo-200 font-bold tracking-wider mb-4">{t('features.tutor.demo.a')}</span>
                     <p className="font-medium text-lg">{t('features.tutor.demo.a_text')}</p>
                  </div>

               </div>

               {/* New Card (Behind) */}
               <div className={`absolute inset-0 bg-white rounded-2xl shadow-lg border border-slate-100 -z-10 transition-transform duration-500 ${step === 4 ? 'scale-100' : 'scale-95 translate-y-2'}`}></div>

            </div>

            {/* AI Help Tip - Appears in Step 3 */}
            <div className={`absolute left-4 right-4 sm:left-6 sm:right-6 bottom-24 bg-purple-50 border border-purple-100 p-4 rounded-xl shadow-lg transform transition-all duration-500 z-20 ${step === 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
               <div className="flex gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg h-fit flex-shrink-0">
                     <Lightbulb className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-left">
                     <h4 className="text-purple-700 font-bold text-sm mb-1">{t('features.tutor.demo.help')}</h4>
                     <p className="text-purple-900/80 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: t('features.tutor.demo.help_text') }}>
                     </p>
                  </div>
               </div>
            </div>

            {/* Buttons UI */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex justify-center gap-2 sm:gap-4 z-10">
               {[t('features.tutor.demo.hard'), t('features.tutor.demo.normal'), t('features.tutor.demo.easy')].map((label, i) => (
                  <div key={i} className={`px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 whitespace-nowrap
                     ${step === 2 && i === 0 ? 'bg-orange-500 text-white scale-110 shadow-lg' : 'bg-white text-slate-400 border border-slate-200 shadow-sm'}
                  `}>
                     {label}
                  </div>
               ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
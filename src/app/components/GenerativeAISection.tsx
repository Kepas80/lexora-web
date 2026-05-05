import { useEffect, useRef, useState } from 'react';
import { Brain, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function GenerativeAISection() {
  const [step, setStep] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4); // 0: Idle, 1: Typing, 2: Generating, 3: Done
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="generative-ai" className="py-24 px-6 bg-purple-50 overflow-hidden font-sans border-t border-purple-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 py-1.5 px-3.5 bg-purple-50 text-purple-600 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
            <Sparkles className="w-3 h-3" />
            <span>{t('features.gen_ai.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            {t('features.gen_ai.title')}<br />
            <span className="text-[#2D6BFF]">{t('features.gen_ai.subtitle')}</span>
          </h2>
          <p className="text-xl text-slate-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {t('features.gen_ai.desc')}
          </p>
          <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
            <li className="flex items-start gap-3 text-slate-600">
              <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Zap className="w-3 h-3 text-purple-600" />
              </div>
              <span>{t('features.gen_ai.list1')}</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600">
              <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Brain className="w-3 h-3 text-purple-600" />
              </div>
              <span>{t('features.gen_ai.list2')}</span>
            </li>
          </ul>
        </div>

        {/* Right Animation */}
        <div className="relative flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[480px] aspect-[4/5] md:aspect-square bg-slate-50 rounded-3xl border border-slate-100 shadow-2xl overflow-hidden flex flex-col p-6 md:p-10">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            {/* Input Area */}
            <div className="relative z-10 bg-white rounded-2xl shadow-lg p-4 mb-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-3 border-b border-slate-50 pb-3">
                 <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <Sparkles className="w-4 h-4" />
                 </div>
                 <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t('features.gen_ai.demo.new_set')}</div>
              </div>
              <div className="h-10 bg-slate-50 rounded-lg flex items-center px-4 text-slate-600 text-sm overflow-hidden relative">
                 <span className={`whitespace-nowrap overflow-hidden ${step === 1 ? 'animate-[typing_2s_steps(30,end)_forwards]' : step > 1 ? 'w-full' : 'w-0'}`}>
                    {step >= 1 && t('features.gen_ai.demo.sample')}
                 </span>
                 {step === 1 && <span className="w-0.5 h-4 bg-purple-500 ml-1 animate-pulse"></span>}
              </div>
            </div>

            {/* Generated Cards Container */}
            <div className="flex-1 relative">
               {/* Loading State */}
               <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${step === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
                  <div className="text-purple-600 font-medium text-sm">{t('features.gen_ai.demo.generating')}</div>
               </div>

               {/* Cards */}
               <div className={`absolute inset-0 transition-all duration-700 ${step === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="space-y-3">
                     {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-start gap-3 animate-[slideUp_0.5s_ease-out_forwards]" style={{ animationDelay: `${i * 0.1}s` }}>
                           <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                              {i}
                           </div>
                           <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-slate-800 mb-0.5">{t(`features.gen_ai.demo.card${i}.term`)}</div>
                              <div className="text-[10px] leading-relaxed text-slate-500">{t(`features.gen_ai.demo.card${i}.def`)}</div>
                           </div>
                        </div>
                     ))}
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                     <div className="px-5 py-2 bg-purple-600 text-white rounded-full text-xs font-medium shadow-lg shadow-purple-200">
                        {t('features.gen_ai.demo.done')}
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes slideUp {
           from { opacity: 0; transform: translateY(20px); }
           to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
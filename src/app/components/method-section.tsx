import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

function FlipCard({ 
  title, 
  description, 
  gradientFrom, 
  gradientTo, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  gradientFrom: string; 
  gradientTo: string;
  icon: any;
}) {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-80 w-full [perspective:1000px]" 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative h-full w-full rounded-[32px] shadow-sm transition-all duration-500 [transform-style:preserve-3d] hover:scale-[1.02] hover:shadow-xl cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* FRONT FACE */}
        <div 
          className={`absolute inset-0 h-full w-full rounded-[32px] bg-gradient-to-br ${gradientFrom} ${gradientTo} p-8 [backface-visibility:hidden] flex flex-col justify-between overflow-hidden`}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
           
           {/* Decor */}
           <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
           <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-32 w-32 rounded-full bg-black/5 blur-xl" />

           <div className="relative z-10">
             <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-md mb-6 border border-white/10 shadow-inner">
                <Icon className="w-6 h-6 text-white" />
             </div>
             <h3 className="text-3xl font-bold text-white leading-tight">
               {title}
             </h3>
           </div>

           <div className="relative z-10 flex items-center gap-2 text-white/80 text-sm font-medium">
              <RotateCcw className="w-4 h-4" />
              <span>{t('method.tap')}</span>
           </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 h-full w-full rounded-[32px] bg-white p-8 text-slate-800 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center border border-slate-100 shadow-sm"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="absolute top-6 right-6 text-slate-300">
            <Icon className="w-6 h-6 opacity-20" />
          </div>
          
          <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
            {t('method.answer')}
          </h4>
          
          <p className="text-lg leading-relaxed font-medium text-slate-600">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function MethodSection() {
  const { t } = useLanguage();
  return (
    <section id="metodo" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#2D6BFF]">
          {t('method.eyebrow')}
        </h2>
        <p className="mt-4 text-3xl font-bold tracking-tight text-[#0F1A33] sm:text-4xl">
          {t('method.title')}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          {t('method.desc')}
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FlipCard 
            title={t('method.1.title')}
            description={t('method.1.desc')}
            gradientFrom="from-[#2D6BFF]"
            gradientTo="to-[#60A5FA]"
            icon={Sparkles}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FlipCard 
            title={t('method.2.title')}
            description={t('method.2.desc')}
            gradientFrom="from-[#7C3AED]"
            gradientTo="to-[#C026D3]"
            icon={Zap}
          />
        </motion.div>
      </div>
    </section>
  );
}

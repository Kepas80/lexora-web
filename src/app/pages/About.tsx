import { motion } from 'motion/react';
import { Sparkles, Zap, Brain, Trophy, Star, Clock, Calendar, Repeat, Layers, Palette, X } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogClose, 
  DialogTitle, 
  DialogDescription 
} from '../components/ui/dialog';
import { InteractiveDemo } from '../components/interactive-demo';
import { ExamModesDemo } from '../components/ExamModesDemo';
import { useLanguage } from '../lib/LanguageContext';
import appPreview from 'figma:asset/7bc40b0bbd7a0dbcac8d445ee903b5749ce398f9.png';
import gamificationImage from 'figma:asset/cbb89dc63a9ed2caf4eaf1ca97590e99d9886fec.png';
import learningPlayingImage from 'figma:asset/ddc8f78a440f43ebf5bba523d21f3918fbd8727f.png';
import statsImage from 'figma:asset/ed961f4358ff72f705cfff3e7753d7873c17a0fd.png';

export function About() {
  const { t } = useLanguage();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
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
    <div className="bg-white pt-24 sm:pt-32 pb-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 text-center mb-24 md:mb-32">
        <motion.div {...fadeIn}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0F1A33] mb-8">
            {t('hero.title').replace(/\.$/, '').split(/(Lexora|inteligente|smart)/gi).map((part, i) => 
              ['lexora', 'inteligente', 'smart'].includes(part.toLowerCase()) ? (
                <span key={i} className="text-[#2D6BFF] animate-pulse inline-block mx-1">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Section 3 Moved Here: La forma más inteligente (Adapted Beneficios IA) */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-50/80 p-8 md:p-12 border border-slate-100 shadow-sm">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, 50, 0],
                  y: [0, 30, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px]"
             />
             <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, -30, 0],
                  y: [0, -20, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-[80px]"
             />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F1A33] mb-6">
                {t('about.section3.title')} <br/>
                <span className="text-[#2D6BFF]">{t('about.section3.subtitle')}</span>
              </h2>
              <div className="space-y-6 mt-8">
                {[
                  t('about.section3.list.1'),
                  t('about.section3.list.2'),
                  t('about.section3.list.3'),
                  t('about.section3.list.4')
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#2D6BFF] mt-1">
                      <Zap className="w-3 h-3" />
                    </div>
                    <p className="text-lg text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
               <InteractiveDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Crea o elige tu set */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        <motion.div 
          {...fadeIn}
          className="bg-slate-50 rounded-3xl p-10 md:p-16 text-center border border-slate-100"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm text-[#2D6BFF] mb-8">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F1A33] mb-6">
            {t('about.section1.title')}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('about.section1.desc')}
          </p>
        </motion.div>
      </section>

      {/* Section 2: What is Lexora (Moved from Features) */}
      <section className="mx-auto max-w-7xl px-6 mb-24" id="what-is-lexora">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="mb-10"
          >
             <h2 className="text-xs font-bold uppercase tracking-widest text-[#2D6BFF] mb-3">{t('about.whatis.intro')}</h2>
             <h3 className="text-3xl font-bold text-[#0F1A33]">{t('about.whatis.title')}</h3>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
             {studyFeatures.map((feature) => (
              <Dialog key={feature.id}>
                <DialogTrigger asChild>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className={`relative h-[420px] w-full cursor-pointer overflow-hidden rounded-[2rem] bg-gradient-to-br ${feature.gradient} p-8 text-white shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col justify-between`}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                         <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/10">
                            <feature.icon className="h-6 w-6 text-white" />
                         </div>
                         <h3 className="text-2xl font-bold leading-tight">
                            {feature.title}
                         </h3>
                         <p className="mt-2 text-white/80 font-medium text-sm">
                            {feature.short}
                         </p>
                    </div>
                    
                    <div className="relative z-10 self-end mt-auto">
                         <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition-colors border border-white/10">
                            <span className="text-xl font-medium leading-none mb-0.5">+</span>
                         </div>
                    </div>
                    
                    {/* Background Noise/Texture */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                  </motion.div>
                </DialogTrigger>

                <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-[#FBFBFD] sm:rounded-[2rem] gap-0 shadow-2xl outline-none">
                     <div className="relative flex flex-col md:flex-row h-full md:h-[500px]">
                        {/* Content Side */}
                        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center z-10">
                           <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2D6BFF]">
                              <feature.icon className="h-7 w-7" strokeWidth={2} />
                           </div>
                           <DialogTitle className="text-3xl md:text-4xl font-bold text-[#0F1A33] mb-4 leading-tight">
                              {feature.title}
                           </DialogTitle>
                           <div className="w-12 h-1 bg-[#2D6BFF] rounded-full mb-6" />
                           <h3 className="text-lg font-bold text-slate-800 mb-3">
                              {feature.short}
                           </h3>
                           <DialogDescription className="text-base text-slate-600 leading-relaxed">
                              {feature.long}
                           </DialogDescription>
                        </div>

                        {/* Visual Side */}
                        <div className="flex-1 bg-slate-100 relative overflow-hidden min-h-[250px] md:min-h-auto">
                           <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                              {feature.id === 'modes' && (
                                <motion.div
                                  animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
                                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                  <feature.icon className="w-40 h-40 text-[#2D6BFF] drop-shadow-2xl" strokeWidth={1} />
                                </motion.div>
                              )}
                              {feature.id === 'calendar' && (
                                <motion.div
                                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                  <feature.icon className="w-40 h-40 text-orange-500 drop-shadow-2xl" strokeWidth={1} />
                                </motion.div>
                              )}
                              {feature.id === 'spaced' && (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                  <feature.icon className="w-40 h-40 text-emerald-500 drop-shadow-2xl" strokeWidth={1} />
                                </motion.div>
                              )}
                              {feature.id === 'custom' && (
                                <motion.div
                                  animate={{ rotate: [0, 10, 0, -10, 0], scale: [1, 1.1, 1] }}
                                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                  <feature.icon className="w-40 h-40 text-violet-600 drop-shadow-2xl" strokeWidth={1} />
                                </motion.div>
                              )}
                           </div>
                           <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 mix-blend-overlay pointer-events-none`} />
                        </div>

                        {/* Close Button */}
                        <DialogClose className="absolute top-6 right-6 h-9 w-9 rounded-full bg-white/80 hover:bg-white text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all focus:outline-none shadow-sm backdrop-blur-sm z-50">
                           <X className="h-4 w-4" />
                        </DialogClose>
                     </div>
                </DialogContent>
              </Dialog>
             ))}
          </div>
      </section>

      {/* Section Exam Modes (Moved from Features) */}
      <section className="mx-auto max-w-6xl px-6 mb-24">
        {null}
      </section>

      {/* Section 4: Repite menos (Adapted Comparativa) */}
      <section className="bg-[#F8FAFC] py-24 px-6 border-y border-slate-200">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F1A33] mb-6">
              {t('about.section4.title')}
            </h2>
            <p className="text-xl text-slate-600">
              {t('about.section4.desc')}
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm"
          >
            <h3 className="text-lg font-bold text-slate-400 mb-6 flex items-center gap-3">
              <Clock className="w-5 h-5" /> {t('about.method.trad.title')}
            </h3>
            <ul className="space-y-4 text-slate-500">
              <li className="flex gap-3">✕ {t('about.method.trad.1')}</li>
              <li className="flex gap-3">✕ {t('about.method.trad.2')}</li>
              <li className="flex gap-3">✕ {t('about.method.trad.3')}</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl border-2 border-[#2D6BFF] shadow-xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10" />
            <h3 className="text-lg font-bold text-[#2D6BFF] mb-6 flex items-center gap-3">
              <Brain className="w-5 h-5" /> {t('about.method.lexora.title')}
            </h3>
            <ul className="space-y-4 text-[#0F1A33] font-medium">
              <li className="flex gap-3">✓ {t('about.method.lexora.1')}</li>
              <li className="flex gap-3">✓ {t('about.method.lexora.2')}</li>
              <li className="flex gap-3">✓ {t('about.method.lexora.3')}</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Tu memoria merece algo mejor */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F1A33] mb-8">
            {t('about.section5.title')}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {t('about.section5.desc')}
          </p>
        </motion.div>
      </section>

      {/* Section 6: Gamificación */}
      <section className="mx-auto max-w-6xl px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0F1A33] to-[#1a2c55] rounded-3xl p-10 md:p-20 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2D6BFF] rounded-full blur-[150px] opacity-20" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm text-[#4EA3FF] mb-8">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('about.section6.title')}</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              {t('about.section6.desc')}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 7: Testimonios */}
      <section className="mx-auto max-w-6xl px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A33]">{t('about.testimonials.title')}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: t('about.testimonials.1.text'),
              author: "Sofía R.",
              role: t('about.testimonials.1.role')
            },
            {
              text: t('about.testimonials.2.text'),
              author: "Miguel A.",
              role: t('about.testimonials.2.role')
            },
            {
              text: t('about.testimonials.3.text'),
              author: "Elena M.",
              role: t('about.testimonials.3.role')
            }
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-bold text-[#0F1A33]">{t.author}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F1A33] mb-8">
            {t('about.cta.title')}
          </h2>
          <a
            href="https://dashboard.lexoraflashcards.com/register"
            className="inline-flex items-center justify-center rounded-full bg-[#2D6BFF] px-10 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/30 hover:bg-[#2558D9] hover:scale-105 transition-all duration-300"
          >
            {t('about.cta.button')}
          </a>
        </motion.div>
      </section>
    </div>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import featureCreateImage from 'figma:asset/adaef7af3b77aa7214b3ee27c172dd2d9978e594.png';
import featureModesImage from 'figma:asset/68343d533968de36085e612db0befe96f9f256fa.png';
import featureGameImage from 'figma:asset/2615d9c1444af11b61f5db3abff69901e9d0a0dd.png';
import featureFreeImage from 'figma:asset/8f240cc7824e4daa47efea9b73ba6ebf5b170c6e.png';
import { useLanguage } from '../lib/LanguageContext';

export function FeaturesGridSection() {
  const { t } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState<null | number>(null);

  const features = [
    {
      id: 1,
      title: t('features.1.title'),
      subtitle: t('features.1.subtitle'),
      desc: t('features.1.desc'),
      image: featureCreateImage
    },
    {
      id: 2,
      title: t('features.2.title'),
      subtitle: t('features.2.subtitle'),
      desc: t('features.2.desc'),
      image: featureModesImage
    },
    {
      id: 3,
      title: t('features.3.title'),
      subtitle: t('features.3.subtitle'),
      desc: t('features.3.desc'),
      image: featureGameImage
    },
    {
      id: 4,
      title: t('features.4.title'),
      subtitle: t('features.4.subtitle'),
      desc: t('features.4.desc'),
      image: featureFreeImage
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        <>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[32px] overflow-hidden min-h-[500px] md:min-h-[600px] relative flex flex-col group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8 md:p-12 text-center relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-lg text-slate-500 mb-6 font-medium max-w-md mx-auto">{feature.subtitle}</p>
              </div>
              <div className="mt-auto w-full h-[300px] md:h-[400px] relative overflow-hidden">
                 <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>


        </>
      </div>

      {/* Feature Details Modal */}
      <AnimatePresence>
        {selectedFeature !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            />
            <motion.div 
              layoutId={`feature-card-${selectedFeature}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[24px] p-8 md:p-12 max-w-xl w-full shadow-2xl z-10 overflow-hidden"
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 rounded-2xl overflow-hidden w-full h-48 shadow-sm">
                   <img 
                     src={features.find(f => f.id === selectedFeature)?.image} 
                     alt="Feature Detail" 
                     className="w-full h-full object-cover"
                   />
                </div>
                <h3 className="text-3xl font-bold text-[#1d1d1f] mb-4">
                  {features.find(f => f.id === selectedFeature)?.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {features.find(f => f.id === selectedFeature)?.desc}
                </p>
                <div className="mt-8">
                  <a 
                    href="https://dashboard.lexoraflashcards.com/register" 
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0071e3] text-white font-medium hover:bg-[#0077ED] transition-colors"
                  >
                    {t('features.start_now')}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

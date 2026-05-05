import { Hero } from '../components/hero';
import { WhatIsSection } from '../components/what-is-section';
import { PillarsSection } from '../components/pillars-section';
import { MethodSection } from '../components/method-section';
import { FeaturesGridSection } from '../components/FeaturesGridSection';
import { FaqSection } from '../components/faq-section';
import { useLanguage } from '../lib/LanguageContext';

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <Hero />
      <FeaturesGridSection />
      <WhatIsSection />
      <PillarsSection />
      <MethodSection />
      <FaqSection />
      
      {/* Final CTA */}
      <section className="relative overflow-hidden py-32 bg-[#F8FAFC]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2D6BFF]/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-[#0F1A33] sm:text-5xl mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slate-600 mb-10">
            {t('home.cta.desc')}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://dashboard.lexoraflashcards.com/register"
              className="rounded-lg bg-[#2D6BFF] px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-[#2558D9] hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {t('home.cta.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

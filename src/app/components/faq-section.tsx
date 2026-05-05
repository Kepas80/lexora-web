import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

interface FaqItem {
  question: string;
  answer: string;
}

function FaqItemComponent({ item, index }: { item: FaqItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className="w-full text-left bg-white rounded-xl border border-slate-200 px-6 py-5 hover:border-[#2D6BFF]/30 transition-colors shadow-sm"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-base font-bold text-[#0F1A33]">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`inline-flex h-6 w-6 items-center justify-center rounded-full border flex-shrink-0 ${isExpanded ? 'border-[#2D6BFF] text-[#2D6BFF]' : 'border-slate-300 text-slate-400'}`}
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export function FaqSection() {
  const { t } = useLanguage();

  const faqItems: FaqItem[] = [
    {
      question: t('faq.1.q'),
      answer: t('faq.1.a'),
    },
    {
      question: t('faq.2.q'),
      answer: t('faq.2.a'),
    },
    {
      question: t('faq.3.q'),
      answer: t('faq.3.a'),
    },
    {
      question: t('faq.4.q'),
      answer: t('faq.4.a'),
    },
  ];

  return (
    <section
      id="funcionalidades"
      className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0F1A33]">
            {t('faq.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t('faq.desc')}
          </p>

          <div className="mt-8 space-y-4">
            {faqItems.map((item, index) => (
              <FaqItemComponent key={index} item={item} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Side CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="cta"
          className="lg:sticky lg:top-32"
        >
          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 px-6 py-8 sm:px-8 sm:py-8">
            <h3 className="text-xl font-bold text-[#0F1A33]">
              {t('faq.cta.title')}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {t('faq.cta.desc')}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[#2D6BFF]">
                  <Check className="h-3 w-3" />
                </span>
                {t('faq.cta.li1')}
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[#2D6BFF]">
                  <Check className="h-3 w-3" />
                </span>
                {t('faq.cta.li2')}
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[#2D6BFF]">
                  <Check className="h-3 w-3" />
                </span>
                {t('faq.cta.li3')}
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://dashboard.lexoraflashcards.com"
                className="text-center rounded-lg bg-[#2D6BFF] px-6 py-3.5 font-bold text-white shadow-md hover:bg-[#2558D9] hover:scale-105 transition-all duration-200"
              >
                {t('faq.cta.button')}
              </a>
              <span className="text-xs text-slate-500 text-center">
                {t('faq.cta.note')}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

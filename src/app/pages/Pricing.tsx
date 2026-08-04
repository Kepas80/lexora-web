import { Check, X, Sparkles, Brain, Zap, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { PricingLive } from '../components/PricingLive';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { t } = useLanguage();

  return (
    <div className="pt-24 sm:pt-32 pb-24 bg-white font-sans text-slate-900">
      {/* 1. Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#0F1A33] sm:text-5xl mb-6">
          {t('pricing_page.header.title')}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-10">
          {t('pricing_page.header.subtitle')}
        </p>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
            <span className={`text-sm ${!isAnnual ? 'text-[#0F1A33] font-bold' : 'text-slate-500'}`}>{t('pricing_page.toggle.monthly')}</span>
            <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative h-8 w-14 rounded-full bg-slate-200 p-1 transition-colors hover:bg-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6BFF]"
            >
                <motion.div 
                    animate={{ x: isAnnual ? 24 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="h-6 w-6 rounded-full bg-[#2D6BFF] shadow-sm"
                />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-[#0F1A33] font-bold' : 'text-slate-500'}`}>
                {t('pricing_page.toggle.annual')} <span className="text-[#2D6BFF] text-xs ml-1 font-bold">{t('pricing_page.toggle.savings')}</span>
            </span>
        </div>
      </section>

      {/* 2. Cards Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex md:grid md:grid-cols-3 gap-8 md:gap-8 items-start overflow-x-auto snap-x snap-mandatory px-6 -mx-6 md:px-0 md:mx-0 pb-8 md:pb-0">
          
          {/* PLAN 1: GRATIS */}
          <div className="min-w-[85vw] md:min-w-0 snap-center flex flex-col rounded-3xl border border-slate-200 bg-white p-8 xl:p-10 shadow-sm hover:shadow-md transition-shadow h-full">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#0F1A33]">{t('pricing_page.plan.free.title')}</h3>
              <p className="mt-2 text-sm text-slate-500 min-h-[48px]">
                {t('pricing_page.plan.free.desc')}
              </p>
            </div>
            
            <div className="mb-2 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-[#0F1A33]">{t('pricing_page.plan.free.price')}</span>
            </div>
            
             {/* Spacer for Savings Badge Alignment */}
            <div className={`mb-2 h-[22px] w-full ${isAnnual ? 'block' : 'hidden'}`} aria-hidden="true"></div>

            <p className="text-xs text-transparent mb-6 h-4 select-none" aria-hidden="true">
               Espacio reservado
            </p>

            <a 
              href="https://dashboard.lexoraflashcards.com/register" 
              className="mb-8 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-center text-sm font-bold text-[#0F1A33] hover:bg-slate-50 transition-colors"
            >
              {t('pricing_page.plan.free.cta')}
            </a>

            <div className="flex-1 space-y-6">
              <div>
                <div className="text-sm font-bold text-[#0F1A33] mb-4">{t('pricing_page.plan.free.includes_title')}</div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-slate-900 shrink-0" strokeWidth={2.5} />
                    <span>{t('pricing_page.plan.free.includes.1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-slate-900 shrink-0" strokeWidth={2.5} />
                    <span>{t('pricing_page.plan.free.includes.2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-slate-900 shrink-0" strokeWidth={2.5} />
                    <span>{t('pricing_page.plan.free.includes.3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-slate-900 shrink-0" strokeWidth={2.5} />
                    <span>{t('pricing_page.plan.free.includes.4')}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="text-sm font-bold text-[#0F1A33] mb-4">{t('pricing_page.plan.free.limits_title')}</div>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    <span>{t('pricing_page.plan.free.limits.1')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    <span>{t('pricing_page.plan.free.limits.2')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    <span>{t('pricing_page.plan.free.limits.3')}</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <X className="h-5 w-5 shrink-0" />
                  <span>{t('pricing_page.plan.free.missing.1')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                    <X className="h-5 w-5 shrink-0" />
                    <span>{t('pricing_page.plan.free.missing.2')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                    <X className="h-5 w-5 shrink-0" />
                    <span>{t('pricing_page.plan.free.missing.3')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                    <X className="h-5 w-5 shrink-0" />
                    <span>{t('pricing_page.plan.free.missing.4')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* PLAN 2: IA */}
          <div className="min-w-[85vw] md:min-w-0 snap-center flex flex-col rounded-3xl border-2 border-[#2D6BFF] bg-white p-8 xl:p-10 shadow-xl shadow-blue-900/5 relative h-full">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#0F1A33]">{t('pricing_page.plan.ia.title')}</h3>
              <p className="mt-2 text-sm text-slate-500 min-h-[48px]">
                {t('pricing_page.plan.ia.desc')}
              </p>
            </div>

            <div className="mb-2 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-[#0F1A33]">{isAnnual ? t('pricing_page.plan.ia.price_annual') : t('pricing_page.plan.ia.price_monthly')}</span>
              <span className="text-lg text-slate-500 font-medium">{t('pricing_page.plan.ia.per_month')}</span>
            </div>

            {isAnnual ? (
                <div className="mb-2 h-[22px]">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-bold text-green-700 whitespace-nowrap">
                        {t('pricing_page.plan.ia.savings_badge')}
                    </span>
                </div>
            ) : (
                 <div className="mb-2 h-[22px] hidden"></div>
            )}

            <p className="text-xs text-slate-400 mb-6 h-4">
               {isAnnual ? t('pricing_page.plan.ia.billed_annual') : t('pricing_page.plan.ia.billed_monthly')}
            </p>

            <a 
              href="https://dashboard.lexoraflashcards.com/register?plan=ia" 
              className="mb-8 block w-full rounded-xl bg-[#2D6BFF] px-4 py-3.5 text-center text-sm font-bold text-white hover:bg-[#2558D9] hover:shadow-lg transition-all"
            >
              {t('pricing_page.plan.ia.cta')}
            </a>

            <div className="flex-1 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                   <Sparkles className="h-4 w-4 text-[#2D6BFF]" />
                   <div className="text-sm font-bold text-[#2D6BFF]">{t('pricing_page.plan.ia.feature_group.1')}</div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">

                   <li className="flex items-start justify-between gap-4">
                     <span className="text-left">{t('pricing_page.plan.ia.features.1.text')}</span>
                     <span className="font-bold text-[#0F1A33] shrink-0 text-right">{t('pricing_page.plan.ia.features.1.value')}</span>
                   </li>
                   <li className="flex items-start justify-between gap-4">
                     <span className="text-left">{t('pricing_page.plan.ia.features.2.text')}</span>
                     <span className="font-bold text-[#0F1A33] shrink-0 text-right">{t('pricing_page.plan.ia.features.2.value')}</span>
                   </li>
                   <li className="flex items-start justify-between gap-4">
                     <span className="text-left">{t('pricing_page.plan.ia.features.3.text')}</span>
                     <span className="font-bold text-[#0F1A33] shrink-0 text-right">{t('pricing_page.plan.ia.features.3.value')}</span>
                   </li>
                   <li className="flex items-start justify-between gap-4">
                     <span className="text-left">{t('pricing_page.plan.ia.features.4.text')}</span>
                     <span className="font-bold text-[#0F1A33] shrink-0 text-right">{t('pricing_page.plan.ia.features.4.value')}</span>
                   </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                   <Brain className="h-4 w-4 text-[#2D6BFF]" />
                   <div className="text-sm font-bold text-[#2D6BFF]">{t('pricing_page.plan.ia.feature_group.2')}</div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                   <li className="flex items-center justify-between">
                     <span>{t('pricing_page.plan.ia.features.5.text')}</span>
                     <span className="font-bold text-[#0F1A33]">{t('pricing_page.plan.ia.features.5.value')}</span>
                   </li>
                   <li className="text-xs text-slate-500 pl-1 border-l-2 border-blue-100">
                     {t('pricing_page.plan.ia.features.5.subtext')}
                   </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="text-sm font-bold text-[#0F1A33] mb-4">{t('pricing_page.plan.ia.includes_more')}</div>
                <ul className="space-y-3 text-sm text-slate-600">
                   <li className="flex items-start gap-3">
                     <Check className="h-5 w-5 text-[#2D6BFF] shrink-0" />
                     <span>{t('pricing_page.plan.ia.more.1')}</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Check className="h-5 w-5 text-[#2D6BFF] shrink-0" />
                     <span>{t('pricing_page.plan.ia.more.2')}</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Check className="h-5 w-5 text-[#2D6BFF] shrink-0" />
                     <span>{t('pricing_page.plan.ia.more.3')}</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Check className="h-5 w-5 text-[#2D6BFF] shrink-0" />
                     <span>{t('pricing_page.plan.ia.more.4')}</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Check className="h-5 w-5 text-[#2D6BFF] shrink-0" />
                     <span>{t('pricing_page.plan.ia.more.5')}</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Check className="h-5 w-5 text-[#2D6BFF] shrink-0" />
                     <span>{t('pricing_page.plan.ia.more.6')}</span>
                   </li>
                </ul>
              </div>
            </div>
          </div>

          {/* PLAN 3: IA PRO */}
          <div className="min-w-[85vw] md:min-w-0 snap-center flex flex-col rounded-3xl border border-slate-200 bg-slate-900 p-8 xl:p-10 shadow-2xl relative h-full text-white overflow-hidden">
             {/* Gradient Background */}
             <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-[#2D6BFF] opacity-20 blur-3xl pointer-events-none"></div>

            <div className="mb-6 relative z-10">
              <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white">{t('pricing_page.plan.pro.title')}</h3>
                  <span className="inline-flex items-center rounded-full bg-[#2D6BFF] px-2.5 py-0.5 text-xs font-bold text-white uppercase tracking-wide">
                    {t('pricing_page.plan.pro.badge')}
                  </span>
              </div>
              <p className="mt-2 text-sm text-slate-400 min-h-[48px]">
                {t('pricing_page.plan.pro.desc')}
              </p>
            </div>

            <div className="mb-2 flex items-baseline gap-1 relative z-10">
              <span className="text-5xl font-bold text-white">{isAnnual ? t('pricing_page.plan.pro.price_annual') : t('pricing_page.plan.pro.price_monthly')}</span>
              <span className="text-lg text-slate-400 font-medium">{t('pricing_page.plan.pro.per_month')}</span>
            </div>
            
            {isAnnual ? (
                <div className="mb-2 h-[22px] relative z-10">
                    <span className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-[10px] font-bold text-green-300 whitespace-nowrap border border-green-500/30">
                        {t('pricing_page.plan.pro.savings_badge')}
                    </span>
                </div>
            ) : (
                 <div className="mb-2 h-[22px] hidden relative z-10"></div>
            )}

            <p className="text-xs text-slate-400 mb-6 h-4 relative z-10">
               {isAnnual ? t('pricing_page.plan.pro.billed_annual') : t('pricing_page.plan.pro.billed_monthly')}
            </p>

            <a 
              href="https://dashboard.lexoraflashcards.com/register?plan=pro" 
              className="mb-8 block w-full rounded-xl bg-white px-4 py-3.5 text-center text-sm font-bold text-[#0F1A33] hover:bg-slate-50 transition-colors relative z-10"
            >
              {t('pricing_page.plan.pro.cta')}
            </a>

            <div className="flex-1 space-y-8 relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                   <Zap className="h-4 w-4 text-[#2D6BFF]" />
                   <div className="text-sm font-bold text-white">{t('pricing_page.plan.pro.feature_group.1')}</div>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">

                   <li className="flex items-start justify-between gap-4">
                     <span className="text-left">{t('pricing_page.plan.pro.features.1.text')}</span>
                     <span className="font-bold text-white shrink-0 text-right">{t('pricing_page.plan.pro.features.1.value')}</span>
                   </li>
                   <li className="flex items-start justify-between gap-4">
                     <span className="text-left">{t('pricing_page.plan.pro.features.2.text')}</span>
                     <span className="font-bold text-white shrink-0 text-right">{t('pricing_page.plan.pro.features.2.value')}</span>
                   </li>
                   <li className="flex items-start justify-between gap-4">
                     <span className="text-left">{t('pricing_page.plan.pro.features.3.text')}</span>
                     <span className="font-bold text-white shrink-0 text-right">{t('pricing_page.plan.pro.features.3.value')}</span>
                   </li>
                   <li className="flex items-start justify-between gap-4">
                     <span className="text-left">{t('pricing_page.plan.pro.features.4.text')}</span>
                     <span className="font-bold text-white shrink-0 text-right">{t('pricing_page.plan.pro.features.4.value')}</span>
                   </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                   <Brain className="h-4 w-4 text-[#2D6BFF]" />
                   <div className="text-sm font-bold text-white">{t('pricing_page.plan.pro.feature_group.2')}</div>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                   <li className="text-xs text-slate-400 pl-1 border-l-2 border-[#2D6BFF]">
                     {t('pricing_page.plan.pro.features.5.subtext')}
                   </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <div className="text-sm font-bold text-white mb-4">{t('pricing_page.plan.pro.includes_more')}</div>
                <ul className="space-y-3 text-sm text-slate-300">
                   <li className="flex items-start gap-3">
                     <Check className="h-5 w-5 text-[#2D6BFF] shrink-0" />
                     <span>{t('pricing_page.plan.pro.more.1')}</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Check className="h-5 w-5 text-[#2D6BFF] shrink-0" />
                     <span>{t('pricing_page.plan.pro.more.2')}</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <Check className="h-5 w-5 text-[#2D6BFF] shrink-0" />
                     <span>{t('pricing_page.plan.pro.more.3')}</span>
                   </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. Detailed Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0F1A33]">{t('pricing_page.comparison.title')}</h2>
            <p className="mt-2 text-slate-600 text-sm">{t('pricing_page.comparison.subtitle')}</p>
        </div>
        
        <div className="space-y-8">
            {/* TABLA 1: FUNCIONALIDADES PRINCIPALES */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex items-center gap-3">
                    <div className="p-2 bg-blue-100/50 rounded-lg">
                        <Sparkles className="w-5 h-5 text-[#2D6BFF]" />
                    </div>
                    <h3 className="font-bold text-[#0F1A33] text-lg">{t('pricing_page.comparison.table1.title')}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse table-fixed">
                        <thead>
                            <tr className="bg-white border-b border-slate-100">
                                <th className="py-4 px-4 font-bold text-[#0F1A33] w-[34%]">{t('pricing_page.comparison.col.function')}</th>
                                <th className="py-4 px-4 font-bold text-[#0F1A33] text-center w-[22%] bg-white">{t('pricing_page.comparison.col.free')}</th>
                                <th className="py-4 px-4 font-bold text-white text-center w-[22%] bg-[#2D6BFF]">{t('pricing_page.comparison.col.ia')}</th>
                                <th className="py-4 px-4 font-bold text-white text-center w-[22%] bg-slate-900">{t('pricing_page.comparison.col.pro')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table.row1.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table.row1.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center font-medium text-slate-600 bg-white">{t('pricing_page.table.row1.val.free')}</td>
                                <td className="py-3 px-4 text-center font-medium text-[#2D6BFF] bg-blue-50">{t('pricing_page.table.row1.val.paid')}</td>
                                <td className="py-3 px-4 text-center font-bold text-[#0F1A33] bg-slate-50">{t('pricing_page.table.row1.val.paid')}</td>
                            </tr>

                            <tr className="bg-blue-50/30 hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table.row2.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table.row2.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center font-medium text-[#2D6BFF] bg-blue-50">{t('pricing_page.table.row2.val.ia')}</td>
                                <td className="py-3 px-4 text-center font-bold text-[#0F1A33] bg-slate-50">{t('pricing_page.table.row2.val.pro')}</td>
                            </tr>

                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table.row3.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table.row3.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center font-medium text-[#2D6BFF] bg-blue-50">{t('pricing_page.table.row3.val.ia')}</td>
                                <td className="py-3 px-4 text-center font-bold text-[#0F1A33] bg-slate-50">{t('pricing_page.table.row3.val.pro')}</td>
                            </tr>

                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table.row4.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table.row4.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center font-medium text-[#2D6BFF] bg-blue-50">{t('pricing_page.table.row4.val.ia')}</td>
                                <td className="py-3 px-4 text-center font-bold text-[#0F1A33] bg-slate-50">{t('pricing_page.table.row4.val.pro')}</td>
                            </tr>

                            <tr className="bg-blue-50/30 hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table.row5.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table.row5.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center font-medium text-[#2D6BFF] bg-blue-50">{t('pricing_page.table.row5.val.ia')}</td>
                                <td className="py-3 px-4 text-center font-bold text-[#0F1A33] bg-slate-50">{t('pricing_page.table.row5.val.pro')}</td>
                            </tr>

                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table.row6.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table.row6.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center font-bold text-[#2D6BFF] bg-blue-50">{t('pricing_page.table.row6.val.paid')}</td>
                                <td className="py-3 px-4 text-center font-bold text-[#0F1A33] bg-slate-50">{t('pricing_page.table.row6.val.paid')}</td>
                            </tr>

                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table.row7.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table.row7.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-xs text-slate-600 bg-white">{t('pricing_page.table.row7.val.free')}</td>
                                <td className="py-3 px-4 text-center text-xs font-medium text-[#2D6BFF] bg-blue-50">{t('pricing_page.table.row7.val.ia')}</td>
                                <td className="py-3 px-4 text-center text-xs font-bold text-[#0F1A33] bg-slate-50">{t('pricing_page.table.row7.val.pro')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* TABLA 2: FUNCIONES DE ESTUDIO */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex items-center gap-3">
                    <div className="p-2 bg-indigo-100/50 rounded-lg">
                         <GraduationCap className="w-5 h-5 text-[#4F46E5]" />
                    </div>
                    <h3 className="font-bold text-[#0F1A33] text-lg">{t('pricing_page.comparison.table2.title')}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse table-fixed">
                        <thead>
                            <tr className="bg-white border-b border-slate-100">
                                <th className="py-4 px-4 font-bold text-[#0F1A33] w-[34%]">{t('pricing_page.comparison.col.function')}</th>
                                <th className="py-4 px-4 font-bold text-[#0F1A33] text-center w-[22%] bg-white">{t('pricing_page.comparison.col.free')}</th>
                                <th className="py-4 px-4 font-bold text-white text-center w-[22%] bg-[#2D6BFF]">{t('pricing_page.comparison.col.ia')}</th>
                                <th className="py-4 px-4 font-bold text-white text-center w-[22%] bg-slate-900">{t('pricing_page.comparison.col.pro')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                             <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table2.row1.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table2.row1.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-xs text-slate-600 bg-white">{t('pricing_page.table2.row1.val.free')}</td>
                                <td className="py-3 px-4 text-center font-medium text-[#2D6BFF] text-xs bg-blue-50">{t('pricing_page.table2.row1.val.paid')}</td>
                                <td className="py-3 px-4 text-center font-bold text-[#0F1A33] text-xs bg-slate-50">{t('pricing_page.table2.row1.val.paid')}</td>
                            </tr>

                            <tr className="bg-blue-50/30 hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table2.row2.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table2.row2.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center bg-blue-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                                <td className="py-3 px-4 text-center bg-slate-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                            </tr>

                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table2.row3.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table2.row3.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center bg-blue-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                                <td className="py-3 px-4 text-center bg-slate-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                            </tr>

                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table2.row4.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table2.row4.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center bg-white"><Check className="w-5 h-5 mx-auto text-slate-400"/></td>
                                <td className="py-3 px-4 text-center bg-blue-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                                <td className="py-3 px-4 text-center bg-slate-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                            </tr>

                            <tr className="bg-blue-50/30 hover:bg-blue-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table2.row5.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table2.row5.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center bg-blue-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                                <td className="py-3 px-4 text-center font-bold text-[#0F1A33] text-xs bg-slate-50">{t('pricing_page.table2.row5.val.pro')}</td>
                            </tr>

                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table2.row6.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table2.row6.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center bg-blue-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                                <td className="py-3 px-4 text-center bg-slate-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                            </tr>

                             <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table2.row7.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table2.row7.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center bg-blue-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                                <td className="py-3 px-4 text-center bg-slate-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                            </tr>

                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table2.row8.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table2.row8.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center bg-blue-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                                <td className="py-3 px-4 text-center bg-slate-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                            </tr>

                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table2.row9.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table2.row9.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center bg-blue-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                                <td className="py-3 px-4 text-center bg-slate-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                            </tr>

                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4">
                                    <div className="font-semibold text-[#0F1A33] text-sm">{t('pricing_page.table2.row10.title')}</div>
                                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{t('pricing_page.table2.row10.desc')}</div>
                                </td>
                                <td className="py-3 px-4 text-center text-slate-300 bg-white">—</td>
                                <td className="py-3 px-4 text-center bg-blue-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                                <td className="py-3 px-4 text-center bg-slate-50"><Check className="w-5 h-5 mx-auto text-[#2D6BFF]"/></td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </section>

      {/* Comparativa en vivo desde la base de datos: la mantiene el agente */}
      <PricingLive />
    </div>
  );
}

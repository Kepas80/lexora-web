import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'wouter';
import { Globe } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from 'figma:asset/0d48f0c5e85d3d5ad64fc0020ebc1b46d7795b07.png';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.features'), href: '/features' },
    { name: t('nav.method'), href: '/method' },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: 'Centros', href: '/centros' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex items-center justify-between h-20 md:h-20 px-6 md:px-10">
          {/* Logo - Top-left, aligned vertically */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 rounded-lg">
                <img 
                    src={logo} 
                    alt="Lexora" 
                    className="h-8 sm:h-9 md:h-10 w-auto flex-shrink-0" 
                />
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex ml-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${
                  location === link.href ? 'text-[#2D6BFF]' : 'text-[#0F1A33] hover:text-[#2D6BFF]'
                }`}>
                  {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="p-2 text-slate-600 hover:text-[#2D6BFF] hover:bg-slate-50 rounded-full transition-all outline-none"
                  aria-label="Switch language"
                >
                  <Globe className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[120px] bg-white">
                <DropdownMenuItem onClick={() => setLanguage('es')} className="cursor-pointer font-medium">
                  <span className="mr-2">🇪🇸</span> ES
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer font-medium">
                  <span className="mr-2">🇺🇸</span> EN
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="h-4 w-px bg-slate-200" />
            <a
              href="https://dashboard.lexoraflashcards.com/login"
              className="text-sm font-medium text-[#0F1A33] hover:text-[#2D6BFF] transition-colors"
            >
              {t('nav.login')}
            </a>
            <a
              href="https://dashboard.lexoraflashcards.com/register"
              className="rounded-lg bg-[#22c55e] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#16a34a] transition-colors shadow-sm hover:shadow-md"
            >
              {t('nav.start')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-[#0F1A33] hover:bg-slate-100 hover:text-[#2D6BFF] md:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2D6BFF]"
          >
            <span className="sr-only">Abrir menú</span>
            {!mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-slate-200"
            >
              <nav className="flex flex-col space-y-4 px-2 py-6">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className={`block px-3 py-2 rounded-md text-base font-medium ${
                        location === link.href ? 'bg-slate-50 text-[#2D6BFF]' : 'text-[#0F1A33] hover:bg-slate-50 hover:text-[#2D6BFF]'
                     }`}>
                        {link.name}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-3 px-3">
                    <div className="flex justify-between items-center px-2 mb-2">
                      <span className="text-sm text-slate-500 font-medium">{language === 'es' ? 'Idioma' : 'Language'}</span>
                      <button
                        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-[#0F1A33] font-medium text-sm"
                      >
                        <Globe className="w-4 h-4" />
                        {language.toUpperCase()}
                      </button>
                    </div>
                    <a href="https://dashboard.lexoraflashcards.com/login" className="text-center w-full px-4 py-2 text-base font-medium text-[#0F1A33] hover:text-[#2D6BFF] border border-slate-200 rounded-lg hover:bg-slate-50">
                        {t('nav.login')}
                    </a>
                     <a href="https://dashboard.lexoraflashcards.com/register" className="text-center w-full px-4 py-2 rounded-lg bg-[#22c55e] text-base font-bold text-white hover:bg-[#16a34a] shadow-sm">
                        {t('nav.start')}
                    </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
                                                             }

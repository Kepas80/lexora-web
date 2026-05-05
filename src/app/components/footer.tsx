import { Link } from 'wouter';
import logo from 'figma:asset/53f834244f6a2d1f9693f8d153b9431206518c95.png';
import { useLanguage } from '../lib/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-slate-200 bg-[#F8FAFC] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
                <Link href="/" className="inline-block mb-6">
                    <img src={logo} alt="Lexora" className="h-8" />
                </Link>
                <p className="text-sm text-slate-500 mb-4 max-w-xs leading-relaxed">
                    {t('footer.desc')}
                </p>
            </div>
            
            <div>
                <h3 className="text-sm font-bold text-[#0F1A33] mb-4 uppercase tracking-wider">{t('footer.product')}</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li><Link href="/features" className="hover:text-[#2D6BFF] transition-colors">{t('nav.features')}</Link></li>
                    <li><Link href="/pricing" className="hover:text-[#2D6BFF] transition-colors">{t('nav.pricing')}</Link></li>
                    <li><Link href="/method" className="hover:text-[#2D6BFF] transition-colors">{t('nav.method')}</Link></li>
                    <li><Link href="/solutions" className="hover:text-[#2D6BFF] transition-colors">{t('nav.solutions')}</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-bold text-[#0F1A33] mb-4 uppercase tracking-wider">LEXORA</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li><Link href="/about" className="hover:text-[#2D6BFF] transition-colors">{t('nav.about')}</Link></li>
                    <li><Link href="/help" className="hover:text-[#2D6BFF] transition-colors">{t('nav.contact')}</Link></li>
                    <li><a href="https://blog.lexoraflashcards.com" className="hover:text-[#2D6BFF] transition-colors">Blog</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-bold text-[#0F1A33] mb-4 uppercase tracking-wider">{t('footer.legal')}</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li><Link href="/terms-of-the-service" className="hover:text-[#2D6BFF] transition-colors">{t('nav.terms')}</Link></li>
                    <li><Link href="/privacypolicy" className="hover:text-[#2D6BFF] transition-colors">{t('nav.privacy')}</Link></li>
                </ul>
            </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Lexora Flashcards. {t('footer.rights')}
          </p>
          <div className="flex gap-4">
             {/* Social icons placeholder */}
          </div>
        </div>
      </div>
    </footer>
  );
}
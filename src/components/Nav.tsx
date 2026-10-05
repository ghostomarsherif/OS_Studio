import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const { t, locale, toggleLocale } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: t('nav.work'), href: '#showcase' },
    { label: t('nav.services'), href: '#process' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-porcelain/90 backdrop-blur-md border-b border-copper/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo lockup */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="medallion">
            <span className="medallion__inner">OS</span>
          </div>
          <span
            className="font-semibold tracking-wider text-sm"
            style={{ fontFamily: 'var(--font-ui-en)' }}
          >
            OS STUDIO
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary hover:text-copper-deep transition-colors"
              style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Locale toggle */}
          <button
            onClick={toggleLocale}
            className="text-xs font-mono px-3 py-1.5 border border-copper/30 rounded-full hover:border-copper transition-colors"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {locale === 'ar' ? 'EN' : 'عربي'}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="bg-copper text-porcelain px-5 py-2 rounded-full text-sm font-medium hover:bg-copper-deep transition-colors"
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-porcelain border-t border-copper/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-secondary hover:text-copper-deep transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-copper/10">
                <button
                  onClick={toggleLocale}
                  className="text-xs font-mono px-3 py-1.5 border border-copper/30 rounded-full"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {locale === 'ar' ? 'EN' : 'عربي'}
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-copper text-porcelain px-5 py-2 rounded-full text-sm"
                >
                  {t('nav.cta')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

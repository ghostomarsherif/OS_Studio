import { useI18n } from '../i18n';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const { t, locale } = useI18n();

  const links = [
    { label: t('nav.work'), href: '#showcase' },
    { label: t('nav.services'), href: '#process' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="relative bg-ink text-porcelain overflow-hidden">
      {/* Coin edge top */}
      <div className="coin-edge" />

      {/* Giant emblem watermark */}
      <div className="absolute end-0 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full border-[20px] border-copper flex items-center justify-center">
          <span
            className="text-8xl font-bold text-copper"
            style={{ fontFamily: 'var(--font-display-en)' }}
          >
            OS
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="medallion">
                <span className="medallion__inner text-porcelain" style={{ color: 'var(--copper)' }}>OS</span>
              </div>
              <span
                className="font-semibold tracking-wider text-sm"
                style={{ fontFamily: 'var(--font-ui-en)' }}
              >
                OS STUDIO
              </span>
            </div>
            <p className="text-sm text-porcelain/60">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4
              className="text-xs tracking-widest text-copper uppercase mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {t('footer.nav')}
            </h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-porcelain/60 hover:text-copper transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4
              className="text-xs tracking-widest text-copper uppercase mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {t('footer.contact')}
            </h4>
            <div className="space-y-2 text-sm text-porcelain/60">
              <p>contact@osstudio.eg</p>
              <p>{locale === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
            </div>

            <h4
              className="text-xs tracking-widest text-copper uppercase mb-4 mt-6"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {t('footer.socials')}
            </h4>
            <div className="flex gap-4">
              <a href="#" className="text-porcelain/60 hover:text-copper transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-porcelain/60 hover:text-copper transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-porcelain/60 hover:text-copper transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-porcelain/10 mt-12 pt-8 text-center">
          <p className="text-xs text-porcelain/40" style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}>
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

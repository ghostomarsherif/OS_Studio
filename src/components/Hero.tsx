import { motion } from 'framer-motion';
import { useI18n } from '../i18n';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t, locale } = useI18n();

  const stats = [
    { value: '+40', label: t('hero.stat1') },
    { value: '12', label: t('hero.stat2') },
    { value: '14', label: t('hero.stat3') },
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden blueprint-bg">
      {/* Code glyphs */}
      <span className="code-glyph top-32 start-8 hidden lg:block">{'{'}</span>
      <span className="code-glyph bottom-20 end-8 hidden lg:block">{'}'}</span>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        {/* Left content */}
        <div className="space-y-8">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-widest text-copper uppercase"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {t('hero.eyebrow')}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-ink line-mask-reveal"
            style={{ fontFamily: locale === 'ar' ? 'var(--font-display-ar)' : 'var(--font-display-en)' }}
          >
            {t('hero.headline')}
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-secondary max-w-xl leading-relaxed"
            style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
          >
            {t('hero.sub')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#contact"
              className="bg-copper text-porcelain px-8 py-3.5 rounded-full font-medium hover:bg-copper-deep transition-all hover:scale-105 active:scale-95"
              style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
            >
              {t('hero.cta1')}
            </a>
            <a
              href="#showcase"
              className="flex items-center gap-2 text-copper-deep hover:text-copper transition-colors group"
              style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
            >
              {t('hero.cta2')}
              {locale === 'ar' ? (
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              )}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-8 pt-8 border-t border-copper/20"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-2xl font-bold text-copper-deep"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-secondary mt-1"
                  style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Laptop mockup */}
        <motion.div
          initial={{ opacity: 0, x: locale === 'ar' ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          {/* Laptop mockup */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-copper/20 rounded-3xl blur-3xl" />

            {/* Laptop frame */}
            <div className="relative bg-ink rounded-2xl p-3 shadow-2xl">
              {/* Screen */}
              <div className="bg-porcelain rounded-lg overflow-hidden aspect-[16/10]">
                {/* Portfolio UI mockup */}
                <div className="h-full p-6 flex flex-col">
                  {/* Top bar */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-copper/40" />
                    <div className="w-3 h-3 rounded-full bg-blush" />
                    <div className="w-3 h-3 rounded-full bg-cold-grey" />
                    <div className="flex-1 h-5 bg-cold-grey/30 rounded mx-4" />
                  </div>
                  {/* Content mockup */}
                  <div className="flex-1 grid grid-cols-3 gap-3">
                    <div className="col-span-2 space-y-3">
                      <div className="h-4 bg-copper/20 rounded w-3/4" />
                      <div className="h-3 bg-cold-grey/40 rounded w-full" />
                      <div className="h-3 bg-cold-grey/40 rounded w-5/6" />
                      <div className="h-24 bg-highlight rounded-lg mt-4" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-20 bg-blush/50 rounded-lg" />
                      <div className="h-3 bg-cold-grey/30 rounded" />
                      <div className="h-3 bg-cold-grey/30 rounded w-4/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Circuit trace connecting to CV pile */}
            <svg className="absolute -bottom-8 start-0 w-full h-16" viewBox="0 0 400 60" fill="none">
              <path
                d="M 200 0 L 200 20 L 280 20 L 280 40 L 350 40"
                stroke="var(--copper)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle cx="200" cy="20" r="3" fill="var(--copper)" />
              <circle cx="280" cy="40" r="3" fill="var(--copper)" />
            </svg>

            {/* Paper CV pile */}
            <div className="absolute -bottom-12 end-0 flex gap-1">
              <div className="w-12 h-16 bg-white rounded shadow-md rotate-[-5deg] border border-cold-grey/50">
                <div className="p-1.5 space-y-1">
                  <div className="h-1 bg-cold-grey/60 rounded w-3/4" />
                  <div className="h-1 bg-cold-grey/40 rounded" />
                  <div className="h-1 bg-cold-grey/40 rounded w-5/6" />
                </div>
              </div>
              <div className="w-12 h-16 bg-white rounded shadow-md rotate-[3deg] border border-cold-grey/50 -ms-4">
                <div className="p-1.5 space-y-1">
                  <div className="h-1 bg-cold-grey/60 rounded w-3/4" />
                  <div className="h-1 bg-cold-grey/40 rounded" />
                  <div className="h-1 bg-cold-grey/40 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

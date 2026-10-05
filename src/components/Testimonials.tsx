import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

export default function Testimonials() {
  const { t, locale } = useI18n();

  const testimonials = [
    { text: t('testimonials.t1'), name: t('testimonials.t1.name') },
    { text: t('testimonials.t2'), name: t('testimonials.t2.name') },
    { text: t('testimonials.t3'), name: t('testimonials.t3.name') },
    { text: t('testimonials.t4'), name: t('testimonials.t4.name') },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="text-xs tracking-widest text-copper uppercase mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            TESTIMONIALS
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-ink"
            style={{ fontFamily: locale === 'ar' ? 'var(--font-display-ar)' : 'var(--font-display-en)' }}
          >
            {t('testimonials.title')}
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute start-0 top-0 bottom-0 w-24 bg-gradient-to-r from-porcelain to-transparent z-10" />
        <div className="absolute end-0 top-0 bottom-0 w-24 bg-gradient-to-l from-porcelain to-transparent z-10" />

        <div className="flex marquee-track" style={{ width: 'max-content' }}>
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 mx-4 p-6 bg-porcelain border border-copper/15 rounded-2xl"
            >
              {/* Medallion avatar */}
              <div className="medallion mb-4">
                <span className="medallion__inner text-xs">
                  {item.name.charAt(0)}
                </span>
              </div>

              {/* Quote */}
              <p className="text-sm text-ink leading-relaxed mb-4" style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}>
                {item.text}
              </p>

              {/* Name */}
              <p className="text-xs text-copper-deep font-medium" style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}>
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

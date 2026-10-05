import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

export default function Process() {
  const { t, locale } = useI18n();

  const steps = [
    { num: '٠١', numEn: '01', title: t('process.step1'), desc: t('process.step1.desc') },
    { num: '٠٢', numEn: '02', title: t('process.step2'), desc: t('process.step2.desc') },
    { num: '٠٣', numEn: '03', title: t('process.step3'), desc: t('process.step3.desc') },
    { num: '٠٤', numEn: '04', title: t('process.step4'), desc: t('process.step4.desc') },
  ];

  return (
    <section id="process" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p
            className="text-xs tracking-widest text-copper uppercase mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            PROCESS
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-ink mb-4"
            style={{ fontFamily: locale === 'ar' ? 'var(--font-display-ar)' : 'var(--font-display-en)' }}
          >
            {t('process.title')}
          </h2>
          <p className="text-secondary">{t('process.subtitle')}</p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Circuit trace connector */}
          <svg className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 hidden lg:block" viewBox="0 0 1000 8" fill="none" preserveAspectRatio="none">
            <path
              d="M 50 4 L 200 4 L 220 2 L 480 2 L 500 4 L 520 6 L 780 6 L 800 4 L 950 4"
              stroke="var(--copper)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle cx="200" cy="4" r="3" fill="var(--copper)" />
            <circle cx="500" cy="4" r="3" fill="var(--copper)" />
            <circle cx="800" cy="4" r="3" fill="var(--copper)" />
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Number */}
                <div
                  className="text-5xl font-bold text-copper/20 mb-4"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {locale === 'ar' ? step.num : step.numEn}
                </div>

                {/* Node dot */}
                <div className="w-4 h-4 rounded-full bg-copper mx-auto mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-copper/30 animate-ping" />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold text-ink mb-2"
                  style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-secondary leading-relaxed">
                  {step.desc}
                </p>

                {/* Vertical copper hairline between columns */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-0 bottom-0 end-0 w-px bg-copper/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

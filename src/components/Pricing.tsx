import { motion } from 'framer-motion';
import { useI18n } from '../i18n';
import { Check, CreditCard } from 'lucide-react';

export default function Pricing() {
  const { t, locale } = useI18n();

  const tiers = [
    {
      name: t('pricing.tier1.name'),
      price: t('pricing.tier1.price'),
      desc: t('pricing.tier1.desc'),
      features: [t('pricing.tier1.f1'), t('pricing.tier1.f2'), t('pricing.tier1.f3'), t('pricing.tier1.f4')],
      popular: false,
    },
    {
      name: t('pricing.tier2.name'),
      price: t('pricing.tier2.price'),
      desc: t('pricing.tier2.desc'),
      features: [t('pricing.tier2.f1'), t('pricing.tier2.f2'), t('pricing.tier2.f3'), t('pricing.tier2.f4')],
      popular: true,
    },
    {
      name: t('pricing.tier3.name'),
      price: t('pricing.tier3.price'),
      desc: t('pricing.tier3.desc'),
      features: [t('pricing.tier3.f1'), t('pricing.tier3.f2'), t('pricing.tier3.f3'), t('pricing.tier3.f4')],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-porcelain to-highlight/30">
      {/* Code glyph */}
      <span className="code-glyph top-32 start-8 hidden lg:block">{'{'}</span>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-widest text-copper uppercase mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            PRICING
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-ink mb-4"
            style={{ fontFamily: locale === 'ar' ? 'var(--font-display-ar)' : 'var(--font-display-en)' }}
          >
            {t('pricing.title')}
          </h2>
          <p className="text-secondary">{t('pricing.subtitle')}</p>
        </motion.div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 border transition-all hover:shadow-lg ${
                tier.popular
                  ? 'bg-ink text-porcelain border-copper/40 scale-[1.02] shadow-xl'
                  : 'bg-porcelain text-ink border-copper/20'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-copper text-porcelain text-xs px-4 py-1 rounded-full"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {locale === 'ar' ? 'الأكثر طلباً' : 'MOST POPULAR'}
                </div>
              )}

              {/* Name */}
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-display-en)' }}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div
                className={`text-2xl font-bold mb-4 ${tier.popular ? 'text-copper' : 'text-copper-deep'}`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {tier.price}
              </div>

              {/* Description */}
              <p className={`text-sm mb-6 ${tier.popular ? 'text-porcelain/70' : 'text-secondary'}`}>
                {tier.desc}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${tier.popular ? 'text-copper' : 'text-copper-deep'}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-medium transition-all hover:scale-105 ${
                  tier.popular
                    ? 'bg-copper text-porcelain hover:bg-copper-deep'
                    : 'border border-copper text-copper-deep hover:bg-copper hover:text-porcelain'
                }`}
              >
                {t('hero.cta1')}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Retainer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 p-6 border border-dashed border-copper/30 rounded-xl max-w-2xl mx-auto"
        >
          <p
            className="text-lg font-semibold text-copper-deep mb-2"
            style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
          >
            {t('pricing.retainer')}
          </p>
          <p className="text-sm text-secondary">{t('pricing.retainer.desc')}</p>
        </motion.div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-blush/40 rounded-full text-sm text-copper-deep">
            <CreditCard size={16} />
            <span>{t('pricing.installment')}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blush/40 rounded-full text-sm text-copper-deep">
            <span style={{ fontFamily: 'var(--font-mono)' }} className="font-bold">50%</span>
            <span>{t('pricing.deposit')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

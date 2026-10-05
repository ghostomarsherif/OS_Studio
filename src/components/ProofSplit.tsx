import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

export default function ProofSplit() {
  const { t, locale } = useI18n();

  return (
    <section className="relative">
      {/* Coin edge top */}
      <div className="coin-edge" />

      <div className="grid md:grid-cols-2 min-h-[70vh]">
        {/* Cold grey half - CV */}
        <div className="relative bg-cold-grey/40 p-12 md:p-16 flex flex-col justify-center items-center text-center overflow-hidden">
          {/* Stacked paper CVs */}
          <div className="relative mb-8">
            <div className="w-48 h-64 bg-white rounded shadow-lg rotate-[-6deg] absolute top-2 start-2 border border-cold-grey/30">
              <div className="p-4 space-y-2">
                <div className="h-2 bg-cold-grey/50 rounded w-2/3" />
                <div className="h-1.5 bg-cold-grey/30 rounded" />
                <div className="h-1.5 bg-cold-grey/30 rounded w-5/6" />
                <div className="h-1.5 bg-cold-grey/30 rounded w-4/5" />
                <div className="h-1 bg-cold-grey/20 rounded mt-4" />
                <div className="h-1 bg-cold-grey/20 rounded w-3/4" />
                <div className="h-1 bg-cold-grey/20 rounded" />
              </div>
            </div>
            <div className="w-48 h-64 bg-white rounded shadow-lg rotate-[4deg] absolute top-0 end-0 border border-cold-grey/30">
              <div className="p-4 space-y-2">
                <div className="h-2 bg-cold-grey/50 rounded w-2/3" />
                <div className="h-1.5 bg-cold-grey/30 rounded" />
                <div className="h-1.5 bg-cold-grey/30 rounded w-5/6" />
                <div className="h-1.5 bg-cold-grey/30 rounded w-4/5" />
                <div className="h-1 bg-cold-grey/20 rounded mt-4" />
                <div className="h-1 bg-cold-grey/20 rounded w-3/4" />
              </div>
            </div>
            <div className="w-48 h-64 bg-white rounded shadow-xl rotate-[-1deg] relative border border-cold-grey/20">
              <div className="p-4 space-y-2">
                <div className="h-2 bg-cold-grey/60 rounded w-2/3" />
                <div className="h-1.5 bg-cold-grey/40 rounded" />
                <div className="h-1.5 bg-cold-grey/40 rounded w-5/6" />
                <div className="h-1.5 bg-cold-grey/40 rounded w-4/5" />
                <div className="h-1 bg-cold-grey/30 rounded mt-4" />
                <div className="h-1 bg-cold-grey/30 rounded w-3/4" />
                <div className="h-1 bg-cold-grey/30 rounded" />
                <div className="h-1 bg-cold-grey/30 rounded w-2/3" />
              </div>
            </div>
          </div>
          <p
            className="text-sm text-secondary"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {t('proof.left')}
          </p>
        </div>

        {/* Vertical copper hairline */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-copper/30 -translate-x-1/2" />

        {/* Warm copper half - Portfolio */}
        <div className="relative bg-gradient-to-br from-highlight via-blush/30 to-porcelain p-12 md:p-16 flex flex-col justify-center items-center text-center overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 bg-copper/5 rounded-full blur-3xl" />

          {/* Portfolio screen mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <div className="w-64 h-44 bg-ink rounded-xl shadow-2xl p-2 relative">
              <div className="w-full h-full bg-porcelain rounded-lg overflow-hidden">
                <div className="p-3 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-copper/50" />
                    <div className="w-2 h-2 rounded-full bg-blush" />
                    <div className="w-2 h-2 rounded-full bg-cold-grey" />
                  </div>
                  <div className="h-3 bg-copper/20 rounded w-3/4" />
                  <div className="h-2 bg-cold-grey/30 rounded" />
                  <div className="grid grid-cols-2 gap-1.5 mt-2">
                    <div className="h-12 bg-highlight rounded" />
                    <div className="h-12 bg-blush/40 rounded" />
                  </div>
                </div>
              </div>
              {/* Screen glow */}
              <div className="absolute -inset-2 bg-copper/10 rounded-2xl blur-xl -z-10" />
            </div>
          </motion.div>

          <p
            className="text-sm text-copper-deep"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {t('proof.right')}
          </p>
        </div>
      </div>

      {/* Headline overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-ink bg-porcelain/80 backdrop-blur-sm px-8 py-4 rounded-lg border border-copper/20"
          style={{ fontFamily: locale === 'ar' ? 'var(--font-display-ar)' : 'var(--font-display-en)' }}
        >
          {t('proof.headline')}
        </motion.h2>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <p
          className="text-xs tracking-[0.3em] text-copper-deep uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {t('proof.tagline')}
        </p>
      </div>

      {/* Coin edge bottom */}
      <div className="coin-edge" />
    </section>
  );
}

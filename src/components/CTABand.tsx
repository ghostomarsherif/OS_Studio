import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n';
import { MessageCircle, Send } from 'lucide-react';

export default function CTABand() {
  const { t, locale } = useI18n();
  const [formData, setFormData] = useState({ name: '', profession: '', phone: '', goal: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: would send to endpoint
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24">
      {/* Coin edge top */}
      <div className="coin-edge" />

      {/* Blush gradient background */}
      <div className="bg-gradient-to-b from-highlight via-blush/30 to-porcelain py-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-ink mb-4"
              style={{ fontFamily: locale === 'ar' ? 'var(--font-display-ar)' : 'var(--font-display-en)' }}
            >
              {t('cta.headline')}
            </h2>
            <p className="text-secondary max-w-xl mx-auto">
              {t('cta.sub')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: locale === 'ar' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-start"
            >
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#20b858] transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <MessageCircle size={24} />
                {t('cta.whatsapp')}
              </a>
              <p className="text-sm text-secondary mt-4">
                {locale === 'ar' ? 'أو ابعتلنا رسالة في أي وقت' : 'Or send us a message anytime'}
              </p>
            </motion.div>

            {/* Contact form */}
            <motion.form
              initial={{ opacity: 0, x: locale === 'ar' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-4 bg-porcelain/80 backdrop-blur-sm p-8 rounded-2xl border border-copper/15"
            >
              <div>
                <label className="block text-xs text-secondary mb-1" style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}>
                  {t('cta.form.name')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-porcelain border border-copper/20 rounded-lg text-sm focus:outline-none focus:border-copper transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-secondary mb-1" style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}>
                  {t('cta.form.profession')}
                </label>
                <input
                  type="text"
                  value={formData.profession}
                  onChange={e => setFormData({ ...formData, profession: e.target.value })}
                  className="w-full px-4 py-2.5 bg-porcelain border border-copper/20 rounded-lg text-sm focus:outline-none focus:border-copper transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-secondary mb-1" style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}>
                  {t('cta.form.phone')}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-porcelain border border-copper/20 rounded-lg text-sm focus:outline-none focus:border-copper transition-colors"
                  dir="ltr"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-secondary mb-1" style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}>
                  {t('cta.form.goal')}
                </label>
                <textarea
                  value={formData.goal}
                  onChange={e => setFormData({ ...formData, goal: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-porcelain border border-copper/20 rounded-lg text-sm focus:outline-none focus:border-copper transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-copper text-porcelain py-3 rounded-full font-medium hover:bg-copper-deep transition-all hover:scale-[1.02] active:scale-95"
              >
                {submitted ? (locale === 'ar' ? '✓ تم الإرسال' : '✓ Sent!') : (
                  <>
                    <Send size={16} />
                    {t('cta.form.submit')}
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Coin edge bottom */}
      <div className="coin-edge" />
    </section>
  );
}

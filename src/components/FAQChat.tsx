import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n';
import { MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQChat() {
  const { t, locale } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
  ];

  const timestamps = ['10:01', '10:02', '10:03', '10:04', '10:05', '10:06'];

  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-3xl mx-auto px-6">
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
            FAQ
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-ink"
            style={{ fontFamily: locale === 'ar' ? 'var(--font-display-ar)' : 'var(--font-display-en)' }}
          >
            {t('faq.title')}
          </h2>
        </motion.div>

        {/* Chat thread */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* User question bubble */}
              <div className={`flex items-start gap-3 mb-3 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                {/* User avatar */}
                <div className="w-8 h-8 rounded-full bg-cold-grey/40 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={14} className="text-secondary" />
                </div>

                {/* Question bubble */}
                <div className="bg-cold-grey/20 border border-copper/10 rounded-2xl rounded-tl-sm px-5 py-3 max-w-md">
                  <p
                    className="text-sm font-medium text-ink"
                    style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
                  >
                    {faq.question}
                  </p>
                  <span
                    className="text-[10px] text-secondary mt-1 block"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {timestamps[i]}
                  </span>
                </div>
              </div>

              {/* OS answer bubble */}
              <div className={`flex items-start gap-3 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                {/* OS medallion avatar */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 rounded-full" style={{
                    background: 'conic-gradient(from 0deg, var(--copper-deep), var(--copper), var(--blush), var(--copper), var(--copper-deep))'
                  }} />
                  <span className="relative text-[10px] font-bold text-porcelain" style={{ fontFamily: 'var(--font-ui-en)' }}>OS</span>
                </div>

                {/* Answer bubble */}
                <div className="bg-porcelain border border-copper/20 rounded-2xl rounded-tr-sm px-5 py-3 max-w-md">
                  <AnimatePresence>
                    <motion.div
                      initial={false}
                      animate={{ height: 'auto' }}
                    >
                      <p
                        className="text-sm text-secondary leading-relaxed"
                        style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  <span
                    className="text-[10px] text-copper mt-2 block"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {timestamps[i]}
                  </span>
                </div>
              </div>

              {/* Consultation nudge */}
              <div className={`flex justify-end mt-2 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                <a
                  href="#contact"
                  className="text-xs text-copper-deep hover:text-copper transition-colors"
                  style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
                >
                  {t('faq.consult')}
                </a>
              </div>

              {/* Divider */}
              {i < faqs.length - 1 && (
                <div className="border-t border-copper/10 my-6" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

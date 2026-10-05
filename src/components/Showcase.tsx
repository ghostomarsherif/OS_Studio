import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n';
import { ExternalLink } from 'lucide-react';

interface PortfolioItem {
  name: string;
  profession: string;
  year: string;
  category: string;
  color: string;
}

const portfolios: PortfolioItem[] = [
  { name: 'أحمد الشريف', profession: 'مهندس معماري', year: '2024', category: 'arch', color: 'from-copper/20 to-blush/40' },
  { name: 'Nour Design', profession: 'مصممة جرافيك', year: '2024', category: 'design', color: 'from-highlight to-copper/10' },
  { name: 'Mohamed Dev', profession: 'مطور برمجيات', year: '2023', category: 'dev', color: 'from-ink/5 to-cold-grey/30' },
  { name: 'سارة للتسويق', profession: 'مديرة تسويق رقمي', year: '2024', category: 'marketing', color: 'from-blush/50 to-copper/15' },
  { name: 'HR Pro', profession: 'أخصائي موارد بشرية', year: '2023', category: 'hr', color: 'from-cold-grey/20 to-highlight' },
  { name: 'BuildCraft', profession: 'مقاولات ومشاريع', year: '2024', category: 'business', color: 'from-copper/10 to-blush/30' },
  { name: 'EduCenter', profession: 'مركز تعليمي', year: '2024', category: 'education', color: 'from-highlight/60 to-copper/10' },
  { name: 'Youssef Arch', profession: 'مهندس ديكور', year: '2023', category: 'arch', color: 'from-blush/30 to-highlight' },
];

export default function Showcase() {
  const { t, locale } = useI18n();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: t('showcase.filter.all') },
    { key: 'arch', label: t('showcase.filter.arch') },
    { key: 'marketing', label: t('showcase.filter.marketing') },
    { key: 'hr', label: t('showcase.filter.hr') },
    { key: 'dev', label: t('showcase.filter.dev') },
    { key: 'design', label: t('showcase.filter.design') },
    { key: 'business', label: t('showcase.filter.business') },
    { key: 'education', label: t('showcase.filter.education') },
  ];

  const filtered = activeFilter === 'all'
    ? portfolios
    : portfolios.filter(p => p.category === activeFilter);

  return (
    <section id="showcase" className="relative py-24 blueprint-bg">
      {/* Code glyph */}
      <span className="code-glyph top-20 end-12 hidden lg:block">&amp;</span>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-ink mb-4"
            style={{ fontFamily: locale === 'ar' ? 'var(--font-display-ar)' : 'var(--font-display-en)' }}
          >
            {t('showcase.title')}
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            {t('showcase.subtitle')}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                activeFilter === f.key
                  ? 'bg-copper text-porcelain border-copper'
                  : 'border-copper/30 text-secondary hover:border-copper hover:text-copper-deep'
              }`}
              style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name + item.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-xl border border-copper/10 hover:border-copper/40 transition-all duration-300">
                {/* Image placeholder with gradient */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 ken-burns">
                    <div className="w-full h-full flex items-center justify-center">
                      <span
                        className="text-4xl font-bold text-copper/20"
                        style={{ fontFamily: 'var(--font-display-en)' }}
                      >
                        {item.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-porcelain text-sm flex items-center gap-2"
                      style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
                    >
                      {t('showcase.view')}
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>

                {/* Copper frame on hover */}
                <div className="absolute inset-0 border-2 border-copper/0 group-hover:border-copper/60 rounded-xl transition-all duration-300" />

                {/* Info */}
                <div className="p-4">
                  <h3
                    className="font-semibold text-ink text-sm"
                    style={{ fontFamily: locale === 'ar' ? 'var(--font-body-ar)' : 'var(--font-ui-en)' }}
                  >
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-secondary">{item.profession}</span>
                    <span className="text-xs text-copper" style={{ fontFamily: 'var(--font-mono)' }}>{item.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

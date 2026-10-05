import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Locale = 'ar' | 'en';

interface I18nContextType {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'ar',
  toggleLocale: () => {},
  t: (key: string) => key,
});

const translations: Record<string, Record<Locale, string>> = {
  // Nav
  'nav.work': { ar: 'الأعمال', en: 'Work' },
  'nav.services': { ar: 'الخدمات', en: 'Services' },
  'nav.pricing': { ar: 'الأسعار', en: 'Pricing' },
  'nav.faq': { ar: 'الأسئلة', en: 'FAQ' },
  'nav.contact': { ar: 'تواصل', en: 'Contact' },
  'nav.cta': { ar: 'احجز استشارة مجانية', en: 'Book Free Consultation' },

  // Hero
  'hero.eyebrow': { ar: '{ OS STUDIO } — بورتفوليوهات رقمية احترافية', en: '{ OS STUDIO } — PROFESSIONAL DIGITAL PORTFOLIOS' },
  'hero.headline': { ar: 'بورتفوليوهات فاخرة بتخلي شغلك يتقدّم قبلك.', en: 'Luxury portfolios that apply before you do.' },
  'hero.sub': { ar: 'من أول سكيتش لآخر تفصيلة — بنحوّل شغلك لدليل فاخر يقنع أصحاب العمل والعملاء قبل ما تنطق كلمة.', en: 'From first sketch to final detail — we transform your work into a luxurious proof that convinces employers and clients before you say a word.' },
  'hero.cta1': { ar: 'احجز استشارة مجانية', en: 'Book Free Consultation' },
  'hero.cta2': { ar: 'شوف الأعمال', en: 'View Work' },
  'hero.stat1': { ar: '+40 بورتفوليو مسلّم', en: '+40 Portfolios Delivered' },
  'hero.stat2': { ar: '12 مجال مهني', en: '12 Professional Fields' },
  'hero.stat3': { ar: '14 يوم متوسط التسليم', en: '14 Days Avg. Delivery' },

  // Proof Split
  'proof.headline': { ar: 'الـ CV بيقول كلام. البورتفوليو بيورّي شغل.', en: 'A CV tells. A portfolio proves.' },
  'proof.tagline': { ar: 'دليل، مش ورق.', en: 'PROOF, NOT PAPER.' },
  'proof.left': { ar: 'CV تقليدي', en: 'Traditional CV' },
  'proof.right': { ar: 'بورتفوليو OS Studio', en: 'OS Studio Portfolio' },

  // Showcase
  'showcase.title': { ar: 'أعمال متكلمة عن أصحابها', en: 'Work That Speaks for Itself' },
  'showcase.subtitle': { ar: 'كل بورتفوليو هنا اتبنى من الصفر — محتوى، تصميم، وتطوير.', en: 'Every portfolio here was built from scratch — content, design, and development.' },
  'showcase.filter.all': { ar: 'الكل', en: 'All' },
  'showcase.filter.arch': { ar: 'مهندسين', en: 'Architects' },
  'showcase.filter.marketing': { ar: 'تسويق', en: 'Marketing' },
  'showcase.filter.hr': { ar: 'HR', en: 'HR' },
  'showcase.filter.dev': { ar: 'برمجيات', en: 'Software' },
  'showcase.filter.design': { ar: 'تصميم', en: 'Design' },
  'showcase.filter.business': { ar: 'أعمال', en: 'Business' },
  'showcase.filter.education': { ar: 'مراكز تعليمية', en: 'Education Centers' },
  'showcase.view': { ar: 'شوف البورتفوليو', en: 'View Portfolio' },

  // Process
  'process.title': { ar: 'إزاي بنشتغل', en: 'How We Work' },
  'process.subtitle': { ar: 'أربع خطوات من أول مكالمة لآخر تسليم.', en: 'Four steps from first call to final delivery.' },
  'process.step1': { ar: 'استشارة مجانية', en: 'Free Consultation' },
  'process.step1.desc': { ar: 'نتكلم عن شغلك، أهدافك، وإزاي البورتفوليو يخدمك.', en: 'We discuss your work, goals, and how a portfolio serves you.' },
  'process.step2': { ar: 'مقابلة انتقاء المحتوى', en: 'Content Curation Interview' },
  'process.step2.desc': { ar: 'بنختار معاك أقوى مشاريعك ونصيغ قصتها.', en: 'We select your strongest projects together and craft their story.' },
  'process.step3': { ar: 'تصميم وبناء', en: 'Design & Build' },
  'process.step3.desc': { ar: 'بنصمم ونبني البورتفوليو بخطوات واضحة ومراجعات.', en: 'We design and build with clear milestones and reviews.' },
  'process.step4': { ar: 'إطلاق وتسليم + تدريب', en: 'Launch & Delivery + Training' },
  'process.step4.desc': { ar: 'بنطلق البورتفوليو وندربك على تحديثه بنفسك.', en: 'We launch your portfolio and train you to update it yourself.' },

  // Pricing
  'pricing.title': { ar: 'الباقات', en: 'Packages' },
  'pricing.subtitle': { ar: 'اختار الباقة اللي تناسب مرحلتك المهنية.', en: 'Choose the package that fits your career stage.' },
  'pricing.tier1.name': { ar: 'The Launchpad', en: 'The Launchpad' },
  'pricing.tier1.price': { ar: '٤,٥٠٠ — ٦,٥٠٠ ج.م', en: '4,500 — 6,500 EGP' },
  'pricing.tier1.desc': { ar: 'بناء قالب احترافي مع 3-4 مشاريع معروضة.', en: 'Professional template build with 3-4 showcased projects.' },
  'pricing.tier1.f1': { ar: 'قالب مخصص', en: 'Custom template' },
  'pricing.tier1.f2': { ar: '3-4 مشاريع', en: '3-4 projects' },
  'pricing.tier1.f3': { ar: 'تسليم خلال 10 أيام', en: 'Delivery in 10 days' },
  'pricing.tier1.f4': { ar: 'دومين مجاني سنة', en: 'Free domain for 1 year' },
  'pricing.tier2.name': { ar: 'The Professional', en: 'The Professional' },
  'pricing.tier2.price': { ar: '١٢,٠٠٠ — ١٨,٠٠٠ ج.م', en: '12,000 — 18,000 EGP' },
  'pricing.tier2.desc': { ar: 'بناء تحريري مخصص مع دراسات حالة ونظام إدارة محتوى.', en: 'Custom editorial build with case studies and CMS.' },
  'pricing.tier2.f1': { ar: 'تصميم مخصص بالكامل', en: 'Fully custom design' },
  'pricing.tier2.f2': { ar: 'دراسات حالة مفصّلة', en: 'Detailed case studies' },
  'pricing.tier2.f3': { ar: 'نظام إدارة محتوى', en: 'CMS integration' },
  'pricing.tier2.f4': { ar: 'SEO + سرعة محسّنة', en: 'SEO + optimized speed' },
  'pricing.tier3.name': { ar: 'The Authority', en: 'The Authority' },
  'pricing.tier3.price': { ar: '١٨,٠٠٠ — ٢٨,٠٠٠ ج.م', en: '18,000 — 28,000 EGP' },
  'pricing.tier3.desc': { ar: 'بناء تفصيلي فريد مع خطط تفاعلية وفيديو AI وميديا كيت.', en: 'Bespoke build with interactive plans, Runway AI video, and media kit.' },
  'pricing.tier3.f1': { ar: 'بناء تفصيلي فريد', en: 'Fully bespoke build' },
  'pricing.tier3.f2': { ar: 'خطط تفاعلية', en: 'Interactive plans' },
  'pricing.tier3.f3': { ar: 'فيديو Runway AI', en: 'Runway AI video' },
  'pricing.tier3.f4': { ar: 'ميديا كيت احترافي', en: 'Professional media kit' },
  'pricing.retainer': { ar: 'The Curator — ٤,٠٠٠ إلى ٨,٠٠٠ ج.م/شهر', en: 'The Curator — 4,000 to 8,000 EGP/month' },
  'pricing.retainer.desc': { ar: 'تحديثات مستمرة، محتوى جديد، وصيانة شهرية.', en: 'Ongoing updates, new content, and monthly maintenance.' },
  'pricing.installment': { ar: 'تقسيط متاح عبر ValU / Sympl', en: 'Installments via ValU / Sympl' },
  'pricing.deposit': { ar: '50% مقدم', en: '50% deposit' },

  // Testimonials
  'testimonials.title': { ar: 'عملاء قالوا كلمتهم', en: 'What Clients Say' },
  'testimonials.t1': { ar: '"البورتفوليو غيّر طريقة العملاء في التعامل معايا. بقت الثقة من أول نظرة."', en: '"The portfolio changed how clients approach me. Trust starts from the first look."' },
  'testimonials.t1.name': { ar: 'أحمد م. — مهندس معماري', en: 'Ahmed M. — Architect' },
  'testimonials.t2': { ar: '"فريق OS Studio فهم شغلي أسرع مني. النتيجة فاقت توقعاتي."', en: '"OS Studio understood my work faster than I could explain it. The result exceeded my expectations."' },
  'testimonials.t2.name': { ar: 'نورهان ع. — مديرة تسويق', en: 'Nourhan A. — Marketing Manager' },
  'testimonials.t3': { ar: '"قدمت على وظيفة والبورتفوليو كان سبب المقابلة. شكراً OS Studio."', en: '"I applied for a job and the portfolio was the reason for the interview. Thank you OS Studio."' },
  'testimonials.t3.name': { ar: 'محمد خ. — مطور برمجيات', en: 'Mohamed K. — Software Developer' },
  'testimonials.t4': { ar: '"الاحترافية في كل تفصيلة. من أول مكالمة لآخر تسليم."', en: '"Professionalism in every detail. From the first call to the final delivery."' },
  'testimonials.t4.name': { ar: 'سارة ح. — مصممة جرافيك', en: 'Sara H. — Graphic Designer' },

  // FAQ
  'faq.title': { ar: 'أسئلة شائعة', en: 'Frequently Asked Questions' },
  'faq.q1': { ar: 'كم التكلفة؟', en: 'How much does it cost?' },
  'faq.a1': { ar: 'الباقات تبدأ من 4,500 ج.م وتوصل لـ 28,000 ج.م حسب التعقيد. احجز استشارة مجانية ونحدد معاك الأنسب.', en: 'Packages start from 4,500 EGP up to 28,000 EGP depending on complexity. Book a free consultation and we\'ll determine what suits you best.' },
  'faq.q2': { ar: 'خطوات الشغل إيه؟', en: 'What are the work steps?' },
  'faq.a2': { ar: 'استشارة → مقابلة محتوى → تصميم وبناء → إطلاق وتسليم مع تدريب. كل خطوة واضحة وموثقة.', en: 'Consultation → Content interview → Design & build → Launch & delivery with training. Every step is clear and documented.' },
  'faq.q3': { ar: 'الدفع بيتم إزاي؟', en: 'How does payment work?' },
  'faq.a3': { ar: '50% مقدم لبدء الشغل، و50% عند التسليم. تقسيط متاح عبر ValU و Sympl.', en: '50% deposit to start, 50% on delivery. Installments available via ValU and Sympl.' },
  'faq.q4': { ar: 'بتساعدوا في كتابة المحتوى؟', en: 'Do you help with content writing?' },
  'faq.a4': { ar: 'أيوا! بنساعدك في صياغة محتوى مشاريعك بطريقة احترافية تقنع القارئ. ده جزء من الخدمة.', en: 'Yes! We help you craft your project content professionally to convince the reader. This is part of the service.' },
  'faq.q5': { ar: 'ممكن أشوف نماذج؟', en: 'Can I see samples?' },
  'faq.a5': { ar: 'طبعاً! شوف قسم الأعمال فوق، أو احجز استشارة ونوريك نماذج من نفس مجالك.', en: 'Of course! Check the work section above, or book a consultation and we\'ll show you samples from your field.' },
  'faq.q6': { ar: 'المدة قد إيه؟', en: 'How long does it take?' },
  'faq.a6': { ar: 'متوسط التسليم 14 يوم عمل. الباقات الأكبر ممكن تاخذ 3-4 أسابيع. بنحدد الموعد من أول يوم.', en: 'Average delivery is 14 business days. Larger packages may take 3-4 weeks. We set the deadline from day one.' },
  'faq.consult': { ar: '← احجز استشارة مجانية', en: '← Book a free consultation' },

  // CTA Band
  'cta.headline': { ar: 'يلا نبني دليل شغلك.', en: "Let's build your proof." },
  'cta.sub': { ar: 'ابعتلنا على واتساب أو عبّي الفورم وهنتواصل معاك في 24 ساعة.', en: 'Send us a WhatsApp or fill the form and we\'ll reach out within 24 hours.' },
  'cta.whatsapp': { ar: 'تواصل واتساب', en: 'WhatsApp Us' },
  'cta.form.name': { ar: 'الاسم', en: 'Name' },
  'cta.form.profession': { ar: 'المهنة / المجال', en: 'Profession / Field' },
  'cta.form.phone': { ar: 'رقم الواتساب', en: 'WhatsApp Number' },
  'cta.form.goal': { ar: 'هدفك من البورتفوليو', en: 'Your portfolio goal' },
  'cta.form.submit': { ar: 'ابعت الطلب', en: 'Submit Request' },

  // Footer
  'footer.tagline': { ar: 'استوديو رقمي فاخر — القاهرة، مصر', en: 'Luxury Digital Studio — Cairo, Egypt' },
  'footer.nav': { ar: 'روابط', en: 'Links' },
  'footer.contact': { ar: 'تواصل', en: 'Contact' },
  'footer.socials': { ar: 'تابعنا', en: 'Follow Us' },
  'footer.rights': { ar: '© 2025 OS Studio. جميع الحقوق محفوظة.', en: '© 2025 OS Studio. All rights reserved.' },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ar');

  const toggleLocale = useCallback(() => {
    setLocale(prev => {
      const next = prev === 'ar' ? 'en' : 'ar';
      document.documentElement.lang = next;
      document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
      return next;
    });
  }, []);

  const t = useCallback((key: string) => {
    return translations[key]?.[locale] || key;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

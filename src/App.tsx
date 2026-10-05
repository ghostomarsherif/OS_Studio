import { I18nProvider } from './i18n';
import Nav from './components/Nav';
import Hero from './components/Hero';
import CircuitDivider from './components/CircuitDivider';
import ProofSplit from './components/ProofSplit';
import Showcase from './components/Showcase';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQChat from './components/FAQChat';
import CTABand from './components/CTABand';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-porcelain text-ink relative">
        {/* Custom cursor - desktop only */}
        <CustomCursor />

        {/* Navigation */}
        <Nav />

        {/* Hero */}
        <Hero />

        {/* Circuit Divider */}
        <CircuitDivider variant="complex" />

        {/* Proof Split */}
        <ProofSplit />

        {/* Circuit Divider */}
        <CircuitDivider />

        {/* Showcase Grid */}
        <Showcase />

        {/* Circuit Divider */}
        <CircuitDivider variant="complex" />

        {/* Process */}
        <Process />

        {/* Circuit Divider */}
        <CircuitDivider />

        {/* Pricing */}
        <Pricing />

        {/* Testimonials */}
        <Testimonials />

        {/* Circuit Divider */}
        <CircuitDivider variant="complex" />

        {/* FAQ Chat */}
        <FAQChat />

        {/* CTA Band */}
        <CTABand />

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}

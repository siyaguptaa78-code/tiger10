import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SportsShowcase from '@/components/SportsShowcase';
import OurServices from '@/components/OurServices';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import CricketFeatures from '@/components/CricketFeatures';
import ServiceCards from '@/components/ServiceCards';
import PaymentSupport from '@/components/PaymentSupport';
import FAQSection from '@/components/FAQSection';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tiger 365 ID – Get Your Online Cricket Betting ID | Tiger365',
  description:
    'Tiger365 ID is your trusted online cricket betting ID provider. Get instant access to premium sports betting, live cricket, casino games, and Aviator with 24/7 support. INR accepted.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tiger 365 ID – Get Your Online Cricket Betting ID | Tiger365',
    description:
      'Tiger365 ID is your trusted online cricket betting ID provider. Get instant access to premium sports betting, live cricket, casino games, and Aviator with 24/7 support. INR accepted.',
    url: 'https://tiger365bookie.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiger 365 ID – Get Your Online Cricket Betting ID | Tiger365',
    description:
      'Tiger365 ID is your trusted online cricket betting ID provider. Get instant access to premium sports betting, live cricket, casino games, and Aviator with 24/7 support. INR accepted.',
  },
};

export default function HomePage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* Informational note banner */}
      <div className="w-full bg-blue-950/60 border-b border-blue-500/20 py-2 px-4 text-center z-50 relative">
        <p className="text-xs text-blue-300/80 max-w-5xl mx-auto">
          <span className="font-semibold">Note:</span> tiger365bookie.com is an informational website only and does not offer betting services.
        </p>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Sports Showcase */}
      <SportsShowcase />

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Our Services */}
      <OurServices />

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* About */}
      <AboutSection />

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Team */}
      <TeamSection />

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Cricket Features */}
      <CricketFeatures />

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Service Cards */}
      <ServiceCards />

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Payment & Support */}
      <PaymentSupport />

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* FAQ */}
      <FAQSection />

      {/* Disclaimer */}
      <Disclaimer />

      {/* Footer (includes WhatsApp float) */}
      <Footer />
    </main>
  );
}

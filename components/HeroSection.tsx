'use client';

import { useEffect, useRef } from 'react';
import { WA_LINK } from './constants';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-gradient"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/3 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                #1 Online Cricket ID Provider
              </span>
            </div>

            {/* Main Heading */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-blue-500 blue-glow-text">Tiger</span>
                <span className="text-white">365</span>
                <span className="text-blue-400">id</span>
              </h1>
              <p className="mt-4 text-2xl sm:text-3xl font-bold text-white leading-snug">
                The Future Of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
                  Professional Gaming
                </span>{' '}
                Starts Today
              </p>
            </div>

            {/* Description */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Get your Official Tiger365 ID and Enjoy Cricket Betting , Live Sports & Casino Gaming<br/>
                Secure And Instant With 247 Customer Support
              </p>
            </div>

            {/* Stats */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <div className="flex flex-wrap gap-8">
                {[
                  { value: '10K+', label: 'Active Players' },
                  { value: '24/7', label: 'Support' },
                  { value: '100%', label: 'Secure' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-black text-blue-500">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400">
              <div className="flex flex-wrap gap-4">
                <a
                  href={WA_LINK}
                  id="hero-cta-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue flex items-center gap-3 text-white font-bold px-8 py-4 rounded-full text-lg uppercase tracking-wider animate-pulse-blue"
                >
                  {/* WhatsApp Icon */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  GET TIGER 365 ID
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Instant Activation
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  INR Accepted
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Encrypted & Secured
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Mobile App Screenshot */}
          <div className="flex justify-center lg:justify-end animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl scale-110"></div>

              {/* Phone frame */}
              <div className="relative w-72 sm:w-80 animate-float">
                <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] border-2 border-blue-500/30 shadow-2xl overflow-hidden p-2">
                  {/* Phone notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>

                  {/* App content mockup */}
                  <div className="bg-gradient-to-b from-blue-950 to-gray-950 rounded-[2rem] overflow-hidden min-h-[600px]">
                    {/* App header */}
                    <div className="bg-blue-600 px-4 py-4 pt-8">
                      <div className="text-white font-black text-xl text-center">Tiger365 ID</div>
                      <div className="text-blue-200 text-xs text-center mt-1">Live Cricket Betting</div>
                    </div>

                    {/* Live match banner */}
                    <div className="m-3 bg-blue-500/20 border border-blue-500/30 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-red-400 font-bold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                          LIVE
                        </span>
                        <span className="text-xs text-gray-400">T20 World Cup</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="text-white font-bold text-sm">IND</div>
                          <div className="text-blue-400 font-black text-lg">186/4</div>
                          <div className="text-gray-400 text-xs">18.3 ov</div>
                        </div>
                        <div className="text-blue-500 font-bold text-sm">VS</div>
                        <div className="text-center">
                          <div className="text-white font-bold text-sm">AUS</div>
                          <div className="text-gray-400 font-black text-lg">--/--</div>
                          <div className="text-gray-400 text-xs">Yet to bat</div>
                        </div>
                      </div>
                    </div>

                    {/* Bet options */}
                    <div className="m-3 space-y-2">
                      <div className="text-xs text-gray-400 uppercase tracking-wider px-1">Popular Bets</div>
                      {[
                        { team: 'India Win', odds: '1.85', hot: true },
                        { team: 'Australia Win', odds: '2.10', hot: false },
                        { team: 'Super Over', odds: '8.50', hot: false },
                      ].map((bet) => (
                        <div key={bet.team} className="flex items-center justify-between bg-gray-900/50 rounded-lg px-3 py-2 border border-gray-800">
                          <span className="text-white text-sm">{bet.team}</span>
                          <div className="flex items-center gap-2">
                            {bet.hot && <span className="text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded">HOT</span>}
                            <span className="text-blue-400 font-bold">{bet.odds}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom nav */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-800 flex justify-around py-3 px-6">
                      {['🏠', '🏏', '⚽', '🎮', '👤'].map((icon, i) => (
                        <span key={i} className={`text-xl ${i === 1 ? 'text-blue-500' : 'text-gray-600'}`}>{icon}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -right-8 top-1/4 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  ⚡ Live Odds
                </div>
                <div className="absolute -left-8 bottom-1/3 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  ✅ Secure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
}

'use client';

import { WA_LINK } from './constants';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 relative overflow-hidden bg-[#0d0d0d]">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(rgba(249,115,22,0.4) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Section heading */}
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-blue-500"></div>
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-sm">Team Members</span>
          <div className="w-8 h-px bg-blue-500"></div>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
          TEAM <span className="text-blue-500">MEMBERS</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Our experienced team of gaming specialists and customer support executives are available 247 to ensure that you have a seamless experience. From account opening assistance to live betting support, our team is here to help you
        </p>

        {/* Team avatars */}
        <div className="flex justify-center -space-x-4 mb-12">
          {['👨‍💼', '👩‍💼', '👨‍💻', '👩‍💻', '👨‍🔧', '👩‍🔧'].map((emoji, i) => (
            <div
              key={i}
              className="relative w-14 h-14 rounded-full border-2 border-blue-500/40 bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 hover:z-10"
              style={{ zIndex: i }}
            >
              {emoji}
            </div>
          ))}
          <div
            className="relative w-14 h-14 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center text-white text-xs font-bold"
            style={{ zIndex: 7 }}
          >
            +50
          </div>
        </div>

        {/* Availability badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { icon: '⚡', label: 'Instant Response' },
            { icon: '🔒', label: '100% Secure' },
            { icon: '🕐', label: '24/7 Available' },
            { icon: '🌟', label: 'Expert Support' },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2"
            >
              <span className="text-lg">{badge.icon}</span>
              <span className="text-gray-300 text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Big play more text */}
        <div className="py-12 px-8 bg-gradient-to-r from-blue-950/50 via-black to-blue-950/50 rounded-3xl border border-blue-500/20 mb-10">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none">
            <span className="text-white">PLAY</span>{' '}
            <span className="text-blue-500">MORE!</span>
          </div>
          <div className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none mt-2">
            <span className="text-white">EARN</span>{' '}
            <span className="text-blue-400">MORE!</span>
          </div>
          <div className="mt-6 text-gray-500 text-lg">
            Join thousands of players who are already winning big with Tiger365 ID
          </div>
        </div>

        {/* CTA */}
        <a
          href={WA_LINK}
          id="team-cta"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-blue inline-flex items-center gap-3 text-white font-bold px-10 py-5 rounded-full text-xl uppercase tracking-wider"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          GET TIGER 365 ID
        </a>
      </div>
    </section>
  );
}

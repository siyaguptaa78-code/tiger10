'use client';

import { WA_LINK } from './constants';

const serviceCards = [
  {
    id: 'customer-service',
    title: '247 Customer Service',
    description: 'Our expert team is available round the clock to assist you in all manner of ways',
    emoji: '🎧',
    badge: '24/7 Live',
    features: ['Instant WhatsApp Support', 'Quick Response Time', 'Expert Assistance'],
  },
  {
    id: 'deposit-withdrawal',
    title: 'Easy Deposit and Withdrawal',
    description: 'Enjoy fast and secure deposits and withdrawals with multiple payment options',
    emoji: '💸',
    badge: 'Fast & Secure',
    features: ['UPI / IMPS / Bank Transfer', 'INR Supported', 'Instant Processing'],
  },
  {
    id: 'bonus',
    title: 'Bonus & Rewards',
    description: 'Claim your bonuses for every transaction, reward points and much more',
    emoji: '🎁',
    badge: 'Exclusive',
    features: ['Welcome Bonus', 'Referral Rewards', 'Weekly Cashback'],
  },
];

export default function ServiceCards() {
  return (
    <section id="service-cards" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            Our Core Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Why <span className="text-blue-500">Tiger365?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-400 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              id={`service-card-${card.id}`}
              className="group relative bg-[#1a1a1a] border border-blue-500/20 hover:border-blue-500/60 rounded-2xl p-8 transition-all duration-400 hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2 flex flex-col"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-6 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-blue-400 text-xs font-bold">{card.badge}</span>
              </div>

              {/* Icon */}
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {card.emoji}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-50 transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6 flex-1 group-hover:text-gray-300 transition-colors duration-300">
                {card.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2 mb-8">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={WA_LINK}
                id={`service-card-cta-${card.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-blue flex items-center justify-center gap-2 text-white font-bold py-3 px-6 rounded-full text-sm uppercase tracking-wider w-full"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                GET TIGER 365 ID
              </a>

              {/* Bottom gradient glow */}
              <div className="absolute -bottom-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

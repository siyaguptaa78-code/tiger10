'use client';

const supportBullets = [
  { icon: '👤', title: 'Personalized Assistance', desc: 'Dedicated agents assigned to you for personalized assistance' },
  { icon: '🕐', title: '24/7 Support', desc: 'We are always here to help you out 24/7 via WhatsApp, chat and call' },
  { icon: '📞', title: 'Multiple Contact Options', desc: 'You can contact us anytime via WhatsApp, Telegram or Email' },
];

const paymentBullets = [
  { icon: '⚡', title: 'Fast Transactions', desc: 'Deposits credited instantly and withdrawals processed same day' },
  { icon: '🌍', title: 'Local Currency Support', desc: 'All transactions in local INR currency with local banks' },
  { icon: '₹', title: 'INR Accepted', desc: 'We support INR currency' },
];

export default function PaymentSupport() {
  return (
    <section id="payment-support" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            Payments & Support
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Payment and Support options that help us provide you with fast and secure services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-400 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Support Column */}
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300 group">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">
                🎧
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Dedicated Support Team</h3>
                <p className="text-blue-400 text-sm font-medium">Always here for you</p>
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-6">
              {supportBullets.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment logos */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-gray-600 text-xs uppercase tracking-wider mb-4">Contact Via</p>
              <div className="flex gap-3 flex-wrap">
                {['WhatsApp', 'Telegram', 'Email'].map((method) => (
                  <span key={method} className="bg-gray-900 border border-gray-700 text-gray-400 text-xs px-3 py-1.5 rounded-full">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Column */}
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300 group">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">
                💳
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Quick and Easy Payment Options</h3>
                <p className="text-blue-400 text-sm font-medium">Make deposits instantly and withdraw anytime, anywhere</p>
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-6">
              {paymentBullets.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment method badges */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-gray-600 text-xs uppercase tracking-wider mb-4">Accepted Payment Methods</p>
              <div className="flex gap-3 flex-wrap">
                {['UPI', 'IMPS', 'Bank Transfer', 'INR'].map((method) => (
                  <span key={method} className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs px-3 py-1.5 rounded-full font-medium">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

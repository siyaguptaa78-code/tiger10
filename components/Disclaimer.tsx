'use client';

export default function Disclaimer() {
  return (
    <section id="disclaimer" className="py-10 bg-black border-t border-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] border border-blue-500/10 rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-3">
            {/* Warning icon */}
            <div className="flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-blue-500/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-blue-500/80 font-bold text-sm uppercase tracking-wider mb-3">Disclaimer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold text-gray-500">Note: tiger365bookie.com is an informational website only and does not offer betting services.</span>{' '}
                This website is intended solely for informational and educational purposes. We do not operate a betting or gambling platform. 
                We facilitate the provision of online gaming IDs and do not directly engage in any form of sports betting or wagering. 
                Users are solely responsible for ensuring that accessing such services is legal in their respective jurisdictions. 
                We are not liable for any financial losses, legal issues, or other consequences arising from the use of gaming IDs obtained through our platform. 
                Please verify the legality of online betting in your region before proceeding. By using this website, you acknowledge 
                and agree to this disclaimer. Gambling can be addictive — please bet responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

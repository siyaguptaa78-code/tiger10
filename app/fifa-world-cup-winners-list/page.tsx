import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import FifaFAQSection from '@/components/FifaFAQ';
import { WA_LINK } from '@/components/constants';

export const metadata: Metadata = {
  title: 'FIFA World Cup Winners List: All Champions',
  description: 'Every FIFA World Cup winner from 1930 to today, titles by country, and the 2026 final. The complete list, updated the moment a new champion is crowned.',
  alternates: {
    canonical: '/fifa-world-cup-winners-list/',
  },
  openGraph: {
    title: 'FIFA World Cup Winners List: All Champions',
    description: 'Every FIFA World Cup winner from 1930 to today, titles by country, and the 2026 final. The complete list, updated the moment a new champion is crowned.',
    url: 'https://tiger365bookie.com/fifa-world-cup-winners-list/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIFA World Cup Winners List: All Champions',
    description: 'Every FIFA World Cup winner from 1930 to today, titles by country, and the 2026 final. The complete list, updated the moment a new champion is crowned.',
  },
};

const winnersData = [
  { year: '1930', winner: 'Uruguay', runnerUp: 'Argentina', host: 'Uruguay' },
  { year: '1934', winner: 'Italy', runnerUp: 'Czechoslovakia', host: 'Italy' },
  { year: '1938', winner: 'Italy', runnerUp: 'Hungary', host: 'France' },
  { year: '1950', winner: 'Uruguay', runnerUp: 'Brazil', host: 'Brazil' },
  { year: '1954', winner: 'West Germany', runnerUp: 'Hungary', host: 'Switzerland' },
  { year: '1958', winner: 'Brazil', runnerUp: 'Sweden', host: 'Sweden' },
  { year: '1962', winner: 'Brazil', runnerUp: 'Czechoslovakia', host: 'Chile' },
  { year: '1966', winner: 'England', runnerUp: 'West Germany', host: 'England' },
  { year: '1970', winner: 'Brazil', runnerUp: 'Italy', host: 'Mexico' },
  { year: '1974', winner: 'West Germany', runnerUp: 'Netherlands', host: 'West Germany' },
  { year: '1978', winner: 'Argentina', runnerUp: 'Netherlands', host: 'Argentina' },
  { year: '1982', winner: 'Italy', runnerUp: 'West Germany', host: 'Spain' },
  { year: '1986', winner: 'Argentina', runnerUp: 'West Germany', host: 'Mexico' },
  { year: '1990', winner: 'West Germany', runnerUp: 'Argentina', host: 'Italy' },
  { year: '1994', winner: 'Brazil', runnerUp: 'Italy', host: 'USA' },
  { year: '1998', winner: 'France', runnerUp: 'Brazil', host: 'France' },
  { year: '2002', winner: 'Brazil', runnerUp: 'Germany', host: 'South Korea & Japan' },
  { year: '2006', winner: 'Italy', runnerUp: 'France', host: 'Germany' },
  { year: '2010', winner: 'Spain', runnerUp: 'Netherlands', host: 'South Africa' },
  { year: '2014', winner: 'Germany', runnerUp: 'Argentina', host: 'Brazil' },
  { year: '2018', winner: 'France', runnerUp: 'Croatia', host: 'Russia' },
  { year: '2022', winner: 'Argentina', runnerUp: 'France', host: 'Qatar' },
];

const titlesData = [
  { country: 'Brazil', titles: '5', years: '1958, 1962, 1970, 1994, 2002' },
  { country: 'Germany (incl. West Germany)', titles: '4', years: '1954, 1974, 1990, 2014' },
  { country: 'Italy', titles: '4', years: '1934, 1938, 1982, 2006' },
  { country: 'Argentina', titles: '3', years: '1978, 1986, 2022' },
  { country: 'Uruguay', titles: '2', years: '1930, 1950' },
  { country: 'France', titles: '2', years: '1998, 2018' },
  { country: 'England', titles: '1', years: '1966' },
  { country: 'Spain', titles: '1', years: '2010' },
];

export default function FifaWinnersPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Info banner */}
      <div className="w-full bg-blue-950/60 border-b border-blue-500/20 py-2 px-4 text-center">
        <p className="text-xs text-blue-300/80">
          <span className="font-semibold">Note:</span> tiger365bookie.com is an informational website only and does not offer betting services.
        </p>
      </div>

      <Navbar />

      <article className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium mb-8 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20">
                Football
              </span>
              <span className="text-gray-500 text-xs">5 min read</span>
              <span className="text-gray-500 text-xs">•</span>
              <span className="text-gray-500 text-xs">July 10, 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
              FIFA World Cup Winners List: All Champions
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-400 rounded-full mb-8"></div>
          </header>

          {/* Feature/Emoji banner */}
          <div className="bg-gradient-to-r from-yellow-900/30 to-black border border-gray-800 rounded-3xl p-12 text-center text-7xl mb-10 shadow-2xl">
            🏆
          </div>

          {/* Body and Sidebar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 text-gray-300 leading-relaxed text-base sm:text-lg space-y-6">
              <p className="mb-6">
                Twenty-two editions of the FIFA World Cup have crowned just eight different champions — football&apos;s biggest prize is also its most exclusive club. The twenty-third champion is days away: the 2026 final, the climax of the first 48-team World Cup across the USA, Mexico and Canada, is played on 19 July 2026 at MetLife Stadium. This page updates the moment it ends.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Every winner since 1930:</h2>
              
              {/* Table 1: FIFA World Cup Winners (1930–2026) */}
              <div className="overflow-x-auto my-6 border border-gray-800 rounded-2xl shadow-xl">
                <table className="min-w-full divide-y divide-gray-800 bg-[#111111]">
                  <thead className="bg-[#181818]">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Year</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Winner</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Runner-up</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Host</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/60 text-gray-300">
                    {winnersData.map((row) => (
                      <tr key={row.year} className="hover:bg-gray-900/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{row.year}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">{row.winner}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{row.runnerUp}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{row.host}</td>
                      </tr>
                    ))}
                    {/* 2026 row highlighted */}
                    <tr className="bg-blue-950/20 text-blue-300 border-t border-blue-500/20">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-400">2026</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-amber-400">Final: 19 July 2026</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">—</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">USA, Mexico & Canada</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2: Most World Cup Titles */}
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Most World Cup Titles</h2>
              <div className="overflow-x-auto my-6 border border-gray-800 rounded-2xl shadow-xl">
                <table className="min-w-full divide-y divide-gray-800 bg-[#111111]">
                  <thead className="bg-[#181818]">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Country</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Titles</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">Years</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/60 text-gray-300">
                    {titlesData.map((row) => (
                      <tr key={row.country} className="hover:bg-gray-900/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">{row.country}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-amber-400">{row.titles}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{row.years}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mb-6">
                Brazil remain the only nation to play every World Cup and the only five-time champion — but they haven&apos;t won since 2002, the longest drought in their history. Argentina&apos;s 2022 triumph in Qatar, sealed by Lionel Messi in arguably the greatest final ever played, is the most recent entry.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">The 2026 Final</h2>
              <p className="mb-6">
                The first 48-team World Cup has been a month-long sprawl across three countries and sixteen host cities, and it ends at MetLife Stadium, New Jersey, on 19 July 2026. This section will carry the finalists, the result and the records the moment the trophy is lifted — check back after full-time.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">What&apos;s Next: 2030</h2>
              <p className="mb-6">
                The 2030 World Cup will be the strangest ever staged: hosted across Spain, Portugal and Morocco, with three opening centenary matches in Uruguay, Argentina and Paraguay to mark 100 years since the first tournament in Montevideo. Six countries, three continents, one trophy. Between now and then: qualification begins across confederations from 2027.
              </p>

              {/* FAQs Section */}
              <h2 className="text-2xl font-bold text-white mt-12 mb-6">FIFA World Cup Winners: FAQs</h2>
              <FifaFAQSection />

              {/* Footer Note */}
              <p className="text-xs text-gray-600 mt-10 border-t border-gray-900 pt-6">
                Last updated: 10 July 2026. The 2026 champion will be added immediately after the final on 19 July. Results per FIFA records.
              </p>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-[#111111] border border-blue-500/20 rounded-2xl p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-3 block">🐯</span>
                  <h3 className="text-xl font-bold text-white mb-2">Get Your Cricket ID</h3>
                  <p className="text-xs text-gray-400">Join India&apos;s most trusted gaming exchange platform. 24/7 service.</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>100% Trusted & Secure</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>Instant Refills & Cashout</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>24/7 WhatsApp Support</span>
                  </div>
                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue flex items-center justify-center gap-2 text-white font-bold py-3.5 px-6 rounded-full text-sm uppercase tracking-wider w-full text-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Get ID Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { WA_LINK } from '@/components/constants';

const blogPosts = [
  {
    id: 'ipl-betting-tips-2024',
    title: 'Top IPL Betting Tips for 2026 Season',
    excerpt: 'Get the best strategies for IPL betting this season. Learn how to analyze team performance, pitch conditions, and player form to maximize your winnings.',
    category: 'Cricket Betting',
    date: 'June 1, 2026',
    readTime: '5 min read',
    emoji: '🏏',
    color: 'from-blue-900/30 to-black',
    content: `
      <p class="mb-6">The Indian Premier League (IPL) 2026 is set to be one of the most exciting tournaments in cricket history. With teams packed with international stars and emerging domestic talents, betting on IPL matches requires deep analysis and a strategic approach. Here is our comprehensive guide to help you make informed decisions and get the most out of your Tiger365 ID.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">1. Understand Pitch and Weather Conditions</h3>
      <p class="mb-6">Pitch conditions play a vital role in the outcome of T20 matches in India. Venues like Wankhede (Mumbai) and Chinnaswamy (Bengaluru) are historically high-scoring due to short boundaries and flat wickets, making them ideal for backing the team chasing. On the other hand, slow, spin-friendly pitches like Chepauk (Chennai) favor teams with quality spin bowlers and require a different strategy.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">2. Analyze Player Form and Matchups</h3>
      <p class="mb-6">Pre-match matchups are highly critical. Check head-to-head stats of key batsmen against specific bowlers. For instance, if an opening batsman struggles against left-arm fast bowling, look at the opponent's bowling attack. Using your Tiger365 exchange ID, you can capitalize on these specific matchups live as they unfold.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">3. Live Betting is Key</h3>
      <p class="mb-6">T20 cricket swings rapidly. Backing a team before the match begins might offer lower odds compared to wait-and-watch tactics. Live betting on the Tiger365 platform allows you to assess the game's tempo, the dew factor in night matches, and the exact match situation before placing your bets.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">4. Manage Your Bankroll Wisely</h3>
      <p class="mb-6">Never wager more than you can afford to lose. Set a budget for the entire IPL season and divide it into smaller units. Typically, you should not stake more than 2% to 5% of your total bankroll on a single match.</p>
    `
  },
  {
    id: 't20-world-cup-guide',
    title: 'Complete Guide to T20 World Cup Betting',
    excerpt: 'Everything you need to know about betting on the T20 World Cup. Markets, odds, and expert predictions to help you make informed decisions.',
    category: 'Tournament Guide',
    date: 'May 28, 2026',
    readTime: '7 min read',
    emoji: '🏆',
    color: 'from-yellow-900/30 to-black',
    content: `
      <p class="mb-6">The T20 World Cup brings together the best international cricket teams in the ultimate showcase of speed and skill. With matches happening in quick succession across varied international pitches, tournament betting offers a unique set of opportunities and challenges. This guide will walk you through the essential strategies for T20 World Cup betting using your Tiger365 Online ID.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">1. Spotting Value in Group Stages</h3>
      <p class="mb-6">During the early group phases, top-tier teams often face associate nations. While the outright winner odds for the favorites will be very low, value can be found in alternative markets such as "Top Team Batsman", "Total Sixes in the Match", or "Highest Opening Partnership". Analyze the associative teams carefully—sometimes their spin bowlers can restrict bigger teams, leading to interesting under/over run-total bets.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">2. The Importance of Dew Factor</h3>
      <p class="mb-6">In day-night matches, especially in subcontinental regions, dew plays a massive role in the second innings. It makes the ball slippery, making spin bowling difficult and helping batsmen hit the ball easily. Historically, teams winning the toss choose to bowl first in such conditions. Factor this into your live betting strategy on Tiger365.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">3. Analyze Squad Depth and Rotation</h3>
      <p class="mb-6">Multi-week tournaments are physically demanding. Teams with strong bench strength and all-rounders have a clear advantage. Check for injuries and player fatigue, as rotation policies might rest key players in less critical matches, affecting the outcome.</p>
    `
  },
  {
    id: 'aviator-game-strategy',
    title: 'Aviator Game Strategy: How to Play Smart',
    excerpt: 'Master the Aviator crash game with these proven strategies. Understand the mechanics, manage your bankroll, and know when to cash out.',
    category: 'Casino Games',
    date: 'May 25, 2026',
    readTime: '4 min read',
    emoji: '✈️',
    color: 'from-blue-900/30 to-black',
    content: `
      <p class="mb-6">Aviator is one of the most popular crash games available on modern gaming platforms. Its simple premise—cashing out before the airplane flies away—is incredibly engaging. However, to win consistently, you need more than luck. You need a structured strategy. Here is how you can play smart and increase your success rate on Tiger365.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">1. Understand the Mechanics</h3>
      <p class="mb-6">Aviator works on a Provably Fair algorithm, which means every round is completely transparent and random. The multiplier starts at 1.00x and can grow infinitely, but the plane can fly away at any moment. There is no way to predict the exact time, but you can manage your risks.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">2. The Double Bet Strategy</h3>
      <p class="mb-6">This is one of the most effective strategies for Aviator. Place two bets before the round starts:</p>
      <ul class="list-disc list-inside mb-6 space-y-2 text-gray-300">
        <li><strong>Bet 1:</strong> Make it larger, and set the auto-cashout to 1.50x. This is designed to cover the stake of both bets if won.</li>
        <li><strong>Bet 2:</strong> Make it smaller, and let it ride to higher multipliers (e.g., 3.00x, 5.00x, or even more) to lock in pure profits.</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">3. Set Strict Stop-Loss Limits</h3>
      <p class="mb-6">Crash games are fast-paced, and it is easy to chase losses. Always decide on a maximum budget for your gaming session. If you hit your limit, stop playing immediately and come back another day.</p>
    `
  },
  {
    id: 'cricket-id-vs-exchange',
    title: 'Cricket ID vs Betting Exchange: What\'s the Difference?',
    excerpt: 'Confused about cricket IDs and betting exchanges? We explain the key differences, advantages, and how Tiger365 ID gives you access to both.',
    category: 'Beginner Guide',
    date: 'May 20, 2026',
    readTime: '6 min read',
    emoji: '📊',
    color: 'from-green-900/30 to-black',
    content: `
      <p class="mb-6">For newcomers to online sports gaming in India, the terminology can be confusing. You might have heard terms like "Online Cricket ID" and "Betting Exchange" used interchangeably. However, they refer to two different aspects of the gaming ecosystem. Understanding the difference is crucial for a smooth gaming journey, and Tiger365 ID gives you access to both.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">What is an Online Cricket ID?</h3>
      <p class="mb-6">Think of an Online Cricket ID as your universal passport or account. It is a secure username and password created by a trusted provider like Tiger365. This ID allows you to log into major betting platforms, deposit money securely in INR, and withdraw your winnings quickly via local methods like UPI or bank transfer.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">What is a Betting Exchange?</h3>
      <p class="mb-6">A traditional bookmaker sets the odds, and you bet against the house. In contrast, a <strong>Betting Exchange</strong> is a marketplace where players bet against other players. You can either back an outcome (agree that it will happen) or lay an outcome (bet that it will not happen). This gives you better odds and much more control over your bets.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">Why Choose Tiger365?</h3>
      <p class="mb-6">Tiger365 acts as a bridge. By getting a single Tiger365 ID, you gain direct access to India's top exchange platforms with 24/7 customer service and instant deposit/withdrawal processing, combining the best of both worlds.</p>
    `
  },
  {
    id: 'safe-betting-tips',
    title: '10 Tips for Safe and Responsible Betting in India',
    excerpt: 'Stay safe while enjoying online sports betting. These 10 essential tips will help you bet responsibly, manage your bankroll, and avoid common mistakes.',
    category: 'Safety',
    date: 'May 15, 2026',
    readTime: '8 min read',
    emoji: '🔒',
    color: 'from-purple-900/30 to-black',
    content: `
      <p class="mb-6">Online sports betting is a thrilling way to engage with your favorite sports, but safety and responsibility should always be your top priorities. To ensure you have a fun and secure experience, we have compiled the top 10 tips for safe betting in India using a verified Tiger365 ID.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">1. Use Only Verified Providers</h3>
      <p class="mb-6">Never buy IDs from unverified agents on social media. Always use official platforms like Tiger365 to ensure your funds are secure and you receive genuine support.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">2. Treat Betting as Entertainment, Not an Income</h3>
      <p class="mb-6">Keep a healthy mindset. Betting is designed for amusement. When you view it as a primary source of income, it leads to stressful decision-making and poor choices.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">3. Keep Your Account Details Secure</h3>
      <p class="mb-6">Never share your Tiger365 ID password or PIN with anyone. Change your password periodically and use strong combinations of letters, numbers, and symbols.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">4. Take Regular Breaks</h3>
      <p class="mb-6">Do not spend hours staring at odds. Set a time limit for your gaming sessions and stick to it to maintain absolute focus and emotional control.</p>
    `
  },
  {
    id: 'upi-betting-deposits',
    title: 'How to Deposit and Withdraw via UPI for Betting',
    excerpt: 'Step-by-step guide on making deposits and withdrawals for your cricket betting ID using UPI, IMPS, and other Indian payment methods.',
    category: 'Payments',
    date: 'May 10, 2026',
    readTime: '3 min read',
    emoji: '💳',
    color: 'from-red-900/30 to-black',
    content: `
      <p class="mb-6">UPI (Unified Payments Interface) has revolutionized digital transactions in India, making them instant and hassle-free. At Tiger365, we support UPI deposits and withdrawals to give you the fastest transaction times. Read this simple guide on how to manage your funds smoothly.</p>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">How to Deposit Funds</h3>
      <p class="mb-6">Follow these simple steps to add balance to your Tiger365 ID account:</p>
      <ol class="list-decimal list-inside mb-6 space-y-2 text-gray-300">
        <li>Contact our customer support team on WhatsApp to request the current deposit details.</li>
        <li>Open your preferred UPI app (Google Pay, PhonePe, Paytm, or BHIM) and make the transfer.</li>
        <li>Take a screenshot of the transaction receipt (showing the UTR or Transaction Ref Number).</li>
        <li>Send the screenshot along with your Tiger365 username to our WhatsApp chat. The balance will reflect in your account within 5-10 minutes.</li>
      </ol>
      
      <h3 class="text-2xl font-bold text-blue-500 mt-8 mb-4">How to Withdraw Your Winnings</h3>
      <p class="mb-6">Cashing out your winnings is just as easy:</p>
      <ol class="list-decimal list-inside mb-6 space-y-2 text-gray-300">
        <li>Send a withdrawal request message to our WhatsApp support indicating your username and the amount you want to withdraw.</li>
        <li>Provide your UPI ID or bank account details.</li>
        <li>Our team will process the request and transfer the funds directly to your account. Withdrawals are processed 24/7.</li>
      </ol>
    `
  }
];



interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);
  if (!post) return { title: 'Post Not Found' };
  
  const canonicalUrl = `/blog/${post.id}`;
  const fullTitle = `${post.title} – Tiger 365 ID`;

  return {
    title: fullTitle,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: post.excerpt,
      url: `https://tiger365bookie.com${canonicalUrl}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

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
                {post.category}
              </span>
              <span className="text-gray-500 text-xs">{post.readTime}</span>
              <span className="text-gray-500 text-xs">•</span>
              <span className="text-gray-500 text-xs">{post.date}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
              {post.title}
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-400 rounded-full mb-8"></div>
          </header>

          {/* Feature/Emoji banner */}
          <div className={`bg-gradient-to-r ${post.color} border border-gray-800 rounded-3xl p-12 text-center text-7xl mb-10 shadow-2xl`}>
            {post.emoji}
          </div>

          {/* Body and Sidebar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 text-gray-300 leading-relaxed text-base sm:text-lg">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="prose prose-invert max-w-none"
              />
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

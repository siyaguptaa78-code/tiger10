'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 'last-winner',
    question: 'Who won the last FIFA World Cup?',
    answer: "Argentina, beating France on penalties after a 3-3 final in Qatar in December 2022 — Messi's crowning moment.",
  },
  {
    id: 'most-titles',
    question: 'Which country has won the most World Cups?',
    answer: 'Brazil, with five (1958, 1962, 1970, 1994, 2002).',
  },
  {
    id: '2026-final',
    question: 'When is the 2026 World Cup final?',
    answer: '19 July 2026, at MetLife Stadium in New Jersey — the climax of the first 48-team edition, hosted by the USA, Mexico and Canada.',
  },
  {
    id: '2030-host',
    question: 'Where is the 2030 World Cup?',
    answer: 'Spain, Portugal and Morocco, with centenary matches in Uruguay, Argentina and Paraguay.',
  },
  {
    id: 'back-to-back',
    question: 'Has any country won back-to-back World Cups?',
    answer: 'Italy (1934, 1938) and Brazil (1958, 1962) — nobody since.',
  },
];

export default function FifaFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.id}
          id={`fifa-faq-${faq.id}`}
          className={`bg-[#1a1a1a] border rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === index
              ? 'border-blue-500/60 shadow-lg shadow-blue-500/10'
              : 'border-gray-800 hover:border-gray-700'
          }`}
        >
          {/* Question */}
          <button
            id={`fifa-faq-btn-${faq.id}`}
            className="w-full flex items-center justify-between p-6 text-left group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <div className="flex items-center gap-4 flex-1 pr-4">
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'bg-transparent border-gray-700 text-gray-600 group-hover:border-blue-500/40 group-hover:text-blue-500'
                }`}
              >
                {index + 1}
              </span>
              <span
                className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
                  openIndex === index ? 'text-blue-400' : 'text-white group-hover:text-blue-200'
                }`}
              >
                {faq.question}
              </span>
            </div>
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                openIndex === index
                  ? 'bg-blue-500 border-blue-500 text-white rotate-180'
                  : 'border-gray-700 text-gray-500 group-hover:border-blue-500/40 group-hover:text-blue-500'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {/* Answer */}
          <div
            className="transition-all duration-300 ease-in-out overflow-hidden"
            style={{
              maxHeight: openIndex === index ? '200px' : '0px',
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <div className="p-6 pt-0 text-gray-400 border-t border-gray-800/50 leading-relaxed text-sm sm:text-base">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// IMPORTS NEEDED:
'use client'; // Required for useState

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Q1. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      answer: 'Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here',
    },
    {
      question: 'Q2. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      answer: 'Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here',
    },
    {
      question: 'Q3. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      answer: 'Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here Lorem ipsum answer goes here',
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg bg-white">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="font-semibold">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700 text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
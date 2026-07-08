"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can attend this workshop?",
    answer:
      "The workshop is open to students, developers, working professionals, entrepreneurs, and anyone interested in Artificial Intelligence and Generative AI.",
  },
  {
    question: "Do I need prior AI experience?",
    answer:
      "No. The workshop is designed for both beginners and intermediate learners. Concepts will be explained from the fundamentals.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. All registered participants who attend the workshop will receive a Certificate of Participation.",
  },
  {
    question: "Is lunch included?",
    answer:
      "Yes. Lunch and refreshments are included for offline participants attending the workshop at the venue.",
  },
  {
    question: "Can I attend online?",
    answer:
      "Yes. Both online and offline participation modes are available.",
  },
  {
    question: "What should I bring to the workshop?",
    answer:
      "Participants are encouraged to bring a laptop, charger, and a notebook to get the most out of the hands-on sessions.",
  },
  {
    question: "Where is the workshop being conducted?",
    answer:
      "The offline workshop will be conducted at Sigmanix Tech Solutions, Kondapur, Hyderabad.",
  },
  {
    question: "How can I register?",
    answer:
      "You can register using the Register Now button available on this website. Seats are limited and allocated on a first-come, first-served basis.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-10">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Everything you need to know before attending the AI Mastery Workshop.
          </p>
        </div>

        <div className="mt-12 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-amber-100"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 text-[#D4AF37] transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-amber-100 px-6 py-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
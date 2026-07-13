"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can attend this workshop?",
    answer:
      "This workshop is designed for developers, working professionals,  and entrepreneurs who want to learn modern web development and AI-powered application development.",
  },
  {
    question: "Do I need prior programming experience?",
    answer:
      "Basic programming knowledge is helpful but not mandatory. The workshop covers concepts in a structured manner suitable for both beginners and intermediate learners.",
  },
  {
    question: "What technologies will be covered?",
    answer:
      "The workshop covers JavaScript, TypeScript, React.js, Next.js, Node.js, Vercel Deployment, and AI SDK  with practical demonstrations and real-world use cases.",
  },
  {
    question: "Will there be hands-on coding sessions?",
    answer:
      "Yes. Approximately 75% of the workshop focuses on practical implementation, coding exercises, and real-world application development.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. All registered participants who attend the workshop will receive an official Certificate of Participation.",
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
      "Participants attending offline are encouraged to bring a laptop(not mandatory), charger, and notebook to fully participate in the hands-on sessions.",
  },
  {
    question: "Where is the workshop being conducted?",
    answer:
      "The offline workshop will be conducted at Sigmanix Tech Solutions, Kondapur, Hyderabad.",
  },
  {
    question: "How much does the workshop cost?",
    answer:
      "Online participation costs ₹499 and Offline participation costs ₹1,999. The offline package includes lunch, refreshments, networking opportunities, and hands-on mentoring.",
  },
  {
    question: "How can I register?",
    answer:
      "You can register using the Register Now button available on this website. Seats are limited and registrations are accepted on a first-come, first-served basis.",
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
            Everything you need to know before attending the AI Mastery Program.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm"
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
                  className={`h-5 w-5 text-[#D4AF37] transition-transform duration-300 ${
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
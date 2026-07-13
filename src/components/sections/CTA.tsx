import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-white to-amber-50 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* Badge */}
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
          AI Mastery Workshop 2026
        </p>

        {/* Heading */}
        <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
          Build Modern
          <span className="block text-[#D4AF37]">
            AI-Powered Applications
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">
          Learn JavaScript, React.js, Next.js, Node.js, TypeScript,
          Vercel Deployment, and AI SDK integration through hands-on
          implementation, real-world projects, and industry-focused guidance.
        </p>

        {/* Workshop Highlights */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-4">

          <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
            <h3 className="text-2xl font-bold text-[#D4AF37]">1 Day</h3>
            <p className="mt-1 text-sm text-slate-600">
              Intensive Workshop
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
            <h3 className="text-2xl font-bold text-[#D4AF37]">10+</h3>
            <p className="mt-1 text-sm text-slate-600">
              Core Topics
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
            <h3 className="text-2xl font-bold text-[#D4AF37]">100%</h3>
            <p className="mt-1 text-sm text-slate-600">
              Practical Learning
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
            <h3 className="text-2xl font-bold text-[#D4AF37]">✔</h3>
            <p className="mt-1 text-sm text-slate-600">
              Certificate Included
            </p>
          </div>

        </div>

        {/* Pricing */}


        {/* Quote */}
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-amber-200 bg-white p-8 shadow-sm">
          <p className="text-xl italic text-slate-700">
            "Learn modern development, build production-ready applications,
            and accelerate your career with practical AI-powered solutions."
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12">

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdqw19ooQG5MXKROVZYHP9TL80V8pWdhySeUm15edz00aCMHA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="h-16 rounded-full bg-[#D4AF37] px-12 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#B8860B]"
            >
              Reserve Your Seat
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </a>

          <p className="mt-5 text-sm text-slate-500">
            August 8, 2026 • Hyderabad • Limited Seats Available
          </p>

        </div>

      </div>
    </section>
  );
}
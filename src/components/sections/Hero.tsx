import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-100 blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center px-6">
        <div className="max-w-5xl text-center">

          {/* Badge */}
          <div className="inline-flex rounded-full border border-amber-200 bg-white px-5 py-2 text-sm font-medium text-[#B8860B] shadow-sm">
            AI Mastery Program 2026
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            AI Mastery
            <span className="block text-[#D4AF37]">
              for Professionals
            </span>
          </h1>

          {/* Sub Heading */}
          <h2 className="mt-6 text-2xl font-semibold leading-tight text-slate-700 md:text-5xl">
            Modern Web Development
            <br />
            & AI-Powered Applications
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600">
            Learn how modern software teams build production-ready web
            applications using React.js, Next.js, TypeScript, Node.js,
            Vercel, and AI-powered development workflows through
            hands-on implementation and real-world examples.
          </p>

          {/* Event Details */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600 md:gap-6 md:text-base">
            <span>📅 August 8, 2026</span>
            <span>⏰ Full-Day Workshop</span>
            <span>📍 Hyderabad</span>
            <span>🍽 Lunch Included</span>
            <span>🎓 Certificate Included</span>
          </div>

          {/* Technologies */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">

            <div className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-[#B8860B]">
              JavaScript
            </div>

            <div className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-[#B8860B]">
              React.js
            </div>

            <div className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-[#B8860B]">
              Next.js
            </div>

            <div className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-[#B8860B]">
              Node.js
            </div>

            <div className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-[#B8860B]">
              TypeScript
            </div>

            <div className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-[#B8860B]">
              Vercel AI SDK
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdqw19ooQG5MXKROVZYHP9TL80V8pWdhySeUm15edz00aCMHA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="h-14 bg-[#D4AF37] px-8 text-white hover:bg-[#B8860B]"
              >
                Reserve Your Seat
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <a
              href="https://chat.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-[#D4AF37] px-8 text-[#B8860B] hover:bg-amber-50"
              >
                Join WhatsApp Community
              </Button>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#D4AF37]">
          BUILD • LEARN • GROW
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
          Accelerate Your
          <span className="block text-[#D4AF37]">
            Tech Career
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          Master modern development technologies including
          <span className="font-semibold text-slate-900">
            {" "}React.js, Next.js, JavaScript, TypeScript,
            Node.js, Vercel Deployment, and AI SDK Integration
          </span>
          {" "}through expert-led practical sessions designed for
          working professionals.
        </p>

        {/* Highlight Quote */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-amber-200 bg-amber-50 px-8 py-6">
          <p className="text-2xl font-medium italic text-slate-800">
            "Learn. Build. Innovate. Transform your ideas into real-world applications."
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdqw19ooQG5MXKROVZYHP9TL80V8pWdhySeUm15edz00aCMHA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="h-16 rounded-full bg-[#D4AF37] px-10 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#B8860B]"
            >
              Reserve Your Seat
              <ArrowRight className="ml-5 h-5 w-5" />
            </Button>
          </a>

          <p className="mt-4 text-sm text-slate-500">
            August 8, 2026 • Limited Seats • Certificate Included • Lunch Included
          </p>
        </div>
      </div>
    </section>
  );
}
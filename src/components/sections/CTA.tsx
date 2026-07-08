import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#D4AF37]">
          START YOUR AI JOURNEY
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
          The Future Belongs To
          <span className="block text-[#D4AF37]">
            AI Builders
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          Learn the skills that are transforming industries worldwide.
          Gain practical experience in
          <span className="font-semibold text-slate-900">
            {" "}Artificial Intelligence,
            Generative AI,
            Prompt Engineering,
            AI Agents
          </span>
          {" "}and real-world applications through expert-led sessions.
        </p>

        {/* Highlight Quote */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-amber-200 bg-amber-50 px-8 py-6">
          <p className="text-2xl font-medium italic text-slate-800">
            "AI won't replace people.
            People who understand AI will replace those who don't."
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
            Limited seats available • Certificate Included
          </p>
        </div>
      </div>
    </section>
  );
}
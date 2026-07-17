export default function Poster() {
  return (
    <section id="poster" className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
          Event Poster
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          AI Mastery Workshop Poster
        </h2>

        <p className="mt-4 text-slate-600">
          Download or view the official AI Mastery Workshop poster.
        </p>

       <a
  href="/posters/Sigmanix_beacon_Ai_mastery_poster.jpeg"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center rounded-full border border-[#D4AF37] px-6 py-3 text-[#B8860B] hover:bg-amber-50"
>
  View Event Poster
</a>

      </div>
    </section>
  );
}
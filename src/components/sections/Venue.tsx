import { MapPin, Navigation } from "lucide-react";

export default function Venue() {
  return (
    <section id="venue" className="bg-white py-8">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Event Venue
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Workshop Location
          </h2>

          <p className="mt-4 text-slate-600">
            Join us for a full-day immersive AI learning experience.
          </p>
        </div>

       <div className="mt-12 rounded-3xl border border-amber-100 bg-amber-50/20 p-12">

  <div className="flex flex-col items-center text-center">

    <div className="rounded-full border border-[#D4AF37] p-4">
      <MapPin className="h-6 w-6 text-[#D4AF37]" />
    </div>

    <h3 className="mt-6 text-3xl font-semibold text-slate-900">
      Sigmanix Tech Solutions
    </h3>

    <p className="mt-6 max-w-2xl leading-9 text-slate-600">
      Plot No. 8A, Survey No. 184P,
      <br />
      Sai Prithvi Enclave, Kondapur,
      <br />
      Serilingampally,
      <br />
      K. V. Rangareddy – 500084
    </p>

    <a
      href="https://maps.app.goo.gl/BP4PoHQNQfAkuHvk8?g_st=ac"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-6 py-3 text-sm font-medium text-[#B8860B] hover:bg-amber-50"
    >
      <Navigation className="h-4 w-4" />
      Get Directions
    </a>

  </div>

</div>

        </div>

    </section>
  );
}
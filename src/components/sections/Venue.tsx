import { MapPin, Navigation } from "lucide-react";

export default function Venue() {
  return (
    <section
      id="venue"
      className="bg-gradient-to-b from-white to-amber-50 py-14"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            Event Venue
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Workshop Location
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Join us in Hyderabad for a full-day immersive learning experience
            covering modern web development and AI-powered applications.
          </p>
        </div>

        {/* Venue Card */}
        <div className="mt-16 rounded-3xl border border-amber-200 bg-white p-10 shadow-sm">

          <div className="flex flex-col items-center text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]/10">
              <MapPin className="h-10 w-10 text-[#D4AF37]" />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Sigmanix Tech Solutions Private Limited
            </h3>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              5A Sigma Hub Building,
              <br />
              Plot No. 8A, Survey No. 184P,
              <br />
              Sai Prithvi Enclave, Kondapur,
              <br />
              Serilingampalle (M),
              <br />
              Hyderabad, Telangana – 500084
            </p>

            {/* Venue Highlights */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">


            </div>

            {/* Map Button */}
            <a
              href="https://maps.app.goo.gl/BP4PoHQNQfAkuHvk8?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#B8860B]"
            >
              <Navigation className="h-5 w-5" />
              Get Direction
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
import Image from "next/image";

export default function Organizer() {
  return (
    <section id="organizers" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            Organised By
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Workshop Organizers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            AI Mastery Workshop is proudly organized by leading
            technology and AI education organizations.
          </p>
        </div>

        {/* Organizers */}
        <div className="mt-12 space-y-16">

          {/* Sigmanix */}
          <div className="text-center">

            <div className="flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Sigmanix Tech Solutions"
                width={850}
                height={250}
                priority
                className="h-auto w-full max-w-[700px] object-contain"
              />
            </div>

            <h3 className="mt-6 text-3xl font-semibold text-slate-900">
              Sigmanix Tech Solutions
            </h3>

            <p className="mt-2 text-slate-600">
              Technology & Innovation Partner
            </p>

          </div>

          {/* Divider */}
          <div className="mx-auto h-px max-w-lg bg-amber-200" />

          {/* Beacon */}
          <div className="text-center">

            <div className="flex justify-center">
              <Image
                src="/images/logo_beacon.png"
                alt="Beacon Technologies"
                width={750}
                height={220}
                className="h-auto w-full max-w-[600px] object-contain"
              />
            </div>

            <h3 className="mt-6 text-3xl font-semibold text-slate-900">
              Beacon Technologies
            </h3>

            <p className="mt-2 text-slate-600">
              Artificial Intelligence & STEM Education
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
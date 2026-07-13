import Image from "next/image";

export default function Organizer() {
  return (
    <section id="organizers" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            Organised By
          </p>
        </div>

        {/* Logos */}
        <div className="mt-16 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">

          {/* Sigmanix */}
          <div className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Sigmanix Tech Solutions"
              width={500}
              height={150}
              priority
              className="h-auto w-full max-w-[280px] md:max-w-[350px] object-contain"
            />
          </div>

          {/* & Symbol */}
          <div className="text-5xl font-bold text-[#D4AF37] md:text-7xl">
            &
          </div>

          {/* Beacon */}
          <div className="flex justify-center">
            <Image
              src="/images/logo_beacon.png"
              alt="Beacon Technologies"
              width={450}
              height={150}
              className="h-auto w-full max-w-[250px] md:max-w-[320px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
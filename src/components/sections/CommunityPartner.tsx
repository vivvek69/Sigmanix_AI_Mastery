import Image from "next/image";

export default function CommunityPartner() {
  return (
    <section
      id="community-partner"
      className="bg-white py-10"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            Community Partner
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Supported By
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Proudly supported by one of Hyderabad's growing developer
            communities dedicated to learning, collaboration, and innovation.
          </p>
        </div>

        {/* Logo */}
        <div className="mt-14 flex justify-center">
          <Image
            src="/images/react-hyderabad.jpeg"
            alt="React Hyderabad"
            width={900}
            height={300}
            className="h-auto w-full max-w-[500px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}
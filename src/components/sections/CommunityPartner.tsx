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
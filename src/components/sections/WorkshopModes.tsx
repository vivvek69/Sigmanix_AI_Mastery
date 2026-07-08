import { Laptop, Users } from "lucide-react";

export default function WorkshopModes() {
  return (
    <section id="modes" className="bg-white py-8">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Workshop Modes
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Choose Your Learning Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Attend the AI Mastery Workshop in the format that
            best suits your learning preferences.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Offline */}
          <div className="rounded-3xl border border-amber-100 bg-amber-50/20 p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]">
              <Users className="h-6 w-6 text-[#D4AF37]" />
            </div>

            <h3 className="text-3xl font-semibold text-slate-900">
              Offline Workshop
            </h3>

            <p className="mt-2 text-[#B8860B]">
              In-Person Experience
            </p>

            <ul className="mt-6 space-y-4 text-slate-600">
              <li>• Full-Day Workshop</li>
              <li>• Direct Mentor Interaction</li>
              <li>• Networking Opportunities</li>
              <li>• Lunch Included</li>
              <li>• Certificate of Participation</li>
            </ul>
          </div>

          {/* Online */}
          <div className="rounded-3xl border border-amber-100 bg-white p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]">
              <Laptop className="h-6 w-6 text-[#D4AF37]" />
            </div>

            <h3 className="text-3xl font-semibold text-slate-900">
              Online Workshop
            </h3>

            <p className="mt-2 text-[#B8860B]">
              Virtual Experience
            </p>

            <ul className="mt-6 space-y-4 text-slate-600">
              <li>• Live Online Sessions</li>
              <li>• Interactive Learning</li>
              <li>• Digital Resources</li>
              <li>• Certificate of Participation</li>
              <li>• Community Access</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
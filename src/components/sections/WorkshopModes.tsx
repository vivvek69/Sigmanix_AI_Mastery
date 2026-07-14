import { Laptop, Users } from "lucide-react";

export default function WorkshopModes() {
  return (
    <section
      id="modes"
      className="bg-gradient-to-b from-white to-amber-50 py-13"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            Workshop Modes
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Choose Your Learning Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Attend the AI Mastery Workshop in the format that best matches
            your learning preferences and career goals.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {/* Offline */}
          <div className="rounded-3xl border border-[#D4AF37] bg-white p-8 shadow-lg">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10">
              <Users className="h-8 w-8 text-[#D4AF37]" />
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold text-slate-900">
                Offline Workshop
              </h3>

        
            </div>

            <p className="mt-3 text-[#B8860B] font-medium">
              Premium In-Person Experience
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">
              <li> Full-Day Interactive Workshop</li>
              <li> Hands-On Practical Experience</li>
              <li> Build a Real-World Project</li>
              <li> Direct Mentor Interaction</li>
              <li> Live Coding Sessions</li>
              <li> Networking Opportunities</li>
              <li> Lunch Included</li>
              <li> Certificate of Participation</li>
            </ul>

          </div>

          {/* Online */}
          <div className="rounded-3xl border border-amber-200 bg-white p-8 shadow-sm">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10">
              <Laptop className="h-8 w-8 text-[#D4AF37]" />
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold text-slate-900">
                Online Workshop
              </h3>

            </div>

            <p className="mt-3 text-[#B8860B] font-medium">
              Virtual Learning Experience
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">
              <li> Live Online Sessions</li>
              <li> Interactive Learning</li>
              <li> Project Development Session</li>
              <li> Real-Time Q&A Support</li>
              <li> Digital Learning Resources</li>
              <li> Recording Access (If Available)</li>
              <li> Community Access</li>
              <li> Certificate of Participation</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}
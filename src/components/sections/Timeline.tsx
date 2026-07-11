const schedule = [
  {
    time: "09:30 AM",
    title: "Welcomes",
  },
  {
    time: "10:00 AM",
    title: "JavaScript Fundamentals & Modern Development",
  },
  {
    time: "11:00 AM",
    title: "React.js & Next.js Development",
  },
  {
    time: "12:00 PM",
    title: "Node.js, TypeScript & Backend Concepts",
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
  },
  {
    time: "02:00 PM",
    title: "Vercel Deployment & Production Workflows",
  },
  {
    time: "03:00 PM",
    title: "AI SDK Integration & AI-Powered Applications",
  },
  {
    time: "04:00 PM",
    title: "Hands-On Application Development Session",
  },
  {
    time: "05:00 PM",
    title: "Career Guidance, Q&A & Certification",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-white py-8">
      <div className="mx-auto max-w-5xl px-6">
        
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Workshop Schedule
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            AI Mastery Workshop
          </h2>

          <p className="mt-4 text-slate-600">
            August 8, 2026 • Saturday
          </p>

          <p className="text-slate-500">
            9:30 AM – 6:00 PM • Lunch Included
          </p>
        </div>

        <div className="mt-20">

          {schedule.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[140px_1fr] gap-8 border-b border-amber-100 py-8"
            >
              <div>
                <p className="font-semibold text-[#D4AF37]">
                  {item.time}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
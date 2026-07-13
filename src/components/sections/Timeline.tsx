const topics = [
  "JavaScript Fundamentals",
  "React.js Development",
  "Next.js Framework",
  "Node.js Backend Development",
  "TypeScript for Scalable Applications",
  "Vercel AI SDK",
  "Building AI-Powered Applications",
  "Real-World Project Implementation",
  "Career Guidance & Certification",
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="bg-gradient-to-b from-white to-amber-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            Workshop Curriculum
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            What You'll Learn
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Master modern web development and AI-powered application
            development through a carefully structured learning experience
            designed for students, professionals, and aspiring developers.
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-2">

          {topics.map((topic, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start gap-5">

                {/* Number */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-lg font-bold text-[#D4AF37]">
                  {index + 1}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {topic}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Hands-on learning, real-world examples, practical
                    implementation, and industry best practices.
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 rounded-3xl border border-amber-200 bg-white p-8 text-center shadow-sm">

          <h3 className="text-2xl font-bold text-slate-900">
            Full-Day Intensive Workshop
          </h3>

          <p className="mt-4 text-slate-600">
            August 8, 2026 • Saturday
          </p>

          <p className="mt-2 text-slate-600">
            9:30 AM – 6:00 PM • Lunch Included • Certificate Included
          </p>

        </div>

      </div>
    </section>
  );
}
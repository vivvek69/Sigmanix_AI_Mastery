const topics = [
  {
    title: "React.js Development",
    description:
      "Build modern, reusable user interfaces using component-based architecture and industry-standard development practices.",
  },
  {
    title: "Next.js Framework",
    description:
      "Learn routing, layouts, server-side rendering, and performance optimization for production-ready web applications.",
  },
  {
    title: "JavaScript Fundamentals",
    description:
      "Master the core concepts of JavaScript including functions, objects, arrays, ES6 features, and asynchronous programming.",
  },
  {
    title: "TypeScript for Scalable Applications",
    description:
      "Develop type-safe applications that improve code quality, maintainability, and team collaboration.",
  },
  {
    title: "Node.js Backend Development",
    description:
      "Understand backend architecture, REST APIs, server-side logic, and application integration using Node.js.",
  },
  {
    title: "Vercel & AI SDK",
    description:
      "Deploy applications seamlessly and integrate AI-powered features using the Vercel platform and AI SDK.",
  },
  {
    title: "Building AI-Powered Applications",
    description:
      "Create intelligent applications using modern AI workflows, prompt engineering, and real-world automation techniques.",
  },
  {
    title: "Real-World Project Implementation",
    description:
      "Apply your learning by building a complete project that follows industry development workflows and best practices.",
  },
  {
    title: "Career Guidance & Certification",
    description:
      "Gain insights into career opportunities, portfolio development, interview preparation, and industry expectations.",
  },
  {
    title: "Hands-On Coding & Practical Implementation",
    description:
      "75% of the workshop focuses on practical coding, implementation exercises, debugging, and real-world application development.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="bg-gradient-to-b from-white to-amber-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
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

        {/* Curriculum Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">

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
                    {topic.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {topic.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Workshop Highlight */}
        <div className="mt-16 rounded-3xl border border-amber-200 bg-white p-10 text-center shadow-sm">

          <h3 className="text-3xl font-bold text-slate-900">
            Full-Day Intensive Workshop
          </h3>

          <p className="mt-4 text-lg text-slate-600">
            August 8, 2026 • Saturday
          </p>

          <p className="mt-2 text-slate-600">
            9:30 AM – 6:00 PM
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-[#B8860B]">
              Lunch Included
            </span>

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-[#B8860B]">
              Certificate Included
            </span>

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-[#B8860B]">
              Hands-On Learning
            </span>

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-[#B8860B]">
              Real-World Project
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
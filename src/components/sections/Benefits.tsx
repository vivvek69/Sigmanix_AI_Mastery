import {
  Brain,
  Sparkles,
  Wrench,
  Award,
  Users,
  Briefcase,
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Modern Web Development",
    description:
      "Learn JavaScript, React.js, Next.js, Node.js, and TypeScript through practical sessions and real-world examples.",
  },
  {
    icon: Sparkles,
    title: "AI SDK Integration",
    description:
      "Understand how to integrate AI capabilities into modern applications using AI SDK tools and workflows.",
  },
  {
    icon: Wrench,
    title: "Hands-On Coding",
    description:
      "75% of the program focuses on practical implementation, coding exercises, and real-world application development.",
  },
  {
    icon: Award,
    title: "Certificate of Participation",
    description:
      "Receive an official participation certificate upon successful completion of the workshop.",
  },
  {
    icon: Users,
    title: "Industry Mentorship",
    description:
      "Learn directly from industry professionals and receive guidance on modern development practices.",
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    description:
      "Explore opportunities in Full-Stack Development, AI-powered applications, and modern software engineering.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-11">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Why Attend?
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            What You'll Learn
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-amber-100 bg-amber-50/20 p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]">
                  <Icon className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
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
    title: "AI Fundamentals",
    description:
      "Build a strong foundation in Artificial Intelligence and its real-world applications.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Learn modern AI tools, prompt engineering, and practical GenAI workflows.",
  },
  {
    icon: Wrench,
    title: "Hands-On Learning",
    description:
      "Apply concepts through guided activities and practical demonstrations.",
  },
  {
    icon: Award,
    title: "Certificate",
    description:
      "Receive a certificate of participation upon successful completion.",
  },
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with students, developers, working professionals, and mentors.",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description:
      "Explore AI career opportunities, industry trends, and future growth paths.",
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
            What You'll Gain From AI Mastery
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A practical learning experience designed for students,
            developers, and working professionals.
          </p>
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
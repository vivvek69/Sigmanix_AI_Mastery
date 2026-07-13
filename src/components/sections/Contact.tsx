import Image from "next/image";
import {
  Mail,
  Phone,
  Globe,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-amber-100 bg-white py-16"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Get In Touch
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Reach out to the workshop organizers for registrations,
            support and event information.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* Sigmanix */}
          <div className="rounded-3xl border border-amber-100 p-8">

            <Image
              src="/images/logo.png"
              alt="Sigmanix Tech Solutions"
              width={500}
              height={120}
              className="mx-auto h-auto w-full max-w-[320px]"
            />

            <h3 className="mt-6 text-center text-2xl font-semibold text-slate-900">
              Sigmanix Tech Solutions
            </h3>

            <p className="mt-2 text-center text-slate-600">
              Venue Partner & Technology Organization
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#D4AF37]" />
                <span>+91 7702473939</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#D4AF37]" />
                <span>hr@sigmanixtech.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-[#D4AF37]" />
                <span>www.sigmanixtech.com</span>
              </div>

            </div>

          </div>

          {/* Beacon */}
          <div className="rounded-3xl border border-amber-100 p-8">

            <Image
              src="/images/logo_beacon.png"
              alt="Beacon Technologies"
              width={500}
              height={120}
              className="mx-auto h-auto w-full max-w-[320px]"
            />

            <h3 className="mt-6 text-center text-2xl font-semibold text-slate-900">
              Beacon Technologies
            </h3>

            <p className="mt-2 text-center text-slate-600">
              AI & STEM Education Partner
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#D4AF37]" />
                <span>+91 7032824755</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#D4AF37]" />
                <span>beaconsaifoundry@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-[#D4AF37]" />
                <span>www.beacont.ai</span>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-amber-100 pt-6 text-center text-sm text-slate-500">
          © 2026 AI Mastery Workshop • Organized by Sigmanix Tech Solutions & Beacon Technologies
        </div>

      </div>
    </section>
  );
}
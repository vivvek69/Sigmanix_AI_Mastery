"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Timeline", href: "#timeline" },
  { name: "Location", href: "#venue" },
  { name: "Poster", href: "#poster" },
  { name: "Contact", href: "#contact" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            AI Mastery
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-slate-700 transition hover:text-[#D4AF37]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Register Button */}
        <div className="hidden lg:block">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdqw19ooQG5MXKROVZYHP9TL80V8pWdhySeUm15edz00aCMHA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-12 rounded-xl bg-[#D4AF37] px-8 text-base font-medium text-white hover:bg-[#B8860B]">
              Register Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-7 w-7 cursor-pointer text-slate-900" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px]">
              <div className="mt-10">

                <h2 className="mb-8 text-2xl font-bold text-slate-900">
                  AI Mastery
                </h2>

                <div className="flex flex-col gap-6">

                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-slate-700"
                    >
                      {item.name}
                    </a>
                  ))}

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdqw19ooQG5MXKROVZYHP9TL80V8pWdhySeUm15edz00aCMHA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="mt-4 w-full bg-[#D4AF37] text-white hover:bg-[#B8860B]">
                      Register Now
                    </Button>
                  </a>

                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
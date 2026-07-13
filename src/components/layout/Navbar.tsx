"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Topics", href: "#timeline" },
  { name: "Location", href: "#venue" },
  { name: "Poster", href: "#poster" },
  { name: "Contact", href: "#contact" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:h-20 lg:px-10">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <div>
            <h1 className="text-lg font-bold leading-tight text-slate-900 md:text-2xl">
              AI Mastery
            </h1>

            <p className="text-xs font-medium text-[#D4AF37] md:text-sm">
              for Working Professionals
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
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
            <Button className="h-11 rounded-xl bg-[#D4AF37] px-8 text-white hover:bg-[#B8860B]">
              Register Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6 cursor-pointer text-slate-900" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] p-0">
              <div className="flex h-full flex-col">

                {/* Mobile Header */}
                <div className="border-b px-6 py-5">
                  <h2 className="text-lg font-bold leading-tight text-slate-900">
                    AI Mastery
                  </h2>

                  <p className="text-sm font-medium text-[#D4AF37]">
                    for Professionals
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-1 flex-col px-6 py-6">
                  <nav className="flex flex-col gap-5">
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
                </div>

                {/* Register Button */}
                <div className="border-t p-6">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdqw19ooQG5MXKROVZYHP9TL80V8pWdhySeUm15edz00aCMHA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#D4AF37] text-white hover:bg-[#B8860B]">
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
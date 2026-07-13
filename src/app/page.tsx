import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Organizer from "@/components/sections/Organizer";
import Timeline from "@/components/sections/Timeline";
import Venue from "@/components/sections/Venue";
import WorkshopModes from "@/components/sections/WorkshopModes";
import Benefits from "@/components/sections/Benefits";
import FAQ from "@/components/sections/FAQ";
import Poster from "@/components/sections/Poster";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
  <Organizer />
  <Timeline />
  <WorkshopModes />
  <CTA />
  <Venue />
  <Poster />
  <FAQ />
   <Contact />
    </>
  );
}
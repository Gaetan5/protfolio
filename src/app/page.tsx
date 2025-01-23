"use client";

import About from "@/components/about";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import { ActiveSectionText } from "@/containers/active-section";
import useMouveStore from "@/lib/store";

export default function Home() {
  // Get the active section and active menu item from the store
  const activeSection = useMouveStore((state) => state.activeSection);
  const activeMenuItem = useMouveStore((state) => state.activeMenuItem);

  console.log(
    "activeSection",
    activeSection,
    "activeMenuItem",
    activeMenuItem
  );

  return (
    <main>
      {/* Main container for the Home component */}
      {/* Gradissement Background color */}

      <Navbar />
      <div
        className="flex flex-col items-center 
      justify-center min-h-screen pt-20 md:pt-28 px-4"
      >
        {/* Render Intro component if active section is 'home' */}
        {activeSection === "home" && <Intro />}
        {/* Render About component if active section is 'about' */}
        {activeSection === "about" && <About />}
        {/* Render other components based on the active section */}
        {/* {activeSection === "projects" && <Projects  />}
        {activeSection === "skills" && <Skills  />}
        {activeSection === "contact" && <Contact />} */}
        <ActiveSectionText />
      </div>
    </main>
  );
}

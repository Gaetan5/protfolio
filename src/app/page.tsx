import About from "@/components/about";
import Intro from "../components/intro";


export default function Home() {
  return (
      <main className="flex flex-col items-center 
      justify-center min-h-screen pt-20 md:pt-28 px-4">
        <Intro />
        <About />
      </main>
  );
}

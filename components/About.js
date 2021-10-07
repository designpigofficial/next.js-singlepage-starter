import Link from "next/link";
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section
      id="About"
      className="flex w-full h-screen p-5 font-sans justify-center "
    >
      <FadeUp>
        <h1 className="pt-12 text-5xl">ABOUT</h1>
      </FadeUp>
    </section>
  );
}

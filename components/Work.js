import Link from "next/link";
import FadeUp from "./FadeUp";

export default function Work() {
  return (
    <section
      id="Work"
      className="flex justify-center w-full h-screen p-5 font-sans "
    >
      <FadeUp>
        <h1 className="pt-12 text-5xl">WORK</h1>
      </FadeUp>
    </section>
  );
}

import Link from "next/link";
import FadeUp from "./FadeUp";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="flex w-full h-screen p-5 font-sans justify-center "
    >
      <FadeUp>
        <h1 className="pt-12 text-5xl">CONTACT</h1>
      </FadeUp>
    </section>
  );
}

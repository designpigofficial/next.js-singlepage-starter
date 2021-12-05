import Link from "next/link";
import FadeUp from "./FadeUp";

export default function Home() {
  return (
    <section
      id="Home"
      className="flex justify-center w-full h-screen p-5 font-sans "
    >
      <FadeUp>
        <h1 className="pt-12 text-lg">smoke weed everyday</h1>
      </FadeUp>
    </section>
  );
}

import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";

export default function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

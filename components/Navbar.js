import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const links = [
  { name: "HOME", to: "#Home", id: 1 },
  { name: "ABOUT", to: "#About", id: 2 },
  { name: "WORK", to: "#Work", id: 3 },
  { name: "CONTACT", to: "#Contact", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function Nav() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <nav className="flex justify-between w-full font-sans bg-gray-100 ">
      {/* Logo or company Name */}
      <div className="inline-flex p-5 text-xl font-semibold lg:text-2xl lg:pl-4">
        YOUR COMPANY
      </div>

      {/* The Side Bar Menu for screens smaller than 'Large' */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed right-0 h-screen bg-gray-300 lg:hidden "
            initial={{ width: 0 }}
            animate={{
              width: 200,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.3, duration: 0.3 },
            }}
          >
            <motion.div
              className="flex flex-col my-16"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  className="mx-12 my-12 text-xl text-gray-800 transition duration-100 ease-in-out transform hover:text-blue-400 hover:scale-105"
                  variants={itemVariants}
                  onClick={cycleOpen}
                  aria-current={links.current ? "page" : undefined}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* The Hamburger Menu and Close Icons */}
      <div className="flex justify-end lg:hidden">
        <button className="px-2 m-5 cursor-pointer " onClick={cycleOpen}>
          <span className="sr-only">Open main menu</span>
          {open ? (
            <XIcon
              className="fixed w-6 h-6 text-gray-800 right-7 top-6 "
              aria-hidden="true"
            />
          ) : (
            <MenuIcon className="w-6 h-6 text-gray-800 " aria-hidden="true" />
          )}
        </button>
      </div>

      {/* The Navbar on large screens */}
      <div className="hidden pr-6 lg:inline-flex ">
        {links.map(({ name, to, id }) => (
          <a
            key={id}
            href={to}
            className="px-6 py-5 text-xl text-gray-800 transition duration-100 ease-in-out transform hover:text-blue-400 hover:scale-105"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavLinks = () => {
  const navLinkList = [
    {
      name: "Home",
      href: "hero",
      active: true,
    },
    {
      name: "About",
      href: "about",
      active: false,
    },
    {
      name: "Benefits",
      href: "benefits",
      active: false,
    },
    {
      name: "Progress",
      href: "our-progress",
      active: false,
    },
    {
      name: "Shop",
      href: "shop",
      active: false,
    },
  ];

  const navLinkVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const navRef = React.useRef(null);

  const [activeLink, setActiveLink] = React.useState<string>(
    navLinkList[0].name
  );

  console.log(activeLink);

  return (
    <motion.ul
      initial="initial"
      animate="final"
      variants={navLinkVariants}
      className="md:flex hidden gap-4 relative"
    >
      {navLinkList.map((link) => (
        <motion.li
          ref={navRef}
          key={link.name}
          variants={navLinkVariants}
          className={`hover:text-accent text-slate-300 flex flex-col relative h-6 hover:cursor-pointer transition-all duration-300`}
        >
          <Link
            to={link.href}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
            onSetActive={() => setActiveLink(link.name)}
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavLinks;

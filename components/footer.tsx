import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black backdrop-blur-lg text-white w-full">
      <div className="max-w-7xl w-full mx-auto pt-24 pb-12 space-y-10 divide-y-2 divide-dark/50">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 place-items-center">
          <div className="flex flex-col gap-4 md:col-span-2 self-start">
            <p className="font-noto text-lg">
              Golden <span className="text-accent">Harvest</span>
            </p>
            <p className="text-textMuted text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="space-y-4">
              <li>Links</li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>About</Link>
              </li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>Shop</Link>
              </li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="space-y-4">
              <li>Company</li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>About</Link>
              </li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>Shop</Link>
              </li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="space-y-4">
              <li>Get In Touch</li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>About</Link>
              </li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>Shop</Link>
              </li>
              <li className="text-textMuted text-sm">
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs text-textMuted pt-10">
          Copyright © 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

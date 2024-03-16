import React from "react";
import Button from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-dark/10 backdrop-blur-lg text-white p-8 fixed top-0 z-10 w-full shadow-lg border-b border-slate-100/20 flex justify-between items-center">
      <div className="flex justify-between items-center  max-w-7xl w-full mx-auto">
        <p className="font-noto text-lg">
          Golden <span className="text-accent">Harvest</span>
        </p>
        <div className="flex gap-4 fill-textMuted">
          <Image
            src={"/icons/person.svg"}
            alt="person"
            width={24}
            height={24}
            className="opacity-60 hover:opacity-100 cursor-pointer"
          />
          <Image
            src={"/icons/search.svg"}
            alt="person"
            width={24}
            height={24}
            className="opacity-60 hover:opacity-100 cursor-pointer"
          />
          <Image
            src={"/icons/justify.svg"}
            alt="person"
            width={24}
            height={24}
            className="opacity-60 hover:opacity-100 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

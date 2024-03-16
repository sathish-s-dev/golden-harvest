import React from "react";
import Button from "../ui/button";
import Image from "next/image";
import SectionHeading from "../ui/section-heading";

const NewsLetter = () => {
  return (
    <section className="bg-noise">
      <div className="grid md:grid-cols-2 pb-24 pt-12 place-items-center  mx-auto bg-noise w-full max-w-7xl">
        <div className="space-y-8">
          <SectionHeading>our newsletter</SectionHeading>
          <div>
            <input
              type="text"
              className="input-clip h-10 rounded-lg px-4"
              placeholder="Enter your email"
            />
            <Button variant={"primary-left"}>Subscribe</Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/images/image 292.png"}
            alt="olive pot"
            width={350}
            height={400}
            className="z-[2] relative"
          />
          <Image
            className="absolute w-[200px] h-[150px] -left-8 bottom-0 z-[1]"
            src={"/images/grape.png"}
            width={400}
            height={250}
            alt="olive pot"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

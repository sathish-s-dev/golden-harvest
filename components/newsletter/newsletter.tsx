import React from "react";
import Button from "../button";
import Image from "next/image";
import SectionHeading from "../section-heading";

const NewsLetter = () => {
  return (
    <section className="bg-noise">
      <div className="grid md:grid-cols-2 py-12  place-items-center  mx-auto bg-noise w-full">
        <div className="space-y-8">
          <SectionHeading>our newsletter</SectionHeading>
          <div>
            <input
              type="text"
              className="input-clip h-10 rounded-md px-4"
              placeholder="Enter your email"
            />
            <Button variant={"primary-left"}>Subscribe</Button>
          </div>
        </div>
        <div className="relative inset-0">
          <Image
            src={"/images/image 292.png"}
            width={400}
            height={250}
            alt="grape pot"
          />
          <Image
            className="absolute w-[200px] h-[150px] left-0 bottom-0 z-[-1]"
            src={"/images/grape.png"}
            width={400}
            height={250}
            alt="grape pot"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

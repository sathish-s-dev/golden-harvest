import React from "react";
import SectionHeading from "../ui/section-heading";
import Image from "next/image";

const OurProgressSection = () => {
  return (
    <section id="our-progress" className="bg-noise px-6">
      <div className="bg-dark p-16 rounded-3xl relative  text-center max-w-6xl mx-auto">
        <Image
          className="md:w-64 w-48 mx-auto absolute md:-right-10 md:-top-32 right-0 -top-24"
          src="/images/olive-pot.png"
          alt="olive pot"
          width={300}
          height={300}
        />
        <SectionHeading>Our Progress</SectionHeading>
        <StatsList />
      </div>
    </section>
  );
};

function StatsList() {
  const statsData = [
    {
      title: "100%",
      description: "Organic Foods",
    },
    {
      title: "95%",
      description: "Happy Customers",
    },
    {
      title: "1M+",
      description: "Yearly Sales",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 p-10 mx-auto rounded-3xl bg-dark justify-around items-center w-[90%] max-w-6xl">
      {statsData.map((stat) => (
        <StatItem key={stat.description} {...stat} />
      ))}
    </div>
  );
}

function StatItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4 grid place-items-center">
      <h5 className="text-5xl text-white py-6 border-b-4 font-semibold border-accent block after:inset-0 after:bg-accent after:w-fit">
        {title}
      </h5>
      <p>{description}</p>
    </div>
  );
}

export default OurProgressSection;

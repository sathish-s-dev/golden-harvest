import React from "react";
import BodyText from "../body-text";
import Button from "../button";
import SectionHeading from "../section-heading";
import { TextSection } from "../text-section";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="grid place-content-center grid-cols-2 py-24 relative bg-noise">
      <Image
        src="/images/rock-olive.png"
        width={400}
        height={400}
        className="w-[90%]"
        alt="about image"
      />
      <TextSection
        heading="About Us"
        text="Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of. We so opinion friends me message as delight. Whole front do
          of plate heard oh ought. His defective nor convinced residence own.
          Connection has put impossible own apartments boisterous. At jointure
          ladyship an insisted so humanity he. Friendly bachelor entrance to on
          by."
        buttonText="Read more"
      />
      <Image className="absolute right-20 bottom-0" src={"/images/olive-pot.png"} width={300} height={300} alt="olive-pot" />
    </section>
  );
};

export default AboutSection;

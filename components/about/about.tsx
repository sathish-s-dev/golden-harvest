import React from "react";
import BodyText from "../ui/body-text";
import Button from "../ui/button";
import SectionHeading from "../ui/section-heading";
import { TextSection } from "../ui/text-section";
import Image from "next/image";
import Mdiv from "../ui/motion-div";
import MotionImage from "../ui/motion-img";

const AboutSection = () => {
  return (
    <section className="grid place-content-center md:grid-cols-2 py-24 relative bg-noise px-6 md:px-0">
      <MotionImage
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
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
      <MotionImage
        className="absolute right-4 md:right-20 bottom-0 w-48 h-48 md:w-60 md:h-60"
        src={"/images/olive-pot.png"}
        width={300}
        height={300}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{  amount: 0.5 }}
        transition={{ type: "spring", stiffness: 40, damping: 4 }}
        alt="olive-pot"
      />
    </section>
  );
};

export default AboutSection;

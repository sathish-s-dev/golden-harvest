import React from "react";
import SectionHeading from "../ui/section-heading";
import BodyText from "../ui/body-text";
import Image from "next/image";

const OliveOilSection = () => {
  return (
    <section className="bg-noise">
      <div className="max-w-7xl mx-auto py-24 relative">
        <SectionHeading className="text-center relative z-10 max-w-sm mx-auto">
          An Olive Oil that helps you live
        </SectionHeading>
        <Image
          src="/images/you-olive.png"
          className="absolute w-60 md:w-80 md:top-16 left-10"
          alt="olive oil"
          width={500}
          height={500}
        />
        <div className="grid md:grid-cols-2 p-16 gap-16 py-24">
          <div className="max-h-full row-span-3">
            <Image
              src="/images/filter.png"
              alt="olive oil"
              width={500}
              height={500}
              className="w-full object-cover h-full rounded-2xl"
            />
          </div>
          <BodyText className="row-span-1 row-start-4">
            Village did removed enjoyed explain nor ham saw calling talking.
            Securing as informed declared or margaret. Joy horrible moreover man
            feelings own shy. Request norland neither mistake for yet. Between
            the for morning assured country believe. On even feet time have an
            no at. Relation so in confined smallest children unpacked delicate.
            Why sir end believe uncivil respect. Always get adieus nature day
            course for common. My little garret repair to desire he esteem.
          </BodyText>
          <BodyText className="row-span-1">
            Compliment interested discretion estimating on stimulated apartments
            oh. Dear so sing when in find read of call. As distrusts behaviour
            abilities defective is. Never at water me might. On formed merits
            hunted unable merely by mr whence or. Possession the unpleasing
            simplicity her uncommonly.Delightful remarkably mr on announcing
            themselves entreaties favourable. About to in so terms voice at.
            Equal an would is found seems of. The particular friendship one
            sufficient terminated frequently themselves.
          </BodyText>
          <div className="max-h-full row-span-3">
            <Image
              src="/images/bottle.png"
              alt="olive oil"
              width={500}
              height={500}
              className="row-span-3 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OliveOilSection;

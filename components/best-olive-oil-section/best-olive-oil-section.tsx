import React from "react";
import { TextSection } from "../ui/text-section";
import Image from "next/image";

const BestOliveOilSection = () => {
  return (
    <section className="bg-noise">
      <div className="grid px-6 grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto place-items-center py-24 pt-36 gap-y-12">
        <div className="w-full max-w-sm relative">
          <Image
            src="/images/olive-oil.png"
            width={400}
            height={400}
            alt="olive-oil"
          />
          <Image
            className="absolute -top-24 -left-16 w-48"
            src="/images/olive.png"
            width={300}
            height={300}
            alt="olive"
          />
        </div>
        <TextSection
          heading="Best Olive oil"
          text="And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.And residence for met the estimable disposing. "
          buttonText="Shop now"
        />
      </div>
    </section>
  );
};

export default BestOliveOilSection;

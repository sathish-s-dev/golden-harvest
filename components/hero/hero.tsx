import Image from "next/image";
import BodyText from "../ui/body-text";
import Button from "../ui/button";
import Mdiv from "@/components/ui/motion-div";

export function Hero() {
  return (
    <section className=" bg-noise h-full w-full bg-red-400 relative isolate">
      <Image
        src="/Black_Olive_Bottle_Mockup.png"
        className=" absolute -z-[1] inset-0 object-cover"
        fill
        alt="hero-image"
      />
      <div className="relative max-w-full md:max-w-6xl h-screen grid md:grid-cols-2 gap-10 md:gap-6  w-[90%] mx-auto py-24 isolate">
        <Mdiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 400 }}
          className="max-w-lg space-y-8 self-center"
        >
          <h1 className="md:text-[90px] text-6xl font-noto font-semibold text-accent">
            a vegan diet
          </h1>
          <BodyText>
            Olive oil is a liquid fat obtained from olives, a traditional tree
            crop of the Mediterranean Basin, produced by pressing whole olives
            and extracting the oil. It is commonly used in cooking, for frying
            foods or as a salad dressing.
          </BodyText>
          <Button variant="primary">Shop now</Button>
          <Button variant="secondary">Book Now</Button>
        </Mdiv>
        <Mdiv
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 400,
            delay: 0.4,
          }}
          className="max-w-xs ml-auto space-y-8 self-end"
        >
          <h3 className="text-2xl font-noto font-bold text-white">Olive Oil</h3>
          <BodyText>
            Healthful addition to the diet, especially when people use them to
            replace sources of saturated and trans fats. However, it is best to
            eat high fat foods in moderation. Even healthful fats are low in
            nutrients and high in calories.
          </BodyText>
        </Mdiv>
      </div>
    </section>
  );
}

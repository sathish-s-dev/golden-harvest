import AboutSection from "@/components/about/about";
import BodyText from "@/components/body-text";
import Button from "@/components/button";
import NewsLetter from "@/components/newsletter/newsletter";
import { companies } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-textMuted">
      <Hero />
      <CompaniesList companies={companies} />
      <AboutSection />
      <NewsLetter />
    </main>
  );
}

function Company({ name, image }: { name: string; image: string }) {
  return <Image src={image} width={100} height={50} alt={name} className="" />;
}

function Hero() {
  return (
    <section className="bg-noise">
      <div className="relative max-w-full md:max-w-6xl h-screen grid md:grid-cols-2 place-content- gap-10 md:gap-6  w-[90%] mx-auto py-24 isolate">
        <Image
          src="/Black_Olive_Bottle_Mockup.png"
          className=" absolute -z-[1] inset-0 right-2"
          fill
          alt="hero-image"
        />
        <div className="max-w-lg space-y-8 self-center">
          <h1 className="md:text-[90px] text-6xl font-noto font-bold text-accent">
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
        </div>
        <div className="max-w-md space-y-8 self-end">
          <h3 className="text-3xl font-noto font-bold text-white">Olive Oil</h3>
          <BodyText>
            Healthful addition to the diet, especially when people use them to
            replace sources of saturated and trans fats. However, it is best to
            eat high fat foods in moderation. Even healthful fats are low in
            nutrients and high in calories.
          </BodyText>
        </div>
        {/* <Image
          src={"/images/01.svg"}
          width={300}
          height={300}
          alt="olive-pot"
          className="absolute left-0 bottom-0"
        /> */}
      </div>
    </section>
  );
}

function CompaniesList({ companies }: { companies: Company[] }) {
  return (
    <section className="bg-noise py-24">
      <div className="flex flex-wrap gap-6 p-10 mx-auto rounded-3xl bg-dark justify-around items-center w-[90%] max-w-6xl ">
        {companies.map((company) => (
          <Company key={company.name} {...company} />
        ))}
      </div>
    </section>
  );
}

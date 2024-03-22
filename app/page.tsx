import AboutSection from "@/components/about/about";
import NewsLetter from "@/components/newsletter/newsletter";
import BestOliveOilSection from "@/components/best-olive-oil-section/best-olive-oil-section";
import { companies } from "@/constants";
import Image from "next/image";
import OurProgressSection from "@/components/our-progress/our-progress-section";
import OliveOilSection from "@/components/olive-oil/olive-oil-section";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="min-h-screen text-textMuted pt-20">
      <Hero />
      <CompaniesList companies={companies} />
      <AboutSection />
      <OliveOilSection />
      <OurProgressSection />
      <BestOliveOilSection />
      <NewsLetter />
    </main>
  );
}

function Company({ name, image }: { name: string; image: string }) {
  return <Image src={image} width={100} height={50} alt={name} className="" />;
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

import { HeroSection } from "@/components/home/HeroSection";
import { ExploreSkills } from "@/components/home/ExploreSkills";
import { DiverseLearning } from "@/components/home/DiverseLearning";
import { ProfessionalGrowth } from "@/components/home/ProfessionalGrowth";
import { PotentialCreator } from "@/components/home/PotentialCreator";
import { OurCommunity } from "@/components/home/OurCommunity";
import { LogoipsumOne, LogoipsumTwo } from "@/components/icons/AllIcons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace — Learn from creators",
  description:
    "Discover courses and learn new skills from independent creators at ByteSpace.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFFFF] text-[#1c1d27]">
      <HeroSection />

      <section className="bg-[#f5f5f7]  px-5 ">
        <div
          className="mx-auto w-[90%] max-w-[1200px] flex min-h-[130px] flex-wrap items-center justify-between gap-x-[clamp(22px,5vw,76px)] gap-y-4 py-5 text-[18px] font-bold text-[#8a8b91] max-md:min-h-[95px] max-md:text-xs"
          aria-label="Trusted by leading teams"
        >
          {[
            LogoipsumOne,
            LogoipsumTwo,
            LogoipsumOne,
            LogoipsumTwo,
            LogoipsumOne,
          ].map((Brand, index) => (
            <Brand key={index} className="h-auto w-[clamp(96px,9vw,167px)]" />
          ))}
        </div>
      </section>

      <section className="mx-auto w-[90%] max-w-[1200px] py-[78px] max-md:py-[52px]">
        <div className="mx-auto mb-[38px] text-center max-md:mb-[26px]">
          <h2 className="mb-[15px] text-[clamp(28px,3vw,42px)] leading-[1.15] tracking-[-.04em] max-md:text-[27px]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="m-0 text-[15px] leading-[1.65] text-[#858690] max-md:text-xs">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different
            <br className="max-md:hidden" /> fields, from technology to the
            arts, and make a difference in your career and life.
          </p>
        </div>
        <ExploreSkills />
      </section>

      <DiverseLearning />
      <ProfessionalGrowth />
      <PotentialCreator />
      <OurCommunity />
    </main>
  );
}

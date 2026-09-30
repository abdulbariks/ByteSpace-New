import Link from "next/link";
import {
  Business,
  Design,
  Development,
  Marketing,
  Photography,
  Software,
} from "@/components/icons/AllIcons";

const paths = [
  ["Design", Design],
  ["Development", Development],
  ["IT & Software", Software],
  ["Business", Business],
  ["Marketing", Marketing],
  ["Photography", Photography],
] as const;

export function DiverseLearning() {
  return (
    <section className="mx-auto w-[90%] max-w-[1200px] pb-[78px] pt-2 max-md:py-[52px]">
      <div className="mx-auto mb-10 text-center max-md:mb-[26px]">
        <h2 className="mb-[15px] text-[clamp(28px,3vw,42px)] leading-[1.15] tracking-[-.04em] max-md:text-[27px]">Explore Diverse Learning Paths at Bytespace</h2>
        <p className="m-0 text-[15px] leading-[1.65] text-[#858690] max-md:text-xs">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various
          <br className="max-md:hidden" /> fields, ensuring there’s something for
          everyone. Unleash your potential and explore our carefully curated
          categories.
        </p>
      </div>
      <div className="grid grid-cols-6 gap-5 max-md:grid-cols-3 max-md:gap-2.5">
        {paths.map(([label, Icon]) => (
          <Link className="flex min-h-28 flex-col items-center justify-center gap-2.5 rounded-[20px] border border-[#e8e8ec] text-sm transition-transform hover:-translate-y-1 hover:border-[#bddd00] max-md:min-h-[95px] max-md:rounded-[14px] max-md:text-[11px]" key={label} href="/courses">
            <Icon />
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}

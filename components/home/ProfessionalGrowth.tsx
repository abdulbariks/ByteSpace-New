import Image from "next/image";
import { BarChart3, Check, Star } from "lucide-react";

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const avatars = [
  "photo-1534528741775-53994a69daeb",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1494790108377-be9c29b29330",
  "photo-1500648767791-00dcc994a43e",
  "photo-1531123897727-8f129e1688ce",
];

export function ProfessionalGrowth() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8f9f8] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 w-[46vw] max-w-[620px]"
        src="/images/professional-growth/ellipse-one.png"
        alt=""
        width={1025}
        height={711}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 w-[30vw] max-w-[420px]"
        src="/images/professional-growth/ellipse-two.png"
        alt=""
        width={669}
        height={719}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-[28vw] max-w-[380px]"
        src="/images/professional-growth/ellipse-three.png"
        alt=""
        width={425}
        height={554}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-0 w-[34vw] max-w-[470px]"
        src="/images/professional-growth/ellipse-four.png"
        alt=""
        width={758}
        height={712}
      />
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
        <div>
          <h2 className="mb-5 text-[clamp(30px,4vw,44px)] leading-[1.13] tracking-[-.04em]">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="max-w-[490px] text-sm leading-[1.75] text-[#626571] sm:text-base">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>
          <div className="mt-7 flex gap-8 sm:gap-12">
            {[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(
              ([count, label]) => (
                <div className="grid gap-1 text-sm text-[#626571]" key={label}>
                  <b className="text-3xl font-semibold tracking-tight text-blue-700 sm:text-4xl">
                    {count}
                  </b>
                  {label}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[350px] w-full max-w-[560px] items-end justify-center sm:min-h-[440px]">
          <Image
            className="absolute right-0 top-0 z-0 w-[38%] sm:w-[35%]"
            src="/images/professional-growth/frame-one.png"
            alt=""
            width={177}
            height={176}
          />
          <article className="absolute left-0 top-2 z-0 w-[58%] overflow-hidden rounded-2xl border border-[#dedee2] bg-white p-2.5 shadow-sm sm:left-[3%] sm:top-2 sm:w-[67%] sm:p-3">
            <div className="relative aspect-[1.7] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85"
                alt="Designer working on a course project"
                fill
                sizes="(max-width: 640px) 58vw, 380px"
                className="object-cover"
              />
              <div className="absolute inset-x-2 bottom-2 flex gap-1 text-[8px] text-[#42434a] sm:inset-x-3 sm:bottom-3 sm:text-[10px]">
                <span className="rounded-full bg-white/80 px-2 py-1">17 Lessons</span>
                <span className="rounded-full bg-white/80 px-2 py-1">2 hours 16 mins</span>
              </div>
            </div>
            <h3 className="mt-2 truncate text-sm font-semibold sm:text-lg">Learn Figma from Basic</h3>
            <p className="my-1 text-[10px] text-[#777] sm:text-xs">by <span className="text-blue-700">purepearl studio</span></p>
            <div className="flex items-center justify-between text-[9px] text-[#555] sm:text-xs">
              <span className="flex items-center gap-1 rounded-full bg-[#f2f3f5] px-2 py-1"><BarChart3 size={13} /> Beginner</span>
              <strong className="text-sm text-blue-700 sm:text-base">$25<small className="font-normal text-[#777]">/lifetime</small></strong>
            </div>
          </article>
          <Image
            className="relative z-10 ml-[23%] h-auto w-[76%] max-w-[440px] object-contain drop-shadow-[0_18px_14px_#0003] sm:ml-[25%] sm:w-[75%]"
            src="/images/professional-growth/person-one.png"
            alt="Student learning with a laptop and headphones"
            width={722}
            height={515}
          />
          <div className="absolute right-0 top-[43%] z-20 grid w-[44%] gap-2 rounded-xl bg-white p-3 text-[#242528] shadow-[0_12px_30px_#07123b24] sm:right-0 sm:top-[45%] sm:w-[42%] sm:p-4">
            <span className="text-[10px] sm:text-sm">Learning Progress</span>
            <b className="text-3xl leading-none sm:text-5xl">55%</b>
            <i className="h-1.5 rounded-lg bg-[linear-gradient(to_right,#d4fb20_55%,#eee_55%)]" />
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[350px] w-full max-w-[560px] items-end justify-center sm:min-h-[440px]">
          <Image
            className="absolute bottom-[8%] left-0 z-0 w-[32%] sm:bottom-[10%] sm:left-[2%] sm:w-[36%]"
            src="/images/professional-growth/frame-two.png"
            alt=""
            width={177}
            height={176}
          />
          <div className="absolute left-0 top-[17%] z-10 grid w-[38%] gap-1 rounded-xl bg-blue-700 p-3 text-[10px] text-white shadow-lg sm:top-[16%] sm:w-[42%] sm:p-4 sm:text-sm">
            Total Revenue <small className="text-[8px] text-white/70">July 1-28</small>
            <strong className="text-lg sm:text-2xl">$120.29</strong>
            <i className="h-1.5 rounded bg-[linear-gradient(to_right,#d4fb20_55%,#ffffff44_55%)]" />
          </div>
          <div className="absolute left-0 top-[52%] z-10 grid w-[32%] gap-1 rounded-xl bg-blue-700 p-3 text-[10px] text-white shadow-lg sm:top-[52%] sm:w-[36%] sm:p-4 sm:text-sm">
            Year to Date <small className="text-[8px] text-white/70">2023</small>
            <strong className="text-lg sm:text-2xl">$1,200.38</strong>
            <span className="w-fit rounded-full bg-brand-lime px-2 py-1 text-[8px] text-[#202020]">+12%</span>
          </div>
          <Image
            className="relative z-10 ml-[20%] h-auto w-[76%] max-w-[400px] object-contain drop-shadow-[0_18px_14px_#0003] sm:ml-[22%] sm:w-[72%]"
            src="/images/professional-growth/person-two.png"
            alt="Creator managing and teaching online courses"
            width={600}
            height={700}
          />
          <div className="absolute bottom-[9%] right-0 z-20 w-[53%] rounded-2xl bg-white p-3 text-[#242528] shadow-md sm:bottom-[8%] sm:right-0 sm:w-[52%] sm:p-4">
            <b className="text-xs sm:text-sm">Happy Students</b>
            <div className="mt-1 flex items-center text-[9px] text-[#777] sm:text-[10px]">4.5 (240) <Star className="ml-1 size-3 fill-[#d4fb20] text-[#d4fb20]" /></div>
            <div className="mt-2 flex items-center pl-2">
              {avatars.map((avatar) => (
                <Image
                  key={avatar}
                  src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=64&h=64&q=80`}
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="-ml-2 size-7 rounded-full border-2 border-white object-cover sm:size-8"
                />
              ))}
              <b className="-ml-2 grid size-7 place-items-center rounded-full border-2 border-white bg-brand-lime text-[9px] sm:size-8 sm:text-[10px]">2K+</b>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-[clamp(30px,4vw,44px)] leading-[1.13] tracking-[-.04em]">
            Create &amp; Manage Courses Easily.
          </h2>
          <p className="mb-7 max-w-[500px] text-sm leading-[1.75] text-[#626571] sm:text-base">
            <strong className="text-[#242528]">ByteSpace</strong> supports
            individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>
          <ul className="m-0 grid list-none gap-3 p-0 text-sm sm:text-base">
            {benefits.map((benefit) => (
              <li className="flex items-center gap-2.5" key={benefit}>
                <Check className="size-5 shrink-0 rounded-full bg-blue-700 p-1 text-white" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

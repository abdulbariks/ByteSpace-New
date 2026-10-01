import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { CreatorCourses } from "@/components/creator/CreatorCourses";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace — Creators",
};

export default function CreatorsPage() {
  return (
    <main className="min-h-screen bg-white text-[#25262b]">
      <div className="relative isolate min-h-[600px] overflow-hidden bg-[#003BE2] text-white max-md:min-h-[570px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <Navbar overlay />

        <section className="relative z-10 mx-auto w-[min(90%,1200px)] pt-[172px] pb-16 max-md:w-[92%] max-md:pt-[112px]">
          <div className="flex items-center gap-6 max-sm:items-start max-sm:gap-4">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&h=240&q=85"
              alt="PurePearl Studio"
              width={96}
              height={96}
              priority
              className="size-24 shrink-0 rounded-[24px] object-cover max-sm:size-[76px] max-sm:rounded-[20px]"
            />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-4 max-sm:gap-2">
                <h1 className="m-0 text-[36px] font-semibold leading-tight tracking-[-.035em] max-sm:text-[26px]">
                  PurePearl Studio
                </h1>
                <span className="inline-flex h-9 min-w-[136px] items-center justify-center rounded-full bg-[#D4FB20] px-6 text-sm text-[#222] max-sm:h-8 max-sm:min-w-0 max-sm:px-4">
                  Creator
                </span>
              </div>
              <p className="mt-3 text-base max-sm:mt-1 max-sm:text-sm">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-[1200px] space-y-1 text-[18px] leading-[1.65] max-sm:mt-8 max-sm:text-[15px]">
            <p>
              Welcome to the creative world of [Creator’s Name]. Here, you’ll
              discover the passion, expertise, and inspiration that drive my
              creative journey. Let’s explore and learn together!
            </p>
            <p>
              Dive into my creative portfolio, showcasing a glimpse of my
              artistic endeavors. From digital designs to multimedia projects,
              each piece tells a unique story. Explore the world of creativity
              with me.
            </p>
          </div>

          <div className="mt-10 flex items-center justify-between gap-5 max-sm:mt-8 max-sm:flex-wrap">
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex h-[62px] items-center gap-2 rounded-full bg-white px-7 text-[18px] text-[#28292e] max-sm:h-12 max-sm:px-5 max-sm:text-sm">
                <span className="text-blue-700">3</span> Products
              </div>
              <div className="inline-flex h-[62px] items-center gap-2 rounded-full bg-white px-7 text-[18px] text-[#28292e] max-sm:h-12 max-sm:px-5 max-sm:text-sm">
                <span className="text-blue-700">12</span> Followers
              </div>
            </div>
            <button
              type="button"
              className="inline-flex h-[62px] min-w-[134px] items-center justify-center rounded-full bg-[#D4FB20] px-7 text-[18px] text-[#222] transition-transform hover:-translate-y-0.5 max-sm:h-12 max-sm:min-w-[110px] max-sm:px-5 max-sm:text-sm"
            >
              Follow
            </button>
          </div>
        </section>
      </div>
      <CreatorCourses />
    </main>
  );
}

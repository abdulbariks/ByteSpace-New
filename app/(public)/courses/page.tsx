import { Navbar } from "@/components/layout/Navbar";
import { Courses } from "@/components/course/Courses";
import { ChevronDown, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace — Courses",
  description:
    "Search, filter, and sort through ByteSpace's full course library.",
};

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFFFF] text-[#1c1d27]">
      <div className="relative isolate min-h-[360px] overflow-hidden bg-[#003BE2] px-4 pb-12 pt-[138px] text-white sm:h-[360px] sm:min-h-0 sm:px-6 sm:pb-0 sm:pt-[162px] lg:px-8">
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
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h1 className="text-[30px] font-semibold leading-tight tracking-[-.035em] sm:text-[36px]">
            Find Your Next Course
          </h1>
          <form
            action="/courses"
            className="mx-auto mt-8 flex w-full max-w-[624px] items-center gap-4 max-sm:mt-7 max-sm:gap-2"
          >
            <label className="flex h-[52px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-[26px] text-[#858995]">
              <Search size={20} aria-hidden="true" className="shrink-0" />
              <input
                className="w-full border-0 bg-transparent text-[16px] text-[#222] outline-none placeholder:text-[#8a8e98]"
                name="q"
                defaultValue={query}
                placeholder="Search"
                aria-label="Search courses"
              />
            </label>
            <div className="relative h-12 shrink-0">
              <select
                name="type"
                aria-label="Search category"
                defaultValue="courses"
                className="h-full cursor-pointer appearance-none rounded-full bg-[#D4FB20] py-0 pl-6 pr-12 text-[16px] text-[#111] outline-none focus-visible:ring-2 focus-visible:ring-white max-sm:pl-4 max-sm:pr-9"
              >
                <option value="courses">Courses</option>
                <option value="creators">Creators</option>
              </select>
              <ChevronDown
                size={18}
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#111] max-sm:right-3"
              />
            </div>
          </form>
        </div>
      </div>
      <Courses query={query} />
    </main>
  );
}

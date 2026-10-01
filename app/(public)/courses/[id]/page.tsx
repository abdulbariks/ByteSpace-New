import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  FileText,
  Play,
  Share2,
  UsersRound,
  Video,
  WandSparkles,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import CourseDescriptionDetails from "@/components/course/CourseDescriptionDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ByteSpace — Course details",
};

const lessons = [
  ["01", "Introduction to Digital Assets", "12 mins"],
  ["02", "Design Principles for Impact", "21 mins"],
  ["03", "Advanced Techniques in Digital Creation", "16 mins"],
];

export default function CourseDetailsPage() {
  return (
    <main className="min-h-screen bg-white text-[#25262b]">
      <section className="relative isolate overflow-hidden bg-[#003BE2] text-white">
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
        <div className="relative z-10 mx-auto w-[min(90%,1200px)] pb-12 pt-32 max-md:w-[92%] max-md:pb-10 max-md:pt-24">
          <div className="flex items-start justify-between gap-5">
            <div>
              <h1 className="m-0 text-[clamp(25px,3vw,38px)] font-semibold leading-tight tracking-[-.035em]">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="mt-1 text-[clamp(14px,1.5vw,19px)] font-medium">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-5 text-sm">
                by{" "}
                <Link className="text-[#D4FB20]" href="/creators">
                  purepearl studio
                </Link>
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#33353b]">
                <span className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-5">
                  <BarChart3 size={16} className="text-blue-700" /> Intermediate
                </span>
                <span className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-5">
                  <span className="text-blue-700">★</span> 4.8 (172 reviews)
                </span>
                <span className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-5">
                  <UsersRound size={17} className="text-blue-700" /> 199
                  Students
                </span>
              </div>
            </div>
            <button
              type="button"
              className="mt-1 inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#D4FB20] px-6 text-xs text-[#222] transition-transform hover:-translate-y-0.5 max-sm:px-4"
            >
              <Share2 size={15} /> <span className="max-sm:hidden">Share</span>
            </button>
          </div>

          <div className="mt-14 max-w-[730px] max-md:mt-8 max-md:max-w-none">
            <div className="relative aspect-[1.48] overflow-hidden rounded-[24px] bg-[#e6e6e6] max-md:rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85"
                alt="Course instructor introducing digital asset design"
                fill
                priority
                sizes="(max-width: 768px) 92vw, 65vw"
                className="object-cover object-center"
              />
              <button
                type="button"
                aria-label="Play course introduction"
                className="absolute left-1/2 top-1/2 grid size-[90px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[24px] bg-[#765b5d]/90 text-white shadow-lg transition-transform hover:scale-105 max-sm:size-16 max-sm:rounded-2xl"
              >
                <span className="grid size-14 place-items-center rounded-full bg-white text-[#b68b81] max-sm:size-10">
                  <Play size={25} fill="currentColor" className="ml-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(90%,1200px)] grid-cols-[minmax(0,1fr)_minmax(300px,410px)] gap-16 pb-16 text-[#25262b] max-lg:gap-8 max-lg:w-[92%] max-lg:grid-cols-1">
        <CourseDescriptionDetails />
        <aside className="relative z-20 mt-0 lg:-mt-[540px] self-start rounded-[24px] border border-[#dedee3] bg-white p-10 text-[#393a40] shadow-sm max-lg:p-7 max-md:order-first max-md:mt-8 max-md:p-6">
          <h2 className="text-[18px] font-semibold">112 Lessons (24 hours)</h2>
          <ol id="lessons" className="mt-5 space-y-3">
            {lessons.map(([number, title, duration]) => (
              <li
                key={number}
                className="grid grid-cols-[24px_minmax(0,1fr)_54px] gap-2 text-[14px] leading-snug"
              >
                <span>{number}</span>
                <span>{title}</span>
                <span className="text-right text-blue-600">{duration}</span>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-sm text-[#85868d]">99 more videos</p>
          <p className="mt-7 text-sm leading-relaxed text-[#85868d]">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>
          <p className="mt-5">
            <strong className="text-[30px] leading-none text-blue-700">
              $25
            </strong>
            <span className="text-xs text-[#85868d]">/lifetime</span>
          </p>
          <Link
            href="/register"
            className="mt-5 flex h-11 items-center justify-center rounded-full bg-[#D4FB20] text-sm text-[#222] transition-colors hover:bg-[#c8f000]"
          >
            Enroll Now
          </Link>
          <h3 className="mt-6 text-base font-semibold">This course include</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#85868d]">
            <li className="flex items-center gap-3">
              <FileText size={17} className="text-blue-600" /> Learning
              Resources
            </li>
            <li className="flex items-center gap-3">
              <Video size={17} className="text-blue-600" /> Quality Lesson
              Videos
            </li>
            <li className="flex items-center gap-3">
              <BookOpen size={17} className="text-blue-600" /> Certificate of
              Completion
            </li>
            <li className="flex items-center gap-3">
              <WandSparkles size={17} className="text-blue-600" /> Private
              Consultation
            </li>
          </ul>
          <div className="mt-6 border-t border-[#dedee3] pt-5">
            <div className="flex items-center gap-3">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
                alt="PurePearl Studio creator"
                width={50}
                height={50}
                className="size-[50px] rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-[#222]">
                  PurePearl Studio
                </p>
                <p className="mt-1 text-xs text-[#85868d]">
                  Professional Creator
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#85868d]">
              Ready to Dive In? Enroll Now and Start Building Your Digital
              Future!
            </p>
            <Link
              href="/creators"
              className="mt-4 inline-flex rounded-full border border-[#d8d9de] px-4 py-2 text-xs"
            >
              See Full Profile
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

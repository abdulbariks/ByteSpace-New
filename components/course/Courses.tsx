import { ChevronLeft, ChevronRight, Filter, SlidersHorizontal } from "lucide-react";
import { CourseCard } from "@/components/reusable/course-card";

const courses = [
  {
    title: "Learn Figma from Basic",
    creator: "PurePearl Studio",
    category: "DESIGN",
    price: "$25",
    tone: "mint",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Build Digital Asset",
    creator: "PurePearl Studio",
    category: "DESIGN",
    price: "$25",
    tone: "coral",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Power of Big Data",
    creator: "PurePearl Studio",
    category: "DATA & ANALYTICS",
    price: "$25",
    tone: "violet",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Balancing Productivity and Focus",
    creator: "PurePearl Studio",
    category: "PRODUCTIVITY",
    price: "$25",
    tone: "mint",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Mastering Money Management",
    creator: "PurePearl Studio",
    category: "FINANCE",
    price: "$25",
    tone: "coral",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "From Idea to Startup Success",
    creator: "PurePearl Studio",
    category: "BUSINESS",
    price: "$25",
    tone: "violet",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  },
];

const topics = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export function Courses() {
  return (
    <section className="mx-auto w-[min(90%,1200px)] py-8 text-[#1f2024] max-sm:w-[92%] max-sm:py-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#e7e7eb] px-3 text-[11px]" type="button">
            <Filter size={12} /> Filter
          </button>
          <button className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#e7e7eb] px-3 text-[11px]" type="button">
            <SlidersHorizontal size={12} /> Level
          </button>
          <button className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#e7e7eb] px-3 text-[11px]" type="button">
            Category
          </button>
        </div>
        <button className="inline-flex h-8 items-center gap-1.5 rounded-full border border-[#e7e7eb] px-3 text-[11px] max-sm:px-2" type="button">
          <SlidersHorizontal size={12} /> Most relevant
        </button>
      </div>

      <div className="mb-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {topics.map((topic, index) => (
          <button
            key={topic}
            type="button"
            className={`h-7 shrink-0 rounded-full px-3 text-[10px] ${index === 0 ? "bg-[#D4FB20] text-[#20221a]" : "border border-[#e7e7eb] bg-white text-[#575963]"}`}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 max-sm:gap-2">
        {Array.from({ length: 3 }, (_, page) =>
          courses.map((course, index) => (
            <CourseCard key={`${page}-${index}`} {...course} />
          )),
        )}
      </div>

      <nav aria-label="Course pages" className="mt-6 flex items-center justify-center gap-1.5 text-[11px]">
        <button aria-label="Previous page" className="grid size-7 place-items-center rounded-full border border-[#e7e7eb] text-[#737580]" type="button">
          <ChevronLeft size={14} />
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            aria-current={page === 1 ? "page" : undefined}
            className={`grid size-7 place-items-center rounded-full ${page === 1 ? "bg-[#D4FB20] text-[#1f2024]" : "text-[#656771]"}`}
            type="button"
          >
            {page}
          </button>
        ))}
        <button aria-label="Next page" className="grid size-7 place-items-center rounded-full border border-[#e7e7eb] text-[#737580]" type="button">
          <ChevronRight size={14} />
        </button>
      </nav>
    </section>
  );
}

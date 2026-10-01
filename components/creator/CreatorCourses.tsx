import { BarChart3, Filter, Shapes, SlidersHorizontal } from "lucide-react";
import { CourseCard } from "@/components/reusable/course-card";

const creatorCourses = [
  {
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    category: "DESIGN",
    price: "$25",
    tone: "mint",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Build Digital Asset",
    creator: "purepearl studio",
    category: "DESIGN",
    price: "$25",
    tone: "coral",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "the Power of Big Data",
    creator: "purepearl studio",
    category: "DATA & ANALYTICS",
    price: "$25",
    tone: "violet",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Balancing Productivity and Focus",
    creator: "purepearl studio",
    category: "PRODUCTIVITY",
    price: "$25",
    tone: "mint",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Mastering Money Management",
    creator: "purepearl studio",
    category: "FINANCE",
    price: "$25",
    tone: "coral",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "From Idea to Startup Success",
    creator: "purepearl studio",
    category: "BUSINESS",
    price: "$25",
    tone: "violet",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  },
];

export function CreatorCourses() {
  return (
    <section className="mx-auto w-[min(90%,1200px)] py-12 max-md:w-[92%] max-md:py-8">
      <div className="mb-10 flex items-center justify-between gap-4 max-sm:mb-6">
        <div className="flex flex-wrap items-center gap-4 max-sm:gap-2">
          <button
            type="button"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-[#e0e1e5] bg-white px-5 text-sm text-[#44464d]"
          >
            <Filter size={18} /> Filter
          </button>
          <button
            type="button"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-[#e0e1e5] bg-white px-5 text-sm text-[#44464d]"
          >
            <BarChart3 size={18} /> Level
          </button>
          <button
            type="button"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-[#e0e1e5] bg-white px-5 text-sm text-[#44464d]"
          >
            <Shapes size={18} /> Category
          </button>
        </div>
        <button
          type="button"
          className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full border border-[#e0e1e5] bg-white px-5 text-sm text-[#44464d] max-sm:px-3"
        >
          <SlidersHorizontal size={18} /> Most relevant
        </button>
      </div>

      <div className="grid grid-cols-3 gap-10 max-lg:gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5">
        {creatorCourses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  );
}

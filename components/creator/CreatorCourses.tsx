"use client";

import { useMemo, useState } from "react";
import { BarChart3, Filter, Shapes, SlidersHorizontal, X } from "lucide-react";
import { CourseCard } from "@/components/reusable/course-card";
import {
  DropdownCheckbox,
  DropdownHeader,
  DropdownRadio,
  FilterDropdown,
} from "@/components/reusable/filter-dropdown";

type Course = {
  title: string;
  creator: string;
  category: string;
  price: string;
  tone: string;
  image: string;
  level: string;
  priceValue: number;
};

const creatorCourses: Course[] = [
  {
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    category: "DESIGN",
    price: "$25",
    tone: "mint",
    level: "Beginner",
    priceValue: 25,
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Build Digital Asset",
    creator: "purepearl studio",
    category: "DESIGN",
    price: "$25",
    tone: "coral",
    level: "Intermediate",
    priceValue: 25,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "the Power of Big Data",
    creator: "purepearl studio",
    category: "DATA & ANALYTICS",
    price: "$25",
    tone: "violet",
    level: "Advanced",
    priceValue: 25,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Balancing Productivity and Focus",
    creator: "purepearl studio",
    category: "PRODUCTIVITY",
    price: "$18",
    tone: "mint",
    level: "Beginner",
    priceValue: 18,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Mastering Money Management",
    creator: "purepearl studio",
    category: "FINANCE",
    price: "$40",
    tone: "coral",
    level: "Intermediate",
    priceValue: 40,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "From Idea to Startup Success",
    creator: "purepearl studio",
    category: "BUSINESS",
    price: "$55",
    tone: "violet",
    level: "Advanced",
    priceValue: 55,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  },
];

const levels = ["Beginner", "Intermediate", "Advanced"];

const priceRanges = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "free", label: "Free", min: 0, max: 0 },
  { id: "under-25", label: "Under $25", min: 0, max: 24.99 },
  { id: "25-50", label: "$25 – $50", min: 25, max: 50 },
  { id: "above-50", label: "$50 and above", min: 50.01, max: Infinity },
];

const categories = Array.from(
  new Set(creatorCourses.map((course) => course.category)),
);

const sortOptions = [
  { id: "relevant", label: "Most relevant" },
  { id: "latest", label: "Latest" },
  { id: "popular", label: "Most popular" },
  { id: "price-low", label: "Price: low to high" },
  { id: "price-high", label: "Price: high to low" },
];

function toggleValue(value: string, current: string[], setter: (next: string[]) => void) {
  setter(current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
}

export function CreatorCourses() {
  const [priceRange, setPriceRange] = useState("all");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState("relevant");

  const hasFilters =
    priceRange !== "all" || selectedLevels.length > 0 || selectedCategories.length > 0 || sort !== "relevant";

  const resetAll = () => {
    setPriceRange("all");
    setSelectedLevels([]);
    setSelectedCategories([]);
    setSort("relevant");
  };

  const visibleCourses = useMemo(() => {
    const range = priceRanges.find((item) => item.id === priceRange) ?? priceRanges[0];

    const filtered = creatorCourses.filter((course) => {
      const matchesPrice = course.priceValue >= range.min && course.priceValue <= range.max;
      const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(course.category);
      return matchesPrice && matchesLevel && matchesCategory;
    });

    switch (sort) {
      case "price-low":
        return [...filtered].sort((a, b) => a.priceValue - b.priceValue);
      case "price-high":
        return [...filtered].sort((a, b) => b.priceValue - a.priceValue);
      case "latest":
      case "popular":
        return [...filtered].reverse();
      default:
        return filtered;
    }
  }, [priceRange, selectedLevels, selectedCategories, sort]);

  const sortLabel = sortOptions.find((option) => option.id === sort)?.label ?? "Most relevant";

  return (
    <section className="mx-auto w-[min(90%,1200px)] py-12 max-md:w-[92%] max-md:py-8">
      <div className="mb-6 flex items-center justify-between gap-4 max-sm:mb-6 max-sm:flex-wrap">
        <div className="flex flex-wrap items-center gap-4 max-sm:gap-2">
          <FilterDropdown
            label="Filter"
            icon={<Filter size={18} />}
            badge={priceRange === "all" ? 0 : 1}
          >
            {() => (
              <div role="menu" className="flex flex-col">
                <DropdownHeader>Price</DropdownHeader>
                {priceRanges.map((range) => (
                  <DropdownRadio
                    key={range.id}
                    label={range.label}
                    checked={priceRange === range.id}
                    onSelect={() => setPriceRange(range.id)}
                  />
                ))}
                {priceRange !== "all" && (
                  <button
                    type="button"
                    onClick={() => setPriceRange("all")}
                    className="mt-1 flex w-full items-center gap-2 rounded-xl border-t border-[#ececf0] px-3 pt-3 pb-2 text-sm text-[#8b8c93] hover:text-[#25262b]"
                  >
                    <X size={15} /> Clear price filter
                  </button>
                )}
              </div>
            )}
          </FilterDropdown>

          <FilterDropdown
            label="Level"
            icon={<BarChart3 size={18} />}
            badge={selectedLevels.length}
          >
            {() => (
              <div role="menu" className="flex flex-col">
                {levels.map((level) => (
                  <DropdownCheckbox
                    key={level}
                    label={level}
                    checked={selectedLevels.includes(level)}
                    onToggle={() => toggleValue(level, selectedLevels, setSelectedLevels)}
                  />
                ))}
              </div>
            )}
          </FilterDropdown>

          <FilterDropdown
            label="Category"
            icon={<Shapes size={18} />}
            badge={selectedCategories.length}
          >
            {() => (
              <div role="menu" className="flex max-h-[280px] flex-col overflow-y-auto">
                {categories.map((category) => (
                  <DropdownCheckbox
                    key={category}
                    label={category}
                    checked={selectedCategories.includes(category)}
                    onToggle={() =>
                      toggleValue(category, selectedCategories, setSelectedCategories)
                    }
                  />
                ))}
              </div>
            )}
          </FilterDropdown>
        </div>

        <div className="flex items-center gap-3 max-sm:w-full">
          {hasFilters && (
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex h-12 items-center gap-1.5 rounded-full px-3 text-sm text-[#6b6c74] transition-colors hover:text-[#25262b]"
            >
              <X size={16} /> Clear all
            </button>
          )}
          <FilterDropdown
            label={sortLabel}
            icon={<SlidersHorizontal size={18} />}
            align="right"
          >
            {(close) => (
              <div role="menu" className="flex flex-col">
                {sortOptions.map((option) => (
                  <DropdownRadio
                    key={option.id}
                    label={option.label}
                    checked={sort === option.id}
                    onSelect={() => {
                      setSort(option.id);
                      close();
                    }}
                  />
                ))}
              </div>
            )}
          </FilterDropdown>
        </div>
      </div>

      <p className="mb-6 text-sm text-[#6b6c74]" aria-live="polite">
        {visibleCourses.length} {visibleCourses.length === 1 ? "course" : "courses"}
        {hasFilters ? " matching your filters" : ""}
      </p>

      {visibleCourses.length > 0 ? (
        <div className="grid grid-cols-3 gap-10 max-lg:gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5">
          {visibleCourses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      ) : (
        <div className="rounded-[18px] border border-dashed border-[#d7d8dd] bg-[#fafafb] px-6 py-20 text-center">
          <p className="m-0 text-lg font-semibold text-[#25262b]">No courses found</p>
          <p className="mt-2 mb-5 text-sm text-[#6b6c74]">
            Try removing a filter or widening your price range.
          </p>
          <button
            type="button"
            onClick={resetAll}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#D4FB20] px-5 text-sm text-[#222] transition-transform hover:-translate-y-0.5"
          >
            <X size={16} /> Clear all filters
          </button>
        </div>
      )}
    </section>
  );
}

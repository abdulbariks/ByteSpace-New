"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Filter,
  Shapes,
  SlidersHorizontal,
  X,
} from "lucide-react";
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
  topics: string[];
  price: string;
  priceValue: number;
  tone: string;
  level: string;
  image: string;
};

const courses: Course[] = [
  {
    title: "Learn Figma from Basic",
    creator: "PurePearl Studio",
    category: "DESIGN",
    topics: ["UI/UX Design", "Featured"],
    price: "$25",
    priceValue: 25,
    tone: "mint",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Build Digital Asset",
    creator: "PurePearl Studio",
    category: "DESIGN",
    topics: ["UI/UX Design"],
    price: "$25",
    priceValue: 25,
    tone: "coral",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Power of Big Data",
    creator: "Nexa Analytics",
    category: "DATA & ANALYTICS",
    topics: ["Featured"],
    price: "$45",
    priceValue: 45,
    tone: "violet",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Balancing Productivity and Focus",
    creator: "Deep Work Lab",
    category: "PRODUCTIVITY",
    topics: ["Featured"],
    price: "$18",
    priceValue: 18,
    tone: "mint",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Mastering Money Management",
    creator: "Capital Basics",
    category: "FINANCE",
    topics: ["Marketing"],
    price: "$40",
    priceValue: 40,
    tone: "coral",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "From Idea to Startup Success",
    creator: "Venture Craft",
    category: "BUSINESS",
    topics: ["Marketing", "Featured"],
    price: "$55",
    priceValue: 55,
    tone: "violet",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Songwriting Essentials",
    creator: "Echo Lane",
    category: "MUSIC",
    topics: ["Music"],
    price: "$22",
    priceValue: 22,
    tone: "violet",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Mixing Tracks Like a Pro",
    creator: "Echo Lane",
    category: "MUSIC",
    topics: ["Music", "Animation"],
    price: "$35",
    priceValue: 35,
    tone: "mint",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Watercolor for Absolute Beginners",
    creator: "Marta Rivera",
    category: "DRAWING & PAINTING",
    topics: ["Drawing & Painting"],
    price: "$15",
    priceValue: 15,
    tone: "coral",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Character Animation Fundamentals",
    creator: "Framefolk",
    category: "ANIMATION",
    topics: ["Animation", "Drawing & Painting"],
    price: "$48",
    priceValue: 48,
    tone: "violet",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Instagram Growth Playbook",
    creator: "Social Sprint",
    category: "SOCIAL MEDIA",
    topics: ["Social Media", "Marketing"],
    price: "$29",
    priceValue: 29,
    tone: "mint",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Creative Campaigns That Convert",
    creator: "Adcraft",
    category: "CREATIVE MARKETING",
    topics: ["Creative Marketing", "Marketing"],
    price: "$60",
    priceValue: 60,
    tone: "coral",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Street Food Cooking Masterclass",
    creator: "Taste Trail",
    category: "COOKING",
    topics: ["Cooking"],
    price: "$32",
    priceValue: 32,
    tone: "mint",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85",
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

const levels = ["Beginner", "Intermediate", "Advanced"];

const categories = Array.from(
  new Set(courses.map((course) => course.category)),
).sort();

const priceRanges = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "free", label: "Free", min: 0, max: 0 },
  { id: "under-25", label: "Under $25", min: 0, max: 24.99 },
  { id: "25-50", label: "$25 – $50", min: 25, max: 50 },
  { id: "above-50", label: "$50 and above", min: 50.01, max: Infinity },
];

const sortOptions = [
  { id: "relevant", label: "Most relevant" },
  { id: "latest", label: "Latest" },
  { id: "popular", label: "Most popular" },
  { id: "price-low", label: "Price: low to high" },
  { id: "price-high", label: "Price: high to low" },
];

const PAGE_SIZE = 6;

function toggleValue(
  value: string,
  current: string[],
  setter: (next: string[]) => void,
) {
  setter(
    current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value],
  );
}

export function Courses({ query = "" }: { query?: string }) {
  const [topic, setTopic] = useState("Featured");
  const [priceRange, setPriceRange] = useState("all");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState("relevant");
  const [page, setPage] = useState(1);

  const search = query.trim().toLowerCase();
  const hasFilters =
    search.length > 0 ||
    topic !== "Featured" ||
    priceRange !== "all" ||
    selectedLevels.length > 0 ||
    selectedCategories.length > 0 ||
    sort !== "relevant";

  const resetAll = () => {
    setTopic("Featured");
    setPriceRange("all");
    setSelectedLevels([]);
    setSelectedCategories([]);
    setSort("relevant");
    setPage(1);
  };

  const selectTopic = (next: string) => {
    setTopic(next);
    setPage(1);
  };

  const selectPriceRange = (next: string) => {
    setPriceRange(next);
    setPage(1);
  };

  const toggleLevel = (level: string) => {
    toggleValue(level, selectedLevels, setSelectedLevels);
    setPage(1);
  };

  const toggleCategory = (category: string) => {
    toggleValue(category, selectedCategories, setSelectedCategories);
    setPage(1);
  };

  const selectSort = (next: string) => {
    setSort(next);
    setPage(1);
  };

  const filteredCourses = useMemo(() => {
    const range =
      priceRanges.find((item) => item.id === priceRange) ?? priceRanges[0];

    const matched = courses.filter((course) => {
      const matchesTopic =
        topic === "Featured" || course.topics.includes(topic);
      const matchesPrice =
        course.priceValue >= range.min && course.priceValue <= range.max;
      const matchesLevel =
        selectedLevels.length === 0 || selectedLevels.includes(course.level);
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(course.category);
      const matchesSearch =
        search.length === 0 ||
        [course.title, course.creator, course.category, ...course.topics]
          .join(" ")
          .toLowerCase()
          .includes(search);

      return (
        matchesTopic &&
        matchesPrice &&
        matchesLevel &&
        matchesCategory &&
        matchesSearch
      );
    });

    switch (sort) {
      case "price-low":
        return [...matched].sort((a, b) => a.priceValue - b.priceValue);
      case "price-high":
        return [...matched].sort((a, b) => b.priceValue - a.priceValue);
      case "latest":
      case "popular":
        return [...matched].reverse();
      default:
        return matched;
    }
  }, [topic, priceRange, selectedLevels, selectedCategories, sort, search]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleCourses = filteredCourses.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const goToPage = (next: number) => {
    setPage(Math.min(Math.max(next, 1), totalPages));
    document
      .getElementById("courses-results")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sortLabel =
    sortOptions.find((option) => option.id === sort)?.label ?? "Most relevant";

  return (
    <section className="mx-auto w-[min(90%,1200px)] py-8 text-[#1f2024] max-sm:w-[92%] max-sm:py-6">
      <div className="mb-5 flex items-center justify-between gap-3 max-sm:flex-wrap">
        <div className="flex flex-wrap items-center gap-2">
          <FilterDropdown
            label="Filter"
            icon={<Filter size={12} />}
            size="sm"
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
                    onSelect={() => selectPriceRange(range.id)}
                  />
                ))}
              </div>
            )}
          </FilterDropdown>

          <FilterDropdown
            label="Level"
            icon={<BarChart3 size={12} />}
            size="sm"
            badge={selectedLevels.length}
          >
            {() => (
              <div role="menu" className="flex flex-col">
                {levels.map((level) => (
                  <DropdownCheckbox
                    key={level}
                    label={level}
                    checked={selectedLevels.includes(level)}
                    onToggle={() => toggleLevel(level)}
                  />
                ))}
              </div>
            )}
          </FilterDropdown>

          <FilterDropdown
            label="Category"
            icon={<Shapes size={12} />}
            size="sm"
            badge={selectedCategories.length}
          >
            {() => (
              <div
                role="menu"
                className="flex max-h-[280px] flex-col overflow-y-auto"
              >
                {categories.map((category) => (
                  <DropdownCheckbox
                    key={category}
                    label={category}
                    checked={selectedCategories.includes(category)}
                    onToggle={() => toggleCategory(category)}
                  />
                ))}
              </div>
            )}
          </FilterDropdown>

          {hasFilters && (
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex h-8 shrink-0 items-center gap-1 rounded-full px-2.5 text-[11px] text-[#6b6c74] transition-colors hover:text-[#1f2024]"
            >
              <X size={12} /> Clear all
            </button>
          )}
        </div>

        <FilterDropdown
          label={sortLabel}
          icon={<SlidersHorizontal size={12} />}
          size="sm"
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
                    selectSort(option.id);
                    close();
                  }}
                />
              ))}
            </div>
          )}
        </FilterDropdown>
      </div>

      <div className="mb-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {topics.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={topic === item}
            onClick={() => selectTopic(item)}
            className={`h-7 shrink-0 rounded-full px-3 text-[10px] transition-colors ${
              topic === item
                ? "bg-[#D4FB20] text-[#20221a]"
                : "border border-[#e7e7eb] bg-white text-[#575963] hover:border-[#c6c7cd]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p
        id="courses-results"
        aria-live="polite"
        className="mb-4 text-[11px] text-[#737580]"
      >
        {filteredCourses.length}{" "}
        {filteredCourses.length === 1 ? "course" : "courses"}
        {search && ` for “${query.trim()}”`}
        {totalPages > 1 && ` · page ${currentPage} of ${totalPages}`}
      </p>

      {visibleCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:gap-2">
          {visibleCourses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      ) : (
        <div className="rounded-[18px] border border-dashed border-[#d7d8dd] bg-[#fafafb] px-6 py-16 text-center">
          <p className="m-0 text-base font-semibold text-[#1f2024]">
            No courses found
          </p>
          <p className="mt-2 mb-5 text-[13px] text-[#737580]">
            {search
              ? `Nothing matches “${query.trim()}”. Try a different keyword or clear your filters.`
              : "Try removing a filter or switching to another topic."}
          </p>
          <button
            type="button"
            onClick={resetAll}
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#D4FB20] px-4 text-[11px] text-[#222] transition-transform hover:-translate-y-0.5"
          >
            <X size={13} /> Clear all filters
          </button>
        </div>
      )}

      {totalPages > 1 && (
        <nav
          aria-label="Course pages"
          className="mt-6 flex items-center justify-center gap-1.5 text-[11px]"
        >
          <button
            aria-label="Previous page"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
            className="grid size-7 place-items-center rounded-full border border-[#e7e7eb] text-[#737580] transition-colors enabled:hover:border-[#c6c7cd] disabled:opacity-40"
          >
            <ChevronLeft size={14} />
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (number) => (
              <button
                key={number}
                aria-current={number === currentPage ? "page" : undefined}
                onClick={() => goToPage(number)}
                className={`grid size-7 place-items-center rounded-full transition-colors ${
                  number === currentPage
                    ? "bg-[#D4FB20] text-[#1f2024]"
                    : "text-[#656771] hover:bg-[#f3f3f5]"
                }`}
              >
                {number}
              </button>
            ),
          )}
          <button
            aria-label="Next page"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
            className="grid size-7 place-items-center rounded-full border border-[#e7e7eb] text-[#737580] transition-colors enabled:hover:border-[#c6c7cd] disabled:opacity-40"
          >
            <ChevronRight size={14} />
          </button>
        </nav>
      )}
    </section>
  );
}

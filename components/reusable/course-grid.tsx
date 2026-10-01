"use client";

import { useMemo, useState } from "react";
import { CourseCard } from "@/components/reusable/course-card";

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
];

export function CourseGrid({ skill = "Featured" }: { skill?: string }) {
  const visibleCourses = useMemo(
    () =>
      courses.filter(
        (course) => skill === "Featured" || course.topics.includes(skill),
      ),
    [skill],
  );

  return (
    <div className="grid grid-cols-3 gap-[22px] max-md:grid-cols-2 max-md:gap-3">
      {visibleCourses.map((course) => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  );
}
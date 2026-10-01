"use client";

import { useState } from "react";
import { Skills } from "@/components/home/Skills";
import { CourseGrid } from "@/components/reusable/course-grid";

export function ExploreSkills() {
  const [activeSkill, setActiveSkill] = useState("Featured");

  return (
    <>
      <Skills activeSkill={activeSkill} onSelectSkill={setActiveSkill} />
      <CourseGrid skill={activeSkill} />
    </>
  );
}
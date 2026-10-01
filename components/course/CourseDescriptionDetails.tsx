"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Video } from "lucide-react";

const previews = [
  "photo-1586717791821-3f44a563fa4c",
  "photo-1558655146-d09347e92766",
  "photo-1498050108023-c5249f4df085",
  "photo-1512941937669-90a1b58e7e9c",
];

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const modules = [
  {
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like ‘Understanding Digital Elements’ and ‘Navigating Design Software Tools.’ Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as ‘Color Theory in Digital Design’ and ‘Typography Essentials.’ Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand ‘Design Thinking in Digital Creation’ and delve into ‘User Experience (UX) Essentials.’ Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like ‘Creating Interactive Presentations’ and ‘Integrating Multimedia Elements.’ Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with ‘Effective Presentation Techniques’ and embrace collaboration with ‘Peer Critique and Collaboration.’ Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for ‘Mobile Platforms’ and optimize for ‘Social Media.’ Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const reviews = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "photo-1500648767791-00dcc994a43e",
    rating: 5,
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    avatar: "photo-1507003211169-0a1dd7228f2d",
    rating: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I’ve learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: "photo-1534528741775-53994a69daeb",
    rating: 5,
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar: "photo-1494790108377-be9c29b29330",
    rating: 4,
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

const ratingCounts = [720, 120, 21, 12, 16];

function AboutPanel() {
  return (
    <article id="about-panel" role="tabpanel" aria-labelledby="about-tab" className="mt-10">
      <h2 className="text-lg font-semibold">Description</h2>
      <div className="mt-5 space-y-6 text-[14px] leading-[1.7] text-[#7b7c83]">
        <p>
          Embark on an enlightening exploration into the world of digital
          creation with our comprehensive course, “Build Digital Assets: A
          Comprehensive Guide.” This transformative learning experience invites
          you to delve deep into the intricacies of crafting impactful digital
          content. From laying the groundwork with foundational concepts to
          mastering advanced techniques, this guide is meticulously curated to
          empower you with the skills essential for navigating the dynamic
          landscape of digital asset creation.
        </p>
        <p>
          In the initial modules, you’ll establish a solid foundation by
          immersing yourself in the foundational concepts that form the
          backbone of digital asset creation. Understand the fundamental
          elements that constitute compelling digital content and gain
          proficiency in leveraging these elements to communicate effectively
          in the digital realm.
        </p>
        <p>
          As you progress through the course, you’ll ascend to higher levels of
          expertise, delving into the nuances of design principles that drive
          impactful creations. Uncover the secrets behind effective visual
          communication, exploring color theory, typography, and layout
          strategies that elevate your digital assets to new heights. Engage in
          hands-on exercises that reinforce your understanding, allowing you to
          apply these principles in practical scenarios.
        </p>
      </div>
      <h2 className="mt-7 text-lg font-semibold">Sneak Peak</h2>
      <div className="mt-4 grid grid-cols-4 gap-4 max-sm:grid-cols-2">
        {previews.map((photo, index) => (
          <div
            key={photo}
            className="relative aspect-[1.35] overflow-hidden rounded-xl bg-[#eee]"
          >
            <Image
              src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=400&q=80`}
              alt={`Course preview ${index + 1}`}
              fill
              sizes="(max-width: 640px) 45vw, 17vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <h2 className="mt-6 text-lg font-semibold">Key Points</h2>
      <ul className="mt-4 space-y-3 text-sm text-[#777980]">
        {keyPoints.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <CheckCircle2
              size={17}
              fill="#0645e8"
              className="shrink-0 text-white"
            />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

function LessonsPanel() {
  return (
    <section
      id="lessons-panel"
      role="tabpanel"
      aria-labelledby="lessons-tab"
      className="mt-10"
    >
      <h2 className="text-lg font-semibold">Explore the Modules</h2>
      <p className="mt-5 text-sm leading-relaxed text-[#7b7c83]">
        Immerse yourself in the course content as we break down each module
        into comprehensive lessons, providing practical insights and hands-on
        experiences.
      </p>
      <h3 className="mt-7 text-lg font-semibold">Lesson List</h3>
      <ul className="mt-5 space-y-5">
        {modules.map((module) => (
          <li key={module.title} className="flex items-start gap-4">
            <span className="grid size-[72px] shrink-0 place-items-center rounded-[22px] bg-[#D4FB20] text-[#24262b] max-sm:size-14 max-sm:rounded-2xl">
              <Video size={29} />
            </span>
            <div className="pt-1">
              <h4 className="text-sm font-semibold">{module.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#7b7c83]">
                {module.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="mt-8 text-lg font-semibold">Lesson Content</h3>
      <p className="mt-5 text-sm leading-relaxed text-[#7b7c83]">
        Engage with each lesson through captivating video content, detailed
        textual explanations, and interactive elements. Download resources,
        complete assignments, and test your understanding with quizzes.
      </p>
      <h3 className="mt-8 text-lg font-semibold">Lesson Progress Tracking</h3>
      <p className="mt-5 text-sm leading-relaxed text-[#7b7c83]">
        Witness your growth as you complete lessons, with an intuitive progress
        tracker guiding you through your learning journey.
      </p>
      <div className="mt-6 rounded-2xl border border-[#dedee3] bg-white p-5">
        <p className="text-sm">Learning Progress</p>
        <strong className="mt-3 block text-[36px] leading-none">55%</strong>
        <div
          className="mt-4 h-2 overflow-hidden rounded-full bg-[#e5e6e8]"
          role="progressbar"
          aria-label="Course learning progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={55}
        >
          <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
        </div>
      </div>
    </section>
  );
}

function ReviewsPanel() {
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const filteredReviews = ratingFilter
    ? reviews.filter((review) => review.rating === ratingFilter)
    : reviews;

  return (
    <section
      id="reviews-panel"
      role="tabpanel"
      aria-labelledby="reviews-tab"
      className="mt-10"
    >
      <h2 className="text-lg font-semibold">What Learners Are Saying</h2>
      <p className="mt-5 text-sm leading-relaxed text-[#7b7c83]">
        Discover what our learners have to say about their experience with ‘Build
        Digital Assets: A Comprehensive Guide.’ Read reviews and ratings from
        individuals who have embarked on the transformative journey of mastering
        digital asset creation.
      </p>

      <div className="mt-7 grid grid-cols-[130px_minmax(0,1fr)] items-center gap-8 rounded-2xl border border-[#dedee3] bg-white p-7 max-sm:grid-cols-1 max-sm:gap-5">
        <div className="grid min-h-[140px] content-center justify-items-center rounded-xl bg-[#D4FB20]">
          <span className="text-sm">Ratings</span>
          <strong className="text-[38px] leading-tight">4.7</strong>
        </div>
        <div className="space-y-2.5">
          {ratingCounts.map((count, index) => {
            const rating = 5 - index;
            const percentage = Math.max((count / ratingCounts[0]) * 100, 3);
            return (
              <div
                key={rating}
                className="grid grid-cols-[minmax(0,1fr)_150px_42px] items-center gap-4 max-sm:grid-cols-[minmax(0,1fr)_110px_32px] max-[420px]:grid-cols-[minmax(0,1fr)_90px_28px]"
              >
                <div className="h-2 overflow-hidden rounded-full bg-[#e5e6e8]">
                  <div
                    className="h-full rounded-full bg-[#D4FB20]"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span
                  className="whitespace-nowrap text-center text-[22px] leading-none tracking-[.1em] text-[#51525a] max-sm:text-lg"
                  aria-label={`${rating} stars`}
                >
                  ★★★★★
                </span>
                <span className="text-right text-sm text-[#73747b]">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <h3 className="mt-7 text-base font-semibold">Individual Reviews:</h3>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setRatingFilter(null)}
          className={`rounded-full px-4 py-3 text-sm ${ratingFilter === null ? "bg-[#D4FB20] text-[#222]" : "bg-[#f3f3f5] text-[#50515a]"}`}
        >
          All rating
        </button>
        {[5, 4, 3, 2, 1].map((rating) => (
          <button
            key={rating}
            type="button"
            aria-pressed={ratingFilter === rating}
            onClick={() => setRatingFilter(ratingFilter === rating ? null : rating)}
            className={`rounded-full px-4 py-3 text-sm ${ratingFilter === rating ? "bg-[#D4FB20] text-[#222]" : "bg-[#f3f3f5] text-[#50515a]"}`}
          >
            <span className="mr-1 text-lg">★</span>{rating}
          </button>
        ))}
      </div>
      <div className="mt-6 space-y-5">
        {filteredReviews.map((review) => (
          <article
            key={review.name}
            className="rounded-[24px] border border-[#dedee3] bg-white p-7 max-sm:p-5"
          >
            <div className="flex items-center gap-4">
              <Image
                src={`https://images.unsplash.com/${review.avatar}?auto=format&fit=crop&w=100&h=100&q=80`}
                alt=""
                width={52}
                height={52}
                className="size-[52px] rounded-full object-cover"
              />
              <div>
                <h4 className="text-base font-semibold">{review.name}</h4>
                <p className="mt-1 text-sm text-[#7b7c83]">{review.role}</p>
              </div>
              <span className="ml-auto self-start text-sm text-[#7b7c83]">
                a year ago
              </span>
            </div>
            <p
              className="mt-5 text-[22px] tracking-[.1em] text-[#55565e]"
              aria-label={`${review.rating} out of 5 stars`}
            >
              {"★".repeat(review.rating)}
              <span className="text-[#d5d6d9]">
                {"★".repeat(5 - review.rating)}
              </span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#7b7c83]">
              “{review.text}”
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function CourseDescriptionDetails() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "lessons", label: "Lesson" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="py-12 max-md:py-8">
      <div role="tablist" aria-label="Course details" className="flex gap-4 text-xs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`${tab.id}-tab`}
            role="tab"
            type="button"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-4 py-3 ${activeTab === tab.id ? "bg-[#D4FB20] text-[#222]" : "bg-[#f3f3f5] text-[#50515a]"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab === "about" && <AboutPanel />}
      {activeTab === "lessons" && <LessonsPanel />}
      {activeTab === "reviews" && <ReviewsPanel />}
    </div>
  );
}

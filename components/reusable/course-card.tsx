import Link from "next/link";
import Image from "next/image";
import { BarChart3, Star } from "lucide-react";

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const studentAvatars = [
  "photo-1534528741775-53994a69daeb",
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1494790108377-be9c29b29330",
  "photo-1500648767791-00dcc994a43e",
];

const tones: Record<string, string> = {
  mint: "bg-[#ddf5e9] text-[#253510]",
  coral: "bg-[#ffd1c4] text-[#622e25]",
  violet: "bg-[#c7c5ff] text-[#26245a]",
};

export function CourseCard({
  title,
  creator,
  category,
  price,
  tone = "mint",
  image,
  level = "Beginner",
}: {
  title: string;
  creator: string;
  category: string;
  price: string;
  tone?: string;
  image?: string;
  level?: string;
}) {
  return (
    <Link
      href={`/courses/${slugify(title)}`}
      className="block"
      aria-label={`Open course: ${title}`}
    >
    <article className="overflow-hidden rounded-[18px] border border-[#e7e7eb] bg-white p-[10px] text-[#1f2024]">
      <div
        className={`relative aspect-[1.75] overflow-hidden rounded-xl ${tones[tone] ?? tones.mint}`}
      >
        {image ? (
          <Image
            className="object-cover"
            src={image}
            alt=""
            fill
            sizes="(max-width: 760px) 50vw, 33vw"
          />
        ) : (
          <>
            <span className="relative z-[1] p-5 text-[11px] font-bold tracking-[.13em]">
              {category}
            </span>
            <div className="absolute -right-[30px] -bottom-[115px] size-[210px] rounded-full border-[32px] border-white/50" />
            <div className="absolute top-[55px] left-[34%] size-[155px] rounded-full border-[22px] border-white/60" />
            <div className="absolute top-[66px] left-[44%] h-[100px] w-[108px] rotate-[27deg] skew-x-[-8deg] rounded-[20px] bg-white/60 shadow-[10px_14px_0_#101e4c25]" />
          </>
        )}
        <div className="absolute inset-x-3 bottom-3 flex justify-between gap-1 text-[10px] text-[#42434a] max-sm:text-[8px]">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((label) => (
            <span
              key={label}
              className="rounded-full bg-white/75 px-2.5 py-1 backdrop-blur-sm max-sm:px-1.5"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="px-[3px] pt-[13px] pb-1 max-md:px-0 max-md:pt-[9px]">
        <div className="flex items-center justify-between gap-2.5">
          <h3 className="m-0 overflow-hidden text-ellipsis whitespace-nowrap text-base tracking-[-.03em] max-md:text-xs">
            {title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-xs text-[#555] max-md:text-[10px]">
            4.5{" "}
            <Star className="size-[15px] fill-current text-[#c8c9cd] max-md:size-[11px]" />
          </span>
        </div>
        <p className="my-1 mb-[11px] text-[11px] text-[#777] max-md:mb-[7px] max-md:text-[9px]">
          by <span className="text-blue-700">{creator}</span>
        </p>
        <div className="flex items-center gap-2 text-[10px] text-[#565965] max-md:gap-1 max-md:text-[8px]">
          <span className="flex items-center gap-[5px] whitespace-nowrap rounded-full bg-[#f2f3f5] px-2.5 py-[7px] max-md:gap-1 max-md:px-[5px] max-md:py-1">
            <BarChart3 className="size-[14px] max-md:size-[10px]" /> {level}
          </span>
          <div className="ml-auto flex items-center pl-2">
            {studentAvatars.map((avatar) => (
              <Image
                key={avatar}
                src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=64&h=64&q=80`}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                className="-ml-2 size-8 rounded-full border-2 border-white object-cover max-md:size-6"
              />
            ))}
            <span className="-ml-2 grid size-8 place-items-center rounded-full border-2 border-white bg-[#d4fb20] text-[10px] text-[#222] max-md:size-6 max-md:text-[8px]">
              26+
            </span>
          </div>
        </div>
        <strong className="mt-3 block whitespace-nowrap text-base font-semibold text-blue-700 max-md:mt-2 max-md:text-[11px]">
          {price}
          <small className="text-[9px] font-normal text-[#777] max-md:text-[7px]">
            /lifetime
          </small>
        </strong>
      </div>
    </article>
    </Link>
  );
}

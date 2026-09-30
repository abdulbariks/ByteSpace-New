"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function AuthSidebar() {
  const isRegister = usePathname().includes("register");

  return (
    <aside className="relative flex min-h-[784px] flex-col text-white max-xl:min-h-0 max-xl:pb-0">
      <div className="max-w-[475px]">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          {isRegister ? "Sign up and come in" : "Sign in with ease"}
        </h2>
        <p className="text-[15px] leading-[1.9] text-white/90">
          {isRegister
            ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
            : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
        </p>
      </div>

      <div className="relative mt-16 h-[554px] w-full max-w-[520px] max-xl:hidden">
        <article className="absolute left-0 top-[90px] z-0 w-[70%] rounded-[24px] border border-white/50 bg-white p-3 text-[#17181c] shadow-xl">
          <div className="relative h-[195px] overflow-hidden rounded-[15px]">
            <Image
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85"
              alt="Digital design course preview"
              fill
              sizes="(min-width: 1024px) 330px, 70vw"
              className="object-cover"
            />
          </div>
          <h3 className="mt-3 truncate text-lg font-semibold">
            Build Digital Asset
          </h3>
          <p className="mb-3 mt-1 text-xs text-blue-700">by purepearl studio</p>
          <div className="flex items-center justify-between text-xs">
            <span className="rounded-full bg-[#f2f3f5] px-3 py-2">
              ▥ Beginner
            </span>
            <b className="text-lg text-blue-700">
              $25
              <small className="text-[10px] font-normal text-gray-500">
                /lifetime
              </small>
            </b>
          </div>
        </article>

        <article className="absolute right-0 top-0 z-10 w-[72%] rounded-[24px] border border-[#d6d6dc] bg-white p-3 text-[#17181c] shadow-xl">
          <div className="relative h-[195px] overflow-hidden rounded-[15px]">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85"
              alt="Data analytics dashboard course preview"
              fill
              sizes="(min-width: 1024px) 340px, 70vw"
              className="object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 flex gap-2 text-[10px] text-[#484950]">
              <span className="rounded-full bg-white/80 px-3 py-2">
                17 Lessons
              </span>
              <span className="rounded-full bg-white/80 px-3 py-2">
                2 hours 16 mins
              </span>
              <span className="rounded-full bg-white/80 px-3 py-2">
                59 Comments
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-2">
            <h3 className="truncate text-lg font-semibold">
              The Power of Big Data
            </h3>
            <span className="shrink-0 text-sm">
              4.5 <b className="text-brand-lime">★</b>
            </span>
          </div>
          <p className="mb-3 mt-1 text-xs text-gray-500">
            by <span className="text-blue-700">purepearl studio</span>
          </p>
          <div className="flex items-center justify-between text-xs">
            <span className="rounded-full bg-[#f2f3f5] px-3 py-2">
              ▥ Beginner
            </span>
            <b className="text-lg text-blue-700">
              $25
              <small className="text-[10px] font-normal text-gray-500">
                /lifetime
              </small>
            </b>
          </div>
        </article>

        <Image
          className="absolute left-[20%] top-[40px] z-20 w-[86px]"
          src="/images/auth/cone-two.png"
          alt=""
          width={148}
          height={147}
        />
        <Image
          className="absolute bottom-[100px] left-0 z-20 w-[90px]"
          src="/images/auth/cone-one.png"
          alt=""
          width={190}
          height={189}
        />
        <Image
          className="absolute bottom-[170px] right-[-12px] z-20 w-[105px]"
          src="/images/auth/frame.png"
          alt=""
          width={177}
          height={176}
        />
        <div className="absolute bottom-20 w-65 right-0 z-30 rounded-2xl bg-brand-lime p-4 text-sm text-[#17181c] shadow-lg">
          <b>Happy Students</b>
          <p className="my-1 text-xs">
            4.5 (240) <span className="text-blue-700">★</span>
          </p>
          <div className="flex -space-x-2">
            {[
              "photo-1534528741775-53994a69daeb",
              "photo-1507003211169-0a1dd7228f2d",
              "photo-1494790108377-be9c29b29330",
              "photo-1500648767791-00dcc994a43e",
            ].map((avatar) => (
              <Image
                key={avatar}
                src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=64&h=64&q=80`}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                className="size-8 rounded-full border-2 border-white object-cover"
              />
            ))}
            <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#202124] text-[10px] text-white">
              2K+
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

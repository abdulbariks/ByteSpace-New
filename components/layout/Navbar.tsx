"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/reusable/logo";

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`z-20 h-[120px] w-full text-white max-md:h-[78px] ${overlay ? "absolute inset-x-0 top-0 bg-transparent" : "relative bg-brand-blue"}`}
    >
      <div className="relative mx-auto flex h-full w-[min(90%,1200px)] items-center justify-between gap-3 max-[420px]:w-[94%] max-[420px]:gap-2">
        <Logo className="shrink-0 text-2xl font-extrabold tracking-[-.04em] text-white max-md:text-[19px] max-[420px]:gap-1 max-[420px]:text-[15px] max-[420px]:[&_svg]:size-6" />
        <nav
          aria-label="Main navigation"
          className="hidden shrink-0 items-center gap-7 whitespace-nowrap text-[15px] md:flex [&_a]:transition-opacity [&_a]:hover:opacity-75 [&_a]:focus-visible:rounded-sm [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-brand-lime"
        >
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link className="max-[420px]:hidden" href="/creators">
            Creators
          </Link>
        </nav>
        <div className="hidden shrink-0 items-center gap-7 whitespace-nowrap text-[15px] md:flex [&_a]:transition-opacity [&_a]:hover:opacity-75 [&_a]:focus-visible:rounded-sm [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-brand-lime">
          <Link href="/login">Sign In</Link>
          <Link href="/register">Join Us</Link>
          <Link
            href="/courses"
            aria-label="Course bag"
            className="grid place-items-center max-md:hidden"
          >
            <ShoppingBag size={19} />
          </Link>
        </div>
        <button
          type="button"
          className="grid size-10 shrink-0 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full z-50 flex flex-col gap-4 border-t border-white/15 bg-brand-blue px-[5%] py-5 text-sm shadow-xl md:hidden"
        >
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link>
          <Link href="/creators" onClick={() => setIsMenuOpen(false)}>Creators</Link>
          <div className="flex gap-6 border-t border-white/15 pt-4">
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
            <Link href="/register" onClick={() => setIsMenuOpen(false)}>Join Us</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

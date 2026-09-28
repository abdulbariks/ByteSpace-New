"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Logo } from "@/components/reusable/logo"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
] as const

function PublicNav() {
  const pathname = usePathname()

  return (
    <header
      data-slot="public-header"
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur"
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-4">
        <Logo />
        <nav className="flex items-center gap-1">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                  active && "bg-accent text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export { PublicNav }

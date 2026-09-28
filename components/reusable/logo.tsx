import Link from "next/link"

import { cn } from "@/lib/utils"

function Logo({
  className,
  href = "/",
  showText = true,
}: {
  className?: string
  href?: string
  showText?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-heading text-base font-semibold tracking-tight",
        className
      )}
    >
      <span
        aria-hidden
        data-slot="logo-mark"
        className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground"
      >
        B
      </span>
      {showText ? <span>Bytespace</span> : null}
    </Link>
  )
}

export { Logo }

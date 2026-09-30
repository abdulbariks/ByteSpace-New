import Link from "next/link"

import { cn } from "@/lib/utils"
import LogoIcon from "@/components/icons/AllIcons"

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
      <LogoIcon className="size-7 shrink-0" />
      {showText ? <span>ByteSpace</span> : null}
    </Link>
  )
}

export { Logo }

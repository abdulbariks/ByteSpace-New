import Link from "next/link"
import { SearchX } from "lucide-react"

import { cn } from "@/lib/utils"

function NotFoundState({
  title = "Page not found",
  description = "The page you are looking for may have been moved or no longer exists.",
  backHref = "/",
  backLabel = "Back home",
  className,
}: {
  title?: string
  description?: string
  backHref?: string
  backLabel?: string
  className?: string
}) {
  return (
    <div
      data-slot="not-found-state"
      className={cn(
        "flex min-h-dvh flex-col items-center justify-center gap-6 px-4 py-16 text-center",
        className
      )}
    >
      <span className="grid size-12 place-items-center rounded-full bg-muted text-muted-foreground">
        <SearchX aria-hidden className="size-6" />
      </span>
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Error 404
        </p>
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mx-auto max-w-md text-sm text-muted-foreground">
          {description}
        </p>
      </div>
      <Link
        href={backHref}
        className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {backLabel}
      </Link>
    </div>
  )
}

export { NotFoundState }

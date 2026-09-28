"use client"

import { useEffect } from "react"
import Link from "next/link"
import { RefreshCw, TriangleAlert } from "lucide-react"

import { cn } from "@/lib/utils"

function ErrorFallback({
  error,
  retry,
  title = "Something went wrong",
  description = "An unexpected error occurred while rendering this page. Please try again.",
  backHref,
  backLabel = "Back home",
  className,
}: {
  error: Error & { digest?: string }
  retry: () => void
  title?: string
  description?: string
  backHref?: string
  backLabel?: string
  className?: string
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      data-slot="error-fallback"
      className={cn(
        "flex min-h-dvh flex-col items-center justify-center gap-6 px-4 py-16 text-center",
        className
      )}
    >
      <span className="grid size-12 place-items-center rounded-full bg-destructive/10 text-destructive">
        <TriangleAlert aria-hidden className="size-6" />
      </span>
      <div className="space-y-2">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mx-auto max-w-md text-sm text-muted-foreground">
          {description}
        </p>
        {error.digest ? (
          <p className="font-mono text-xs text-muted-foreground/80">
            Reference: {error.digest}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => retry()}
          className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <RefreshCw aria-hidden className="size-4" />
          Try again
        </button>
        {backHref ? (
          <Link
            href={backHref}
            className="inline-flex h-9 items-center rounded-md border px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {backLabel}
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export { ErrorFallback }

import { cn } from "@/lib/utils"

function Skeleton({ className }: { className?: string }) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
    />
  )
}

function PageSkeleton({
  rows = 3,
  className,
}: {
  rows?: number
  className?: string
}) {
  return (
    <div
      data-slot="page-skeleton"
      aria-busy
      aria-live="polite"
      className={cn("space-y-6", className)}
    >
      <span className="sr-only">Loading…</span>
      <div className="space-y-2">
        <Skeleton className="h-8 w-2/5" />
        <Skeleton className="h-4 w-3/5" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: rows }).map((_, index) => (
          <Skeleton
            key={index}
            className={cn("h-4", index % 3 === 2 ? "w-2/3" : "w-full")}
          />
        ))}
      </div>
    </div>
  )
}

export { PageSkeleton, Skeleton }

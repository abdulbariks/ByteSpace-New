"use client"

import { ErrorFallback } from "@/components/reusable/error-fallback"

export default function AppError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  return (
    <ErrorFallback
      error={error}
      retry={retry}
      title="This page ran into a problem"
      description="An unexpected error occurred. Try again, or head back home if it keeps happening."
      backHref="/"
      backLabel="Back home"
    />
  )
}

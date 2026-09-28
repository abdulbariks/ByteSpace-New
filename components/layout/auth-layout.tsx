import type * as React from "react"

import { Logo } from "@/components/reusable/logo"
import { cn } from "@/lib/utils"

function AuthLayout({
  children,
  title,
  description,
  footer,
  className,
}: {
  children: React.ReactNode
  title?: string
  description?: string
  footer?: React.ReactNode
  className?: string
}) {
  return (
    <div
      data-slot="auth-layout"
      className={cn(
        "flex min-h-dvh flex-col items-center justify-center gap-8 bg-muted/40 px-4 py-12",
        className
      )}
    >
      <div className="w-full max-w-sm">
        <Logo className="mb-6 justify-center" />
        {title ? (
          <div className="mb-6 space-y-1 text-center">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              {title}
            </h1>
            {description ? (
              <p className="text-sm text-muted-foreground">{description}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
      {footer ? (
        <p className="text-center text-xs text-muted-foreground">{footer}</p>
      ) : null}
    </div>
  )
}

export { AuthLayout }

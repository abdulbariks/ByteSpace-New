import type * as React from "react"

import { PublicNav } from "@/components/layout/public-nav"
import { Logo } from "@/components/reusable/logo"
import { cn } from "@/lib/utils"

function PublicLayout({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div data-slot="public-layout" className="flex min-h-dvh flex-col">
      <PublicNav />
      <main className={cn("mx-auto w-full max-w-5xl flex-1 px-4 py-10", className)}>
        {children}
      </main>
      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row">
          <Logo showText={false} />
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Bytespace. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export { PublicLayout }

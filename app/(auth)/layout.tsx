import type { ReactNode } from "react";
import { AuthSidebar } from "@/components/auth/AuthSidebar";
import { Logo } from "@/components/reusable/logo";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#003be2] bg-[linear-gradient(to_right,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:120px_120px] px-6 py-10 sm:px-10 lg:px-0 lg:py-[120px]">
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)_minmax(480px,580px)] items-start gap-[60px] max-xl:grid-cols-1 max-xl:gap-8 max-xl:py-4 max-md:px-0">
        <Logo
          showText={false}
          className="absolute -top-[82px] left-0 text-white max-xl:-top-[30px]"
        />
        <AuthSidebar />
        <section className="flex min-h-[784px] w-full flex-col rounded-[26px] bg-white px-16 py-16 text-[#242528] max-xl:mx-auto max-xl:min-h-[680px] max-xl:max-w-[640px] max-sm:min-h-0 max-sm:rounded-[22px] max-sm:px-6 max-sm:py-9">
          {children}
        </section>
      </div>
    </main>
  );
}

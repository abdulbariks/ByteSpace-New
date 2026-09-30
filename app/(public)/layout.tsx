import { Footer } from "@/components/layout/Footer";
import type { ReactNode } from "react";
export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#1c1d27]">
      {children}
      <Footer />
    </div>
  );
}

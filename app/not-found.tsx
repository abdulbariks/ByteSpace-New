import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"

export default function AppNotFound() {
  return <div className="min-h-screen bg-brand-blue bg-[linear-gradient(to_right,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:120px_120px] text-white"><Navbar/><main className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-[30px] py-[30px] text-center max-md:min-h-[calc(100vh-78px)]"><div className="bg-[linear-gradient(180deg,#d4fb20_25%,#a3cb50_65%,#d9e1c8_100%)] bg-clip-text text-[clamp(200px,29vw,380px)] leading-[.85] font-extrabold tracking-[-.08em] text-transparent">404</div><h1 className="mb-8 mt-[-3px] text-[clamp(38px,5vw,68px)] leading-[1.18] tracking-[-.045em]">The page you are looking<br/>for doesn’t exist</h1><p className="mb-[34px] text-base opacity-85">Try to use a correct url or go back to homepage to start again</p><Link href="/" className="inline-flex h-12 items-center justify-center rounded-full bg-brand-lime px-[27px] text-[#111]">Back to Home</Link></main></div>
}

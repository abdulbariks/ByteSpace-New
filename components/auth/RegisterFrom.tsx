import Link from "next/link";

export function RegisterFrom() {
  return (
    <div className="flex h-full flex-1 flex-col">
      <div className="mb-10">
        <p className="mb-1 text-base text-blue-700">Create an Account</p>
        <h1 className="m-0 max-w-[400px] text-[42px] font-semibold leading-[1.15] tracking-[-.04em] max-sm:text-[34px]">
          Welcome to ByteSpace
        </h1>
      </div>

      <form action="/register" method="post" className="flex flex-col">
        <label className="mb-5 grid gap-2 text-[13px]">
          Full Name
          <input
            className="h-[52px] rounded-xl border border-[#dfe0e4] px-5 text-sm outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/10"
            type="text"
            name="name"
            placeholder="Jamie Davis"
            autoComplete="name"
            required
          />
        </label>
        <label className="mb-5 grid gap-2 text-[13px]">
          Email
          <input
            className="h-[52px] rounded-xl border border-[#dfe0e4] px-5 text-sm outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/10"
            type="email"
            name="email"
            placeholder="designer@example.com"
            autoComplete="email"
            required
          />
        </label>
        <label className="grid gap-2 text-[13px]">
          Password
          <input
            className="h-[52px] rounded-xl border border-[#dfe0e4] px-5 text-sm outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700/10"
            type="password"
            name="password"
            placeholder="********"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </label>
        <button className="mt-6 h-[46px] self-end rounded-full bg-brand-lime px-6 text-base transition hover:brightness-95" type="submit">
          Continue
        </button>
      </form>

      <p className="mt-auto pt-10 text-center text-sm text-[#8a8b91]">
        Already have an account? <Link className="text-blue-700" href="/login">Login</Link>
      </p>
    </div>
  );
}

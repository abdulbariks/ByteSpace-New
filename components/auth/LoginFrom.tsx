import Link from "next/link";

export function LoginFrom() {
  return (
    <div className="flex h-full flex-1 flex-col">
      <div className="mb-10">
        <p className="mb-1 text-base text-blue-700">Sign In</p>
        <h1 className="m-0 text-[42px] font-semibold leading-tight tracking-[-.04em] max-sm:text-[34px]">
          Welcome Back
        </h1>
      </div>

      <form action="/login" method="post" className="flex flex-col">
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
            autoComplete="current-password"
            required
          />
        </label>
        <button className="mt-6 h-[46px] self-end rounded-full bg-brand-lime px-6 text-base transition hover:brightness-95" type="submit">
          Sign In
        </button>
      </form>

      <div className="mt-20 flex items-center gap-3 text-sm text-[#8a8b91] max-sm:mt-12">
        <span className="h-px flex-1 bg-[#dedfe2]" />
        Or
        <span className="h-px flex-1 bg-[#dedfe2]" />
      </div>
      <div className="mt-10 flex justify-center gap-4">
        <button type="button" aria-label="Continue with Facebook" className="grid size-[72px] place-items-center rounded-[22px] border border-[#d9dade] text-[30px] font-bold text-black max-sm:size-14">f</button>
        <button type="button" aria-label="Continue with Google" className="grid size-[72px] place-items-center rounded-[22px] border border-[#d9dade] text-[30px] font-bold text-black max-sm:size-14">G</button>
      </div>
      <p className="mt-auto pt-10 text-center text-sm text-[#8a8b91]">
        New user? <Link className="text-blue-700" href="/register">Create an account</Link>
      </p>
    </div>
  );
}

import { Search } from "lucide-react";

export function SearchBar({
  placeholder = "Course, topic, creator",
  button = "Search",
}: {
  placeholder?: string;
  button?: string;
}) {
  return (
    <form
      action="/courses"
      className="mx-auto flex w-full max-w-145 items-center gap-4 max-md:gap-2"
    >
      <label
        className="flex h-13 min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-6 text-[#858995] 
"
      >
        <Search size={19} aria-hidden="true" className="shrink-0" />
        <input
          className="w-full border-0 bg-transparent text-[14px] text-[#222] outline-none placeholder:text-[#8a8e98]"
          name="q"
          placeholder={placeholder}
          aria-label={placeholder}
        />
      </label>
      <button
        className="inline-flex h-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-brand-lime px-6.75 text-base text-[#111] transition-transform hover:-translate-y-0.5 max-md:px-5 max-[420px]:h-11 max-[420px]:px-3.5"
        type="submit"
      >
        {button}
      </button>
    </form>
  );
}

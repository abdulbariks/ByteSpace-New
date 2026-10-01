"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type Size = "sm" | "md";

const triggerSizes: Record<Size, string> = {
  sm: "h-8 gap-1.5 px-3 text-[11px]",
  md: "h-12 gap-2 px-5 text-sm",
};

export function FilterDropdown({
  label,
  icon,
  badge = 0,
  size = "md",
  align = "left",
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  badge?: number;
  size?: Size;
  align?: "left" | "right";
  children: (close: () => void) => React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const active = badge > 0;

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex shrink-0 items-center rounded-full border transition-colors ${triggerSizes[size]} ${
          active
            ? "border-[#D4FB20] bg-[#D4FB20] text-[#222]"
            : "border-[#e0e1e5] bg-white text-[#44464d] hover:border-[#c6c7cd]"
        }`}
      >
        {icon}
        {label}
        {active ? (
          <span className="grid size-4 place-items-center rounded-full bg-[#222] text-[9px] text-white">
            {badge}
          </span>
        ) : (
          <ChevronDown
            size={size === "sm" ? 12 : 16}
            className={open ? "rotate-180 transition-transform" : "transition-transform"}
          />
        )}
      </button>

      {open && (
        <div
          className={`absolute top-[calc(100%+8px)] z-30 w-[248px] rounded-2xl border border-[#e0e1e5] bg-white p-2 text-[#25262b] shadow-[0_12px_30px_rgba(16,16,24,.12)] ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  );
}

export function DropdownHeader({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-3 pt-1.5 pb-2 text-[10px] font-semibold tracking-[.08em] text-[#8b8c93] uppercase">
      {children}
    </p>
  );
}

export function DropdownCheckbox({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      role="menuitemcheckbox"
      aria-checked={checked}
      onClick={onToggle}
      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm text-[#44464d] transition-colors hover:bg-[#f3f3f5]"
    >
      <span
        className={`grid size-[18px] shrink-0 place-items-center rounded-md border transition-colors ${
          checked ? "border-[#25262b] bg-[#25262b] text-white" : "border-[#c9cad0] bg-white"
        }`}
      >
        {checked && <Check size={13} strokeWidth={3} />}
      </span>
      {label}
    </button>
  );
}

export function DropdownRadio({
  label,
  checked,
  onSelect,
}: {
  label: string;
  checked: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={checked}
      onClick={onSelect}
      className="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm text-[#44464d] transition-colors hover:bg-[#f3f3f5]"
    >
      {label}
      {checked && <Check size={16} className="text-blue-700" />}
    </button>
  );
}

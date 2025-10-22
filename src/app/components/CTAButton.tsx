"use client";

import Link from "next/link";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "link";

type Props = {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  ariaLabel?: string;
};

const base =
  "group cta-animated animate-cta-glow animate-cta-nudge relative inline-flex items-center justify-center rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none overflow-hidden transform-gpu transition-all duration-200 will-change-transform";
const variants: Record<Variant, string> = {
  primary:
    "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-600 px-6 py-3 shadow-md hover:shadow-lg motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.03]",
  secondary:
    "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 px-6 py-3 shadow-sm hover:shadow-md motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02]",
  link: "text-emerald-600 hover:underline",
};

export default function CTAButton({
  href,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  className,
  variant = "primary",
  ariaLabel,
}: Props) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  return isExternal ? (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={cn(base, variants[variant], className)}
    >
      {/* Shine sweep */}
      <span className="pointer-events-none absolute inset-0 rounded-lg overflow-hidden">
        <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/30 opacity-0 translate-x-[-120%] transition-all duration-500 ease-out group-hover:opacity-50 group-hover:translate-x-[120%]" />
      </span>
      <span className="relative z-10">{children}</span>
    </a>
  ) : (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(base, variants[variant], className)}
    >
      {/* Shine sweep */}
      <span className="pointer-events-none absolute inset-0 rounded-lg overflow-hidden">
        <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/30 opacity-0 translate-x-[-120%] transition-all duration-500 ease-out group-hover:opacity-50 group-hover:translate-x-[120%]" />
      </span>
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

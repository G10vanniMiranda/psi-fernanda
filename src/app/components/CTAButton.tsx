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
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";
const variants: Record<Variant, string> = {
  primary:
    "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-600 px-6 py-3 shadow-md",
  secondary:
    "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 px-6 py-3 shadow-sm",
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
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </Link>
  );
}

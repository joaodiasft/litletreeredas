import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Menu } from "lucide-react";

export function CourseShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-brand-surface pb-28 text-brand-premium">
      <div className="mx-auto w-full max-w-linktree px-4">{children}</div>
    </div>
  );
}

export function CourseHeaderLogoMenu() {
  return (
    <header className="mb-6 flex items-center justify-between pt-4">
      <Link
        href="/"
        className="font-heading text-[13px] font-bold tracking-[0.12em] text-brand-premium"
      >
        REDAÇÃO NOTA MIL
      </Link>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-2xl text-brand-icon transition-colors hover:bg-brand-roseSoft"
        aria-label="Menu"
      >
        <Menu className="h-5 w-5" strokeWidth={2} />
      </button>
    </header>
  );
}

export function CourseHeaderBack({
  title,
  rightSlot,
}: {
  title: string;
  rightSlot?: ReactNode;
}) {
  return (
    <header className="sticky top-0 z-30 -mx-4 mb-6 flex items-center justify-between border-b border-brand-line bg-brand-surface/95 px-4 py-3 backdrop-blur-md">
      <Link
        href="/"
        className="flex h-10 w-10 items-center justify-center rounded-2xl text-brand-premium transition-colors hover:bg-white"
        aria-label="Voltar ao início"
      >
        <ArrowLeft className="h-5 w-5" strokeWidth={2.25} />
      </Link>
      <span className="font-heading text-sm font-bold text-brand-premium">
        {title}
      </span>
      <div className="flex h-10 w-10 items-center justify-center">
        {rightSlot ?? <span className="inline-block h-8 w-8 rounded-full bg-brand-roseSoft" />}
      </div>
    </header>
  );
}

export function GradientCtaButton({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`font-manrope inline-flex w-full items-center justify-center rounded-[26px] bg-gradient-primary px-6 py-4 text-center text-[15px] font-semibold text-white shadow-card-lg transition hover:brightness-105 active:scale-[0.98] ${className}`}
    >
      {children}
    </a>
  );
}

export function GradientCtaButtonDark({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`font-manrope relative inline-flex w-full items-center justify-center overflow-hidden rounded-[26px] px-6 py-4 text-center text-[15px] font-semibold text-white shadow-card-lg transition active:scale-[0.98] ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(13,13,18,0.92) 0%, rgba(13,13,18,0.88) 100%), linear-gradient(135deg, #C70A74 0%, #E50D89 55%, #FF6ABD 100%)",
      }}
    >
      {children}
    </a>
  );
}

export function SectionLineTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="font-heading text-xl font-bold leading-tight text-brand-premium">
        {children}
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-brand-pink" />
    </div>
  );
}

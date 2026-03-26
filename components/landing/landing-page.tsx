"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  Home,
  LayoutGrid,
  List,
  Mail,
  MapPin,
  MessageSquare,
  Monitor,
  PlaySquare,
  Share2,
  Star,
  Trophy,
  User,
  Users,
  Wallet,
} from "lucide-react";
import { IconInstagram, IconYoutube } from "@/components/landing/social-icons";
import type { LucideIcon } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 28 },
  },
};

function BubbleBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-16 top-24 h-40 w-40 rounded-full bg-brand-pink/20 blur-3xl" />
      <div className="absolute right-[-40px] top-10 h-32 w-32 rounded-full bg-brand-roseLight/30 blur-2xl" />
      <div className="absolute bottom-40 left-8 h-24 w-24 rounded-full bg-brand-roseSoft/80 blur-2xl" />
      <div className="absolute bottom-20 right-6 h-28 w-28 rounded-full bg-white/90 blur-xl" />
      <div className="absolute left-1/3 top-1/2 h-16 w-16 rounded-full bg-brand-pink/12 blur-lg" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
      {children}
    </p>
  );
}

type LinkRowProps = {
  href: string;
  icon: LucideIcon;
  label: string;
};

function LinkRow({ href, icon: Icon, label }: LinkRowProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {isExternal ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group flex w-full items-center gap-3 rounded-[26px] border border-brand-line bg-white px-3 py-3.5 shadow-card transition-shadow hover:shadow-card-lg"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-roseSoft text-brand-pink">
            <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </span>
          <span className="min-w-0 flex-1 text-left text-[15px] font-semibold leading-snug text-brand-premium">
            {label}
          </span>
          <ChevronRight
            className="h-5 w-5 shrink-0 text-brand-pink"
            strokeWidth={2.25}
            aria-hidden
          />
        </a>
      ) : (
        <Link
          href={href}
          className="group flex w-full items-center gap-3 rounded-[26px] border border-brand-line bg-white px-3 py-3.5 shadow-card transition-shadow hover:shadow-card-lg"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-roseSoft text-brand-pink">
            <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </span>
          <span className="min-w-0 flex-1 text-left text-[15px] font-semibold leading-snug text-brand-premium">
            {label}
          </span>
          <ChevronRight
            className="h-5 w-5 shrink-0 text-brand-pink"
            strokeWidth={2.25}
            aria-hidden
          />
        </Link>
      )}
    </motion.div>
  );
}

export function LandingPage() {
  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Redação Nota Mil",
          text: "Conquiste sua vaga com a melhor redação do Brasil!",
          url,
        });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      /* user cancelled or share unavailable */
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-surface pb-28 text-brand-premium">
      <BubbleBackdrop />

      <div className="relative z-10 mx-auto w-full max-w-linktree px-4 pt-3">
        {/* Top bar */}
        <header className="mb-4 flex items-center justify-between rounded-[22px] bg-white px-3 py-2.5 shadow-card">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-roseLight/80">
              <Image
                src="/profile.png"
                alt=""
                width={36}
                height={36}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <span className="font-heading truncate text-sm font-bold text-brand-pink">
              Redação Nota Mil
            </span>
          </div>
          <button
            type="button"
            onClick={share}
            className="flex h-10 w-10 items-center justify-center rounded-2xl text-brand-premium transition-colors hover:bg-brand-roseSoft"
            aria-label="Compartilhar página"
          >
            <Share2 className="h-5 w-5" strokeWidth={2} />
          </button>
        </header>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 rounded-[22px] bg-gradient-primary px-4 py-3.5 text-center shadow-card"
        >
          <p className="text-[14px] font-semibold leading-snug text-white">
            Matrículas para 2026 abertas! Aproveite preços únicos.
          </p>
        </motion.div>

        {/* Profile */}
        <div className="mb-8 flex flex-col items-center">
          <div className="relative mb-4">
            <div className="h-[132px] w-[132px] overflow-hidden rounded-full border-[5px] border-brand-pink shadow-card-lg ring-4 ring-white">
              <Image
                src="/profile.png"
                alt="Redação Nota Mil"
                width={132}
                height={132}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <span className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-cta text-white shadow-md ring-4 ring-white">
              <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
            </span>
          </div>
          <h1 className="font-heading mb-2 text-center text-[26px] font-extrabold leading-tight tracking-tight text-brand-premium">
            Redação Nota Mil
          </h1>
          <p className="max-w-[320px] text-center text-[15px] leading-relaxed text-brand-muted">
            Conquiste sua vaga com a melhor redação do Brasil!
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="mb-10 flex flex-col gap-3">
          <motion.a
            href="/cursos/redacao"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-manrope flex w-full items-center justify-between gap-3 rounded-[26px] bg-gradient-primary px-4 py-4 text-white shadow-card-lg transition hover:brightness-105"
          >
            <span className="flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.5 }}
              >
                <List className="h-5 w-5 shrink-0" strokeWidth={2.25} />
              </motion.span>
              <span className="text-[16px] font-bold">Matrículas Abertas</span>
            </span>
            <ChevronRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
          </motion.a>

          <motion.a
            href="/bolsa"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-manrope flex w-full items-center justify-between gap-3 rounded-[26px] border border-brand-line bg-white px-4 py-4 shadow-card transition hover:border-brand-roseLight"
          >
            <span className="flex min-w-0 items-center gap-3">
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2 }}
              >
                <Monitor
                  className="h-5 w-5 shrink-0 text-brand-pink"
                  strokeWidth={2.25}
                />
              </motion.span>
              <span className="text-[15px] font-semibold leading-snug text-brand-premium">
                Me qualificar para bolsa no curso
              </span>
            </span>
            <ChevronRight
              className="h-5 w-5 shrink-0 text-brand-pink"
              strokeWidth={2.5}
            />
          </motion.a>
        </div>

        <motion.div
          className="flex flex-col gap-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.section variants={item}>
            <SectionLabel>Nossos cursos</SectionLabel>
            <div className="flex flex-col gap-2.5">
              <LinkRow
                href="/cursos/redacao"
                icon={User}
                label="Redação (Professora Martinha)"
              />
              <LinkRow
                href="/cursos/matematica"
                icon={LayoutGrid}
                label="Matemática (Professor Michael)"
              />
              <LinkRow
                href="/cursos/exatas"
                icon={Users}
                label="Exatas (Professores Bruno, Adriano e Marcos)"
              />
            </div>
          </motion.section>

          <motion.section variants={item}>
            <SectionLabel>Informações</SectionLabel>
            <div className="flex flex-col gap-2.5">
              <LinkRow
                href="/turmas"
                icon={Clock}
                label="Turmas e Horários"
              />
              <LinkRow
                href="/planos"
                icon={Wallet}
                label="Planos e Valores"
              />
            </div>
          </motion.section>

          <motion.section variants={item}>
            <SectionLabel>Conquistas</SectionLabel>
            <div className="flex flex-col gap-2.5">
              <LinkRow
                href="/cursos/redacao#curriculo"
                icon={Trophy}
                label="Resultados"
              />
              <LinkRow
                href="/destaques"
                icon={Star}
                label="Destaques"
              />
            </div>
          </motion.section>

          <motion.section variants={item}>
            <SectionLabel>Onde estamos e fale conosco</SectionLabel>
            <div className="flex flex-col gap-2.5">
              <LinkRow
                href="/localizacao"
                icon={MapPin}
                label="Localização"
              />
              <LinkRow
                href="/contatos"
                icon={MessageSquare}
                label="Nossos Contatos"
              />
            </div>
          </motion.section>
        </motion.div>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center gap-5 pb-4">
          <div className="flex items-center justify-center gap-6 text-brand-icon">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <IconInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="YouTube"
            >
              <IconYoutube className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="Canal no YouTube"
            >
              <IconYoutube className="h-6 w-6" />
            </a>
          </div>

          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2.5 shadow-card">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-center text-[10px] font-bold uppercase leading-tight tracking-wide text-brand-muted">
              Inscrições abertas para a turma de 2026.
            </span>
          </div>

          <p className="text-center text-xs text-brand-muted">
            © 2026 Redação Nota Mil. Todos os direitos reservados.
          </p>
        </footer>
      </div>

      {/* Sticky bottom nav */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md"
        aria-label="Navegação principal"
      >
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-roseSoft text-brand-pink">
            <Home className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </span>
          <motion.button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-brand-icon transition-colors hover:bg-brand-roseSoft"
            aria-label="Cursos"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="h-5 w-5" strokeWidth={2} />
          </motion.button>
          <motion.button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-brand-icon transition-colors hover:bg-brand-roseSoft"
            aria-label="Vídeos"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlaySquare className="h-5 w-5" strokeWidth={2} />
          </motion.button>
          <motion.button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-brand-icon transition-colors hover:bg-brand-roseSoft"
            aria-label="Contato"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-5 w-5" strokeWidth={2} />
          </motion.button>
        </div>
      </nav>
    </div>
  );
}

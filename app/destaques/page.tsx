"use client";

import Link from "next/link";
import { ArrowRight, Star, User, Users } from "lucide-react";
import { CourseHeaderBack, CourseShell } from "@/components/course/shell";

const depoimentos = [
  { nome: "Lucas Santos", curso: "Medicina", texto: "Perdi o medo dos temas. A base que recebi aqui foi essencial para minha aprovação." },
  { nome: "Ana Costa", curso: "Direito", texto: "A correção detalhada fez toda diferença para subir de 760 para 940 pontos." },
];

export default function DestaquesPage() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-6">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Arquivo de conquistas
        </p>
        <h1 className="font-heading text-[42px] leading-[0.95] text-brand-premium">
          Vozes que
          <br />
          Alcançaram o Mil
        </h1>
      </section>

      <section className="mb-7 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <div className="mb-4 aspect-[4/5] rounded-2xl bg-gradient-primary" />
        <h2 className="font-heading text-2xl text-brand-premium">Mariana Silva</h2>
        <p className="text-sm text-brand-muted">Aprovada em Medicina na USP</p>
        <blockquote className="mt-3 rounded-xl bg-brand-surface p-3 text-sm italic text-brand-muted">
          “A metodologia do curso transformou minha forma de estruturar o pensamento.”
        </blockquote>
      </section>

      <section className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-heading text-xl text-brand-premium">Depoimentos</h3>
          <Link href="/contatos" className="text-xs font-semibold text-brand-pink">
            ver todos
          </Link>
        </div>
        <div className="space-y-3">
          {depoimentos.map((d) => (
            <article key={d.nome} className="rounded-[20px] border border-brand-line bg-white p-4 shadow-card">
              <p className="font-heading text-base text-brand-premium">{d.nome}</p>
              <p className="text-xs text-brand-muted">{d.curso}</p>
              <p className="mt-2 text-sm text-brand-muted">{d.texto}</p>
              <p className="mt-2 text-brand-pink">★★★★★</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h3 className="font-heading text-xl text-brand-premium">Histórias de Superação</h3>
        <article className="mt-4 border-t border-brand-line pt-3">
          <p className="font-heading text-lg text-brand-premium">A Jornada do Zero ao Mil</p>
          <p className="mt-1 text-sm text-brand-muted">
            João evoluiu com nosso método e conquistou a nota máxima.
          </p>
          <a href="#" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-pink">
            Leia a história completa <ArrowRight className="h-4 w-4" />
          </a>
        </article>
        <article className="mt-4 border-t border-brand-line pt-3">
          <p className="font-heading text-lg text-brand-premium">Conciliando Trabalho e Sonhos</p>
          <p className="mt-1 text-sm text-brand-muted">
            Ana conquistou aprovação estudando com carga horária enxuta.
          </p>
          <a href="#" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-pink">
            Leia a história completa <ArrowRight className="h-4 w-4" />
          </a>
        </article>
      </section>

      <section className="mb-24">
        <h3 className="font-heading mb-3 text-xl text-brand-premium">Galeria de Conquistas</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square rounded-xl bg-brand-roseSoft" />
          <div className="aspect-square rounded-xl bg-brand-roseSoft" />
          <div className="aspect-square rounded-xl bg-brand-roseSoft" />
          <div className="aspect-square rounded-xl bg-brand-roseSoft" />
        </div>
        <Link
          href="/contatos"
          className="font-manrope mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-white shadow-card-lg"
        >
          Seja o próximo destaque <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md">
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <Link href="/resultados" className="flex flex-col items-center gap-1">
            <Star className="h-4.5 w-4.5" />
            Resultados
          </Link>
          <span className="flex flex-col items-center gap-1 text-brand-pink">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft">
              <Users className="h-4.5 w-4.5" />
            </span>
            Destaques
          </span>
          <Link href="/contatos" className="flex flex-col items-center gap-1">
            <User className="h-4.5 w-4.5" />
            Contato
          </Link>
        </div>
      </nav>
    </CourseShell>
  );
}

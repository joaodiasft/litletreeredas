"use client";

import Link from "next/link";
import { ArrowUpRight, Star, Trophy, User, Users, Zap } from "lucide-react";
import { CourseHeaderBack, CourseShell } from "@/components/course/shell";

export default function ResultadosPage() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-7">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Arquivo editorial 2024
        </p>
        <h1 className="font-heading text-[42px] leading-[0.95] text-brand-premium">
          Nossa História de
          <br />
          Sucesso em Números
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted">
          A excelência acadêmica documentada através de resultados consistentes nas
          maiores instituições do país.
        </p>
      </section>

      <section className="mb-6 grid grid-cols-2 gap-3">
        <div className="rounded-[22px] border border-brand-line bg-white p-4 shadow-card">
          <Zap className="h-5 w-5 text-brand-pink" />
          <p className="font-heading mt-2 text-4xl text-brand-premium">98%</p>
          <p className="text-xs uppercase tracking-wide text-brand-muted">Taxa de aprovação</p>
        </div>
        <div className="rounded-[22px] bg-gradient-primary p-4 text-white shadow-card-lg">
          <ArrowUpRight className="h-5 w-5" />
          <p className="font-heading mt-2 text-4xl">15k+</p>
          <p className="text-xs uppercase tracking-wide text-white/90">Notas altas</p>
        </div>
      </section>

      <section className="mb-6 rounded-[22px] border border-brand-line bg-white p-4 shadow-card">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-heading text-2xl text-brand-premium">Evolução de Desempenho</h2>
          <span className="rounded-lg bg-emerald-300 px-2 py-1 text-[10px] font-bold uppercase text-emerald-900">
            Média geral
          </span>
        </div>
        <div className="flex items-end justify-center gap-12 pt-4">
          <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-10 rounded-md bg-brand-line" />
            <p className="text-xs text-brand-muted">450</p>
            <p className="text-[10px] uppercase tracking-wide text-brand-muted">Início</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-40 w-10 rounded-md bg-gradient-primary" />
            <p className="text-xs font-semibold text-brand-pink">900+</p>
            <p className="text-[10px] uppercase tracking-wide text-brand-muted">Curso</p>
          </div>
        </div>
        <p className="mt-3 text-center text-sm italic text-brand-muted">
          Alunos triplicam sua pontuação média em apenas 6 meses de acompanhamento.
        </p>
      </section>

      <section className="mb-6 rounded-[22px] border border-brand-line bg-white p-4 shadow-card">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Presença nas top universidades
        </p>
        <ul className="space-y-2">
          {[
            ["USP", "Universidade de São Paulo", "1.240"],
            ["UNIC", "UNICAMP", "892"],
            ["ITA", "Inst. Tec. de Aeronáutica", "145"],
          ].map(([sigla, nome, valor]) => (
            <li key={nome} className="flex items-center justify-between rounded-xl bg-brand-surface p-3">
              <span className="flex items-center gap-3">
                <span className="rounded-md bg-white px-2 py-1 text-xs font-bold text-brand-pink">{sigla}</span>
                <span className="text-sm text-brand-premium">{nome}</span>
              </span>
              <span className="font-heading text-lg text-brand-pink">{valor}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-24 space-y-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Recordes históricos
        </p>
        <div className="rounded-[18px] bg-brand-roseSoft p-4">
          <p className="font-heading flex items-center gap-2 text-lg text-brand-premium">
            <Trophy className="h-4 w-4 text-brand-pink" />
            Aprovação em 24h
          </p>
          <p className="mt-1 text-sm text-brand-muted">
            O maior tempo registrado entre correção e aprovação em simulado.
          </p>
        </div>
        <div className="rounded-[18px] border border-brand-line bg-white p-4">
          <p className="font-heading flex items-center gap-2 text-lg text-brand-premium">
            <Star className="h-4 w-4 text-brand-pink" />
            Recorde de Notas 1000
          </p>
          <p className="mt-1 text-sm text-brand-muted">
            Líder nacional em pontuação máxima no ENEM por três anos consecutivos.
          </p>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md">
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <span className="flex flex-col items-center gap-1 text-brand-pink">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft">
              <Star className="h-4.5 w-4.5" />
            </span>
            Resultados
          </span>
          <Link href="/destaques" className="flex flex-col items-center gap-1">
            <Users className="h-4.5 w-4.5" />
            Destaques
          </Link>
          <Link href="/contatos" className="flex flex-col items-center gap-1">
            <User className="h-4.5 w-4.5" />
            Contato
          </Link>
        </div>
      </nav>
    </CourseShell>
  );
}

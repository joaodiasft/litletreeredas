"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BookOpen, CalendarRange, Clock3, Home, MessageCircle, Users } from "lucide-react";
import { CourseHeaderBack, CourseShell } from "@/components/course/shell";

type Turno = "Todos" | "Manhã" | "Tarde" | "Noite";
const turnos: Turno[] = ["Todos", "Manhã", "Tarde", "Noite"];

const turmas = [
  {
    id: "redacao-master",
    curso: "Redação Master: Medicina",
    badge: "Língua | Alta demanda",
    descricao: "Foco total em repertório, estrutura e redações semanais.",
    professor: "Prof. Marcos",
    horario: "Segunda e Quarta · 19:30",
    turno: "Noite" as Turno,
  },
  {
    id: "exatas-enem",
    curso: "Exatas para o ENEM",
    badge: "Exatas | Regular",
    descricao: "Matemática e Física com treino constante em questões.",
    professor: "Prof. Guilherme",
    horario: "Terça e Quinta · 09:00",
    turno: "Manhã" as Turno,
  },
  {
    id: "linguagens-arte",
    curso: "Linguagens & Arte",
    badge: "Humanas | Vagas abertas",
    descricao: "Leitura crítica, interpretação e análise de repertório.",
    professor: "Prof. Amanda",
    horario: "Sábado · 14:00",
    turno: "Tarde" as Turno,
  },
] as const;

export default function TurmasPage() {
  const [tab, setTab] = useState<Turno>("Todos");

  const filtradas = useMemo(() => {
    if (tab === "Todos") return turmas;
    return turmas.filter((turma) => turma.turno === tab);
  }, [tab]);

  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-7">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Matrículas abertas
        </p>
        <h1 className="font-heading text-[44px] leading-[0.95] text-brand-premium">
          Encontre sua{" "}
          <span className="italic text-brand-pink">Turma ideal.</span>
        </h1>
        <p className="mt-4 max-w-[350px] text-sm leading-relaxed text-brand-muted">
          Selecione o turno e escolha a melhor turma para sua rotina. Vagas
          limitadas para garantir acompanhamento individual.
        </p>
      </section>

      <section className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {turnos.map((turno) => (
          <button
            key={turno}
            type="button"
            onClick={() => setTab(turno)}
            className={`min-w-[88px] rounded-xl border px-3 py-2 text-xs font-semibold transition ${
              tab === turno
                ? "border-brand-pink bg-brand-roseSoft text-brand-pink"
                : "border-brand-line bg-white text-brand-muted hover:bg-brand-roseSoft/60"
            }`}
          >
            {turno}
          </button>
        ))}
      </section>

      <section className="space-y-3">
        {filtradas.map((turma) => (
          <article
            key={turma.id}
            className="rounded-[26px] border border-brand-line bg-white p-5 shadow-card"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="rounded-full bg-brand-roseSoft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-pink">
                {turma.badge}
              </span>
              <CalendarRange className="h-4 w-4 text-brand-muted" />
            </div>

            <h2 className="font-heading text-3xl leading-[1.02] text-brand-premium">
              {turma.curso}
            </h2>
            <p className="mt-3 text-sm text-brand-muted">{turma.descricao}</p>

            <div className="mt-4 space-y-2 text-xs text-brand-muted">
              <p className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-brand-pink" />
                {turma.professor}
              </p>
              <p className="flex items-center gap-2">
                <Clock3 className="h-3.5 w-3.5 text-brand-pink" />
                {turma.horario}
              </p>
            </div>

            <a
              href="#garantir-vaga"
              className="font-manrope mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-white shadow-card-lg hover:brightness-105"
            >
              Garantir vaga
            </a>
          </article>
        ))}
      </section>

      <section
        id="detalhes-workshop"
        className="my-9 overflow-hidden rounded-[26px] border border-brand-line bg-white p-3 shadow-card scroll-mt-24"
      >
        <div className="aspect-[16/7] rounded-[20px] bg-[linear-gradient(135deg,#97b07f,#7f9867)]" />
        <div className="p-2 pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
            Laboratório criativo e imersivo
          </p>
          <h3 className="font-heading mt-1 text-2xl leading-tight text-brand-premium">
            Workshop de Argumentação
          </h3>
          <p className="mt-2 text-sm text-brand-muted">
            4 encontros exclusivos para destravar repertório e aumentar nota da
            competência 2.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href="#detalhes-workshop"
              className="font-manrope rounded-xl border border-brand-line bg-brand-roseSoft px-3 py-2 text-center text-xs font-semibold text-brand-premium"
            >
              Ver detalhes
            </a>
            <a
              href="#garantir-vaga"
              className="font-manrope rounded-xl border border-brand-line bg-white px-3 py-2 text-center text-xs font-semibold text-brand-muted"
            >
              Me avisar
            </a>
          </div>
        </div>
      </section>

      <section
        id="garantir-vaga"
        className="mb-24 rounded-[26px] border border-brand-line bg-white p-5 shadow-card"
      >
        <h3 className="font-heading text-3xl leading-tight text-brand-premium">
          Não encontrou o horário ideal?
        </h3>
        <p className="mt-3 text-sm text-brand-muted">
          Fale com nossa equipe e montamos uma turma personalizada para você.
        </p>
        <a
          href="mailto:contato@redacaonotamil.com.br"
          className="font-manrope mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-pink underline underline-offset-4"
        >
          <MessageCircle className="h-4 w-4" />
          Falar com Consultor
        </a>
      </section>

      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md"
        aria-label="Navegação"
      >
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <Link href="/" className="flex flex-col items-center gap-1">
            <Home className="h-5 w-5" />
            Início
          </Link>
          <span className="flex flex-col items-center gap-1 text-brand-pink">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-roseSoft">
              <Clock3 className="h-5 w-5" />
            </span>
            Turmas
          </span>
          <Link href="/planos" className="flex flex-col items-center gap-1">
            <BookOpen className="h-5 w-5" />
            Planos
          </Link>
        </div>
      </nav>
    </CourseShell>
  );
}

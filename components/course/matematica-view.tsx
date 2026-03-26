"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Home,
  Layers,
  ShoppingCart,
  Sparkles,
  User,
} from "lucide-react";
import {
  CourseHeaderBack,
  CourseShell,
  GradientCtaButton,
  SectionLineTitle,
} from "./shell";

const modulos = [
  {
    id: "algebra",
    title: "Álgebra & Funções",
    topics: ["Funções afim e quadrática", "Progressões", "Logaritmos na prova"],
  },
  {
    id: "geo",
    title: "Geometria Total",
    topics: ["Plana e espacial", "Analítica", "Áreas e volumes"],
  },
  {
    id: "trig",
    title: "Trigonometria",
    topics: ["Ciclo trigonométrico", "Identidades", "Lei dos senos e cossenos"],
  },
  {
    id: "calc",
    title: "Introdução ao Cálculo",
    topics: ["Limites intuitivos", "Derivadas básicas", "Aplicações"],
  },
] as const;

export function MatematicaView() {
  return (
    <CourseShell>
      <CourseHeaderBack title="RedaçãoNotaMil" />

      <section className="relative mb-10 overflow-hidden rounded-[26px] bg-white p-1 shadow-card">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Ctext x='10' y='40' font-size='12' fill='%230D0D12'%3E∫%3C/text%3E%3Ctext x='60' y='80' font-size='10' fill='%230D0D12'%3EΣ%3C/text%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative rounded-[24px] bg-brand-surface p-5">
          <span className="mb-3 inline-block rounded-full bg-brand-roseSoft px-3 py-1 font-manrope text-[10px] font-bold uppercase tracking-wider text-brand-pink">
            Aulas liberadas 2024
          </span>
          <h1 className="font-heading mb-3 text-[24px] font-bold leading-tight text-brand-premium">
            Matemática: Do{" "}
            <span className="text-brand-pink">Zero ao Infinito</span>.
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-brand-muted">
            Trilha completa do básico ao avançado, com correção humanizada e banco de
            questões comentadas no padrão ENEM e vestibulares de elite.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-3">
            <div className="rounded-[20px] border border-brand-line bg-white p-3 text-center shadow-card">
              <p className="font-heading text-xl font-bold text-brand-pink">+245</p>
              <p className="text-[11px] leading-tight text-brand-muted">
                Média de nota na escola
              </p>
            </div>
            <div className="rounded-[20px] border border-brand-line bg-white p-3 text-center shadow-card">
              <p className="font-heading text-xl font-bold text-brand-pink">98%</p>
              <p className="text-[11px] leading-tight text-brand-muted">
                Taxa de aprovação
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 space-y-3">
        {[
          {
            icon: Sparkles,
            t: "Evolução real",
            d: "Diagnóstico inicial e plano semanal ajustado ao seu ritmo.",
          },
          {
            icon: GraduationCap,
            t: "Suporte de elite",
            d: "Monitores aprovados em Medicina e Engenharia tirando dúvidas ao vivo.",
          },
          {
            icon: Layers,
            t: "Material gráfico",
            d: "Resumos visuais, flashcards e mapas mentais para revisão rápida.",
          },
        ].map((c) => (
          <motion.div
            key={c.t}
            whileHover={{ scale: 1.01 }}
            className="rounded-[26px] border border-brand-line bg-white p-4 shadow-card"
          >
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
              <c.icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <h3 className="font-heading mb-1 text-base font-bold text-brand-premium">
              {c.t}
            </h3>
            <p className="text-sm text-brand-muted">{c.d}</p>
          </motion.div>
        ))}
      </section>

      <section className="mb-10">
        <SectionLineTitle>O método editorial</SectionLineTitle>
        <p className="mb-6 text-sm text-brand-muted">
          Três pilares para você ganhar consistência nas provas.
        </p>
        <ol className="space-y-5">
          {[
            {
              n: "01",
              t: "Estruturação hierárquica",
              d: "Conteúdos organizados do macro ao micro, com checklist.",
            },
            {
              n: "02",
              t: "Lógica narrativa",
              d: "Resoluções que explicam o porquê de cada passo.",
            },
            {
              n: "03",
              t: "Prática deliberada",
              d: "Banco com níveis de dificuldade e revisão espaçada.",
            },
          ].map((step) => (
            <li key={step.n} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-pink font-manrope text-sm font-bold text-white">
                {step.n}
              </span>
              <div>
                <p className="font-heading font-bold text-brand-premium">{step.t}</p>
                <p className="text-sm text-brand-muted">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-heading mb-2 text-xl font-bold text-brand-premium">
          O que você vai dominar
        </h2>
        <p className="mb-6 text-sm text-brand-muted">
          Toque em cada módulo para ver a explicação completa.
        </p>
        <div className="space-y-3">
          {modulos.map((m) => (
            <Link
              key={m.id}
              href={`#detalhe-${m.id}`}
              className="block rounded-[26px] border border-brand-line bg-white p-4 shadow-card transition hover:shadow-card-lg"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-heading font-bold text-brand-premium">
                  {m.title}
                </span>
                <ChevronRight className="h-5 w-5 text-brand-pink" />
              </div>
              <ul className="space-y-1 text-sm text-brand-muted">
                {m.topics.map((t) => (
                  <li key={t} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink" />
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {modulos.map((m) => (
        <section
          key={m.id}
          id={`detalhe-${m.id}`}
          className="mb-8 scroll-mt-24 rounded-[26px] border border-dashed border-brand-pink/40 bg-brand-roseSoft/40 p-5"
        >
          <h3 className="font-heading mb-2 text-lg font-bold text-brand-premium">
            {m.title}
          </h3>
          <p className="text-sm leading-relaxed text-brand-muted">
            Neste módulo você aprofunda teoria, resolve listas temáticas e acompanha
            correções em vídeo. Ao final, há simulado cronometrado com gabarito
            comentado para medir evolução.
          </p>
        </section>
      ))}

      <section className="mb-24 overflow-hidden rounded-[28px] p-[1px] bg-gradient-to-br from-brand-cta via-brand-pink to-[#FF6ABD] shadow-card-lg">
        <div className="rounded-[27px] bg-[#0D0D12] px-5 py-8 text-center">
          <h2 className="font-heading mb-2 text-xl font-bold text-white">
            Pronto para conquistar sua nota máxima?
          </h2>
          <p className="mb-6 text-sm text-white/75">
            Garanta acesso completo e suporte até o dia da prova.
          </p>
          <div className="mb-3">
            <GradientCtaButton href="#matricula-mat">Começar agora</GradientCtaButton>
          </div>
          <Link
            href="/"
            className="font-manrope block w-full rounded-[26px] border border-white/35 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Ver planos
          </Link>
        </div>
      </section>

      <div id="matricula-mat" />

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
              <BookOpen className="h-5 w-5" />
            </span>
            Cursos
          </span>
          <span className="flex flex-col items-center gap-1">
            <ShoppingCart className="h-5 w-5" />
            Carrinho
          </span>
          <span className="flex flex-col items-center gap-1">
            <User className="h-5 w-5" />
            Perfil
          </span>
        </div>
      </nav>
    </CourseShell>
  );
}

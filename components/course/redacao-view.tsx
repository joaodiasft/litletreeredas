"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Flame,
  Home,
  MessageCircle,
  PenLine,
  Quote,
  Sparkles,
  Trophy,
  Users,
  Video,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CourseHeaderBack,
  CourseShell,
  GradientCtaButton,
  SectionLineTitle,
} from "./shell";

const stats = [
  { label: "50+ aulas gravadas", icon: Video },
  { label: "12k alunos impactados", icon: Users },
  { label: "98% de aprovação", icon: Trophy },
  { label: "24/7 suporte total", icon: MessageCircle },
] as const;

export function RedacaoView() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-10">
        <span className="mb-3 inline-block rounded-full bg-brand-roseSoft px-3 py-1 font-manrope text-[10px] font-bold uppercase tracking-wider text-brand-pink">
          Método exclusivo
        </span>
        <h1 className="font-heading mb-3 text-[25px] font-bold leading-tight text-brand-premium">
          O caminho irreversível para a{" "}
          <span className="text-brand-pink">Nota 1000.</span>
        </h1>
        <p className="mb-6 text-sm leading-relaxed text-brand-muted">
          Tudo o que você precisa para dominar a redação do ENEM: técnica, repertório
          e gestão de tempo com acompanhamento próximo.
        </p>
        <GradientCtaButton href="#matricula-red">Quero entrar agora</GradientCtaButton>
        <a
          href="#curriculo"
          className="mt-4 block text-center font-manrope text-sm font-semibold text-brand-muted hover:text-brand-pink"
        >
          ver todos os módulos
        </a>
        <div className="relative mt-8 overflow-hidden rounded-[26px] bg-[#0D0D12] p-6 shadow-card-lg">
          <p className="font-heading text-center text-lg italic text-amber-100/90">
            Escrita Premium
          </p>
          <div className="mt-4 rounded-[20px] bg-white/95 pb-3 pt-3 text-center shadow-card">
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
              Média dos alunos
            </p>
            <p className="font-heading text-2xl font-bold text-brand-pink">900+</p>
            <p className="text-[10px] text-brand-muted">pontos</p>
          </div>
        </div>
      </section>

      <section className="mb-10 grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            whileHover={{ y: -2 }}
            className="rounded-[22px] border border-brand-line bg-white p-4 text-center shadow-card"
          >
            <s.icon className="mx-auto mb-2 h-6 w-6 text-brand-pink" strokeWidth={2} />
            <p className="text-[12px] font-semibold leading-snug text-brand-premium">
              {s.label}
            </p>
          </motion.div>
        ))}
      </section>

      <section className="mb-10">
        <SectionLineTitle>A ciência por trás da escrita</SectionLineTitle>
        <p className="mb-6 text-sm text-brand-muted">
          Método validado em anos de correções e resultados reais.
        </p>
        <div className="space-y-3">
          {[
            {
              t: "Comece do zero",
              d: "Base conceitual clara antes de avançar para temas complexos.",
            },
            {
              t: "Repertório coringa",
              d: "Banco de autores e filósofos com aplicação guiada.",
            },
            {
              t: "Escrita estruturada",
              d: "Modelos de parágrafo e conectores para ganhar fluidez.",
            },
          ].map((item) => (
            <div
              key={item.t}
              className="rounded-[26px] border border-brand-line bg-white p-4 shadow-card"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
                <PenLine className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="font-heading mb-1 text-base font-bold text-brand-premium">
                {item.t}
              </h3>
              <p className="text-sm text-brand-muted">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="curriculo" className="mb-10 scroll-mt-24">
        <h2 className="font-heading mb-2 text-xl font-bold text-brand-premium">
          Currículo de elite
        </h2>
        <p className="mb-6 text-sm text-brand-muted">
          Abra cada etapa para ver a explicação do módulo.
        </p>
        <Accordion defaultValue={[]} multiple={false} className="space-y-2">
          {[
            "01. A base da aprovação",
            "02. Hipertrofia de repertório",
            "03. Finalização de alto nível",
          ].map((label, idx) => (
            <AccordionItem
              key={label}
              value={`red-${idx}`}
              className="rounded-[22px] border border-brand-line bg-white px-4 shadow-card"
            >
              <AccordionTrigger className="font-manrope text-sm font-semibold text-brand-premium hover:no-underline">
                {label}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-relaxed text-brand-muted">
                  Neste módulo você desenvolve competências específicas, com correções
                  comentadas e metas semanais. Ideal para quem busca evolução
                  mensurável até a prova.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-10 space-y-4">
        <SectionLineTitle>Vozes do sucesso</SectionLineTitle>
        {[
          {
            q: "“A correção individualizada mudou minha forma de estruturar o texto.”",
            n: "Maria Clara",
            tag: "Medicina",
          },
          {
            q: "“Consegui nota máxima na primeira fase da Fuvest.”",
            n: "Lucas",
            tag: "Engenharia",
          },
        ].map((t) => (
          <div
            key={t.n}
            className="rounded-[26px] border border-brand-line bg-white p-5 shadow-card"
          >
            <Quote className="mb-2 h-6 w-6 text-brand-roseLight" />
            <p className="mb-4 text-sm leading-relaxed text-brand-muted">{t.q}</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand-roseSoft" />
              <div>
                <p className="font-heading text-sm font-bold text-brand-premium">
                  {t.n}
                </p>
                <span className="inline-block rounded-full bg-brand-roseSoft px-2 py-0.5 text-[10px] font-semibold text-brand-pink">
                  {t.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <SectionLineTitle>Aceleradores de performance</SectionLineTitle>
        <ul className="space-y-4">
          {[
            {
              icon: Sparkles,
              t: "Simulados espelho",
              d: "Provas no estilo ENEM com tempo e cartão-resposta.",
            },
            {
              icon: Flame,
              t: "Revisão aquecida",
              d: "Checklist na véspera para evitar erros comuns.",
            },
            {
              icon: BookOpen,
              t: "Biblioteca de modelos",
              d: "Redações nota 1000 comentadas linha a linha.",
            },
          ].map((item) => (
            <li
              key={item.t}
              className="flex gap-3 rounded-[22px] border border-brand-line bg-white p-4 shadow-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
                <item.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <p className="font-heading text-sm font-bold text-brand-premium">
                  {item.t}
                </p>
                <p className="text-sm text-brand-muted">{item.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="matricula-red"
        className="mb-24 overflow-hidden rounded-[28px] bg-gradient-primary px-5 py-10 text-center text-white shadow-card-lg"
      >
        <h2 className="font-heading mb-2 text-xl font-bold">
          Sua jornada rumo à excelência começa agora.
        </h2>
        <p className="mb-6 text-sm text-white/90">
          Últimas vagas com condição especial para turma 2026.
        </p>
        <a
          href="mailto:contato@redacaonotamil.com.br"
          className="font-manrope inline-flex w-full items-center justify-center rounded-[26px] bg-white px-6 py-4 text-[15px] font-bold text-brand-pink shadow-card transition hover:bg-brand-roseSoft"
        >
          Garantir minha vaga com desconto
        </a>
        <p className="mt-4 text-[11px] text-white/85">Restam apenas 100 vagas em 2024</p>
      </section>

      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md"
        aria-label="Navegação"
      >
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <Link href="/" className="flex flex-col items-center gap-1 text-brand-pink">
            <Home className="h-5 w-5" />
            Início
          </Link>
          <span className="flex flex-col items-center gap-1">
            <BookOpen className="h-5 w-5" />
            Módulos
          </span>
          <span className="flex flex-col items-center gap-1">
            <Users className="h-5 w-5" />
            Comunidade
          </span>
          <span className="flex flex-col items-center gap-1">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-roseSoft text-brand-pink">
              <PenLine className="h-5 w-5" />
            </span>
            Perfil
          </span>
        </div>
      </nav>
    </CourseShell>
  );
}

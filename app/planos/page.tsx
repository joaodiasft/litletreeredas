"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BookOpen,
  Check,
  GraduationCap,
  Home,
  Layers,
  Sparkles,
  Users,
} from "lucide-react";
import { CourseHeaderBack, CourseShell, SectionLineTitle } from "@/components/course/shell";

const plans = [
  {
    title: "Curso de Redação",
    price: "R$ 69",
    oldPrice: "R$ 119",
    highlights: [
      "Método Redação Nota Mil",
      "Correções com IA",
      "Suporte em comunidade",
      "Material didático atualizado",
    ],
    cta: "Quero Redação",
    featured: false,
  },
  {
    title: "Curso de Exatas",
    price: "R$ 119",
    oldPrice: "R$ 199",
    highlights: [
      "Física, Química e Matemática",
      "Banco de questões comentadas",
      "Aulas ao vivo semanais",
      "Plano de estudo inteligente",
    ],
    cta: "Começar Exatas",
    featured: true,
  },
  {
    title: "Matemática do Zero",
    price: "R$ 99",
    oldPrice: "R$ 149",
    highlights: [
      "Nível zero ao avançado",
      "Algoritmo de estudos",
      "Listas com gabarito",
      "Tutoria personalizada",
    ],
    cta: "Ver Matemática",
    featured: false,
  },
] as const;

export default function PlanosPage() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-8">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Planos e valores
        </p>
        <h1 className="font-heading text-[42px] leading-[0.95] text-brand-premium">
          Nossas Trilhas
          <br />
          de <span className="italic text-brand-pink">Alto Desempenho.</span>
        </h1>
        <p className="mt-4 max-w-[340px] text-sm leading-relaxed text-brand-muted">
          Escolha a trilha ideal para sua etapa e estude com aulas completas,
          metodologia focada em resultado e mentoria.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className={`rounded-[26px] border p-5 shadow-card ${
              plan.featured
                ? "border-brand-pink/35 bg-white"
                : "border-brand-line bg-white"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
                {plan.featured ? <BadgeCheck className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
              </span>
              {plan.featured && (
                <span className="rounded-full bg-brand-pink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Destaque
                </span>
              )}
            </div>

            <h2 className="font-heading text-2xl leading-tight text-brand-premium">{plan.title}</h2>

            <ul className="mt-4 space-y-2">
              {plan.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-end gap-2">
              <p className="font-heading text-4xl leading-none text-brand-premium">{plan.price}</p>
              <p className="pb-1 text-sm text-brand-muted line-through">{plan.oldPrice}</p>
            </div>

            <a
              href="#comprar"
              className={`font-manrope mt-5 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold shadow-card transition ${
                plan.featured
                  ? "bg-gradient-primary text-white hover:brightness-105"
                  : "border border-brand-line bg-brand-roseSoft text-brand-premium hover:bg-brand-roseLight/60"
              }`}
            >
              {plan.cta}
            </a>
          </motion.article>
        ))}
      </section>

      <section className="mb-10">
        <div className="mb-6 overflow-hidden rounded-[24px] bg-[#0D0D12]">
          <div className="aspect-[16/7] w-full bg-[radial-gradient(circle_at_50%_20%,rgba(229,13,137,.45),transparent_60%),linear-gradient(135deg,#0D0D12,#15151d)]" />
        </div>
        <SectionLineTitle>Excelência em cada detalhe</SectionLineTitle>
        <ul className="space-y-3">
          {[
            { icon: GraduationCap, title: "Especialistas Nota Mil", desc: "Professores com foco em ENEM e vestibulares." },
            { icon: Sparkles, title: "Aprendizado ativo", desc: "Plano de ação com revisão e prática inteligente." },
            { icon: Layers, title: "Conteúdo em camadas", desc: "Base, aprofundamento e simulado de alto nível." },
          ].map((item) => (
            <li key={item.title} className="rounded-[22px] border border-brand-line bg-white p-4 shadow-card">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
                <item.icon className="h-4.5 w-4.5" />
              </div>
              <p className="font-heading text-base text-brand-premium">{item.title}</p>
              <p className="text-sm text-brand-muted">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="comprar"
        className="mb-24 rounded-[28px] border border-brand-line bg-white p-5 shadow-card"
      >
        <h3 className="font-heading text-2xl text-brand-premium">Pronto para começar?</h3>
        <p className="mt-2 text-sm text-brand-muted">
          Escolha sua trilha e receba o acesso completo em minutos.
        </p>
        <a
          href="mailto:contato@redacaonotamil.com.br"
          className="font-manrope mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-primary px-5 py-3.5 text-sm font-semibold text-white shadow-card-lg"
        >
          Falar com atendimento
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
          <Link href="/turmas" className="flex flex-col items-center gap-1">
            <Users className="h-5 w-5" />
            Turmas
          </Link>
          <span className="flex flex-col items-center gap-1 text-brand-pink">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-roseSoft">
              <BookOpen className="h-5 w-5" />
            </span>
            Planos
          </span>
        </div>
      </nav>
    </CourseShell>
  );
}

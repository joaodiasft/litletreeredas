"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, FileText, GraduationCap, Sparkles, Target, UserCheck, Wallet } from "lucide-react";
import { CourseHeaderBack, CourseShell, SectionLineTitle } from "@/components/course/shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function BolsaPage() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Qualificação para Bolsa" />

      <section className="mb-8">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Programa de bolsas
        </p>
        <h1 className="font-heading text-[42px] leading-[0.95] text-brand-premium">
          Me qualificar para
          <br />
          <span className="text-brand-pink">bolsa no curso</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted">
          Página completa para você entender critérios, etapas e aumentar sua chance
          de aprovação no programa de bolsa da Redação Nota Mil.
        </p>
      </section>

      <section className="mb-8 rounded-[26px] bg-gradient-primary p-5 text-white shadow-card-lg">
        <div className="mb-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
          Processo 2026 aberto
        </div>
        <h2 className="font-heading text-3xl leading-tight">Até 80% de desconto</h2>
        <p className="mt-2 text-sm text-white/90">
          Avaliação por desempenho, perfil socioeconômico e comprometimento.
        </p>
        <a
          href="#inscricao"
          className="font-manrope mt-4 inline-flex rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-brand-pink"
        >
          Quero me inscrever
        </a>
      </section>

      <section className="mb-8">
        <SectionLineTitle>Como funciona</SectionLineTitle>
        <div className="space-y-3">
          {[
            { icon: FileText, t: "Inscrição rápida", d: "Preencha formulário com dados acadêmicos e pessoais." },
            { icon: Target, t: "Avaliação técnica", d: "Análise de desempenho em diagnóstico e redação." },
            { icon: UserCheck, t: "Entrevista orientada", d: "Conversa breve para entender objetivos e rotina." },
            { icon: BadgeCheck, t: "Resultado e matrícula", d: "Receba sua faixa de bolsa e próximos passos." },
          ].map((item, i) => (
            <motion.div
              key={item.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-[22px] border border-brand-line bg-white p-4 shadow-card"
            >
              <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
                <item.icon className="h-5 w-5" />
              </span>
              <p className="font-heading text-lg text-brand-premium">{item.t}</p>
              <p className="text-sm text-brand-muted">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-8 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h3 className="font-heading text-2xl text-brand-premium">Critérios de elegibilidade</h3>
        <ul className="mt-3 space-y-2 text-sm text-brand-muted">
          <li className="flex gap-2">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink" />
            Interesse real em evolução acadêmica com rotina de estudos.
          </li>
          <li className="flex gap-2">
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink" />
            Participação em diagnóstico inicial e atividades orientadas.
          </li>
          <li className="flex gap-2">
            <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink" />
            Enquadramento em uma das faixas socioeconômicas do programa.
          </li>
        </ul>
      </section>

      <section className="mb-8 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h3 className="font-heading text-2xl text-brand-premium">Dúvidas frequentes</h3>
        <Accordion defaultValue={[]} multiple={false} className="mt-3 space-y-2">
          {[
            "Posso conseguir bolsa de 100%?",
            "Quanto tempo demora para sair o resultado?",
            "A bolsa vale para todos os cursos?",
          ].map((q, i) => (
            <AccordionItem key={q} value={`faq-${i}`} className="rounded-xl border border-brand-line bg-brand-surface px-3">
              <AccordionTrigger className="font-manrope text-sm font-semibold text-brand-premium hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-brand-muted">
                  O percentual é definido por critérios de avaliação. Nosso time
                  explica sua faixa com transparência e orientação completa.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section id="inscricao" className="mb-24">
        <a
          href="https://forms.gle/Dhz1PFwEcDw9s5fp8"
          target="_blank"
          rel="noopener noreferrer"
          className="font-manrope inline-flex w-full items-center justify-center rounded-[26px] bg-gradient-primary px-6 py-4 text-center text-[15px] font-semibold text-white shadow-card-lg transition hover:brightness-105 active:scale-[0.98]"
        >
          Iniciar minha qualificação agora
        </a>
        <Link
          href="/planos"
          className="font-manrope mt-3 block text-center text-sm font-semibold text-brand-pink"
        >
          Ver planos e valores
        </Link>
      </section>
    </CourseShell>
  );
}

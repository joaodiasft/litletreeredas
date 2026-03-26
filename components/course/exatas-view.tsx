"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Beaker,
  Calculator,
  ChevronRight,
  FlaskConical,
  Home,
  PlayCircle,
  Users,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CourseHeaderLogoMenu,
  CourseShell,
  GradientCtaButton,
  SectionLineTitle,
} from "./shell";

const modules = [
  {
    id: "matematica",
    title: "Matemática",
    icon: Calculator,
    desc: "Funções, geometria analítica e raciocínio rápido para provas objetivas e ENEM.",
  },
  {
    id: "fisica",
    title: "Física",
    icon: Zap,
    desc: "Mecânica, termodinâmica e eletromagnetismo com resolução guiada passo a passo.",
  },
  {
    id: "quimica",
    title: "Química",
    icon: Beaker,
    desc: "Estequiometria, orgânica e físico-química com foco em questões de elite.",
  },
] as const;

export function ExatasView() {
  return (
    <CourseShell>
      <CourseHeaderLogoMenu />

      <section className="mb-10">
        <span className="mb-3 inline-block rounded-full bg-brand-roseSoft px-3 py-1 font-manrope text-[11px] font-semibold uppercase tracking-wider text-brand-pink">
          Cursos Exatas
        </span>
        <h1 className="font-heading mb-3 text-[26px] font-bold leading-tight text-brand-premium">
          Domine as Exatas:{" "}
          <span className="text-brand-pink">Química, Física e Matemática</span>
        </h1>
        <p className="mb-6 text-[15px] leading-relaxed text-brand-muted">
          Metodologia &quot;Mil Anos&quot; para quem busca engenharia e medicina: base
          sólida, simulados semanais e correção individualizada.
        </p>
        <GradientCtaButton href="#matricular-exatas">Matricular-se Agora</GradientCtaButton>
        <a
          href="#cronograma"
          className="mt-4 block text-center font-manrope text-sm font-semibold text-brand-pink underline underline-offset-4 hover:text-brand-cta"
        >
          Ver Cronograma
        </a>
        <div
          id="cronograma"
          className="relative mt-8 overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0B1020] to-[#1a1f35] shadow-card-lg"
        >
          <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.6),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.35),transparent_50%)]" />
        </div>
      </section>

      <section className="mb-12 space-y-4">
        {modules.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <Link
              href={`#explicacao-${m.id}`}
              id={`card-${m.id}`}
              className="block rounded-[26px] border border-brand-line bg-white p-4 shadow-card transition hover:shadow-card-lg"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-roseSoft text-brand-pink">
                <m.icon className="h-5 w-5" strokeWidth={2.25} />
              </div>
              <h3 className="font-heading mb-2 text-lg font-bold text-brand-premium">
                {m.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-brand-muted">{m.desc}</p>
              <span className="inline-flex items-center gap-1 font-manrope text-xs font-bold uppercase tracking-wide text-brand-pink">
                Explorar módulo <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </section>

      {modules.map((m) => (
        <section
          key={m.id}
          id={`explicacao-${m.id}`}
          className="mb-10 scroll-mt-24 rounded-[26px] border border-brand-line bg-brand-roseSoft/50 p-5 shadow-card"
        >
          <h3 className="font-heading mb-2 text-lg font-bold text-brand-premium">
            {m.title} — em detalhes
          </h3>
          <p className="text-sm leading-relaxed text-brand-muted">
            Aqui você acompanha o plano de estudos, pré-requisitos e como o módulo se
            conecta com a prova. Inclui trilha de exercícios, revisões espaçadas e
            mentorias em grupo para tirar dúvidas específicas da disciplina.
          </p>
        </section>
      ))}

      <section className="mb-12">
        <SectionLineTitle>Recursos de Elite</SectionLineTitle>
        <p className="mb-6 text-sm leading-relaxed text-brand-muted">
          Tudo que você precisa para dominar a teoria e a prática.
        </p>
        <div className="mb-8 overflow-hidden rounded-[22px] bg-[#0b1220] shadow-card">
          <div className="aspect-[16/9] w-full bg-[linear-gradient(135deg,#1e3a5f,#0f172a)] opacity-90" />
        </div>
        <ul className="space-y-4">
          {[
            {
              icon: FlaskConical,
              t: "Laboratórios virtuais",
              d: "Simulações 3D para visualizar fenômenos e reações.",
            },
            {
              icon: PlayCircle,
              t: "Resolução passo a passo",
              d: "Vídeos e texto comentados para cada tipo de questão.",
            },
            {
              icon: Users,
              t: "Mentoria individual",
              d: "Plantões com especialistas para o seu cronograma.",
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

      <section className="mb-12 -mx-4 rounded-none bg-brand-pink px-6 py-10 text-center text-white">
        <p className="font-heading mb-3 text-lg font-bold leading-snug">
          92% aprovação em engenharias
        </p>
        <p className="font-heading mb-3 text-lg font-bold leading-snug">
          15k+ alunos nota máxima
        </p>
        <p className="font-heading text-lg font-bold leading-snug">
          85% aprovação em medicina
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading mb-2 text-xl font-bold text-brand-premium">
          Estrutura curricular
        </h2>
        <p className="mb-6 text-sm text-brand-muted">
          Toque em cada bloco para ver o conteúdo programático.
        </p>
        <Accordion defaultValue={[]} multiple={false} className="space-y-2">
          {[
            "01. Matemática: funções, geometria e probabilidade.",
            "02. Física: cinemática, dinâmica e energia.",
            "03. Química: tabela periódica e orgânica.",
            "04. Avançado: introdução ao cálculo e física moderna.",
          ].map((label, idx) => (
            <AccordionItem
              key={label}
              value={`cur-${idx}`}
              className="rounded-[22px] border border-brand-line bg-white px-4 shadow-card"
            >
              <AccordionTrigger className="font-manrope text-sm font-semibold text-brand-premium hover:no-underline">
                {label}
              </AccordionTrigger>
              <AccordionContent className="text-brand-muted">
                <p className="text-sm leading-relaxed">
                  Aqui você encontra a lista de tópicos, carga horária sugerida e
                  conexões com editais recentes. Use como guia para seu planejamento
                  semanal.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <div id="matricular-exatas" className="pb-8">
        <GradientCtaButton href="mailto:contato@redacaonotamil.com.br">
          Falar com consultor
        </GradientCtaButton>
      </div>

      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md"
        aria-label="Navegação"
      >
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-3 text-[10px] font-manrope font-medium text-brand-icon">
          <Link href="/" className="flex flex-col items-center gap-1 text-brand-pink">
            <Home className="h-5 w-5" />
            Início
          </Link>
          <span className="flex flex-col items-center gap-1">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-roseSoft text-brand-pink">
              <Calculator className="h-5 w-5" />
            </span>
            Materiais
          </span>
          <span className="flex flex-col items-center gap-1">
            <span className="h-5 w-5 rounded bg-brand-line" />
            Ranking
          </span>
          <span className="flex flex-col items-center gap-1">
            <Users className="h-5 w-5" />
            Perfil
          </span>
        </div>
      </nav>
    </CourseShell>
  );
}

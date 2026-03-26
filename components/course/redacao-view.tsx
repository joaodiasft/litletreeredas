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
  CheckCircle2,
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
  { label: "900+ em notas de destaque", icon: Trophy },
  { label: "2 mil alunos impactados", icon: Users },
  { label: "90% de aprovação", icon: CheckCircle2 },
  { label: "Suporte humanizado e acompanhamento de verdade", icon: MessageCircle },
] as const;

export function RedacaoView() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-10">
        <span className="mb-3 inline-block rounded-full bg-brand-roseSoft px-3 py-1 font-manrope text-[10px] font-bold uppercase tracking-wider text-brand-pink">
          Matrículas Abertas
        </span>
        <h1 className="font-heading mb-3 text-[25px] font-bold leading-tight text-brand-premium">
          O caminho certo para a{" "}
          <span className="text-brand-pink">Nota 1000 na redação do ENEM</span>
        </h1>
        <p className="mb-6 text-sm leading-relaxed text-brand-muted">
          No Curso de Redação Nota Mil, você aprende tudo o que precisa para
          dominar a redação do ENEM: estrutura, argumentação, repertório
          sociocultural, técnicas de escrita e gestão do tempo, com
          acompanhamento próximo e suporte humanizado em todas as etapas da sua
          preparação.
        </p>
        <p className="mb-6 text-sm leading-relaxed text-brand-muted">
          Aqui, você é orientado da introdução à conclusão, com foco em evolução
          real, prática constante e correções que mostram exatamente como
          melhorar.
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

      <section className="mb-10">
        <SectionLineTitle>Nossos resultados</SectionLineTitle>
        <div className="grid grid-cols-2 gap-3">
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
        </div>
      </section>

      <section className="mb-10">
        <SectionLineTitle>A ciência por trás da escrita</SectionLineTitle>
        <p className="mb-6 text-sm text-brand-muted">
          Nosso método foi construído com base em anos de experiência, correções
          detalhadas e resultados reais. Cada aula é planejada para desenvolver
          as competências exigidas pelo ENEM, ajudando o aluno a escrever com
          mais segurança, clareza e estratégia.
        </p>
        <h3 className="font-heading mb-4 text-lg text-brand-premium">
          Por que escolher o Curso de Redação Nota Mil?
        </h3>
        <div className="space-y-3">
          {[
            {
              t: "Comece do zero",
              d: "Mesmo que você tenha dificuldade para escrever, nosso método oferece uma base clara e organizada para compreender cada parte da redação antes de avançar para temas mais complexos.",
            },
            {
              t: "Repertório coringa",
              d: "Você terá acesso a um banco de autores, filósofos, filmes, dados e referências estratégicas, com orientação sobre como usar cada repertório de forma produtiva na redação.",
            },
            {
              t: "Escrita estruturada",
              d: "Você aprende a montar introdução, desenvolvimento e conclusão com técnica, além de dominar conectivos, argumentação e construção de parágrafos para ganhar fluidez e segurança.",
            },
            {
              t: "Correção que ensina",
              d: "Mais do que corrigir, mostramos onde você errou, por que errou e como melhorar, para que sua evolução seja contínua e perceptível.",
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
          Conheça as etapas da nossa preparação.
        </p>
        <Accordion defaultValue={[]} multiple={false} className="space-y-2">
          {[
            {
              label: "01. A base da aprovação",
              content:
                "Neste módulo, o aluno aprende os fundamentos essenciais da redação do ENEM: estrutura do texto dissertativo-argumentativo, introdução, tese e antecipação argumentativa, desenvolvimento com argumentos consistentes, conclusão com proposta de intervenção completa e competências avaliadas pelo ENEM.",
            },
            {
              label: "02. Hipertrofia de repertório",
              content:
                "Neste módulo, o foco está no fortalecimento do repertório sociocultural e da argumentação. O aluno aprende a utilizar autores e obras de forma estratégica, selecionar repertórios pertinentes, ampliar visão crítica e relacionar repertório e argumento com naturalidade.",
            },
            {
              label: "03. Finalização de alto nível",
              content:
                "Aqui o aluno aperfeiçoa a escrita para alcançar alto desempenho: refinamento argumentativo, aprofundamento crítico, uso eficiente do tempo de prova, treino com temas variados e revisão estratégica para reduzir erros e potencializar a nota.",
            },
          ].map((item, idx) => (
            <AccordionItem
              key={item.label}
              value={`red-${idx}`}
              className="rounded-[22px] border border-brand-line bg-white px-4 shadow-card"
            >
              <AccordionTrigger className="font-manrope text-sm font-semibold text-brand-premium hover:no-underline">
                {item.label}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-relaxed text-brand-muted">
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-10 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h3 className="font-heading mb-2 text-xl text-brand-premium">Como funciona o curso</h3>
        <p className="text-sm leading-relaxed text-brand-muted">
          Nosso curso é organizado por módulos. Cada módulo é composto por 4
          aulas, com duração de 1h30 cada.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted">
          Durante as aulas, o aluno produz redações e atividades direcionadas,
          que são entregues para correção e acompanhamento. Assim, o aprendizado
          acontece com prática constante, orientação individualizada e evolução real.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <SectionLineTitle>Vozes do sucesso</SectionLineTitle>
        {[
          {
            q: "“A correção individualizada mudou a minha forma de estruturar a redação. Passei a escrever com muito mais segurança.”",
            n: "Maria Clara",
            tag: "Medicina",
          },
          {
            q: "“Com o método do curso, consegui desenvolver melhor meus argumentos e elevar muito o nível da minha escrita.”",
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
              d: "Treinos no estilo ENEM, com tempo cronometrado e formato semelhante ao da prova oficial.",
            },
            {
              icon: Flame,
              t: "Revisão aquecida",
              d: "Checklist estratégico e revisão orientada para evitar erros comuns e chegar mais preparado no dia da prova.",
            },
            {
              icon: BookOpen,
              t: "Biblioteca de modelos",
              d: "Acesso a redações bem estruturadas, modelos comentados e exemplos de textos de alto nível para servir de referência.",
            },
            {
              icon: Users,
              t: "Acompanhamento próximo",
              d: "Orientação contínua para que o aluno saiba exatamente no que precisa melhorar em cada etapa.",
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
          Curso de Redação Nota Mil
        </h2>
        <p className="mb-6 text-sm text-white/90">
          Mais do que ensinar a escrever, nós preparamos você para conquistar
          resultados reais.
        </p>
        <a
          href="mailto:contato@redacaonotamil.com.br"
          className="font-manrope inline-flex w-full items-center justify-center rounded-[26px] bg-white px-6 py-4 text-[15px] font-bold text-brand-pink shadow-card transition hover:bg-brand-roseSoft"
        >
          Matrículas abertas - Quero minha vaga
        </a>
        <p className="mt-4 text-[11px] text-white/85">
          Venha aprender com um método que une técnica, prática, estratégia e
          acompanhamento de verdade.
        </p>
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

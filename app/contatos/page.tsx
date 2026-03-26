"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react";
import { CourseHeaderBack, CourseShell } from "@/components/course/shell";

export default function ContatosPage() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-6">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Central de atendimento
        </p>
        <h1 className="font-heading text-[42px] leading-[0.95] text-brand-premium">
          Fale <span className="text-brand-pink">Conosco</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted">
          Estamos prontos para guiar sua jornada rumo à nota mil. Escolha o
          canal que sua preferência.
        </p>
      </section>

      <section className="mb-6 space-y-3">
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-[24px] bg-gradient-primary p-5 text-white shadow-card-lg"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span className="text-lg">↗</span>
          </div>
          <p className="font-heading text-2xl leading-tight">WhatsApp Nota Mil</p>
          <p className="mt-1 text-sm text-white/90">
            Atendimento imediato e personalizado via chat.
          </p>
        </a>

        <div className="rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
            <Mail className="h-4 w-4" />
          </div>
          <p className="font-heading text-lg text-brand-premium">E-mail</p>
          <p className="text-sm text-brand-muted">suporte@redacaonotamil.com.br</p>
        </div>

        <div className="rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
            <Phone className="h-4 w-4" />
          </div>
          <p className="font-heading text-lg text-brand-premium">Telefone</p>
          <p className="text-sm text-brand-muted">0800 123 4567</p>
        </div>

        <Link
          href="/localizacao"
          className="flex items-center justify-between rounded-[24px] border border-brand-line bg-white p-4 shadow-card"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-pink text-white">
              <MapPin className="h-4 w-4" />
            </span>
            <span>
              <p className="font-heading text-base text-brand-premium">Dúvidas Frequentes</p>
              <p className="text-xs text-brand-muted">Confira também nossa localização</p>
            </span>
          </span>
          <span className="text-brand-pink">›</span>
        </Link>
      </section>

      <section className="mb-24 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h2 className="font-heading text-2xl text-brand-premium">Envie uma mensagem</h2>
        <form className="mt-4 space-y-3">
          <input
            className="w-full rounded-xl border border-brand-line bg-brand-surface px-3 py-3 text-sm"
            placeholder="Seu nome"
          />
          <input
            type="email"
            className="w-full rounded-xl border border-brand-line bg-brand-surface px-3 py-3 text-sm"
            placeholder="email@exemplo.com"
          />
          <select className="w-full rounded-xl border border-brand-line bg-brand-surface px-3 py-3 text-sm">
            <option>Dúvida sobre cursos</option>
            <option>Planos e matrículas</option>
            <option>Suporte técnico</option>
          </select>
          <textarea
            className="w-full rounded-xl border border-brand-line bg-brand-surface px-3 py-3 text-sm"
            rows={4}
            placeholder="Como podemos ajudar?"
          />
          <button
            type="button"
            className="font-manrope inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-card-lg"
          >
            <Send className="h-4 w-4" />
            Enviar Mensagem
          </button>
        </form>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md">
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <Link href="/" className="flex flex-col items-center gap-1">
            <User className="h-4.5 w-4.5" />
            Início
          </Link>
          <Link href="/localizacao" className="flex flex-col items-center gap-1">
            <MapPin className="h-4.5 w-4.5" />
            Mapa
          </Link>
          <span className="flex flex-col items-center gap-1 text-brand-pink">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft">
              <MessageCircle className="h-4.5 w-4.5" />
            </span>
            Contato
          </span>
          <Link href="/destaques" className="flex flex-col items-center gap-1">
            <User className="h-4.5 w-4.5" />
            Alunos
          </Link>
        </div>
      </nav>
    </CourseShell>
  );
}

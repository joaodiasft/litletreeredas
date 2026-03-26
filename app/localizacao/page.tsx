"use client";

import Link from "next/link";
import { Accessibility, Car, Clock3, MapPin, Train, User, BusFront } from "lucide-react";
import { CourseHeaderBack, CourseShell } from "@/components/course/shell";

export default function LocalizacaoPage() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-7">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Onde a mágica acontece
        </p>
        <h1 className="font-heading text-[44px] leading-[0.95] text-brand-premium">
          Nossa <span className="text-brand-pink">Sede</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted">
          Um espaço projetado para alto rendimento acadêmico, localizado no coração
          de São Paulo, pronto para receber os futuros nota mil.
        </p>
      </section>

      <section className="mb-6 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <div className="mb-4 rounded-[20px] bg-brand-surface p-4">
          <div className="relative aspect-[4/5] rounded-2xl bg-[linear-gradient(135deg,#eceaf0,#d9d6df)]">
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-brand-pink shadow-card">
              <MapPin className="h-3.5 w-3.5" />
              REDAÇÃO NOTA MIL
            </span>
          </div>
        </div>
        <a
          href="https://maps.google.com/?q=Paulista+1000+Sao+Paulo"
          target="_blank"
          rel="noopener noreferrer"
          className="font-manrope inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-white"
        >
          <MapPin className="h-4 w-4" />
          Abrir no Google Maps
        </a>
      </section>

      <section className="mb-6 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
          <MapPin className="h-4 w-4" />
        </div>
        <h2 className="font-heading text-2xl text-brand-premium">Endereço</h2>
        <p className="mt-2 text-sm text-brand-muted">
          Av. Paulista, 1000
          <br />
          Bela Vista, São Paulo - SP
          <br />
          CEP: 01310-100
        </p>
        <div className="mt-4 border-t border-dashed border-brand-line pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
            Ponto de referência
          </p>
          <p className="mt-1 text-sm text-brand-muted">
            Próximo ao metrô Trianon-Masp e ao MASP.
          </p>
        </div>
      </section>

      <section className="mb-6 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h2 className="font-heading text-2xl text-brand-premium">Como Chegar</h2>
        <ul className="mt-4 space-y-3">
          <li className="rounded-2xl bg-brand-surface p-3">
            <p className="font-heading flex items-center gap-2 text-base text-brand-premium">
              <Train className="h-4 w-4 text-brand-pink" />
              Metrô
            </p>
            <p className="mt-1 text-sm text-brand-muted">Linha Verde, estação Trianon-Masp.</p>
          </li>
          <li className="rounded-2xl bg-brand-surface p-3">
            <p className="font-heading flex items-center gap-2 text-base text-brand-premium">
              <BusFront className="h-4 w-4 text-brand-pink" />
              Ônibus
            </p>
            <p className="mt-1 text-sm text-brand-muted">Corredor da Av. Paulista, diversos ônibus.</p>
          </li>
          <li className="rounded-2xl bg-brand-surface p-3">
            <p className="font-heading flex items-center gap-2 text-base text-brand-premium">
              <Car className="h-4 w-4 text-brand-pink" />
              Carro
            </p>
            <p className="mt-1 text-sm text-brand-muted">Acesso pela Rua Augusta com estacionamento próximo.</p>
          </li>
        </ul>
      </section>

      <section className="mb-24 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <div className="rounded-2xl bg-brand-surface p-3">
          <p className="font-heading flex items-center justify-between text-base text-brand-premium">
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-brand-pink" />
              Horário de Funcionamento
            </span>
          </p>
          <p className="mt-2 text-sm text-brand-muted">Segunda a Sexta: 08:00 - 21:00</p>
          <p className="text-sm text-brand-muted">Sábado: 09:00 - 14:00</p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-brand-roseSoft p-3 text-sm text-brand-premium">Estacionamento</div>
          <div className="rounded-xl bg-brand-roseSoft p-3 text-sm text-brand-premium">
            <span className="inline-flex items-center gap-1">
              <Accessibility className="h-4 w-4 text-brand-pink" />
              Acessibilidade
            </span>
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md">
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <Link href="/" className="flex flex-col items-center gap-1">
            <User className="h-4.5 w-4.5" />
            Início
          </Link>
          <span className="flex flex-col items-center gap-1 text-brand-pink">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft">
              <MapPin className="h-4.5 w-4.5" />
            </span>
            Mapa
          </span>
          <Link href="/contatos" className="flex flex-col items-center gap-1">
            <Clock3 className="h-4.5 w-4.5" />
            Contato
          </Link>
          <Link href="/resultados" className="flex flex-col items-center gap-1">
            <User className="h-4.5 w-4.5" />
            Alunos
          </Link>
        </div>
      </nav>
    </CourseShell>
  );
}

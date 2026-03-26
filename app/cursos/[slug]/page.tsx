import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExatasView } from "@/components/course/exatas-view";
import { MatematicaView } from "@/components/course/matematica-view";
import { RedacaoView } from "@/components/course/redacao-view";

const titles: Record<string, string> = {
  exatas: "Exatas | Redação Nota Mil",
  matematica: "Matemática | Redação Nota Mil",
  redacao: "Redação | Redação Nota Mil",
};

const descriptions: Record<string, string> = {
  exatas: "Química, física e matemática com metodologia Mil Anos.",
  matematica: "Do zero ao infinito: trilha completa de matemática.",
  redacao: "O caminho para a nota 1000 na redação do ENEM.",
};

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params;
  if (!titles[slug]) return {};
  return {
    title: titles[slug],
    description: descriptions[slug],
  };
}

export function generateStaticParams() {
  return [{ slug: "exatas" }, { slug: "matematica" }, { slug: "redacao" }];
}

export default function CursoPage({ params }: Props) {
  const { slug } = params;

  switch (slug) {
    case "exatas":
      return <ExatasView />;
    case "matematica":
      return <MatematicaView />;
    case "redacao":
      return <RedacaoView />;
    default:
      notFound();
  }
}

import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Catalogo } from "@/components/site/Catalogo";
import {
  Atendimento,
  Colecoes,
  CtaFinal,
  Cuidados,
  Diferenciais,
  Footer,
  Galeria,
  Garantia,
  Instagram,
  Moissanite,
  Prata925,
} from "@/components/site/Secoes";

const titulo = "Pratas do Sol — Joias em prata 925 e moissanite em Jequié - BA";
const descricao =
  "Joias em prata 925 e linha moissanite da Pratas do Sol. Anéis, braceletes, pingentes, brincos e berloques. Atendimento presencial em Jequié - BA com agendamento prévio.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Catalogo />
        <Colecoes />
        <Prata925 />
        <Moissanite />
        <Galeria />
        <Garantia />
        <Cuidados />
        <Diferenciais />
        <Atendimento />
        <Instagram />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}

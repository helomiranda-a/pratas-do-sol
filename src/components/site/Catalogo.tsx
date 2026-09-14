import { useEffect, useState } from "react";
import {
  CONTATO,
  categorias,
  produtos as produtosIniciais,
  type CategoriaId,
  type Produto,
} from "@/data/produtos";
import { listarProdutos } from "@/lib/produtos-db";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

function CardProduto({ produto, grande }: { produto: Produto; grande?: boolean }) {
  return (
    <article
      className={cn(
        "group flex flex-col bg-card transition-all duration-500 hover:shadow-[var(--shadow-joia)]",
        grande && "sm:col-span-2",
      )}
    >
      <div
        className={cn(
          "zoom-foto relative bg-prata-clara",
          grande ? "aspect-[4/3]" : "aspect-[4/5]",
        )}
      >
        <img
          src={produto.imagem}
          alt={produto.nome}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {!produto.disponibilidade && (
          <span className="absolute top-3 left-3 bg-background/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-bordo uppercase">
            Indisponível
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 border-t border-border px-4 py-5">
        <h3 className="font-display text-xl leading-snug text-foreground">{produto.nome}</h3>
        {produto.material && (
          <p className="kicker text-muted-foreground">{produto.material}</p>
        )}
        {produto.descricao && (
          <p className="text-sm leading-relaxed text-muted-foreground">{produto.descricao}</p>
        )}
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <span className="font-display text-lg text-primary">
            {produto.preco ?? "Valor sob consulta"}
          </span>
          <a
            href={CONTATO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="sublinhado-link text-[0.7rem] font-semibold tracking-[0.16em] text-foreground uppercase"
          >
            Consultar
          </a>
        </div>
      </div>
    </article>
  );
}

export function Catalogo() {
  const [ativa, setAtiva] = useState<CategoriaId>("aneis");
  const [todos, setTodos] = useState<Produto[]>(produtosIniciais);

  // Os produtos vêm do painel de edição; a lista inicial é só um reserva.
  useEffect(() => {
    let ativo = true;
    listarProdutos()
      .then((lista) => {
        if (ativo && lista.length > 0) setTodos(lista);
      })
      .catch(() => undefined);
    return () => {
      ativo = false;
    };
  }, []);

  const lista = todos.filter((p) => p.categoria === ativa);

  return (
    <section id="joias" className="scroll-mt-24 bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="kicker text-primary">Catálogo</span>
          <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] sm:text-[3.2rem]">
            Joias que combinam <span className="text-primary italic">com você</span>
          </h2>
        </Reveal>

        {/* Abas */}
        <div className="-mx-5 mt-10 overflow-x-auto px-5 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            aria-label="Categorias de joias"
            className="flex w-max min-w-full gap-2 border-b border-border pb-0"
          >
            {categorias.map((c) => {
              const ativo = c.id === ativa;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={ativo}
                  onClick={() => setAtiva(c.id)}
                  className={cn(
                    "relative shrink-0 px-5 py-3 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-300",
                    ativo ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c.rotulo}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-px h-[2px] origin-left bg-primary transition-transform duration-400",
                      ativo ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={ativa}
          className="mt-10 grid animate-[fade-in_0.5s_ease-out] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {lista.map((p, i) => (
            <CardProduto key={p.id} produto={p} grande={p.destaque === true && i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

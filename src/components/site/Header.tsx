import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTATO } from "@/data/produtos";
import { cn } from "@/lib/utils";

const navegacao = [
  { rotulo: "Início", href: "#inicio" },
  { rotulo: "Joias", href: "#joias" },
  { rotulo: "Coleções", href: "#colecoes" },
  { rotulo: "Prata 925", href: "#prata-925" },
  { rotulo: "Moissanite", href: "#moissanite" },
  { rotulo: "Garantia", href: "#garantia" },
  { rotulo: "Cuidados", href: "#cuidados" },
  { rotulo: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/92 backdrop-blur-md"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 lg:px-10",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <span className="grid size-7 shrink-0 rotate-45 place-items-center border border-primary">
            <span className="block size-2.5 border border-primary" />
          </span>
          <span className="truncate font-display text-lg tracking-[0.18em] text-foreground sm:text-xl">
            PRATAS DO SOL
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 xl:flex">
            {navegacao.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="sublinhado-link text-[0.8rem] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.rotulo}
              </a>
            ))}
          </nav>

          <a
            href={CONTATO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 bg-primary px-5 py-2.5 text-[0.72rem] font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-all duration-300 hover:bg-bordo sm:inline-flex"
          >
            Agendar atendimento
          </a>

          <button
            type="button"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setAberto((v) => !v)}
            className="grid size-10 shrink-0 place-items-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary xl:hidden"
          >
            {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 xl:hidden",
          aberto ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-5 py-4">
          {navegacao.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setAberto(false)}
              style={{ transitionDelay: `${i * 30}ms` }}
              className="border-b border-border/70 py-3.5 font-display text-lg text-foreground last:border-0"
            >
              {item.rotulo}
            </a>
          ))}
          <a
            href={CONTATO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 mb-2 bg-primary px-5 py-3.5 text-center text-[0.72rem] font-semibold tracking-[0.16em] text-primary-foreground uppercase"
          >
            Agendar atendimento
          </a>
        </nav>
      </div>
    </header>
  );
}

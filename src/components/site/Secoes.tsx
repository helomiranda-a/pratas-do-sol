import { CONTATO, imagens } from "@/data/produtos";
import { Reveal } from "./Reveal";

const BotaoAgendar = ({ variante = "solido" }: { variante?: "solido" | "claro" }) => (
  <a
    href={CONTATO.whatsappLink}
    target="_blank"
    rel="noreferrer"
    className={
      variante === "solido"
        ? "inline-flex items-center justify-center bg-primary px-7 py-4 text-[0.72rem] font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-all duration-300 hover:bg-bordo"
        : "inline-flex items-center justify-center bg-background px-7 py-4 text-[0.72rem] font-semibold tracking-[0.18em] text-primary uppercase transition-all duration-300 hover:bg-offwhite"
    }
  >
    Agendar atendimento
  </a>
);

export function Colecoes() {
  const blocos = [
    {
      titulo: "Presentear",
      texto: "Peças entregues em embalagem própria, prontas para presente.",
      imagem: imagens.braceletesCaixas,
      alt: "Braceletes de prata em caixinhas com laços vermelhos",
    },
    {
      titulo: "Pedras em cor",
      texto: "Pingentes em gota com pedras coloridas e halo cravejado.",
      imagem: imagens.pingenteVerde,
      alt: "Pingente de gota com pedra verde em caixa preta sobre fundo vermelho",
    },
    {
      titulo: "Uso diário",
      texto: "Anéis finos e braceletes lisos para compor no dia a dia.",
      imagem: imagens.aneisMao,
      alt: "Mão com anel solitário e anel de bolinhas em prata",
    },
  ];

  return (
    <section id="colecoes" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="kicker text-primary">Coleções</span>
            <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] sm:text-[3.2rem]">
              Três formas de usar prata
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blocos.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 110}>
              <article className="group h-full">
                <div className="zoom-foto aspect-[3/4] bg-prata-clara">
                  <img
                    src={b.imagem}
                    alt={b.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl">{b.titulo}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {b.texto}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Prata925() {
  return (
    <section id="prata-925" className="scroll-mt-24 bg-offwhite py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <div className="zoom-foto aspect-[4/5] bg-prata-clara">
            <img
              src={imagens.colarCruz}
              alt="Corrente de prata com pingente de cruz em caixa"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <span className="kicker text-primary">O material</span>
          <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] sm:text-[3.2rem]">
            PRATA 925
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            A prata 925 é uma liga composta por 92,5% de prata pura e 5%
            {" "}de outros metais, proporção que dá resistência à peça sem abrir mão
            do brilho característico da prata.
          </p>
          <ul className="mt-8 space-y-4 border-t border-border pt-8">
            {[
              "Brilho branco e frio, que valoriza pedras claras.",
              "Pode escurecer com o tempo pelo contato com ar, suor e cosméticos — é natural e reversível com limpeza adequada.",
              "Guarde as peças separadas, secas e ao abrigo da umidade.",
            ].map((t) => (
              <li key={t} className="flex gap-4 text-sm leading-relaxed text-foreground">
                <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-primary" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Moissanite() {
  return (
    <section id="moissanite" className="scroll-mt-24 gradiente-carmim py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-10">
        <Reveal>
          <span className="kicker text-primary-foreground/75">A linha</span>
          <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] text-primary-foreground sm:text-[3.4rem]">
            MOISSANITE
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-primary-foreground/90">
            Pedras de alto brilho montadas em prata 925, em pontos de luz,
            trilhas e halos cravejados. Peças pensadas para refletir luz em
            qualquer ambiente, do dia à noite.
          </p>
          <div className="mt-9">
            <BotaoAgendar variante="claro" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="zoom-foto aspect-[4/5] bg-bordo/40">
            <img
              src={imagens.brincosCartela}
              alt="Brincos de moissanite em cartela vermelha Pratas do Sol"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Garantia() {
  return (
    <section id="garantia" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="kicker text-primary">Compromisso</span>
          <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] sm:text-[3.2rem]">
            GARANTIA
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            As condições de garantia são informadas diretamente no atendimento,
            de acordo com a peça escolhida. Fale pelo WhatsApp para consultar
            prazo, cobertura e procedimento antes da compra.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {["Prazo", "Cobertura", "Condições", "Como solicitar"].map((t) => (
            <div key={t} className="bg-card p-7">
              <h3 className="font-display text-xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Informação confirmada no atendimento.
              </p>
              <a
                href={CONTATO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="sublinhado-link mt-5 inline-block text-[0.7rem] font-semibold tracking-[0.16em] text-primary uppercase"
              >
                Consultar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cuidados() {
  const grupos = [
    {
      titulo: "Prata 925",
      itens: [
        "Coloque suas joias por último, depois de perfume, creme e maquiagem.",
        "Retire antes de dormir, tomar banho, nadar ou praticar exercícios.",
        "Limpe com flanela macia e seca após o uso.",
        "Guarde em saquinho ou caixa fechada, longe de umidade.",
      ],
    },
    {
      titulo: "Peças com pedras",
      itens: [
        "Evite contato com produtos de limpeza, cloro e água do mar.",
        "Não use escovas duras nem produtos abrasivos sobre as pedras.",
        "Segure pelo aro ou pela corrente, não pela pedra.",
        "Verifique as garras periodicamente no atendimento.",
      ],
    },
  ];

  return (
    <section id="cuidados" className="scroll-mt-24 bg-offwhite py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <Reveal>
          <span className="kicker text-primary">Manutenção</span>
          <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] sm:text-[3.2rem]">
            CUIDADOS COM SUAS JOIAS
          </h2>
          <div className="zoom-foto mt-8 aspect-[4/3] bg-prata-clara">
            <img
              src={imagens.pingenteAmarelo}
              alt="Pingente de gota com pedra amarela em caixa sobre fundo vermelho"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="grid gap-8 sm:grid-cols-2 lg:pt-16">
          {grupos.map((g) => (
            <div key={g.titulo} className="border-t-2 border-primary pt-6">
              <h3 className="font-display text-2xl">{g.titulo}</h3>
              <ul className="mt-5 space-y-4">
                {g.itens.map((i) => (
                  <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Diferenciais() {
  const itens = [
    {
      t: "Curadoria pessoal",
      d: "Cada peça é escolhida a dedo para a loja — nada de catálogo infinito.",
    },
    {
      t: "Atendimento presencial",
      d: `Em ${CONTATO.cidade}, com hora marcada e tempo dedicado a você.`,
    },
    {
      t: "Prata 925 e moissanite",
      d: "Trabalhamos com prata 925 e com a linha de moissanite montada em prata.",
    },
    {
      t: "Pronta para presente",
      d: "As peças saem em embalagem própria da marca.",
    },
  ];

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal className="max-w-xl">
          <span className="kicker text-primary">Por que Pratas do Sol</span>
          <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] sm:text-[3.2rem]">
            Diferenciais
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {itens.map((i, idx) => (
            <Reveal key={i.t} delay={idx * 90}>
              <p className="font-display text-4xl text-prata">0{idx + 1}</p>
              <h3 className="mt-3 font-display text-xl">{i.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Atendimento() {
  return (
    <section id="contato" className="scroll-mt-24 bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="h-full">
            <div className="zoom-foto h-full min-h-[320px] bg-prata-clara">
              <img
                src={imagens.berloques}
                alt="Bracelete de berloques em caixa sobre fundo vermelho"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col justify-center gradiente-carmim p-8 sm:p-12">
              <span className="kicker text-primary-foreground/75">Visite</span>
              <h2 className="mt-4 font-display text-[2.2rem] leading-[1.05] text-primary-foreground sm:text-[2.8rem]">
                ATENDIMENTO PRESENCIAL
              </h2>
              <p className="mt-5 font-display text-2xl text-primary-foreground">
                {CONTATO.cidade}
              </p>
              <p className="mt-3 max-w-md leading-relaxed text-primary-foreground/90">
                {CONTATO.atendimento}
              </p>
              <div className="mt-8 space-y-2 border-t border-primary-foreground/25 pt-7 text-primary-foreground/90">
                <p className="text-sm">WhatsApp: {CONTATO.whatsappTexto}</p>
                <p className="text-sm">Instagram: {CONTATO.instagram}</p>
              </div>
              <div className="mt-8">
                <BotaoAgendar variante="claro" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Galeria() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal className="max-w-xl">
          <span className="kicker text-primary">Editorial</span>
          <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] sm:text-[3.2rem]">
            A marca em imagens
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-6 lg:gap-5">
          <Reveal className="col-span-2 lg:col-span-4">
            <div className="zoom-foto aspect-[16/10] bg-prata-clara">
              <img
                src={imagens.maoBraceleteAneis}
                alt="Mão com bracelete e anéis de prata sobre blusa vermelha"
                loading="lazy"
                className="h-full w-full object-cover object-[center_35%]"
              />
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-2">
            <div className="zoom-foto h-full">
              <div className="flex h-full flex-col justify-between gradiente-carmim p-6">
                <span className="kicker text-primary-foreground/75">Pratas do Sol</span>
                <p className="mt-8 font-display text-2xl leading-tight text-primary-foreground">
                  Vermelho, prata e a luz certa em cada peça.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={40} className="lg:col-span-2">
            <div className="zoom-foto aspect-[3/4] bg-prata-clara">
              <img
                src={imagens.brincosCartelas}
                alt="Dois pares de brincos em cartelas Pratas do Sol"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-2">
            <div className="zoom-foto aspect-[3/4] bg-prata-clara">
              <img
                src={imagens.pingenteVerde}
                alt="Pingente de gota com pedra verde em caixa"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={160} className="lg:col-span-2">
            <div className="zoom-foto aspect-[3/4] bg-prata-clara">
              <img
                src={imagens.aneisMao}
                alt="Mão com anel solitário e anel de bolinhas"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={60} className="col-span-2 lg:col-span-3">
            <div className="zoom-foto aspect-[4/3] bg-prata-clara">
              <img
                src={imagens.braceletesCaixas}
                alt="Dois braceletes de prata em caixinhas com laços vermelhos"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="col-span-2 lg:col-span-3">
            <div className="zoom-foto aspect-[4/3] bg-prata-clara">
              <img
                src={imagens.pingenteAmarelo}
                alt="Pingente de gota com pedra amarela em caixa"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Instagram() {
  const fotos = [
    { src: imagens.brincosCartela, alt: "Brincos em cartela vermelha da marca" },
    { src: imagens.colarCruz, alt: "Corrente com pingente de cruz" },
    { src: imagens.berloques, alt: "Bracelete de berloques em caixa" },
    { src: imagens.brincosCartelas, alt: "Brincos coloridos em cartelas da marca" },
  ];

  return (
    <section className="bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="kicker text-primary">Instagram</span>
            <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] sm:text-[3.2rem]">
              {CONTATO.instagram}
            </h2>
          </div>
          <a
            href={CONTATO.instagramLink}
            target="_blank"
            rel="noreferrer"
            className="sublinhado-link shrink-0 text-[0.72rem] font-semibold tracking-[0.18em] text-primary uppercase"
          >
            Seguir no Instagram
          </a>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {fotos.map((f, i) => (
            <Reveal key={f.alt} delay={i * 80}>
              <a
                href={CONTATO.instagramLink}
                target="_blank"
                rel="noreferrer"
                className="zoom-foto block aspect-square bg-prata-clara"
              >
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-col items-center gradiente-carmim px-6 py-16 text-center sm:px-12 lg:py-24">
            <h2 className="max-w-3xl font-display text-[2.4rem] leading-[1.02] text-primary-foreground sm:text-[3.6rem]">
              Encontre sua próxima joia.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/90">
              Atendimento presencial em {CONTATO.cidade}, com agendamento prévio.
            </p>
            <div className="mt-9">
              <BotaoAgendar variante="claro" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [
    { rotulo: "Joias", href: "#joias" },
    { rotulo: "Prata 925", href: "#prata-925" },
    { rotulo: "Moissanite", href: "#moissanite" },
    { rotulo: "Garantia", href: "#garantia" },
    { rotulo: "Cuidados", href: "#cuidados" },
    { rotulo: "Contato", href: "#contato" },
  ];

  return (
    <footer className="border-t border-border bg-offwhite">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 lg:grid-cols-3 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-7 shrink-0 rotate-45 place-items-center border border-primary">
              <span className="block size-2.5 border border-primary" />
            </span>
            <span className="font-display text-lg tracking-[0.18em]">PRATAS DO SOL</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {CONTATO.atendimento}
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-3 self-start">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="sublinhado-link w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.rotulo}
            </a>
          ))}
        </nav>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            WhatsApp:{" "}
            <a
              href={CONTATO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              {CONTATO.whatsappTexto}
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href={CONTATO.instagramLink}
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              {CONTATO.instagram}
            </a>
          </p>
          <p>{CONTATO.cidade}</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-6 text-xs text-muted-foreground lg:px-10">
          © {new Date().getFullYear()} Pratas do Sol · {CONTATO.cidade}
        </div>
      </div>
    </footer>
  );
}

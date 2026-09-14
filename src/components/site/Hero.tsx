import { CONTATO, imagens } from "@/data/produtos";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-24 lg:pt-28">
      <div className="mx-auto grid max-w-[1400px] items-stretch gap-0 px-0 lg:grid-cols-[0.92fr_1.08fr]">
        {/* Coluna editorial */}
        <div className="relative z-10 flex flex-col justify-center px-5 py-14 sm:px-8 lg:py-24 lg:pr-10 lg:pl-10">
          <span className="kicker text-primary">Joalheria · {CONTATO.cidade}</span>

          <h1 className="mt-6 font-display text-[3.1rem] leading-[0.92] text-foreground sm:text-[4.2rem] lg:text-[5.4rem]">
            PRATAS
            <br />
            <span className="text-primary italic">do Sol</span>
          </h1>

          <p className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-muted-foreground">
            A luz da prata em peças escolhidas uma a uma — para brilhar todos os
            dias, não apenas nas ocasiões.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#joias"
              className="inline-flex items-center justify-center bg-primary px-7 py-4 text-[0.72rem] font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-all duration-300 hover:bg-bordo"
            >
              Conhecer as joias
            </a>
            <a
              href={CONTATO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-foreground/20 px-7 py-4 text-[0.72rem] font-semibold tracking-[0.18em] text-foreground uppercase transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Agendar atendimento
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-7">
            <div>
              <p className="kicker text-muted-foreground">Material</p>
              <p className="mt-1 font-display text-xl">Prata 925</p>
            </div>
            <div>
              <p className="kicker text-muted-foreground">Linha</p>
              <p className="mt-1 font-display text-xl">Moissanite</p>
            </div>
            <div>
              <p className="kicker text-muted-foreground">Atendimento</p>
              <p className="mt-1 font-display text-xl">Presencial</p>
            </div>
          </div>
        </div>

        {/* Capa */}
        <div className="relative">
          <div className="absolute inset-y-0 right-0 hidden w-[62%] gradiente-carmim lg:block" />
          <div className="relative h-[72vw] max-h-[760px] min-h-[420px] w-full lg:h-full lg:py-14 lg:pr-10 lg:pl-14">
            <div className="zoom-foto h-full w-full shadow-[var(--shadow-joia)]">
              <img
                src={imagens.maoBraceleteAneis}
                alt="Mão com bracelete e anéis de prata sobre blusa vermelha — Pratas do Sol"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

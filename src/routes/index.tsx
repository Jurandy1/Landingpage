import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Soluções Caseiras — 99 pratos completos para gastar menos",
      },
      {
        name: "description",
        content:
          "99 receitas práticas com pratos de até R$15, guias de compras, aproveitamento e congelamento, mais 2 bônus. Pagamento único de R$39,90 com 7 dias de garantia.",
      },
      {
        property: "og:title",
        content: "Soluções Caseiras — 99 pratos completos para gastar menos",
      },
      {
        property: "og:description",
        content:
          "99 pratos completos, guias de compra e congelamento, mais 2 bônus. Acesso vitalício por pagamento único de R$39,90.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/images/capa.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/images/capa.png" },
    ],
  }),
  component: Index,
});

const CHECKOUT = "https://pay.kiwify.com.br/xbFhPDB";

const images = {
  capa: "/images/capa.png",
  kit: "/images/kit.png",
  bonus1: "/images/bonus1.png",
  bonus2: "/images/bonus2.png",
} as const;

function Cta({ label = "QUERO ACESSAR AGORA" }: { label?: string }) {
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-btn"
    >
      {label}
    </a>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="mt-1 h-5 w-5 shrink-0 text-success"
      fill="currentColor"
    >
      <path d="M8.2 14.6 4 10.4l1.4-1.4 2.8 2.8 6.4-6.4L16 6.8z" />
    </svg>
  );
}

function Shield() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-14 w-14 text-success"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.5 4.5 5.6v6c0 4.5 3.1 8.6 7.5 9.9 4.4-1.3 7.5-5.4 7.5-9.9v-6z" />
      <path d="m8.8 12 2.2 2.2 4.3-4.4" />
    </svg>
  );
}

const conteudos = [
  {
    nome: "99 receitas práticas e econômicas",
    texto:
      "Menos tempo decidindo o que fazer e mais opções prontas para o almoço e o jantar.",
  },
  {
    nome: "Pratos de até R$15",
    texto:
      "Opções para variar as refeições mantendo o foco no orçamento.",
  },
  {
    nome: "Compras que rendem mais",
    texto:
      "O que priorizar na lista e como aproveitar tudo o que entra na sacola.",
  },
  {
    nome: "Dicas de congelamento",
    texto:
      "Mais organização para preparar e aproveitar melhor os alimentos.",
  },
  {
    nome: "Variedade para não enjoar",
    texto:
      "Frango, ovos, massas, arroz e feijão, legumes, sardinha e sobremesas.",
  },
  {
    nome: "Um guia pensado em você",
    texto:
      "Conteúdo apresentado de forma simples, para usar na rotina de qualquer dia.",
  },
];

const inclui = [
  "99 pratos completos",
  "Pratos de até R$15",
  "Compras que rendem mais",
  "Dicas de congelamento",
  "Um guia pensado em você",
  "Variedade para não enjoar",
  "Lanches e Sobremesas",
  "O Guia da Economia",
];

const faq = [
  {
    q: "Preciso saber cozinhar?",
    a: "Não. As receitas são apresentadas de forma simples, sem ingredientes difíceis e sem técnica de cozinha profissional.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Depois da confirmação do pagamento você recebe o acesso ao conteúdo digital e pode abrir o material quando quiser.",
  },
  {
    q: "Posso usar pelo celular?",
    a: "Sim. O conteúdo pode ser acessado pelo celular, tablet ou computador.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Se não gostar por qualquer motivo, poderá solicitar o reembolso dentro do prazo da garantia.",
  },
];

function Selo({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface px-4 py-2 text-base font-semibold text-foreground">
      {children}
    </span>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-14 md:px-8 md:pt-20 md:pb-20">
          <div className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-14">
            <div>
              <span className="eyebrow">E-book digital</span>
              <h1 className="mt-4 text-[2.5rem] leading-[1.06] font-extrabold sm:text-5xl md:text-[3.5rem]">
                99 pratos completos para comer bem{" "}
                <span className="text-primary">gastando pouco</span>
              </h1>
              <p className="mt-5 max-w-xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
                Receitas práticas com pratos de até R$15 para ajudar você a
                economizar e ter mais opções no dia a dia.
              </p>

              <div className="mt-8">
                <Cta />
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Acesso vitalício <span className="text-border">·</span> Sem
                  mensalidade <span className="text-border">·</span> Acesso
                  imediato <span className="text-border">·</span> Garantia de 7
                  dias
                </p>
              </div>
            </div>

            <div>
              <img
                src={images.capa}
                alt="Capa do e-book Soluções Caseiras com 99 pratos completos"
                className="mx-auto w-full max-w-[380px] rounded-xl border border-border shadow-2xl"
                width={512}
                height={800}
              />
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Selo>99 receitas</Selo>
                <Selo>Até R$15</Selo>
                <Selo>+ 2 bônus</Selo>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO COM O PROBLEMA */}
      <section className="border-b border-border bg-surface/40">
        <div className="mx-auto max-w-3xl px-5 py-14 text-center md:px-8 md:py-20">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            No mercado, pequenos gastos se acumulam
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            Entre o que falta na despensa e o que estraga na geladeira, o dinheiro
            do mês vai embora sem você perceber. Ter opções de refeições
            econômicas à mão muda essa conta.
          </p>
          <p className="mt-5 text-xl leading-relaxed text-foreground sm:text-2xl">
            O Soluções Caseiras reúne receitas e guias para você planejar as
            compras, aproveitar os ingredientes até o fim e repetir menos o
            mesmo prato.
          </p>
        </div>
      </section>

      {/* O QUE VOCÊ ENCONTRA */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Conteúdo</span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              O que você vai usar já na próxima ida ao mercado
            </h2>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,400px)_1fr] md:gap-16">
            <div className="md:sticky md:top-10 md:self-start">
              <img
                src={images.capa}
                alt="Capa do e-book Soluções Caseiras"
                className="mx-auto w-full max-w-[400px] rounded-2xl border border-border shadow-2xl"
                loading="lazy"
              />
            </div>
            <ul className="grid gap-8 sm:grid-cols-2">
              {conteudos.map((item) => (
                <li key={item.nome} className="border-l-2 border-primary/60 pl-4">
                  <h3 className="text-2xl font-bold">{item.nome}</h3>
                  <p className="mt-2 text-[1.4rem] leading-relaxed text-muted-foreground">
                    {item.texto}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MOSTRAR O PRODUTO */}
      <section className="border-b border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-[1.15fr_1fr] md:gap-14">
            <img
              src={images.kit}
              alt="Materiais do Soluções Caseiras sobre a bancada de uma cozinha, com marmitas prontas"
              className="aspect-[12/5] w-full rounded-2xl border border-border object-cover md:aspect-auto md:h-full md:min-h-[420px]"
              loading="lazy"
            />
            <div>
              <span className="eyebrow">O material</span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Tudo reunido em um só material digital
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-muted-foreground">
                Receitas, ideias para compras, congelamento e conteúdos
                complementares para consultar no dia a dia.
              </p>
              <div className="mt-8">
                <Cta />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Bônus</span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              E você ainda leva dois materiais extras
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Dois conteúdos complementares já incluídos na oferta de hoje, sem
              pagar nada a mais por eles.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                img: images.bonus1,
                nome: "Lanches e Sobremesas",
                texto: "Ideias extras para variar as opções do dia.",
              },
              {
                img: images.bonus2,
                nome: "O Guia da Economia",
                texto:
                  "Conteúdo complementar para ajudar a organizar melhor as compras.",
              },
            ].map((b) => (
              <article
                key={b.nome}
                className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <img
                  src={b.img}
                  alt={`Capa do bônus ${b.nome}`}
                  className="w-28 shrink-0 rounded-lg border border-border shadow-lg sm:w-32"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <h3 className="text-xl font-bold sm:text-2xl">{b.nome}</h3>
                  <p className="mt-2 text-xl leading-relaxed text-muted-foreground">
                    {b.texto}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACESSO */}
      <section className="border-b border-border bg-surface/40 py-14 md:py-20">
        <div className="mx-auto grid max-w-4xl gap-8 px-5 sm:grid-cols-2 md:px-8">
          <div className="flex gap-3">
            <Check />
            <div>
              <h3 className="text-xl font-bold">Acesso vitalício</h3>
              <p className="mt-1 text-xl leading-relaxed text-muted-foreground">
                Você recebe acesso ao conteúdo e pode consultá-lo conforme as
                condições da oferta.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Check />
            <div>
              <h3 className="text-xl font-bold">Acesso de qualquer dispositivo</h3>
              <p className="mt-1 text-xl leading-relaxed text-muted-foreground">
                Use pelo celular, tablet ou computador.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <span className="eyebrow">Oferta</span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">
              Todo esse conteúdo por R$39,90
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
            <div className="p-6 sm:p-10">
              <p className="font-display text-2xl font-extrabold">Você recebe:</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {inclui.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-xl">
                    <Check />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border bg-surface-2/60 px-6 py-10 text-center sm:px-10">
              <p className="text-2xl text-muted-foreground">
                De{" "}
                <span className="font-bold text-primary line-through">
                  R$497,90
                </span>
              </p>
              <p className="mt-6 text-xl">Por</p>
              <p className="mt-2 font-display leading-none font-extrabold text-success">
                <span className="align-top text-3xl sm:text-4xl">R$</span>
                <span className="text-7xl sm:text-8xl">39</span>
                <span className="align-top text-3xl sm:text-4xl">,90</span>
              </p>
              <p className="mt-4 text-xl text-muted-foreground">
                Pagamento único · Sem mensalidade
              </p>
              <div className="mt-8">
                <Cta label="QUERO ACESSAR AGORA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="border-b border-border py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="flex flex-col items-center gap-5 rounded-3xl border-2 border-success/40 bg-surface/60 px-6 py-12 text-center sm:px-12">
            <Shield />
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Você tem 7 dias para conhecer o material
            </h2>
            <p className="text-[1.4rem] leading-relaxed text-muted-foreground">
              Se não gostar por qualquer motivo, você pode solicitar o reembolso
              dentro do prazo da garantia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <span className="eyebrow">Dúvidas</span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Perguntas frequentes
          </h2>
          <div className="mt-10 grid gap-8">
            {faq.map((f) => (
              <div key={f.q} className="border-t-2 border-border pt-6">
                <h3 className="text-2xl font-bold sm:text-[1.6rem]">{f.q}</h3>
                <p className="mt-3 text-[1.4rem] leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Tenha acesso ao conteúdo completo por{" "}
            <span className="text-success">R$39,90</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
            99 receitas + conteúdos complementares + 2 bônus
          </p>
          <div className="mt-8">
            <Cta />
          </div>
        </div>
      </section>

      {/* BARRA FIXA MOBILE */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="pointer-events-auto flex items-center gap-4">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground line-through">R$497,90</p>
            <p className="font-display text-2xl leading-none font-extrabold text-success">
              R$39,90
            </p>
          </div>
          <a
            href={CHECKOUT}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn shrink-0 !w-auto px-5 py-3 text-base"
          >
            QUERO ACESSAR
          </a>
        </div>
      </div>

      <footer className="border-t border-border py-10 pb-28 md:pb-10">
        <div className="mx-auto max-w-6xl px-5 text-center text-base text-muted-foreground md:px-8">
          <p className="font-display font-bold tracking-wide text-foreground">
            Soluções Caseiras
          </p>
          <p className="mt-2">
            Produto digital. Acesso vitalício, sem mensalidade. Garantia de 7
            dias.
          </p>
        </div>
      </footer>
    </main>
  );
}

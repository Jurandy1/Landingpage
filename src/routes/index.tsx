import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Soluções Caseiras — Faça o dinheiro do mercado render mais",
      },
      {
        name: "description",
        content:
          "99 refeições econômicas com custo por porção, rendimento, substituições e congelamento. Acesso imediato e 2 bônus por R$39,90.",
      },
      {
        property: "og:title",
        content: "Soluções Caseiras — 99 refeições econômicas",
      },
      {
        property: "og:description",
        content:
          "Faça o dinheiro do mercado render mais com refeições completas e ingredientes simples.",
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

const heroChecks = [
  "99 receitas completas",
  "Custo por porção",
  "2 bônus incluídos",
  "Acesso imediato",
];

const pratos = [
  {
    preco: "R$11,55",
    nome: "Hambúrguer de soja com batata rústica",
    detalhe: "50 min · 4 porções · R$10,75 em promoção",
  },
  {
    preco: "R$11,60",
    nome: "Prato feito de ovo",
    detalhe: "40 min · 4 porções · R$10,40 em promoção",
  },
  {
    preco: "R$13,60",
    nome: "Lasanha econômica",
    detalhe: "1h10 · 5 porções · R$12,70 em promoção",
  },
  {
    preco: "R$14,55",
    nome: "Almôndegas ao molho",
    detalhe: "55 min · 4 porções · R$12,75 em promoção",
  },
];

const dores = [
  "comprar ingredientes sem planejamento",
  "deixar comida estragar na geladeira",
  "repetir sempre os mesmos pratos",
  "gastar mais do que precisava",
  "recorrer a uma opção mais cara por falta de tempo",
];

const mecanismo = [
  {
    titulo: "Rendimento",
    texto:
      "Cenoura, abobrinha, batata, pão, arroz e feijão entram no preparo para aumentar o rendimento e absorver o sabor.",
  },
  {
    titulo: "Aproveitamento",
    texto:
      "Arroz e feijão que sobraram viram bolinhos, croquetes, arroz de forno, tutu, caldo e tropeiro.",
  },
  {
    titulo: "Compra inteligente",
    texto:
      "Substituições de corte e ingrediente para aproveitar o que estiver mais barato na semana.",
  },
];

const dentro = [
  {
    titulo: "Quanto custa",
    texto: "Estimativa de custo por porção e referência de preço em promoção.",
  },
  {
    titulo: "Quanto tempo leva",
    texto: "Você sabe antes de começar se a receita cabe na sua rotina.",
  },
  {
    titulo: "Quanto rende",
    texto: "Planeje quantas refeições vão sair de cada preparo.",
  },
  {
    titulo: "O que pode substituir",
    texto: "Alternativas para aproveitar o ingrediente mais barato.",
  },
  {
    titulo: "Como gastar menos",
    texto: "Dicas práticas para fazer cada ingrediente render mais.",
  },
  {
    titulo: "Como congelar",
    texto: "O que pode ir ao freezer, por quanto tempo e como armazenar.",
  },
];

const paginas = [
  {
    src: "/uploads/01-frango-estrogonofe-p7.png",
    alt: "Página 7 do eBook com a receita de estrogonofe de frango",
    legenda: "Estrogonofe de frango · pág. 7",
  },
  {
    src: "/uploads/02-carne-moida-almondegas-p52.png",
    alt: "Página 52 do eBook com a receita de almôndegas ao molho",
    legenda: "Almôndegas ao molho · pág. 52",
  },
  {
    src: "/uploads/03-ovo-prato-feito-p33.png",
    alt: "Página 33 do eBook com a receita de prato feito de ovo",
    legenda: "Prato feito de ovo · pág. 33",
  },
  {
    src: "/uploads/04-massa-lasanha-economica-p66.png",
    alt: "Página 66 do eBook com a receita de lasanha econômica",
    legenda: "Lasanha econômica · pág. 66",
  },
  {
    src: "/uploads/05-soja-hamburguer-p113.png",
    alt: "Página 113 do eBook com hambúrguer de soja e batata rústica",
    legenda: "Hambúrguer de soja · pág. 113",
  },
  {
    src: "/uploads/06-close-custo-dica-congelamento.png",
    alt: "Detalhe do eBook mostrando custo, dica de economia e congelamento",
    legenda: "Custo, economia e congelamento",
  },
];

const categorias = [
  "Frango",
  "Ovos",
  "Carne moída",
  "Massas",
  "Arroz e feijão",
  "Batata e mandioca",
  "Sardinha e atum",
  "Linguiça e salsicha",
  "Soja",
];

const proximaCompra = [
  "quais proteínas econômicas priorizar",
  "como aproveitar um ingrediente em mais de uma refeição",
  "quais acompanhamentos aumentam o rendimento",
  "quais preparações podem ser congeladas",
  "o que fazer com arroz, feijão e outros alimentos que sobraram",
  "como montar refeições completas sem ingredientes caros",
];

const paraQuem = [
  "sente que o mercado pesa cada vez mais no orçamento",
  "vive sem ideia do que preparar",
  "acaba repetindo sempre os mesmos pratos",
  "quer montar marmitas para a semana",
  "quer aproveitar melhor aquilo que compra",
  "não quer depender de ingredientes caros",
  "quer receitas simples, mesmo sem cozinhar muito",
];

const depoimentos = [
  {
    nome: "Ana Carolina",
    foto: "/images/depoimentos/ana-carolina.png",
    texto: "Antes eu gastava muito com delivery. As receitas são fáceis, baratas e muito gostosas.",
  },
  {
    nome: "Henrique Rabelo",
    foto: "/images/depoimentos/henrique-rabelo.png",
    texto:
      "Coloquei a alimentação em dia sem gastar uma fortuna. O conteúdo é simples e realmente funciona.",
  },
  {
    nome: "Mariana Schmidt",
    foto: "/images/depoimentos/mariana-schmidt.png",
    texto: "Consegui variar o cardápio da semana e parei de depender de comida pronta.",
  },
  {
    nome: "Renan Brandes",
    foto: "/images/depoimentos/renan-brandes.png",
    texto: "Consigo preparar refeições gostosas em pouco tempo e gastando bem menos.",
  },
  {
    nome: "Beatriz Santos",
    foto: "/images/depoimentos/beatriz-santos.png",
    texto: "Ingredientes acessíveis e receitas que me ajudaram a economizar no mercado.",
  },
  {
    nome: "João Paulo",
    foto: "/images/depoimentos/joao-paulo.png",
    texto: "O material me ajudou a organizar a rotina e a comer melhor sem gastar muito.",
  },
  {
    nome: "Lucas Guimarães",
    foto: "/images/depoimentos/lucas-guimaraes.png",
    texto: "Além de economizar, aprendi receitas variadas que realmente cabem no bolso.",
  },
  {
    nome: "Fernanda Lima",
    foto: "/images/depoimentos/fernanda-lima.png",
    texto: "As receitas são deliciosas, simples e cabem no orçamento. Recomendo muito.",
  },
  {
    nome: "Lucas Ribeiro",
    foto: "/images/depoimentos/lucas-ribeiro.png",
    texto: "Aprendi a cozinhar de forma prática e hoje consigo manter uma rotina melhor.",
  },
  {
    nome: "Kely Felippo",
    foto: "/images/depoimentos/kely-felippo.png",
    texto: "Organizei minha alimentação, economizei e ganhei tempo no dia a dia.",
  },
];

const inclui = [
  "99 refeições completas de até R$15 por porção",
  "Custo estimado por porção e em promoção",
  "Tempo de preparo e rendimento de cada receita",
  "Substituições de corte e de ingrediente",
  "Dicas de economia receita por receita",
  "Orientação de congelamento e armazenamento",
  "Bônus 1: Lanches e Sobremesas",
  "Bônus 2: Guia da Economia",
];

const faq = [
  {
    q: "Preciso saber cozinhar?",
    a: "Não. As receitas são apresentadas de forma simples, sem ingredientes difíceis e sem técnicas profissionais.",
  },
  {
    q: "Os R$15 são por receita inteira ou por porção?",
    a: "Por porção. Cada refeição mostra o custo estimado da porção, não da panela inteira.",
  },
  {
    q: "Os preços são exatos?",
    a: "São estimativas baseadas em preços médios e podem variar conforme a região, o mercado e a época do ano.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a confirmação do pagamento, você recebe o acesso digital e pode abrir o material pelo celular, tablet ou computador.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia e pode solicitar o reembolso dentro desse prazo.",
  },
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`mt-0.5 h-5 w-5 shrink-0 text-success ${className}`}
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

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="m10 1.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" />
        </svg>
      ))}
    </div>
  );
}

function Cta({
  label = "QUERO ECONOMIZAR NAS MINHAS REFEIÇÕES",
  compact = false,
}: {
  label?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn ${compact ? "cta-btn-compact" : ""}`}
    >
      {label}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  children,
  description,
  centered = false,
}: {
  eyebrow?: string;
  children: ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <header className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`${eyebrow ? "mt-3" : ""} section-title`}>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}

function Index() {
  const testimonialTrack = [...depoimentos, ...depoimentos];

  return (
    <main className="min-h-screen overflow-x-hidden bg-background pb-20 md:pb-0">
      <section className="hero-section border-b border-border">
        <div className="page-container section-space">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <span className="eyebrow">E-book digital + 2 bônus</span>
              <h1 className="mt-4 max-w-3xl text-[2.6rem] leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-[3.75rem]">
                Faça o dinheiro do mercado <span className="text-primary">render muito mais</span>
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">
                99 refeições completas com custo estimado de até <strong>R$15 por porção</strong>,
                feitas com ingredientes simples que você encontra no dia a dia.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Saiba quanto custa, quanto rende, quanto tempo leva, o que substituir e como
                congelar cada preparo.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {heroChecks.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-lg font-semibold">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Cta />
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Pagamento único de R$39,90 · Sem mensalidade · Acesso imediato · Garantia de 7
                  dias
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="hero-glow" aria-hidden="true" />
              <img
                src={images.capa}
                alt="Capa do e-book Soluções Caseiras"
                className="relative mx-auto w-full max-w-[390px] rounded-xl border border-border shadow-2xl"
                width={512}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt border-b border-border">
        <div className="page-container section-space">
          <SectionTitle
            eyebrow="Prova da promessa"
            description="Os valores abaixo são estimativas das próprias receitas e podem variar conforme a região e o mercado."
          >
            Veja algumas das refeições que você vai encontrar
          </SectionTitle>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pratos.map((prato) => (
              <article key={prato.nome} className="content-card">
                <p className="font-display text-4xl font-extrabold text-success">{prato.preco}</p>
                <p className="mt-1 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  por porção
                </p>
                <h3 className="mt-5 text-xl font-bold text-balance">{prato.nome}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{prato.detalhe}</p>
              </article>
            ))}
          </div>
          <img
            src={images.kit}
            alt="Materiais do Soluções Caseiras com refeições prontas"
            className="mt-10 aspect-[12/5] w-full rounded-2xl border border-border object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="narrow-container section-space">
          <SectionTitle>
            Você vai ao mercado, gasta mais e parece que a comida dura cada vez menos?
          </SectionTitle>
          <p className="section-description">
            Você compra carne, arroz e legumes e, poucos dias depois, já está se perguntando:{" "}
            <em className="text-foreground">“o que eu vou fazer para comer hoje?”</em>
          </p>
          <p className="mt-7 text-xl font-semibold">Quando faltam ideias, é fácil:</p>
          <ul className="mt-5 grid gap-4">
            {dores.map((dor) => (
              <li key={dor} className="flex gap-4 text-lg leading-relaxed text-muted-foreground">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-sm bg-primary" />
                {dor}.
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xl leading-relaxed">
            O Soluções Caseiras mostra o que preparar, quanto custa e como fazer cada compra render
            mais.
          </p>
        </div>
      </section>

      <section className="section-alt border-b border-border">
        <div className="narrow-container section-space">
          <SectionTitle eyebrow="O mecanismo">
            O segredo não é comer menos. É fazer os ingredientes{" "}
            <span className="text-success">renderem mais.</span>
          </SectionTitle>
          <p className="section-description">
            Combine ingredientes econômicos para aumentar o rendimento, reduzir o desperdício e
            manter o prato completo.
          </p>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {mecanismo.map((item) => (
              <article key={item.titulo} className="content-card">
                <h3 className="text-xl font-bold text-primary">{item.titulo}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="page-container section-space">
          <SectionTitle
            eyebrow="Dentro de cada receita"
            description="Em cada uma das 99 refeições você encontra informações para decidir, preparar e conservar melhor."
          >
            Não é apenas uma lista de receitas
          </SectionTitle>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {dentro.map((item) => (
              <article key={item.titulo} className="feature-item">
                <h3 className="text-xl font-bold">{item.titulo}</h3>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt border-b border-border">
        <div className="page-container section-space">
          <SectionTitle
            eyebrow="Por dentro"
            description="Todas as receitas mostram custo por porção, tempo, rendimento, substituições, dica de economia e orientação de congelamento."
          >
            Não é só uma capa bonita. Veja páginas reais do material
          </SectionTitle>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {paginas.map((pagina) => (
              <figure key={pagina.src} className="group">
                <div className="overflow-hidden rounded-xl border border-border bg-white shadow-xl">
                  <img
                    src={pagina.src}
                    alt={pagina.alt}
                    className="aspect-[2134/3334] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 font-display text-sm font-semibold text-muted-foreground sm:text-base">
                  {pagina.legenda}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="narrow-container section-space">
          <SectionTitle>
            Uma opção diferente para praticamente qualquer ingrediente que você tiver em casa
          </SectionTitle>
          <div className="mt-8 flex flex-wrap gap-3">
            {categorias.map((categoria) => (
              <span key={categoria} className="category-pill">
                {categoria}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="page-container section-space">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle>Já na próxima compra você vai saber:</SectionTitle>
              <ul className="mt-8 grid gap-5">
                {proximaCompra.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-relaxed">
                    <Check />
                    {item}.
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle>O Soluções Caseiras é para você que…</SectionTitle>
              <ul className="mt-8 grid gap-5">
                {paraQuem.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-lg leading-relaxed text-muted-foreground"
                  >
                    <Check />
                    {item}.
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xl leading-relaxed">
                Você não precisa ser bom de cozinha. As receitas foram pensadas para a rotina normal
                de uma casa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt border-b border-border">
        <div className="page-container section-space">
          <SectionTitle eyebrow="Bônus incluídos">
            E você ainda leva dois materiais extras
          </SectionTitle>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                image: images.bonus1,
                tag: "Bônus 1",
                title: "Lanches & Sobremesas",
                text: "Ideias extras para variar os lanches e matar a vontade de algo diferente sem perder o controle do orçamento.",
              },
              {
                image: images.bonus2,
                tag: "Bônus 2",
                title: "Guia da Economia",
                text: "Organize as compras, aproveite melhor os ingredientes e reduza o que acaba indo para o lixo.",
              },
            ].map((bonus) => (
              <article
                key={bonus.title}
                className="content-card flex flex-col gap-6 sm:flex-row sm:items-start"
              >
                <img
                  src={bonus.image}
                  alt={`Capa do bônus ${bonus.title}`}
                  className="w-32 shrink-0 rounded-lg border border-border shadow-lg"
                  loading="lazy"
                />
                <div>
                  <p className="eyebrow !text-accent">{bonus.tag}</p>
                  <h3 className="mt-2 text-2xl font-bold">{bonus.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{bonus.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-lg">
            Os dois materiais estão incluídos hoje sem custo adicional.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="page-container">
          <SectionTitle centered description="Relatos de quem incluiu as receitas na rotina.">
            Quem já colocou as receitas em prática
          </SectionTitle>
        </div>
        <div className="testimonial-mask mt-10">
          <div className="testimonial-track">
            {testimonialTrack.map((depoimento, index) => (
              <figure
                key={`${depoimento.nome}-${index}`}
                className="content-card w-[min(390px,84vw)] shrink-0"
              >
                <header className="flex items-center gap-4">
                  <img
                    src={depoimento.foto}
                    alt={`Foto de ${depoimento.nome}`}
                    className="h-14 w-14 shrink-0 rounded-full border border-border object-cover"
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <div>
                    <p className="font-display text-lg font-bold">{depoimento.nome}</p>
                    <Stars />
                  </div>
                </header>
                <blockquote className="mt-5 text-lg leading-relaxed">
                  “{depoimento.texto}”
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="section-alt border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
          <SectionTitle centered eyebrow="Oferta">
            Tenha acesso a todo o conteúdo
          </SectionTitle>
          <div className="offer-card mt-10">
            <div className="p-6 sm:p-10">
              <p className="font-display text-2xl font-extrabold">Você recebe:</p>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {inclui.map((item) => (
                  <li key={item} className="flex gap-2 text-lg leading-relaxed">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-border bg-surface-2/60 px-6 py-10 text-center sm:px-10">
              <p className="text-xl text-muted-foreground">Pagamento único de</p>
              <p className="mt-2 font-display leading-none font-extrabold text-success">
                <span className="align-top text-3xl sm:text-4xl">R$</span>
                <span className="text-7xl sm:text-8xl">39</span>
                <span className="align-top text-3xl sm:text-4xl">,90</span>
              </p>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed">
                São 99 refeições diferentes — menos de R$0,41 por receita — e os 2 bônus já estão
                incluídos.
              </p>
              <p className="mt-3 text-lg text-muted-foreground">
                Sem mensalidade · Acesso imediato
              </p>
              <div className="mt-8">
                <Cta />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="narrow-container py-14 md:py-20">
          <div className="flex flex-col items-center gap-5 rounded-3xl border-2 border-success/40 bg-surface/60 px-6 py-12 text-center sm:px-12">
            <Shield />
            <h2 className="section-title">Você pode conhecer o Soluções Caseiras por 7 dias</h2>
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Acesse o material, confira receitas, custos e bônus. Se o conteúdo não for para você,
              solicite o reembolso dentro do prazo da garantia.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="narrow-container section-space">
          <SectionTitle eyebrow="Dúvidas">Perguntas frequentes</SectionTitle>
          <div className="mt-10 divide-y-2 divide-border border-b-2 border-border">
            {faq.map((item) => (
              <details key={item.q} className="faq-item group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-bold">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-2xl text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-lg leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="section-title">
            Faça o dinheiro do mercado render muito mais a partir da próxima compra
          </h2>
          <p className="mt-5 text-xl text-muted-foreground">
            99 refeições com custo por porção + 2 bônus, por R$39,90 em pagamento único.
          </p>
          <div className="mt-8">
            <Cta />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="page-container text-center text-base leading-relaxed text-muted-foreground">
          <p className="font-display font-bold tracking-wide text-foreground">Soluções Caseiras</p>
          <p className="mx-auto mt-2 max-w-3xl">
            Produto digital. Acesso imediato, pagamento único e garantia de 7 dias. Os custos por
            porção são estimativas e podem variar conforme a região e o mercado.
          </p>
        </div>
      </footer>

      <aside
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur"
        aria-label="Oferta fixa"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="font-display text-2xl leading-none font-extrabold text-success">
              R$39,90
            </p>
            <p className="hidden text-sm text-muted-foreground sm:block">pagamento único</p>
          </div>
          <Cta compact label="QUERO MEU ACESSO" />
        </div>
      </aside>
    </main>
  );
}

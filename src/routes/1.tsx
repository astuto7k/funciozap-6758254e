import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Clock,
  MessageSquare,
  UserX,
  Repeat,
  Sparkles,
  Check,
  ChevronDown,
  Instagram,
  Bot,
  ShoppingBag,
  Bike,
  Receipt,
  Flame,
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Logo } from "@/components/landing/Logo";
import { HeroMockup } from "@/components/landing/HeroMockup";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/1")({
  head: () => ({
    meta: [
      { title: "FuncioZap | IA no WhatsApp para Delivery" },
      {
        name: "description",
        content:
          "Atenda, anote pedidos e confirme entregas no WhatsApp com uma IA que responde em segundos — feita para quem vive de delivery.",
      },
      { property: "og:title", content: "FuncioZap | IA no WhatsApp para Delivery" },
      {
        property: "og:description",
        content:
          "Atenda, anote pedidos e confirme entregas no WhatsApp com uma IA que responde em segundos — feita para quem vive de delivery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/1" },
    ],
    links: [{ rel: "canonical", href: "/1" }],
  }),
  component: DeliveryLanding,
});

function PrimaryCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-primary-foreground shadow-float hover:brightness-110 hover:-translate-y-0.5 transition ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.4a11 11 0 0013.7-17.1zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1112 20z"/></svg>
      Falar agora no WhatsApp
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SecondaryCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href="#como-funciona"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-foreground hover:bg-secondary transition ${className}`}
    >
      Ver como funciona
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[12px] font-medium text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-radial">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 sm:gap-14 lg:gap-16 items-center">
          <div className="animate-fade-up text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Eyebrow>
                <Flame className="h-3 w-3" />
                Feito para quem vive de delivery
              </Eyebrow>
            </div>

            <h1 className="mt-5 sm:mt-6 text-[34px] leading-[1.05] sm:text-[48px] lg:text-[58px] lg:leading-[1.02] font-semibold tracking-[-0.02em] text-foreground">
              Pare de perder pedido no{" "}
              <span className="relative inline-block">
                <span className="relative z-10">WhatsApp</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 sm:bottom-1.5 h-2.5 sm:h-3 rounded-md bg-primary/15"
                />
              </span>{" "}
              por demora em responder.
            </h1>

            <p className="mt-5 text-[15.5px] sm:text-[17px] leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Atende como gente, anota o pedido e envia para a cozinha em segundos — sem espera, sem perda.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center justify-center lg:justify-start">
              <PrimaryCTA className="w-full sm:w-auto" />
              <SecondaryCTA className="w-full sm:w-auto" />
            </div>

            <p className="mt-3 text-[12.5px] text-muted-foreground/90 text-center lg:text-left">
              Demonstração ao vivo em até 1 minuto • Sem cadastro, sem cartão.
            </p>
          </div>

          <div className="relative mt-2 lg:mt-0">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

const problems = [
  { icon: Clock, title: "Demora para responder no horário de pico" },
  { icon: Repeat, title: "Mesma pergunta de cardápio o dia todo" },
  { icon: UserX, title: "Cliente desiste e pede no concorrente" },
  { icon: MessageSquare, title: "Pedidos perdidos no meio das conversas" },
];

function Problem() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>O problema</Eyebrow>
          <h2 className="mt-3 text-2xl sm:text-[28px] font-semibold tracking-tight text-foreground">
            No rush, cada minuto sem resposta é um pedido a menos.
          </h2>
        </div>

        <ul className="mt-7 divide-y divide-border/70 border-y border-border/70">
          {problems.map(({ icon: Icon, title }) => (
            <li
              key={title}
              className="flex items-center gap-3 py-3.5 text-[14.5px] text-foreground"
            >
              <Icon className="h-4 w-4 text-primary shrink-0" />
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Cliente chama no WhatsApp", desc: "Vindo do Instagram, Google, anúncio ou indicação." },
  { n: "02", title: "A IA atende e anota o pedido", desc: "Mostra cardápio, sugere adicionais e confirma endereço." },
  { n: "03", title: "Pedido vai para sua cozinha", desc: "Você recebe organizado, pronto para preparar e despachar." },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-secondary/40 py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="mt-3 text-2xl sm:text-[28px] font-semibold tracking-tight text-foreground">
            Seu melhor atendente — só que em segundos.
          </h2>
        </div>

        <ol className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-3 md:gap-10 relative">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-[12px] font-semibold">
                  {i + 1}
                </span>
                <h3 className="text-[15.5px] font-semibold text-foreground">{s.title}</h3>
              </div>
              <p className="mt-2 pl-10 text-[14px] text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const features = [
  { icon: Bot, title: "Atendimento humanizado 24h", desc: "Responde em segundos, com o tom da sua marca." },
  { icon: Receipt, title: "Anota o pedido sozinha", desc: "Cardápio, adicionais, observações e troco." },
  { icon: Bike, title: "Confirma endereço e entrega", desc: "Valida bairro, taxa e envia status pro cliente." },
  { icon: ShoppingBag, title: "Tudo organizado", desc: "Cada pedido com histórico, valor e próximo passo." },
];

function Features() {
  return (
    <section id="recursos" className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Recursos</Eyebrow>
          <h2 className="mt-3 text-2xl sm:text-[28px] font-semibold tracking-tight text-foreground">
            Do pedido ao forninho, sem retrabalho.
          </h2>
        </div>

        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-3.5">
              <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="text-[15px] font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-[13.5px] text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    "Mais pedidos no horário de pico",
    "Zero cliente sem resposta",
    "Menos erro na hora de anotar",
    "Equipe focada na cozinha",
    "Funciona fora do expediente",
    "Histórico de cada cliente",
  ];
  return (
    <section id="resultados" className="bg-secondary/40 py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Resultados</Eyebrow>
          <h2 className="mt-3 text-2xl sm:text-[28px] font-semibold tracking-tight text-foreground">
            Mais pedido, menos correria.
          </h2>
        </div>
        <ul className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
          {items.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[15px] text-foreground/90">
              <Check className="h-4.5 w-4.5 text-primary mt-0.5 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Funciona com o meu WhatsApp atual?",
    a: "Sim. Conectamos no seu número em minutos, sem trocar nada.",
  },
  {
    q: "A IA consegue mesmo anotar pedidos?",
    a: "Sim. Puxa do cardápio, sugere adicionais, calcula o total e confirma antes de enviar pra cozinha.",
  },
  {
    q: "E quando quero responder na mão?",
    a: "É só pausar a IA. Ao terminar, ela volta sozinha.",
  },
  {
    q: "Preciso instalar algo?",
    a: "Nada. É tudo no seu WhatsApp, sem app novo pra equipe.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-2xl sm:text-[28px] font-semibold tracking-tight text-foreground">
            Perguntas frequentes
          </h2>
        </div>
        <div className="mt-6 divide-y divide-border/70 border-y border-border/70">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-4 pr-8 text-[14px] text-muted-foreground leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-cta-gradient text-white p-10 sm:p-14 text-center relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(40% 60% at 20% 20%, rgba(255,255,255,0.25), transparent), radial-gradient(40% 60% at 80% 80%, rgba(255,255,255,0.15), transparent)",
          }}
        />
        <div className="relative">
          <Sparkles className="h-6 w-6 mx-auto opacity-80" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
            Cada pedido sem resposta é um cliente jantando no concorrente.
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] text-white/80 max-w-xl mx-auto">
            Veja em 5 minutos a IA atendendo pelo seu delivery.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-primary hover:bg-white/90 transition"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.4a11 11 0 0013.7-17.1zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1112 20z"/></svg>
              Falar agora no WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/funciozap"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white/20 transition"
            >
              <Instagram className="h-4 w-4" />
              @funciozap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Logo />
        <p className="text-[12.5px] text-muted-foreground">
          © {new Date().getFullYear()} FuncioZap. Feito para quem não pode perder pedido.
        </p>
      </div>
    </footer>
  );
}

function DeliveryLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Benefits />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

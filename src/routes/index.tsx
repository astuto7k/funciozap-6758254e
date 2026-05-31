import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Clock,
  KanbanSquare,
  CalendarCheck,
  UserCog,
  MessageSquare,
  Bot,
  CalendarDays,
  PauseCircle,
  ChevronDown,
  Check,
  Instagram,
  Stethoscope,
  Sparkles,
  Briefcase,
  Scissors,
  TrendingUp,
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Logo } from "@/components/landing/Logo";
import { HeroMockup } from "@/components/landing/HeroMockup";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FuncioZap | IA para WhatsApp, CRM e Agendamentos" },
      {
        name: "description",
        content:
          "Automatize seu atendimento no WhatsApp com IA humanizada, organize conversas no CRM e transforme oportunidades em agendamentos com o FuncioZap.",
      },
      { property: "og:title", content: "FuncioZap | IA para WhatsApp, CRM e Agendamentos" },
      {
        property: "og:description",
        content:
          "Automatize seu atendimento no WhatsApp com IA humanizada, organize conversas no CRM e transforme oportunidades em agendamentos com o FuncioZap.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

function PrimaryCTA({
  className = "",
  label = "Ver a IA atendendo no WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 sm:px-6 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-semibold text-primary-foreground shadow-float hover:brightness-110 hover:-translate-y-0.5 transition min-h-[48px] ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor">
        <path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.4a11 11 0 0013.7-17.1zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1112 20z" />
      </svg>
      <span className="truncate">{label}</span>
      <ArrowRight className="h-4 w-4 shrink-0" />
    </a>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11.5px] sm:text-[12px] font-medium text-primary">
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up text-center lg:text-left order-1">
            <div className="flex justify-center lg:justify-start">
              <SectionEyebrow>
                <Sparkles className="h-3 w-3" />
                IA conversacional para WhatsApp
              </SectionEyebrow>
            </div>

            <h1 className="mt-5 text-[30px] leading-[1.1] sm:text-[44px] lg:text-[56px] lg:leading-[1.04] font-semibold tracking-[-0.02em] text-foreground">
              Transforme seu{" "}
              <span className="relative inline-block">
                <span className="relative z-10">WhatsApp</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 sm:bottom-1.5 h-2.5 sm:h-3 rounded-md bg-primary/15"
                />
              </span>{" "}
              em uma operação que atende, organiza e agenda sozinha.
            </h1>

            <p className="mt-5 text-[15px] sm:text-[17px] leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
              O FuncioZap usa IA para responder seus clientes em segundos,
              qualificar oportunidades, organizar conversas no CRM e preencher
              sua agenda sem deixar sua equipe perder o controle.
            </p>

            <div className="mt-7 flex justify-center lg:justify-start">
              <PrimaryCTA className="w-full sm:w-auto max-w-full" />
            </div>

            <p className="mt-3 text-[12.5px] text-muted-foreground/90 text-center lg:text-left">
              Demonstração rápida pelo WhatsApp. Sem formulário.
            </p>
          </div>

          <div className="relative mt-2 lg:mt-0 order-2 w-full max-w-full overflow-hidden">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: Clock, title: "Respostas rápidas 24/7", desc: "Sua operação nunca dorme." },
  { icon: KanbanSquare, title: "CRM de conversas integrado", desc: "Cada contato no lugar certo." },
  { icon: CalendarCheck, title: "Agendamentos organizados", desc: "Horários, serviços e profissionais." },
  { icon: UserCog, title: "Atendimento humano quando precisar", desc: "Sua equipe assume a qualquer momento." },
];

function BenefitsStrip() {
  return (
    <section className="bg-white border-y border-border/60 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-4 sm:p-5"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[14.5px] font-semibold text-foreground">{title}</p>
                <p className="mt-0.5 text-[13px] text-muted-foreground leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: MessageSquare, title: "O cliente chama no WhatsApp", desc: "Mensagens de Instagram, anúncio, site ou indicação chegam num só lugar." },
  { icon: Bot, title: "A IA responde, qualifica e entende a necessidade", desc: "Com tom natural, regras do seu negócio e contexto da conversa." },
  { icon: CalendarCheck, title: "O FuncioZap agenda ou encaminha para sua equipe", desc: "Marca o horário ou repassa a conversa para um atendente humano." },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-secondary/40 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Como funciona</SectionEyebrow>
          <h2 className="mt-4 text-[26px] sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Do primeiro oi ao agendamento.
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="relative rounded-2xl bg-white p-5 sm:p-6 shadow-card border border-border/60"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-[12px] font-semibold text-primary">
                  Etapa 0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-[16.5px] font-semibold text-foreground leading-snug">
                {title}
              </h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section id="recursos" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>O painel</SectionEyebrow>
          <h2 className="mt-4 text-[26px] sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Mais do que um chatbot: uma operação comercial organizada.
          </h2>
          <p className="mt-4 text-[15px] sm:text-[17px] leading-relaxed text-muted-foreground">
            Conversas, leads, agenda e profissionais em uma única tela — com a
            IA trabalhando ao seu lado e sua equipe no controle.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Inbox */}
          <div className="lg:col-span-7 rounded-2xl border border-border bg-white shadow-card overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                <h3 className="text-[14px] font-semibold text-foreground">Caixa de entrada</h3>
              </div>
              <span className="text-[11px] text-muted-foreground">12 ativas</span>
            </div>
            <ul className="divide-y divide-border">
              {[
                { n: "Mariana Silva", m: "Pode ser amanhã 14:30!", t: "agora", b: "bg-primary" },
                { n: "Carlos Lima", m: "Quanto custa a limpeza?", t: "2 min", b: "bg-emerald-500" },
                { n: "Ana Souza", m: "Vocês atendem sábado?", t: "10 min", b: "bg-amber-500" },
                { n: "João Pedro", m: "Confirmado para quinta 10h", t: "32 min", b: "bg-primary" },
              ].map((c) => (
                <li key={c.n} className="flex items-center gap-3 px-5 py-3.5">
                  <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${c.b}/15 text-foreground text-[12px] font-semibold`}>
                    {c.n.split(" ").map((x) => x[0]).slice(0, 2).join("")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13.5px] font-medium text-foreground truncate">{c.n}</span>
                      <span className="text-[11px] text-muted-foreground shrink-0">{c.t}</span>
                    </div>
                    <p className="text-[12.5px] text-muted-foreground truncate">{c.m}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Pause IA card */}
          <div className="lg:col-span-5 rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6 flex flex-col">
            <div className="flex items-center gap-2">
              <PauseCircle className="h-4 w-4 text-primary" />
              <h3 className="text-[14px] font-semibold text-foreground">Controle humano</h3>
            </div>
            <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">
              Pause a IA em conversas delicadas, responda você mesmo e reative
              o atendimento automático quando quiser.
            </p>
            <div className="mt-4 rounded-xl bg-white border border-border p-4 space-y-2">
              <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-secondary px-3 py-2 text-[12.5px] text-foreground">
                Quero entender as formas de pagamento.
              </div>
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-primary px-3 py-2 text-[12.5px] text-primary-foreground">
                Vou chamar a Camila aqui pra te explicar 👋
              </div>
              <button className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white py-2.5 text-[12.5px] font-semibold text-foreground">
                <PauseCircle className="h-4 w-4" /> Pausar IA e responder
              </button>
            </div>
          </div>

          {/* CRM */}
          <div className="lg:col-span-7 rounded-2xl border border-border bg-white shadow-card p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <KanbanSquare className="h-4 w-4 text-primary" />
              <h3 className="text-[14px] font-semibold text-foreground">Leads no CRM</h3>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { t: "Novo", c: "bg-primary-soft", items: ["Ana Souza", "Pedro Lima"] },
                { t: "Qualificado", c: "bg-primary", items: ["Marina Reis", "Lucas Dias"] },
                { t: "Agendado", c: "bg-emerald-500", items: ["Carla Mota", "João P."] },
              ].map((col) => (
                <div key={col.t} className="rounded-xl bg-secondary/50 border border-border p-2.5 sm:p-3">
                  <div className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${col.c}`} />
                    <span className="text-[11px] font-semibold text-foreground truncate">{col.t}</span>
                  </div>
                  <div className="mt-2 space-y-1.5">
                    {col.items.map((n) => (
                      <div key={n} className="rounded-lg bg-white border border-border px-2 py-1.5 text-[11.5px] font-medium text-foreground truncate">
                        {n}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agenda */}
          <div className="lg:col-span-5 rounded-2xl border border-border bg-white shadow-card p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                <h3 className="text-[14px] font-semibold text-foreground">Agenda do dia</h3>
              </div>
              <span className="text-[11px] text-primary font-medium">Dra. Camila</span>
            </div>
            <div className="mt-3 space-y-2">
              {[
                { t: "09:00", n: "Ana Souza", p: "Avaliação" },
                { t: "10:30", n: "Carlos Lima", p: "Limpeza" },
                { t: "14:30", n: "Mariana Silva", p: "Clareamento" },
              ].map((r) => (
                <div key={r.t} className="flex items-center gap-3 rounded-xl border border-border bg-white px-3 py-2.5">
                  <span className="h-8 w-1 rounded-full bg-primary shrink-0" />
                  <div className="w-12 text-[11.5px] font-semibold text-muted-foreground">{r.t}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12.5px] font-medium text-foreground truncate">{r.n}</div>
                    <div className="text-[11px] text-muted-foreground truncate">{r.p}</div>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0">
                    Ok
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="lg:col-span-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { k: "Conversas hoje", v: "128", i: MessageSquare },
              { k: "Leads qualificados", v: "42", i: TrendingUp },
              { k: "Agendamentos", v: "19", i: CalendarCheck },
              { k: "Tempo médio resp.", v: "1.2s", i: Clock },
            ].map(({ k, v, i: Icon }) => (
              <div key={k} className="rounded-2xl border border-border bg-secondary/40 p-4">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-[11.5px] text-muted-foreground">{k}</span>
                </div>
                <div className="mt-2 text-[22px] font-semibold tracking-tight text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const useCases = [
  { icon: Stethoscope, title: "Clínicas e consultórios" },
  { icon: Scissors, title: "Estética e beleza" },
  { icon: CalendarDays, title: "Serviços com horário marcado" },
  { icon: Briefcase, title: "Equipes comerciais no WhatsApp" },
];

function ForBusiness() {
  return (
    <section className="bg-secondary/40 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Para quem é</SectionEyebrow>
          <h2 className="mt-4 text-[26px] sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Feito para negócios que não podem perder oportunidades no WhatsApp.
          </h2>
          <p className="mt-4 text-[15px] sm:text-[17px] leading-relaxed text-muted-foreground">
            Organize solicitações, distribua atendimentos, acompanhe
            profissionais e transforme conversas em agendamentos confirmados.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {useCases.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-white p-5 hover:shadow-card transition"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-[14px] sm:text-[15px] font-semibold text-foreground leading-snug">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "A IA substitui minha equipe?",
    a: "Não. Ela automatiza o primeiro atendimento e tarefas repetitivas, e sua equipe assume qualquer conversa quando quiser.",
  },
  {
    q: "A IA pode agendar clientes?",
    a: "Sim. Ela segue os horários, serviços e profissionais configurados no painel e marca direto na sua agenda.",
  },
  {
    q: "Posso acompanhar as conversas?",
    a: "Sim. O painel centraliza todas as conversas, com histórico completo por cliente.",
  },
  {
    q: "O atendimento parece robótico?",
    a: "Não. As respostas são curtas, naturais e adaptadas ao tom da sua empresa.",
  },
  {
    q: "Preciso trocar meu número de WhatsApp?",
    a: "Não. O FuncioZap conecta no seu número atual e começa a atender em poucos minutos.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-4 text-[26px] sm:text-4xl font-semibold tracking-tight text-foreground">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left min-h-[56px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-[14.5px] sm:text-[15px] font-medium text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[14px] text-muted-foreground leading-relaxed">
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
      <div className="mx-auto max-w-6xl rounded-3xl bg-cta-gradient text-white p-8 sm:p-14 text-center relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(40% 60% at 20% 20%, rgba(255,255,255,0.25), transparent), radial-gradient(40% 60% at 80% 80%, rgba(255,255,255,0.15), transparent)",
          }}
        />
        <div className="relative">
          <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
            Cada minuto sem resposta pode ser uma oportunidade perdida.
          </h2>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] text-white/85 max-w-2xl mx-auto leading-relaxed">
            Veja como o FuncioZap pode atender, organizar e agendar pelo
            WhatsApp da sua empresa.
          </p>
          <div className="mt-7 sm:mt-8 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-primary hover:bg-white/90 transition min-h-[48px]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.4a11 11 0 0013.7-17.1zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1112 20z" />
              </svg>
              Quero ver uma demonstração
              <ArrowRight className="h-4 w-4" />
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
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 sm:py-12 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-[13.5px] text-muted-foreground leading-relaxed">
            IA para WhatsApp com CRM, agenda e controle humano — pronto para
            atender e agendar pela sua empresa.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 text-[14px]">
          <a
            className="inline-flex items-center gap-2 text-foreground hover:text-primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.4a11 11 0 0013.7-17.1zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1112 20z" />
            </svg>
            WhatsApp
          </a>
          <a
            className="inline-flex items-center gap-2 text-foreground hover:text-primary"
            href="https://instagram.com/funciozap"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="h-4 w-4" /> @funciozap
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-[12px] text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} FuncioZap. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 bg-gradient-to-t from-background via-background/95 to-background/0 transition-opacity ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-5 py-3.5 text-[14.5px] font-semibold text-primary-foreground shadow-float min-h-[48px]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.4a11 11 0 0013.7-17.1zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1112 20z" />
        </svg>
        Ver demonstração no WhatsApp
      </a>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <BenefitsStrip />
        <HowItWorks />
        <ProductSection />
        <ForBusiness />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

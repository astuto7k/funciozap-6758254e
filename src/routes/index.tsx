import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Clock,
  MessageSquare,
  UserX,
  CalendarClock,
  Repeat,
  Eye,
  Sparkles,
  Calendar,
  PauseCircle,
  BookOpen,
  Users,
  Wallet,
  Phone,
  Download,
  KanbanSquare,
  TrendingUp,
  Check,
  ChevronDown,
  Instagram,
  ShieldCheck,
  Bot,
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Logo } from "@/components/landing/Logo";
import { HeroMockup } from "@/components/landing/HeroMockup";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FuncioZap | IA para WhatsApp, Atendimento e Agendamentos" },
      {
        name: "description",
        content:
          "Automatize atendimento no WhatsApp com IA humanizada, qualifique leads, organize conversas e agende consultas com o FuncioZap.",
      },
      { property: "og:title", content: "FuncioZap | IA para WhatsApp, Atendimento e Agendamentos" },
      {
        property: "og:description",
        content:
          "Automatize atendimento no WhatsApp com IA humanizada, qualifique leads, organize conversas e agende consultas com o FuncioZap.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function PrimaryCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-white shadow-float hover:brightness-110 hover:-translate-y-0.5 transition ${className}`}
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
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
      {/* Subtle grid backdrop */}
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-16 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 sm:gap-14 lg:gap-16 items-center">
          {/* Copy */}
          <div className="animate-fade-up text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <SectionEyebrow>
                <Sparkles className="h-3 w-3" />
                Novo • IA conversacional para WhatsApp
              </SectionEyebrow>
            </div>

            <h1 className="mt-5 sm:mt-6 text-[34px] leading-[1.05] sm:text-[48px] lg:text-[62px] lg:leading-[1.02] font-semibold tracking-[-0.02em] text-foreground">
              Pare de perder cliente no{" "}
              <span className="relative inline-block">
                <span className="relative z-10">WhatsApp</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 sm:bottom-1.5 h-2.5 sm:h-3 rounded-md bg-primary/15"
                />
              </span>
              {" "}por demora em responder.
            </h1>

            <p className="mt-5 sm:mt-6 text-[15.5px] sm:text-[17px] leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
              O FuncioZap é uma IA que atende como gente, agenda na sua
              agenda, organiza tudo dentro do CRM e devolve para você só os
              clientes prontos para fechar — 24h por dia, em segundos.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:items-center justify-center lg:justify-start">
              <PrimaryCTA className="w-full sm:w-auto" />
              <SecondaryCTA className="w-full sm:w-auto" />
            </div>

            <p className="mt-3 text-[12.5px] text-muted-foreground/90 text-center lg:text-left">
              Atendimento humano em até 1 minuto • Sem cadastro, sem cartão.
            </p>

            {/* Social proof row */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start gap-4 sm:gap-5">
              <div className="flex -space-x-2">
                {[
                  "from-[#0A84FF] to-[#38BDF8]",
                  "from-[#22C55E] to-[#10B981]",
                  "from-[#F59E0B] to-[#EF4444]",
                  "from-[#8B5CF6] to-[#EC4899]",
                ].map((g, i) => (
                  <span
                    key={i}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-2 ring-white bg-gradient-to-br ${g} text-[12px] font-semibold text-white`}
                  >
                    {["DR", "JM", "AC", "LB"][i]}
                  </span>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 15l-5.3 2.8 1-5.9L1.5 7.7l5.9-.9L10 1.5z" />
                    </svg>
                  ))}
                  <span className="ml-1.5 text-[12.5px] font-semibold text-foreground">4.9/5</span>
                </div>
                <p className="mt-0.5 text-[12.5px] text-muted-foreground">
                  Clínicas e negócios locais já fecham mais agendamentos com o FuncioZap.
                </p>
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative mt-2 lg:mt-0">
            <HeroMockup />
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 sm:mt-20 lg:mt-24 border-t border-border/60 pt-8 sm:pt-10">
          <p className="text-center text-[11.5px] sm:text-[12px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Construído para times que vivem do WhatsApp
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { k: "< 2s", v: "Tempo médio de resposta" },
              { k: "24/7", v: "Atendimento sem pausa" },
              { k: "+60%", v: "Mais agendamentos confirmados" },
              { k: "0", v: "Lead esquecido" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-border/70 bg-white/70 backdrop-blur px-4 py-3.5 text-center sm:text-left"
              >
                <div className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-foreground">
                  {s.k}
                </div>
                <div className="mt-0.5 text-[11.5px] sm:text-[12px] text-muted-foreground leading-tight">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const problems = [
  { icon: Clock, title: "Demora para responder" },
  { icon: MessageSquare, title: "Conversas espalhadas" },
  { icon: UserX, title: "Leads sem acompanhamento" },
  { icon: CalendarClock, title: "Agendamentos feitos manualmente" },
  { icon: Repeat, title: "Tempo perdido com perguntas repetidas" },
  { icon: Eye, title: "Falta de visão do que acontece" },
];

function Problem() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>O problema</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Leads chegam. Mas nem sempre alguém responde a tempo.
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
            Enquanto sua equipe está atendendo, muitos contatos ficam esperando no
            WhatsApp. Alguns perguntam preço, outros querem horário, outros somem
            antes de receber resposta.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-secondary/40 p-6 hover:bg-white hover:shadow-card transition"
            >
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-4 text-[15px] font-medium text-foreground">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "O lead chama no WhatsApp", desc: "Mensagens chegam de Instagram, anúncio, site ou indicação." },
  { n: "02", title: "A IA entende e responde", desc: "Com tom humano, contexto do seu negócio e regras configuradas." },
  { n: "03", title: "Qualifica, agenda ou encaminha", desc: "Marca avaliação, tira dúvidas ou passa para sua equipe." },
  { n: "04", title: "Você acompanha no painel", desc: "Conversas, leads, agenda e custos em um só lugar." },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Como o FuncioZap resolve</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Uma IA treinada para atender como parte da sua equipe.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl bg-white p-6 shadow-card border border-border/60"
            >
              <span className="text-[12px] font-semibold text-primary">{s.n}</span>
              <h3 className="mt-2 text-[17px] font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Bot, title: "IA humanizada no WhatsApp", desc: "Responde com tom natural, seguindo as regras do seu negócio." },
  { icon: Calendar, title: "Agenda inteligente", desc: "Configure dias, horários, profissionais e procedimentos." },
  { icon: KanbanSquare, title: "CRM integrado", desc: "Cada lead vira um card com etapa, histórico e próximo passo." },
  { icon: MessageSquare, title: "Painel de conversas", desc: "Veja todas as conversas em um só lugar e nunca mais perca um cliente." },
  { icon: PauseCircle, title: "Assuma quando quiser", desc: "Pause a IA e responda você mesmo em conversas mais delicadas." },
  { icon: BookOpen, title: "Treine sua IA", desc: "Adicione preços, horários e regras e a IA passa a falar como sua equipe." },
  { icon: TrendingUp, title: "Relatórios claros", desc: "Acompanhe leads, agendamentos e taxa de conversão em tempo real." },
  { icon: Users, title: "Qualificação automática", desc: "A IA filtra curiosos e entrega só quem está pronto para comprar." },
  { icon: Download, title: "Exportação de leads", desc: "Leve seus contatos para qualquer ferramenta com 1 clique." },
];

function Features() {
  return (
    <section id="recursos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Recursos</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Tudo que você precisa para transformar WhatsApp em operação comercial.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-white p-6 hover:shadow-card hover:-translate-y-0.5 transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-[16px] font-semibold text-foreground">{title}</h3>
              <p className="mt-1.5 text-[14px] text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClinicSection() {
  const uses = [
    "Marcação de avaliação",
    "Confirmação de consulta",
    "Reagendamento",
    "Resposta sobre procedimentos",
    "Captação de leads do Instagram",
    "Organização por paciente",
    "Aviso de atraso ou cancelamento",
    "Histórico de atendimento",
  ];

  return (
    <section id="para-quem" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionEyebrow>Para clínicas</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Perfeito para clínicas que vivem de agendamento.
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
            O FuncioZap ajuda sua clínica a responder pacientes, tirar dúvidas
            iniciais, organizar solicitações e reduzir oportunidades perdidas.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-2.5">
            {uses.map((u) => (
              <li key={u} className="flex items-start gap-2 text-[14px] text-foreground/85">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                {u}
              </li>
            ))}
          </ul>
        </div>

        {/* Agenda mockup */}
        <div className="relative">
          <div className="rounded-2xl bg-white shadow-float ring-1 ring-border/60 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div>
                <h4 className="text-[15px] font-semibold text-foreground">Agenda semanal</h4>
                <p className="text-[12px] text-muted-foreground">Seg, 26 Mai — Sex, 30 Mai</p>
              </div>
              <span className="text-[12px] font-medium text-primary">Dra. Camila</span>
            </div>
            <div className="p-4 space-y-2">
              {[
                { t: "09:00", n: "Ana Souza", p: "Avaliação", c: "bg-primary" },
                { t: "10:30", n: "Carlos Lima", p: "Limpeza", c: "bg-emerald-500" },
                { t: "13:00", n: "Marina Reis", p: "Clareamento", c: "bg-primary-soft" },
                { t: "14:30", n: "João Pedro", p: "Avaliação", c: "bg-amber-500" },
                { t: "16:00", n: "Beatriz Alves", p: "Retorno", c: "bg-primary" },
              ].map((row) => (
                <div
                  key={row.t}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white px-3 py-3 hover:bg-secondary/40 transition"
                >
                  <span className={`h-9 w-1 rounded-full ${row.c}`} />
                  <div className="w-12 text-[12px] font-semibold text-muted-foreground">{row.t}</div>
                  <div className="flex-1">
                    <div className="text-[13.5px] font-medium text-foreground">{row.n}</div>
                    <div className="text-[11.5px] text-muted-foreground">{row.p}</div>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    Confirmado
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              Pronto para ver o FuncioZap atendendo pela sua equipe?
            </h3>
            <p className="mt-1 text-[14px] text-muted-foreground">
              Demonstração rápida, sob medida para o seu negócio.
            </p>
          </div>
          <PrimaryCTA />
        </div>
      </div>
    </section>
  );
}

function CRMSection() {
  const stages = [
    {
      title: "Novo lead",
      color: "bg-primary-soft",
      cards: [
        { name: "Ana Souza", tag: "Clareamento", time: "há 2 min" },
        { name: "Pedro Lima", tag: "Avaliação", time: "há 8 min" },
      ],
    },
    {
      title: "Qualificado pela IA",
      color: "bg-primary",
      cards: [
        { name: "Marina Reis", tag: "Lente • R$ 12k", time: "há 14 min" },
        { name: "Lucas Dias", tag: "Estética", time: "há 22 min" },
      ],
    },
    {
      title: "Agendado",
      color: "bg-emerald-500",
      cards: [
        { name: "Carla Mota", tag: "Amanhã 14:30", time: "confirmado" },
        { name: "João Pedro", tag: "Quinta 10:00", time: "confirmado" },
      ],
    },
  ];
  return (
    <section id="crm" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>
            <KanbanSquare className="h-3 w-3" /> CRM integrado
          </SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Cada conversa vira um lead organizado. Nenhum cliente fica para trás.
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
            O FuncioZap não é só um chatbot. Cada lead que chega no WhatsApp
            entra automaticamente no seu CRM, com etapa, histórico e próximo
            passo claros. Você enxerga sua operação de vendas inteira em uma
            única tela.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-secondary/40 p-4 sm:p-6 shadow-card">
          <div className="grid sm:grid-cols-3 gap-4">
            {stages.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white border border-border/70 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${s.color}`} />
                    <h3 className="text-[13px] font-semibold text-foreground">{s.title}</h3>
                  </div>
                  <span className="text-[11px] text-muted-foreground">{s.cards.length}</span>
                </div>
                <div className="mt-3 space-y-2.5">
                  {s.cards.map((c) => (
                    <div key={c.name} className="rounded-xl border border-border bg-white p-3 hover:shadow-card transition">
                      <div className="text-[13px] font-medium text-foreground">{c.name}</div>
                      <div className="mt-0.5 flex items-center justify-between">
                        <span className="text-[11px] text-primary font-medium">{c.tag}</span>
                        <span className="text-[10.5px] text-muted-foreground">{c.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HumanWhenNeeded() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionEyebrow>Humano quando precisar</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            A IA atende. Você assume quando quiser.
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
            Pause a IA em conversas específicas, responda manualmente e depois
            reative o atendimento automático. Ideal para negociações sensíveis,
            dúvidas complexas ou fechamento.
          </p>
        </div>

        <div className="rounded-2xl bg-white shadow-float ring-1 ring-border/60 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-primary/10 inline-flex items-center justify-center text-primary text-[13px] font-semibold">M</span>
              <div>
                <div className="text-[13px] font-medium text-foreground">Mariana Silva</div>
                <div className="text-[11px] text-emerald-600">online</div>
              </div>
            </div>
            <button className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1.5 text-[12px] font-semibold">
              <Sparkles className="h-3.5 w-3.5" /> IA ativa
            </button>
          </div>
          <div className="space-y-2.5">
            <div className="max-w-[78%] rounded-2xl rounded-tl-md bg-secondary px-3.5 py-2.5 text-[13px]">
              Quero entender melhor as formas de pagamento.
            </div>
            <div className="ml-auto max-w-[78%] rounded-2xl rounded-tr-md bg-primary px-3.5 py-2.5 text-[13px] text-white">
              Claro! Vou chamar a Camila aqui para te explicar com calma 👋
            </div>
            <button className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white py-2.5 text-[13px] font-semibold text-foreground hover:bg-secondary transition">
              <PauseCircle className="h-4 w-4" /> Pausar IA e responder manualmente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  "Mais velocidade no primeiro atendimento",
  "Menos leads esquecidos",
  "Mais agendamentos",
  "Menos trabalho repetitivo",
  "Melhor controle por cliente",
  "Atendimento padronizado",
  "Funcionando fora do horário comercial",
  "Mais clareza sobre custos e performance",
];

function Benefits() {
  return (
    <section id="resultados" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Benefícios</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            O resultado é uma operação mais rápida, organizada e previsível.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b} className="rounded-2xl border border-border bg-secondary/40 p-5">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <p className="mt-3 text-[14.5px] font-medium text-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppCTA() {
  return (
    <section id="demonstracao" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <SectionEyebrow>Fale com a gente agora</SectionEyebrow>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
          Em 5 minutos no WhatsApp você vê a IA atendendo pelo seu negócio.
        </h2>
        <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground max-w-2xl mx-auto">
          Sem formulário, sem cadastro. Toque no botão abaixo, mande “oi” e
          nossa equipe te mostra na hora como o FuncioZap pode dobrar seus
          agendamentos.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryCTA />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-600" /> Atendimento humano</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-600" /> Demonstração ao vivo</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-600" /> Sem compromisso</span>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "O FuncioZap substitui minha equipe?",
    a: "Não. Ele automatiza o primeiro atendimento e tarefas repetitivas, mas sua equipe pode assumir quando quiser.",
  },
  {
    q: "Funciona com qualquer tipo de clínica?",
    a: "Sim, desde que os fluxos, horários e informações sejam configurados para cada operação.",
  },
  {
    q: "A IA pode agendar consultas?",
    a: "Sim. Ela segue os horários e regras configurados no painel.",
  },
  {
    q: "Posso ver as conversas?",
    a: "Sim. O painel permite acompanhar conversas e histórico.",
  },
  {
    q: "O atendimento parece robótico?",
    a: "A proposta é justamente criar respostas curtas, naturais e adaptadas ao tom da empresa.",
  },
  {
    q: "Preciso instalar alguma coisa?",
    a: "Não. É 100% no seu WhatsApp atual. Conectamos em poucos minutos e a IA já começa a atender.",
  },
  {
    q: "Tem CRM incluso?",
    a: "Sim. Todo lead que chega entra no CRM com etapa, histórico e próximo passo — você acompanha tudo em uma tela só.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-border bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-foreground">{f.q}</span>
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
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-cta-gradient text-white p-10 sm:p-16 text-center relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(40% 60% at 20% 20%, rgba(255,255,255,0.25), transparent), radial-gradient(40% 60% at 80% 80%, rgba(255,255,255,0.15), transparent)",
          }}
        />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
            Cada minuto sem responder é um cliente indo para o concorrente.
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] text-white/80 max-w-2xl mx-auto">
            Coloque a IA do FuncioZap para atender, qualificar e agendar agora.
            É só clicar e falar com a gente no WhatsApp.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
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
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-[13.5px] text-muted-foreground max-w-xs leading-relaxed">
            Automação inteligente para WhatsApp, atendimento e agendamentos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:col-span-2 gap-8">
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li><a className="text-foreground hover:text-primary" href="#como-funciona">Como funciona</a></li>
              <li><a className="text-foreground hover:text-primary" href="#recursos">Recursos</a></li>
              <li><a className="text-foreground hover:text-primary" href="#demonstracao">Demonstração</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
              Contato
            </h4>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <a
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                  href="https://instagram.com/funciozap"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="h-4 w-4" /> @funciozap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 text-[12px] text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} FuncioZap. Todos os direitos reservados.</p>
          <p>Feito para clínicas e negócios que não podem perder leads.</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <ClinicSection />
        <MidCTA />
        <CRMSection />
        <HumanWhenNeeded />
        <Benefits />
        <WhatsAppCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

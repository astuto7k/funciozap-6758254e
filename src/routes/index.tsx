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
  PanelsTopLeft,
  Zap,
  Check,
  ChevronDown,
  Instagram,
  ShieldCheck,
  Bot,
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Logo } from "@/components/landing/Logo";
import { HeroMockup } from "@/components/landing/HeroMockup";

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
      href="#demonstracao"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-primary-foreground shadow-card hover:brightness-110 hover:-translate-y-0.5 transition ${className}`}
    >
      Agendar demonstração
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
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 sm:pt-20 lg:pt-24 pb-16 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <SectionEyebrow>IA para WhatsApp • Feito no Brasil</SectionEyebrow>
            <h1 className="mt-5 text-[34px] leading-[1.1] sm:text-[44px] lg:text-[56px] font-semibold tracking-tight text-foreground">
              Seu WhatsApp respondendo, qualificando e{" "}
              <span className="text-primary">agendando</span> enquanto você atende.
            </h1>
            <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground max-w-xl">
              O FuncioZap transforma conversas do WhatsApp em atendimentos
              organizados, leads qualificados e agendamentos automáticos com IA
              humanizada.
            </p>
            <p className="mt-3 text-[13px] text-muted-foreground/80">
              Feito para clínicas, consultórios e negócios que não podem perder leads.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <PrimaryCTA className="w-full sm:w-auto" />
              <SecondaryCTA className="w-full sm:w-auto" />
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5 max-w-md">
              {[
                "Atendimento 24/7",
                "IA com tom humanizado",
                "Painel por cliente",
                "Agenda integrada ao fluxo",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[13px] text-foreground/80">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <HeroMockup />
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
  { icon: MessageSquare, title: "Painel de conversas", desc: "Veja conversas por cliente e acompanhe o histórico dos leads." },
  { icon: PauseCircle, title: "Pausar ou reativar IA", desc: "Assuma uma conversa manualmente quando quiser." },
  { icon: BookOpen, title: "Base de conhecimento", desc: "Adicione informações para a IA responder com precisão." },
  { icon: Users, title: "Multi-clientes", desc: "Controle vários clientes em um painel master." },
  { icon: Wallet, title: "Custos e tokens", desc: "Acompanhe uso de IA, mensagens e estimativas de custo." },
  { icon: Phone, title: "WhatsApp por cliente", desc: "Cada operação com seu próprio número e configuração." },
  { icon: Download, title: "Leads e exportação", desc: "Organize contatos e exporte informações importantes." },
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

function MasterPanel() {
  const items = [
    { icon: Users, t: "Criar cliente" },
    { icon: Phone, t: "Configurar WhatsApp" },
    { icon: Bot, t: "Definir prompt" },
    { icon: Calendar, t: "Controlar agenda" },
    { icon: MessageSquare, t: "Ver conversas" },
    { icon: Wallet, t: "Acompanhar custos" },
    { icon: Download, t: "Exportar dados" },
  ];
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Painel master</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Controle todos os clientes em um só lugar.
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
            Para quem vende automação como serviço, o FuncioZap permite administrar
            clientes, WhatsApps, prompts, custos, conversas e configurações
            individuais.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {items.map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="rounded-2xl border border-border bg-white p-4 text-center hover:shadow-card transition"
            >
              <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-[13px] font-medium text-foreground">{t}</p>
            </div>
          ))}
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

function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="demonstracao" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <SectionEyebrow>Demonstração</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Veja o FuncioZap funcionando em uma demonstração.
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
            Mostramos como a IA atende, como o painel funciona e como configurar
            uma operação para sua clínica ou negócio.
          </p>

          <a
            href="https://wa.me/?text=Quero%20uma%20demonstra%C3%A7%C3%A3o%20do%20FuncioZap"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-[14px] font-semibold text-foreground hover:bg-white/80 hover:shadow-card transition"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.4a11 11 0 0013.7-17.1zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1112 20z"/></svg>
            </span>
            Chamar no WhatsApp
          </a>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="rounded-2xl bg-white shadow-card border border-border/60 p-6 sm:p-8 space-y-4"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Recebemos seu pedido!</h3>
              <p className="mt-1 text-[14px] text-muted-foreground">
                Vamos te chamar no WhatsApp em instantes.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-foreground">Quero uma demonstração</h3>
              <div>
                <label className="text-[13px] font-medium text-foreground" htmlFor="nome">
                  Nome
                </label>
                <input
                  id="nome"
                  required
                  className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-[14px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="text-[13px] font-medium text-foreground" htmlFor="whats">
                  WhatsApp
                </label>
                <input
                  id="whats"
                  required
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-[14px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="text-[13px] font-medium text-foreground" htmlFor="tipo">
                  Tipo de negócio
                </label>
                <select
                  id="tipo"
                  className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-[14px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  defaultValue=""
                >
                  <option value="" disabled>Selecione</option>
                  <option>Clínica odontológica</option>
                  <option>Clínica de estética</option>
                  <option>Consultório</option>
                  <option>Negócio local</option>
                  <option>Equipe comercial</option>
                  <option>Outro</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground hover:brightness-110 transition"
              >
                Quero uma demonstração
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-[11.5px] text-muted-foreground text-center">
                Sem compromisso. Em até 24h respondemos no WhatsApp.
              </p>
            </>
          )}
        </form>
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
    q: "Consigo usar para vários clientes?",
    a: "Sim. O painel master foi pensado para operação multi-cliente.",
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
            Pronto para transformar seu WhatsApp em uma operação inteligente?
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] text-white/80 max-w-2xl mx-auto">
            Agende uma demonstração e veja como o FuncioZap pode atender,
            qualificar e organizar seus leads.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#demonstracao"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-primary hover:bg-white/90 transition"
            >
              Agendar demonstração
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/funciozap"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white/20 transition"
            >
              <Instagram className="h-4 w-4" />
              Conhecer no Instagram
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
        <MasterPanel />
        <HumanWhenNeeded />
        <Benefits />
        <DemoForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

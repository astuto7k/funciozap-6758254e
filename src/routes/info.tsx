import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  PackageX,
  PhoneOff,
  Truck,
  Flame,
  ShoppingCart,
  CreditCard,
  TrendingUp,
  Bot,
  ShieldCheck,
  Zap,
  Target,
  Instagram,
  DollarSign,
  Clock,
  Repeat,
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Logo } from "@/components/landing/Logo";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "FuncioZap para Oferta X1 | Recupere carrinho e confirme pedidos no WhatsApp" },
      {
        name: "description",
        content:
          "IA no WhatsApp para quem roda oferta X1: recupera carrinho abandonado, confirma pedidos COD, reduz recusa na entrega e escala campanhas com ROI maior.",
      },
      { property: "og:title", content: "FuncioZap para Oferta X1 | Recupere carrinho e confirme pedidos" },
      {
        property: "og:description",
        content:
          "IA no WhatsApp para escalar oferta X1: recupera carrinho, confirma COD, reduz recusa e aumenta o ROAS.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/info" },
    ],
    links: [{ rel: "canonical", href: "/info" }],
  }),
  component: InfoPage,
});

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[12px] font-medium text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

function PrimaryCTA({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-primary-foreground shadow-float hover:brightness-110 hover:-translate-y-0.5 transition ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.4a11 11 0 0013.7-17.1zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1112 20z"/></svg>
      Quero escalar minha oferta
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-16 lg:pt-24 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <SectionEyebrow>
            <Flame className="h-3 w-3" /> Feito para quem roda oferta X1
          </SectionEyebrow>
          <h1 className="mt-5 sm:mt-6 text-[34px] leading-[1.05] sm:text-[48px] lg:text-[60px] lg:leading-[1.02] font-semibold tracking-[-0.02em] text-foreground">
            Pare de queimar tráfego com{" "}
            <span className="relative inline-block">
              <span className="relative z-10">carrinho abandonado</span>
              <span aria-hidden className="absolute inset-x-0 bottom-1 sm:bottom-1.5 h-2.5 sm:h-3 rounded-md bg-primary/15" />
            </span>{" "}
            e pedido COD não confirmado.
          </h1>
          <p className="mt-5 sm:mt-6 text-[15.5px] sm:text-[17px] leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            O FuncioZap é a IA no WhatsApp que recupera checkout abandonado, confirma pedidos
            pagos na entrega, reduz recusa do entregador e devolve o ROAS que o tráfego promete.
          </p>
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:items-center justify-center">
            <PrimaryCTA />
            <a
              href="#numeros"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-foreground hover:bg-secondary transition"
            >
              Ver os números
            </a>
          </div>
          <p className="mt-3 text-[12.5px] text-muted-foreground/90">
            Funciona com Shopify, Yampi, CartPanda, AppMax, Adoorei e checkouts customizados.
          </p>
        </div>

        <div id="numeros" className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {[
            { k: "+35%", v: "Recuperação de carrinho" },
            { k: "+22%", v: "Taxa de confirmação COD" },
            { k: "-40%", v: "Recusa do entregador" },
            { k: "2x", v: "ROAS após otimização" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-border/70 bg-white/70 backdrop-blur px-4 py-3.5 text-center"
            >
              <div className="text-[22px] sm:text-[26px] font-semibold tracking-tight text-foreground">{s.k}</div>
              <div className="mt-0.5 text-[11.5px] sm:text-[12px] text-muted-foreground leading-tight">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const pains = [
  { icon: ShoppingCart, title: "Carrinho abandonado", desc: "Cliente clica, preenche, e some antes de pagar." },
  { icon: PhoneOff, title: "Pedido COD não atende", desc: "Pedido entra, mas o cliente some quando o entregador liga." },
  { icon: PackageX, title: "Recusa na entrega", desc: "Mercadoria volta porque o lead esfriou no caminho." },
  { icon: CreditCard, title: "Pix gerado, não pago", desc: "QR Code criado, e o cliente esquece ou desiste." },
  { icon: Clock, title: "Lead frio em horas", desc: "Sem follow-up rápido, o anúncio paga e a venda evapora." },
  { icon: DollarSign, title: "CPA subindo", desc: "Tráfego caro virando prejuízo por falta de pós-clique." },
];

function Problem() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>O furo da oferta X1</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            O anúncio entrega o lead. Depois disso, quem está conversando com ele?
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
            Você gasta dinheiro para o lead clicar no anúncio, chegar no checkout e parar.
            Ou pedir COD e nunca atender o entregador. Esse é o buraco que come o ROAS de
            quem escala oferta única.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-secondary/40 p-6 hover:bg-white hover:shadow-card transition">
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-4 text-[15px] font-semibold text-foreground">{title}</p>
              <p className="mt-1.5 text-[13.5px] text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Cliente abandona o checkout", desc: "O FuncioZap detecta na hora pelo webhook do seu checkout." },
  { n: "02", title: "IA chama no WhatsApp em segundos", desc: "Mensagem humanizada, com nome, produto e link direto." },
  { n: "03", title: "Tira objeção e fecha", desc: "Frete, prazo, garantia, formas de pagamento — sem script robótico." },
  { n: "04", title: "Confirma COD antes do envio", desc: "Você só envia pedido com cliente respondendo e ciente do valor." },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-secondary/40 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Como funciona</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Da abandonada à venda — em minutos, no automático.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl bg-white p-6 shadow-card border border-border/60">
              <span className="text-[12px] font-semibold text-primary">{s.n}</span>
              <h3 className="mt-2 text-[17px] font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: ShoppingCart, title: "Recuperação de carrinho", desc: "Dispara no WhatsApp segundos após o abandono, com link de retorno." },
  { icon: PhoneOff, title: "Confirmação de COD", desc: "Valida pedido pago na entrega antes da logística sair com a caixa." },
  { icon: Truck, title: "Status de rastreio ativo", desc: "Cliente recebe atualização proativa e fica engajado até a entrega." },
  { icon: CreditCard, title: "Cobrança de Pix pendente", desc: "Lembrete inteligente com novo QR Code e bônus para fechar." },
  { icon: Repeat, title: "Upsell e order bump", desc: "Oferta complementar logo após a compra confirmada." },
  { icon: Target, title: "Qualificação por intenção", desc: "Separa quem está quente de quem só queria preço." },
  { icon: Bot, title: "IA com voz da sua marca", desc: "Treine respostas, objeções, frete e política de troca em minutos." },
  { icon: TrendingUp, title: "Dashboard de operação", desc: "ROAS pós-WhatsApp, taxa de confirmação e recuperação em uma tela." },
  { icon: Zap, title: "Integra com seu checkout", desc: "Shopify, Yampi, CartPanda, AppMax, Adoorei e API custom." },
];

function Features() {
  return (
    <section id="recursos" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Recursos para ecommerce X1</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Tudo que falta entre o checkout e a venda confirmada.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-white p-6 hover:shadow-card hover:-translate-y-0.5 transition">
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

function CheckoutDemo() {
  return (
    <section className="bg-secondary/40 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionEyebrow>Recuperação em segundos</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Cliente abandona o carrinho? A IA chama antes dele fechar a aba.
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
            Cada segundo de demora derruba a taxa de recuperação. O FuncioZap dispara no WhatsApp
            assim que o evento de abandono chega, com mensagem humanizada e link de retorno.
          </p>
          <ul className="mt-7 space-y-2.5">
            {[
              "Webhook nativo no seu checkout",
              "Mensagem com nome, produto e cupom opcional",
              "Sequência multi-toque (5min, 1h, 24h)",
              "Para automaticamente quando paga",
            ].map((u) => (
              <li key={u} className="flex items-start gap-2 text-[14.5px] text-foreground/85">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {u}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl bg-white shadow-float ring-1 ring-border/60 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-primary/10 inline-flex items-center justify-center text-primary text-[13px] font-semibold">R</span>
                <div>
                  <div className="text-[13px] font-medium text-foreground">Rafael Costa</div>
                  <div className="text-[11px] text-emerald-600">abandonou há 2min</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold">
                <Sparkles className="h-3 w-3" /> IA
              </span>
            </div>
            <div className="p-5 space-y-2.5">
              <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-primary px-3.5 py-2.5 text-[13px] text-white">
                Oi Rafael! Vi que você tava finalizando o pedido do Kit Premium 🚀 Travou em alguma coisa? Posso liberar 10% de desconto pra fechar agora.
              </div>
              <div className="max-w-[72%] rounded-2xl rounded-tl-md bg-secondary px-3.5 py-2.5 text-[13px] text-foreground">
                O frete tava alto, posso testar com outro CEP?
              </div>
              <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-primary px-3.5 py-2.5 text-[13px] text-white">
                Claro! Acabei de aplicar frete grátis no seu carrinho. Toque aqui: funciozap.app/c/8f2 ✅
              </div>
              <div className="mt-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-2.5 flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                <span className="text-[12.5px] font-semibold text-emerald-700">Pagamento confirmado • R$ 197,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CODSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="rounded-2xl bg-white shadow-float ring-1 ring-border/60 overflow-hidden">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <div>
                <h4 className="text-[14px] font-semibold text-foreground">Pedidos COD — Hoje</h4>
                <p className="text-[11.5px] text-muted-foreground">142 pedidos • 109 confirmados</p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-full">76,7%</span>
            </div>
            <div className="p-4 space-y-2">
              {[
                { n: "Camila B.", t: "R$ 147 • Kit Slim", s: "Confirmado", c: "emerald" },
                { n: "Diego P.", t: "R$ 247 • Combo 2x", s: "Aguardando", c: "amber" },
                { n: "Eliane R.", t: "R$ 197 • Premium", s: "Confirmado", c: "emerald" },
                { n: "Fábio M.", t: "R$ 97 • Trial", s: "Recusado", c: "rose" },
              ].map((row) => (
                <div key={row.n} className="flex items-center gap-3 rounded-xl border border-border bg-white px-3 py-3">
                  <span className="h-9 w-9 rounded-full bg-primary/10 inline-flex items-center justify-center text-primary text-[12px] font-semibold">
                    {row.n[0]}
                  </span>
                  <div className="flex-1">
                    <div className="text-[13.5px] font-medium text-foreground">{row.n}</div>
                    <div className="text-[11.5px] text-muted-foreground">{row.t}</div>
                  </div>
                  <span
                    className={`text-[10.5px] font-semibold px-2 py-0.5 rounded-full ${
                      row.c === "emerald"
                        ? "bg-emerald-500/10 text-emerald-700"
                        : row.c === "amber"
                          ? "bg-amber-500/10 text-amber-700"
                          : "bg-rose-500/10 text-rose-700"
                    }`}
                  >
                    {row.s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionEyebrow>Pagamento na entrega</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Confirme o COD antes da logística sair com o pacote.
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
            A IA conversa com o cliente, valida endereço, reforça o valor e só libera o pedido
            para envio quando recebe confirmação. Sua taxa de entrega sobe, a recusa cai e o
            frete reverso some.
          </p>
          <ul className="mt-7 grid sm:grid-cols-2 gap-2.5">
            {[
              "Validação de endereço",
              "Reforço do valor a pagar",
              "Reagendamento de entrega",
              "Alerta de pedido fantasma",
            ].map((u) => (
              <li key={u} className="flex items-start gap-2 text-[14px] text-foreground/85">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {u}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  "ROAS maior sem mexer no criativo",
  "Mais pedidos pagos por dia",
  "Menos frete reverso e recusa",
  "Mais Pix convertido em venda",
  "Pós-venda automatizado",
  "Upsell logo após a compra",
  "Atendimento 24/7 sem operador",
  "Escala sem contratar SAC",
];

function Benefits() {
  return (
    <section className="bg-secondary/40 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow>Resultados</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            O mesmo tráfego, com 30 a 50% mais venda confirmada.
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b} className="rounded-2xl border border-border bg-white p-5">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <p className="mt-3 text-[14.5px] font-medium text-foreground">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Funciona com qual checkout?",
    a: "Shopify, Yampi, CartPanda, AppMax, Adoorei e qualquer checkout que envie webhook. Se o seu manda evento de abandono e venda, a gente integra.",
  },
  {
    q: "Eu preciso de WhatsApp Business API?",
    a: "Não precisa. A gente conecta no seu WhatsApp atual em poucos minutos. Quando você escala, ajudamos a migrar para API oficial.",
  },
  {
    q: "A IA consegue confirmar COD mesmo?",
    a: "Sim. Ela valida endereço, reforça o valor a pagar, identifica pedido fantasma e só marca como confirmado quando o cliente responde positivamente.",
  },
  {
    q: "Faz upsell depois da compra?",
    a: "Faz. Pode oferecer order bump, upsell de combo e cross-sell de outro produto dentro da mesma conversa.",
  },
  {
    q: "Quanto tempo pra colocar pra rodar?",
    a: "A maioria das ofertas X1 sobem em menos de 24h. Conectamos o WhatsApp, plugamos no checkout e treinamos a IA com a sua oferta.",
  },
  {
    q: "Vale a pena se eu já tenho time de SAC?",
    a: "Vale. A IA assume o volume de primeira resposta e os casos repetitivos. Seu time atua só onde a margem justifica o atendimento humano.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Perguntas de quem escala oferta
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-border bg-white overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-foreground">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[14px] text-muted-foreground leading-relaxed">{f.a}</div>
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
            Pare de pagar tráfego pra abandonar carrinho.
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] text-white/80 max-w-2xl mx-auto">
            Conecta o FuncioZap no seu checkout e vê a recuperação subir já no primeiro dia.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-primary hover:bg-white/90 transition"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.4a11 11 0 0013.7-17.1zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1112 20z"/></svg>
              Falar com a equipe
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/funciozap"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white/20 transition"
            >
              <Instagram className="h-4 w-4" /> @funciozap
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
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-[12.5px] text-muted-foreground">
          © {new Date().getFullYear()} FuncioZap — IA para escalar oferta X1.
        </p>
      </div>
    </footer>
  );
}

function InfoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <CheckoutDemo />
        <CODSection />
        <Benefits />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
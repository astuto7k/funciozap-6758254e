import { Check, Calendar, Sparkles } from "lucide-react";

export function HeroMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[40px] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, rgba(10,132,255,0.25), transparent 70%)",
        }}
      />

      {/* Main window */}
      <div className="relative rounded-2xl bg-white shadow-float ring-1 ring-border/70 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-secondary/50">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="text-[11px] text-muted-foreground font-medium">
            funciozap.app / conversas
          </div>
          <div className="w-10" />
        </div>

        {/* Body */}
        <div className="grid grid-cols-[1fr_180px] min-h-[360px]">
          {/* Chat */}
          <div className="p-4 sm:p-5 space-y-3 bg-white">
            <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.5 3.5A11 11 0 003.4 17.3L2 22l4.8-1.4a11 11 0 0013.7-17.1zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4l.2-.3c.1-.1.1-.2 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.9 2.3 1 2.5c.1.2 1.7 2.6 4.2 3.6.6.3 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.1-.2-.2-.4-.3z"/></svg>
              </span>
              <span className="font-medium text-foreground text-[13px]">Mariana Silva</span>
              <span className="text-[11px]">• agora</span>
            </div>

            {/* incoming */}
            <div className="max-w-[78%] rounded-2xl rounded-tl-md bg-secondary px-3.5 py-2.5 text-[13px] text-foreground">
              Oi! Vocês fazem avaliação para clareamento? Quanto custa?
            </div>

            {/* outgoing (AI) */}
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-primary px-3.5 py-2.5 text-[13px] text-primary-foreground">
              Oi Mariana! Fazemos sim 😊 A avaliação é gratuita. Posso te encaixar amanhã às 14:30 ou quinta às 10h. Qual prefere?
              <div className="mt-1.5 flex items-center gap-1 text-[10px] text-white/80">
                <Sparkles className="h-3 w-3" /> Respondido pela IA • 1s
              </div>
            </div>

            <div className="max-w-[60%] rounded-2xl rounded-tl-md bg-secondary px-3.5 py-2.5 text-[13px] text-foreground">
              Pode ser amanhã 14:30!
            </div>

            <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-primary px-3.5 py-2.5 text-[13px] text-primary-foreground">
              Perfeito! Agendei aqui ✅ Te mando confirmação amanhã pela manhã.
            </div>
          </div>

          {/* Side panel */}
          <aside className="border-l border-border/60 bg-secondary/40 p-3 space-y-3">
            <div className="rounded-xl bg-white shadow-card p-3">
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                <span className="text-[11px] font-medium text-foreground">Lead qualificado</span>
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground leading-tight">
                Clareamento • interesse alto
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-card p-3">
              <div className="flex items-center gap-1.5 text-primary">
                <Calendar className="h-3.5 w-3.5" />
                <span className="text-[11px] font-medium text-foreground">Agendado</span>
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground">Amanhã • 14:30</p>
              <p className="text-[10px] text-foreground font-medium">Dra. Camila</p>
            </div>

            <div className="rounded-xl bg-primary/10 p-3">
              <div className="flex items-center gap-1.5 text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="text-[11px] font-semibold">IA ativa</span>
              </div>
              <p className="mt-1 text-[10px] text-primary/80">Tom humanizado</p>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating confirm pill */}
      <div className="absolute -bottom-5 left-4 sm:-left-6 hidden sm:flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-float ring-1 ring-border/60">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
          <Check className="h-3.5 w-3.5" />
        </span>
        <span className="text-[12px] font-medium text-foreground">Agendamento confirmado</span>
      </div>
    </div>
  );
}
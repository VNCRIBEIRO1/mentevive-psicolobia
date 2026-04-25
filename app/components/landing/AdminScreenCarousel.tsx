"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  LayoutDashboard, CalendarCheck, FileText, Users, Settings,
  ChevronRight, ChevronLeft, Clock, Video, TrendingUp,
  Eye, EyeOff, Lock, MessageSquare, Pencil, DollarSign,
} from "lucide-react";

/* ─────────────────────────────────────────────────
   Fake data — Admin "Beatriz Matos" (Bea)
   ───────────────────────────────────────────────── */
const ADMIN = { name: "Bea", initials: "BM" };

const PATIENTS = [
  { name: "Caio Martins", initials: "CM", sessions: 8, next: "14 abr", status: "Ativo" },
  { name: "Marina Souza", initials: "MS", sessions: 5, next: "15 abr", status: "Ativo" },
  { name: "Lia Monteiro", initials: "LM", sessions: 12, next: "16 abr", status: "Ativo" },
];

const AGENDA_ITEMS = [
  { time: "10:00 – 11:00", patient: "Marina Souza", status: "Confirmada", statusColor: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", modality: "online" },
  { time: "14:00 – 15:00", patient: "Lia Monteiro", status: "Confirmada", statusColor: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200", modality: "online" },
  { time: "19:00 – 20:00", patient: "Caio Martins", status: "Pendente", statusColor: "bg-amber-50 text-amber-600 ring-1 ring-amber-200", modality: "online" },
];

const RECORDS = [
  { date: "07/04", patient: "Caio Martins", title: "Sessão 8 — autocobrança", visibility: "Visível", visColor: "text-emerald-600 bg-emerald-50" },
  { date: "07/04", patient: "Marina Souza", title: "Sessão 5 — progresso ansiedade", visibility: "Privado", visColor: "text-amber-600 bg-amber-50" },
  { date: "03/04", patient: "Lia Monteiro", title: "Sessão 12 — relações familiares", visibility: "Visível", visColor: "text-emerald-600 bg-emerald-50" },
];

/* ─────────────────────────────────────────────────
   Screen mockup components (5 admin screens)
   ───────────────────────────────────────────────── */

function ScreenAdminDashboard() {
  return (
    <div className="space-y-3">
      {/* Greeting */}
      <div className="bg-gradient-to-r from-primary/8 to-teal/5 rounded-xl p-3.5 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-dark to-teal flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
          {ADMIN.initials}
        </div>
        <div>
          <p className="text-[11px] font-bold text-txt">Bom dia, {ADMIN.name} 🌿</p>
          <p className="text-[9px] text-txt-muted">Painel administrativo — visão geral do consultório.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-1.5">
        {[
          { icon: <Users className="w-3 h-3 text-teal" />, val: "3", label: "Pacientes", bg: "from-teal/8 ring-teal/10" },
          { icon: <CalendarCheck className="w-3 h-3 text-emerald-600" />, val: "12", label: "Este mês", bg: "from-emerald-50 ring-emerald-100" },
          { icon: <DollarSign className="w-3 h-3 text-primary-dark" />, val: "R$ 2.160", label: "Receita", bg: "from-primary/8 ring-primary/10" },
          { icon: <TrendingUp className="w-3 h-3 text-teal-dark" />, val: "+15%", label: "Crescimento", bg: "from-teal/8 ring-teal/10" },
        ].map((s) => (
          <div key={s.label} className={`bg-gradient-to-br ${s.bg} to-transparent rounded-lg p-2 ring-1 text-center`}>
            <div className="flex justify-center mb-0.5">{s.icon}</div>
            <p className="text-[11px] font-bold text-txt leading-tight">{s.val}</p>
            <p className="text-[7px] text-txt-muted">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Mini chart placeholder */}
      <div className="bg-white rounded-xl border border-gray-100 p-2.5">
        <p className="text-[9px] font-bold text-txt mb-2 flex items-center gap-1">
          <TrendingUp className="w-3 h-3 text-teal" /> Sessões por Semana
        </p>
        <div className="flex items-end gap-1 h-12">
          {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <div
                className="w-full rounded-t bg-gradient-to-t from-teal to-teal/60"
                style={{ height: `${h}%` }}
              />
              <span className="text-[6px] text-txt-muted">{["S", "T", "Q", "Q", "S", "S", "D"][i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Today */}
      <div className="bg-white rounded-xl border border-gray-100 p-2.5">
        <p className="text-[9px] font-bold text-txt mb-2 flex items-center gap-1">
          <Clock className="w-3 h-3 text-primary-dark" /> Hoje — 3 sessões
        </p>
        {AGENDA_ITEMS.slice(0, 2).map((a, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0">
            <div className="flex-1">
              <p className="text-[9px] font-medium text-txt">{a.patient}</p>
              <p className="text-[7px] text-txt-muted">{a.time}</p>
            </div>
            <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-md ${a.statusColor}`}>{a.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenAdminAgenda() {
  return (
    <div className="space-y-3">
      <div className="bg-gradient-to-r from-teal/8 to-transparent rounded-xl p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal/12 flex items-center justify-center">
            <CalendarCheck className="w-4 h-4 text-teal" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-txt">Agenda</p>
            <p className="text-[8px] text-txt-muted">Gerencie seus agendamentos</p>
          </div>
        </div>
        <div className="bg-teal text-white text-[8px] font-bold px-2 py-1 rounded-md">+ Nova Sessão</div>
      </div>

      {/* Mini calendar */}
      <div className="bg-white rounded-xl border border-gray-100 p-2.5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] font-bold text-txt">Abril 2026</p>
          <div className="flex gap-1">
            <span className="text-[8px] text-txt-muted px-1">‹</span>
            <span className="text-[8px] text-txt-muted px-1">›</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-0.5 text-center">
          {["D", "S", "T", "Q", "Q", "S", "S"].map((d) => (
            <span key={d} className="text-[6px] text-txt-muted font-bold">{d}</span>
          ))}
          {Array.from({ length: 3 }, (_, i) => (
            <span key={`blank-${i}`} className="text-[7px]" />
          ))}
          {Array.from({ length: 30 }, (_, i) => {
            const day = i + 1;
            const hasAppt = [3, 7, 10, 14, 17, 21, 24, 28].includes(day);
            const isToday = day === 14;
            return (
              <span
                key={day}
                className={`text-[7px] rounded py-0.5 ${isToday ? "bg-teal text-white font-bold" : hasAppt ? "bg-teal/10 text-teal-dark font-medium" : "text-txt-muted"}`}
              >
                {day}
              </span>
            );
          })}
        </div>
      </div>

      {/* Sessions for today */}
      <p className="text-[9px] font-bold text-txt flex items-center gap-1">📅 14/04/2026 — 3 sessões</p>
      {AGENDA_ITEMS.map((a, i) => (
        <div key={i} className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-gray-50">
          <div className="flex-1">
            <p className="text-[10px] font-medium text-txt">{a.patient}</p>
            <p className="text-[8px] text-txt-muted flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" /> {a.time}
              <Video className="w-2.5 h-2.5 ml-1 text-teal" /> Online
            </p>
          </div>
          <div className="text-right">
            <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-md ${a.statusColor}`}>{a.status}</span>
            <div className="flex gap-1.5 mt-1 justify-end">
              <span className="text-[7px] text-teal-dark font-bold">Detalhes</span>
              <span className="text-[7px] text-accent font-bold">Sala</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ScreenAdminProntuarios() {
  return (
    <div className="space-y-3">
      <div className="bg-gradient-to-r from-purple-500/8 to-transparent rounded-xl p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
            <FileText className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-txt">Prontuários Clínicos</p>
            <p className="text-[8px] text-txt-muted">Registros clínicos dos pacientes</p>
          </div>
        </div>
        <div className="bg-purple-600 text-white text-[8px] font-bold px-2 py-1 rounded-md">+ Novo Registro</div>
      </div>

      {/* Filter */}
      <div className="flex gap-1">
        {["Todos", "Visíveis", "Privados"].map((f, i) => (
          <span key={f} className={`text-[7px] font-bold px-2 py-1 rounded-full ${i === 0 ? "bg-purple-600 text-white" : "bg-gray-100 text-txt-muted"}`}>
            {f}
          </span>
        ))}
      </div>

      {/* Records */}
      {RECORDS.map((r, i) => (
        <div key={i} className="p-2.5 bg-white rounded-xl border border-gray-50">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-bold text-txt-muted bg-gray-50 rounded px-1.5 py-0.5">{r.date}</span>
              <p className="text-[10px] font-medium text-txt">{r.patient}</p>
            </div>
            <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-0.5 ${r.visColor}`}>
              {r.visibility === "Visível" ? <Eye className="w-2.5 h-2.5" /> : <EyeOff className="w-2.5 h-2.5" />}
              {r.visibility}
            </span>
          </div>
          <p className="text-[8px] text-txt-light">{r.title}</p>
          <div className="flex gap-1.5 mt-1.5">
            <span className="text-[7px] text-purple-600 font-bold flex items-center gap-0.5">
              <Pencil className="w-2 h-2" /> Editar
            </span>
            <span className="text-[7px] text-teal-dark font-bold flex items-center gap-0.5">
              <Eye className="w-2 h-2" /> Ver
            </span>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="flex items-center gap-3 px-2">
        <span className="flex items-center gap-1 text-[7px] text-emerald-600">
          <Eye className="w-2.5 h-2.5" /> Visível — paciente vê
        </span>
        <span className="flex items-center gap-1 text-[7px] text-amber-600">
          <EyeOff className="w-2.5 h-2.5" /> Privado — só você vê
        </span>
      </div>
    </div>
  );
}

function ScreenAdminSessionDetail() {
  return (
    <div className="space-y-3">
      <div className="bg-gradient-to-r from-primary/8 to-transparent rounded-xl p-3">
        <p className="text-[11px] font-bold text-txt">Detalhes da Sessão</p>
        <p className="text-[8px] text-txt-muted">Caio Martins — 03/04/2026 · 19:00 – 20:00</p>
      </div>

      {/* Session info pills */}
      <div className="flex flex-wrap gap-1.5">
        <span className="text-[7px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">Realizada</span>
        <span className="text-[7px] font-bold px-2 py-1 rounded-full bg-teal/10 text-teal ring-1 ring-teal/20">Online</span>
        <span className="text-[7px] font-bold px-2 py-1 rounded-full bg-gray-100 text-txt-muted">Sessão #8</span>
      </div>

      {/* Private note - amber */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5">
        <div className="flex items-center gap-1 mb-1">
          <Lock className="w-3 h-3 text-amber-600" />
          <p className="text-[8px] font-bold text-amber-700">Anotação interna (o paciente NÃO vê)</p>
        </div>
        <p className="text-[8px] text-amber-900 leading-relaxed">
          Sessão 1 do processo: autocobrança e sobrecarga. Foco em defusão cognitiva. Paciente apresentou boa receptividade.
        </p>
      </div>

      {/* Patient note */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-2.5">
        <div className="flex items-center gap-1 mb-1">
          <Pencil className="w-3 h-3 text-blue-600" />
          <p className="text-[8px] font-bold text-blue-700">Anotação do paciente</p>
        </div>
        <p className="text-[8px] text-blue-900 leading-relaxed">
          Gostei da sessão. Percebi que me cobro demais. Vou tentar observar isso durante a semana.
        </p>
      </div>

      {/* Therapist feedback - green */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5">
        <div className="flex items-center gap-1 mb-1">
          <MessageSquare className="w-3 h-3 text-emerald-600" />
          <p className="text-[8px] font-bold text-emerald-700">Feedback pós-sessão (paciente VERÁ)</p>
        </div>
        <p className="text-[8px] text-emerald-900 leading-relaxed">
          Ótima sessão, Caio! Identificamos padrões de autocobrança. Para a semana: observe quando a autocrítica aparece. 🌱
        </p>
      </div>

      {/* Video link */}
      <div className="bg-white rounded-xl border border-gray-50 p-2.5">
        <p className="text-[8px] font-bold text-txt mb-1 flex items-center gap-1">
          <Video className="w-3 h-3 text-teal" /> Videochamada
        </p>
        <div className="flex gap-1.5">
          <span className="text-[7px] text-teal font-bold">📹 Entrar na Sessão</span>
          <span className="text-[7px] text-primary-dark font-bold">📋 Copiar link</span>
        </div>
      </div>
    </div>
  );
}

function ScreenAdminPatients() {
  return (
    <div className="space-y-3">
      <div className="bg-gradient-to-r from-teal/8 to-transparent rounded-xl p-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-teal/12 flex items-center justify-center">
          <Users className="w-4 h-4 text-teal" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-txt">Meus Pacientes</p>
          <p className="text-[8px] text-txt-muted">Gerencie seus pacientes ativos</p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-1.5">
        <div className="bg-gradient-to-br from-teal/8 to-transparent rounded-lg p-2 ring-1 ring-teal/10 text-center">
          <p className="text-[11px] font-bold text-teal-dark">3</p>
          <p className="text-[7px] text-txt-muted">Ativos</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-transparent rounded-lg p-2 ring-1 ring-emerald-100 text-center">
          <p className="text-[11px] font-bold text-emerald-600">25</p>
          <p className="text-[7px] text-txt-muted">Sessões totais</p>
        </div>
        <div className="bg-gradient-to-br from-primary/8 to-transparent rounded-lg p-2 ring-1 ring-primary/10 text-center">
          <p className="text-[11px] font-bold text-primary-dark">8.3</p>
          <p className="text-[7px] text-txt-muted">Média/paciente</p>
        </div>
      </div>

      {/* Patient list */}
      {PATIENTS.map((p, i) => (
        <div key={i} className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-gray-50">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal to-primary flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
            {p.initials}
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-medium text-txt">{p.name}</p>
            <p className="text-[8px] text-txt-muted">{p.sessions} sessões · Próxima: {p.next}</p>
          </div>
          <span className="text-[7px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
            {p.status}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Screen configuration
   ───────────────────────────────────────────────── */
const screens = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-3.5 h-3.5" />, component: ScreenAdminDashboard, url: "/admin" },
  { id: "agenda", label: "Agenda", icon: <CalendarCheck className="w-3.5 h-3.5" />, component: ScreenAdminAgenda, url: "/admin/agenda" },
  { id: "prontuarios", label: "Prontuários", icon: <FileText className="w-3.5 h-3.5" />, component: ScreenAdminProntuarios, url: "/admin/prontuarios" },
  { id: "session-detail", label: "Sessão", icon: <MessageSquare className="w-3.5 h-3.5" />, component: ScreenAdminSessionDetail, url: "/admin/agenda#detail" },
  { id: "patients", label: "Pacientes", icon: <Users className="w-3.5 h-3.5" />, component: ScreenAdminPatients, url: "/admin/pacientes" },
];

const SCREEN_INTERVAL = 4200;

function getDirection(from: number, to: number) {
  if (to === from) return 1;
  if ((from + 1) % screens.length === to) return 1;
  if ((from - 1 + screens.length) % screens.length === to) return -1;
  return to > from ? 1 : -1;
}

/* ─────────────────────────────────────────────────
   Main exported component
   ───────────────────────────────────────────────── */
export function AdminScreenCarousel() {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number) => {
    if (idx === current) return;
    setDirection(getDirection(current, idx));
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    const target = (current + 1) % screens.length;
    setDirection(1);
    setCurrent(target);
  }, [current]);

  const prev = useCallback(() => {
    const target = (current - 1 + screens.length) % screens.length;
    setDirection(-1);
    setCurrent(target);
  }, [current]);

  useEffect(() => {
    if (paused || reduce) return;
    timerRef.current = setTimeout(next, SCREEN_INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, reduce, next]);

  const screen = screens[current];
  const Screen = screen.component;

  const variants = {
    enter: (d: number) => reduce ? { opacity: 0 } : { opacity: 0, x: d > 0 ? 80 : -80, scale: 0.96 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => reduce ? { opacity: 0 } : { opacity: 0, x: d > 0 ? -80 : 80, scale: 0.96 },
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Telas do painel administrativo"
    >
      {/* Glow behind */}
      <motion.div
        className="absolute -inset-6 rounded-3xl blur-3xl opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(212,165,116,0.2), rgba(15,118,110,0.1), transparent)",
            "radial-gradient(circle at 70% 50%, rgba(15,118,110,0.2), rgba(212,165,116,0.1), transparent)",
            "radial-gradient(circle at 50% 30%, rgba(147,51,234,0.15), rgba(15,118,110,0.1), transparent)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Browser chrome */}
      <div className="relative bg-white rounded-2xl shadow-warm-xl overflow-hidden ring-1 ring-black/5">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
          </div>
          <div className="flex-1 mx-2">
            <motion.div
              key={screen.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-100 rounded-md px-3 py-1 text-[10px] text-gray-400 text-center truncate"
            >
              psicolobia.vercel.app{screen.url}
            </motion.div>
          </div>
        </div>

        {/* Sidebar + Content */}
        <div className="flex">
          {/* Mini sidebar */}
          <div className="hidden sm:flex flex-col w-14 border-r border-gray-50 bg-gradient-to-b from-white to-gray-50/50 py-3 gap-0.5 items-center">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-dark to-teal flex items-center justify-center text-white text-[8px] font-bold mb-2">
              {ADMIN.initials}
            </div>
            {screens.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Abrir ${s.label}`}
                aria-current={i === current ? "page" : undefined}
                className={`w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all duration-200 ${
                  i === current
                    ? "bg-primary/10 text-primary-dark shadow-[0_8px_22px_rgba(212,165,116,0.12)]"
                    : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                }`}
              >
                {s.icon}
                <span className="text-[5px] font-medium leading-none">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 p-3.5 sm:p-4 bg-gradient-to-br from-bg/50 to-white min-h-[340px] sm:min-h-[380px] relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={screen.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Screen />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom nav bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-gray-100 bg-white">
          <button onClick={prev} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Tela anterior">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1">
            {screens.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Abrir ${s.label}`}
                aria-current={i === current ? "page" : undefined}
                className={`flex items-center gap-1 px-2 py-1 rounded-full text-[8px] font-bold transition-all duration-300 ${
                  i === current
                    ? "bg-primary/10 text-primary-dark scale-105"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {s.icon}
                <span className={`${i === current ? "inline" : "hidden sm:inline"}`}>{s.label}</span>
              </button>
            ))}
          </div>
          <button onClick={next} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Próxima tela">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

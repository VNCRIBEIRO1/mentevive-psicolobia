"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Leaf } from "lucide-react";
import { PLATFORM_URL, TENANT_SLUG, WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/lib/utils";

type BotResponse = { msg: string; opts: string[] };

const registerUrl = `${PLATFORM_URL}/registro?tenant=${TENANT_SLUG}`;
const loginUrl = `${PLATFORM_URL}/login?tenant=${TENANT_SLUG}`;
const therapistUrl = `${PLATFORM_URL}/registro?type=therapist`;

const botResponses: Record<string, BotResponse> = {
  cadastro: {
    msg: `Para criar sua conta de paciente, use este link: ${registerUrl}`,
    opts: ["agendar", "portal", "videochamada"],
  },
  agendar: {
    msg: `Para agendar, entre no Portal do Paciente: ${loginUrl}`,
    opts: ["cadastro", "portal", "contato"],
  },
  portal: {
    msg: "No portal você consegue agendar, remarcar, acompanhar sessões e pagamentos em um único lugar.",
    opts: ["agendar", "videochamada", "contato"],
  },
  videochamada: {
    msg: "As sessões acontecem online por videochamada segura, com link liberado no fluxo da sessão.",
    opts: ["agendar", "portal", "contato"],
  },
  contato: {
    msg: `WhatsApp: ${WHATSAPP_DISPLAY || WHATSAPP_LINK}\nLink direto: ${WHATSAPP_LINK}`,
    opts: ["cadastro", "agendar", "portal"],
  },
  psicologo: {
    msg: `Se você é psicólogo(a), crie seu consultório no MenteVive: ${therapistUrl}`,
    opts: ["cadastro", "agendar", "contato"],
  },
};

type Msg = { text: string; from: "bot" | "user" };

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [inited, setInited] = useState(false);
  const [textInput, setTextInput] = useState("");
  const messagesRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    setTimeout(() => {
      messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
    }, 50);
  };

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next && !inited) {
      setMessages([{ text: "Oi! Posso ajudar com cadastro, agendamento e portal.", from: "bot" }]);
      setOptions(["cadastro", "agendar", "portal", "videochamada", "contato", "psicologo"]);
      setInited(true);
    }
  };

  const findBestMatch = (input: string): string | null => {
    const lower = input.toLowerCase();
    const map: Record<string, string[]> = {
      cadastro: ["cadastro", "registr", "conta", "criar"],
      agendar: ["agendar", "agenda", "horário", "sessão", "consulta"],
      portal: ["portal", "login", "entrar"],
      videochamada: ["video", "online", "chamada"],
      contato: ["contato", "whatsapp", "telefone"],
      psicologo: ["psicologo", "psicologa", "consultorio", "tenant"],
    };
    for (const [key, words] of Object.entries(map)) {
      if (words.some((w) => lower.includes(w))) return key;
    }
    return null;
  };

  const handleOpt = (key: string) => {
    setMessages((prev) => [...prev, { text: key, from: "user" }]);
    setOptions([]);
    const r = botResponses[key];
    if (r) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: r.msg, from: "bot" }]);
        setOptions(r.opts);
        scrollDown();
      }, 300);
    }
    scrollDown();
  };

  useEffect(scrollDown, [messages]);

  return (
    <>
      <motion.button
        onClick={toggle}
        aria-label="Assistente virtual"
        className="fixed bottom-8 right-8 w-[52px] h-[52px] rounded-full bg-gradient-to-br from-primary to-teal border-none cursor-pointer flex items-center justify-center z-[90] shadow-warm-lg no-print"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="fixed bottom-24 right-8 w-[350px] max-h-[480px] glass-strong border border-primary/10 rounded-brand flex flex-col z-[91] shadow-warm-xl max-md:w-[calc(100vw-2rem)] max-md:right-4 max-md:bottom-[5.5rem] no-print"
          >
            <div className="bg-gradient-to-r from-primary to-teal px-5 py-4 rounded-t-brand flex justify-between items-center">
              <h4 className="text-white font-heading text-sm flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5" /> Assistente do Portal</h4>
              <button onClick={toggle} className="text-white/70 hover:text-white transition-colors"><X className="w-4 h-4" /></button>
            </div>

            <div ref={messagesRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 max-h-[310px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`max-w-[85%] px-3.5 py-2 rounded-xl text-xs leading-relaxed whitespace-pre-line ${msg.from === "bot" ? "bg-bg self-start rounded-bl-sm text-txt" : "bg-primary text-white self-end rounded-br-sm"}`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {options.length > 0 && (
              <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                {options.map((o) => (
                  <button key={o} onClick={() => handleOpt(o)} className="px-3 py-1 bg-bg border border-primary/15 rounded-full text-[0.7rem] font-body text-txt hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer">
                    {o}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!textInput.trim()) return;
                const input = textInput.trim();
                setTextInput("");
                setMessages((prev) => [...prev, { text: input, from: "user" }]);
                setOptions([]);
                const match = findBestMatch(input);
                setTimeout(() => {
                  if (match && botResponses[match]) {
                    setMessages((prev) => [...prev, { text: botResponses[match].msg, from: "bot" }]);
                    setOptions(botResponses[match].opts);
                  } else {
                    setMessages((prev) => [...prev, { text: "Posso ajudar com cadastro, agendamento, portal e videochamada.", from: "bot" }]);
                    setOptions(["cadastro", "agendar", "portal", "videochamada", "contato", "psicologo"]);
                  }
                  scrollDown();
                }, 300);
              }}
              className="px-4 pb-3 flex gap-2"
            >
              <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} placeholder="Digite sua duvida..." className="flex-1 py-2 px-3 border border-primary/15 rounded-full text-xs font-body bg-bg text-txt focus:outline-none focus:border-primary" />
              <button type="submit" className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center hover:bg-teal-dark transition-colors">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

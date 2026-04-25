"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Leaf } from "lucide-react";
import { PLATFORM_URL, TENANT_SLUG, WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/lib/utils";

type BotFlowOption = {
  label: string;
  nextDelay?: number;
  onSelect: (addBotMessage: (msg: string, opts?: BotFlowOption[]) => void) => void;
};

type Msg = { text: string; from: "bot" | "user" };

const loginUrl = `${PLATFORM_URL}/login?tenant=${TENANT_SLUG}`;
const registerPatientUrl = `${PLATFORM_URL}/registro?tenant=${TENANT_SLUG}`;

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [options, setOptions] = useState<BotFlowOption[]>([]);
  const [inited, setInited] = useState(false);
  const [textInput, setTextInput] = useState("");
  const messagesRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    setTimeout(() => {
      messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
    }, 50);
  };

  const addBotMessage = (msg: string, opts: BotFlowOption[] = []) => {
    setMessages((prev) => [...prev, { text: msg, from: "bot" }]);
    setOptions(opts);
    scrollDown();
  };

  const handleWhatsappRedirect = (tema: string) => {
    const text = encodeURIComponent(`Olá, Beatriz! Estive no seu site e gostaria de saber mais sobre a terapia. Acho que preciso lidar com ${tema}. Podemos conversar rápido para eu entender como funciona?`);
    window.open(`${WHATSAPP_LINK}?text=${text}`, "_blank");
  };

  // --- FLOW DEFINITIONS ---
  const initialOptions: BotFlowOption[] = [
    {
      label: "Quero tirar dúvidas (Triagem)",
      onSelect: (bot) => {
        bot(
          "Que bom que você chegou até aqui! Pra eu entender melhor, o que mais tem te incomodado hoje?",
          [
            { label: "🔥 Burnout / Exaustão mental", onSelect: (b) => handleTerapiaMotivo(b, "Burnout/Exaustão") },
            { label: "🫣 Ansiedade / Comparação", onSelect: (b) => handleTerapiaMotivo(b, "Ansiedade/Autoestima") },
            { label: "💔 Impor limites / Relacionar", onSelect: (b) => handleTerapiaMotivo(b, "Limites e Relações") },
            { label: "✨ Outro motivo / Dúvida geral", onSelect: (b) => handleTerapiaMotivo(b, "dúvidas gerais") }
          ]
        );
      }
    },
    {
      label: "Agendar Sessão",
      onSelect: (bot) => {
        bot(
          `Sem problema! Você pode agendar direto pelo nosso portal:\n\n1. Crie sua conta rápida\n2. Escolha o horário\n\nLink: ${registerPatientUrl}`,
          initialOptions.filter(o => o.label !== "Agendar Sessão")
        );
      }
    },
    {
      label: "Já sou paciente (Portal)",
      onSelect: (bot) => {
        bot(
          `Ótimo! Acesse seu portal para ver recibos, agendar ou desmarcar sessões:\nLink: ${loginUrl}`,
          [{ label: "Voltar ao início", onSelect: (b) => resetFlow(b) }]
        );
      }
    }
  ];

  const handleTerapiaMotivo = (bot: (msg: string, opts?: BotFlowOption[]) => void, tema: string) => {
    bot(
      `Entendi. É muito comum as pessoas chegarem com dificuldades relacionadas a ${tema}, especialmente quando se vive de tela e internet.\n\nA Beatriz tem muita prática ajudando nisso sem aquele papo engessado. Quer chamar no WhatsApp pra ver se rola aquele match e tirar o resto das dúvidas?`,
      [
        {
          label: "📲 Chamar no WhatsApp",
          onSelect: () => handleWhatsappRedirect(tema)
        },
        {
          label: "Ver valores",
          onSelect: (b) => {
            b("A sessão semanal é R$ 120 e avulsa R$ 150. Tudo via PIX ou cartão de crédito.\nPosso te ajudar com mais algo?", initialOptions);
          }
        },
        {
          label: "Voltar",
          onSelect: (b) => resetFlow(b)
        }
      ]
    );
  };

  const resetFlow = (bot: (msg: string, opts?: BotFlowOption[]) => void) => {
    bot("Como posso te ajudar agora?", initialOptions);
  };

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next && !inited) {
      setMessages([{ text: "Oie! A Beatriz está em atendimento agora, mas sou a assistente online dela. O que você tá buscando hoje? \n\n(Aviso LGPD: Não guardamos nenhuma informação digitada aqui. Essa janela é apenas para um direcionamento rápido.)", from: "bot" }]);
      setOptions(initialOptions);
      setInited(true);
    }
  };

  useEffect(scrollDown, [messages]);

  return (
    <>
      <button
        onClick={toggle}
        aria-label="Assistente virtual"
        className="fixed bottom-8 right-8 w-[52px] h-[52px] rounded-full bg-gradient-to-br from-primary to-teal border-none cursor-pointer flex items-center justify-center z-[90] shadow-warm-lg no-print transition-transform duration-200 hover:scale-[1.08] active:scale-95"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="fixed bottom-24 right-8 w-[350px] max-h-[500px] bg-[#FFFBF5] border border-gold/40 rounded-brand flex flex-col z-[91] shadow-warm-xl max-md:w-[calc(100vw-2rem)] max-md:right-4 max-md:bottom-[5.5rem] no-print"
          >
            <div className="bg-gradient-to-r from-teal-dark to-teal px-5 py-4 rounded-t-brand flex justify-between items-center shadow-md">
              <h4 className="text-white font-heading text-sm font-semibold flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5" /> Assistente e Triagem</h4>
              <button onClick={toggle} className="text-white/70 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
            </div>

            <div ref={messagesRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-2.5 max-h-[320px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-[0.8rem] leading-relaxed whitespace-pre-line shadow-sm border border-gold/10 ${msg.from === "bot" ? "bg-white self-start rounded-bl-sm text-txt" : "bg-teal text-white self-end rounded-br-sm border-transparent"}`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {options.length > 0 && (
              <div className="flex flex-col gap-2 px-4 pb-4">
                <div className="h-px bg-gold/20 w-12 mx-auto mb-1 rounded" />
                {options.map((o, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => {
                      setMessages((prev) => [...prev, { text: o.label, from: "user" }]);
                      setOptions([]);
                      setTimeout(() => o.onSelect(addBotMessage), 400);
                    }} 
                    className="w-full text-left px-4 py-2.5 bg-white border border-gold/40 rounded-lg text-[0.8rem] text-teal-dark font-medium hover:bg-teal hover:border-teal hover:text-white transition-all shadow-sm active:scale-[0.98]"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

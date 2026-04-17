import Link from "next/link";
import { Smartphone, Camera, Music } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, INSTAGRAM_URL, TIKTOK_URL, PLATFORM_URL, TENANT_SLUG } from "@/lib/utils";

const siteLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Atuação" },
  { href: "#portal", label: "Portal" },
  { href: "#blog", label: "Blog" },
  { href: "#agendamento", label: "Cadastro" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-txt text-white/60 py-16 px-5 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-heading text-sm font-bold">
              P
            </div>
            <span className="text-white font-heading text-base font-semibold">Psicolobia</span>
          </div>
          <p className="text-sm leading-relaxed">Psicologia clínica online com escuta sensível e acolhimento.</p>
          <p className="mt-3 text-[0.7rem] opacity-40">
            Atendimento individual por videochamada em ambiente seguro.
          </p>
        </div>
        <div>
          <h4 className="text-white font-heading text-sm font-semibold uppercase tracking-wider mb-4">Navegação</h4>
          <ul className="space-y-1.5">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm hover:text-primary-light transition-colors">{l.label}</a>
              </li>
            ))}
            <li>
              <a href={`${PLATFORM_URL}/login?tenant=${TENANT_SLUG}`} className="text-sm hover:text-primary-light transition-colors">Entrar no portal</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-heading text-sm font-semibold uppercase tracking-wider mb-4">Contato</h4>
          <ul className="space-y-2">
            {WHATSAPP_LINK && <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="text-sm hover:text-primary-light transition-colors flex items-center gap-2"><Smartphone className="w-3.5 h-3.5" /> {WHATSAPP_DISPLAY || "WhatsApp"}</a></li>}
            {INSTAGRAM_URL && <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="text-sm hover:text-primary-light transition-colors flex items-center gap-2"><Camera className="w-3.5 h-3.5" /> Instagram</a></li>}
            {TIKTOK_URL && <li><a href={TIKTOK_URL} target="_blank" rel="noopener" className="text-sm hover:text-primary-light transition-colors flex items-center gap-2"><Music className="w-3.5 h-3.5" /> TikTok</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8 mt-10 pt-6 text-center max-w-7xl mx-auto">
        <p className="text-[0.7rem] text-white/40">Psicolobia © {new Date().getFullYear()} · Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

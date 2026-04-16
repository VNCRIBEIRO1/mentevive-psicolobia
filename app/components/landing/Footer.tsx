import Link from "next/link";
import { Smartphone, Camera, Music } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, INSTAGRAM_URL, TIKTOK_URL, PLATFORM_URL, TENANT_SLUG } from "@/lib/utils";

const siteLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Atuacao" },
  { href: "#portal", label: "Portal" },
  { href: "#blog", label: "Blog" },
  { href: "#agendamento", label: "Cadastro" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-txt text-white/60 py-14 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1100px] mx-auto">
        <div>
          <h4 className="text-white font-heading text-base mb-3">Psicolobia</h4>
          <p className="text-sm leading-relaxed">Psicologia online com fluxo multi-tenant no MenteVive.</p>
          <p className="mt-3 text-[0.7rem] opacity-40">
            Cadastro, login e agendamento em ambiente seguro para pacientes e consultorios.
          </p>
        </div>
        <div>
          <h4 className="text-white font-heading text-base mb-3">Navegacao</h4>
          <ul className="space-y-1">
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
          <h4 className="text-white font-heading text-base mb-3">Contato</h4>
          <ul className="space-y-2">
            {WHATSAPP_LINK && <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="text-sm hover:text-primary-light transition-colors flex items-center gap-2"><Smartphone className="w-3.5 h-3.5" /> {WHATSAPP_DISPLAY || "WhatsApp"}</a></li>}
            {INSTAGRAM_URL && <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="text-sm hover:text-primary-light transition-colors flex items-center gap-2"><Camera className="w-3.5 h-3.5" /> Instagram</a></li>}
            {TIKTOK_URL && <li><a href={TIKTOK_URL} target="_blank" rel="noopener" className="text-sm hover:text-primary-light transition-colors flex items-center gap-2"><Music className="w-3.5 h-3.5" /> TikTok</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 mt-8 pt-4 text-center max-w-[1100px] mx-auto">
        <p className="text-[0.7rem] text-white/60">Psicolobia e MenteVive - {new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
}

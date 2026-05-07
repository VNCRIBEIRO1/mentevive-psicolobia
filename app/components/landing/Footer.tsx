import Link from "next/link";
import { Smartphone, Camera, Music } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, INSTAGRAM_URL, TIKTOK_URL, PLATFORM_URL, TENANT_SLUG } from "@/lib/utils";

const siteLinks = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/o-que-e-act", label: "O que é ACT" },
  { href: "/atuacao", label: "Atuação" },
  { href: "/contato", label: "Contato" },
  { href: "/#blog", label: "Blog" },
  { href: "/#agendamento", label: "Cadastro" },
];

export function Footer() {
  return (
    <footer className="bg-txt text-white/60 py-14 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-[1100px] mx-auto">
        <div className="md:col-span-1">
          <h4 className="text-white font-heading text-base mb-3">Psicolobia</h4>
          <p className="text-sm leading-relaxed">Psicologia clínica online com escuta sensível e acolhimento.</p>
          <p className="mt-3 text-[0.7rem] opacity-50">
            Beatriz Matos · CRP 06/173961
          </p>
          <p className="mt-1 text-[0.7rem] opacity-40">
            Atendimento individual por videochamada criptografada.
          </p>
        </div>
        <div>
          <h4 className="text-white font-heading text-base mb-3">Navegação</h4>
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
            <li className="text-[0.7rem] opacity-50 pt-1">Retorno em até 24h úteis.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-heading text-base mb-3">Transparência</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacidade" className="hover:text-primary-light transition-colors">Privacidade &amp; LGPD</Link>
            </li>
            <li>
              <a href="https://cadastro.cfp.org.br/" target="_blank" rel="noopener" className="hover:text-primary-light transition-colors">
                Consultar CRP no e-Psí
              </a>
            </li>
            <li>
              <a href="https://site.cfp.org.br/wp-content/uploads/2018/05/RES-11-2018.pdf" target="_blank" rel="noopener" className="hover:text-primary-light transition-colors">
                Resolução CFP 11/2018 (terapia online)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 mt-8 pt-4 text-center max-w-[1100px] mx-auto">
        <p className="text-[0.7rem] text-white/60">
          Psicolobia © {new Date().getFullYear()} · Beatriz Matos — Psicóloga Clínica · CRP 06/173961 · São Paulo/SP
        </p>
        <p className="text-[0.65rem] text-white/40 mt-1">
          A psicologia, segundo o Código de Ética Profissional, não garante resultados específicos nem anuncia por meio de depoimentos.
        </p>
      </div>
    </footer>
  );
}

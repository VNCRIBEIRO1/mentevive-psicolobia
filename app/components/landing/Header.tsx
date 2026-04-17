"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PLATFORM_URL, TENANT_SLUG } from "@/lib/utils";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Atuação" },
  { href: "#portal", label: "Portal" },
  { href: "#blog", label: "Blog" },
  { href: "#agendamento", label: "Cadastro" },
  { href: "#contato", label: "Contato" },
];

const loginUrl = `${PLATFORM_URL}/login?tenant=${TENANT_SLUG}`;
const registerUrl = `${PLATFORM_URL}/registro?tenant=${TENANT_SLUG}`;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main" className="absolute -top-full left-4 bg-primary text-white px-6 py-3 rounded-b-lg z-[200] focus:top-0">
        Pular para o conteúdo
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] px-5 md:px-8 py-3.5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-white/92 shadow-soft-sm backdrop-blur-2xl" : "bg-bg/80 backdrop-blur-xl"
        } border-b border-primary/5`}
      >
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-heading text-lg font-bold shadow-soft-sm group-hover:shadow-glow-primary transition-shadow duration-300">
            P
          </div>
          <div>
            <span className="font-heading text-base font-semibold text-txt block leading-tight">Psicolobia</span>
            <span className="text-[0.6rem] text-txt-muted block">Psicóloga Clínica Online</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-txt-light hover:text-primary-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">
              {l.label}
            </a>
          ))}
          <a href={loginUrl} className="text-sm font-semibold text-primary-dark hover:text-primary transition-colors">
            Entrar
          </a>
          <a href={registerUrl} className="btn-brand-primary text-xs !py-2 !px-4">
            Criar conta <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        <button className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors" onClick={() => setMobileOpen(true)} aria-label="Abrir menu">
          <Menu className="w-5 h-5 text-txt" />
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-white/98 backdrop-blur-2xl z-[200] flex flex-col items-center justify-center gap-6"
          >
            <button className="absolute top-6 right-6 p-2 rounded-lg hover:bg-primary/10 transition-colors" onClick={() => setMobileOpen(false)} aria-label="Fechar menu">
              <X className="w-6 h-6 text-txt" />
            </button>
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 120, damping: 20 }}
                className="font-heading text-xl hover:text-primary-dark transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <div className="flex gap-4 mt-2">
              <a href={loginUrl} onClick={() => setMobileOpen(false)} className="font-heading text-lg text-primary-dark">Entrar</a>
              <a href={registerUrl} onClick={() => setMobileOpen(false)} className="btn-brand-primary text-sm">Criar conta</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

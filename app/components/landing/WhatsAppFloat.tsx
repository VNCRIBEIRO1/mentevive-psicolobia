"use client";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-sm font-bold z-[90] shadow-lg no-print transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] active:scale-95"
    >
      <MessageCircle className="w-5 h-5" />
      WhatsApp
    </a>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Você não precisa sustentar tudo sozinho.",
  "Performance sem equilíbrio vira exaustão.",
  "Respirar também faz parte da produtividade.",
  "Sua mente merece descanso.",
  "Calma também é progresso.",
  "Desconectar-se é um ato de autocuidado.",
  "Sua produtividade não define seu valor.",
  "A comparação rouba a sua paz digital.",
  "Um passo de cada vez já é movimento.",
  "Menos 'on', mais presença."
];

export function MessageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-5 md:py-8 bg-teal-dark/5 backdrop-blur-md overflow-hidden flex items-center justify-center">
      {/* 1. Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3")` }} />

      {/* 2. Animated Border Beams - adjusted for light background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Beam */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-teal-dark/10">
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-teal/30 to-transparent"
          />
        </div>
        {/* Bottom Beam */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-teal-dark/10">
          <motion.div 
            animate={{ x: ["200%", "-100%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="w-1/4 h-full bg-gradient-to-r from-transparent via-teal/30 to-transparent"
          />
        </div>
      </div>

      {/* 3. Floating Decorative Elements - adjusted for light background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Plus symbols */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
              x: i === 0 ? ["10%", "12%", "10%"] : i === 1 ? ["85%", "83%", "85%"] : ["50%", "52%", "50%"],
              y: i === 0 ? ["20%", "25%", "20%"] : i === 1 ? ["70%", "65%", "70%"] : ["10%", "15%", "10%"]
            }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute text-teal-dark/20 select-none"
            style={{ left: 0, top: 0 }}
          >
            <div className="w-3 h-3 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current" />
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-current" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. Content Area */}
      <div className="relative z-10 max-w-5xl px-8 text-center w-full">
        {/* Editorial Marker - adjusted for light background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="mb-4 flex items-center justify-center gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-teal-dark/60 font-bold"
        >
          <span className="w-8 h-[1px] bg-teal-dark/20" />
          Mente em Equilíbrio
          <span className="w-8 h-[1px] bg-teal-dark/20" />
        </motion.div>

        <div className="h-[35px] sm:h-[40px] md:h-[45px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
              transition={{ 
                duration: 0.9, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="font-heading text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem] text-teal-dark font-medium leading-tight max-w-4xl mx-auto italic"
            >
              &ldquo;{messages[index]}&rdquo;
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Decorative dots for index tracking - adjusted for light background */}
        <div className="mt-6 flex justify-center gap-2">
          {messages.map((_, i) => (
            <div 
              key={i} 
              className={`h-[2px] transition-all duration-700 ${i === index ? 'w-6 bg-teal-dark/40' : 'w-2 bg-teal-dark/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

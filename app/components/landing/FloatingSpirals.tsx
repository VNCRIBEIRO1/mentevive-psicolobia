"use client";
import { useReducedMotion } from "framer-motion";
import { useHydrated } from "@/lib/useHydrated";

export function FloatingSpirals() {
  const hydrated = useHydrated();
  const shouldReduceMotion = useReducedMotion();

  if (!hydrated) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.25] mix-blend-multiply" aria-hidden="true">
      {/* Abstract Background Spiral SVG (inspired by the logo / psychological flow) */}
      <svg
        className={`absolute -top-[10%] left-[-15%] w-[120%] lg:w-[80%] h-auto max-w-none text-accent drop-shadow-[0_0_15px_rgba(178,152,220,0.5)] ${
          !shouldReduceMotion ? "animate-[spin_90s_linear_infinite]" : ""
        }`}
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="spiral-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="spiral-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8E6EBA" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#8E6EBA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8E6EBA" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        
        {/* Spiral Path 1 */}
        <path
          d="M 400 400 
             C 400 350, 480 320, 520 400 
             C 580 500, 400 620, 250 500 
             C 50 350, 300 50, 550 200 
             C 850 400, 600 800, 200 700 
             C -250 600, -100 100, 450 -100
             C 1050 -300, 1200 500, 600 1000"
          stroke="url(#spiral-grad-1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={!shouldReduceMotion ? "animate-pulse" : ""}
          style={{ animationDuration: "8s" }}
        />
        
        {/* Spiral Path 2 (Offset and inverted) */}
        <path
          d="M 400 400 
             C 450 400, 480 480, 400 520 
             C 300 580, 180 400, 300 250 
             C 450 50, 750 300, 600 550 
             C 400 850, 0 600, 100 200 
             C 200 -250, 700 -100, 900 450
             C 1100 1050, 300 1200, -200 600"
          stroke="url(#spiral-grad-2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 8"
          className={!shouldReduceMotion ? "animate-pulse" : ""}
          style={{ animationDuration: "12s" }}
        />
      </svg>
    </div>
  );
}

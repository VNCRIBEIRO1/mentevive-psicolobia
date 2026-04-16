"use client";
import { useState, useEffect } from "react";

/**
 * Returns false during SSR and first client render (hydration),
 * then true after hydration completes.
 * Prevents React 19 hydration mismatches with framer-motion.
 */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return hydrated;
}

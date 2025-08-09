"use client";

import { useEffect, useState } from "react";

/**
 * Хук визначає, чи поточна ширина вікна менша за breakpoint.
 * SSR-safe, з підтримкою Safari < 14.
 *
 * @param breakpoint - гранична ширина в px (за замовчуванням 768)
 * @returns boolean
 */
export function useIsMobile(breakpoint = 768): boolean {
  const getInitial = () => {
    if (typeof window === "undefined") return false;
    if ("matchMedia" in window) {
      return window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches;
    }
    return window.innerWidth < breakpoint;
  };

  const [isMobile, setIsMobile] = useState<boolean>(getInitial);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("matchMedia" in window) {
      const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
      const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

      if (typeof mql.addEventListener === "function") {
        mql.addEventListener("change", onChange);
      } else {
        // Safari < 14
        // @ts-ignore
        mql.addListener(onChange);
      }

      // синхронізація на старті
      setIsMobile(mql.matches);

      return () => {
        if (typeof mql.removeEventListener === "function") {
          mql.removeEventListener("change", onChange);
        } else {
          // @ts-ignore
          mql.removeListener(onChange);
        }
      };
    } else {
      const onResize = () => setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener("resize", onResize);
      onResize();
      return () => window.removeEventListener("resize", onResize);
    }
  }, [breakpoint]);

  return isMobile;
}

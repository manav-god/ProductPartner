"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import "lenis/dist/lenis.css";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      allowNestedScroll: true,
      smoothWheel: true,
      syncTouch: false,
      stopInertiaOnNavigate: true,
      lerp: 0.075,
      wheelMultiplier: 0.8,
    });

    const syncLock = () => {
      if (document.body.style.overflow === "hidden") lenis.stop();
      else lenis.start();
    };
    syncLock();

    const observer = new MutationObserver(syncLock);
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return null;
}

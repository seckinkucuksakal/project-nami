"use client";

import { useEffect, useRef } from "react";

export function AnimatedTitle() {
  const textEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const WORD = "NAMI";
    const chars = WORD.split("");
    const typeTotalMs = 1000;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function typeWord(totalMs: number) {
      if (!textEl.current) return;
      const per = totalMs / chars.length;
      textEl.current.textContent = "";
      for (let i = 0; i < chars.length; i++) {
        if (textEl.current) {
          textEl.current.textContent += chars[i];
        }
        await sleep(per);
      }
    }

    async function eraseWord(totalMs: number) {
      if (!textEl.current) return;
      const current = textEl.current.textContent?.split("") || [];
      const per = totalMs / Math.max(1, current.length);
      for (let i = current.length; i >= 0; i--) {
        if (textEl.current) {
          textEl.current.textContent = current.slice(0, i).join("");
        }
        await sleep(per);
      }
    }

    async function run() {
      // 1. İlk başta 2 saniye beklesin
      await sleep(2000);

      // 2. Sonra NAMI yazsın
      await typeWord(typeTotalMs);

      // 3. 10 saniye beklesin
      await sleep(10000);

      // 4. NAMI'yi silsin
      await eraseWord(1000);

      // 5. 10 saniye kalsın (boş)
      await sleep(10000);
    }

    // Loop'a gir
    let isRunning = true;
    async function loop() {
      while (isRunning) {
        await run();
      }
    }

    loop();

    // Cleanup function
    return () => {
      isRunning = false;
      if (textEl.current) {
        textEl.current.textContent = "";
      }
    };
  }, []);

  return (
    <div className="relative inline-flex items-baseline gap-[0.18em]">
      <span
        ref={textEl}
        className="text-4xl font-bold tracking-[0.18em] sm:text-5xl md:text-6xl lg:text-7xl"
      />
    </div>
  );
}


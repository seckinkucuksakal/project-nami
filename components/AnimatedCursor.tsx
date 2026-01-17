"use client";

import { useEffect, useRef } from "react";

export function AnimatedCursor() {
  const cursorEl = useRef<HTMLSpanElement>(null);
  const textEl = useRef<HTMLSpanElement>(null);
  const isRunningRef = useRef(true);
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const WORD = "nami";
    const chars = WORD.split("");
    const typeTotalMs = 1000;

    // Tüm timeout'ları temizle
    const clearAllTimeouts = () => {
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
    };

    const sleep = (ms: number): Promise<void> => {
      return new Promise((resolve) => {
        if (!isRunningRef.current) {
          resolve();
          return;
        }
        const timeout = setTimeout(() => {
          if (isRunningRef.current) {
            resolve();
          }
        }, ms);
        timeoutRefs.current.push(timeout);
      });
    };

    async function typeWord(totalMs: number) {
      if (!textEl.current || !isRunningRef.current) return;
      const per = totalMs / chars.length;
      textEl.current.textContent = "";
      for (let i = 0; i < chars.length; i++) {
        if (!isRunningRef.current || !textEl.current) return;
        textEl.current.textContent += chars[i];
        await sleep(per);
      }
    }

    async function eraseWord(totalMs: number) {
      if (!textEl.current || !isRunningRef.current) return;
      const current = textEl.current.textContent?.split("") || [];
      const per = totalMs / Math.max(1, current.length);
      for (let i = current.length; i >= 0; i--) {
        if (!isRunningRef.current || !textEl.current) return;
        textEl.current.textContent = current.slice(0, i).join("");
        await sleep(per);
      }
    }

    async function run() {
      if (!cursorEl.current || !isRunningRef.current) return;
      // 1. İlk başta "<" işareti, gidip gelsin (cursor gibi)
      cursorEl.current.textContent = "<";
      await sleep(2000);

      if (!isRunningRef.current) return;
      // 2. Sonra nami yazsın
      await typeWord(typeTotalMs);

      if (!isRunningRef.current) return;
      // 3. 10 saniye beklesin
      await sleep(10000);

      if (!isRunningRef.current) return;
      // 4. nami'yi silsin
      await eraseWord(1000);

      if (!isRunningRef.current) return;
      // 5. 10 saniye kalsın (boş)
      await sleep(10000);
    }

    // İlk başta temizle ve "<" göster
    if (textEl.current) {
      textEl.current.textContent = "";
    }
    if (cursorEl.current) {
      cursorEl.current.textContent = "<";
    }

    isRunningRef.current = true;

    // Loop'a gir
    async function loop() {
      while (isRunningRef.current) {
        await run();
      }
    }

    loop();

    // Cleanup function
    return () => {
      isRunningRef.current = false;
      clearAllTimeouts();
      if (textEl.current) {
        textEl.current.textContent = "";
      }
      if (cursorEl.current) {
        cursorEl.current.textContent = "<";
      }
    };
  }, []);

  return (
    <span className="flex items-center gap-1">
      <span
        ref={textEl}
        className="text-2xl font-bold"
      />
      <span
        ref={cursorEl}
        className="opacity-90 text-2xl"
        style={{
          animation: "blink 1.5s steps(1) infinite",
        }}
      />
    </span>
  );
}


'use client';

import { useEffect, useState } from 'react';
import { EmotionalState, getStateName } from '@/lib/types';

interface Props {
  text: string;
  state: EmotionalState;
}

const TYPE_MS = 1200;

export default function DialogueBox({ text, state }: Props) {
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setShown('');
    setDone(false);
    const total = TYPE_MS;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const elapsed = t - start;
      const ratio = Math.min(1, elapsed / total);
      const len = Math.floor(text.length * ratio);
      setShown(text.slice(0, len));
      if (ratio < 1) raf = requestAnimationFrame(tick);
      else {
        setShown(text);
        setDone(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text]);

  const skip = () => {
    if (!done) {
      setShown(text);
      setDone(true);
    }
  };

  return (
    <div
      onClick={skip}
      className="bg-bg-secondary rounded-2xl p-5 md:p-6 cursor-pointer transition hover:bg-bg-secondary/90"
      role="dialog"
      aria-label="Diálogo de Don Ricardo"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-bg-tertiary flex items-center justify-center text-lg">
          {/* mini avatar */}
          <svg viewBox="0 0 40 40" className="w-9 h-9">
            <circle cx="20" cy="20" r="20" fill="#e9c4a8" />
            <ellipse cx="20" cy="14" rx="10" ry="3" fill="#8d8a85" />
            <circle cx="15" cy="20" r="3" fill="#3a2a18" />
            <circle cx="25" cy="20" r="3" fill="#3a2a18" />
            <path d="M 12 28 Q 16 26 20 28 Q 24 26 28 28" stroke="#a89c92" strokeWidth="2.5" fill="none" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="font-semibold text-text-primary">Don Ricardo Almeyda</div>
          <div className="text-xs text-text-tertiary">Dueño de Almeyda Tech</div>
        </div>
        <div className="px-2.5 py-1 rounded-md bg-bg-tertiary text-xs uppercase tracking-wider text-text-secondary">
          {getStateName(state)}
        </div>
      </div>

      <p className="text-text-primary leading-relaxed text-[15px] md:text-base min-h-[5em]">
        {shown}
        {!done && <span className="inline-block w-2 h-5 bg-text-secondary ml-1 align-middle animate-pulse" />}
      </p>

      {!done && (
        <div className="text-[10px] text-text-tertiary mt-2 italic">Click para saltar</div>
      )}
    </div>
  );
}

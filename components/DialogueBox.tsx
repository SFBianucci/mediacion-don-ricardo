'use client';

import { useEffect, useState } from 'react';
import {
  EmotionalState,
  Speaker,
  getStateName,
  getStateNameForFlorencia,
  speakerName,
  speakerRole,
} from '@/lib/types';

interface Props {
  text: string;
  state: EmotionalState;
  speaker: Speaker;
}

const TYPE_MS = 1200;

export default function DialogueBox({ text, state, speaker }: Props) {
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

  const stateLabel =
    speaker === 'florencia' ? getStateNameForFlorencia(state) : getStateName(state);

  return (
    <div
      onClick={skip}
      className="bg-bg-secondary rounded-2xl p-5 md:p-6 cursor-pointer transition hover:bg-bg-secondary/90"
      role="dialog"
      aria-label={`Diálogo de ${speakerName(speaker)}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-bg-tertiary flex items-center justify-center text-lg">
          <MiniAvatar speaker={speaker} />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-text-primary">{speakerName(speaker)}</div>
          <div className="text-xs text-text-tertiary">{speakerRole(speaker)}</div>
        </div>
        <div className="px-2.5 py-1 rounded-md bg-bg-tertiary text-xs uppercase tracking-wider text-text-secondary">
          {stateLabel}
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

function MiniAvatar({ speaker }: { speaker: Speaker }) {
  if (speaker === 'donRicardo') {
    return (
      <svg viewBox="0 0 40 40" className="w-9 h-9">
        <circle cx="20" cy="20" r="20" fill="#e9c4a8" />
        <ellipse cx="20" cy="14" rx="10" ry="3" fill="#8d8a85" />
        <circle cx="15" cy="20" r="3" fill="#3a2a18" />
        <circle cx="25" cy="20" r="3" fill="#3a2a18" />
        <path d="M 12 28 Q 16 26 20 28 Q 24 26 28 28" stroke="#a89c92" strokeWidth="2.5" fill="none" />
      </svg>
    );
  }
  if (speaker === 'drPerez') {
    return (
      <svg viewBox="0 0 40 40" className="w-9 h-9">
        <circle cx="20" cy="20" r="20" fill="#e0b890" />
        <path d="M 8 14 Q 20 6 32 14 L 30 18 Q 20 14 10 18 Z" fill="#241810" />
        <rect x="11" y="18" width="8" height="6" rx="1" fill="none" stroke="#1a1208" strokeWidth="1.5" />
        <rect x="21" y="18" width="8" height="6" rx="1" fill="none" stroke="#1a1208" strokeWidth="1.5" />
        <line x1="19" y1="21" x2="21" y2="21" stroke="#1a1208" strokeWidth="1.5" />
        <path d="M 14 30 Q 20 32 26 30" stroke="#7a3a30" strokeWidth="2" fill="none" />
      </svg>
    );
  }
  // florencia
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9">
      <circle cx="20" cy="20" r="20" fill="#f0c4a8" />
      <path d="M 6 18 Q 8 6 20 6 Q 32 6 34 18 L 34 32 L 30 24 L 30 18 Q 20 16 10 18 L 10 24 L 6 32 Z" fill="#5e361c" />
      <circle cx="15" cy="21" r="2.5" fill="#4a6440" />
      <circle cx="25" cy="21" r="2.5" fill="#4a6440" />
      <path d="M 14 29 Q 20 32 26 29" stroke="#a04030" strokeWidth="2" fill="none" />
    </svg>
  );
}

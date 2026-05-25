'use client';

import { motion } from 'framer-motion';
import { GameMode, Option, QuestionType } from '@/lib/types';

interface Props {
  options: Option[];
  mode: GameMode;
  harvardPrinciple: string;
  selectedId: string | null;
  disabled: boolean;
  onChoose: (id: string) => void;
}

function questionTypeLabel(t: QuestionType): string {
  return {
    circular: 'Pregunta circular',
    open: 'Pregunta abierta',
    closed: 'Pregunta cerrada',
    statement: 'Afirmación / acusación',
  }[t];
}

export default function OptionsPanel({
  options,
  mode,
  harvardPrinciple,
  selectedId,
  disabled,
  onChoose,
}: Props) {
  return (
    <div className="space-y-2.5">
      <div className="text-text-tertiary text-xs uppercase tracking-wider mb-1">
        Elegí tu respuesta
      </div>
      {options.map((opt, idx) => {
        const isSelected = selectedId === opt.id;
        const label = String.fromCharCode(65 + idx);
        return (
          <motion.button
            key={opt.id}
            type="button"
            onClick={() => onChoose(opt.id)}
            disabled={disabled}
            whileHover={!disabled ? { scale: 1.005 } : {}}
            whileTap={!disabled ? { scale: 0.995 } : {}}
            className={`
              w-full text-left p-4 rounded-xl transition border
              ${
                isSelected
                  ? 'bg-bg-accent border-brand-warm'
                  : disabled
                    ? 'bg-bg-tertiary/60 border-transparent opacity-50 cursor-not-allowed'
                    : 'bg-bg-tertiary border-transparent hover:bg-bg-accent hover:border-white/10 focus:border-brand-warm focus:outline-none'
              }
            `}
          >
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-md bg-bg-secondary text-text-secondary text-sm font-bold flex items-center justify-center">
                {label}
              </div>
              <div className="flex-1">
                <p className="text-text-primary text-[14px] md:text-[15px] leading-relaxed">
                  {opt.text}
                </p>
                {mode === 'learning' && (
                  <p className="text-text-tertiary text-xs mt-2 italic">
                    → {opt.questionType ? questionTypeLabel(opt.questionType) : harvardPrinciple}
                  </p>
                )}
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Option } from '@/lib/types';

interface Props {
  option: Option;
  angerBefore: number;
  angerAfter: number;
  onContinue: () => void;
  isLastPhase: boolean;
  forceGameOver?: boolean;
}

export default function FeedbackCard({
  option,
  angerBefore,
  angerAfter,
  onContinue,
  isLastPhase,
  forceGameOver,
}: Props) {
  const delta = option.angerDelta;
  const deltaColor =
    delta < 0 ? 'text-brand-calm' : delta > 8 ? 'text-brand-angry' : 'text-brand-warm';
  const sign = delta > 0 ? '+' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-secondary border border-bg-accent rounded-2xl p-5 md:p-6 mt-4"
    >
      <div className="flex items-center gap-2 mb-3">
        {option.isBest ? (
          <span className="text-brand-calm font-semibold text-sm">✓ Mejor elección</span>
        ) : (
          <span className="text-text-tertiary font-medium text-sm">Tu elección</span>
        )}
      </div>

      <p className="text-text-primary leading-relaxed text-[15px]">{option.feedback}</p>

      <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-bg-accent">
        <div className="text-sm">
          <span className="text-text-tertiary">Cambio de enojo: </span>
          <span className={`font-bold ${deltaColor}`}>
            {sign}
            {delta}
          </span>
          <span className="text-text-tertiary ml-2">
            ({angerBefore} → {angerAfter})
          </span>
        </div>

        {forceGameOver ? (
          <button
            type="button"
            onClick={onContinue}
            className="ml-auto px-5 py-2.5 rounded-xl bg-brand-angry text-white font-semibold hover:opacity-90 transition"
          >
            Ver resultado →
          </button>
        ) : (
          <button
            type="button"
            onClick={onContinue}
            className="ml-auto px-5 py-2.5 rounded-xl bg-brand-warm text-bg-primary font-semibold hover:opacity-90 transition"
          >
            {isLastPhase ? 'Ver resultado →' : 'Continuar →'}
          </button>
        )}
      </div>
    </motion.div>
  );
}

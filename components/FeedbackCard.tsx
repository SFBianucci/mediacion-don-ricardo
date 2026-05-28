'use client';

import { motion } from 'framer-motion';
import { Deltas, Meters, Option, techniqueLabel } from '@/lib/types';

interface Props {
  option: Option;
  metersBefore: Meters;
  metersAfter: Meters;
  onContinue: () => void;
  isLastPhase: boolean;
  forceGameOver?: boolean;
}

function deltaColor(d: number): string {
  if (d < 0) return 'text-brand-calm';
  if (d > 10) return 'text-brand-angry';
  if (d > 0) return 'text-brand-warm';
  return 'text-text-tertiary';
}

function deltaLabel(d: number): string {
  if (d === 0) return '±0';
  const sign = d > 0 ? '+' : '';
  return `${sign}${d}`;
}

interface DeltaItemProps {
  label: string;
  delta: number;
  before: number;
  after: number;
}

function DeltaItem({ label, delta, before, after }: DeltaItemProps) {
  return (
    <div className="flex items-baseline gap-2 text-xs">
      <span className="text-text-tertiary uppercase tracking-wider min-w-[5.5em]">{label}</span>
      <span className={`font-bold ${deltaColor(delta)}`}>{deltaLabel(delta)}</span>
      <span className="text-text-tertiary text-[10px]">
        ({before} → {after})
      </span>
    </div>
  );
}

export default function FeedbackCard({
  option,
  metersBefore,
  metersAfter,
  onContinue,
  isLastPhase,
  forceGameOver,
}: Props) {
  const d: Deltas = option.deltas;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-secondary border border-bg-accent rounded-2xl p-5 md:p-6 mt-4"
    >
      <div className="flex items-center gap-3 mb-3">
        {option.isBest ? (
          <span className="text-brand-calm font-semibold text-sm">✓ Mejor elección</span>
        ) : option.leastBad ? (
          <span className="text-brand-warm font-semibold text-sm">≈ La menos mala</span>
        ) : (
          <span className="text-text-tertiary font-medium text-sm">Tu elección</span>
        )}
        {option.technique && (
          <span className="text-text-tertiary text-xs italic">
            · {techniqueLabel(option.technique)}
          </span>
        )}
      </div>

      <p className="text-text-primary leading-relaxed text-[15px]">{option.feedback}</p>

      <div className="mt-4 pt-4 border-t border-bg-accent space-y-1.5">
        <DeltaItem
          label="Clima"
          delta={d.climate}
          before={metersBefore.climate}
          after={metersAfter.climate}
        />
        <DeltaItem
          label="Don Ricardo"
          delta={d.donRicardo}
          before={metersBefore.donRicardo}
          after={metersAfter.donRicardo}
        />
        <DeltaItem
          label="Florencia"
          delta={d.florencia}
          before={metersBefore.florencia}
          after={metersAfter.florencia}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-4">
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

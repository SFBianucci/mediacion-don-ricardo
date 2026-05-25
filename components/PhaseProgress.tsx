'use client';

interface Props {
  current: number;
  total: number;
}

export default function PhaseProgress({ current, total }: Props) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-text-secondary text-xs uppercase tracking-wider">
        Fase {current} de {total}
      </span>
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => {
          const idx = i + 1;
          const isPast = idx < current;
          const isCurrent = idx === current;
          return (
            <div
              key={i}
              className={`
                w-2.5 h-2.5 rounded-full transition-colors
                ${isCurrent ? 'bg-brand-warm scale-125' : isPast ? 'bg-brand-warm/60' : 'bg-bg-tertiary'}
              `}
              aria-label={`Fase ${idx}${isCurrent ? ' (actual)' : isPast ? ' completada' : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}

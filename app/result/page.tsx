'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import { loadResult, SavedResult } from '@/lib/storage';
import { PHASES } from '@/lib/phases';
import {
  GameOverReason,
  Meters,
  getEmotionalState,
  maxMeter,
  playerRoleShort,
  stageName,
  techniqueLabel,
} from '@/lib/types';

type Outcome = {
  title: string;
  summary: string;
  tone: 'green' | 'yellow' | 'orange' | 'red';
  icon: string;
};

function outcomeFor(
  meters: Meters,
  gameOver: boolean,
  reason: GameOverReason
): Outcome {
  if (gameOver) {
    if (reason === 'climate') {
      return {
        title: 'La mediación se cayó por el clima',
        summary:
          'El ambiente se rompió: perdiste imparcialidad, violaste confidencialidad o forzaste la mano. Las partes ya no confían en el proceso. Queda habilitada la vía judicial: fuero del Consumidor de CABA (Ley 6.286/2020), gratuito por Art. 53 LDC.',
        tone: 'red',
        icon: '✗',
      };
    }
    if (reason === 'donRicardo') {
      return {
        title: 'Don Ricardo se levantó de la mesa',
        summary:
          'Don Ricardo perdió la paciencia. Sintió que fue acusado, presionado o que la mediación no era imparcial. Sin acuerdo, Florencia queda habilitada para iniciar demanda con pedido de daño punitivo (Art. 52 bis LDC).',
        tone: 'red',
        icon: '✗',
      };
    }
    return {
      title: 'Florencia se retiró sin acuerdo',
      summary:
        'Florencia perdió la confianza —en el mediador, en su propio abogado o en la propuesta sobre la mesa. La mediación cierra sin acuerdo. El acta habilita la vía judicial.',
      tone: 'red',
      icon: '✗',
    };
  }

  const { value: maxVal } = maxMeter(meters);

  if (maxVal <= 35) {
    return {
      title: 'Acuerdo colaborativo (gana-gana)',
      summary:
        'Aplicaste Harvard de punta a punta. Suavecito reintegra el capital íntegro a la tarjeta, asume la logística inversa y se compromete a revisar la cláusula 7.3 a futuro. Florencia desiste del daño punitivo. Las partes salen con la relación intacta y el acuerdo es ejecutable.',
      tone: 'green',
      icon: '✓',
    };
  }
  if (maxVal <= 60) {
    return {
      title: 'Acuerdo parcial',
      summary:
        'Algo se firma. Hubo reintegro pero con costos repartidos, plazos largos o cláusula 7.3 intacta. Funciona en lo práctico pero no es un acuerdo Harvard — quedó clima de regateo posicional.',
      tone: 'yellow',
      icon: '≈',
    };
  }
  return {
    title: 'Acuerdo precario',
    summary:
      'La firma se cerró a regañadientes, con tensión instalada y sensación de haber cedido bajo presión. Alta probabilidad de incumplimiento. La mediación cerró pero el conflicto sigue vivo.',
    tone: 'orange',
    icon: '!',
  };
}

const TONE_CLASSES = {
  green: 'text-brand-calm bg-brand-calm/10 border-brand-calm/40',
  yellow: 'text-yellow-300 bg-yellow-300/10 border-yellow-300/30',
  orange: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
  red: 'text-brand-angry bg-brand-angry/10 border-brand-angry/40',
};

function meterColor(value: number): string {
  const state = getEmotionalState(value);
  return ['text-brand-calm', 'text-green-300', 'text-yellow-300', 'text-orange-400', 'text-brand-angry'][state];
}

export default function ResultPage() {
  const router = useRouter();
  const [data, setData] = useState<SavedResult | null>(null);

  useEffect(() => {
    const r = loadResult();
    if (!r) {
      router.replace('/');
      return;
    }
    setData(r);
  }, [router]);

  if (!data) {
    return <main className="p-10 text-text-tertiary">Cargando…</main>;
  }

  const outcome = outcomeFor(data.meters, data.gameOver, data.gameOverReason);
  const playedPhases = PHASES.slice(0, data.decisions.length);

  const downloadSummary = () => {
    const lines: string[] = [];
    lines.push('MEDIACIÓN CON DON RICARDO — Resumen de la partida');
    lines.push('Caso: Gómez c/ Suavecito S.A. — UADE, Resolución de Controversias, 1C 2026');
    lines.push('');
    lines.push(`Modo: ${data.mode === 'learning' ? 'Aprendizaje' : 'Examen'}`);
    lines.push(`Resultado: ${outcome.title}`);
    lines.push(
      `Estado final → Clima: ${data.meters.climate} | Don Ricardo: ${data.meters.donRicardo} | Florencia: ${data.meters.florencia}`
    );
    lines.push('');
    lines.push(outcome.summary);
    lines.push('');
    lines.push('TRAZABILIDAD DE DECISIONES');
    lines.push('==========================');
    data.decisions.forEach((d) => {
      const phase = PHASES.find((p) => p.id === d.phaseId);
      const option = phase?.options.find((o) => o.id === d.optionId);
      if (!phase || !option) return;
      lines.push('');
      lines.push(`Fase ${phase.id} — ${phase.title}`);
      lines.push(`Etapa: ${stageName(phase.stage)} · Rol: ${playerRoleShort(phase.playerRole)}`);
      if (option.technique) lines.push(`Técnica: ${techniqueLabel(option.technique)}`);
      lines.push(`Elegiste ${option.id}: "${option.text}"`);
      lines.push(`Feedback: ${option.feedback}`);
      lines.push(
        `Clima: ${d.metersBefore.climate} → ${d.metersAfter.climate}  (Δ ${option.deltas.climate > 0 ? '+' : ''}${option.deltas.climate})`
      );
      lines.push(
        `Don Ricardo: ${d.metersBefore.donRicardo} → ${d.metersAfter.donRicardo}  (Δ ${option.deltas.donRicardo > 0 ? '+' : ''}${option.deltas.donRicardo})`
      );
      lines.push(
        `Florencia: ${d.metersBefore.florencia} → ${d.metersAfter.florencia}  (Δ ${option.deltas.florencia > 0 ? '+' : ''}${option.deltas.florencia})`
      );
      lines.push(`Mejor opción: ${option.isBest ? 'SÍ' : 'NO'}`);
    });

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mediacion-don-ricardo-resumen.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="max-w-4xl mx-auto px-5 md:px-8 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-3">
          Resultado de la mediación
        </div>

        <div className={`rounded-2xl border p-6 md:p-8 mb-6 ${TONE_CLASSES[outcome.tone]}`}>
          <div className="text-5xl mb-3 font-light">{outcome.icon}</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">{outcome.title}</h1>
          <p className="text-text-secondary leading-relaxed">{outcome.summary}</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <MeterFinal label="Clima" value={data.meters.climate} />
          <MeterFinal label="Don Ricardo" value={data.meters.donRicardo} />
          <MeterFinal label="Florencia" value={data.meters.florencia} />
        </div>
      </motion.div>

      <div className="h-px bg-bg-tertiary mb-8" />

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="text-text-tertiary text-xs uppercase tracking-[0.18em] mb-4">
          Tus decisiones (trazabilidad)
        </div>

        <ol className="space-y-4">
          {playedPhases.map((phase) => {
            const decision = data.decisions.find((d) => d.phaseId === phase.id);
            if (!decision) return null;
            const option = phase.options.find((o) => o.id === decision.optionId);
            if (!option) return null;

            return (
              <li
                key={phase.id}
                className="bg-bg-secondary border border-bg-accent rounded-2xl p-5"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-sm font-bold ${
                      option.isBest
                        ? 'bg-brand-calm/20 text-brand-calm'
                        : 'bg-brand-angry/15 text-brand-angry'
                    }`}
                    aria-label={option.isBest ? 'Mejor opción' : 'No fue la mejor'}
                  >
                    {option.isBest ? '✓' : '✗'}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                      <span className="text-text-tertiary text-xs uppercase tracking-wider">
                        Fase {phase.id}
                      </span>
                      <h3 className="text-text-primary font-semibold">{phase.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-text-tertiary mb-2">
                      <span>📍 {stageName(phase.stage)}</span>
                      <span>
                        {phase.playerRole === 'mediador' ? '🎯' : '⚖️'}{' '}
                        {playerRoleShort(phase.playerRole)}
                      </span>
                      {option.technique && (
                        <span>🔧 {techniqueLabel(option.technique)}</span>
                      )}
                    </div>

                    <div className="text-text-secondary text-sm mb-2">
                      <span className="text-text-tertiary">Elegiste {option.id}: </span>
                      <span className="italic">&ldquo;{option.text}&rdquo;</span>
                    </div>

                    <p className="text-text-primary text-[14px] leading-relaxed">
                      {option.feedback}
                    </p>

                    <div className="text-xs text-text-tertiary mt-2 grid grid-cols-3 gap-2">
                      <DeltaCell
                        label="Clima"
                        delta={option.deltas.climate}
                        before={decision.metersBefore.climate}
                        after={decision.metersAfter.climate}
                      />
                      <DeltaCell
                        label="D. Ricardo"
                        delta={option.deltas.donRicardo}
                        before={decision.metersBefore.donRicardo}
                        after={decision.metersAfter.donRicardo}
                      />
                      <DeltaCell
                        label="Florencia"
                        delta={option.deltas.florencia}
                        before={decision.metersBefore.florencia}
                        after={decision.metersAfter.florencia}
                      />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </motion.section>

      <div className="h-px bg-bg-tertiary my-10" />

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => router.push('/')}
          className="px-5 py-2.5 rounded-xl bg-brand-warm text-bg-primary font-semibold hover:opacity-90 transition"
        >
          Volver a jugar
        </button>
        <button
          type="button"
          onClick={downloadSummary}
          className="px-5 py-2.5 rounded-xl bg-bg-tertiary text-text-primary font-semibold hover:bg-bg-accent transition"
        >
          Exportar resumen (.txt)
        </button>
      </div>

      <footer className="mt-12 text-xs text-text-tertiary">
        Material académico — Trabajo Práctico Integrador, Resolución de Controversias
        (UADE, 1C 2026, docente Pablo Adrián Langholz). Caso ficticio basado en{' '}
        <em>Gómez c/ Suavecito S.A.</em>
      </footer>
    </main>
  );
}

function MeterFinal({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-bg-secondary border border-bg-accent rounded-xl p-3 text-center">
      <div className="text-text-tertiary text-[10px] uppercase tracking-wider mb-1">
        {label}
      </div>
      <div className={`text-2xl font-bold tabular-nums ${meterColor(value)}`}>
        {Math.round(value)}
      </div>
    </div>
  );
}

function DeltaCell({
  label,
  delta,
  before,
  after,
}: {
  label: string;
  delta: number;
  before: number;
  after: number;
}) {
  const sign = delta > 0 ? '+' : '';
  const colorClass =
    delta < 0
      ? 'text-brand-calm'
      : delta > 10
        ? 'text-brand-angry'
        : delta > 0
          ? 'text-brand-warm'
          : 'text-text-tertiary';
  return (
    <div>
      <span className="text-text-tertiary uppercase tracking-wider mr-1">{label}:</span>
      <span className={`font-semibold ${colorClass}`}>
        {sign}
        {delta}
      </span>
      <span className="text-text-tertiary/70 ml-1">
        ({before}→{after})
      </span>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import { loadResult, SavedResult } from '@/lib/storage';
import { PHASES } from '@/lib/phases';
import { getEmotionalState, getStateName } from '@/lib/types';

type Outcome = {
  title: string;
  summary: string;
  tone: 'green' | 'yellow' | 'orange' | 'red';
  icon: string;
};

function outcomeFor(anger: number, gameOver: boolean): Outcome {
  if (gameOver || anger >= 100) {
    return {
      title: 'Negociación fracasada',
      summary:
        'Don Ricardo se levantó de la mesa. No hubo acuerdo. Queda habilitada la vía judicial: denuncia en Defensa del Consumidor y/o juicio civil con pedido de daño punitivo (art. 52 bis Ley 24.240).',
      tone: 'red',
      icon: '✗',
    };
  }
  if (anger <= 35) {
    return {
      title: 'Acuerdo integral alcanzado',
      summary:
        'Don Ricardo aceptó el reemplazo por el modelo superior, una compensación parcial por las molestias y un acuerdo de confidencialidad recíproco. Ganaron los dos. Harvard puro: separaste persona y problema, fuiste a intereses, generaste opciones, usaste criterios objetivos.',
      tone: 'green',
      icon: '✓',
    };
  }
  if (anger <= 70) {
    return {
      title: 'Acuerdo parcial',
      summary:
        'Algo se firma: hubo reemplazo y una compensación menor a la pedida, con flecos abiertos sobre el posteo. Funciona en lo práctico, pero no es un acuerdo Harvard — quedó clima de regateo y resentimiento.',
      tone: 'yellow',
      icon: '≈',
    };
  }
  return {
    title: 'Acuerdo precario',
    summary:
      'Don Ricardo firmó a regañadientes, con un clima tenso y la sensación de haber cedido bajo presión. Alta chance de incumplimiento o de que pida revisión. La mediación cerró pero el conflicto sigue vivo.',
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

  const outcome = outcomeFor(data.anger, data.gameOver);
  const state = getEmotionalState(data.anger);
  const playedPhases = PHASES.slice(0, data.decisions.length);

  const downloadSummary = () => {
    const lines: string[] = [];
    lines.push('MEDIACIÓN CON DON RICARDO — Resumen de la partida');
    lines.push('UADE · Resolución de Controversias');
    lines.push('');
    lines.push(`Modo: ${data.mode === 'learning' ? 'Aprendizaje' : 'Examen'}`);
    lines.push(`Enojo final: ${data.anger} / 100 (${getStateName(state)})`);
    lines.push(`Resultado: ${outcome.title}`);
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
      lines.push(`Principio Harvard: ${phase.harvardPrinciple}`);
      lines.push(`Elegiste ${option.id}: "${option.text}"`);
      lines.push(`Feedback: ${option.feedback}`);
      lines.push(
        `Enojo: ${d.angerBefore} → ${d.angerAfter}  (Δ ${option.angerDelta > 0 ? '+' : ''}${option.angerDelta})`
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
          Resultado de la negociación
        </div>

        <div
          className={`rounded-2xl border p-6 md:p-8 mb-8 ${TONE_CLASSES[outcome.tone]}`}
        >
          <div className="text-5xl mb-3 font-light">{outcome.icon}</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">{outcome.title}</h1>
          <p className="text-text-secondary leading-relaxed mb-4">{outcome.summary}</p>
          <div className="text-sm text-text-tertiary">
            Enojo final:{' '}
            <span className="text-text-primary font-semibold">{data.anger} / 100</span>{' '}
            ({getStateName(state)})
          </div>
        </div>
      </motion.div>

      <div className="h-px bg-bg-tertiary mb-8" />

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="text-text-tertiary text-xs uppercase tracking-[0.18em] mb-4">
          Tus decisiones (trazabilidad Harvard)
        </div>

        <ol className="space-y-4">
          {playedPhases.map((phase) => {
            const decision = data.decisions.find((d) => d.phaseId === phase.id);
            if (!decision) return null;
            const option = phase.options.find((o) => o.id === decision.optionId);
            if (!option) return null;
            const delta = option.angerDelta;
            const sign = delta > 0 ? '+' : '';

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
                      {phase.meetingType === 'private' && (
                        <span className="text-[10px] uppercase tracking-wider text-badge-private bg-badge-private/15 px-1.5 py-0.5 rounded">
                          privada
                        </span>
                      )}
                    </div>
                    <div className="text-text-tertiary text-xs mb-2">
                      Principio: {phase.harvardPrinciple}
                    </div>

                    <div className="text-text-secondary text-sm mb-2">
                      <span className="text-text-tertiary">Elegiste {option.id}: </span>
                      <span className="italic">&ldquo;{option.text}&rdquo;</span>
                    </div>

                    <p className="text-text-primary text-[14px] leading-relaxed">
                      {option.feedback}
                    </p>

                    <div className="text-xs text-text-tertiary mt-2">
                      Enojo: {decision.angerBefore} → {decision.angerAfter}{' '}
                      <span
                        className={
                          delta < 0
                            ? 'text-brand-calm font-semibold'
                            : delta > 8
                              ? 'text-brand-angry font-semibold'
                              : 'text-brand-warm font-semibold'
                        }
                      >
                        ({sign}
                        {delta})
                      </span>
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
        Material académico — UADE · Resolución de Controversias. Caso ficticio.
      </footer>
    </main>
  );
}

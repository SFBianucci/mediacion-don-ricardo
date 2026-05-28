'use client';

import { motion } from 'framer-motion';
import { ACUERDO_VARIANTES, AcuerdoVariante } from '@/lib/case';

interface Props {
  optionId: string | null;
  onContinue: () => void;
}

const TONE_LABELS: Record<AcuerdoVariante['tono'], string> = {
  colaborativo: 'Acuerdo colaborativo (gana-gana)',
  parcial: 'Acuerdo parcial',
  subóptimo: 'Acuerdo subóptimo',
  precario: 'Acuerdo precario',
};

const TONE_CLASSES: Record<AcuerdoVariante['tono'], string> = {
  colaborativo: 'border-brand-calm/50 bg-brand-calm/5',
  parcial: 'border-brand-warm/40 bg-brand-warm/5',
  subóptimo: 'border-orange-400/40 bg-orange-400/5',
  precario: 'border-brand-angry/40 bg-brand-angry/5',
};

function formatHoy(): string {
  const d = new Date();
  const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];
  return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}

export default function AcuerdoFinal({ optionId, onContinue }: Props) {
  // Mapeo del id de opción de la fase de mutuo beneficio ('12A'..'12D') al id de variante 'mb-A'..'mb-D'.
  const variantKey = optionId
    ? `mb-${optionId.replace(/^\d+/, '')}`
    : 'mb-D';
  const variante = ACUERDO_VARIANTES[variantKey] ?? ACUERDO_VARIANTES['mb-D'];
  const fecha = formatHoy();

  return (
    <main className="min-h-screen pb-12">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-3">
            Acta de mediación · {TONE_LABELS[variante.tono]}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Acuerdo de mediación
          </h1>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`rounded-2xl border ${TONE_CLASSES[variante.tono]} p-6 md:p-8 leading-relaxed`}
        >
          <p className="text-text-secondary italic mb-5">
            En la Ciudad Autónoma de Buenos Aires, a los {fecha}, entre la Sra.{' '}
            <strong className="text-text-primary not-italic">Florencia GÓMEZ</strong>{' '}
            con el patrocinio de la Dra. LÓPEZ, y{' '}
            <strong className="text-text-primary not-italic">SUAVECITO S.A.</strong>{' '}
            representada por Ricardo ALMEYDA con el patrocinio del Dr. PÉREZ, en
            presencia del/la mediador/a interviniente, se conviene:
          </p>

          <p className="text-text-primary mb-5">{variante.preludio}</p>

          <ol className="space-y-3 text-text-primary">
            {variante.clausulas.map((c, i) => (
              <li
                key={i}
                className="bg-bg-secondary/50 border border-bg-accent rounded-lg p-3 text-[14px] md:text-[15px]"
              >
                {c}
              </li>
            ))}
          </ol>

          <div className="mt-6 pt-5 border-t border-bg-accent text-text-tertiary text-sm italic">
            {variante.cierre}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-xs text-text-tertiary">
            <div>
              <div className="border-t border-text-tertiary/30 pt-2">Florencia GÓMEZ</div>
              <div className="text-[10px]">requirente</div>
            </div>
            <div>
              <div className="border-t border-text-tertiary/30 pt-2">R. ALMEYDA</div>
              <div className="text-[10px]">por SUAVECITO S.A.</div>
            </div>
            <div>
              <div className="border-t border-text-tertiary/30 pt-2">Mediador/a</div>
              <div className="text-[10px]">Reg. Nac. de Mediación</div>
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex justify-end"
        >
          <button
            type="button"
            onClick={onContinue}
            className="px-6 py-3 rounded-xl bg-brand-warm text-bg-primary font-semibold hover:opacity-90 transition"
          >
            Ver resultado completo →
          </button>
        </motion.div>
      </div>
    </main>
  );
}

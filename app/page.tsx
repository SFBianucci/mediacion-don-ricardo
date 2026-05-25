'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CASE_BRIEFING } from '@/lib/case';
import { GameMode } from '@/lib/types';
import { clearResult } from '@/lib/storage';

export default function HomePage() {
  const router = useRouter();

  const start = (mode: GameMode) => {
    clearResult();
    router.push(`/game?mode=${mode}`);
  };

  return (
    <main className="max-w-4xl mx-auto px-5 md:px-8 py-10 md:py-16">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-text-tertiary text-xs uppercase tracking-[0.2em] mb-3">
          UADE · Resolución de Controversias
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Mediación con Don Ricardo
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          Una simulación interactiva de una audiencia de mediación prejudicial,
          aplicando el método de negociación de Harvard.
        </p>
      </motion.header>

      <div className="h-px bg-bg-tertiary my-10" />

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-8"
      >
        <Block label="El caso">
          <p className="text-text-secondary leading-relaxed">
            <strong className="text-text-primary">{CASE_BRIEFING.title}.</strong>{' '}
            {CASE_BRIEFING.modality}.
          </p>
          <ul className="mt-3 space-y-2 text-[15px] text-text-secondary leading-relaxed list-disc list-outside ml-5">
            {CASE_BRIEFING.facts.slice(0, 5).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </Block>

        <Block label="Tu rol">
          <p className="text-text-secondary leading-relaxed">
            Sos <strong className="text-text-primary">{CASE_BRIEFING.yourRole}</strong>.
            Del otro lado de la mesa está <strong className="text-text-primary">{CASE_BRIEFING.opposite.nickname}</strong>,{' '}
            {CASE_BRIEFING.opposite.role}. {CASE_BRIEFING.opposite.company}
          </p>
        </Block>

        <Block label="Objetivo">
          <p className="text-text-secondary leading-relaxed">
            Llegar a un acuerdo con Don Ricardo en 8 fases, aplicando los principios del
            método Harvard: separar persona y problema, concentrarse en intereses,
            generar opciones de mutuo beneficio y usar criterios objetivos.
          </p>
          <p className="text-text-tertiary text-sm mt-2">
            Vas a tomar 8 decisiones. Cada una sube o baja el enojo de Don Ricardo. Si
            llega a 100, se levanta y no hay acuerdo.
          </p>
        </Block>
      </motion.section>

      <div className="h-px bg-bg-tertiary my-10" />

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="text-text-tertiary text-xs uppercase tracking-[0.18em] mb-4">
          Elegí un modo
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <ModeCard
            title="Aprendizaje"
            icon="📘"
            description="Te muestro el principio Harvard de cada opción ANTES de elegir. Ideal para entender el método mientras jugás."
            cta="Empezar en modo Aprendizaje"
            onClick={() => start('learning')}
            accent="brand-warm"
          />
          <ModeCard
            title="Examen"
            icon="🎓"
            description="Sin hints. Elegís a ciegas. El feedback completo aparece al final, fase por fase."
            cta="Empezar en modo Examen"
            onClick={() => start('exam')}
            accent="brand-calm"
          />
        </div>
      </motion.section>

      <footer className="mt-16 pt-6 border-t border-bg-tertiary text-xs text-text-tertiary">
        Material académico. Caso ficticio. Basado en Fisher, Ury & Patton —{' '}
        <em>Sí... ¡de acuerdo!</em>
      </footer>
    </main>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-text-tertiary text-xs uppercase tracking-[0.18em] mb-2">
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}

function ModeCard({
  title,
  icon,
  description,
  cta,
  onClick,
  accent,
}: {
  title: string;
  icon: string;
  description: string;
  cta: string;
  onClick: () => void;
  accent: 'brand-warm' | 'brand-calm';
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        text-left p-6 rounded-2xl bg-bg-secondary border border-bg-accent
        hover:border-${accent} transition group
      `}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <div className="text-xl font-bold mb-2">{title}</div>
      <p className="text-text-secondary text-sm leading-relaxed mb-5">{description}</p>
      <div className={`text-sm font-semibold text-${accent} flex items-center gap-1`}>
        {cta} <span className="group-hover:translate-x-0.5 transition">→</span>
      </div>
    </button>
  );
}

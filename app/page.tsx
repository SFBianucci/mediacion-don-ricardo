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
          UADE · Resolución de Controversias · 1C 2026
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Mediación con Don Ricardo
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl">
          Simulación interactiva de una audiencia de mediación prejudicial obligatoria
          (Ley 26.589) sobre el derecho de arrepentimiento en el comercio electrónico,
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
            {CASE_BRIEFING.modality}. Reclamo total:{' '}
            <strong className="text-text-primary">
              ${CASE_BRIEFING.claim.total.toLocaleString('es-AR')}
            </strong>{' '}
            (capital + daño punitivo Art. 52 bis LDC).
          </p>
          <ul className="mt-3 space-y-2 text-[15px] text-text-secondary leading-relaxed list-disc list-outside ml-5">
            {CASE_BRIEFING.facts.slice(0, 6).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </Block>

        <Block label="Tu rol">
          <p className="text-text-secondary leading-relaxed">
            Sos <strong className="text-text-primary">{CASE_BRIEFING.yourRole}</strong>.
            Del otro lado de la mesa están{' '}
            <strong className="text-text-primary">
              {CASE_BRIEFING.opposite.donRicardo.nickname}
            </strong>{' '}
            ({CASE_BRIEFING.opposite.donRicardo.role}) y{' '}
            <strong className="text-text-primary">
              {CASE_BRIEFING.opposite.drPerez.name}
            </strong>{' '}
            ({CASE_BRIEFING.opposite.drPerez.role}). Don Ricardo lleva el costado
            emocional y de negocio; el Dr. Pérez aporta el blindaje técnico-jurídico.
          </p>
        </Block>

        <Block label="Marco normativo central">
          <p className="text-text-secondary leading-relaxed">
            Art. 42 CN · Arts. 1092, 1093, 1097, 1100, 1105-1110, 1119 CCyCN · Arts. 4,
            8 bis, 34, 37, 52 bis, 53, 55, 65 de la Ley 24.240 · Ley 26.589 (mediación
            prejudicial obligatoria) · Ley 6.286/2020 (fuero del Consumidor CABA).
          </p>
        </Block>

        <Block label="Objetivo">
          <p className="text-text-secondary leading-relaxed">
            Llegar a un acuerdo Harvard en <strong>15 fases</strong>: discurso de
            apertura, reuniones conjuntas, <strong>2 caucus con Florencia</strong> (tu
            propia clienta) y <strong>2 caucus con Suavecito</strong>, replanteo,
            criterios objetivos, brainstorming de opciones y cierre con MAAN.
          </p>
          <p className="text-text-tertiary text-sm mt-2">
            Vas a tomar 15 decisiones. Cada una mueve el medidor de tensión: con
            Suavecito mide el enojo de Don Ricardo y Dr. Pérez; en los caucus con
            Florencia mide cuánto está perdiendo paciencia tu propia clienta. Si llega
            a 100, se levanta y no hay acuerdo.
          </p>
          <p className="text-text-tertiary text-xs mt-3">
            En cada fase las cuatro opciones se barajan: la &ldquo;mejor&rdquo;
            respuesta no está siempre en la misma posición. Pensá antes de elegir.
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
            description="Te muestro el principio Harvard y el tipo de pregunta ANTES de elegir. Ideal para entender el método mientras jugás."
            cta="Empezar en modo Aprendizaje"
            onClick={() => start('learning')}
            accent="brand-warm"
          />
          <ModeCard
            title="Examen"
            icon="🎓"
            description="Sin hints. Elegís a ciegas, con las opciones barajadas. El feedback completo aparece al final, fase por fase."
            cta="Empezar en modo Examen"
            onClick={() => start('exam')}
            accent="brand-calm"
          />
        </div>
      </motion.section>

      <footer className="mt-16 pt-6 border-t border-bg-tertiary text-xs text-text-tertiary">
        Material académico — Trabajo Práctico Integrador, Resolución de Controversias
        (UADE, 1C 2026, docente Pablo Adrián Langholz). Caso ficticio basado en el
        TP &ldquo;Resolución de controversias y compras online&rdquo;. Método Harvard:{' '}
        <em>Fisher, Ury &amp; Patton — Sí… ¡de acuerdo!</em>
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

'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CASE_BRIEFING, PROCESO_ETAPAS } from '@/lib/case';
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
            La mediación es <strong>autocomposición indirecta asistida</strong>: hay un
            tercero que ayuda pero no decide. En el grueso del juego{' '}
            <strong className="text-role-mediador">
              sos el/la mediador/a — imparcial
            </strong>
            : hacés el discurso de apertura, conducís la reunión conjunta, convocás
            las reuniones privadas con cada parte, indagás intereses, replanteás el
            problema y facilitás el brainstorming. En tres fases puntuales —cuando el
            Dr. Pérez ataca con los T&amp;C, cuando hay que tirar la propuesta de
            cierre y al cerrar con MAAN—{' '}
            <strong className="text-role-abogada">
              te ponés del lado de Florencia como su abogado/a
            </strong>
            , aplicando el método Harvard (ni suave ni duro: duro con el problema,
            suave con las personas).
          </p>
          <p className="text-text-secondary leading-relaxed mt-3">
            Del otro lado están{' '}
            <strong className="text-text-primary">
              {CASE_BRIEFING.parties.requeridoDueno.nickname}
            </strong>{' '}
            ({CASE_BRIEFING.parties.requeridoDueno.role}) y{' '}
            <strong className="text-text-primary">
              {CASE_BRIEFING.parties.requeridoLetrado.name}
            </strong>{' '}
            ({CASE_BRIEFING.parties.requeridoLetrado.role}). La requirente es{' '}
            <strong className="text-text-primary">
              {CASE_BRIEFING.parties.requirente.name}
            </strong>
            , acompañada por su letrada.
          </p>
        </Block>

        <Block label="Las 8 etapas del proceso">
          <ul className="space-y-1.5 text-[14px] text-text-secondary leading-relaxed">
            {PROCESO_ETAPAS.map((e) => (
              <li key={e.key}>
                <strong className="text-text-primary">
                  {e.num}. {e.label}.
                </strong>{' '}
                <span className="text-text-tertiary">{e.desc}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Los tres indicadores">
          <p className="text-text-secondary leading-relaxed">
            Vas a manejar 3 medidores en paralelo:
          </p>
          <ul className="mt-2 space-y-1.5 text-[14px] text-text-secondary leading-relaxed list-disc list-outside ml-5">
            <li>
              <strong className="text-meter-climate">Clima del proceso</strong> — el
              ambiente general. Sube si perdés imparcialidad, violás confidencialidad
              o escalás como abogado/a.
            </li>
            <li>
              <strong className="text-meter-don">Don Ricardo</strong> — cómo se siente
              el dueño de Suavecito. Sube con malos parafraseos, acusaciones o
              presión.
            </li>
            <li>
              <strong className="text-meter-florencia">Florencia</strong> — cómo se
              siente la requirente. Sube si la subestimás, la mal informás o le
              ignorás el interés real.
            </li>
          </ul>
          <p className="text-text-tertiary text-sm mt-3">
            Son 10 decisiones a lo largo del proceso. Si cualquiera de los tres
            medidores llega a 100, la mediación se cae. Cada fase baraja sus 4
            opciones: la mejor respuesta no está siempre en la misma posición, y
            las distractoras suenan razonables — la diferencia está en sutilezas.
            Al final, si llegás a acuerdo, vas a leer el acta firmada con sus
            cláusulas.
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
            description="Te muestro la herramienta o el estilo de cada opción ANTES de elegir (pregunta abierta, parafraseo, agente de la realidad, Harvard, negociador duro…). Ideal para entender el método mientras jugás."
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

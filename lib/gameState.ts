'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import { PHASES } from './phases';
import { Decision, GameMode, GameOverReason, Meters } from './types';

const INITIAL_METERS: Meters = {
  climate: 25,
  donRicardo: 30,
  florencia: 20,
};

function clamp(n: number): number {
  return Math.max(0, Math.min(100, n));
}

export function useGameState(mode: GameMode) {
  const [currentPhaseIdx, setCurrentPhaseIdx] = useState(0);
  const [meters, setMeters] = useState<Meters>(INITIAL_METERS);
  const [decisions, setDecisions] = useState<Decision[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverReason, setGameOverReason] = useState<GameOverReason>(null);
  const [showingAcuerdo, setShowingAcuerdo] = useState(false);
  const [finished, setFinished] = useState(false);
  const [lastChoiceId, setLastChoiceId] = useState<string | null>(null);

  const currentPhase = PHASES[currentPhaseIdx];
  const entryAppliedRef = useRef<Set<number>>(new Set());

  // Aplicar entryDeltas al entrar a una fase (una sola vez por fase).
  // No dispara game-over: la "explosión" es el setup, no el final.
  useEffect(() => {
    const phase = PHASES[currentPhaseIdx];
    if (!phase.entryDeltas) return;
    if (entryAppliedRef.current.has(phase.id)) return;
    entryAppliedRef.current.add(phase.id);
    setMeters((m) => ({
      climate: clamp(m.climate + phase.entryDeltas!.climate),
      donRicardo: clamp(m.donRicardo + phase.entryDeltas!.donRicardo),
      florencia: clamp(m.florencia + phase.entryDeltas!.florencia),
    }));
  }, [currentPhaseIdx]);

  const chooseOption = useCallback(
    (optionId: string) => {
      const option = currentPhase.options.find((o) => o.id === optionId);
      if (!option) return;
      const before: Meters = { ...meters };
      const after: Meters = {
        climate: clamp(meters.climate + option.deltas.climate),
        donRicardo: clamp(meters.donRicardo + option.deltas.donRicardo),
        florencia: clamp(meters.florencia + option.deltas.florencia),
      };
      setMeters(after);
      setSelectedOptionId(optionId);
      setShowFeedback(true);
      setLastChoiceId(optionId);
      setDecisions((d) => [
        ...d,
        {
          phaseId: currentPhase.id,
          optionId,
          metersBefore: before,
          metersAfter: after,
        },
      ]);
      if (after.climate >= 100) {
        setGameOver(true);
        setGameOverReason('climate');
      } else if (after.donRicardo >= 100) {
        setGameOver(true);
        setGameOverReason('donRicardo');
      } else if (after.florencia >= 100) {
        setGameOver(true);
        setGameOverReason('florencia');
      }
    },
    [meters, currentPhase]
  );

  const nextPhase = useCallback(() => {
    setShowFeedback(false);
    setSelectedOptionId(null);
    if (currentPhaseIdx < PHASES.length - 1) {
      setCurrentPhaseIdx((i) => i + 1);
    } else {
      // Última fase terminada sin game-over → mostrar pantalla del acuerdo
      setShowingAcuerdo(true);
    }
  }, [currentPhaseIdx]);

  const proceedToResult = useCallback(() => {
    setShowingAcuerdo(false);
    setFinished(true);
  }, []);

  return {
    mode,
    currentPhase,
    currentPhaseIdx,
    meters,
    decisions,
    showFeedback,
    selectedOptionId,
    gameOver,
    gameOverReason,
    showingAcuerdo,
    finished,
    lastChoiceId,
    chooseOption,
    nextPhase,
    proceedToResult,
    progress: { current: currentPhaseIdx + 1, total: PHASES.length },
  };
}

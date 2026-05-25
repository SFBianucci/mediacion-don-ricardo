'use client';
import { useState, useCallback } from 'react';
import { PHASES } from './phases';
import { Decision, GameMode } from './types';

export function useGameState(mode: GameMode) {
  const [currentPhaseIdx, setCurrentPhaseIdx] = useState(0);
  const [anger, setAnger] = useState(30);
  const [decisions, setDecisions] = useState<Decision[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [finished, setFinished] = useState(false);

  const currentPhase = PHASES[currentPhaseIdx];

  const chooseOption = useCallback(
    (optionId: string) => {
      const option = currentPhase.options.find((o) => o.id === optionId);
      if (!option) return;
      const angerBefore = anger;
      const angerAfter = Math.max(0, Math.min(100, anger + option.angerDelta));
      setAnger(angerAfter);
      setSelectedOptionId(optionId);
      setShowFeedback(true);
      setDecisions((d) => [
        ...d,
        { phaseId: currentPhase.id, optionId, angerBefore, angerAfter },
      ]);
      if (angerAfter >= 100) setGameOver(true);
    },
    [anger, currentPhase]
  );

  const nextPhase = useCallback(() => {
    setShowFeedback(false);
    setSelectedOptionId(null);
    if (currentPhaseIdx < PHASES.length - 1) {
      setCurrentPhaseIdx((i) => i + 1);
    } else {
      setFinished(true);
    }
  }, [currentPhaseIdx]);

  return {
    mode,
    currentPhase,
    currentPhaseIdx,
    anger,
    decisions,
    showFeedback,
    selectedOptionId,
    gameOver,
    finished,
    chooseOption,
    nextPhase,
    progress: { current: currentPhaseIdx + 1, total: PHASES.length },
  };
}

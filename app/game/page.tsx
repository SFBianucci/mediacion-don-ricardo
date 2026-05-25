'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import Avatar from '@/components/Avatar/Avatar';
import AngerMeter from '@/components/AngerMeter';
import DialogueBox from '@/components/DialogueBox';
import OptionsPanel from '@/components/OptionsPanel';
import MeetingBadge from '@/components/MeetingBadge';
import PhaseProgress from '@/components/PhaseProgress';
import FeedbackCard from '@/components/FeedbackCard';
import PrivateMeetingModal from '@/components/PrivateMeetingModal';

import { useGameState } from '@/lib/gameState';
import { GameMode, getEmotionalState } from '@/lib/types';
import { saveResult } from '@/lib/storage';

function GameInner() {
  const router = useRouter();
  const sp = useSearchParams();
  const modeParam = (sp.get('mode') === 'exam' ? 'exam' : 'learning') as GameMode;

  const game = useGameState(modeParam);
  const [showPrivateModal, setShowPrivateModal] = useState(false);
  const seenPrivateRef = useRef(false);
  const [showLeaving, setShowLeaving] = useState(false);

  // Show private modal first time private meeting starts
  useEffect(() => {
    if (game.currentPhase.meetingType === 'private' && !seenPrivateRef.current) {
      seenPrivateRef.current = true;
      setShowPrivateModal(true);
    }
  }, [game.currentPhase.meetingType]);

  // Game over via anger 100 → animate Don Ricardo leaving, then navigate
  useEffect(() => {
    if (game.gameOver) {
      const t1 = setTimeout(() => setShowLeaving(true), 1100);
      const t2 = setTimeout(() => {
        saveResult({
          mode: game.mode,
          anger: game.anger,
          decisions: game.decisions,
          gameOver: true,
        });
        router.push('/result');
      }, 3300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [game.gameOver, game.mode, game.anger, game.decisions, router]);

  // Finished all 8 phases → navigate
  useEffect(() => {
    if (game.finished) {
      saveResult({
        mode: game.mode,
        anger: game.anger,
        decisions: game.decisions,
        gameOver: false,
      });
      router.push('/result');
    }
  }, [game.finished, game.mode, game.anger, game.decisions, router]);

  const state = getEmotionalState(game.anger);
  const selectedOption = game.selectedOptionId
    ? game.currentPhase.options.find((o) => o.id === game.selectedOptionId)
    : null;
  const isLastPhase = game.currentPhaseIdx === 7;

  const angerBefore =
    game.decisions[game.decisions.length - 1]?.angerBefore ?? game.anger;

  return (
    <main className="min-h-screen pb-12">
      <PrivateMeetingModal
        open={showPrivateModal}
        onClose={() => setShowPrivateModal(false)}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 md:py-7">
        {/* Top bar */}
        <div className="flex flex-wrap items-center gap-3 justify-between mb-5">
          <PhaseProgress current={game.progress.current} total={game.progress.total} />
          <div className="flex items-center gap-3">
            <MeetingBadge type={game.currentPhase.meetingType} />
            <span className="hidden md:inline text-text-tertiary text-xs uppercase tracking-wider">
              Modo: {game.mode === 'learning' ? 'Aprendizaje' : 'Examen'}
            </span>
          </div>
        </div>

        {/* Phase title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={game.currentPhase.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-5"
          >
            <h1 className="text-xl md:text-2xl font-bold">
              {game.currentPhase.title}
            </h1>
            {game.mode === 'learning' && (
              <p className="text-text-tertiary text-sm mt-1">
                Principio: {game.currentPhase.harvardPrinciple}
              </p>
            )}
            {game.currentPhase.privateContext && (
              <p className="text-badge-private/90 text-sm mt-1 italic">
                {game.currentPhase.privateContext}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Avatar + Meter */}
        <div className="flex gap-3 md:gap-5 mb-5">
          <AngerMeter anger={game.anger} />
          <div className="flex-1 aspect-[16/10] md:aspect-[16/9] relative">
            <Avatar
              state={state}
              meetingType={game.currentPhase.meetingType}
              leaving={showLeaving}
            />
          </div>
        </div>

        {/* Dialogue */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`dialog-${game.currentPhase.id}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <DialogueBox text={game.currentPhase.donRicardoLine} state={state} />
          </motion.div>
        </AnimatePresence>

        {/* Options or Feedback */}
        <div className="mt-5">
          {!game.showFeedback && !game.gameOver && (
            <OptionsPanel
              options={game.currentPhase.options}
              mode={game.mode}
              harvardPrinciple={game.currentPhase.harvardPrinciple}
              selectedId={game.selectedOptionId}
              disabled={game.showFeedback}
              onChoose={game.chooseOption}
            />
          )}

          {selectedOption && (
            <FeedbackCard
              option={selectedOption}
              angerBefore={angerBefore}
              angerAfter={game.anger}
              onContinue={() => {
                if (game.gameOver) return;
                game.nextPhase();
              }}
              isLastPhase={isLastPhase}
              forceGameOver={game.gameOver}
            />
          )}

          {game.gameOver && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-brand-angry mt-4 font-medium"
            >
              Don Ricardo se levanta de la mesa…
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function GamePage() {
  return (
    <Suspense fallback={<div className="p-10 text-text-tertiary">Cargando…</div>}>
      <GameInner />
    </Suspense>
  );
}

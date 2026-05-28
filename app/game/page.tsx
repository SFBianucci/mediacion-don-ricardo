'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import MediationStage from '@/components/Avatar/MediationStage';
import MeterPanel from '@/components/MeterPanel';
import DialogueBox from '@/components/DialogueBox';
import OptionsPanel from '@/components/OptionsPanel';
import MeetingBadge from '@/components/MeetingBadge';
import StageBadge from '@/components/StageBadge';
import RoleBanner from '@/components/RoleBanner';
import PhaseProgress from '@/components/PhaseProgress';
import FeedbackCard from '@/components/FeedbackCard';
import PrivateMeetingModal from '@/components/PrivateMeetingModal';

import { useGameState } from '@/lib/gameState';
import { PHASES } from '@/lib/phases';
import { GameMode, MeetingType, getEmotionalState, isPrivate } from '@/lib/types';
import { saveResult } from '@/lib/storage';

function GameInner() {
  const router = useRouter();
  const sp = useSearchParams();
  const modeParam = (sp.get('mode') === 'exam' ? 'exam' : 'learning') as GameMode;

  const game = useGameState(modeParam);
  const [privateModalFor, setPrivateModalFor] = useState<MeetingType | null>(null);
  const lastPrivateRef = useRef<MeetingType | null>(null);
  const [showLeaving, setShowLeaving] = useState(false);

  // Modal de reunión privada cada vez que se entra a un tipo distinto
  useEffect(() => {
    const mt = game.currentPhase.meetingType;
    if (isPrivate(mt) && lastPrivateRef.current !== mt) {
      lastPrivateRef.current = mt;
      setPrivateModalFor(mt);
    }
    if (mt === 'joint') {
      lastPrivateRef.current = null;
    }
  }, [game.currentPhase.meetingType]);

  // Game over → animar salida y navegar
  useEffect(() => {
    if (game.gameOver) {
      const t1 = setTimeout(() => setShowLeaving(true), 1100);
      const t2 = setTimeout(() => {
        saveResult({
          mode: game.mode,
          meters: game.meters,
          decisions: game.decisions,
          gameOver: true,
          gameOverReason: game.gameOverReason,
        });
        router.push('/result');
      }, 3300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [game.gameOver, game.gameOverReason, game.mode, game.meters, game.decisions, router]);

  // Finished
  useEffect(() => {
    if (game.finished) {
      saveResult({
        mode: game.mode,
        meters: game.meters,
        decisions: game.decisions,
        gameOver: false,
        gameOverReason: null,
      });
      router.push('/result');
    }
  }, [game.finished, game.mode, game.meters, game.decisions, router]);

  const isMediatorSpeaker = game.currentPhase.speaker === 'mediator';
  // Para el estado emocional del avatar de la persona que habla — usamos donRicardo si habla él o el Dr. Pérez,
  // y el de Florencia si habla ella. Para el mediador no aplica.
  const speakerStateValue =
    game.currentPhase.speaker === 'florencia'
      ? game.meters.florencia
      : game.meters.donRicardo;
  const avatarState = getEmotionalState(speakerStateValue);

  const selectedOption = game.selectedOptionId
    ? game.currentPhase.options.find((o) => o.id === game.selectedOptionId)
    : null;
  const isLastPhase = game.currentPhaseIdx === PHASES.length - 1;

  const lastDecision = game.decisions[game.decisions.length - 1];
  const metersBefore = lastDecision?.metersBefore ?? game.meters;
  const metersAfter = lastDecision?.metersAfter ?? game.meters;

  const dialogueText = isMediatorSpeaker
    ? game.currentPhase.situation ?? ''
    : game.currentPhase.speakerLine ?? '';

  return (
    <main className="min-h-screen pb-12">
      <PrivateMeetingModal
        open={privateModalFor !== null}
        meetingType={privateModalFor ?? 'joint'}
        onClose={() => setPrivateModalFor(null)}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 md:py-7">
        {/* Top bar */}
        <div className="flex flex-wrap items-center gap-3 justify-between mb-4">
          <PhaseProgress current={game.progress.current} total={game.progress.total} />
          <div className="flex items-center gap-3">
            <MeetingBadge type={game.currentPhase.meetingType} />
            <span className="hidden md:inline text-text-tertiary text-xs uppercase tracking-wider">
              Modo: {game.mode === 'learning' ? 'Aprendizaje' : 'Examen'}
            </span>
          </div>
        </div>

        {/* Stage badge + Role banner */}
        <div className="grid md:grid-cols-[1fr_auto] gap-3 mb-4">
          <StageBadge stage={game.currentPhase.stage} />
          <RoleBanner role={game.currentPhase.playerRole} />
        </div>

        {/* Phase title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={game.currentPhase.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-4"
          >
            <h1 className="text-xl md:text-2xl font-bold">{game.currentPhase.title}</h1>
            {game.currentPhase.privateContext && (
              <p
                className={`text-sm mt-1 italic ${
                  game.currentPhase.meetingType === 'private-florencia'
                    ? 'text-badge-private-client/90'
                    : 'text-badge-private/90'
                }`}
              >
                {game.currentPhase.privateContext}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stage + Meter */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-5">
          <div className="md:order-2 md:w-[280px] flex-shrink-0">
            <MeterPanel meters={game.meters} meetingType={game.currentPhase.meetingType} />
          </div>
          <div className="md:order-1 md:flex-1 aspect-[16/10] md:aspect-[21/9] relative">
            <MediationStage
              state={avatarState}
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
            <DialogueBox
              text={dialogueText}
              state={isMediatorSpeaker ? undefined : avatarState}
              speaker={game.currentPhase.speaker}
              isSituation={isMediatorSpeaker}
            />
          </motion.div>
        </AnimatePresence>

        {/* Options or Feedback */}
        <div className="mt-5">
          {!game.showFeedback && !game.gameOver && (
            <OptionsPanel
              options={game.currentPhase.options}
              phaseId={game.currentPhase.id}
              mode={game.mode}
              selectedId={game.selectedOptionId}
              disabled={game.showFeedback}
              onChoose={game.chooseOption}
            />
          )}

          {selectedOption && (
            <FeedbackCard
              option={selectedOption}
              metersBefore={metersBefore}
              metersAfter={metersAfter}
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
              {game.gameOverReason === 'climate' &&
                'El clima del proceso se rompió. La mediación se cae.'}
              {game.gameOverReason === 'donRicardo' &&
                'Don Ricardo se levanta de la mesa.'}
              {game.gameOverReason === 'florencia' &&
                'Florencia perdió la confianza y se retira.'}
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

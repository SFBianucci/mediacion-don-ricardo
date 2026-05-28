'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { EmotionalState, MeetingType } from '@/lib/types';
import Avatar from './Avatar';
import FlorenciaAvatar from './FlorenciaAvatar';

interface Props {
  state: EmotionalState;
  meetingType: MeetingType;
  leaving?: boolean;
}

export default function MediationStage({ state, meetingType, leaving }: Props) {
  if (meetingType === 'private-florencia') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="florencia-stage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <FlorenciaAvatar state={state} leaving={leaving} />
        </motion.div>
      </AnimatePresence>
    );
  }

  // Conjunta o privada con Suavecito: solo Don Ricardo en el escenario.
  // El Dr. Pérez sigue interviniendo en el DialogueBox cuando le toca hablar.
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="suavecito-stage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <Avatar state={state} meetingType={meetingType} leaving={leaving} />
      </motion.div>
    </AnimatePresence>
  );
}

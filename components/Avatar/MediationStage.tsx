'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { EmotionalState, MeetingType } from '@/lib/types';
import Avatar from './Avatar';
import DrPerezAvatar from './DrPerezAvatar';
import FlorenciaAvatar from './FlorenciaAvatar';

interface Props {
  state: EmotionalState;
  meetingType: MeetingType;
  leaving?: boolean;
}

export default function MediationStage({ state, meetingType, leaving }: Props) {
  if (meetingType === 'private-florencia') {
    return (
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
    );
  }

  // Conjunta o privada con Suavecito: Don Ricardo + Dr. Pérez lado a lado
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="suavecito-stage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col md:flex-row gap-2 md:gap-3"
      >
        <div className="flex-1 min-h-0">
          <Avatar state={state} meetingType={meetingType} leaving={leaving} />
        </div>
        <div className="flex-1 min-h-0">
          <DrPerezAvatar state={state} meetingType={meetingType} leaving={leaving} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

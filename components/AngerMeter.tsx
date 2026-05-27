'use client';

import { motion } from 'framer-motion';
import {
  EmotionalState,
  MeetingType,
  getEmotionalState,
  getStateName,
  getStateNameForFlorencia,
} from '@/lib/types';

interface Props {
  anger: number;
  meetingType: MeetingType;
}

function colorFor(state: EmotionalState): string {
  return ['#5dcaa5', '#a3d97f', '#f0c454', '#f08a4a', '#e24b4a'][state];
}

export default function AngerMeter({ anger, meetingType }: Props) {
  const isClient = meetingType === 'private-florencia';
  const state = getEmotionalState(anger);
  const color = colorFor(state);
  const name = isClient ? getStateNameForFlorencia(state) : getStateName(state);
  const heading = isClient ? 'TENSIÓN' : 'ENOJO';

  return (
    <div className="flex flex-col items-center bg-bg-secondary rounded-2xl p-4 w-24 md:w-28 select-none">
      <div className="text-text-tertiary text-[10px] tracking-[0.15em] font-semibold mb-1">
        {heading}
      </div>
      <div className="text-text-tertiary text-[9px] tracking-wide mb-2 text-center leading-tight">
        {isClient ? 'con tu clienta' : 'de la contraparte'}
      </div>

      <div className="relative w-10 h-52 md:h-60 bg-bg-tertiary rounded-full overflow-hidden">
        {[20, 40, 60, 80].map((m) => (
          <div
            key={m}
            className="absolute left-0 right-0 h-px bg-white/10"
            style={{ bottom: `${m}%` }}
          />
        ))}
        <motion.div
          className="absolute bottom-0 left-0 right-0 rounded-full"
          initial={false}
          animate={{ height: `${anger}%`, backgroundColor: color }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="text-2xl md:text-3xl font-bold mt-3 tabular-nums"
        animate={{ color }}
        transition={{ duration: 0.5 }}
      >
        {Math.round(anger)}
      </motion.div>
      <div className="text-text-tertiary text-[10px] mt-1 tracking-wider uppercase text-center leading-tight">
        {name}
      </div>
    </div>
  );
}

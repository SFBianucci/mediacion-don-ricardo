'use client';

import { motion } from 'framer-motion';
import { MeetingType } from '@/lib/types';

interface Props {
  type: MeetingType;
}

export default function MeetingBadge({ type }: Props) {
  const isPrivate = type === 'private';
  return (
    <motion.div
      key={type}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium
        ${isPrivate ? 'bg-badge-private/15 text-badge-private border border-badge-private/40' : 'bg-badge-joint/15 text-badge-joint border border-badge-joint/40'}
      `}
      title={
        isPrivate
          ? 'Reunión privada: el mediador habla por separado con cada parte para explorar intereses.'
          : 'Reunión conjunta: las dos partes presentes en la mesa.'
      }
    >
      {isPrivate ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M 8 11 V 7 a 4 4 0 0 1 8 0 v 4" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="9" cy="8" r="3.5" />
          <circle cx="17" cy="9" r="2.8" />
          <path d="M 2 20 v -2 a 4 4 0 0 1 4 -4 h 6 a 4 4 0 0 1 4 4 v 2" />
          <path d="M 16 20 v -1.5 a 3 3 0 0 1 3 -3 h 0 a 3 3 0 0 1 3 3 V 20" />
        </svg>
      )}
      {isPrivate ? 'Reunión privada' : 'Reunión conjunta'}
    </motion.div>
  );
}

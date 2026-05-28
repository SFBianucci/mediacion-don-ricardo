'use client';

import { motion } from 'framer-motion';
import { MeetingType } from '@/lib/types';

interface Props {
  type: MeetingType;
}

const CONFIG: Record<
  MeetingType,
  {
    label: string;
    tooltip: string;
    classes: string;
    icon: 'people' | 'lock' | 'client';
  }
> = {
  joint: {
    label: 'Reunión conjunta',
    tooltip: 'Reunión conjunta: las dos partes presentes en la mesa.',
    classes:
      'bg-badge-joint/15 text-badge-joint border border-badge-joint/40',
    icon: 'people',
  },
  'private-suavecito': {
    label: 'Reunión privada · Suavecito',
    tooltip:
      'Reunión privada con Suavecito: el mediador habla aparte con Don Ricardo y Dr. Pérez para explorar intereses.',
    classes:
      'bg-badge-private/15 text-badge-private border border-badge-private/40',
    icon: 'lock',
  },
  'private-florencia': {
    label: 'Reunión privada · con tu clienta',
    tooltip:
      'Reunión privada con Florencia: el mediador habla aparte para explorar intereses reales y MAAN.',
    classes:
      'bg-badge-private-client/15 text-badge-private-client border border-badge-private-client/40',
    icon: 'client',
  },
};

export default function MeetingBadge({ type }: Props) {
  const cfg = CONFIG[type];
  return (
    <motion.div
      key={type}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium ${cfg.classes}`}
      title={cfg.tooltip}
    >
      {cfg.icon === 'lock' && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M 8 11 V 7 a 4 4 0 0 1 8 0 v 4" />
        </svg>
      )}
      {cfg.icon === 'people' && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="9" cy="8" r="3.5" />
          <circle cx="17" cy="9" r="2.8" />
          <path d="M 2 20 v -2 a 4 4 0 0 1 4 -4 h 6 a 4 4 0 0 1 4 4 v 2" />
          <path d="M 16 20 v -1.5 a 3 3 0 0 1 3 -3 h 0 a 3 3 0 0 1 3 3 V 20" />
        </svg>
      )}
      {cfg.icon === 'client' && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="8" r="4" />
          <path d="M 4 21 v -1 a 6 6 0 0 1 6 -6 h 4 a 6 6 0 0 1 6 6 v 1" />
          <path d="M 8 12 l 1 2 l 2 -2" />
        </svg>
      )}
      {cfg.label}
    </motion.div>
  );
}

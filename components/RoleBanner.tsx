'use client';

import { motion } from 'framer-motion';
import { PlayerRole, playerRoleLabel } from '@/lib/types';

interface Props {
  role: PlayerRole;
}

export default function RoleBanner({ role }: Props) {
  const isMediator = role === 'mediador';
  const icon = isMediator ? '🎯' : '⚖️';
  const desc = isMediator
    ? 'No decidís ni asesorás. Facilitás el diálogo.'
    : 'Defendés a tu clienta aplicando el método Harvard.';
  const containerClass = isMediator
    ? 'bg-role-mediador/10 border-role-mediador/40'
    : 'bg-role-abogada/15 border-role-abogada/40';
  const titleClass = isMediator ? 'text-role-mediador' : 'text-role-abogada';

  return (
    <motion.div
      key={role}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${containerClass}`}
    >
      <div className="text-2xl">{icon}</div>
      <div className="flex-1">
        <div className={`${titleClass} font-bold text-sm`}>{playerRoleLabel(role)}</div>
        <div className="text-text-tertiary text-xs">{desc}</div>
      </div>
    </motion.div>
  );
}

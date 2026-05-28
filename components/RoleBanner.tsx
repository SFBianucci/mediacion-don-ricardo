'use client';

import { motion } from 'framer-motion';
import { PlayerRole, playerRoleLabel } from '@/lib/types';

interface Props {
  role: PlayerRole;
}

const CONFIG: Record<
  PlayerRole,
  { icon: string; desc: string; container: string; title: string }
> = {
  mediador: {
    icon: '🎯',
    desc: 'No decidís ni asesorás. Facilitás el diálogo.',
    container: 'bg-role-mediador/10 border-role-mediador/40',
    title: 'text-role-mediador',
  },
  abogada: {
    icon: '⚖️',
    desc: 'Defendés a tu clienta aplicando el método Harvard.',
    container: 'bg-role-abogada/15 border-role-abogada/40',
    title: 'text-role-abogada',
  },
  florencia: {
    icon: '🙋‍♀️',
    desc: 'Reaccionás como la persona, no como técnico/a.',
    container: 'bg-meter-florencia/10 border-meter-florencia/40',
    title: 'text-meter-florencia',
  },
};

export default function RoleBanner({ role }: Props) {
  const cfg = CONFIG[role];

  return (
    <motion.div
      key={role}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${cfg.container}`}
    >
      <div className="text-2xl">{cfg.icon}</div>
      <div className="flex-1">
        <div className={`${cfg.title} font-bold text-sm`}>{playerRoleLabel(role)}</div>
        <div className="text-text-tertiary text-xs">{cfg.desc}</div>
      </div>
    </motion.div>
  );
}

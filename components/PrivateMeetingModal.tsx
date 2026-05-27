'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { MeetingType } from '@/lib/types';

interface Props {
  open: boolean;
  meetingType: MeetingType;
  onClose: () => void;
}

interface ModalContent {
  title: string;
  body: string;
  borderClass: string;
  bgIconClass: string;
  iconColorClass: string;
}

const CONTENT: Record<Exclude<MeetingType, 'joint'>, ModalContent> = {
  'private-suavecito': {
    title: 'Caucus con Suavecito',
    body: 'El mediador convoca ahora a una reunión privada con Don Ricardo y Dr. Pérez. Es el espacio para explorar intereses y poner a prueba la posición de la otra parte sin público.',
    borderClass: 'border-badge-private/40',
    bgIconClass: 'bg-badge-private/20',
    iconColorClass: 'text-badge-private',
  },
  'private-florencia': {
    title: 'Caucus con tu clienta',
    body: 'Reunión privada con Florencia. Acá tu trabajo es alinear con ella su interés real, evaluar honestamente la MAAN y conseguir mandato claro para volver a la mesa conjunta.',
    borderClass: 'border-badge-private-client/40',
    bgIconClass: 'bg-badge-private-client/20',
    iconColorClass: 'text-badge-private-client',
  },
};

export default function PrivateMeetingModal({ open, meetingType, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 3600);
    return () => clearTimeout(t);
  }, [open, onClose]);

  const content = meetingType === 'joint' ? null : CONTENT[meetingType];

  return (
    <AnimatePresence>
      {open && content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`bg-bg-secondary border ${content.borderClass} rounded-2xl p-7 md:p-8 max-w-md text-center`}
          >
            <div
              className={`w-14 h-14 mx-auto mb-4 rounded-full ${content.bgIconClass} flex items-center justify-center ${content.iconColorClass}`}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M 8 11 V 7 a 4 4 0 0 1 8 0 v 4" />
              </svg>
            </div>
            <h3 className="text-text-primary text-xl font-bold mb-2">{content.title}</h3>
            <p className="text-text-secondary leading-relaxed text-sm">{content.body}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 text-xs text-text-tertiary hover:text-text-secondary"
            >
              Entendido
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

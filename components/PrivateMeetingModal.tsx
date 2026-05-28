'use client';

import { motion, AnimatePresence } from 'framer-motion';
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
    title: 'Reunión privada con Suavecito',
    body: 'Don Ricardo y el Dr. Pérez quedan solos con vos. Florencia esperó afuera. Es el espacio para explorar intereses reales con preguntas circulares, agente de la realidad o abogado del diablo. Lo que se diga acá es confidencial.',
    borderClass: 'border-badge-private/40',
    bgIconClass: 'bg-badge-private/20',
    iconColorClass: 'text-badge-private',
  },
  'private-florencia': {
    title: 'Reunión privada con Florencia',
    body: 'Florencia y su abogada quedan solas con vos. Suavecito esperó afuera. Acá explorás interés real, evaluás honestamente la MAAN, y la ayudás a tomar decisiones informadas. Lo que se diga acá es confidencial.',
    borderClass: 'border-badge-private-client/40',
    bgIconClass: 'bg-badge-private-client/20',
    iconColorClass: 'text-badge-private-client',
  },
};

export default function PrivateMeetingModal({ open, meetingType, onClose }: Props) {
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
              className="mt-6 px-6 py-2.5 rounded-xl bg-brand-warm text-bg-primary font-semibold hover:opacity-90 transition"
            >
              Continuar →
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

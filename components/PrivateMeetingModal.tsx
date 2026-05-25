'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PrivateMeetingModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 3200);
    return () => clearTimeout(t);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
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
            className="bg-bg-secondary border border-badge-private/40 rounded-2xl p-7 md:p-8 max-w-md text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-badge-private/20 flex items-center justify-center text-badge-private">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M 8 11 V 7 a 4 4 0 0 1 8 0 v 4" />
              </svg>
            </div>
            <h3 className="text-text-primary text-xl font-bold mb-2">Reunión privada</h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              Ahora pasamos a una reunión privada. El mediador habla con una parte por vez
              para explorar intereses con confianza.
            </p>
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

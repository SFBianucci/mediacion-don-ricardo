'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { EmotionalState, MeetingType } from '@/lib/types';
import AvatarHead from './AvatarHead';
import AvatarBody from './AvatarBody';
import Office from './Office';

interface Props {
  state: EmotionalState;
  meetingType: MeetingType;
  leaving?: boolean;
}

export default function Avatar({ state, meetingType, leaving }: Props) {
  const shakeClass =
    state === 4 ? 'animate-shake-strong' : state === 3 ? 'animate-shake-soft' : '';

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-bg-secondary">
      <Office meetingType={meetingType} />

      <AnimatePresence>
        {!leaving && (
          <motion.svg
            key="avatar"
            viewBox="0 0 600 700"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -240,
              transition: { duration: 1.6, ease: 'easeIn' },
            }}
          >
            <defs>
              {/* Piel principal — luz arriba-izquierda */}
              <radialGradient id="skinGrad" cx="35%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#fbdcb8" />
                <stop offset="55%" stopColor="#e9c4a8" />
                <stop offset="100%" stopColor="#b88766" />
              </radialGradient>

              {/* Sombras anatómicas */}
              <radialGradient id="skinShadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8a5a3a" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#8a5a3a" stopOpacity="0" />
              </radialGradient>

              {/* Pelo gris cano */}
              <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c4bdb6" />
                <stop offset="60%" stopColor="#8d8680" />
                <stop offset="100%" stopColor="#6a6560" />
              </linearGradient>

              {/* Bigote */}
              <linearGradient id="mustacheGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c4bdb6" />
                <stop offset="50%" stopColor="#a8a09a" />
                <stop offset="100%" stopColor="#7a7470" />
              </linearGradient>

              {/* Labios */}
              <linearGradient id="lipsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c97264" />
                <stop offset="100%" stopColor="#8a3a32" />
              </linearGradient>

              {/* Traje */}
              <linearGradient id="suitGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#52525a" />
                <stop offset="60%" stopColor="#3a3a42" />
                <stop offset="100%" stopColor="#28282e" />
              </linearGradient>

              {/* Camisa */}
              <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fffaed" />
                <stop offset="100%" stopColor="#e6dec8" />
              </linearGradient>

              {/* Corbata */}
              <linearGradient id="tieGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c84a44" />
                <stop offset="60%" stopColor="#a63a35" />
                <stop offset="100%" stopColor="#7a2825" />
              </linearGradient>

              {/* Iris */}
              <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a07248" />
                <stop offset="55%" stopColor="#6b4226" />
                <stop offset="100%" stopColor="#2e1a0c" />
              </radialGradient>

              {/* Globo ocular */}
              <radialGradient id="eyeGrad" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#f0ede5" />
                <stop offset="100%" stopColor="#d6d0c4" />
              </radialGradient>

              {/* Mejillas */}
              <radialGradient id="cheekGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ec7a6a" stopOpacity="0.75" />
                <stop offset="80%" stopColor="#ec7a6a" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#ec7a6a" stopOpacity="0" />
              </radialGradient>

              {/* Highlight craneal */}
              <radialGradient id="skullHighlight" cx="40%" cy="20%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>

              {/* Drop shadow general */}
              <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="4" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.35" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Blur suave para sombras de contacto */}
              <filter id="softBlur" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>

            {/* Wrapper para respiración */}
            <g
              className="animate-breathe"
              style={{ transformOrigin: '300px 700px', transformBox: 'fill-box' }}
            >
              <g className={shakeClass}>
                <AvatarBody />
                {/* Sway de la cabeza desde la base del cuello */}
                <g
                  className="animate-sway"
                  style={{ transformOrigin: '300px 470px', transformBox: 'fill-box' }}
                >
                  <AvatarHead state={state} />
                </g>
              </g>
            </g>
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}

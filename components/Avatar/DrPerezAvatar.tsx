'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { EmotionalState, MeetingType, isPrivate } from '@/lib/types';

interface Props {
  state: EmotionalState;
  meetingType: MeetingType;
  leaving?: boolean;
}

// Cejas — más finas y rectas que Don Ricardo. Letrado contenido, no estalla.
const BROWS_L = [
  'M 200 222 Q 232 216 264 222',
  'M 200 224 Q 232 222 264 224',
  'M 200 220 Q 232 226 264 232',
  'M 200 216 Q 232 230 264 238',
  'M 198 212 Q 232 232 266 244',
];
const BROWS_R = [
  'M 336 222 Q 368 216 400 222',
  'M 336 224 Q 368 222 400 224',
  'M 336 232 Q 368 226 400 220',
  'M 336 238 Q 368 230 400 216',
  'M 334 244 Q 368 232 402 212',
];

const MOUTH = [
  'M 268 410 Q 300 422 332 410', // 0 leve sonrisa profesional
  'M 270 412 Q 300 416 330 412', // 1 línea
  'M 272 412 Q 300 410 328 412', // 2 línea apretada
  'M 274 414 Q 300 406 326 414', // 3 frunce
  'M 270 410 Q 300 398 330 410', // 4 frunce duro
];

const FACE_OVERLAY = [0, 0, 0.05, 0.12, 0.22];

export default function DrPerezAvatar({ state, meetingType, leaving }: Props) {
  const shakeClass = state >= 4 ? 'animate-shake-soft' : '';
  const cheekOpacity = 0.15 + state * 0.06;
  const faceOverlay = FACE_OVERLAY[state];
  const showJawTension = state >= 3;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-bg-secondary">
      <DrPerezBackdrop isPrivateMeeting={isPrivate(meetingType)} />

      <AnimatePresence>
        {!leaving && (
          <motion.svg
            key="dr-perez-avatar"
            viewBox="0 0 600 700"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -180, transition: { duration: 1.4 } }}
          >
            <defs>
              <radialGradient id="perezSkin" cx="35%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#f4d5b5" />
                <stop offset="55%" stopColor="#e0b890" />
                <stop offset="100%" stopColor="#a87858" />
              </radialGradient>
              <linearGradient id="perezHair" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3a2818" />
                <stop offset="60%" stopColor="#241810" />
                <stop offset="100%" stopColor="#120a06" />
              </linearGradient>
              <linearGradient id="perezSuit" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2e3a5a" />
                <stop offset="60%" stopColor="#1c2640" />
                <stop offset="100%" stopColor="#0e1426" />
              </linearGradient>
              <linearGradient id="perezShirt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fafafa" />
                <stop offset="100%" stopColor="#dadada" />
              </linearGradient>
              <linearGradient id="perezTie" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5a8ab8" />
                <stop offset="60%" stopColor="#3e6a96" />
                <stop offset="100%" stopColor="#244a6e" />
              </linearGradient>
              <radialGradient id="perezIris" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5e7a92" />
                <stop offset="55%" stopColor="#34526e" />
                <stop offset="100%" stopColor="#162636" />
              </radialGradient>
              <radialGradient id="perezEye" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#eeece6" />
                <stop offset="100%" stopColor="#d0ccc2" />
              </radialGradient>
              <radialGradient id="perezCheek" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c66a5a" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#c66a5a" stopOpacity="0" />
              </radialGradient>
              <filter id="perezBlur" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>

            <g
              className="animate-breathe"
              style={{ transformOrigin: '300px 700px', transformBox: 'fill-box' }}
            >
              <g className={shakeClass}>
                {/* ── CUERPO ─────────────────────────────────────────── */}
                <g>
                  {/* Sombra al piso */}
                  <ellipse
                    cx="300"
                    cy="694"
                    rx="200"
                    ry="16"
                    fill="#050608"
                    opacity="0.6"
                    filter="url(#perezBlur)"
                  />
                  {/* Cuello */}
                  <path
                    d="M 246 410 L 354 410 L 342 488 Q 300 498 258 488 Z"
                    fill="url(#perezSkin)"
                  />
                  {/* Saco */}
                  <path
                    d="M 70 700
                       L 132 522
                       Q 188 466 252 466
                       L 348 466
                       Q 412 466 468 522
                       L 530 700 Z"
                    fill="url(#perezSuit)"
                  />
                  {/* Sombra interna del saco */}
                  <path
                    d="M 530 700 L 468 522 Q 412 466 348 466 L 340 700 Z"
                    fill="#050810"
                    opacity="0.4"
                  />
                  {/* Camisa */}
                  <path
                    d="M 256 466 L 344 466 L 324 612 L 276 612 Z"
                    fill="url(#perezShirt)"
                  />
                  {/* Cuello camisa */}
                  <path d="M 256 466 L 292 482 L 288 502 L 258 476 Z" fill="#ffffff" />
                  <path d="M 344 466 L 308 482 L 312 502 L 342 476 Z" fill="#ffffff" />
                  {/* Lapels */}
                  <path
                    d="M 252 466 L 298 604"
                    stroke="#050810"
                    strokeWidth="2.5"
                    fill="none"
                    opacity="0.9"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 348 466 L 302 604"
                    stroke="#050810"
                    strokeWidth="2.5"
                    fill="none"
                    opacity="0.9"
                    strokeLinecap="round"
                  />
                  {/* Corbata azul */}
                  <path
                    d="M 286 512 L 314 512 L 320 545 L 280 545 Z"
                    fill="url(#perezTie)"
                  />
                  <path
                    d="M 282 549 L 318 549 L 326 700 L 274 700 Z"
                    fill="url(#perezTie)"
                  />
                  {/* Highlight corbata */}
                  <path
                    d="M 298 558 L 300 692"
                    stroke="#7eaccc"
                    strokeWidth="1.2"
                    fill="none"
                    opacity="0.45"
                    strokeLinecap="round"
                  />
                  {/* Pin de letrado en la solapa */}
                  <circle cx="220" cy="540" r="5" fill="#c9a14a" />
                  <circle cx="220" cy="540" r="2.5" fill="#7a5a22" />
                </g>

                {/* ── CABEZA ────────────────────────────────────────── */}
                <g
                  className="animate-sway"
                  style={{ transformOrigin: '300px 480px', transformBox: 'fill-box' }}
                >
                  {/* Pelo (raya al costado, oscuro) */}
                  <path
                    d="M 158 250
                       Q 160 150 220 122
                       Q 280 100 340 108
                       Q 410 118 444 162
                       Q 456 200 446 250
                       Q 446 280 432 296
                       L 408 270
                       Q 396 232 372 220
                       Q 340 210 308 218
                       Q 268 226 240 240
                       Q 210 252 188 280
                       Q 174 290 158 280 Z"
                    fill="url(#perezHair)"
                  />
                  {/* Highlight del pelo */}
                  <path
                    d="M 220 134 Q 280 116 340 124"
                    stroke="#5a4030"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.65"
                    strokeLinecap="round"
                  />
                  {/* Línea de la raya al costado */}
                  <path
                    d="M 250 130 Q 260 180 268 230"
                    stroke="#0a0604"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.7"
                    strokeLinecap="round"
                  />

                  {/* Cara — más alargada/delgada */}
                  <ellipse cx="300" cy="270" rx="128" ry="156" fill="url(#perezSkin)" />
                  {/* Sombra mandibular */}
                  <ellipse
                    cx="300"
                    cy="410"
                    rx="78"
                    ry="14"
                    fill="#7a4f30"
                    opacity="0.32"
                    filter="url(#perezBlur)"
                  />
                  {/* Overlay rojizo sutil */}
                  <motion.ellipse
                    cx="300"
                    cy="290"
                    rx="128"
                    ry="156"
                    fill="#a83a22"
                    initial={false}
                    animate={{ opacity: faceOverlay }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Orejas */}
                  <ellipse cx="172" cy="288" rx="14" ry="22" fill="url(#perezSkin)" />
                  <ellipse cx="428" cy="288" rx="14" ry="22" fill="url(#perezSkin)" />

                  {/* Cejas */}
                  <motion.path
                    d={BROWS_L[state]}
                    animate={{ d: BROWS_L[state] }}
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                    stroke="#1a1208"
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <motion.path
                    d={BROWS_R[state]}
                    animate={{ d: BROWS_R[state] }}
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                    stroke="#1a1208"
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Ojos */}
                  <g>
                    <ellipse cx="252" cy="280" rx="28" ry="22" fill="url(#perezEye)" />
                    <circle cx="252" cy="282" r="16" fill="url(#perezIris)" />
                    <circle cx="252" cy="282" r="8" fill="#0a0608" />
                    <ellipse cx="247" cy="276" rx="4" ry="5" fill="white" />
                    <path
                      d="M 226 263 Q 252 254 278 264"
                      stroke="#2a1a10"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.65"
                      strokeLinecap="round"
                    />
                    <g
                      className="blink-eye-left"
                      style={{ transformOrigin: 'center top', transformBox: 'fill-box' }}
                    >
                      <ellipse cx="252" cy="280" rx="30" ry="24" fill="url(#perezSkin)" />
                    </g>
                  </g>
                  <g>
                    <ellipse cx="348" cy="280" rx="28" ry="22" fill="url(#perezEye)" />
                    <circle cx="348" cy="282" r="16" fill="url(#perezIris)" />
                    <circle cx="348" cy="282" r="8" fill="#0a0608" />
                    <ellipse cx="343" cy="276" rx="4" ry="5" fill="white" />
                    <path
                      d="M 322 263 Q 348 254 374 264"
                      stroke="#2a1a10"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.65"
                      strokeLinecap="round"
                    />
                    <g
                      className="blink-eye-right"
                      style={{ transformOrigin: 'center top', transformBox: 'fill-box' }}
                    >
                      <ellipse cx="348" cy="280" rx="30" ry="24" fill="url(#perezSkin)" />
                    </g>
                  </g>

                  {/* Anteojos rectangulares — distinto a los redondos de Don Ricardo */}
                  <g>
                    <rect
                      x="216"
                      y="262"
                      width="72"
                      height="44"
                      rx="5"
                      fill="none"
                      stroke="#1a1208"
                      strokeWidth="3.5"
                    />
                    <rect
                      x="312"
                      y="262"
                      width="72"
                      height="44"
                      rx="5"
                      fill="none"
                      stroke="#1a1208"
                      strokeWidth="3.5"
                    />
                    {/* Puente */}
                    <line
                      x1="288"
                      y1="282"
                      x2="312"
                      y2="282"
                      stroke="#1a1208"
                      strokeWidth="3.5"
                    />
                    {/* Patillas */}
                    <path
                      d="M 216 286 Q 200 290 184 298"
                      stroke="#1a1208"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 384 286 Q 400 290 416 298"
                      stroke="#1a1208"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Reflejos en las lentes */}
                    <path
                      d="M 222 268 L 244 280"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.55"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 318 268 L 340 280"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.55"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* Nariz fina y recta */}
                  <path
                    d="M 300 296 Q 290 340 290 360 Q 290 372 300 374 Q 310 372 310 360 Q 310 340 300 296 Z"
                    fill="url(#perezSkin)"
                  />
                  <path
                    d="M 300 296 Q 306 340 310 360"
                    stroke="#7a4f30"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.45"
                  />
                  <ellipse cx="292" cy="368" rx="4" ry="2.5" fill="#7a4f30" opacity="0.55" />
                  <ellipse cx="308" cy="368" rx="4" ry="2.5" fill="#7a4f30" opacity="0.55" />

                  {/* Mejillas (muy sutiles, es contenido) */}
                  <motion.circle
                    cx="226"
                    cy="350"
                    r="26"
                    fill="url(#perezCheek)"
                    animate={{ opacity: cheekOpacity }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.circle
                    cx="374"
                    cy="350"
                    r="26"
                    fill="url(#perezCheek)"
                    animate={{ opacity: cheekOpacity }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Boca */}
                  <motion.path
                    d={MOUTH[state]}
                    animate={{ d: MOUTH[state] }}
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                    stroke="#7a3a30"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Tensión mandibular (solo en estados altos — Dr. Pérez se contiene) */}
                  <motion.g
                    animate={{ opacity: showJawTension ? 0.6 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <path
                      d="M 220 380 Q 218 396 224 410"
                      stroke="#7a4f30"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 380 380 Q 382 396 376 410"
                      stroke="#7a4f30"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </motion.g>
                </g>
              </g>
            </g>
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}

function DrPerezBackdrop({ isPrivateMeeting }: { isPrivateMeeting: boolean }) {
  return (
    <svg
      viewBox="0 0 1000 700"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="perezWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9d4dd" />
          <stop offset="55%" stopColor="#a8b6c4" />
          <stop offset="100%" stopColor="#8090a4" />
        </linearGradient>
        <linearGradient id="perezFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a4a52" />
          <stop offset="100%" stopColor="#28282e" />
        </linearGradient>
        <radialGradient id="perezVignette" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </radialGradient>
        <radialGradient id="perezPrivate" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#3d2570" stopOpacity="0" />
          <stop offset="100%" stopColor="#1a0e3a" stopOpacity="0.55" />
        </radialGradient>
      </defs>
      {/* Pared estudio jurídico — gris azulado, sobrio */}
      <rect x="0" y="0" width="1000" height="555" fill="url(#perezWall)" />
      {/* Boiserie inferior */}
      <rect x="0" y="450" width="1000" height="105" fill="#5a6878" opacity="0.45" />
      <rect x="0" y="450" width="1000" height="3" fill="#3a4658" />

      {/* Biblioteca de códigos jurídicos */}
      <g opacity="0.85">
        <rect x="80" y="120" width="320" height="280" fill="#2a2418" />
        <rect x="86" y="126" width="308" height="6" fill="#1a1410" />
        {/* Estantes */}
        {[180, 240, 300].map((y) => (
          <rect key={y} x="86" y={y} width="308" height="3" fill="#1a1410" />
        ))}
        {/* Libros */}
        {[
          { x: 92, w: 14, h: 50, c: '#6e2a22' },
          { x: 108, w: 12, h: 50, c: '#a64a22' },
          { x: 122, w: 16, h: 50, c: '#3a4060' },
          { x: 140, w: 14, h: 50, c: '#5e2a3a' },
          { x: 156, w: 12, h: 50, c: '#a8841a' },
          { x: 170, w: 16, h: 50, c: '#284a5a' },
          { x: 188, w: 14, h: 50, c: '#6e2a22' },
        ].map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={180 - b.h + 50}
            width={b.w}
            height={b.h}
            fill={b.c}
          />
        ))}
        {[
          { x: 92, w: 16, c: '#3a4060' },
          { x: 110, w: 14, c: '#7a3a22' },
          { x: 126, w: 18, c: '#2a3a4a' },
          { x: 146, w: 12, c: '#a8841a' },
          { x: 160, w: 16, c: '#5e2a3a' },
          { x: 178, w: 12, c: '#6e2a22' },
        ].map((b, i) => (
          <rect key={i} x={b.x} y={196} width={b.w} height={44} fill={b.c} />
        ))}
      </g>

      {/* Maletín de cuero en una mesa lateral */}
      <g opacity="0.85">
        <rect x="780" y="380" width="180" height="20" fill="#3a2418" />
        <path
          d="M 800 380 Q 800 350 830 350 L 910 350 Q 940 350 940 380 Z"
          fill="#5a3a22"
        />
        <rect x="850" y="358" width="40" height="8" rx="2" fill="#c9a14a" />
        <rect x="864" y="362" width="12" height="3" fill="#7a5a22" />
      </g>

      {/* Diploma "Colegio Público de Abogados CABA" */}
      <g opacity="0.85">
        <rect x="600" y="130" width="180" height="220" fill="#4a3a2a" rx="3" />
        <rect x="612" y="142" width="156" height="196" fill="#f4ead6" />
        <rect x="630" y="160" width="120" height="3" fill="#a89373" />
        <rect x="624" y="180" width="132" height="2" fill="#c9b89a" />
        <rect x="624" y="194" width="120" height="2" fill="#c9b89a" />
        <rect x="624" y="208" width="132" height="2" fill="#c9b89a" />
        <rect x="624" y="222" width="100" height="2" fill="#c9b89a" />
        <circle cx="690" cy="290" r="20" fill="#c9a14a" />
        <circle cx="690" cy="290" r="14" fill="none" stroke="#7a5a22" strokeWidth="1.2" />
      </g>

      {/* Piso */}
      <rect x="0" y="555" width="1000" height="145" fill="url(#perezFloor)" />
      <ellipse
        cx="500"
        cy="560"
        rx="260"
        ry="14"
        fill="#000"
        opacity="0.45"
      />

      {/* Mesa de mediación al frente */}
      <g>
        <rect x="0" y="555" width="1000" height="80" fill="#2e2a22" />
        <rect x="0" y="555" width="1000" height="4" fill="#5a4a3a" />
        <g stroke="#1a1410" strokeWidth="0.5" opacity="0.5">
          <line x1="0" y1="585" x2="1000" y2="585" />
          <line x1="0" y1="610" x2="1000" y2="610" />
        </g>
        {/* Carpeta de expediente */}
        <g transform="translate(700, 550)">
          <rect x="0" y="-8" width="160" height="40" fill="#a83a2a" rx="2" />
          <rect x="6" y="-4" width="148" height="2" fill="#7a2818" />
          <rect x="20" y="6" width="120" height="3" fill="#f4ead6" opacity="0.7" />
          <rect x="20" y="14" width="100" height="2" fill="#f4ead6" opacity="0.55" />
          <rect x="20" y="20" width="110" height="2" fill="#f4ead6" opacity="0.55" />
        </g>
      </g>

      {/* Vignette */}
      <rect x="0" y="0" width="1000" height="700" fill="url(#perezVignette)" />
      {isPrivateMeeting && (
        <rect x="0" y="0" width="1000" height="700" fill="url(#perezPrivate)" />
      )}
    </svg>
  );
}

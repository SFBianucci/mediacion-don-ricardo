'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { EmotionalState } from '@/lib/types';

interface Props {
  state: EmotionalState;
  leaving?: boolean;
}

// Cejas femeninas, finas y arqueadas
const BROWS_L = [
  'M 198 222 Q 230 210 264 220',
  'M 198 224 Q 230 220 264 224',
  'M 198 220 Q 230 226 264 232',
  'M 198 214 Q 230 230 264 240',
  'M 196 208 Q 230 230 266 246',
];
const BROWS_R = [
  'M 336 220 Q 370 210 402 222',
  'M 336 224 Q 370 220 402 224',
  'M 336 232 Q 370 226 402 220',
  'M 336 240 Q 370 230 402 214',
  'M 334 246 Q 370 230 404 208',
];

const MOUTH = [
  'M 268 412 Q 300 426 332 412', // 0 sonrisa relajada
  'M 270 414 Q 300 420 330 414', // 1 atenta
  'M 272 416 Q 300 416 328 416', // 2 dubitativa
  'M 274 418 Q 300 410 326 418', // 3 frustrada
  'M 270 414 Q 300 400 330 414', // 4 sin paciencia
];

const FACE_OVERLAY = [0, 0, 0.06, 0.14, 0.24];

export default function FlorenciaAvatar({ state, leaving }: Props) {
  const cheekOpacity = 0.45 + state * 0.1;
  const faceOverlay = FACE_OVERLAY[state];
  const showTension = state >= 3;
  const showArmsCrossed = state >= 3;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-bg-secondary">
      <FlorenciaBackdrop />

      <AnimatePresence>
        {!leaving && (
          <motion.svg
            key="florencia-avatar"
            viewBox="0 0 600 700"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -120, transition: { duration: 1.2 } }}
          >
            <defs>
              <radialGradient id="florSkin" cx="35%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#ffe0c8" />
                <stop offset="55%" stopColor="#f0c4a8" />
                <stop offset="100%" stopColor="#c89476" />
              </radialGradient>
              <linearGradient id="florHair" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7a4a28" />
                <stop offset="55%" stopColor="#5e361c" />
                <stop offset="100%" stopColor="#3a2010" />
              </linearGradient>
              <linearGradient id="florSweater" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e8c898" />
                <stop offset="60%" stopColor="#c89870" />
                <stop offset="100%" stopColor="#967048" />
              </linearGradient>
              <linearGradient id="florScarf" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a83a4a" />
                <stop offset="100%" stopColor="#742838" />
              </linearGradient>
              <radialGradient id="florIris" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7a8e6e" />
                <stop offset="55%" stopColor="#4a6440" />
                <stop offset="100%" stopColor="#1e2a18" />
              </radialGradient>
              <radialGradient id="florEye" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#f4ede0" />
                <stop offset="100%" stopColor="#d8d0c0" />
              </radialGradient>
              <radialGradient id="florCheek" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ec8a8a" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#ec8a8a" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="florLips" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d6685a" />
                <stop offset="100%" stopColor="#a04030" />
              </linearGradient>
              <filter id="florBlur" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>

            <g
              className="animate-breathe"
              style={{ transformOrigin: '300px 700px', transformBox: 'fill-box' }}
            >
              {/* ── CUERPO ─────────────────────────────────────────── */}
              <g>
                {/* Sombra al piso */}
                <ellipse
                  cx="300"
                  cy="694"
                  rx="190"
                  ry="14"
                  fill="#0a0604"
                  opacity="0.55"
                  filter="url(#florBlur)"
                />
                {/* Cuello */}
                <path
                  d="M 254 410 L 346 410 L 336 482 Q 300 490 264 482 Z"
                  fill="url(#florSkin)"
                />
                {/* Sweater holgado */}
                <path
                  d="M 80 700
                     L 138 514
                     Q 196 458 258 458
                     L 342 458
                     Q 404 458 462 514
                     L 520 700 Z"
                  fill="url(#florSweater)"
                />
                {/* Cuello del sweater (alto) */}
                <path
                  d="M 250 462 Q 300 446 350 462 L 350 498 Q 300 506 250 498 Z"
                  fill="url(#florSweater)"
                />
                {/* Sombra interna del cuello */}
                <path
                  d="M 250 462 Q 300 470 350 462"
                  stroke="#7a5630"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                  strokeLinecap="round"
                />
                {/* Pañuelo bordó al cuello */}
                <path
                  d="M 240 498 Q 300 514 360 498 L 364 528 Q 300 538 236 528 Z"
                  fill="url(#florScarf)"
                />
                <path
                  d="M 240 498 Q 300 506 360 498"
                  stroke="#5a1c28"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.55"
                />
                {/* Textura tejida del sweater */}
                <g stroke="#a87850" strokeWidth="0.8" opacity="0.4">
                  {[540, 580, 620, 660].map((y) => (
                    <path
                      key={y}
                      d={`M 100 ${y} Q 200 ${y - 6} 300 ${y} T 500 ${y}`}
                      fill="none"
                    />
                  ))}
                </g>
                {/* Brazos cruzados (solo cuando frustrada) */}
                <motion.g
                  animate={{ opacity: showArmsCrossed ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <path
                    d="M 140 560 Q 220 540 290 560 L 280 600 Q 200 590 140 600 Z"
                    fill="url(#florSweater)"
                    stroke="#7a5630"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 460 560 Q 380 540 310 560 L 320 600 Q 400 590 460 600 Z"
                    fill="url(#florSweater)"
                    stroke="#7a5630"
                    strokeWidth="1.5"
                  />
                </motion.g>
              </g>

              {/* ── CABEZA ────────────────────────────────────────── */}
              <g
                className="animate-sway"
                style={{ transformOrigin: '300px 480px', transformBox: 'fill-box' }}
              >
                {/* Pelo largo (atrás) */}
                <path
                  d="M 140 280
                     Q 130 150 240 110
                     Q 300 96 360 110
                     Q 470 150 460 280
                     L 470 560
                     Q 470 580 450 580
                     L 440 580
                     Q 432 460 414 360
                     L 414 240
                     Q 350 230 300 232
                     Q 250 230 186 240
                     L 186 360
                     Q 168 460 160 580
                     L 150 580
                     Q 130 580 130 560 Z"
                  fill="url(#florHair)"
                />
                {/* Highlight del pelo */}
                <path
                  d="M 200 140 Q 260 124 320 134"
                  stroke="#a87048"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.55"
                  strokeLinecap="round"
                />
                <path
                  d="M 170 280 Q 175 380 168 480"
                  stroke="#a87048"
                  strokeWidth="2.5"
                  fill="none"
                  opacity="0.4"
                  strokeLinecap="round"
                />
                <path
                  d="M 430 280 Q 425 380 432 480"
                  stroke="#a87048"
                  strokeWidth="2.5"
                  fill="none"
                  opacity="0.4"
                  strokeLinecap="round"
                />

                {/* Flequillo lateral */}
                <path
                  d="M 186 200 Q 240 174 300 178 Q 358 180 414 200 Q 396 226 360 232 Q 320 230 300 232 Q 280 230 240 232 Q 204 226 186 200 Z"
                  fill="url(#florHair)"
                />
                <path
                  d="M 200 192 Q 250 180 300 184"
                  stroke="#3a2010"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.55"
                />

                {/* Cara */}
                <ellipse cx="300" cy="280" rx="118" ry="142" fill="url(#florSkin)" />
                {/* Sombra mandibular */}
                <ellipse
                  cx="300"
                  cy="408"
                  rx="68"
                  ry="12"
                  fill="#7a4a28"
                  opacity="0.3"
                  filter="url(#florBlur)"
                />
                {/* Overlay rojizo */}
                <motion.ellipse
                  cx="300"
                  cy="290"
                  rx="118"
                  ry="142"
                  fill="#c84a3a"
                  initial={false}
                  animate={{ opacity: faceOverlay }}
                  transition={{ duration: 0.5 }}
                />

                {/* Orejas (asoman poco — pelo largo) */}
                <ellipse cx="184" cy="296" rx="10" ry="18" fill="url(#florSkin)" />
                <ellipse cx="416" cy="296" rx="10" ry="18" fill="url(#florSkin)" />
                {/* Pendiente */}
                <circle cx="184" cy="316" r="3" fill="#c9a14a" />
                <circle cx="416" cy="316" r="3" fill="#c9a14a" />

                {/* Cejas */}
                <motion.path
                  d={BROWS_L[state]}
                  animate={{ d: BROWS_L[state] }}
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.18 }}
                  stroke="#3a2010"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
                <motion.path
                  d={BROWS_R[state]}
                  animate={{ d: BROWS_R[state] }}
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.18 }}
                  stroke="#3a2010"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Ojos grandes y expresivos */}
                <g>
                  <ellipse cx="252" cy="284" rx="30" ry="26" fill="url(#florEye)" />
                  <circle cx="252" cy="286" r="18" fill="url(#florIris)" />
                  <circle cx="252" cy="286" r="9" fill="#0a0608" />
                  <ellipse cx="246" cy="280" rx="5" ry="6" fill="white" />
                  <circle cx="258" cy="290" r="2" fill="white" opacity="0.8" />
                  {/* Pestañas */}
                  <path
                    d="M 222 264 Q 252 252 282 266"
                    stroke="#1a0e08"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path d="M 226 258 L 222 254" stroke="#1a0e08" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 240 256 L 240 250" stroke="#1a0e08" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 254 254 L 256 248" stroke="#1a0e08" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 268 256 L 272 250" stroke="#1a0e08" strokeWidth="1.5" strokeLinecap="round" />
                  <g
                    className="blink-eye-left"
                    style={{ transformOrigin: 'center top', transformBox: 'fill-box' }}
                  >
                    <ellipse cx="252" cy="284" rx="32" ry="28" fill="url(#florSkin)" />
                  </g>
                </g>
                <g>
                  <ellipse cx="348" cy="284" rx="30" ry="26" fill="url(#florEye)" />
                  <circle cx="348" cy="286" r="18" fill="url(#florIris)" />
                  <circle cx="348" cy="286" r="9" fill="#0a0608" />
                  <ellipse cx="342" cy="280" rx="5" ry="6" fill="white" />
                  <circle cx="354" cy="290" r="2" fill="white" opacity="0.8" />
                  <path
                    d="M 318 264 Q 348 252 378 266"
                    stroke="#1a0e08"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path d="M 322 258 L 318 254" stroke="#1a0e08" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 336 256 L 336 250" stroke="#1a0e08" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 350 254 L 348 248" stroke="#1a0e08" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M 364 256 L 368 250" stroke="#1a0e08" strokeWidth="1.5" strokeLinecap="round" />
                  <g
                    className="blink-eye-right"
                    style={{ transformOrigin: 'center top', transformBox: 'fill-box' }}
                  >
                    <ellipse cx="348" cy="284" rx="32" ry="28" fill="url(#florSkin)" />
                  </g>
                </g>

                {/* Nariz pequeña */}
                <path
                  d="M 300 304 Q 292 340 292 360 Q 292 370 300 372 Q 308 370 308 360 Q 308 340 300 304 Z"
                  fill="url(#florSkin)"
                />
                <ellipse cx="294" cy="365" rx="3.5" ry="2" fill="#a06b48" opacity="0.5" />
                <ellipse cx="306" cy="365" rx="3.5" ry="2" fill="#a06b48" opacity="0.5" />

                {/* Mejillas (rosadas, expresivas) */}
                <motion.circle
                  cx="220"
                  cy="358"
                  r="30"
                  fill="url(#florCheek)"
                  animate={{ opacity: cheekOpacity }}
                  transition={{ duration: 0.5 }}
                />
                <motion.circle
                  cx="380"
                  cy="358"
                  r="30"
                  fill="url(#florCheek)"
                  animate={{ opacity: cheekOpacity }}
                  transition={{ duration: 0.5 }}
                />

                {/* Labios — con color */}
                <motion.path
                  d={MOUTH[state]}
                  animate={{ d: MOUTH[state] }}
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.18 }}
                  stroke="url(#florLips)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Labio inferior sutil */}
                <ellipse
                  cx="300"
                  cy="418"
                  rx="22"
                  ry="3.5"
                  fill="#c66050"
                  opacity={0.4 + state * 0.05}
                />

                {/* Líneas de frustración entre cejas (estados altos) */}
                <motion.g
                  animate={{ opacity: showTension ? 0.7 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <path
                    d="M 294 202 L 290 232"
                    stroke="#7a4f30"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 306 202 L 310 232"
                    stroke="#7a4f30"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </motion.g>
              </g>
            </g>
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}

function FlorenciaBackdrop() {
  return (
    <svg
      viewBox="0 0 1000 700"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="florWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8dcc8" />
          <stop offset="55%" stopColor="#c8b89a" />
          <stop offset="100%" stopColor="#a08868" />
        </linearGradient>
        <linearGradient id="florFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a4838" />
          <stop offset="100%" stopColor="#2e2418" />
        </linearGradient>
        <radialGradient id="florHalo" cx="50%" cy="48%" r="42%">
          <stop offset="0%" stopColor="#ffe6c8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffe6c8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="florVignette" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </radialGradient>
        {/* Sala privada para caucus — tonos cálidos, no oficina corporativa */}
      </defs>
      <rect x="0" y="0" width="1000" height="555" fill="url(#florWall)" />

      {/* Cuadro decorativo abstracto */}
      <g opacity="0.85">
        <rect x="120" y="120" width="180" height="220" fill="#3a2818" rx="3" />
        <rect x="132" y="132" width="156" height="196" fill="#f0d8a8" />
        <circle cx="180" cy="200" r="30" fill="#d4a574" opacity="0.7" />
        <circle cx="240" cy="240" r="22" fill="#a8744a" opacity="0.6" />
        <path d="M 140 280 Q 200 260 280 290" stroke="#7a4a28" strokeWidth="3" fill="none" />
      </g>

      {/* Planta lateral grande */}
      <g transform="translate(800, 160)" opacity="0.85">
        <ellipse cx="60" cy="400" rx="80" ry="14" fill="#0a0604" opacity="0.5" />
        {/* Maceta */}
        <path d="M 20 380 L 28 250 L 92 250 L 100 380 Z" fill="#8a5a32" />
        <rect x="22" y="246" width="76" height="8" fill="#6a3e18" />
        {/* Tallo */}
        <path d="M 60 250 Q 58 180 70 100" stroke="#3d5a2d" strokeWidth="4" fill="none" />
        {/* Hojas */}
        <path
          d="M 60 220 Q 30 200 16 168 Q 30 192 50 208 Z"
          fill="#4d7a3d"
        />
        <path
          d="M 60 180 Q 90 160 110 130 Q 100 170 76 188 Z"
          fill="#5d8a4d"
        />
        <path
          d="M 70 140 Q 50 110 38 80 Q 56 102 76 124 Z"
          fill="#4d7a3d"
        />
        <path
          d="M 70 120 Q 100 96 124 70 Q 110 110 84 132 Z"
          fill="#5d8a4d"
        />
      </g>

      {/* Halo cálido */}
      <ellipse cx="500" cy="340" rx="280" ry="280" fill="url(#florHalo)" />

      {/* Piso */}
      <rect x="0" y="555" width="1000" height="145" fill="url(#florFloor)" />
      {/* Sombra de la silla */}
      <ellipse cx="500" cy="562" rx="280" ry="14" fill="#000" opacity="0.45" />

      {/* Silla / cabecera de mesa */}
      <g>
        <rect x="0" y="555" width="1000" height="80" fill="#4a3422" />
        <rect x="0" y="555" width="1000" height="3" fill="#7a5232" />
        {/* Carpeta de Florencia con anotaciones */}
        <g transform="translate(140, 562)">
          <rect x="0" y="0" width="120" height="34" fill="#a8c4d4" rx="2" />
          <rect x="8" y="8" width="80" height="2" fill="#3a4a5a" opacity="0.5" />
          <rect x="8" y="14" width="100" height="2" fill="#3a4a5a" opacity="0.5" />
          <rect x="8" y="20" width="74" height="2" fill="#3a4a5a" opacity="0.5" />
        </g>
        {/* Taza simple */}
        <g transform="translate(720, 558)">
          <path d="M 4 8 L 8 38 Q 8 44 16 44 L 52 44 Q 60 44 60 38 L 64 8 Z" fill="#dadada" />
          <ellipse cx="34" cy="9" rx="26" ry="4" fill="#5a3022" />
          <path
            d="M 60 16 Q 76 16 76 30 Q 76 44 62 42"
            stroke="#dadada"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </g>

      <rect x="0" y="0" width="1000" height="700" fill="url(#florVignette)" />
    </svg>
  );
}

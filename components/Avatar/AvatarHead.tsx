'use client';

import { motion } from 'framer-motion';
import { EmotionalState } from '@/lib/types';

interface Props {
  state: EmotionalState;
}

// Tinta base de la piel — se modula con un overlay rojizo según el enojo
const FACE_OVERLAY_OPACITY = [0, 0, 0.1, 0.25, 0.45];

// Cejas — todos los paths con la misma estructura (M x y Q cx cy x2 y2) para morph suave
const BROWS_L = [
  'M 196 218 Q 232 200 270 218', // 0 Receptivo — arco hacia arriba
  'M 196 220 Q 232 214 270 220', // 1 Neutral
  'M 196 212 Q 232 220 270 230', // 2 Tenso
  'M 196 206 Q 232 226 270 238', // 3 Molesto
  'M 192 198 Q 236 234 278 250', // 4 Furioso
];
const BROWS_R = [
  'M 330 218 Q 368 200 404 218',
  'M 330 220 Q 368 214 404 220',
  'M 330 230 Q 368 220 404 212',
  'M 330 238 Q 368 226 404 206',
  'M 322 250 Q 364 234 408 198',
];

// Boca — línea principal, mismo número de comandos para morph
const MOUTH = [
  'M 260 400 Q 300 425 340 400', // 0 sonrisa
  'M 262 404 Q 300 412 338 404', // 1 leve
  'M 264 406 Q 300 408 336 406', // 2 línea
  'M 264 408 Q 300 396 336 408', // 3 frunce
  'M 250 396 Q 300 432 350 396', // 4 abierta
];

// Sombra debajo del labio (igual estructura)
const LOWER_LIP_SHADOW = [
  'M 262 406 Q 300 422 338 406',
  'M 264 410 Q 300 416 336 410',
  'M 266 412 Q 300 412 334 412',
  'M 266 414 Q 300 408 334 414',
  'M 252 410 Q 300 432 348 410',
];

export default function AvatarHead({ state }: Props) {
  const showVein = state >= 3;
  const veinIntensity = state === 4 ? 1 : 0.65;
  const showSweat = state === 4;
  const showClouds = state === 4;
  const showLines = state === 4;
  const showTeeth = state === 4;
  const showCavity = state === 4;
  const cheekOpacity = 0.4 + state * 0.13;
  const crowsFeetOpacity = 0.25 + state * 0.12;
  const faceOverlay = FACE_OVERLAY_OPACITY[state];

  return (
    <g id="head">
      {/* ── 1. PELO horseshoe (atrás de la cabeza) ─────────────────────── */}
      <ellipse cx="300" cy="280" rx="158" ry="160" fill="url(#hairGrad)" />
      {/* Sombra interna del pelo (banda más oscura cerca de la oreja) */}
      <ellipse
        cx="158"
        cy="295"
        rx="22"
        ry="55"
        fill="#5a5450"
        opacity="0.6"
      />
      <ellipse
        cx="442"
        cy="295"
        rx="22"
        ry="55"
        fill="#5a5450"
        opacity="0.6"
      />
      {/* Mechas onduladas — detalle */}
      <path
        d="M 156 230 Q 152 250 158 270 Q 162 290 154 305"
        stroke="#7a7470"
        strokeWidth="2"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M 145 270 Q 142 290 148 310 Q 154 325 150 340"
        stroke="#a8a09a"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M 444 230 Q 448 250 442 270 Q 438 290 446 305"
        stroke="#7a7470"
        strokeWidth="2"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M 455 270 Q 458 290 452 310 Q 446 325 450 340"
        stroke="#a8a09a"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />

      {/* ── 2. ORBE de luz cálida atrás (rim light) ────────────────────── */}
      <ellipse
        cx="300"
        cy="245"
        rx="155"
        ry="170"
        fill="#fff2dc"
        opacity="0.18"
        filter="url(#softBlur)"
      />

      {/* ── 3. OREJAS (apenas asoman detrás del pelo lateral) ──────────── */}
      <ellipse cx="166" cy="295" rx="18" ry="26" fill="url(#skinGrad)" />
      <path
        d="M 166 280 Q 172 295 162 312"
        stroke="#a06b48"
        strokeWidth="1.5"
        fill="none"
        opacity="0.55"
      />
      <ellipse cx="434" cy="295" rx="18" ry="26" fill="url(#skinGrad)" />
      <path
        d="M 434 280 Q 428 295 438 312"
        stroke="#a06b48"
        strokeWidth="1.5"
        fill="none"
        opacity="0.55"
      />

      {/* ── 4. CABEZA principal (cara + calva) ─────────────────────────── */}
      <ellipse
        cx="300"
        cy="255"
        rx="140"
        ry="160"
        fill="url(#skinGrad)"
      />
      {/* Highlight de la calva */}
      <ellipse
        cx="280"
        cy="140"
        rx="60"
        ry="35"
        fill="url(#skullHighlight)"
      />
      {/* Sombra inferior derecha de la cara (volumen) */}
      <ellipse
        cx="365"
        cy="320"
        rx="80"
        ry="100"
        fill="#8a5a3a"
        opacity="0.16"
        filter="url(#softBlur)"
      />
      {/* Sombra de mentón */}
      <ellipse
        cx="300"
        cy="405"
        rx="80"
        ry="22"
        fill="#8a5a3a"
        opacity="0.32"
        filter="url(#softBlur)"
      />
      {/* Overlay rojizo según el enojo */}
      <motion.ellipse
        cx="300"
        cy="290"
        rx="140"
        ry="160"
        fill="#cc4a2e"
        initial={false}
        animate={{ opacity: faceOverlay }}
        transition={{ duration: 0.6 }}
      />

      {/* ── 5. CEJAS ────────────────────────────────────────────────────── */}
      <motion.path
        d={BROWS_L[state]}
        animate={{ d: BROWS_L[state] }}
        transition={{ type: 'spring', duration: 0.6, bounce: 0.18 }}
        stroke="#4a3a28"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <motion.path
        d={BROWS_R[state]}
        animate={{ d: BROWS_R[state] }}
        transition={{ type: 'spring', duration: 0.6, bounce: 0.18 }}
        stroke="#4a3a28"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Arrugas de fruncido */}
      <motion.g
        animate={{ opacity: state >= 3 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <path
          d="M 292 198 L 288 232"
          stroke="#7a4a30"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M 308 198 L 312 232"
          stroke="#7a4a30"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </motion.g>

      {/* ── 6. OJOS ─────────────────────────────────────────────────────── */}
      {/* Sombra hueca de la cuenca */}
      <ellipse cx="245" cy="276" rx="38" ry="32" fill="#8a5a3a" opacity="0.18" filter="url(#softBlur)" />
      <ellipse cx="355" cy="276" rx="38" ry="32" fill="#8a5a3a" opacity="0.18" filter="url(#softBlur)" />

      {/* Globo izquierdo */}
      <g>
        <ellipse cx="245" cy="272" rx="34" ry="36" fill="url(#eyeGrad)" />
        <circle cx="245" cy="276" r="22" fill="url(#irisGrad)" />
        <circle cx="245" cy="276" r="22" fill="none" stroke="#3a2210" strokeWidth="1.2" opacity="0.7" />
        <circle cx="245" cy="276" r="11" fill="#150c08" />
        <ellipse cx="238" cy="268" rx="7" ry="9" fill="white" />
        <circle cx="252" cy="284" r="2.8" fill="white" opacity="0.85" />
        {/* Línea sup párpado (sombra que cae sobre el globo) */}
        <path
          d="M 213 256 Q 245 246 277 258"
          stroke="#4a2818"
          strokeWidth="2.5"
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        />
        {/* Línea pestaña inferior */}
        <path
          d="M 218 296 Q 245 304 272 296"
          stroke="#5a3a22"
          strokeWidth="1.6"
          fill="none"
          opacity="0.45"
          strokeLinecap="round"
        />
        {/* Párpado animado (scaleY para blink) — origen arriba, cae como un párpado */}
        <g
          className="blink-eye-left"
          style={{
            transformOrigin: 'center top',
            transformBox: 'fill-box',
          }}
        >
          <ellipse cx="245" cy="272" rx="36" ry="38" fill="url(#skinGrad)" />
        </g>
      </g>

      {/* Globo derecho */}
      <g>
        <ellipse cx="355" cy="272" rx="34" ry="36" fill="url(#eyeGrad)" />
        <circle cx="355" cy="276" r="22" fill="url(#irisGrad)" />
        <circle cx="355" cy="276" r="22" fill="none" stroke="#3a2210" strokeWidth="1.2" opacity="0.7" />
        <circle cx="355" cy="276" r="11" fill="#150c08" />
        <ellipse cx="348" cy="268" rx="7" ry="9" fill="white" />
        <circle cx="362" cy="284" r="2.8" fill="white" opacity="0.85" />
        <path
          d="M 323 256 Q 355 246 387 258"
          stroke="#4a2818"
          strokeWidth="2.5"
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        />
        <path
          d="M 328 296 Q 355 304 382 296"
          stroke="#5a3a22"
          strokeWidth="1.6"
          fill="none"
          opacity="0.45"
          strokeLinecap="round"
        />
        <g
          className="blink-eye-right"
          style={{
            transformOrigin: 'center top',
            transformBox: 'fill-box',
          }}
        >
          <ellipse cx="355" cy="272" rx="36" ry="38" fill="url(#skinGrad)" />
        </g>
      </g>

      {/* Patas de gallo */}
      <motion.g
        stroke="#7a4a30"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        animate={{ opacity: crowsFeetOpacity }}
        transition={{ duration: 0.4 }}
      >
        <path d="M 197 268 L 190 262" />
        <path d="M 196 278 L 188 278" />
        <path d="M 198 288 L 190 292" />
        <path d="M 403 268 L 410 262" />
        <path d="M 404 278 L 412 278" />
        <path d="M 402 288 L 410 292" />
      </motion.g>

      {/* ── 7. ANTEOJOS ─────────────────────────────────────────────────── */}
      <g>
        {/* Sombra del marco sobre la cara */}
        <circle cx="245" cy="276" r="46" fill="none" stroke="#1a0e08" strokeWidth="2" opacity="0.25" transform="translate(0 3)" />
        <circle cx="355" cy="276" r="46" fill="none" stroke="#1a0e08" strokeWidth="2" opacity="0.25" transform="translate(0 3)" />

        {/* Marco principal */}
        <circle cx="245" cy="276" r="46" fill="none" stroke="#2a1a0e" strokeWidth="6" />
        <circle cx="355" cy="276" r="46" fill="none" stroke="#2a1a0e" strokeWidth="6" />
        {/* Reflejo del marco (interior) */}
        <circle cx="245" cy="276" r="42" fill="none" stroke="#5a3a20" strokeWidth="1.2" opacity="0.7" />
        <circle cx="355" cy="276" r="42" fill="none" stroke="#5a3a20" strokeWidth="1.2" opacity="0.7" />

        {/* Puente */}
        <line x1="291" y1="276" x2="309" y2="276" stroke="#2a1a0e" strokeWidth="6" />
        {/* Almohadillas nasales */}
        <circle cx="291" cy="288" r="2.5" fill="#5a3a20" />
        <circle cx="309" cy="288" r="2.5" fill="#5a3a20" />

        {/* Patillas */}
        <path d="M 199 280 Q 188 285 170 296" stroke="#2a1a0e" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 401 280 Q 412 285 430 296" stroke="#2a1a0e" strokeWidth="4" fill="none" strokeLinecap="round" />

        {/* Reflejos en lentes (luz arriba-izq) */}
        <path
          d="M 215 250 Q 230 240 248 246"
          stroke="white"
          strokeWidth="3"
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        />
        <path
          d="M 325 250 Q 340 240 358 246"
          stroke="white"
          strokeWidth="3"
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        />
        {/* Brillito chico */}
        <circle cx="262" cy="258" r="2" fill="white" opacity="0.6" />
        <circle cx="372" cy="258" r="2" fill="white" opacity="0.6" />
      </g>

      {/* ── 8. NARIZ — pera con volumen ─────────────────────────────────── */}
      <path
        d="M 300 286 Q 282 312 282 340 Q 282 356 300 358 Q 318 356 318 340 Q 318 312 300 286 Z"
        fill="url(#skinGrad)"
      />
      {/* Sombra derecha de la nariz */}
      <path
        d="M 300 286 Q 308 310 318 340 Q 318 356 304 358 L 304 320 Z"
        fill="#8a5a3a"
        opacity="0.22"
        filter="url(#softBlur)"
      />
      {/* Highlight del puente */}
      <path
        d="M 296 290 Q 290 308 290 328"
        stroke="#fbdcb8"
        strokeWidth="2.5"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      />
      {/* Aletas */}
      <ellipse cx="290" cy="346" rx="6" ry="4" fill="#a06b48" opacity="0.55" />
      <ellipse cx="310" cy="346" rx="6" ry="4" fill="#a06b48" opacity="0.55" />
      {/* Sombra debajo de la nariz (sobre el bigote) */}
      <ellipse
        cx="300"
        cy="362"
        rx="22"
        ry="6"
        fill="#5a3a20"
        opacity="0.3"
        filter="url(#softBlur)"
      />

      {/* ── 9. MEJILLAS ─────────────────────────────────────────────────── */}
      <motion.circle
        cx="220"
        cy="335"
        r="32"
        fill="url(#cheekGrad)"
        animate={{ opacity: cheekOpacity }}
        transition={{ duration: 0.5 }}
      />
      <motion.circle
        cx="380"
        cy="335"
        r="32"
        fill="url(#cheekGrad)"
        animate={{ opacity: cheekOpacity }}
        transition={{ duration: 0.5 }}
      />

      {/* ── 10. BOCA — cavidad + labios ─────────────────────────────────── */}
      {/* Cavidad oscura (solo se ve abierta en Furioso, pero existe sutilmente siempre) */}
      <motion.path
        d="M 270 398 Q 300 414 330 398 Q 332 414 300 416 Q 268 414 270 398 Z"
        fill="#2a0e08"
        animate={{ opacity: showCavity ? 1 : 0.18 }}
        transition={{ duration: 0.4 }}
      />
      {/* Sombra del labio inferior (más oscura) */}
      <motion.path
        d={LOWER_LIP_SHADOW[state]}
        animate={{ d: LOWER_LIP_SHADOW[state] }}
        transition={{ type: 'spring', duration: 0.6, bounce: 0.15 }}
        stroke="#6a2a20"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Línea principal de boca */}
      <motion.path
        d={MOUTH[state]}
        animate={{ d: MOUTH[state] }}
        transition={{ type: 'spring', duration: 0.6, bounce: 0.18 }}
        stroke="url(#lipsGrad)"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Dientes (solo Furioso) */}
      <motion.g
        animate={{ opacity: showTeeth ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <rect x="268" y="402" width="64" height="11" rx="2" fill="#f6f1e4" />
        <line x1="280" y1="402" x2="280" y2="413" stroke="#cccac0" strokeWidth="1" />
        <line x1="292" y1="402" x2="292" y2="413" stroke="#cccac0" strokeWidth="1" />
        <line x1="304" y1="402" x2="304" y2="413" stroke="#cccac0" strokeWidth="1" />
        <line x1="316" y1="402" x2="316" y2="413" stroke="#cccac0" strokeWidth="1" />
      </motion.g>

      {/* ── 11. BIGOTE de morsa con volumen ─────────────────────────────── */}
      {/* Sombra de contacto debajo */}
      <ellipse
        cx="300"
        cy="408"
        rx="92"
        ry="10"
        fill="#3a1810"
        opacity="0.32"
        filter="url(#softBlur)"
      />
      {/* Lóbulo principal */}
      <path
        d="M 218 362
           Q 250 354 282 364
           Q 300 368 318 364
           Q 350 354 382 362
           Q 396 388 378 404
           Q 358 410 336 402
           Q 320 396 300 396
           Q 280 396 264 402
           Q 242 410 222 404
           Q 204 388 218 362 Z"
        fill="url(#mustacheGrad)"
      />
      {/* Highlight superior */}
      <path
        d="M 230 366 Q 260 360 290 366 Q 310 368 330 366 Q 360 360 374 366"
        stroke="#d4cec8"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      />
      {/* Separación central del bigote (entre los dos lóbulos) */}
      <path
        d="M 300 368 Q 298 380 300 396"
        stroke="#5a544e"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      {/* Texturas de pelos */}
      <g stroke="#6a625a" strokeWidth="0.9" opacity="0.65" strokeLinecap="round">
        <line x1="232" y1="370" x2="226" y2="384" />
        <line x1="244" y1="370" x2="240" y2="386" />
        <line x1="256" y1="370" x2="254" y2="388" />
        <line x1="268" y1="370" x2="268" y2="388" />
        <line x1="282" y1="372" x2="284" y2="390" />
        <line x1="318" y1="372" x2="316" y2="390" />
        <line x1="332" y1="370" x2="332" y2="388" />
        <line x1="344" y1="370" x2="346" y2="388" />
        <line x1="356" y1="370" x2="360" y2="386" />
        <line x1="368" y1="370" x2="374" y2="384" />
      </g>
      {/* Puntas afinadas */}
      <path
        d="M 204 388 Q 196 392 192 398"
        stroke="#7a7470"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 396 388 Q 404 392 408 398"
        stroke="#7a7470"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* ── 12. EXTRAS por estado ────────────────────────────────────────── */}
      {/* Vena */}
      <motion.path
        d="M 178 218 Q 182 232 176 246 Q 170 260 178 274"
        stroke="#4a7faa"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        animate={{ opacity: showVein ? veinIntensity : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Gota de sudor */}
      {showSweat && (
        <g
          className="animate-sweat-drop"
          style={{ transformOrigin: '410px 232px', transformBox: 'fill-box' }}
        >
          <path
            d="M 410 232 Q 402 246 410 256 Q 418 246 410 232 Z"
            fill="#7fc4e8"
          />
          <ellipse cx="406" cy="240" rx="1.8" ry="2.5" fill="white" opacity="0.85" />
        </g>
      )}

      {/* Nubes rojas de furia */}
      <motion.g
        animate={{ opacity: showClouds ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <g className="animate-pulse-red" style={{ transformOrigin: '170px 140px' }}>
          <circle cx="170" cy="140" r="14" fill="#e24b4a" opacity="0.75" />
          <circle cx="158" cy="146" r="9" fill="#e24b4a" opacity="0.75" />
          <circle cx="182" cy="146" r="10" fill="#e24b4a" opacity="0.75" />
        </g>
        <g
          className="animate-pulse-red"
          style={{ transformOrigin: '300px 95px', animationDelay: '0.4s' }}
        >
          <circle cx="300" cy="95" r="13" fill="#e24b4a" opacity="0.75" />
          <circle cx="288" cy="101" r="9" fill="#e24b4a" opacity="0.75" />
          <circle cx="312" cy="101" r="9" fill="#e24b4a" opacity="0.75" />
        </g>
        <g
          className="animate-pulse-red"
          style={{ transformOrigin: '430px 140px', animationDelay: '0.8s' }}
        >
          <circle cx="430" cy="140" r="14" fill="#e24b4a" opacity="0.75" />
          <circle cx="418" cy="146" r="9" fill="#e24b4a" opacity="0.75" />
          <circle cx="442" cy="146" r="10" fill="#e24b4a" opacity="0.75" />
        </g>
      </motion.g>

      {/* Líneas cinéticas */}
      <motion.g
        stroke="#e24b4a"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ opacity: showLines ? 0.85 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <line x1="100" y1="230" x2="130" y2="240" />
        <line x1="95" y1="275" x2="125" y2="278" />
        <line x1="100" y1="320" x2="130" y2="310" />
        <line x1="500" y1="230" x2="470" y2="240" />
        <line x1="505" y1="275" x2="475" y2="278" />
        <line x1="500" y1="320" x2="470" y2="310" />
      </motion.g>
    </g>
  );
}

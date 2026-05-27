'use client';

import { MeetingType, isPrivate as computeIsPrivate } from '@/lib/types';

interface Props {
  meetingType: MeetingType;
}

export default function Office({ meetingType }: Props) {
  const isPrivate = computeIsPrivate(meetingType);

  return (
    <svg
      viewBox="0 0 1000 700"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* Pared con calor */}
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0b896" />
          <stop offset="55%" stopColor="#c89570" />
          <stop offset="100%" stopColor="#a87450" />
        </linearGradient>
        {/* Piso de madera */}
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a4628" />
          <stop offset="100%" stopColor="#3a2418" />
        </linearGradient>
        {/* Escritorio */}
        <linearGradient id="deskTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9a6a44" />
          <stop offset="50%" stopColor="#7a4a2a" />
          <stop offset="100%" stopColor="#4a2a18" />
        </linearGradient>
        {/* Cielo en ventana */}
        <linearGradient id="windowSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ec5dc" />
          <stop offset="60%" stopColor="#d4dde0" />
          <stop offset="100%" stopColor="#e8e2d0" />
        </linearGradient>
        {/* Halo cálido detrás del personaje */}
        <radialGradient id="characterHalo" cx="50%" cy="48%" r="40%">
          <stop offset="0%" stopColor="#fce0b6" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#fce0b6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#fce0b6" stopOpacity="0" />
        </radialGradient>
        {/* Vignette de bordes (oscuro) */}
        <radialGradient id="vignette" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="75%" stopColor="#000000" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.55" />
        </radialGradient>
        {/* Overlay privada */}
        <radialGradient id="privateVignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#3d2570" stopOpacity="0" />
          <stop offset="100%" stopColor="#1a0e3a" stopOpacity="0.55" />
        </radialGradient>
        <filter id="bgBlur">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
        <filter id="softShadow">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* PARED */}
      <rect x="0" y="0" width="1000" height="555" fill="url(#wall)" />

      {/* VENTANA grande detrás del personaje */}
      <g filter="url(#bgBlur)">
        {/* Marco exterior */}
        <rect x="320" y="60" width="360" height="280" fill="#3a2418" rx="6" />
        {/* Vidrio */}
        <rect x="334" y="74" width="332" height="252" fill="url(#windowSky)" />
        {/* Crucetas */}
        <line x1="500" y1="74" x2="500" y2="326" stroke="#3a2418" strokeWidth="6" />
        <line x1="334" y1="200" x2="666" y2="200" stroke="#3a2418" strokeWidth="6" />
        {/* Edificios borrosos */}
        <g opacity="0.4" fill="#7a90a4">
          <rect x="346" y="180" width="38" height="20" />
          <rect x="388" y="160" width="28" height="40" />
          <rect x="420" y="190" width="32" height="10" />
          <rect x="456" y="170" width="34" height="30" />
          <rect x="506" y="175" width="30" height="25" />
          <rect x="540" y="160" width="40" height="40" />
          <rect x="584" y="180" width="30" height="20" />
          <rect x="618" y="170" width="36" height="30" />
        </g>
        {/* Reflejo de luz en la ventana */}
        <path
          d="M 360 90 L 380 90 L 320 270 L 300 270 Z"
          fill="white"
          opacity="0.12"
        />
      </g>

      {/* HALO cálido detrás del personaje */}
      <ellipse cx="500" cy="320" rx="280" ry="280" fill="url(#characterHalo)" />

      {/* DIPLOMA — izquierda, simple */}
      <g filter="url(#bgBlur)" opacity="0.92">
        <rect x="70" y="120" width="140" height="180" fill="#7a5a36" rx="3" />
        <rect x="80" y="130" width="120" height="160" fill="#f4ead6" />
        <line x1="100" y1="160" x2="180" y2="160" stroke="#a89373" strokeWidth="1.5" />
        <g opacity="0.4">
          <rect x="100" y="180" width="80" height="3" fill="#c9b89a" />
          <rect x="100" y="195" width="74" height="2" fill="#c9b89a" />
          <rect x="100" y="208" width="80" height="2" fill="#c9b89a" />
          <rect x="100" y="220" width="60" height="2" fill="#c9b89a" />
        </g>
        {/* Sello dorado */}
        <circle cx="170" cy="262" r="14" fill="#d4a84a" />
        <circle cx="170" cy="262" r="10" fill="none" stroke="#a87a30" strokeWidth="1" />
        <path d="M 170 274 L 164 285 L 170 281 L 176 285 Z" fill="#d4a84a" />
      </g>

      {/* ESTANTERÍA — derecha, simple */}
      <g filter="url(#bgBlur)">
        <rect x="830" y="180" width="130" height="360" fill="#5a3a22" />
        <rect x="836" y="186" width="118" height="4" fill="#3a2418" />
        <rect x="836" y="320" width="118" height="4" fill="#3a2418" />
        {/* Biblioratos */}
        <rect x="846" y="194" width="22" height="124" fill="#3a2a1a" />
        <rect x="870" y="194" width="22" height="124" fill="#5e2820" />
        <rect x="894" y="194" width="22" height="124" fill="#3a2a1a" />
        <rect x="918" y="194" width="22" height="124" fill="#6a4828" />
        {/* Etiquetas en biblioratos */}
        <rect x="848" y="240" width="18" height="14" fill="#f4ead6" opacity="0.5" />
        <rect x="872" y="240" width="18" height="14" fill="#f4ead6" opacity="0.5" />
        <rect x="896" y="240" width="18" height="14" fill="#f4ead6" opacity="0.5" />
        <rect x="920" y="240" width="18" height="14" fill="#f4ead6" opacity="0.5" />
        {/* Planta */}
        <g transform="translate(870, 326)">
          <ellipse cx="22" cy="105" rx="28" ry="6" fill="#1a0e08" opacity="0.45" />
          {/* Maceta */}
          <path d="M 4 90 L 8 60 L 36 60 L 40 90 Z" fill="#a8632e" />
          <rect x="6" y="56" width="32" height="6" fill="#8a4a22" />
          {/* Hojas */}
          <path
            d="M 22 60
               Q 10 40 6 18  Q 14 26 18 38
               Q 22 18 30 10  Q 28 28 26 38
               Q 36 30 42 18  Q 40 38 32 48
               Q 24 52 22 60 Z"
            fill="#3d7a3d"
          />
          <path
            d="M 22 60 Q 30 46 38 34 Q 32 50 26 56 Z"
            fill="#5a9a5a"
            opacity="0.85"
          />
        </g>
      </g>

      {/* PISO */}
      <rect x="0" y="555" width="1000" height="145" fill="url(#floor)" />
      {/* Sombra del personaje en el piso (detrás del escritorio) */}
      <ellipse
        cx="500"
        cy="560"
        rx="280"
        ry="14"
        fill="#000"
        opacity="0.35"
        filter="url(#softShadow)"
      />

      {/* ESCRITORIO — primer plano */}
      <g>
        {/* Sombra debajo del escritorio */}
        <rect x="0" y="700" width="1000" height="0" fill="#000" opacity="0.4" />
        {/* Top */}
        <rect x="0" y="555" width="1000" height="110" fill="url(#deskTop)" />
        {/* Edge highlight */}
        <rect x="0" y="555" width="1000" height="6" fill="#a8744a" />
        <rect x="0" y="561" width="1000" height="2" fill="#3a2418" opacity="0.7" />
        {/* Vetas de la madera */}
        <g stroke="#3a2418" strokeWidth="0.6" opacity="0.45">
          <path d="M 100 600 Q 300 612 500 600 T 900 605" fill="none" />
          <path d="M 50 630 Q 250 642 450 630 T 850 638" fill="none" />
        </g>

        {/* Laptop cerrada (centro-izq) */}
        <g transform="translate(150, 530)">
          {/* Sombra */}
          <ellipse cx="80" cy="46" rx="78" ry="6" fill="#1a0e08" opacity="0.45" />
          {/* Cuerpo */}
          <rect x="6" y="32" width="148" height="14" rx="2" fill="#2a2a30" />
          <rect x="6" y="32" width="148" height="3" rx="1" fill="#404048" />
          {/* Tapa cerrada */}
          <path
            d="M 4 32 L 12 22 L 148 22 L 156 32 Z"
            fill="#3a3a42"
          />
          <rect x="14" y="24" width="132" height="8" fill="#2a2a30" />
          {/* Logo */}
          <circle cx="80" cy="28" r="3" fill="#5a5a62" />
        </g>

        {/* Papeles agrupados a la izquierda */}
        <g transform="translate(30, 540)">
          <rect x="0" y="14" width="90" height="28" rx="2" fill="#fafafa" transform="rotate(-3 45 28)" />
          <rect x="6" y="10" width="90" height="28" rx="2" fill="#f0eada" transform="rotate(2 51 24)" />
          <rect x="-4" y="18" width="90" height="26" rx="2" fill="#fafafa" transform="rotate(-1 41 31)" />
          <g stroke="#888" strokeWidth="0.5" opacity="0.55" transform="rotate(-1 41 31)">
            <line x1="6" y1="22" x2="78" y2="22" />
            <line x1="6" y1="28" x2="74" y2="28" />
            <line x1="6" y1="34" x2="68" y2="34" />
          </g>
        </g>

        {/* Taza de café (a la derecha del personaje) */}
        <g transform="translate(640, 510)">
          <ellipse cx="44" cy="74" rx="56" ry="7" fill="#1a0e08" opacity="0.5" />
          {/* Vapor */}
          <g opacity="0.65">
            <path
              d="M 30 0 Q 26 -10 30 -20 Q 34 -28 30 -38"
              stroke="#f4ead6"
              strokeWidth="2.8"
              fill="none"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="0;0.8;0"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 44 0 Q 48 -12 44 -22 Q 40 -32 46 -42"
              stroke="#f4ead6"
              strokeWidth="2.8"
              fill="none"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="0;0.8;0"
                dur="2.6s"
                begin="0.6s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 58 0 Q 54 -10 58 -20 Q 62 -30 56 -40"
              stroke="#f4ead6"
              strokeWidth="2.8"
              fill="none"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="0;0.8;0"
                dur="2.6s"
                begin="1.3s"
                repeatCount="indefinite"
              />
            </path>
          </g>
          {/* Cuerpo taza */}
          <path
            d="M 10 8 L 14 70 Q 14 78 22 78 L 66 78 Q 74 78 74 70 L 78 8 Z"
            fill="#fafafa"
          />
          {/* Sombra interior taza */}
          <path
            d="M 14 8 L 16 18 Q 44 22 72 18 L 74 8 Z"
            fill="#d4cec0"
            opacity="0.6"
          />
          {/* Café */}
          <ellipse cx="44" cy="10" rx="32" ry="6" fill="#2a1408" />
          <ellipse cx="44" cy="9" rx="30" ry="4" fill="#3a1d10" />
          {/* Asa */}
          <path
            d="M 74 22 Q 96 22 96 44 Q 96 64 74 60"
            stroke="#fafafa"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
          {/* Asa - sombra */}
          <path
            d="M 78 26 Q 92 26 92 44 Q 92 60 76 58"
            stroke="#d4cec0"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Pluma estilográfica */}
        <g transform="translate(380, 600) rotate(-12)">
          <rect x="0" y="0" width="80" height="6" rx="3" fill="#1a1a1f" />
          <rect x="0" y="0" width="20" height="6" rx="3" fill="#c9a14a" />
          <path d="M 80 3 L 92 6 L 80 9 Z" fill="#2a2a30" />
          <line x1="80" y1="6" x2="89" y2="6" stroke="#c9a14a" strokeWidth="0.8" />
        </g>
      </g>

      {/* VIGNETTE oscuro de bordes */}
      <rect x="0" y="0" width="1000" height="700" fill="url(#vignette)" />

      {/* Overlay reunión privada */}
      {isPrivate && (
        <rect x="0" y="0" width="1000" height="700" fill="url(#privateVignette)" />
      )}
    </svg>
  );
}

'use client';

export default function AvatarBody() {
  return (
    <g id="body">
      {/* Sombra de contacto al piso */}
      <ellipse
        cx="300"
        cy="694"
        rx="210"
        ry="18"
        fill="#0a0604"
        opacity="0.55"
        filter="url(#softBlur)"
      />

      {/* ── CUELLO — trapezoide ancho, mismo ancho que la barbilla ─────── */}
      {/* Top: x=238 a 362 (ancho 124px, matchea la barbilla) */}
      {/* Bottom: x=258 a 342 (queda dentro del cuello de camisa) */}
      <path
        d="M 238 400
           L 362 400
           L 348 482
           Q 300 492 252 482 Z"
        fill="url(#skinGrad)"
      />
      {/* Sombra lateral del cuello (oscurece los bordes para volumen) */}
      <path
        d="M 238 400 Q 224 440 252 482"
        stroke="#8a5a3a"
        strokeWidth="3"
        fill="none"
        opacity="0.35"
        strokeLinecap="round"
      />
      <path
        d="M 362 400 Q 376 440 348 482"
        stroke="#8a5a3a"
        strokeWidth="3"
        fill="none"
        opacity="0.35"
        strokeLinecap="round"
      />
      {/* Línea de la nuez de Adán */}
      <path
        d="M 292 460 Q 300 466 308 460"
        stroke="#8a5a3a"
        strokeWidth="1.5"
        fill="none"
        opacity="0.45"
        strokeLinecap="round"
      />
      {/* Sombra de mentón ANCHA, para enraizar la cabeza al cuello */}
      <ellipse
        cx="300"
        cy="418"
        rx="86"
        ry="12"
        fill="#5a3520"
        opacity="0.5"
        filter="url(#softBlur)"
      />

      {/* ── SACO — silueta con hombros caídos, redondeados ─────────────── */}
      <path
        d="M 60 700
           L 124 518
           Q 184 458 248 458
           L 352 458
           Q 416 458 476 518
           L 540 700 Z"
        fill="url(#suitGrad)"
      />
      {/* Sombra interna derecha del saco (volumen) */}
      <path
        d="M 540 700 L 476 518 Q 416 458 352 458 L 340 700 Z"
        fill="#0a0a0e"
        opacity="0.35"
      />
      {/* Sombra del cuello sobre el saco */}
      <ellipse
        cx="300"
        cy="478"
        rx="60"
        ry="8"
        fill="#1a1a1f"
        opacity="0.45"
        filter="url(#softBlur)"
      />

      {/* ── CAMISA — visible dentro del V del saco ─────────────────────── */}
      <path
        d="M 252 458
           L 348 458
           L 326 610
           L 274 610 Z"
        fill="url(#shirtGrad)"
      />
      {/* Cuello de camisa - los dos triángulos que se cierran sobre el cuello */}
      <path
        d="M 252 458
           L 290 478
           L 286 500
           L 254 470 Z"
        fill="#fffaed"
      />
      <path
        d="M 348 458
           L 310 478
           L 314 500
           L 346 470 Z"
        fill="#fffaed"
      />
      {/* Sombra debajo del cuello de camisa */}
      <path
        d="M 254 470 L 290 478 L 286 500"
        stroke="#c8b89a"
        strokeWidth="1.3"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M 346 470 L 310 478 L 314 500"
        stroke="#c8b89a"
        strokeWidth="1.3"
        fill="none"
        opacity="0.7"
      />

      {/* ── LAPELS — bordes del saco que forman el V ───────────────────── */}
      {/* Pliegue del lapel (línea oscura interior) */}
      <path
        d="M 248 458 L 296 600"
        stroke="#0a0a0e"
        strokeWidth="2.5"
        fill="none"
        opacity="0.85"
        strokeLinecap="round"
      />
      <path
        d="M 352 458 L 304 600"
        stroke="#0a0a0e"
        strokeWidth="2.5"
        fill="none"
        opacity="0.85"
        strokeLinecap="round"
      />
      {/* Highlight del lapel (línea clara paralela) */}
      <path
        d="M 252 462 L 299 596"
        stroke="#6a6a74"
        strokeWidth="1.2"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      />
      <path
        d="M 348 462 L 301 596"
        stroke="#6a6a74"
        strokeWidth="1.2"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      />

      {/* ── CORBATA ─────────────────────────────────────────────────────── */}
      {/* Nudo */}
      <path
        d="M 284 510
           L 316 510
           L 322 545
           L 278 545 Z"
        fill="url(#tieGrad)"
      />
      {/* Highlight del nudo */}
      <path
        d="M 287 514 L 297 514"
        stroke="#e07268"
        strokeWidth="1.2"
        fill="none"
        opacity="0.7"
      />
      {/* Sombra inferior del nudo */}
      <path
        d="M 278 545 L 322 545 L 320 549 L 280 549 Z"
        fill="#5a1818"
        opacity="0.75"
      />
      {/* Cuerpo de la corbata */}
      <path
        d="M 280 549
           L 320 549
           L 332 700
           L 268 700 Z"
        fill="url(#tieGrad)"
      />
      {/* Highlight vertical */}
      <path
        d="M 296 555 L 298 695"
        stroke="#e07268"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      {/* Sombra a la derecha de la corbata */}
      <path
        d="M 308 555 L 312 695"
        stroke="#5a1818"
        strokeWidth="2"
        fill="none"
        opacity="0.45"
      />

      {/* ── BOTONES del saco ────────────────────────────────────────────── */}
      <g>
        <circle cx="296" cy="640" r="4" fill="#0e0e10" />
        <circle cx="294" cy="638" r="1.2" fill="#3a3a42" />
        <circle cx="296" cy="680" r="4" fill="#0e0e10" />
        <circle cx="294" cy="678" r="1.2" fill="#3a3a42" />
      </g>

      {/* ── PLIEGUES sutiles del saco ──────────────────────────────────── */}
      <path
        d="M 184 510 Q 168 600 122 700"
        stroke="#1a1a1f"
        strokeWidth="2"
        fill="none"
        opacity="0.45"
        strokeLinecap="round"
      />
      <path
        d="M 416 510 Q 432 600 478 700"
        stroke="#1a1a1f"
        strokeWidth="2"
        fill="none"
        opacity="0.45"
        strokeLinecap="round"
      />
      {/* Highlight del hombro izquierdo */}
      <path
        d="M 200 480 Q 240 463 268 460"
        stroke="#6a6a74"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
    </g>
  );
}

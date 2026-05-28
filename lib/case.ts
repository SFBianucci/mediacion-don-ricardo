export const CASE_BRIEFING = {
  title: 'Florencia Gómez vs. Suavecito S.A.',
  modality: 'Audiencia de mediación prejudicial obligatoria (Ley 26.589)',
  parties: {
    requirente: {
      name: 'Florencia Gómez',
      role: 'Parte requirente — consumidora',
      profile:
        'Compró online un colchón que no cumplió sus expectativas y ejerció el derecho de arrepentimiento dentro del plazo legal. Suavecito se lo negó.',
    },
    requeridoDueno: {
      name: 'Ricardo Almeyda',
      nickname: 'Don Ricardo',
      role: 'Dueño de Suavecito S.A.',
      profile:
        'Empresa familiar de colchones online. Vende exclusivamente por e-commerce. Política comercial uniforme aplicada a todos los clientes. Le importa el flujo de caja y la reputación.',
    },
    requeridoLetrado: {
      name: 'Dr. Pérez',
      role: 'Letrado patrocinante de Suavecito S.A.',
      profile:
        'Voz técnico-jurídica del lado demandado: cláusulas, jurisprudencia, defensa procesal.',
    },
    abogadaRequirente: {
      name: 'Dra. López',
      role: 'Letrada patrocinante de Florencia',
      profile:
        'Te acompaña a vos cuando jugás en rol de abogado/a — pero la voz cantante en las fases de rol abogada/o sos vos.',
    },
  },
  facts: [
    'El 2 de mayo, Florencia Gómez compró online en suavecito.com.ar un colchón por $980.000, con tarjeta de crédito.',
    'El colchón se entregó el 5 de mayo. Al probarlo, Florencia notó que era de espuma cuando esperaba uno de resortes (la ficha del producto era ambigua).',
    'El 7 de mayo —dentro del plazo de 10 días corridos del Art. 34 LDC y Art. 1110 CCyCN— Florencia notificó por WhatsApp Business que ejercía el derecho de arrepentimiento y pedía reintegro a la tarjeta.',
    'Suavecito le contestó que "por política interna" no reintegran dinero, solo entregan una Gift Card con validez de 3 meses.',
    'Además, le exigieron que Florencia se hiciera cargo del costo del envío de devolución del colchón.',
    'Suavecito invoca sus Términos y Condiciones como contrato de adhesión válido para denegar el reintegro a la tarjeta.',
    'Florencia ya tuvo que comprar otro colchón en otro lado: está en plena mudanza y necesita liquidez, no un voucher.',
    'Inició mediación prejudicial reclamando $1.350.000 (capital $980.000 + daño punitivo Art. 52 bis LDC por $370.000).',
  ],
  claim: {
    total: 1350000,
    items: [
      { concept: 'Reintegro del precio del colchón (Art. 34 LDC)', amount: 980000 },
      { concept: 'Daño punitivo (Art. 52 bis LDC) por trato indigno', amount: 370000 },
    ],
  },
  hiddenInfoSuavecito: [
    'La cláusula "sin reembolso a la tarjeta para compras en promoción" es la misma para todos los clientes: si la justicia la declara nula, hay riesgo de acción colectiva (Art. 55 LDC).',
    'Tienen logística inversa propia operativa: pueden retirar el colchón sin costo extra.',
    'El verdadero interés del lado Suavecito es preservar el flujo de caja, no el costo de la devolución puntual.',
    'Dr. Pérez sabe que la cláusula es abusiva (Art. 37 LDC y Art. 1119 CCyCN): se cae en cualquier juicio del fuero del Consumidor.',
    'Una condena pública con daño punitivo afectaría reputación corporativa en redes y reviews.',
  ],
  hiddenInfoFlorencia: [
    'Necesita liquidez ya: está en plena mudanza y ya pagó otro colchón con tarjeta — el cupo está bloqueado.',
    'No quiere una Gift Card de un comercio donde no piensa volver a comprar.',
    'Aceptaría desistir del daño punitivo si recupera capital íntegro + logística inversa sin costo para ella.',
    'MAAN: demanda en el fuero del Consumidor de CABA (Ley 6.286/2020), gratuita para el consumidor (Art. 53 LDC) y con daño punitivo en agenda.',
    'Debilidad del MAAN: 2 a 4 años de espera; los $980.000 se licúan por inflación.',
  ],
  positions: {
    florencia: {
      declared: 'Cobrar los $1.350.000 íntegros (capital + daño punitivo)',
      interest:
        'Recuperar el dinero a la tarjeta ya, no perder más tiempo y sentir que su derecho fue ejercido, no mendigado.',
    },
    suavecito: {
      declared:
        'Solo Gift Card por $980.000 con validez de 3 meses, y la clienta paga el envío de devolución',
      interest:
        'Preservar el flujo de caja, no sentar precedente con la cláusula de T&C, proteger la reputación corporativa.',
    },
  },
};

// Principios del Art. 7 de la Ley 26.589 — el mediador debe enunciarlos en el discurso de apertura
export const PRINCIPIOS_ART7 = [
  { key: 'imparcialidad', label: 'Imparcialidad', desc: 'del mediador frente a los intereses de las partes' },
  { key: 'voluntariedad', label: 'Voluntariedad', desc: 'de las partes para participar' },
  { key: 'igualdad', label: 'Igualdad', desc: 'de las partes en el procedimiento' },
  { key: 'confidencialidad', label: 'Confidencialidad', desc: 'de todo lo dicho o aportado en la mediación' },
  { key: 'comunicacion-directa', label: 'Comunicación directa', desc: 'entre las partes en miras a la búsqueda creativa de la solución' },
  { key: 'celeridad', label: 'Celeridad', desc: 'en función del avance de las negociaciones' },
  { key: 'consideracion-vulnerables', label: 'Consideración especial', desc: 'de menores, personas con discapacidad y personas mayores dependientes' },
];

// Las 8 etapas estructurales del proceso (para el badge superior)
export const PROCESO_ETAPAS = [
  { num: 1, key: 'apertura', label: 'Discurso de apertura', desc: 'Legitimación, empowerment, principios del Art. 7 y agenda' },
  { num: 2, key: 'conjunta-inicial', label: 'Reunión conjunta inicial', desc: 'Las partes narran. El mediador escucha activamente y parafrasea' },
  { num: 3, key: 'privada-florencia', label: 'Reunión privada con Florencia', desc: 'Exploración de intereses reales y MAAN' },
  { num: 4, key: 'privada-suavecito', label: 'Reunión privada con Suavecito', desc: 'Pregunta circular, agente de la realidad, abogado del diablo' },
  { num: 5, key: 'replanteo', label: 'Replanteo del problema', desc: 'De posiciones a intereses, en reunión conjunta' },
  { num: 6, key: 'brainstorming', label: 'Brainstorming', desc: 'Generar opciones — separar generar de decidir' },
  { num: 7, key: 'criterios-objetivos', label: 'Criterios objetivos', desc: 'Anclar el acuerdo en normas y estándares externos' },
  { num: 8, key: 'acuerdo', label: 'Acuerdo', desc: 'Redacción Harvard de la cláusula final' },
];

// Las 4 opciones de mutuo beneficio del PDF del TP (fase 11 de brainstorming)
// La opción D es la Harvard plena (gana-gana) — combina los intereses reales de ambas partes.
export const OPCIONES_MUTUO_BENEFICIO = [
  {
    id: 'mb-A',
    text: 'Devolución del dinero en un pago único al medio de pago original, pero el envío de devolución queda a cargo de Florencia.',
  },
  {
    id: 'mb-B',
    text: 'Devolución en cuotas, pero Florencia no se hace cargo del envío.',
  },
  {
    id: 'mb-C',
    text: 'Gift Card por el monto total con validez extendida a 12 meses y envío a cargo de la empresa.',
  },
  {
    id: 'mb-D',
    text: 'Devolución del dinero más un cupón de descuento para futura compra, a cambio de que Florencia desista del daño punitivo.',
  },
];

// Cláusulas del acuerdo final, condicionadas a la opción elegida en la fase 11.
// Cada entrada describe cómo queda redactado el acuerdo según la elección del jugador.
export interface AcuerdoVariante {
  tono: 'colaborativo' | 'parcial' | 'subóptimo' | 'precario';
  preludio: string;
  clausulas: string[];
  cierre: string;
}

export const ACUERDO_VARIANTES: Record<string, AcuerdoVariante> = {
  'mb-D': {
    tono: 'colaborativo',
    preludio:
      'Las partes, asistidas por sus letrados y en presencia del/la mediador/a interviniente, llegan a un acuerdo colaborativo en los términos del método Harvard. Se conviene lo siguiente:',
    clausulas: [
      'PRIMERA — SUAVECITO S.A. reintegra a la Sra. Florencia GÓMEZ la suma de pesos novecientos ochenta mil ($980.000) al medio de pago original (tarjeta de crédito), dentro de los diez (10) días hábiles de suscripto el presente acuerdo.',
      'SEGUNDA — La logística inversa del producto queda a cargo exclusivo de SUAVECITO S.A., sin costo alguno para la requirente, dentro de los cinco (5) días hábiles posteriores a la firma.',
      'TERCERA — SUAVECITO S.A. entrega a la requirente un cupón de descuento del veinte por ciento (20%) para una futura compra, con validez de doce (12) meses, en reconocimiento del trato recibido.',
      'CUARTA — La requirente desiste expresa y formalmente de la acción por daño punitivo (Art. 52 bis Ley 24.240) por los hechos materia de esta mediación.',
      'QUINTA — SUAVECITO S.A. se compromete a la revisión de la cláusula 7.3 de sus Términos y Condiciones a fin de adecuarla a los Arts. 34 y 37 de la Ley 24.240.',
      'SEXTA — El presente acuerdo tiene efecto cancelatorio total respecto del reclamo objeto de esta mediación.',
    ],
    cierre:
      'Ambas partes salen satisfechas en sus intereses: Florencia recupera liquidez inmediata, ve reconocido su reclamo como ejercicio de un derecho y obtiene un gesto comercial. Suavecito protege el flujo de caja, cierra el riesgo del daño punitivo y resguarda su reputación corporativa. Gana-gana.',
  },
  'mb-A': {
    tono: 'parcial',
    preludio:
      'Las partes llegan a un acuerdo que resuelve el aspecto patrimonial central, pero deja costos del lado de la requirente. Se conviene:',
    clausulas: [
      'PRIMERA — SUAVECITO S.A. reintegra a Florencia GÓMEZ la suma de pesos novecientos ochenta mil ($980.000) al medio de pago original, en un pago único, dentro de los diez (10) días hábiles.',
      'SEGUNDA — El costo del envío de devolución del colchón queda a cargo exclusivo de la requirente.',
      'TERCERA — La requirente desiste de la acción por daño punitivo (Art. 52 bis Ley 24.240).',
      'CUARTA — La cláusula 7.3 de los T&C de SUAVECITO S.A. no es objeto de este acuerdo.',
      'QUINTA — El presente acuerdo tiene efecto cancelatorio respecto del reclamo.',
    ],
    cierre:
      'Florencia recupera el dinero pero asume un costo que el Art. 34 LDC ponía sobre el proveedor. La cláusula abusiva sigue vigente para futuros consumidores. Acuerdo aceptable pero no Harvard pleno.',
  },
  'mb-B': {
    tono: 'subóptimo',
    preludio:
      'Las partes acuerdan una devolución en cuotas con la logística por cuenta de la empresa. Se conviene:',
    clausulas: [
      'PRIMERA — SUAVECITO S.A. reintegra a Florencia GÓMEZ la suma de pesos novecientos ochenta mil ($980.000) en tres (3) cuotas mensuales, iguales y consecutivas.',
      'SEGUNDA — La logística inversa queda a cargo de SUAVECITO S.A., sin costo para la requirente.',
      'TERCERA — La requirente desiste de la acción por daño punitivo (Art. 52 bis Ley 24.240).',
      'CUARTA — La cláusula 7.3 de los T&C no se modifica.',
      'QUINTA — El presente acuerdo tiene efecto cancelatorio respecto del reclamo.',
    ],
    cierre:
      'Florencia cobra pero pierde frente a la inflación —su interés real era liquidez ahora. La empresa preserva su flujo de caja a costa del cliente. Acuerdo competitivo disfrazado.',
  },
  'mb-C': {
    tono: 'precario',
    preludio:
      'Las partes acuerdan una solución basada en Gift Card. Se conviene:',
    clausulas: [
      'PRIMERA — SUAVECITO S.A. entrega a Florencia GÓMEZ una Gift Card por el monto total del producto ($980.000), con validez de doce (12) meses.',
      'SEGUNDA — La logística inversa queda a cargo de SUAVECITO S.A.',
      'TERCERA — La requirente desiste de toda acción incluyendo el daño punitivo.',
      'CUARTA — La cláusula 7.3 queda implícitamente convalidada por este acuerdo.',
    ],
    cierre:
      'Florencia no recupera dinero: queda atada a comprar en un comercio donde no piensa volver. El Art. 34 LDC quedó desactivado por vía contractual. Acuerdo precario: si se incumple, el contracargo a tarjeta ya no es posible.',
  },
};

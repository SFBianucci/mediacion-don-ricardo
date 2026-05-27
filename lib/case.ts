export const CASE_BRIEFING = {
  title: 'Florencia Gómez vs. Suavecito S.A.',
  modality: 'Audiencia de mediación prejudicial obligatoria (Ley 26.589)',
  yourRole: 'Abogado/a de Florencia Gómez (parte requirente)',
  opposite: {
    donRicardo: {
      name: 'Ricardo Almeyda',
      nickname: 'Don Ricardo',
      role: 'Dueño de Suavecito S.A.',
      company:
        'Suavecito S.A. — fabricante y vendedor online de colchones. Vende exclusivamente por e-commerce. Política comercial uniforme aplicada a todos los clientes.',
    },
    drPerez: {
      name: 'Dr. Pérez',
      role: 'Letrado patrocinante de Suavecito S.A.',
      profile:
        'Lleva la voz técnico-jurídica del lado demandado: cláusulas, jurisprudencia, defensa procesal. Acompaña a Don Ricardo y endurece la posición cuando ve riesgo.',
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

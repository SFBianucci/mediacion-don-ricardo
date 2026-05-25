export const CASE_BRIEFING = {
  title: 'Camila Vidal vs. Almeyda Tech',
  modality: 'Audiencia de mediación prejudicial obligatoria (Ley 26.589)',
  yourRole: 'Abogado/a de Camila Vidal (parte requirente)',
  opposite: {
    name: 'Ricardo Almeyda',
    nickname: 'Don Ricardo',
    role: 'Dueño de Almeyda Tech S.R.L.',
    company:
      'E-commerce argentino de electrónica y gaming. 8 años en el mercado. Empresa familiar.',
  },
  facts: [
    'El 15 de marzo, Camila Vidal compró en almeyda-tech.com.ar un monitor gamer por $1.480.000, pagando con transferencia bancaria (15% off por ese medio).',
    'La web prometía envío en 48 hs hábiles. El monitor llegó 8 días tarde.',
    'Al abrirlo, tenía zonas oscuras en pantallas claras y varios píxeles que no funcionaban. Camila sacó fotos y videos.',
    'Reclamó al día siguiente por el WhatsApp Business oficial. Le contestaron 6 días después.',
    "La empresa dijo que el monitor 'está dentro de los parámetros normales del fabricante' y ofreció $200.000 de crédito para una próxima compra. Camila no aceptó.",
    'Camila publicó en Instagram un posteo y stories contando lo que pasó. Etiquetó a Almeyda Tech. Tuvo bastante repercusión.',
    'Almeyda Tech le mandó carta documento intimándola a borrar todo.',
    'Camila inició mediación prejudicial.',
  ],
  claim: {
    total: 1980000,
    items: [
      { concept: 'Devolución del monitor', amount: 1480000 },
      { concept: 'Daño moral por mala atención', amount: 300000 },
      { concept: 'Honorarios de abogada', amount: 200000 },
    ],
  },
  hiddenInfoAlmeydaTech: [
    'Hay otros 3 reclamos similares en curso, del mismo lote de monitores.',
    'Tienen stock del modelo siguiente del mismo fabricante, técnicamente superior, disponible para usar como reemplazo.',
    'El proveedor PixelWave les debe créditos comerciales por una promoción incumplida.',
    'Están por cerrar una ronda de inversión con un fondo que mira reputación online.',
    'Don Ricardo reconoce off-the-record que ese lote tuvo un problema sistémico.',
  ],
  hiddenInfoCamila: [
    'Ya hizo denuncia paralela en Defensa del Consumidor antes de la mediación.',
    'Aceptaría borrar el posteo y las stories si hay acuerdo digno.',
    'MAAN: Defensa del Consumidor (gratis, sin abogado obligatorio) o juicio civil con pedido de daño punitivo (art. 52 bis Ley 24.240).',
  ],
  positions: {
    camila: {
      declared: 'Cobrar los $1.980.000 íntegros',
      interest:
        'Que la traten como consumidora con derechos, una solución concreta, no perder más tiempo.',
    },
    almeyda: {
      declared: 'Pagar como máximo $200.000 de crédito',
      interest:
        'No sentar precedente con los otros 3 reclamos del lote, no manchar la ronda de inversión, no descapitalizarse.',
    },
  },
};

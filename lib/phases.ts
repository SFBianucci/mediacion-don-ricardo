import { Phase } from './types';

export const PHASES: Phase[] = [
  {
    id: 1,
    title: 'Apertura y manejo de hostilidad',
    harvardPrinciple: 'Separar a la persona del problema',
    meetingType: 'joint',
    initialAngerOnEnter: 30,
    donRicardoLine:
      'Doctor/a, antes de empezar quiero dejarle algo en claro. Yo agradezco que esté acá, pero su clienta nos destrozó en Instagram antes de venir a reclamarme bien. Tengo 8 años laburando con Almeyda Tech, no soy una empresa que se ríe de la gente. Vamos a charlar, pero le pido respeto.',
    options: [
      {
        id: '1A',
        text: 'Don Ricardo, lo escucho. Entiendo que lo de Instagram lo tiene preocupado, y vamos a poder hablar de eso. ¿Le parece si primero ordenamos los temas y los vamos viendo de a uno? Mi clienta también quiere salir de esto bien parada.',
        angerDelta: -10,
        feedback:
          'Reconocés que está molesto sin darle la razón en su acusación. Reencuadrás hacia el procedimiento. Metés la idea de un interés común. Es separar a la persona del problema bien hecho.',
        isBest: true,
      },
      {
        id: '1B',
        text: 'Don Ricardo, lo de Instagram apareció porque su empresa la dejó esperando 6 días sin respuesta. Si quiere respeto, empiece por contestar a tiempo.',
        angerDelta: 18,
        feedback:
          'Contraataque personal en la apertura. Confundís a la persona con el problema. Te cargás la mesa antes de empezar.',
      },
      {
        id: '1C',
        text: 'Sí, lo entendemos. Mi clienta está dispuesta a borrar el posteo si llegamos a algo razonable.',
        angerDelta: 6,
        feedback:
          'La trampa del negociador suave. Regalás una carta importante (el posteo) sin que nadie te la haya pedido y sin nada a cambio.',
      },
      {
        id: '1D',
        text: 'Don Ricardo, esto es una mediación y rige la confidencialidad (Ley 26.589). El posteo lo discutimos después.',
        angerDelta: 4,
        feedback:
          'Procesalmente correcto, humanamente helado. Te escondés detrás de la norma para esquivar el conflicto emocional.',
      },
    ],
  },
  {
    id: 2,
    title: 'Escucha activa frente a la posición agresiva',
    harvardPrinciple: 'Escuchar antes de refutar',
    meetingType: 'joint',
    donRicardoLine:
      'El monitor está dentro de los parámetros del fabricante. Mi gente le ofreció $200.000 de crédito de buena fe y ella nos contestó destrozándonos en redes. Encima, lo usó tres días antes de reclamar — para mí, lo aceptó. Yo no le debo nada.',
    options: [
      {
        id: '2A',
        text: 'A ver si entendí, Don Ricardo: usted dice que el monitor cumplía los parámetros, que el uso muestra que mi clienta lo aceptó, y que el posteo fue una respuesta desproporcionada a una oferta de buena fe. ¿Es así?',
        angerDelta: -8,
        feedback:
          'Parafraseo. Valida que escuchaste sin conceder nada de fondo. Lo desarma porque siente que tiene espacio.',
        isBest: true,
      },
      {
        id: '2B',
        text: 'Eso no se sostiene. Su empresa no informó esos parámetros en la web, y la Ley 24.240 le exige información clara al consumidor.',
        angerDelta: 12,
        feedback:
          'Refutás antes de escuchar. Aunque el argumento sea correcto, lo tirás muy pronto y le pasás por arriba a Don Ricardo.',
      },
      {
        id: '2C',
        text: 'Bueno, en lo del uso es cierto: mi clienta necesitaba trabajar.',
        angerDelta: 6,
        feedback:
          'Concedés un punto sin pedir nada a cambio. Le regalás el argumento de la aceptación tácita.',
      },
      {
        id: '2D',
        text: 'Don Ricardo, mejor avancemos al acuerdo. Los considerandos los vemos después.',
        angerDelta: 8,
        feedback:
          'Esquivás el conflicto cortando su exposición. Don Ricardo siente que no te interesa lo que tiene para decir.',
      },
    ],
  },
  {
    id: 3,
    title: 'Indagación de intereses',
    harvardPrinciple:
      'Concentrarse en intereses, no en posiciones. Tipos de pregunta.',
    meetingType: 'private',
    privateContext:
      'El mediador llamó a una reunión privada con Don Ricardo. Es el momento de explorar qué hay detrás de su posición.',
    donRicardoLine: '$200.000 de crédito y es lo más que puedo ofrecer. Punto.',
    options: [
      {
        id: '3A',
        text: 'Don Ricardo, ¿cómo cree que vería el resto de sus clientes que Almeyda Tech reconozca un problema de este lote y lo resuelva bien? ¿Le abre puertas o le abre problemas?',
        angerDelta: -12,
        feedback:
          'Pregunta CIRCULAR. Lo invitás a mirar el problema desde afuera (sus clientes, su mercado). Saca el miedo real: sentar precedente. Es la jugada más fina del repertorio.',
        isBest: true,
        questionType: 'circular',
      },
      {
        id: '3B',
        text: '¿Qué es lo que más le preocupa de hacer un cambio o una devolución en este caso?',
        angerDelta: -7,
        feedback:
          'Pregunta ABIERTA. Buena, exploratoria, lo deja contar. Menos potente que la circular pero abre intereses.',
        questionType: 'open',
      },
      {
        id: '3C',
        text: '¿La política de los parámetros del fabricante está publicada en su web?',
        angerDelta: 3,
        feedback:
          'Pregunta CERRADA. Le pide sí/no. Le diste pista de por dónde lo vas a atacar. Cierra la conversación, no la abre.',
        questionType: 'closed',
      },
      {
        id: '3D',
        text: 'Le digo lo que yo veo: usted ya sabe que el lote tuvo problemas y no lo quiere reconocer.',
        angerDelta: 18,
        feedback:
          "Eso no es pregunta, es acusación. Mencionás 'el lote', información que Don Ricardo nunca dijo en público — le das pista de que investigaste. Se cierra herméticamente.",
        questionType: 'statement',
      },
    ],
  },
  {
    id: 4,
    title: 'Comunicación de intereses propios',
    harvardPrinciple:
      'Distinguir tu posición (la cifra) de tu interés (qué hay detrás)',
    meetingType: 'private',
    privateContext: 'Seguís en reunión privada. Don Ricardo te tira la pregunta directa.',
    donRicardoLine:
      'Bien. Ahora dígame usted: ¿qué quiere realmente su clienta? Porque si quiere los $1.980.000 enteros, nos levantamos y vamos a tribunales.',
    options: [
      {
        id: '4A',
        text: 'Don Ricardo, mi clienta necesita tres cosas: que se reconozca que el monitor falló, una solución concreta que la deje funcionando, y sentirse respetada como consumidora — porque pasó 6 días esperando una respuesta. La cifra es la forma de medir esas tres cosas, no el objetivo en sí.',
        angerDelta: -10,
        feedback:
          'Comunicás intereses, no posiciones. Le mostrás que hay margen porque la cifra es traducción de algo más concreto.',
        isBest: true,
      },
      {
        id: '4B',
        text: 'Mi clienta exige los $1.980.000 según la Ley 24.240. Es lo que corresponde.',
        angerDelta: 12,
        feedback:
          'Reafirmás la posición numérica sin contar qué hay debajo. Lo encerrás al regateo puro.',
      },
      {
        id: '4C',
        text: 'La cifra es flexible, en realidad lo que ella quiere es que la traten bien.',
        angerDelta: 6,
        feedback:
          'Comunicás el interés pero soltás la cifra demasiado pronto. Don Ricardo va a leer que no te la bancás y va a tirar un primer número bajo.',
      },
      {
        id: '4D',
        text: 'Lo que quiere mi clienta es justicia. Le pido que diga usted qué ofrece.',
        angerDelta: 8,
        feedback:
          "Esquivaste la pregunta y le pediste que arranque él. 'Justicia' suena a palabra vacía y perdés credibilidad.",
      },
    ],
  },
  {
    id: 5,
    title: 'Manejo de escalada y amenazas',
    harvardPrinciple: 'Jujitsu de la negociación — desviar el ataque en lugar de devolverlo',
    meetingType: 'joint',
    donRicardoLine:
      'Le voy a ser franco. Si su clienta no borra el posteo y no baja el reclamo, voy con demanda por daño a la marca y pido medida cautelar. Tengo equipo de abogados listo. Si quiere tribunales, vamos.',
    options: [
      {
        id: '5A',
        text: 'Don Ricardo, entiendo que el posteo lo preocupa, es legítimo. Y justamente por eso estamos acá: tenemos dos cosas que resolver, el monitor y la situación pública. No son problemas opuestos, son los dos lados de la misma mesa.',
        angerDelta: -10,
        feedback:
          'Jujitsu puro. Convertís la amenaza en agenda compartida. Reconocés su preocupación sin ceder.',
        isBest: true,
      },
      {
        id: '5B',
        text: 'Si va con demanda, sumamos pedido de daño punitivo (art. 52 bis Ley 24.240) y le damos prensa al caso.',
        angerDelta: 20,
        feedback:
          'Contraataque. Escalaste vos también. Los dos están en trinchera y la mediación se cae.',
      },
      {
        id: '5C',
        text: 'Don Ricardo, tranquilícese. Mi clienta puede borrar el posteo, se lo prometo.',
        angerDelta: 8,
        feedback:
          'Capitulación bajo amenaza. Le diste lo que pidió bajo presión, sin contrapartida.',
      },
      {
        id: '5D',
        text: 'Su demanda no procede en mediación. Tiene que iniciar mediación propia.',
        angerDelta: 4,
        feedback:
          'Procesalmente correcto pero usaste un tecnicismo para esquivar el conflicto real.',
      },
    ],
  },
  {
    id: 6,
    title: 'Generación de opciones (brainstorming)',
    harvardPrinciple:
      'Inventar opciones de mutuo beneficio. Separar generar de decidir.',
    meetingType: 'joint',
    donRicardoLine:
      'Bueno, doctor/a. Pongamos las cartas sobre la mesa. ¿Qué soluciones se le ocurren?',
    options: [
      {
        id: '6A',
        text: 'Don Ricardo, le tiro varias y vemos cuál encaja para los dos. Una: reemplazo por el modelo siguiente, que entiendo está disponible. Dos: devolución del dinero más una compensación por las molestias. Tres: reemplazo, descuento y un acuerdo de confidencialidad sobre el posteo. Cuatro: acuerdo homologado para que todo quede cerrado. ¿Por dónde empezamos?',
        angerDelta: -15,
        feedback:
          'Brainstorming Harvard puro. Múltiples opciones sobre la mesa, sin comprometerse con ninguna todavía. Separás generar de decidir.',
        isBest: true,
      },
      {
        id: '6B',
        text: 'Devolución total de $1.480.000 más $300.000 por daño moral, y mi clienta borra el posteo. Esa es la propuesta.',
        angerDelta: 10,
        feedback:
          'Una sola opción no es brainstorming, es ultimátum. Cerraste la conversación en vez de abrirla.',
      },
      {
        id: '6C',
        text: 'Don Ricardo, propóngame usted y le contesto.',
        angerDelta: 4,
        feedback:
          'Cediste la iniciativa. No aportás valor. Te pusiste defensivo en el momento donde más conviene ser propositivo.',
      },
      {
        id: '6D',
        text: 'Mi clienta podría subir un posteo positivo sobre Almeyda Tech, a cambio de los $1.980.000 íntegros.',
        angerDelta: 8,
        feedback:
          'Suena creativo pero une mal las cosas: pedís la cifra completa Y le sumás un servicio. Don Ricardo lo lee como manipulación.',
      },
    ],
  },
  {
    id: 7,
    title: 'Aplicación de criterios objetivos',
    harvardPrinciple:
      'Insistir en que el resultado se base en criterios externos, no en la voluntad de las partes',
    meetingType: 'joint',
    donRicardoLine:
      'Supongamos que vamos por el reemplazo. ¿Y el daño moral? Mi clienta pide $300.000. ¿De dónde sale ese número?',
    options: [
      {
        id: '7A',
        text: 'Don Ricardo, no lo inventamos. La Ley 24.240 reconoce el derecho del consumidor a ser tratado con dignidad. Hubo 6 días sin respuesta, más una carta documento intimando a borrar un posteo legítimo. Si esto va a juicio, hay fallos recientes de la justicia comercial que reconocieron daño moral en casos parecidos por montos similares. Por eso ese número.',
        angerDelta: -12,
        feedback:
          'Fundamentás en criterios objetivos externos: la ley, los hechos concretos, la jurisprudencia comparable.',
        isBest: true,
      },
      {
        id: '7B',
        text: 'Es lo que mi clienta sintió que sufrió.',
        angerDelta: 10,
        feedback:
          "Subjetivo puro. Sin criterio. Don Ricardo te puede contestar 'y yo sentí que sufrí más' y no hay forma de resolverlo.",
      },
      {
        id: '7C',
        text: 'Don Ricardo, redondeemos los $300.000 a $150.000 y cerramos.',
        angerDelta: 5,
        feedback:
          'Regateo sin criterio. Le mostraste que el número era inventado y movible.',
      },
      {
        id: '7D',
        text: 'Si no acepta los $300.000 vamos a juicio y pedimos el doble.',
        angerDelta: 15,
        feedback:
          'Amenaza. No es un criterio, es presión. Y suena vacío después de haber estado negociando bien.',
      },
    ],
  },
  {
    id: 8,
    title: 'Cierre con MAAN',
    harvardPrinciple:
      'MAAN comunicada con firmeza, sin amenaza, mostrando que entendés también el del otro',
    meetingType: 'joint',
    donRicardoLine:
      'Doctor/a, ya casi cerramos, pero necesito saber una cosa. ¿Y si no llegamos a un acuerdo hoy? Porque yo tengo equipo legal preparado y no le tengo miedo a juicio.',
    options: [
      {
        id: '8A',
        text: 'Don Ricardo, prefiero cerrar hoy y le explico por qué. Si no acordamos, mi clienta tiene la denuncia en Defensa del Consumidor — gratuita, rápida — y la opción de juicio con pedido de daño punitivo por cómo se manejó el reclamo. Pero el costo real para los dos es la dispersión: usted tiene cosas más importantes en la empresa, mi clienta tiene su tiempo. Mejor cerrar hoy con algo que les funcione a los dos.',
        angerDelta: -12,
        feedback:
          'MAAN comunicada con firmeza, basada en hechos concretos. Mostrás que entendiste también el MAAN del otro. Cierra con propuesta de futuro, no con amenaza.',
        isBest: true,
      },
      {
        id: '8B',
        text: 'Si no acordamos hoy, vamos a juicio y le pedimos todo: capital, daño moral, daño punitivo y costas. Le va a salir el triple.',
        angerDelta: 18,
        feedback:
          'MAAN como amenaza. Volviste al modo posicional duro justo en el cierre. Tiraste todo el trabajo previo.',
      },
      {
        id: '8C',
        text: 'Y bueno, veremos qué hacemos.',
        angerDelta: 8,
        feedback:
          'No comunicás MAAN. Te debilitás justo cuando más necesitabas firmeza.',
      },
      {
        id: '8D',
        text: 'Si no acuerda hoy, mi clienta sigue posteando en Instagram y suma más videos.',
        angerDelta: 15,
        feedback:
          'Amenazás con uso indebido del posteo. Es negociación sucia. Don Ricardo se levanta.',
      },
    ],
  },
];

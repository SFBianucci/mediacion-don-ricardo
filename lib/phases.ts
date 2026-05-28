import { Phase } from './types';
import { OPCIONES_MUTUO_BENEFICIO } from './case';

export const PHASES: Phase[] = [
  // ─────────────────────────────────────────────────────────────────────
  // FASE 1 — APERTURA · MEDIADOR · TRAMPA PROCESAL (notificación)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 1,
    stage: 'apertura',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      'Pará, pará. Antes de arrancar le quiero plantear algo. A mí esto me llegó por una carta documento, como si fuera un juicio. ¿Eso se puede hacer? Para mí está todo mal hecho. Quiero que se anule.',
    title: 'Don Ricardo cuestiona la notificación',
    options: [
      {
        id: '1A',
        text: 'Don Ricardo, tiene razón. Al ser una mediación donde el requirente propone mediador al requerido, el único medio válido era la cédula, pero no se preocupe, podemos hacer una excepción al respecto. O si usted quiere, cerramos acá la mediación.',
        deltas: { climate: 42, donRicardo: 8, florencia: 28 },
        feedback:
          'Error grave. Es al revés: en una mediación por propuesta del requirente al requerido, el único medio válido es la carta documento, no la cédula. Encima le ofreciste "hacer una excepción" o cerrar la instancia, regalándole una salida. Validaste una nulidad inexistente.',
        technique: 'tecnica-procesal',
      },
      {
        id: '1B',
        text: 'Don Ricardo, la normativa de mediación establece que para estos casos, al ser una mediación donde el requirente propone mediador al requerido, el medio de notificación es la carta documento.',
        deltas: { climate: -10, donRicardo: -8, florencia: -2 },
        feedback:
          'Correcto. Cuando el mediador se designa por propuesta del requirente al requerido, la notificación solo puede hacerse por carta documento. Conocés la regla, resolvés el planteo en el acto y das tranquilidad sin ceder nada.',
        isBest: true,
        technique: 'tecnica-procesal',
      },
      {
        id: '1C',
        text: 'Don Ricardo, está en lo correcto, pero eso debió plantearlo su abogado anteriormente. Lamento comentarle que perdió la chance.',
        deltas: { climate: 30, donRicardo: 18, florencia: 6 },
        feedback:
          'Doble error: le diste la razón sobre una nulidad que no existe (la carta documento era el medio válido) y encima lo trataste con un tecnicismo expulsivo ("perdió la chance"). Sembraste desconfianza sobre todo el proceso.',
        technique: 'tecnica-procesal',
      },
      {
        id: '1D',
        text: 'Don Ricardo, le recuerdo que en las mediaciones siempre se puede notificar tanto mediante cédula como carta documento. Estamos cumpliendo la normativa.',
        deltas: { climate: 20, donRicardo: 4, florencia: 10 },
        feedback:
          'Suena firme, pero es incorrecto: en esta mediación —por propuesta del requirente al requerido— el único medio válido es la carta documento, no "cualquiera de los dos". Diste tranquilidad apoyándote en una regla falsa; si Don Ricardo lo verifica, perdés credibilidad.',
        technique: 'tecnica-procesal',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 2 — CONJUNTA INICIAL · MEDIADOR · pregunta abierta a Florencia
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 2,
    stage: 'conjunta-inicial',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Arranca la reunión conjunta inicial',
    situation:
      'Terminaste el discurso de apertura: explicaste brevemente en qué consiste el proceso, sus etapas y las reglas. Las cuatro personas están alrededor de la mesa, listas. ¿Qué te falta para que empiece a fluir el relato?',
    options: [
      {
        id: '2A',
        text: 'Hacer una pregunta abierta para que la parte cuente su versión con sus palabras.',
        deltas: { climate: -8, donRicardo: 0, florencia: -10 },
        feedback:
          'La pregunta abierta es la herramienta de la reunión conjunta inicial: invita a narrar sin condicionar la respuesta ni meter contenido propio. Es lo que abre el relato y hace que la parte se sienta escuchada.',
        isBest: true,
        technique: 'pregunta-abierta',
      },
      {
        id: '2B',
        text: 'Darle la palabra a Florencia porque, al ser la requirente, le corresponde empezar.',
        deltas: { climate: 6, donRicardo: 2, florencia: 8 },
        feedback:
          'Pensar en "a quién le toca" es mecánico. El relato no arranca porque sea "su turno", sino porque vos abrís el espacio con una pregunta abierta. La herramienta importa más que el orden.',
        technique: 'esquive',
      },
      {
        id: '2C',
        text: 'Legitimar a los abogados presentes y reforzar la confianza institucional.',
        deltas: { climate: 8, donRicardo: 3, florencia: 5 },
        feedback:
          'La legitimación y el empowerment van en el discurso de apertura — que ya terminaste. Repetirlo ahora dilata y suena a relleno. Cada herramienta tiene su momento.',
        technique: 'esquive',
      },
      {
        id: '2D',
        text: 'Proponerles un ejercicio de respiración para que arranquen relajados, total además de mediador/a sos coach.',
        deltas: { climate: 15, donRicardo: 14, florencia: 4 },
        feedback:
          'Sos mediador/a, no coach. Don Ricardo te mira como si estuvieras de joda y perdés autoridad sobre el proceso. (Igual, respirá vos.)',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 3 — CONJUNTA INICIAL · MEDIADOR · parafraseo
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 3,
    stage: 'conjunta-inicial',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'florencia',
    speakerLine:
      'El 2 de mayo les compré online un colchón por $980.000. Llegó el día 5 y al probarlo era todo espuma, parecía de resortes en la foto. El 7 les escribí pidiendo la devolución del dinero, dentro del plazo legal. Me contestaron que "por política interna" solo me daban una Gift Card de 3 meses, y que el envío de devolución lo pagaba yo. Me sentí estafada.',
    title: 'El relato de Florencia',
    options: [
      {
        id: '3A',
        text: 'A ver si entendí: comprás online el 2, recibís el 5, y dentro del plazo legal notificás que querés ejercer el arrepentimiento. La respuesta que recibiste no contempla la devolución al medio de pago original. ¿Es así?',
        deltas: { climate: -10, donRicardo: -8, florencia: -10 },
        feedback:
          'Reformulaste los hechos sin la carga emocional ("me sentí estafada"), sin afirmarlos como ciertos, y cerraste con verificación. Las dos partes lo escuchan como neutral.',
        isBest: true,
        technique: 'parafraseo',
      },
      {
        id: '3B',
        text: 'Florencia, lo que contás encuadra en el derecho de arrepentimiento que la ley te garantiza. ¿Es eso lo que reclamás?',
        deltas: { climate: 28, donRicardo: 22, florencia: -5 },
        feedback:
          'Eso no es reformular: es opinar. Adelantaste conclusión jurídica frente a la otra parte. Don Ricardo y el Dr. Pérez te miran como si fueras el abogado contrario.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '3C',
        text: 'Florencia, usted se sintió estafada porque la trataron como una molestia y le ofrecieron un voucher en vez de devolverle la plata. ¿Cierto?',
        deltas: { climate: 16, donRicardo: 14, florencia: -2 },
        feedback:
          'Repetiste las cargas emocionales en vez de neutralizarlas. La reformulación despega el relato de las emociones; vos hiciste lo contrario y Don Ricardo se cierra.',
        technique: 'carga-emocional',
      },
      {
        id: '3D',
        text: 'Gracias Florencia, escuchamos. Ahora escuchemos a Don Ricardo.',
        deltas: { climate: 18, donRicardo: -3, florencia: 18 },
        feedback:
          'No verificaste que entendiste. Florencia no sabe si la oíste; si entendiste mal lo arrastrás toda la mediación. La parte requirente tiene derecho a confirmar que llegó su versión.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 4 — CONJUNTA INICIAL · MEDIADOR · pregunta abierta a Don Ricardo (ARREGLADA)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 4,
    stage: 'conjunta-inicial',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      'Doctor/a, le voy a ser franco. Hace doce años que tengo Suavecito y no soy ningún estafador. La señora compró un colchón, lo durmió tres noches y ahora viene con esta historia de la "espuma". Las cosas se ven en la foto. La Gift Card es lo que damos a todos.',
    title: 'Le toca a Don Ricardo',
    options: [
      {
        id: '4A',
        text: 'Don Ricardo, lo escucho. ¿Cómo vivieron ustedes este reclamo desde la empresa?',
        deltas: { climate: -10, donRicardo: -10, florencia: 0 },
        feedback:
          'Pregunta abierta bien usada: lo invitás a contar SU versión y SU experiencia, sin pedirle soluciones (eso es etapa posterior) ni juzgarlo. Don Ricardo siente que también a él lo escuchan y baja un cambio.',
        isBest: true,
        technique: 'pregunta-abierta',
      },
      {
        id: '4B',
        text: 'Don Ricardo, ¿cómo se imagina que se vería Suavecito frente a sus otros clientes si esta historia se hace pública?',
        deltas: { climate: 18, donRicardo: 14, florencia: 4 },
        feedback:
          'Pregunta circular en momento equivocado. Estas funcionan en la reunión privada, donde la parte no se expone. En la conjunta, Don Ricardo siente presión frente a la contraparte y se atrinchera.',
        technique: 'pregunta-circular',
      },
      {
        id: '4C',
        text: 'Don Ricardo, ¿usted sabe que la ley obliga al vendedor a aceptar el arrepentimiento y a cargar con los gastos de devolución?',
        deltas: { climate: 32, donRicardo: 26, florencia: -3 },
        feedback:
          'Pregunta cerrada y acusatoria en plena conjunta. El mediador no asesora ni acusa. Don Ricardo siente que ya hay sentencia y se cierra.',
        technique: 'acusacion',
      },
      {
        id: '4D',
        text: 'Don Ricardo, le toca, pero le pido brevedad: la situación ya quedó bastante clara con el relato anterior.',
        deltas: { climate: 22, donRicardo: 24, florencia: -2 },
        feedback:
          '"Ya quedó clara la situación" antes de que abra la boca = decisión tomada. Pérdida de imparcialidad y presión temporal a la vez.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 5 — CONJUNTA INICIAL · FLORENCIA · REACCIÓN (ninguna correcta)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 5,
    stage: 'conjunta-inicial',
    playerRole: 'florencia',
    meetingType: 'joint',
    speaker: 'donRicardo',
    entryDeltas: { climate: 15, donRicardo: 38, florencia: 0 },
    speakerLine:
      '¿¡Y esa cara!? ¿Le parece gracioso lo que digo? ¡Encima de que me arrastran a esta mediación, la señora se ríe en mi cara! ¡Así no se puede laburar! ¡Esto es una falta de respeto!',
    title: '¡Ups! ¡Cuidado! Se te escapó una mueca y Don Ricardo explotó',
    options: [
      {
        id: '5A',
        text: 'Le revoleás el vaso de agua que tenías al lado.',
        deltas: { climate: 55, donRicardo: 48, florencia: 18 },
        feedback:
          'Violencia en la mesa. Cualquier posibilidad de acuerdo se evapora y el mediador tiene que cerrar la audiencia. Es el peor desenlace posible.',
        technique: 'reaccion-impulsiva',
      },
      {
        id: '5B',
        text: 'Te levantás y te vas de la sala.',
        deltas: { climate: 40, donRicardo: 18, florencia: 35 },
        feedback:
          'Abandonaste la mediación en caliente. La instancia se cae y perdés la oportunidad de resolver hoy. La voluntariedad no significa irse en el primer roce.',
        technique: 'reaccion-impulsiva',
      },
      {
        id: '5C',
        text: 'Respirás hondo, hacés un gesto de disculpa y dejás que siga.',
        deltas: { climate: 10, donRicardo: 12, florencia: 6 },
        feedback:
          'Intentaste manejar la situación, pero Don Ricardo lo leyó como ironía y se calentó igual. El método no siempre alcanza: a veces la otra parte está demasiado caliente y no hay jugada perfecta. Esta era, igual, la menos mala.',
        leastBad: true,
        technique: 'gestion-emocional',
      },
      {
        id: '5D',
        text: 'Te reís de los nervios.',
        deltas: { climate: 38, donRicardo: 40, florencia: 10 },
        feedback:
          'La risa nerviosa Don Ricardo la lee como burla directa. La escalada es inmediata y el clima se rompe. Lo peor que podías hacer con alguien ya enojado.',
        technique: 'reaccion-impulsiva',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 6 — CONJUNTA INICIAL · ABOGADA · ataque del Dr. Pérez con T&C
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 6,
    stage: 'conjunta-inicial',
    playerRole: 'abogada',
    meetingType: 'joint',
    speaker: 'drPerez',
    speakerLine:
      'Permítame doctor/a. Soy el Dr. Pérez, letrado de Suavecito. Voy al punto: la Sra. Gómez aceptó expresamente los Términos y Condiciones al comprar. Cláusula 7.3, sin reembolsos a tarjeta para compras en promoción. Es un contrato de adhesión válido, firmado, ejecutado. Acá no hay nada que discutir. ¿Qué tiene para decir la requirente?',
    title: 'Respondés como abogado/a de Florencia',
    options: [
      {
        id: '6A',
        text: 'Doctor, el contrato es válido como contrato. La discusión es si esa cláusula puntual desnaturaliza la obligación y restringe un derecho irrenunciable. ¿La analizamos?',
        deltas: { climate: -8, donRicardo: -5, florencia: -8 },
        feedback:
          'Duro con el problema, suave con la persona. No negás el contrato (no caés en negociador duro), pero ubicás la pelea donde corresponde: el control de cláusulas abusivas. Lo invitás a un análisis ordenado.',
        isBest: true,
        technique: 'harvard',
      },
      {
        id: '6B',
        text: 'Doctor, con todo respeto, sus T&C son nulos frente a un derecho que es de orden público. Eso lo sabe usted y lo sé yo. No hay adhesión que valga contra un derecho irrenunciable.',
        deltas: { climate: 24, donRicardo: 20, florencia: -2 },
        feedback:
          'Tenés razón en el fondo. Pero declararlos "nulos" de entrada radicaliza al letrado de enfrente: Dr. Pérez se atrinchera y Don Ricardo se prende a la pelea.',
        technique: 'negociador-duro',
      },
      {
        id: '6C',
        text: 'Doctor Pérez, mi clienta podría revisar la pretensión si Suavecito mejora las condiciones de la Gift Card. ¿Qué tal si nos ponemos a ver un monto posible para resolver la situación?',
        deltas: { climate: 16, donRicardo: -5, florencia: 25 },
        feedback:
          'Le cediste el punto central frente a un argumento que ni siquiera resiste el control de cláusulas. Florencia te perdió la confianza en tiempo real.',
        technique: 'negociador-suave',
      },
      {
        id: '6D',
        text: 'Doctor, mi clienta no recuerda haber leído esa cláusula al comprar. Sin lectura efectiva no hay aceptación válida, y por ende no le es oponible.',
        deltas: { climate: 14, donRicardo: 10, florencia: 8 },
        feedback:
          'Argumento débil: las cláusulas de adhesión se aceptan por la sola operación. Te estás peleando en el terreno equivocado — no es la lectura, es la nulidad por abusividad.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 7 — REUNIÓN PRIVADA CON FLORENCIA · MEDIADOR · agente de la realidad (MAAN)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 7,
    stage: 'privada-florencia',
    playerRole: 'mediador',
    meetingType: 'private-florencia',
    speaker: 'florencia',
    privateContext:
      'Don Ricardo y el Dr. Pérez salieron de la sala. Florencia y la Dra. López quedan enfrente.',
    speakerLine:
      'Le voy a ser sincera. El daño punitivo lo pedí porque mi abogada me dijo que era la única forma de que se muevan. Pero lo que necesito de verdad es el dinero a la tarjeta esta semana. Ya compré otro colchón, estoy en plena mudanza, tengo el cupo bloqueado. Si esto no se resuelve hoy, voy a juicio. El fuero del Consumidor es gratis para mí, ¿no?',
    title: 'Florencia te plantea su MAAN',
    options: [
      {
        id: '7A',
        text: 'Dra. López, usted que maneja el fuero: ¿sabe cuánto suele demorar hoy un juicio de consumo en CABA hasta cobrar efectivamente? Lo pregunto para que Florencia pueda dimensionar esos tiempos frente a lo que necesita esta semana.',
        deltas: { climate: -10, donRicardo: 0, florencia: -10 },
        feedback:
          'Agente de la realidad bien usado: no afirmás vos los plazos —no te corresponde— sino que se los pedís a la letrada, que es quien puede darlos. Así Florencia confronta su MAAN con un dato real y descubre sola la debilidad temporal (su interés es liquidez ya).',
        isBest: true,
        technique: 'agente-realidad',
      },
      {
        id: '7B',
        text: 'Florencia, esta es tu decisión y la respeto plenamente. Vos conocés tu situación mejor que nadie, así que hacé lo que sientas y yo te acompaño en lo que elijas.',
        deltas: { climate: 18, donRicardo: 0, florencia: 18 },
        feedback:
          'Abdicaste de tu rol. El mediador no asesora pero sí ayuda a que la parte evalúe realidades. Florencia se va sin los datos para decidir.',
        technique: 'esquive',
      },
      {
        id: '7C',
        text: 'Florencia, mi consejo es que no sueltes el daño punitivo: es la única carta de presión real que tenés y la jurisprudencia reciente viene reconociéndolo con fuerza.',
        deltas: { climate: 38, donRicardo: 0, florencia: 22 },
        feedback:
          'Asesoramiento estratégico explícito. El mediador no puede hacer eso. Y encima pronosticaste el resultado judicial — saliste por completo del rol.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '7D',
        text: 'Florencia, te soy honesto: el juicio es caro, largo e incierto. Lo mejor que podés hacer es aceptar lo que te ofrezcan hoy y cerrar el tema.',
        deltas: { climate: 42, donRicardo: 0, florencia: 32 },
        feedback:
          'Falso (el fuero es gratuito) y parcializado. Le generaste miedo para que firme cualquier cosa. Lo opuesto al rol.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 8 — REUNIÓN PRIVADA CON SUAVECITO · MEDIADOR · pregunta circular
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 8,
    stage: 'privada-suavecito',
    playerRole: 'mediador',
    meetingType: 'private-suavecito',
    speaker: 'donRicardo',
    privateContext:
      'Florencia salió de la sala. Don Ricardo y el Dr. Pérez se acomodan enfrente.',
    speakerLine:
      'Doctor/a, acá en privado se lo digo: no es el colchón. Si yo le devuelvo la plata a esta, mañana tengo cincuenta más con el mismo argumento. Es flujo de caja, no soberbia. La Gift Card es para que el dinero no se vaya de la empresa.',
    title: 'Don Ricardo confiesa su interés real',
    options: [
      {
        id: '8A',
        text: 'Le agradezco la franqueza. Si esto sale en un fallo público con daño punitivo, ¿cómo cree que lo verían sus clientes? Y a seis meses, ¿cómo imagina la empresa con esa cláusula?',
        deltas: { climate: -12, donRicardo: -12, florencia: 0 },
        feedback:
          'Sin opinar, lo desplazaste a evaluar la situación desde dos perspectivas que no estaba mirando: el mercado y el futuro. Empieza a separar su posición de su interés real.',
        isBest: true,
        technique: 'pregunta-circular',
      },
      {
        id: '8B',
        text: 'Don Ricardo, lo escucho, pero dígame con franqueza: ¿usted entiende que con esa política de Gift Card está incumpliendo lisa y llanamente la ley de defensa del consumidor?',
        deltas: { climate: 22, donRicardo: 24, florencia: 0 },
        feedback:
          'Pregunta cerrada acusatoria. Cerraste la puerta cuando se estaba abriendo. Él te dio información valiosa sobre su interés real y vos lo enfrentaste con un sí/no jurídico.',
        technique: 'acusacion',
      },
      {
        id: '8C',
        text: 'Don Ricardo, lo entiendo. Para no dar tantas vueltas, dígame directamente: ¿cuánto estaría dispuesto a poner sobre la mesa para cerrar esto hoy mismo?',
        deltas: { climate: 10, donRicardo: 6, florencia: 0 },
        feedback:
          'Saltaste al regateo cuando él te estaba entregando intereses. La privada sirve para explorar intereses, no para discutir cifras — eso viene después.',
        technique: 'regateo-posicional',
      },
      {
        id: '8D',
        text: 'Don Ricardo, lo que acaba de admitir —que aplica la misma cláusula a todos— es justo lo que habilita una acción colectiva en su contra. Téngalo presente.',
        deltas: { climate: 55, donRicardo: 42, florencia: 0 },
        feedback:
          'Convertiste una confesión en privada en una amenaza jurídica. Le pasaste el mensaje de que todo lo que diga se va a usar en su contra. No vuelve a hablar.',
        technique: 'violacion-confidencialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 9 — REPLANTEO · MEDIADOR
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 9,
    stage: 'replanteo',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Las partes vuelven a la mesa conjunta',
    situation:
      'Convocaste de nuevo a Florencia. Las cuatro personas están otra vez frente a la mesa. Sabés lo que cada una te dijo en privada, pero no podés transmitirlo. Te toca abrir esta segunda conjunta y orientarla.',
    options: [
      {
        id: '9A',
        text: 'Quiero proponerles cómo veo el problema. Florencia necesita recuperar lo pagado de forma efectiva y sentir que su reclamo es un derecho. Suavecito busca cumplir sin comprometer su operación. No son opuestos: ¿lo combinamos?',
        deltas: { climate: -12, donRicardo: -10, florencia: -10 },
        feedback:
          'Tomaste las posiciones declaradas y las reformulaste como intereses compatibles, sin revelar lo dicho en privadas. Mostraste que la mesa es posible. El proceso pasa de posicional a colaborativo.',
        isBest: true,
        technique: 'replanteo',
      },
      {
        id: '9B',
        text: 'Bueno, chicos, les agradezco la espera. ¿Les parece si intentamos proponer soluciones al problema?',
        deltas: { climate: 18, donRicardo: 8, florencia: 8 },
        feedback:
          'Te salteaste el replanteo. Antes de buscar soluciones tenés que transformar las posiciones en intereses: mostrarles que detrás del "$1.350.000" y de la "Gift Card" hay necesidades compatibles. Si abrís la generación de ideas sin ese paso, las partes siguen ancladas en sus posiciones y la lluvia de ideas se traba.',
        technique: 'esquive',
      },
      {
        id: '9C',
        text: 'A ver: Florencia pide $1.350.000 y Don Ricardo ofrece una Gift Card de $980.000. Hay $370.000 de diferencia. Lo más práctico sería que cada uno ceda la mitad y cerramos en el punto medio.',
        deltas: { climate: 22, donRicardo: 6, florencia: 18 },
        feedback:
          'Eso es regateo, no replanteo. Volviste a la superficie del iceberg sin tocar los intereses. Las partes quedan donde estaban.',
        technique: 'regateo-posicional',
      },
      {
        id: '9D',
        text: 'Antes de avanzar quiero ser claro con ambos: la ley no deja lugar a dudas. Florencia ejerció su derecho y Suavecito tiene la obligación de devolver. El resto de la discusión es accesorio.',
        deltas: { climate: 48, donRicardo: 34, florencia: -5 },
        feedback:
          'Opinaste sobre el fondo en plena conjunta. Tomaste partido. Don Ricardo siente que ya hay sentencia. No hay forma de cerrar acuerdo después de esto.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 10 — BRAINSTORMING · MEDIADOR · Don Ricardo en modo duro
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 10,
    stage: 'brainstorming',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      '¿Saben qué? Estoy harto de esta historia. Le voy a ser claro: yo no le voy a devolver un peso a esta señora. Si quiere ir a tribunales, vamos. Tengo plata para abogados y tiempo para esperar tres años. Dígame qué propuesta concreta tiene y le digo si me sirve, o nos vamos cada uno por su lado.',
    title: 'Don Ricardo te tira un ultimátum',
    options: [
      {
        id: '10A',
        text: 'Don Ricardo, entiendo que esté cansado y lo escucho. Le propongo algo a los dos: en lugar de quedarnos en el "sí o no", probemos entre todos tirar ideas para resolver esto, sin comprometernos todavía a ninguna. ¿Arrancamos?',
        deltas: { climate: -12, donRicardo: -10, florencia: -8 },
        feedback:
          'Bajaste la tensión sin tomar partido y abriste la etapa de generación de opciones: invitás a las dos partes a aportar ideas y aclarás que generar no es decidir. Eso destraba el ultimátum sin que tengas que responderlo de frente.',
        isBest: true,
        technique: 'brainstorming',
      },
      {
        id: '10B',
        text: 'Don Ricardo, le recuerdo que la ley es clara: usted está obligado a devolver. Si va a juicio, lo más probable es que pierda. Mejor negocie ahora.',
        deltas: { climate: 40, donRicardo: 30, florencia: -3 },
        feedback:
          'Opinaste sobre el fondo y pronosticaste el resultado del juicio: perdiste imparcialidad en plena mesa. Don Ricardo siente que ya hay sentencia y se cierra del todo.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '10C',
        text: 'Bueno, pongamos un número. Don Ricardo, ¿cuánto está dispuesto a poner para cerrar hoy? Partamos de ahí y vemos si Florencia lo acepta.',
        deltas: { climate: 22, donRicardo: 6, florencia: 14 },
        feedback:
          'Saltaste directo al regateo de cifras cuando todavía no generaste opciones. Cerrás el abanico de soluciones posibles a un solo número y volvés posicional una mesa que recién se abría.',
        technique: 'regateo-posicional',
      },
      {
        id: '10D',
        text: 'Tiene razón, Don Ricardo, así no avanzamos. Mejor proponga usted la fórmula que le sirve y se la presentamos a Florencia.',
        deltas: { climate: 24, donRicardo: 10, florencia: 18 },
        feedback:
          'Cediste a la presión del tono duro y le entregaste a una sola parte el control de la propuesta. El mediador no deja que el más áspero fije la agenda: conduce la generación de ideas para los dos.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 11 — BRAINSTORMING · MEDIADOR · las 4 opciones de mutuo beneficio del PDF
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 11,
    stage: 'brainstorming',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Cuatro opciones sobre la mesa: ¿cuál encaja mejor?',
    situation:
      'Después del intercambio surgieron cuatro propuestas concretas para resolver el conflicto. Señalá la opción que combina mejor los intereses de cada parte.',
    options: [
      {
        id: '11A',
        text: OPCIONES_MUTUO_BENEFICIO[0].text,
        deltas: { climate: 12, donRicardo: 6, florencia: 14 },
        feedback:
          'Florencia recupera el dinero, pero el envío lo paga ella —cuando la ley pone esos gastos sobre el vendedor. La cláusula abusiva sigue intacta. Acuerdo parcial: resuelve lo patrimonial pero le carga costos indebidos a la requirente.',
        technique: 'regateo-posicional',
      },
      {
        id: '11B',
        text: OPCIONES_MUTUO_BENEFICIO[1].text,
        deltas: { climate: 14, donRicardo: -5, florencia: 22 },
        feedback:
          'Suavecito preserva flujo de caja pero Florencia pierde frente a la inflación. Su interés real era liquidez ahora —cobrar en cuotas es la versión competitiva del acuerdo.',
        technique: 'negociador-suave',
      },
      {
        id: '11C',
        text: OPCIONES_MUTUO_BENEFICIO[2].text,
        deltas: { climate: 18, donRicardo: -8, florencia: 32 },
        feedback:
          'Es el escenario que Florencia rechazó desde el día uno: ata su dinero a un comercio donde no piensa volver. La cláusula queda convalidada. Suavecito gana todo: no devuelve plata Y blinda la cláusula.',
        technique: 'esquive',
      },
      {
        id: '11D',
        text: OPCIONES_MUTUO_BENEFICIO[3].text,
        deltas: { climate: -14, donRicardo: -12, florencia: -12 },
        feedback:
          'La única gana-gana: Florencia recupera liquidez Y obtiene un gesto comercial que reconoce su reclamo; Suavecito cierra el riesgo del daño punitivo Y protege su reputación con el cupón. El intercambio diferencial funciona porque cada parte cede lo que valora poco y obtiene lo que valora mucho.',
        isBest: true,
        technique: 'harvard',
      },
    ],
  },
];

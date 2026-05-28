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
        text: 'Don Ricardo, le aclaro: al ser una mediación que propuso la parte requirente, la carta documento es justamente el medio que corresponde. La instancia está válidamente abierta, quédese tranquilo.',
        deltas: { climate: -10, donRicardo: -8, florencia: -2 },
        feedback:
          'Correcto. Cuando el mediador es designado por propuesta del requirente al requerido, la notificación solo puede hacerse por carta documento. Conocer la regla te deja resolver el planteo en el acto y dar tranquilidad sin ceder nada.',
        isBest: true,
        technique: 'tecnica-procesal',
      },
      {
        id: '1B',
        text: 'Don Ricardo, tiene razón en plantearlo. Frenemos todo y revisemos si la notificación fue válida antes de seguir adelante.',
        deltas: { climate: 30, donRicardo: 8, florencia: 22 },
        feedback:
          'Caíste en la trampa. La notificación por carta documento era válida —es el medio que corresponde en una mediación por propuesta del requirente. Sembraste una duda donde no la había y le diste a Don Ricardo una excusa para dilatar.',
        technique: 'tecnica-procesal',
      },
      {
        id: '1C',
        text: 'Es cierto, la carta documento no correspondía. Lo válido hubiera sido avisarle por email o por cédula.',
        deltas: { climate: 42, donRicardo: 6, florencia: 28 },
        feedback:
          'Error técnico grave. Es al revés: en la mediación por propuesta del requirente el ÚNICO medio válido es la carta documento. Validaste una nulidad inexistente y pusiste en riesgo toda la instancia.',
        technique: 'tecnica-procesal',
      },
      {
        id: '1D',
        text: 'Don Ricardo, eso se lo plantea por escrito a su abogado. Ahora no perdamos tiempo y arranquemos.',
        deltas: { climate: 20, donRicardo: 18, florencia: 4 },
        feedback:
          'Esquivaste un planteo legítimo sin resolverlo. Don Ricardo queda con la sensación de que algo está mal hecho y arranca la mediación desconfiado. El mediador resuelve las cuestiones procesales en el momento.',
        technique: 'esquive',
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
    title: 'Le toca a Florencia narrar',
    situation:
      'Resuelta la cuestión inicial, las cuatro personas alrededor de la mesa esperan. Florencia te mira. Es la parte requirente — le corresponde a ella empezar.',
    options: [
      {
        id: '2A',
        text: 'Florencia, te escucho. Contame con tus palabras qué pasó.',
        deltas: { climate: -8, donRicardo: 0, florencia: -10 },
        feedback:
          'Pregunta abierta de manual: invita al relato sin condicionar la respuesta, sin pedirle una solución todavía, sin meter contenido propio. Florencia se siente escuchada.',
        isBest: true,
        technique: 'pregunta-abierta',
      },
      {
        id: '2B',
        text: 'Florencia, ¿es cierto que reclamaste a los dos días de recibido el colchón?',
        deltas: { climate: 5, donRicardo: 0, florencia: 8 },
        feedback:
          'Confirmaste un dato técnico con pregunta cerrada antes de escuchar el relato. Es el dato dirimente, sí — pero confirmarlo va en la privada. Florencia se siente interrogada y no narrada.',
        technique: 'pregunta-cerrada',
      },
      {
        id: '2C',
        text: 'Florencia, contanos qué solución te parecería justa para esta situación.',
        deltas: { climate: 8, donRicardo: 3, florencia: 6 },
        feedback:
          'Pediste una solución antes del relato. La generación de opciones es etapa posterior, post-privadas. Florencia se ancla en una cifra antes de explorar nada y vos perdiste la ventana para escucharla.',
        technique: 'esquive',
      },
      {
        id: '2D',
        text: 'Florencia, sé breve si podés: la otra parte tiene mucho para contestar.',
        deltas: { climate: 12, donRicardo: -2, florencia: 14 },
        feedback:
          'Le metiste presión temporal a la parte requirente en el momento que justamente tiene que sentirse escuchada. La escucha activa se cae antes de empezar.',
        technique: 'carga-emocional',
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
        text: 'Florencia, lo que contás encuadra en el derecho de arrepentimiento que la ley te garantiza. Es claro que la empresa lo desconoció. ¿Es eso lo que reclamás?',
        deltas: { climate: 28, donRicardo: 22, florencia: -5 },
        feedback:
          'Eso no es reformular: es opinar. Adelantaste conclusión jurídica frente a la otra parte. Don Ricardo y el Dr. Pérez te miran como si fueras el abogado contrario.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '3C',
        text: 'Florencia, usted se sintió estafada porque la trataron como una molestia y le quisieron meter un voucher en vez de devolverle la plata. ¿Cierto?',
        deltas: { climate: 16, donRicardo: 14, florencia: -2 },
        feedback:
          'Repetiste las cargas emocionales en vez de neutralizarlas. La reformulación despega el relato de las emociones; vos hiciste lo contrario y Don Ricardo se cierra.',
        technique: 'carga-emocional',
      },
      {
        id: '3D',
        text: 'Gracias Florencia, escuchamos. Pasemos al lado de Suavecito.',
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
    title: 'Se te escapó una mueca y Don Ricardo explotó',
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
        text: 'Doctor, con todo respeto, sus T&C son papel mojado frente a un derecho que es de orden público. Eso lo sabe usted y lo sé yo. No hay adhesión que valga contra un derecho irrenunciable.',
        deltas: { climate: 24, donRicardo: 20, florencia: -2 },
        feedback:
          'Tenés razón en el fondo. Pero "papel mojado" radicaliza al letrado de enfrente: Dr. Pérez se atrinchera y Don Ricardo se prende a la pelea.',
        technique: 'negociador-duro',
      },
      {
        id: '6C',
        text: 'Doctor Pérez, mi clienta podría revisar la pretensión si Suavecito mejora las condiciones de la Gift Card. Pasemos a hablar de números concretos y veamos dónde nos encontramos.',
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
  // FASE 7 — REUNIÓN PRIVADA CON FLORENCIA · MEDIADOR · abogado del diablo (MAAN)
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
        text: 'Florencia, el fuero te favorece y es gratuito, sí. Pero en CABA tarda 2 a 4 años. ¿Tu mudanza de esta semana resiste esa espera?',
        deltas: { climate: -10, donRicardo: 0, florencia: -10 },
        feedback:
          'Sin opinar sobre el fondo, le mostraste que su MAAN tiene una debilidad temporal que no se condice con su interés real (liquidez ya). Ella misma va a flexibilizar sin que la presiones.',
        isBest: true,
        technique: 'abogado-diablo',
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
  // FASE 9 — REUNIÓN PRIVADA CON SUAVECITO · MEDIADOR · agente de la realidad (REFORMULADA)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 9,
    stage: 'privada-suavecito',
    playerRole: 'mediador',
    meetingType: 'private-suavecito',
    speaker: 'drPerez',
    speakerLine:
      'Mire, mediador, hablemos en serio. Sabemos perfectamente lo que dice la ley sobre el derecho de arrepentimiento, no me lo va a explicar a mí. Pero dígame una cosa: ¿usted realmente cree que un juez del fuero del Consumidor le va a dar daño punitivo a mi cliente por un colchón? Yo en mi experiencia vi de todo.',
    title: 'El Dr. Pérez te desafía',
    options: [
      {
        id: '9A',
        text: 'Doctor, se la devuelvo a usted que tiene experiencia: cuando una empresa conoce la obligación, aplica igual una cláusula que ya sabemos que no se sostiene, y lo hace con todos sus clientes, ¿el fuero suele moderar el daño punitivo o agravarlo?',
        deltas: { climate: -10, donRicardo: -8, florencia: 0 },
        feedback:
          'Mantuviste imparcialidad: no opinaste, le pediste a él —el técnico— que extrajera la conclusión. Ubicaste los agravantes (conocer la obligación, cláusula insostenible, política con todos) sin que parezca que lo decís vos. No puede contestar sin reconocer que el escenario es desfavorable.',
        isBest: true,
        technique: 'agente-realidad',
      },
      {
        id: '9B',
        text: 'Doctor, con el debido respeto a su experiencia, en este caso la ley es clara: el daño punitivo se va a otorgar y usted lo sabe tan bien como yo. No hay interpretación que valga.',
        deltas: { climate: 28, donRicardo: 18, florencia: 0 },
        feedback:
          'Adelantaste opinión sobre el fallo y perdiste imparcialidad. Le diste al Dr. Pérez una excusa perfecta para acusarte de parcial frente a la otra parte.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '9C',
        text: 'Doctor, le reconozco que es interpretable, tiene razón en eso. Quizás Florencia estaría dispuesta a bajar bastante la pretensión del daño punitivo.',
        deltas: { climate: 22, donRicardo: -5, florencia: 25 },
        feedback:
          'Mordiste el anzuelo. Cediste una carta de Florencia sin su autorización y transmitiste información implícita a la otra parte. Doble error.',
        technique: 'negociador-suave',
      },
      {
        id: '9D',
        text: 'Doctor, le recuerdo que esto no es un juicio y que acá no corresponde ponernos a debatir pronósticos de fallos. Sigamos.',
        deltas: { climate: 16, donRicardo: 5, florencia: 0 },
        feedback:
          'Esquivaste el momento perfecto para mover la rigidez del letrado sin opinar. Tenés razón en no opinar, pero perdiste la oportunidad de que él mismo extraiga la conclusión.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 10 — REPLANTEO · MEDIADOR
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 10,
    stage: 'replanteo',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Las partes vuelven a la mesa conjunta',
    situation:
      'Convocaste de nuevo a Florencia. Las cuatro personas están otra vez frente a la mesa. Sabés lo que cada una te dijo en privada, pero no podés transmitirlo. Te toca abrir esta segunda conjunta y orientarla.',
    options: [
      {
        id: '10A',
        text: 'Quiero proponerles cómo veo el problema. Florencia necesita recuperar lo pagado de forma efectiva y sentir que su reclamo es un derecho. Suavecito busca cumplir sin comprometer su operación. No son opuestos: ¿lo combinamos?',
        deltas: { climate: -12, donRicardo: -10, florencia: -10 },
        feedback:
          'Tomaste las posiciones declaradas y las reformulaste como intereses compatibles, sin revelar lo dicho en privadas. Mostraste que la mesa es posible. El proceso pasa de posicional a colaborativo.',
        isBest: true,
        technique: 'replanteo',
      },
      {
        id: '10B',
        text: 'Para destrabar les cuento lo que cada uno me dijo a solas: Florencia necesita la plata urgente por la mudanza, y a Don Ricardo le preocupa el flujo de caja. Ahora que está todo claro, negociemos de frente.',
        deltas: { climate: 75, donRicardo: 50, florencia: 50 },
        feedback:
          'Violaste la confidencialidad de las dos privadas. Las dos partes quedaron expuestas. La mediación se cae acá — y vos tenés responsabilidad profesional.',
        technique: 'violacion-confidencialidad',
      },
      {
        id: '10C',
        text: 'A ver: Florencia pide $1.350.000 y Don Ricardo ofrece una Gift Card de $980.000. Hay $370.000 de diferencia. Lo más práctico sería que cada uno ceda la mitad y cerramos en el punto medio.',
        deltas: { climate: 22, donRicardo: 6, florencia: 18 },
        feedback:
          'Eso es regateo, no replanteo. Volviste a la superficie del iceberg sin tocar los intereses. Las partes quedan donde estaban.',
        technique: 'regateo-posicional',
      },
      {
        id: '10D',
        text: 'Antes de avanzar quiero ser claro con ambos: la ley no deja lugar a dudas. Florencia ejerció su derecho y Suavecito tiene la obligación de devolver. El resto de la discusión es accesorio.',
        deltas: { climate: 48, donRicardo: 34, florencia: -5 },
        feedback:
          'Opinaste sobre el fondo en plena conjunta. Tomaste partido. Don Ricardo siente que ya hay sentencia. No hay forma de cerrar acuerdo después de esto.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 11 — BRAINSTORMING · ABOGADA · Don Ricardo en modo duro
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 11,
    stage: 'brainstorming',
    playerRole: 'abogada',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      '¿Saben qué? Estoy harto de esta historia. Le voy a ser claro: yo no le voy a devolver un peso a esta señora. Si quiere ir a tribunales, vamos. Tengo plata para abogados y tiempo para esperar tres años. Dígame qué propuesta concreta tiene y le digo si me sirve, o nos vamos cada uno por su lado.',
    title: 'Don Ricardo te tira un ultimátum',
    options: [
      {
        id: '11A',
        text: 'Lo entiendo, Don Ricardo. Florencia desiste del daño punitivo, por escrito, si reintegran los $980.000 a la tarjeta, cubren la logística y revisan la cláusula 7.3. Esas tres cosas y cerramos hoy.',
        deltas: { climate: -10, donRicardo: -8, florencia: -8 },
        feedback:
          'Harvard puro: usás el desistimiento del punitivo —que Florencia valora poco y Suavecito mucho— como moneda para conseguir lo que ella sí valora. Firmeza con cifra concreta sin escalar el tono.',
        isBest: true,
        technique: 'harvard',
      },
      {
        id: '11B',
        text: 'Mire Don Ricardo, si quiere ir a juicio vamos. Florencia no baja un peso de los $1.350.000 y en tribunales le sumamos daño moral y costas. Le va a salir el triple. Usted decide.',
        deltas: { climate: 28, donRicardo: 28, florencia: 6 },
        feedback:
          'Le respondiste al tono duro con tono duro. Encima Florencia te dijo en privada que el punitivo no le importaba — estás peleando contra el interés de tu clienta.',
        technique: 'negociador-duro',
      },
      {
        id: '11C',
        text: 'Don Ricardo, para destrabar esto mi clienta aceptaría la Gift Card, siempre que ustedes se hagan cargo del envío. ¿Lo dejamos así y pasamos a redactar?',
        deltas: { climate: 18, donRicardo: -10, florencia: 28 },
        feedback:
          'Cediste el punto central por presión del tono áspero. Florencia desde el día uno te dijo que no quería Gift Card. Negociador suave bajo amenaza.',
        technique: 'negociador-suave',
      },
      {
        id: '11D',
        text: 'Mire Don Ricardo, para no trabarnos, mejor proponga usted la fórmula que le cierra y nosotros la evaluamos.',
        deltas: { climate: 14, donRicardo: 8, florencia: 14 },
        feedback:
          'Cediste el primer ancla bajo presión. Si Don Ricardo arranca la propuesta, va a tirar bajo y desde ahí no te movés. La firmeza Harvard se rompe.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 12 — BRAINSTORMING · MEDIADOR · las 4 opciones de mutuo beneficio del PDF
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 12,
    stage: 'brainstorming',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Cuatro opciones sobre la mesa: ¿cuál encaja mejor?',
    situation:
      'Después del intercambio surgieron cuatro propuestas concretas para resolver el conflicto. Como mediador/a te toca señalar cuál combina mejor los intereses reales de ambas partes —no la que cada uno quiere, sino la que les sirve a los dos.',
    options: [
      {
        id: '12A',
        text: OPCIONES_MUTUO_BENEFICIO[0].text,
        deltas: { climate: 12, donRicardo: 6, florencia: 14 },
        feedback:
          'Florencia recupera el dinero, pero el envío lo paga ella —cuando la ley pone esos gastos sobre el vendedor. La cláusula abusiva sigue intacta. Acuerdo parcial: resuelve lo patrimonial pero le carga costos indebidos a la requirente.',
        technique: 'regateo-posicional',
      },
      {
        id: '12B',
        text: OPCIONES_MUTUO_BENEFICIO[1].text,
        deltas: { climate: 14, donRicardo: -5, florencia: 22 },
        feedback:
          'Suavecito preserva flujo de caja pero Florencia pierde frente a la inflación. Su interés real era liquidez ahora —cobrar en cuotas es la versión competitiva del acuerdo.',
        technique: 'negociador-suave',
      },
      {
        id: '12C',
        text: OPCIONES_MUTUO_BENEFICIO[2].text,
        deltas: { climate: 18, donRicardo: -8, florencia: 32 },
        feedback:
          'Es el escenario que Florencia rechazó desde el día uno: ata su dinero a un comercio donde no piensa volver. La cláusula queda convalidada. Suavecito gana todo: no devuelve plata Y blinda la cláusula.',
        technique: 'esquive',
      },
      {
        id: '12D',
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

import { Phase } from './types';
import { OPCIONES_MUTUO_BENEFICIO } from './case';

export const PHASES: Phase[] = [
  // ─────────────────────────────────────────────────────────────────────
  // FASE 1 — REUNIÓN CONJUNTA INICIAL · MEDIADOR · pregunta abierta a Florencia
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 1,
    stage: 'conjunta-inicial',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Le toca a Florencia narrar',
    situation:
      'Terminaste el discurso de apertura. Las cuatro personas alrededor de la mesa esperan. Florencia te mira. Es la parte requirente — le corresponde a ella empezar.',
    options: [
      {
        id: '1A',
        text: 'Florencia, te escucho. Contame con tus palabras qué pasó.',
        deltas: { climate: -8, donRicardo: 0, florencia: -10 },
        feedback:
          'Pregunta abierta de manual: invita al relato sin condicionar la respuesta, sin pedirle una solución todavía, sin meter contenido propio. Florencia se siente escuchada. Eso te alcanza para que ella se explaye.',
        isBest: true,
        technique: 'pregunta-abierta',
      },
      {
        id: '1B',
        text: 'Florencia, ¿es cierto que reclamaste a los dos días de recibido el colchón?',
        deltas: { climate: 5, donRicardo: 0, florencia: 8 },
        feedback:
          'Confirmaste un dato técnico con pregunta cerrada antes de escuchar el relato. Es el dato dirimente, sí — pero confirmarlo va en la privada. Florencia se siente interrogada y no narrada.',
        technique: 'pregunta-cerrada',
      },
      {
        id: '1C',
        text: 'Florencia, contanos qué solución te parecería justa para esta situación.',
        deltas: { climate: 8, donRicardo: 3, florencia: 6 },
        feedback:
          'Pediste una solución antes del relato. La generación de opciones es etapa posterior, post-privadas. Acá Florencia se ancla en una cifra antes de explorar nada, y vos perdiste la ventana para escucharla.',
        technique: 'esquive',
      },
      {
        id: '1D',
        text: 'Florencia, sé breve si podés: la otra parte tiene mucho para contestar.',
        deltas: { climate: 12, donRicardo: -2, florencia: 14 },
        feedback:
          'Le metiste presión temporal a la parte requirente en el momento que justamente tiene que sentirse escuchada. La escucha activa se cae antes de empezar.',
        technique: 'carga-emocional',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 2 — REUNIÓN CONJUNTA INICIAL · MEDIADOR · parafraseo
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 2,
    stage: 'conjunta-inicial',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'florencia',
    speakerLine:
      'El 2 de mayo les compré online un colchón por $980.000. Llegó el día 5 y al probarlo era todo espuma, parecía de resortes en la foto. El 7 les escribí pidiendo la devolución del dinero, dentro del plazo legal. Me contestaron que "por política interna" solo me daban una Gift Card de 3 meses, y que el envío de devolución lo pagaba yo. Me sentí estafada — la ley dice que puedo arrepentirme y que el dinero vuelve a la tarjeta.',
    title: 'El relato de Florencia',
    options: [
      {
        id: '2A',
        text: 'A ver si entendí: comprás online el 2, recibís el 5, y dentro del plazo legal notificás que querés ejercer el arrepentimiento. La respuesta que recibiste no contempla la devolución al medio de pago original. ¿Es así?',
        deltas: { climate: -10, donRicardo: -8, florencia: -10 },
        feedback:
          'Reformulaste los hechos sin la carga emocional ("me sentí estafada"), sin afirmarlos como ciertos, y cerraste con verificación. Las dos partes lo escuchan como neutral.',
        isBest: true,
        technique: 'parafraseo',
      },
      {
        id: '2B',
        text: 'Florencia, lo que cuenta encuadra en el supuesto del Art. 34 LDC y el incumplimiento del Art. 1110 CCyCN. ¿Es eso lo que reclamás?',
        deltas: { climate: 28, donRicardo: 22, florencia: -5 },
        feedback:
          'Eso no es reformular: es opinar. Adelantaste conclusión jurídica frente a la otra parte. Don Ricardo y el Dr. Pérez te miran como si fueras el abogado contrario.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '2C',
        text: 'Florencia, usted se sintió estafada porque la trataron como una molestia y le quisieron meter un voucher en vez de devolverle la plata. ¿Cierto?',
        deltas: { climate: 16, donRicardo: 14, florencia: -2 },
        feedback:
          'Repetiste las cargas emocionales en vez de neutralizarlas. La reformulación despega el relato de las emociones; vos hiciste lo contrario y Don Ricardo se cierra.',
        technique: 'carga-emocional',
      },
      {
        id: '2D',
        text: 'Gracias Florencia, escuchamos. Pasemos al lado de Suavecito.',
        deltas: { climate: 18, donRicardo: -3, florencia: 18 },
        feedback:
          'No verificaste que entendiste. Florencia no sabe si la oíste; si entendiste mal lo arrastrás toda la mediación. La parte requirente tiene derecho a confirmar que llegó su versión.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 3 — REUNIÓN CONJUNTA INICIAL · MEDIADOR · pregunta abierta a Suavecito
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 3,
    stage: 'conjunta-inicial',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      'Doctor/a, le voy a ser franco. Hace doce años que tengo Suavecito y no soy ningún estafador. La señora compró un colchón, lo durmió tres noches y ahora viene con esta historia de la "espuma". Las cosas se ven en la foto. La Gift Card es lo que damos a todos. Yo no voy a regalar plata porque alguien se arrepintió.',
    title: 'El relato de Don Ricardo',
    options: [
      {
        id: '3A',
        text: 'Don Ricardo, lo escucho. ¿Qué opciones tiene Suavecito para resolver esto sin afectar su operación?',
        deltas: { climate: -10, donRicardo: -10, florencia: 0 },
        feedback:
          'Pregunta abierta + semilla del interés ("sin afectar la operación"). Le mostraste que entendés que la empresa tiene preocupaciones reales, sin tomar partido. Don Ricardo baja un cambio.',
        isBest: true,
        technique: 'pregunta-abierta',
      },
      {
        id: '3B',
        text: 'Don Ricardo, antes de que avance: ¿usted está al tanto de las obligaciones que el Art. 34 LDC pone sobre el vendedor en este tipo de operaciones?',
        deltas: { climate: 32, donRicardo: 26, florencia: -3 },
        feedback:
          'Pregunta cerrada acusatoria, aunque la envuelvas de cortesía. El mediador no asesora ni acusa. Don Ricardo siente que ya hay sentencia.',
        technique: 'acusacion',
      },
      {
        id: '3C',
        text: 'Don Ricardo, ¿cómo se imagina que se vería Suavecito frente a otros clientes si esta historia se hace pública?',
        deltas: { climate: 18, donRicardo: 14, florencia: 4 },
        feedback:
          'Pregunta circular en momento equivocado. Estas funcionan en privada, donde la parte no se expone. En conjunta, Don Ricardo siente presión frente a la contraparte y se atrinchera.',
        technique: 'pregunta-circular',
      },
      {
        id: '3D',
        text: 'Don Ricardo, le toca a usted. Pero le pido brevedad: la situación ya quedó bastante clara con el relato anterior.',
        deltas: { climate: 22, donRicardo: 24, florencia: -2 },
        feedback:
          '"Ya quedó clara la situación" antes de que abra la boca = decisión tomada. Pérdida de imparcialidad y presión temporal a la vez.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 4 — REUNIÓN CONJUNTA INICIAL · ABOGADA · ataque del Dr. Pérez + Don Ricardo duro
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 4,
    stage: 'conjunta-inicial',
    playerRole: 'abogada',
    meetingType: 'joint',
    speaker: 'drPerez',
    speakerLine:
      'Permítame doctor/a. Soy el Dr. Pérez, letrado de Suavecito. Voy al punto: la Sra. Gómez aceptó expresamente los Términos y Condiciones al hacer la compra. Cláusula 7.3, sin reembolsos a tarjeta para compras en promoción. Es un contrato de adhesión válido, firmado, ejecutado. Acá no hay nada que discutir. (Don Ricardo asiente con cara de pocos amigos.) ¿Qué tiene para decir la requirente?',
    title: 'Respondés como abogado/a de Florencia',
    options: [
      {
        id: '4A',
        text: 'Doctor, el contrato es válido como contrato. La discusión es si la cláusula 7.3 encaja en el Art. 37 LDC y el Art. 1119 CCyCN. ¿La analizamos?',
        deltas: { climate: -8, donRicardo: -5, florencia: -8 },
        feedback:
          'Duro con el problema, suave con la persona. No negás el contrato (no caés en negociador duro), pero ubicás la pelea donde corresponde: control de abusividad. Lo invitás a un análisis ordenado.',
        isBest: true,
        technique: 'harvard',
      },
      {
        id: '4B',
        text: 'Doctor, con todo respeto, sus T&C son papel mojado frente al orden público del Art. 65 LDC. Eso lo sabe usted y lo sé yo. No hay nada que adhesión pueda contra un derecho irrenunciable.',
        deltas: { climate: 24, donRicardo: 20, florencia: -2 },
        feedback:
          'Tenés razón en el fondo. Pero "papel mojado" radicaliza al letrado de enfrente: Dr. Pérez se atrinchera y Don Ricardo se prende a la pelea.',
        technique: 'negociador-duro',
      },
      {
        id: '4C',
        text: 'Doctor Pérez, mi clienta podría revisar la pretensión si Suavecito mejora las condiciones de la Gift Card. Pasemos a hablar de números concretos y veamos dónde nos encontramos.',
        deltas: { climate: 16, donRicardo: -5, florencia: 25 },
        feedback:
          'Le cediste el punto central frente a un argumento que ni siquiera resiste el control de cláusulas. Florencia te perdió la confianza en tiempo real.',
        technique: 'negociador-suave',
      },
      {
        id: '4D',
        text: 'Doctor, mi clienta no recuerda haber leído esa cláusula al momento de la compra. Sin lectura efectiva no hay aceptación válida, y por ende la cláusula no le es oponible.',
        deltas: { climate: 14, donRicardo: 10, florencia: 8 },
        feedback:
          'Argumento débil: las cláusulas de adhesión se aceptan por la sola operación. Te estás peleando en el terreno equivocado — no es la lectura, es la nulidad por abusividad.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 5 — REUNIÓN PRIVADA CON FLORENCIA · MEDIADOR · "abogado del diablo" sin nombrarlo
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 5,
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
        id: '5A',
        text: 'Florencia, el fuero te favorece y es gratuito, sí. Pero en CABA tarda 2 a 4 años. ¿Tu mudanza de esta semana resiste esa espera?',
        deltas: { climate: -10, donRicardo: 0, florencia: -10 },
        feedback:
          'Sin opinar sobre el fondo, le mostraste que su MAAN tiene una debilidad temporal que no se condice con su interés real (liquidez ya). Ella misma va a flexibilizar sin que la presiones.',
        isBest: true,
        technique: 'abogado-diablo',
      },
      {
        id: '5B',
        text: 'Florencia, esta es tu decisión y la respeto plenamente. Vos conocés tu situación mejor que nadie, así que hacé lo que sientas y yo te acompaño en lo que elijas.',
        deltas: { climate: 18, donRicardo: 0, florencia: 18 },
        feedback:
          'Abdicaste de tu rol. El mediador no asesora pero sí ayuda a que la parte evalúe realidades. Florencia se va sin los datos para decidir.',
        technique: 'esquive',
      },
      {
        id: '5C',
        text: 'Florencia, mi consejo es que no sueltes el daño punitivo: es la única carta de presión real que tenés, y la jurisprudencia reciente del fuero viene reconociéndolo con fuerza.',
        deltas: { climate: 38, donRicardo: 0, florencia: 22 },
        feedback:
          'Asesoramiento estratégico explícito. El mediador no puede hacer eso (Art. 26.589). Y encima pronosticaste el resultado judicial — saliste por completo del rol.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '5D',
        text: 'Florencia, te soy honesto: el juicio es caro, largo e incierto. Lo mejor que podés hacer es aceptar lo que te ofrezcan hoy y cerrar el tema.',
        deltas: { climate: 42, donRicardo: 0, florencia: 32 },
        feedback:
          'Falso (el fuero es gratuito por Art. 53 LDC) y parcializado. Le generaste miedo para que firme cualquier cosa. Lo opuesto al rol.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 6 — REUNIÓN PRIVADA CON SUAVECITO · MEDIADOR · pregunta circular
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 6,
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
        id: '6A',
        text: 'Le agradezco la franqueza. Si esto sale en un fallo público con daño punitivo, ¿cómo cree que lo verían sus clientes? Y a seis meses, ¿cómo imagina la empresa con esa cláusula?',
        deltas: { climate: -12, donRicardo: -12, florencia: 0 },
        feedback:
          'Sin opinar, lo desplazaste a evaluar la situación desde dos perspectivas que no estaba mirando: el mercado y el futuro. Sin tomar partido. Empieza a separar su posición de su interés real.',
        isBest: true,
        technique: 'pregunta-circular',
      },
      {
        id: '6B',
        text: 'Don Ricardo, lo escucho, pero dígame con franqueza: ¿usted entiende que con esa política de Gift Card está incumpliendo lisa y llanamente el Art. 34 de la Ley de Defensa del Consumidor?',
        deltas: { climate: 22, donRicardo: 24, florencia: 0 },
        feedback:
          'Pregunta cerrada acusatoria. Cerraste la puerta cuando se estaba abriendo. Él te dio información valiosa sobre su interés real y vos lo enfrentaste con un sí/no jurídico.',
        technique: 'acusacion',
      },
      {
        id: '6C',
        text: 'Don Ricardo, lo entiendo perfectamente. Para no dar tantas vueltas, dígame directamente: ¿cuánto estaría dispuesto a poner sobre la mesa para cerrar esto hoy mismo?',
        deltas: { climate: 10, donRicardo: 6, florencia: 0 },
        feedback:
          'Saltaste al regateo cuando él te estaba entregando intereses. La privada sirve para explorar intereses, no para discutir cifras — eso viene después.',
        technique: 'regateo-posicional',
      },
      {
        id: '6D',
        text: 'Don Ricardo, lo que acaba de admitir —que aplica la misma cláusula a todos— es justo lo que el Art. 55 LDC habilita como acción colectiva. Téngalo presente.',
        deltas: { climate: 55, donRicardo: 42, florencia: 0 },
        feedback:
          'Convertiste una confesión en privada en una amenaza jurídica. Le pasaste el mensaje de que todo lo que diga se va a usar en su contra. No vuelve a hablar.',
        technique: 'violacion-confidencialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 7 — REUNIÓN PRIVADA CON SUAVECITO · MEDIADOR · agente de la realidad al Dr. Pérez
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 7,
    stage: 'privada-suavecito',
    playerRole: 'mediador',
    meetingType: 'private-suavecito',
    speaker: 'drPerez',
    speakerLine:
      'Doctor/a, hablemos en serio entre técnicos. Yo entiendo el Art. 34, pero esto es interpretable. ¿Usted realmente piensa que un juez del fuero del Consumidor otorga daño punitivo en un caso por un colchón? En mi experiencia vi sentencias para todos lados.',
    title: 'El Dr. Pérez te desafía técnicamente',
    options: [
      {
        id: '7A',
        text: 'Doctor, se la devuelvo: cuando la empresa conoce el Art. 34, aplica una cláusula nula por el Art. 37 y lo hace con todos, ¿el fuero modera el punitivo o lo agrava?',
        deltas: { climate: -10, donRicardo: -8, florencia: 0 },
        feedback:
          'Mantuviste imparcialidad: no opinaste, le pediste a él —el técnico— que extrajera la conclusión. Ubicaste los tres agravantes (conocimiento + nulidad + política sistémica) sin que parezca que lo decís vos. No puede contestar sin reconocer que el escenario es desfavorable.',
        isBest: true,
        technique: 'agente-realidad',
      },
      {
        id: '7B',
        text: 'Doctor, con el debido respeto a su experiencia, en este caso la ley es clara: el daño punitivo se va a otorgar y usted lo sabe tan bien como yo. No hay interpretación que valga.',
        deltas: { climate: 28, donRicardo: 18, florencia: 0 },
        feedback:
          'Adelantaste opinión sobre el fallo y perdiste imparcialidad. Le diste al Dr. Pérez una excusa perfecta para acusarte de parcial frente a la otra parte.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '7C',
        text: 'Doctor, le reconozco que es interpretable, tiene razón en eso. Quizás Florencia estaría dispuesta a bajar bastante la pretensión del daño punitivo si llegamos a un buen arreglo.',
        deltas: { climate: 22, donRicardo: -5, florencia: 25 },
        feedback:
          'Mordiste el anzuelo. Cediste una carta de Florencia sin su autorización y transmitiste información implícita a la otra parte. Doble error.',
        technique: 'negociador-suave',
      },
      {
        id: '7D',
        text: 'Doctor, le recuerdo que esto no es un juicio y que acá no corresponde que nos pongamos a debatir pronósticos de fallos. Sigamos con lo nuestro.',
        deltas: { climate: 16, donRicardo: 5, florencia: 0 },
        feedback:
          'Esquivaste el momento perfecto para mover la rigidez del letrado sin opinar. Tenés razón en no opinar, pero perdiste la oportunidad de que él mismo extraiga la conclusión.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 8 — REPLANTEO · MEDIADOR
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 8,
    stage: 'replanteo',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Las partes vuelven a la mesa conjunta',
    situation:
      'Convocaste de nuevo a Florencia. Las cuatro personas están otra vez frente a la mesa. Sabés lo que cada una te dijo en privada, pero no podés transmitirlo. Te toca abrir esta segunda conjunta y orientarla.',
    options: [
      {
        id: '8A',
        text: 'Quiero proponerles cómo veo el problema. Florencia necesita recuperar lo pagado de forma efectiva y sentir que su reclamo es un derecho. Suavecito busca cumplir sin comprometer su operación. No son opuestos: ¿lo combinamos?',
        deltas: { climate: -12, donRicardo: -10, florencia: -10 },
        feedback:
          'Tomaste las posiciones declaradas y las reformulaste como intereses compatibles, sin revelar lo dicho en privadas. Mostraste que la mesa es posible. El proceso pasa de posicional a colaborativo.',
        isBest: true,
        technique: 'replanteo',
      },
      {
        id: '8B',
        text: 'Para destrabar les cuento lo que cada uno me dijo a solas: Florencia necesita la plata urgente por la mudanza, y a Don Ricardo le preocupa el flujo de caja. Ahora que está todo claro, negociemos de frente.',
        deltas: { climate: 75, donRicardo: 50, florencia: 50 },
        feedback:
          'Violaste la confidencialidad de las dos privadas (Art. 7 inc. e + Art. 8). Las dos partes quedaron expuestas. La mediación se cae acá — y vos tenés responsabilidad profesional.',
        technique: 'violacion-confidencialidad',
      },
      {
        id: '8C',
        text: 'A ver: Florencia pide $1.350.000 y Don Ricardo ofrece una Gift Card de $980.000. Hay $370.000 de diferencia. Lo más práctico sería que cada uno ceda la mitad y cerramos en el punto medio.',
        deltas: { climate: 22, donRicardo: 6, florencia: 18 },
        feedback:
          'Eso es regateo, no replanteo. Volviste a la superficie del iceberg sin tocar los intereses. Las partes quedan donde estaban.',
        technique: 'regateo-posicional',
      },
      {
        id: '8D',
        text: 'Antes de avanzar quiero ser claro con ambos: el Art. 34 LDC no deja lugar a dudas. Florencia ejerció su derecho y Suavecito tiene la obligación de devolver. El resto de la discusión es accesorio.',
        deltas: { climate: 48, donRicardo: 34, florencia: -5 },
        feedback:
          'Opinaste sobre el fondo en plena conjunta. Tomaste partido. Don Ricardo siente que ya hay sentencia. No hay forma de cerrar acuerdo después de esto.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 9 — BRAINSTORMING · ABOGADA · Don Ricardo en modo duro
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 9,
    stage: 'brainstorming',
    playerRole: 'abogada',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      '¿Saben qué? Estoy harto de esta historia. Mire doctor/a, le voy a ser claro: yo no le voy a devolver un peso a esta señora. Si quiere ir a tribunales, vamos. Tengo plata para pagar abogados, tiempo para esperar tres años, y la verdad es que su clienta usó el colchón. Dígame qué propuesta concreta tiene y le digo si me sirve o nos vamos cada uno por su lado.',
    title: 'Don Ricardo te tira un ultimátum',
    options: [
      {
        id: '9A',
        text: 'Lo entiendo, Don Ricardo. Florencia desiste del daño punitivo, por escrito, si reintegran los $980.000 a la tarjeta, cubren la logística y revisan la cláusula 7.3. Esas tres cosas y cerramos hoy.',
        deltas: { climate: -10, donRicardo: -8, florencia: -8 },
        feedback:
          'Harvard puro: usás el desistimiento del punitivo —que Florencia valora poco y Suavecito mucho— como moneda para conseguir lo que ella sí valora. Firmeza con cifra concreta sin escalar el tono.',
        isBest: true,
        technique: 'harvard',
      },
      {
        id: '9B',
        text: 'Mire Don Ricardo, si quiere ir a juicio vamos. Florencia no baja un peso de los $1.350.000 y en tribunales le sumamos daño moral y costas. Le va a salir el triple. Usted decide.',
        deltas: { climate: 28, donRicardo: 28, florencia: 6 },
        feedback:
          'Le respondiste al tono duro con tono duro. Encima Florencia te dijo en privada que el punitivo no le importaba — estás peleando contra el interés de tu clienta.',
        technique: 'negociador-duro',
      },
      {
        id: '9C',
        text: 'Don Ricardo, para destrabar esto mi clienta estaría dispuesta a aceptar la Gift Card, siempre que ustedes se hagan cargo del envío de la devolución. ¿Lo dejamos así y pasamos a redactar?',
        deltas: { climate: 18, donRicardo: -10, florencia: 28 },
        feedback:
          'Cediste el punto central por presión del tono áspero. Florencia desde el día uno te dijo que no quería Gift Card. Negociador suave bajo amenaza.',
        technique: 'negociador-suave',
      },
      {
        id: '9D',
        text: 'Mire Don Ricardo, para no trabarnos, mejor proponga usted la fórmula que le cierra y nosotros la evaluamos con tranquilidad.',
        deltas: { climate: 14, donRicardo: 8, florencia: 14 },
        feedback:
          'Cediste el primer ancla bajo presión. Si Don Ricardo arranca la propuesta, va a tirar bajo y desde ahí no te movés. La firmeza Harvard se rompe.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 10 — BRAINSTORMING · MEDIADOR · las 4 opciones de mutuo beneficio del PDF
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 10,
    stage: 'brainstorming',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Cuatro opciones sobre la mesa: ¿cuál encaja mejor?',
    situation:
      'Después del intercambio surgieron cuatro propuestas concretas para resolver el conflicto. Como mediador/a te toca señalar cuál combina mejor los intereses reales de ambas partes —no la que cada uno quiere, sino la que les sirve a los dos.',
    options: [
      {
        id: '10A',
        text: OPCIONES_MUTUO_BENEFICIO[0].text,
        deltas: { climate: 12, donRicardo: 6, florencia: 14 },
        feedback:
          'Florencia recupera el dinero, pero el envío lo paga ella —cuando el Art. 34 LDC pone los gastos sobre el vendedor. La cláusula abusiva sigue intacta. Acuerdo parcial: resuelve lo patrimonial pero le carga costos indebidos a la requirente.',
        technique: 'regateo-posicional',
      },
      {
        id: '10B',
        text: OPCIONES_MUTUO_BENEFICIO[1].text,
        deltas: { climate: 14, donRicardo: -5, florencia: 22 },
        feedback:
          'Suavecito preserva flujo de caja pero Florencia pierde frente a la inflación. Su interés real era liquidez ahora —cobrar en cuotas es la versión competitiva del acuerdo. Gana la empresa, pierde el tiempo de la consumidora.',
        technique: 'negociador-suave',
      },
      {
        id: '10C',
        text: OPCIONES_MUTUO_BENEFICIO[2].text,
        deltas: { climate: 18, donRicardo: -8, florencia: 32 },
        feedback:
          'Es el escenario que Florencia rechazó desde el día uno: ata su dinero a un comercio donde no piensa volver. La cláusula 7.3 queda implícitamente convalidada. Suavecito gana todo: no devuelve plata Y blinda la cláusula.',
        technique: 'esquive',
      },
      {
        id: '10D',
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

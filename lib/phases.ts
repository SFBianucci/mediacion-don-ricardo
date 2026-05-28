import { Phase } from './types';

export const PHASES: Phase[] = [
  // ─────────────────────────────────────────────────────────────────────
  // ETAPA 1 — DISCURSO DE APERTURA
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 1,
    stage: 'apertura',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Tu primera intervención: legitimación y empowerment',
    situation:
      'Es la primera audiencia. Florencia, su abogada (Dra. López), Don Ricardo y el Dr. Pérez ya están conectados. Te miran todos. Es tu primera intervención como mediador/a. ¿Cómo abrís?',
    options: [
      {
        id: '1A',
        text: 'Buenas tardes. Soy mediador/a habilitado/a por el Ministerio de Justicia, inscripto en el Registro Nacional de Mediación. Antes que nada quiero agradecerles que estén acá. Mi rol es facilitar el diálogo, no decidir ni asesorar — para eso ya cuentan con sus abogados, la Dra. López y el Dr. Pérez, que son profesionales con todo el conocimiento técnico del caso. Vamos a trabajar juntos.',
        deltas: { climate: -10, donRicardo: -5, florencia: -5 },
        feedback:
          'Legitimación + empowerment Harvard. Citaste tu habilitación (genera confianza institucional), agradeciste la presencia (crea clima cálido) y empoderaste a los letrados nombrándolos. Las dos partes se sienten respaldadas. Apertura impecable.',
        isBest: true,
        technique: 'legitimacion',
      },
      {
        id: '1B',
        text: 'Bueno, vamos al grano. Florencia, ¿cuál es el monto que querés cobrar? Don Ricardo, ¿cuánto está dispuesto a pagar?',
        deltas: { climate: 18, donRicardo: 8, florencia: 12 },
        feedback:
          'Mediación express mal hecha: ni te presentaste, ni explicaste tu rol, ni generaste clima. Saltaste a la negociación posicional sin discurso de apertura. Las partes no saben quién sos ni qué reglas rigen.',
        technique: 'esquive',
      },
      {
        id: '1C',
        text: 'Buenas. Antes de empezar quiero dejar claro que esto no es un juicio: yo no soy juez, no voy a sancionar a nadie. Acá venimos a entendernos. ¿Listo Don Ricardo? Vamos a tratar de que esto termine bien y rápido.',
        deltas: { climate: 8, donRicardo: -2, florencia: 10 },
        feedback:
          'Te dirigiste solo a Don Ricardo en la apertura. Florencia se siente invisibilizada por el mediador que debería ser imparcial. Y "que termine bien y rápido" suena a presión para acordar — el principio del Art. 7 inc. b es voluntariedad.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '1D',
        text: 'Buenas tardes a todos. Soy el/la mediador/a designado/a. Antes de empezar quiero adelantarles mi opinión: el Art. 34 LDC es claro, así que les sugiero a Suavecito que acepte el reintegro y ahorremos tiempo.',
        deltas: { climate: 35, donRicardo: 25, florencia: -5 },
        feedback:
          'Pérdida total de imparcialidad. Adelantaste opinión jurídica antes de escuchar a las partes. Don Ricardo y el Dr. Pérez quedan posicionados como "los que están equivocados". Como mediador no asesorás, no opinás sobre el fondo. El proceso quedó viciado.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },
  {
    id: 2,
    stage: 'apertura',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Principios del Art. 7 y agenda de trabajo',
    situation:
      'Hiciste la presentación. Ahora te toca explicar las reglas del juego: los principios del Art. 7 de la Ley 26.589 y la agenda de los temas a tratar. Es tu segundo bloque dentro del discurso de apertura.',
    options: [
      {
        id: '2A',
        text: 'Esta mediación se rige por la Ley 26.589 y sus principios: imparcialidad mía, voluntariedad de ustedes para participar, igualdad de las partes, confidencialidad de todo lo que se diga, y promoción de la comunicación directa. La agenda la vamos a armar entre todos, pero les propongo arrancar por el ejercicio del derecho de arrepentimiento, después la logística y el reintegro, y por último el daño punitivo. ¿Les parece?',
        deltas: { climate: -8, donRicardo: -5, florencia: -5 },
        feedback:
          'Enunciaste los principios del Art. 7 con vocabulario coloquial pero técnico, y planteaste una agenda lógica de temas sucesivos (no tiene sentido discutir el monto si antes no se establece si el derecho se ejerció en plazo). Cerraste con pregunta abierta para que las partes participen del armado de la agenda. Harvard puro.',
        isBest: true,
        technique: 'empowerment',
      },
      {
        id: '2B',
        text: 'Bueno, las reglas son las de siempre: confidencialidad y respeto. Vamos a discutir el monto del reclamo, que es de $1.350.000.',
        deltas: { climate: 12, donRicardo: 5, florencia: 8 },
        feedback:
          'Saltaste 5 principios del Art. 7 y comprimiste todo en "confidencialidad y respeto". Además anclaste la agenda en el monto — empezás por el final, sin haber establecido si el derecho de arrepentimiento se ejerció válidamente en término. La agenda mal armada arrastra toda la mediación.',
        technique: 'esquive',
      },
      {
        id: '2C',
        text: 'Quiero recordarles algo importante: lo que digan acá puede usarse después en juicio si esto termina mal, así que cuidado con lo que confiesan.',
        deltas: { climate: 40, donRicardo: 18, florencia: 18 },
        feedback:
          'Violación grave del principio de confidencialidad (Art. 7 inc. e y Art. 8 de la ley). Lo que se dice en mediación NO puede usarse en juicio, justamente para fomentar la comunicación directa. Le pasaste el mensaje opuesto a las partes y les acabás de cerrar la boca a las dos.',
        technique: 'violacion-confidencialidad',
      },
      {
        id: '2D',
        text: 'Vamos a empezar por el daño punitivo. Es el tema más importante y de ahí se desprende todo lo demás.',
        deltas: { climate: 18, donRicardo: 15, florencia: 5 },
        feedback:
          'Agenda invertida: el daño punitivo es la consecuencia del incumplimiento, no la causa. Si no establecemos primero que el derecho se ejerció en plazo y que la cláusula de Suavecito es nula, discutir el punitivo es discutir el aire. Don Ricardo se planta porque ve la amenaza encima sin haber explorado nada.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // ETAPA 2 — REUNIÓN CONJUNTA INICIAL
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 3,
    stage: 'conjunta-inicial',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Pregunta abierta a Florencia',
    situation:
      'Cerraste el discurso de apertura. Ahora le toca a la parte requirente narrar. Tenés que invitar a Florencia a contar su versión. ¿Qué tipo de pregunta usás?',
    options: [
      {
        id: '3A',
        text: 'Florencia, contame con tus palabras qué fue lo que te trajo hasta acá. ¿Qué solución te parecería justa para esta situación?',
        deltas: { climate: -8, donRicardo: 0, florencia: -10 },
        feedback:
          'Pregunta abierta perfecta. No condicionás la respuesta, no metés palabras en la boca de Florencia, y al pedirle "qué solución te parecería justa" ya empezás a indagar interés sin que ella se dé cuenta. Florencia siente que la escuchan en serio. Es la pregunta canónica de apertura de la conjunta inicial.',
        isBest: true,
        technique: 'pregunta-abierta',
      },
      {
        id: '3B',
        text: 'Florencia, ¿es verdad que vos compraste el colchón el 2 de mayo y reclamaste el 7 de mayo?',
        deltas: { climate: 5, donRicardo: 0, florencia: 8 },
        feedback:
          'Pregunta cerrada en el momento equivocado. En la conjunta inicial buscás que la parte se explaye libremente — la pregunta cerrada va después, en privada, cuando ya necesitás confirmar datos puntuales. Acá Florencia te da un sí/no y se queda con cosas adentro.',
        technique: 'pregunta-cerrada',
      },
      {
        id: '3C',
        text: 'Florencia, ¿cómo creés que se sentiría Don Ricardo si todos sus clientes le pidieran el reintegro como vos?',
        deltas: { climate: 15, donRicardo: 8, florencia: 18 },
        feedback:
          'Pregunta circular fuera de lugar. Las circulares son potentes pero van en privada, donde la parte se siente segura. En la conjunta inicial le pediste a Florencia que se ponga en el lugar de Don Ricardo antes de haber contado siquiera su lado. Se siente cuestionada por el propio mediador.',
        technique: 'pregunta-circular',
      },
      {
        id: '3D',
        text: 'Florencia, contame qué pasó. Pero te aviso: tratá de ser breve porque tenemos mucho que ver.',
        deltas: { climate: 14, donRicardo: -2, florencia: 16 },
        feedback:
          'Empezaste bien (pregunta abierta) y arruinaste la apertura con la advertencia. Le pasaste a Florencia el mensaje de que su relato te molesta. La escucha activa se cae antes de empezar.',
        technique: 'carga-emocional',
      },
    ],
  },
  {
    id: 4,
    stage: 'conjunta-inicial',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'florencia',
    speakerLine:
      'El 2 de mayo compré online un colchón a estos señores por $980.000. Llegó el 5 y no era lo que yo esperaba — vendían un colchón que parecía de resortes y era todo espuma. El 7 les escribí por WhatsApp pidiendo la devolución del dinero, dentro del plazo legal. Me dijeron que "por política interna" no me devolvían nada, solo una Gift Card de 3 meses. Encima me querían cobrar a mí el envío de la devolución. Me sentí estafada. La ley dice que tengo derecho a arrepentirme y que el dinero vuelve a la tarjeta.',
    title: 'Parafraseo del relato de Florencia',
    options: [
      {
        id: '4A',
        text: 'A ver si entendí bien, Florencia: vos comprás el colchón el 2 de mayo de manera online, lo recibís el 5, y a los dos días, dentro del plazo legal, le notificás a Suavecito que querés ejercer el derecho de arrepentimiento. Te ofrecieron alternativas que no contemplaban la devolución del dinero al medio de pago original y te trasladaron a vos los gastos de envío. ¿Es así? ¿Querés agregar algo más?',
        deltas: { climate: -10, donRicardo: -8, florencia: -10 },
        feedback:
          'Parafraseo Harvard impecable. Repetiste los hechos centrales con tus palabras, en orden, sin la carga emocional ("me sentí estafada"). No afirmaste como cierto lo que ella dijo (usaste "vos comprás", "te ofrecieron"). Cerraste con la fórmula canónica "¿es así? ¿querés agregar algo más?". Florencia se siente escuchada Y Don Ricardo siente que no opinaste sobre el fondo — quedaste imparcial.',
        isBest: true,
        technique: 'parafraseo',
      },
      {
        id: '4B',
        text: 'Florencia, claramente lo que cuenta usted muestra que Suavecito violó el Art. 34 LDC. ¿Es así?',
        deltas: { climate: 35, donRicardo: 25, florencia: -8 },
        feedback:
          'Eso no es parafraseo — es opinión jurídica del mediador. Adelantaste el resultado y le diste a Florencia un parafraseo a su favor. Don Ricardo y Dr. Pérez te miran como si fueras el abogado contrario. La imparcialidad se hizo trizas. Recordá: el parafraseo es neutral, no afirma como cierto lo que la parte dijo.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '4C',
        text: 'A ver Florencia: usted se sintió estafada porque la empresa la trató mal y le quiso meter un voucher en vez de devolverle la plata. ¿Cierto?',
        deltas: { climate: 18, donRicardo: 15, florencia: -3 },
        feedback:
          'Repetiste la carga emocional ("estafada", "trató mal", "meter un voucher") en vez de neutralizarla. El parafraseo despega el relato de las emociones negativas — vos hiciste lo contrario. Don Ricardo escucha al mediador validando los adjetivos de la contraparte y se cierra.',
        technique: 'carga-emocional',
      },
      {
        id: '4D',
        text: 'Bueno, escuché. Pasemos al lado de Suavecito.',
        deltas: { climate: 22, donRicardo: -3, florencia: 20 },
        feedback:
          'No parafraseaste. La función del parafraseo es doble: demostrarle a la parte que la escuchaste Y verificar que entendiste bien. Sin eso, Florencia no sabe si la oíste, y si entendiste mal lo arrastrás toda la mediación.',
        technique: 'esquive',
      },
    ],
  },
  {
    id: 5,
    stage: 'conjunta-inicial',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Pregunta abierta a Suavecito',
    situation:
      'Parafraseaste a Florencia y ella confirmó. Ahora le toca a la parte requerida. Tenés que abrir la palabra para Don Ricardo y el Dr. Pérez. ¿Qué les preguntás?',
    options: [
      {
        id: '5A',
        text: 'Don Ricardo, Dr. Pérez: cuéntenme cómo vivieron ustedes esta situación. ¿Qué opciones tienen disponibles para resolver esto sin afectar la operación de Suavecito?',
        deltas: { climate: -8, donRicardo: -10, florencia: 0 },
        feedback:
          'Pregunta abierta perfecta + ya plantás la semilla del interés ("sin afectar la operación"). Don Ricardo siente que el mediador entiende que la empresa también tiene problemas reales. Se abre. La conjunta inicial está cumpliendo su función: que las dos partes se expresen libremente.',
        isBest: true,
        technique: 'pregunta-abierta',
      },
      {
        id: '5B',
        text: 'Don Ricardo, ¿usted sabía que el Art. 34 LDC dice que los gastos de envío son a cargo del vendedor?',
        deltas: { climate: 30, donRicardo: 22, florencia: -5 },
        feedback:
          'Pregunta cerrada Y acusatoria. Le tiraste el artículo encima en la conjunta. Don Ricardo siente que el mediador ya tomó partido. La imparcialidad se fue por la ventana.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '5C',
        text: 'Don Ricardo, ¿qué cree que pensaría Florencia si usted le devolviera la plata hoy mismo?',
        deltas: { climate: 18, donRicardo: 12, florencia: 5 },
        feedback:
          'Pregunta circular en conjunta — mal momento. Las circulares son potentes pero se reservan para las privadas, donde no exponen públicamente a la parte. Acá Don Ricardo siente que lo estás presionando frente a la contraparte.',
        technique: 'pregunta-circular',
      },
      {
        id: '5D',
        text: 'Bueno, Don Ricardo, le toca. Pero le pido que sea breve porque Florencia tiene razón en lo principal.',
        deltas: { climate: 45, donRicardo: 30, florencia: -5 },
        feedback:
          'Pérdida total de imparcialidad antes de que la otra parte abra la boca. "Florencia tiene razón en lo principal" es opinión del mediador sobre el fondo. Es exactamente lo que la Ley 26.589 prohíbe.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 6 — ABOGADA DE FLORENCIA: ATAQUE DEL DR. PÉREZ
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 6,
    stage: 'conjunta-inicial',
    playerRole: 'abogada',
    meetingType: 'joint',
    speaker: 'drPerez',
    speakerLine:
      'Permítame, doctor/a mediador/a. Soy el Dr. Pérez, letrado patrocinante de Suavecito. Quiero dejar sentado que los Términos y Condiciones de mi cliente fueron aceptados expresamente por la Sra. Gómez al momento de la compra: cláusula 7.3, no hay reembolsos a tarjeta para compras en promoción. Es un contrato de adhesión válido y ejecutado. Acá no hay nada que reformar. ¿Qué tiene para decir la parte requirente?',
    title: 'Respondés como abogada/o de Florencia',
    options: [
      {
        id: '6A',
        text: 'Doctor Pérez, le entiendo el planteo. El contrato de adhesión es válido como contrato — eso no se discute. La discusión es si esa cláusula puntual no encaja en el supuesto del Art. 37 LDC y el Art. 1119 CCyCN: desnaturalización de la obligación del proveedor y restricción de un derecho irrenunciable. ¿Le parece que lo analicemos cláusula por cláusula con el mediador?',
        deltas: { climate: -8, donRicardo: -5, florencia: -8 },
        feedback:
          'Harvard puro: duro con el problema, suave con la persona. No negás el contrato (no caés en negociador duro), pero ubicás el debate donde corresponde (control de abusividad). Hablás en el registro técnico del letrado y lo invitás a un análisis ordenado. Dr. Pérez no tiene contra qué pegar.',
        isBest: true,
        technique: 'harvard',
      },
      {
        id: '6B',
        text: 'Doctor, sus T&C son papel mojado. El Art. 34 LDC es de orden público (Art. 65 LDC) y se les pasa por arriba a sus cláusulas. No hay más que discutir.',
        deltas: { climate: 22, donRicardo: 18, florencia: -2 },
        feedback:
          '"Papel mojado" es exactamente el tipo de frase que radicaliza al letrado de enfrente. El argumento es válido pero lo presentás como un golpe en vez de una invitación al análisis. Dr. Pérez se atrinchera.',
        technique: 'negociador-duro',
      },
      {
        id: '6C',
        text: 'Doctor Pérez, si los T&C dicen eso, capaz que Florencia pueda revisar la pretensión — lo de la Gift Card no es tan desproporcionado.',
        deltas: { climate: 15, donRicardo: -5, florencia: 25 },
        feedback:
          'Negociador suave clásico. Cediste el punto central de la mediación frente a un argumento que ni siquiera resiste el control de cláusulas abusivas. Florencia te perdió la confianza en tiempo real: vos tenés que defenderla, no acomodarte.',
        technique: 'negociador-suave',
      },
      {
        id: '6D',
        text: 'Doctor, mi clienta no recuerda haber leído esa cláusula. Sin lectura no hay aceptación.',
        deltas: { climate: 12, donRicardo: 8, florencia: 8 },
        feedback:
          'Argumento débil. Las cláusulas de adhesión se aceptan por el solo hecho de la operación, leídas o no. Te estás peleando en el terreno equivocado — no es la falta de lectura, es la nulidad por abusividad.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // ETAPA 3 — REUNIÓN PRIVADA CON FLORENCIA
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 7,
    stage: 'privada-florencia',
    playerRole: 'mediador',
    meetingType: 'private-florencia',
    speaker: 'mediator',
    privateContext:
      'Convocaste a reunión privada con Florencia y su abogada. Suavecito quedó en sala de espera. Es el momento de indagar el interés real.',
    title: 'Confidencialidad y primera pregunta cerrada',
    situation:
      'Florencia y la Dra. López están enfrente. Antes de empezar a preguntar, hay un paso técnico imprescindible. ¿Cómo arrancás la privada?',
    options: [
      {
        id: '7A',
        text: 'Florencia, antes de que hablemos te recuerdo algo importante: todo lo que digas acá es confidencial. No puedo transmitírselo a Don Ricardo ni al Dr. Pérez salvo que vos me autorices expresamente. Eso te da margen para contarme lo que necesites. Ahora sí: el contacto por WhatsApp con Suavecito, ¿fue dentro de los 10 días corridos desde que recibiste el colchón?',
        deltas: { climate: -10, donRicardo: 0, florencia: -12 },
        feedback:
          'Apertura técnica del caucus impecable. Recordaste la confidencialidad (Art. 7 inc. e + Art. 8) — esto es lo que la ley exige antes de cualquier pregunta en privada y le abre la puerta a Florencia para hablar con confianza. Y arrancaste con una pregunta cerrada para confirmar el dato dirimente: ¿se ejerció en plazo? Florencia se siente cuidada.',
        isBest: true,
        technique: 'confidencialidad',
      },
      {
        id: '7B',
        text: 'Florencia, contame: ¿qué necesitás realmente? ¿Cuál es tu interés real detrás del reclamo?',
        deltas: { climate: 8, donRicardo: 0, florencia: 5 },
        feedback:
          'Pregunta abierta razonable pero te salteaste dos pasos: recordar la confidencialidad (la ley te lo exige) y confirmar primero el dato técnico que ancla todo (el plazo del Art. 34). Florencia no sabe si puede confiar en vos.',
        technique: 'esquive',
      },
      {
        id: '7C',
        text: 'Florencia, te voy a ser franco/a: la otra parte me dijo en privado que están dispuestos a transar. Aprovechá.',
        deltas: { climate: 60, donRicardo: 20, florencia: 30 },
        feedback:
          'Catástrofe. Inventaste una transmisión de información de la otra parte (que no hubo) y violaste la confidencialidad de raíz. Florencia ya no te cree nada y si Don Ricardo se entera la mediación se cae. Esto es exactamente lo que NO se hace en una privada.',
        technique: 'violacion-confidencialidad',
      },
      {
        id: '7D',
        text: 'Florencia, ¿estás de acuerdo en que tenés razón en lo principal? Yo creo que sí.',
        deltas: { climate: 28, donRicardo: 0, florencia: 8 },
        feedback:
          'En privada también seguís siendo imparcial. "Yo creo que sí" es asesoramiento, y el Art. 26.589 te prohíbe asesorar. Florencia va a salir de la privada con expectativas infladas y eso te complica el replanteo.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },
  {
    id: 8,
    stage: 'privada-florencia',
    playerRole: 'mediador',
    meetingType: 'private-florencia',
    speaker: 'florencia',
    speakerLine:
      'Doctor/a, ya que estamos en privado le cuento. Yo el daño punitivo lo pedí porque mi abogada me lo sugirió, pero lo que necesito de verdad es la plata a la tarjeta esta semana. Ya compré otro colchón porque me estoy mudando, tengo el cupo bloqueado. Si no acordamos hoy, voy a juicio. El fuero del Consumidor es gratis para mí.',
    title: 'Abogado del diablo sobre el MAAN',
    options: [
      {
        id: '8A',
        text: 'Florencia, gracias por la sinceridad. Te hago de abogado/a del diablo un segundo: el fuero te es legalmente favorable, eso es cierto, y por el Art. 53 LDC no pagás tasa. Pero el proceso en CABA tarda entre 2 y 4 años hasta sentencia firme. ¿Vos creés que tu situación —liquidez para la mudanza esta semana— resiste esperar eso? ¿Qué pasaría si esto no sale como esperás?',
        deltas: { climate: -10, donRicardo: 0, florencia: -10 },
        feedback:
          'Abogado del diablo Harvard. No le dijiste que el juicio era malo (mantenés imparcialidad) — le mostraste que su MAAN tiene una debilidad temporal que no se condice con su interés real. La ayudaste a tomar una decisión informada sin presionarla. Ella misma va a flexibilizar.',
        isBest: true,
        technique: 'abogado-diablo',
      },
      {
        id: '8B',
        text: 'Florencia, hacé lo que sentís. Si te plantás, te plantás; si firmás, firmás. Yo te acompaño.',
        deltas: { climate: 18, donRicardo: 0, florencia: 18 },
        feedback:
          'Abdicaste de tu rol. El mediador no asesora, pero sí ayuda a la parte a evaluar realidades. "Hacé lo que sientas" deja a Florencia sin los datos para decidir bien y le pasás la responsabilidad de algo que vos tenías que iluminar.',
        technique: 'esquive',
      },
      {
        id: '8C',
        text: 'Florencia, te recomiendo no soltar el daño punitivo. Es la única carta que tenés para que Suavecito se mueva. Vas a juicio y ganás todo.',
        deltas: { climate: 35, donRicardo: 0, florencia: 20 },
        feedback:
          'Asesoramiento estratégico explícito — exactamente lo que un mediador NO puede hacer (Art. 26.589: el mediador no asesora). Le diste consejo legal Y pronosticaste el resultado del juicio. Saliste del rol completamente.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '8D',
        text: 'Florencia, mirá: si vas a juicio vas a perder. Es carísimo y la prueba es difícil. Mejor acordá lo que ofrezcan.',
        deltas: { climate: 40, donRicardo: 0, florencia: 30 },
        feedback:
          'Mentiste dos veces y violaste la imparcialidad. El fuero del Consumidor es gratuito por Art. 53 LDC, y Florencia tiene el caso ganado en el fondo. Le estás generando miedo para que acepte cualquier cosa. Es lo opuesto al rol.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // ETAPA 4 — REUNIÓN PRIVADA CON SUAVECITO
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 9,
    stage: 'privada-suavecito',
    playerRole: 'mediador',
    meetingType: 'private-suavecito',
    speaker: 'donRicardo',
    privateContext:
      'Cerraste la privada con Florencia, ella quedó en sala de espera. Ahora estás con Don Ricardo y el Dr. Pérez. Le recordaste la confidencialidad y abrís la conversación.',
    speakerLine:
      'Doctor/a, le voy a ser franco acá en privado. No es por el colchón. Si yo le devuelvo la plata a esta, mañana tengo cincuenta más con el mismo argumento. Es un tema de flujo de caja. La Gift Card no es por joderla — es para que la plata no se vaya de la empresa.',
    title: 'Pregunta circular a Don Ricardo',
    options: [
      {
        id: '9A',
        text: 'Don Ricardo, le agradezco la franqueza. Le pregunto algo: si este caso llega a sentencia con daño punitivo y se hace público, ¿cómo cree que lo vería el resto de sus clientes y los reviews de Suavecito? Y mirando hacia adelante, ¿cómo se imagina la empresa en seis meses con o sin esa cláusula 7.3?',
        deltas: { climate: -12, donRicardo: -12, florencia: 0 },
        feedback:
          'Pregunta circular doble Harvard: desplazamiento subjetivo (cómo lo verían los clientes) + desplazamiento temporal (cómo se imagina en 6 meses). Lo movés a evaluar el verdadero costo de no acordar sin tomar partido. Es la jugada más fina del repertorio en privada. Don Ricardo empieza a separar su posición de su interés real.',
        isBest: true,
        technique: 'pregunta-circular',
      },
      {
        id: '9B',
        text: 'Don Ricardo, ¿usted cumple con el Art. 34 LDC sí o no?',
        deltas: { climate: 20, donRicardo: 22, florencia: 0 },
        feedback:
          'Pregunta cerrada acusatoria. Don Ricardo nunca te va a contestar "no, no cumplo". Cerraste la puerta cuando se estaba abriendo: él te acaba de confesar su interés real (flujo de caja) y vos lo cortaste con un sí/no jurídico.',
        technique: 'acusacion',
      },
      {
        id: '9C',
        text: 'Don Ricardo, contame: ¿cuánto está dispuesto a pagar?',
        deltas: { climate: 8, donRicardo: 5, florencia: 0 },
        feedback:
          'Saltaste a la cifra cuando Don Ricardo te estaba dando intereses reales. Lo arrastraste de vuelta al regateo posicional y perdiste el momentum del caucus. La privada es para explorar intereses, no para negociar números.',
        technique: 'regateo-posicional',
      },
      {
        id: '9D',
        text: 'Don Ricardo, ya que me lo dice en privado: usted está reconociendo que aplica la misma cláusula a todos sus clientes. Eso es lo que el Art. 55 LDC sanciona como acción colectiva.',
        deltas: { climate: 55, donRicardo: 40, florencia: 0 },
        feedback:
          'Catástrofe. Convertiste una confesión en privada en una amenaza jurídica. Rompiste la confidencialidad implícita del caucus y le pasaste a Don Ricardo el mensaje de que todo lo que diga se va a usar en su contra. No vuelve a hablar.',
        technique: 'violacion-confidencialidad',
      },
    ],
  },
  {
    id: 10,
    stage: 'privada-suavecito',
    playerRole: 'mediador',
    meetingType: 'private-suavecito',
    speaker: 'drPerez',
    speakerLine:
      'Doctor/a, vamos a sincerar la cuestión jurídica. Yo entiendo lo del Art. 34, pero esto es interpretable. ¿Usted realmente cree que un juez del fuero del Consumidor le va a otorgar daño punitivo en un caso por un colchón? En mi experiencia vi sentencias para todos lados.',
    title: 'Agente de la realidad con Dr. Pérez',
    options: [
      {
        id: '10A',
        text: 'Doctor Pérez, le devuelvo la pregunta: en su experiencia, ¿cuál suele ser el criterio del fuero del Consumidor cuando una empresa, conociendo el Art. 34 LDC, aplica una cláusula declarada nula por el Art. 37 LDC como política aplicada a todos los clientes? ¿Usted vio sentencias que moderan el daño punitivo en esos casos, o que lo agravan?',
        deltas: { climate: -10, donRicardo: -8, florencia: 0 },
        feedback:
          'Agente de la realidad en su forma más pura. No le dijiste a Dr. Pérez que se equivocaba — le pediste a él, que es el técnico, que extraiga la conclusión. Ubicaste los tres factores agravantes (conocer la ley + cláusula nula + política sistémica) sin que parezca que vos lo decís. Él no puede contestar sin reconocer que el escenario judicial es desfavorable. Imparcialidad intacta.',
        isBest: true,
        technique: 'agente-realidad',
      },
      {
        id: '10B',
        text: 'Doctor, no me importa lo que usted vio. La ley es clara y el daño punitivo se va a otorgar. Eso es así.',
        deltas: { climate: 28, donRicardo: 18, florencia: 0 },
        feedback:
          'Saliste del rol. Adelantaste opinión sobre el fallo, perdiste imparcialidad y le diste a Dr. Pérez una excusa perfecta para acusarte ante la otra parte: "el mediador está parcializado". La técnica del agente de la realidad funciona porque NO opinás — preguntás.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '10C',
        text: 'Doctor, tiene razón, es interpretable. Quizás Florencia podría aceptar bajar la pretensión del daño punitivo.',
        deltas: { climate: 22, donRicardo: -5, florencia: 25 },
        feedback:
          'Mordiste el anzuelo del letrado y encima transmitiste implícitamente algo que escuchaste de la otra parte. Cediste un argumento que ni siquiera estaba en juego y posicionaste a Florencia en desventaja sin su autorización.',
        technique: 'negociador-suave',
      },
      {
        id: '10D',
        text: 'Doctor, le pido que sea breve. Yo no soy juez y no opino. Avancemos.',
        deltas: { climate: 18, donRicardo: 5, florencia: 0 },
        feedback:
          'Esquivaste el momento perfecto para usar agente de la realidad. Tenés razón en no opinar — pero el mediador justamente puede hacer que el propio letrado extraiga las conclusiones. Perdiste la oportunidad de mover la rigidez técnica del Dr. Pérez.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // ETAPA 5 — REPLANTEO DEL PROBLEMA
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 11,
    stage: 'replanteo',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Replanteo: de posiciones a intereses',
    situation:
      'Volvieron a la reunión conjunta después de las dos privadas. Ahora tenés que replantear el problema: tomar las posiciones declaradas de cada parte y reformularlas en términos de intereses, sin revelar lo que cada uno te dijo en privada. Es el momento bisagra de la mediación.',
    options: [
      {
        id: '11A',
        text: 'Quiero replantear lo que vinimos hablando, para ver si lo tomamos así. Por el lado de Florencia: lo que necesita es recuperar lo que pagó de manera efectiva y sentir que su reclamo fue tratado como lo que es: el ejercicio de un derecho, no un favor. Por el lado de Suavecito: la empresa no se opone a cumplir con sus obligaciones, lo que busca es una forma que no comprometa su operación financiera y no abra la puerta a otros reclamos. Esos dos intereses no son opuestos. ¿Les parece que trabajemos sobre cómo combinarlos?',
        deltas: { climate: -12, donRicardo: -10, florencia: -10 },
        feedback:
          'Replanteo Harvard impecable. Tomaste las posiciones declaradas y las reformulaste como intereses compatibles. NO transmitiste lo que cada uno te dijo en privada (mantenés confidencialidad) pero usaste esa info para reformular. Mostraste que los intereses no son contradictorios. Es el momento bisagra: la negociación pasa de posicional a colaborativa.',
        isBest: true,
        technique: 'replanteo',
      },
      {
        id: '11B',
        text: 'Bueno, Florencia me dijo en privada que necesita la plata urgente porque está en una mudanza. Y Don Ricardo me dijo que el problema es el flujo de caja. Así que pongamos las cosas sobre la mesa.',
        deltas: { climate: 75, donRicardo: 50, florencia: 50 },
        feedback:
          'Violación gravísima de la confidencialidad de ambas privadas (Art. 7 inc. e + Art. 8). Transmitiste literalmente lo que te dijo cada parte sin autorización. Las dos quedaron expuestas frente a la contraparte. La mediación se cayó en este mismo momento — y vos tenés responsabilidad profesional.',
        technique: 'violacion-confidencialidad',
      },
      {
        id: '11C',
        text: 'A ver, lo que veo es lo siguiente: Florencia pide $1.350.000 y Don Ricardo ofrece una Gift Card de $980.000. Estamos a $370.000 de distancia. Partamos al medio.',
        deltas: { climate: 22, donRicardo: 5, florencia: 18 },
        feedback:
          'Eso no es replanteo — es regateo posicional puro disfrazado. Volviste a la superficie del iceberg (las cifras) sin tocar los intereses que descubriste en las privadas. Las dos partes quedan donde estaban y el método Harvard se cae.',
        technique: 'regateo-posicional',
      },
      {
        id: '11D',
        text: 'Antes de avanzar, quiero decir que el Art. 34 LDC es claro: Florencia tiene derecho. Suavecito tiene que devolver. El resto es secundario.',
        deltas: { climate: 50, donRicardo: 35, florencia: -5 },
        feedback:
          'Adelantaste opinión jurídica como mediador. Tomaste partido por una de las partes en plena conjunta. Don Ricardo siente que ya hay sentencia. No hay forma de cerrar acuerdo después de esto.',
        technique: 'perdida-imparcialidad',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // ETAPA 6 — BRAINSTORMING
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 12,
    stage: 'brainstorming',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'mediator',
    title: 'Brainstorming: generar muchas opciones',
    situation:
      'Las dos partes aceptaron el replanteo. Ahora tenés que facilitar la etapa de brainstorming: que se generen muchas opciones, sin compromiso, antes de decidir. ¿Cómo lo introducís?',
    options: [
      {
        id: '12A',
        text: 'Bien. Ahora les propongo algo. Vamos a tirar todas las ideas posibles para resolver esto, sin que ninguno se comprometa con nada todavía. Primero generamos, después decidimos. Las ideas malas también valen porque a veces destrabar una mala da pie a una buena. ¿Quién arranca?',
        deltas: { climate: -10, donRicardo: -8, florencia: -8 },
        feedback:
          'Brainstorming Harvard puro. Explicaste la regla de oro (separar generar de decidir), abriste el espacio creativo y descomprimiste la presión de "tener que proponer algo bueno". Las dos partes se animan a tirar ideas. Es exactamente lo que el método dice.',
        isBest: true,
        technique: 'brainstorming',
      },
      {
        id: '12B',
        text: 'Florencia, ¿qué propuesta concreta vas a aceptar? Don Ricardo, ¿qué propuesta concreta va a hacer? Necesito un número.',
        deltas: { climate: 15, donRicardo: 10, florencia: 12 },
        feedback:
          'Saltaste el brainstorming y fuiste directo a la propuesta cerrada. Sin la fase de generación de opciones, cada parte tira el número más extremo posible y la negociación se traba. El brainstorming sirve justamente para que aparezcan combinaciones que nadie ve sin desbloquear la creatividad.',
        technique: 'regateo-posicional',
      },
      {
        id: '12C',
        text: 'Bueno, las opciones que yo veo son tres: pago total a tarjeta, Gift Card por mayor monto, o pago en cuotas. Elijan.',
        deltas: { climate: 25, donRicardo: 12, florencia: 15 },
        feedback:
          'Diste vos las opciones. El mediador no propone soluciones (eso lo distingue de la amigable composición, según el apunte). En el brainstorming las opciones las generan LAS PARTES — vos solo facilitás el proceso. Saliste del rol.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '12D',
        text: 'Avancemos rápido porque ya llevamos muchas horas. Tiren propuestas concretas, que sean realistas.',
        deltas: { climate: 14, donRicardo: 5, florencia: 12 },
        feedback:
          'Le metiste presión temporal a una fase que justamente necesita aire para que aparezcan opciones creativas. "Que sean realistas" inhibe la generación — Harvard dice "cantidad antes que calidad" en esta etapa.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // FASE 13 — ABOGADA DE FLORENCIA: PROPONE LA OPCIÓN DE MUTUO BENEFICIO
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 13,
    stage: 'brainstorming',
    playerRole: 'abogada',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      'Bueno, doctor/a, vimos algunas ideas sueltas. Pero acá quien tiene que destrabar es la parte que más pide. ¿Florencia, vos qué propuesta concreta tirás sobre la mesa? Algo realista, eh, no me venga con los $1.350.000 enteros.',
    title: 'Tirás la propuesta Harvard',
    options: [
      {
        id: '13A',
        text: 'Don Ricardo, tiro algo concreto y vemos si encaja. Florencia ofrece desistir formalmente del daño punitivo, con cláusula expresa en el acuerdo homologado, si se cumplen tres condiciones: reintegro íntegro de $980.000 a la tarjeta dentro de los 10 días hábiles, retiro del colchón a domicilio por logística de Suavecito sin costo para ella, y compromiso por escrito de revisión de la cláusula 7.3. ¿Lo trabajamos?',
        deltas: { climate: -12, donRicardo: -10, florencia: -10 },
        feedback:
          'Intercambio diferencial Harvard impecable: usás el desistimiento del daño punitivo —que Florencia valora poco y Suavecito mucho— como moneda para conseguir las tres cosas que tu clienta SÍ valora. Sumás un criterio (revisión de cláusula) que protege a futuros consumidores. Acuerdo gana-gana.',
        isBest: true,
        technique: 'harvard',
      },
      {
        id: '13B',
        text: 'Florencia no baja de los $1.350.000 íntegros. O paga eso o vamos a juicio.',
        deltas: { climate: 25, donRicardo: 25, florencia: 5 },
        feedback:
          'Negociador duro en el momento equivocado. Te aferraste a la cifra cuando Don Ricardo estaba pidiendo una propuesta concreta para destrabar. Encima Florencia te dijo en la privada que el punitivo no le importaba. Estás peleando contra el interés real de tu clienta.',
        technique: 'negociador-duro',
      },
      {
        id: '13C',
        text: 'Don Ricardo, si paga los $980.000 ahora, Florencia firma desistimiento total. Sin más condiciones.',
        deltas: { climate: 12, donRicardo: -8, florencia: 18 },
        feedback:
          'Conseguiste el reintegro pero soltaste la logística inversa Y cualquier compromiso sobre la cláusula a futuro. Florencia paga el envío y Suavecito sigue aplicando la misma cláusula abusiva a los próximos 50 clientes. Negociador suave en el cierre.',
        technique: 'negociador-suave',
      },
      {
        id: '13D',
        text: 'Don Ricardo, propone usted y mi clienta evalúa.',
        deltas: { climate: 10, donRicardo: 5, florencia: 12 },
        feedback:
          'Cediste el primer ancla. En la fase de propuestas concretas, el primer número que entra a la mesa fija el marco mental del resto. Si Don Ricardo arranca, lo va a tirar bajo y de ahí no te movés.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // ETAPA 7 — CRITERIOS OBJETIVOS
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 14,
    stage: 'criterios-objetivos',
    playerRole: 'mediador',
    meetingType: 'joint',
    speaker: 'drPerez',
    speakerLine:
      'Doctor/a mediador/a, antes de avanzar con esta propuesta, quiero dejar sentado que la cláusula 7.3 de nuestros T&C sigue vigente, y que cualquier acuerdo no implica reconocimiento de su nulidad. La reversión bancaria del cargo, por otro lado, demora hasta 60 días hábiles según la procesadora.',
    title: 'Criterios objetivos: anclar el acuerdo en datos externos',
    options: [
      {
        id: '14A',
        text: 'Doctor Pérez, gracias. Para que el acuerdo sea sólido necesitamos asentarlo en criterios objetivos. Sobre la cláusula 7.3: ¿hay precedentes jurisprudenciales del fuero del Consumidor sobre cláusulas similares a las que ambas partes podrían referirse? Sobre los plazos de reversión: ¿podemos verificar con un consulta puntual al banco emisor cuál es el plazo real cuando el comerciante instruye la reversión voluntaria? Y sobre el monto: ¿cuál sería el valor de mercado actual de un colchón de características similares?',
        deltas: { climate: -10, donRicardo: -8, florencia: -8 },
        feedback:
          'Criterios objetivos Harvard puro. Pediste tres criterios externos a la voluntad de las partes: jurisprudencia comparable, plazos bancarios reales, valor de mercado. El acuerdo no depende ya de quién es más terco — se ancla en datos. Dr. Pérez no puede oponerse sin proponer un criterio externo distinto.',
        isBest: true,
        technique: 'criterios-objetivos',
      },
      {
        id: '14B',
        text: 'Doctor, su cláusula es abusiva y sus 60 días son un mito. La devolución se hace en 10. Punto.',
        deltas: { climate: 28, donRicardo: 18, florencia: 0 },
        feedback:
          'Tenés razón en ambas cosas pero las afirmaste sin fundamento concreto y con tono de pelea. Perdiste imparcialidad. La idea del criterio objetivo es que el dato venga de afuera, no de tu boca.',
        technique: 'perdida-imparcialidad',
      },
      {
        id: '14C',
        text: 'Bueno, si Dr. Pérez dice 60 días, dejemos 60 días. Y la cláusula 7.3 puede quedar vigente. Avancemos.',
        deltas: { climate: 18, donRicardo: -8, florencia: 30 },
        feedback:
          'Aceptaste sin verificar dos cosas que probablemente no son ciertas. Florencia necesita el dinero ya — 60 días la deja sin liquidez. Y dejar la cláusula intacta significa que Suavecito sigue aplicándola a los próximos clientes. El criterio objetivo se pide, no se concede.',
        technique: 'negociador-suave',
      },
      {
        id: '14D',
        text: 'Doctor, dejemos los T&C y los plazos al final. Cerremos por el monto principal.',
        deltas: { climate: 16, donRicardo: 5, florencia: 10 },
        feedback:
          'Esquivaste el criterio objetivo. El acuerdo sin fundamentar los datos técnicos es un acuerdo blando: Suavecito lo firma hoy y mañana lo discute. Los criterios objetivos son lo que blinda el acuerdo a futuro.',
        technique: 'esquive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // ETAPA 8 — ACUERDO
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 15,
    stage: 'acuerdo',
    playerRole: 'abogada',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      'Doctor/a, estamos cerca. Pero antes de firmar nada necesito saber: ¿qué hace su clienta si nos paramos acá? Porque yo tengo equipo legal, no le tengo miedo al juicio. Quiero ver con qué cartas viene.',
    title: 'Cierre con MAAN comunicada con firmeza',
    options: [
      {
        id: '15A',
        text: 'Don Ricardo, prefiero cerrar hoy y le explico por qué para los dos. Si no acordamos, Florencia tiene la vía del fuero del Consumidor (Ley 6.286/2020 CABA), gratuita por Art. 53 LDC, con daño punitivo en agenda. Es un MAAN sólido para ella. Pero también entiendo el de ustedes: ir a juicio implica exponer la cláusula 7.3 a una nulidad firme con efecto sobre otros clientes, además del tiempo y el desgaste. Por eso le insisto: cerremos hoy, no porque alguno tenga miedo, sino porque a los dos nos conviene más.',
        deltas: { climate: -10, donRicardo: -10, florencia: -10 },
        feedback:
          'MAAN comunicada con firmeza Harvard. Presentaste tu propio MAAN con fundamento legal concreto (no como amenaza), mostraste que entendiste el MAAN de la otra parte mejor que ellos mismos, y cerraste con propuesta de futuro común. Es exactamente el cierre que Fisher y Ury describen en Sí... ¡de acuerdo!',
        isBest: true,
        technique: 'harvard',
      },
      {
        id: '15B',
        text: 'Si no acuerdan hoy, vamos a juicio y pedimos capital, daño punitivo, daño moral y costas. Les sale tres veces más caro.',
        deltas: { climate: 30, donRicardo: 28, florencia: 5 },
        feedback:
          'MAAN como amenaza pura. Tiraste todo el trabajo de las 14 fases anteriores justo en el cierre. Don Ricardo no firma bajo amenaza: se levanta. El método Harvard distingue entre "ofrecer consecuencias positivas de acordar" y "amenazar con consecuencias negativas de no hacerlo" — vos elegiste lo segundo.',
        technique: 'negociador-duro',
      },
      {
        id: '15C',
        text: 'Y bueno, veremos qué hacemos. Florencia decide.',
        deltas: { climate: 22, donRicardo: 5, florencia: 20 },
        feedback:
          'Le mostraste a Don Ricardo que no tenés MAAN clara y que tu clienta tampoco. Le diste a entender que cualquier oferta es mejor que ninguna, justo en el cierre. Suavecito va a empeorar la propuesta.',
        technique: 'negociador-suave',
      },
      {
        id: '15D',
        text: 'Si no acuerdan, Florencia hace prensa con el caso. Tiene seguidores en redes.',
        deltas: { climate: 35, donRicardo: 32, florencia: 8 },
        feedback:
          'No es MAAN — es chantaje reputacional. Activás el miedo de Suavecito a la prensa pero por la peor vía. La mediación se cae y Suavecito termina iniciando una acción por daño a la imagen comercial contra Florencia.',
        technique: 'negociador-duro',
      },
    ],
  },
];

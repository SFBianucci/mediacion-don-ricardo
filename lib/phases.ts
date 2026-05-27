import { Phase } from './types';

export const PHASES: Phase[] = [
  {
    id: 1,
    title: 'Apertura y manejo de hostilidad',
    harvardPrinciple: 'Separar a la persona del problema',
    meetingType: 'joint',
    speaker: 'donRicardo',
    initialAngerOnEnter: 30,
    speakerLine:
      'Doctor/a, antes de empezar le aclaro algo. A su clienta le entregamos un colchón nuevo, sin uso previo, y a los dos días ya nos estaba escribiendo por WhatsApp pidiendo plata como si esto fuera un cajero. Tengo doce años con Suavecito, vendí miles de colchones. Vamos a charlar, pero le pido que dejemos las cosas en su lugar.',
    options: [
      {
        id: '1A',
        text: 'Don Ricardo, lo escucho. Entiendo que del lado de la empresa esto se vivió como un reclamo demasiado rápido. Lo que le propongo es ordenar los temas con el mediador y verlos de a uno: primero si el derecho se ejerció en plazo, después el resto. ¿Le parece?',
        angerDelta: -10,
        feedback:
          'Separás a la persona del problema. Reconocés su molestia sin darle la razón en el fondo, y reencauzás hacia la agenda de trabajo. Es exactamente lo que el mediador esperaba para arrancar.',
        isBest: true,
      },
      {
        id: '1B',
        text: 'Don Ricardo, su empresa viola el Art. 34 LDC y el Art. 1110 CCyCN. Esto es de orden público. Que se ahorre el discurso de los doce años: la ley no se negocia.',
        angerDelta: 18,
        feedback:
          'Tenés razón en derecho, pero le tirás los artículos en la primera frase como un mazazo. Confundís a la persona con el problema y arrancás la mediación en trinchera.',
      },
      {
        id: '1C',
        text: 'Don Ricardo, mi clienta entiende que ustedes son una empresa familiar y está dispuesta a flexibilizar el monto si llegamos a algo rápido.',
        angerDelta: 8,
        feedback:
          'Negociador suave clásico. Ofreciste rebaja antes de que nadie te la pidiera, en la apertura. Le mostraste a Don Ricardo que vas a ceder bajo presión.',
      },
      {
        id: '1D',
        text: 'Don Ricardo, esto es una mediación bajo Ley 26.589, rige confidencialidad. Lo que pasó por WhatsApp lo discutimos cuando corresponda.',
        angerDelta: 5,
        feedback:
          'Procesalmente correcto, humanamente helado. Te escondés detrás de la norma para esquivar el conflicto emocional inicial — y Don Ricardo lo lee como desinterés.',
      },
    ],
  },
  {
    id: 2,
    title: 'Escucha activa frente al relato de la empresa',
    harvardPrinciple: 'Escucha activa y parafraseo: separar lo emocional de los hechos',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      'Mire, le voy a contar cómo lo vivimos nosotros. Su clienta compró un colchón de espuma, eso estaba publicado, lo tuvo dos días, lo abrió, lo durmió y ahora dice que no era lo que esperaba. Le ofrecimos una Gift Card por el monto íntegro, válida tres meses. Es lo que hacemos con todos. No es ningún maltrato — es la política de la casa.',
    options: [
      {
        id: '2A',
        text: 'A ver si entendí, Don Ricardo: usted dice que el producto estaba bien publicado, que mi clienta lo usó dos días antes de reclamar, y que la Gift Card de tres meses es la misma respuesta que le dan a todos los clientes. ¿Es correcto?',
        angerDelta: -8,
        feedback:
          'Parafraseo Harvard puro: reformulás los hechos centrales sin la carga negativa, no concedés nada de fondo, y le mostrás que escuchaste. Al confirmar que es "la política aplicada a todos", le sacás material para usar después (riesgo de acción colectiva del Art. 55 LDC).',
        isBest: true,
      },
      {
        id: '2B',
        text: 'Don Ricardo, eso que usted llama "política" se llama cláusula abusiva en el Art. 37 LDC y se tiene por no escrita. Su Gift Card es nula de pleno derecho.',
        angerDelta: 14,
        feedback:
          'Refutás antes de escuchar. El argumento jurídico es correcto pero lo soltás cuando todavía estamos en la etapa de relato. Bloqueás la información que Don Ricardo iba a darte.',
      },
      {
        id: '2C',
        text: 'Bueno, en lo del uso es cierto: dos días son dos días. Tal vez podríamos negociar sobre esa base.',
        angerDelta: 7,
        feedback:
          'Concedés un punto sin que te lo pidan y sin contrapartida. Le regalás el argumento de la "aceptación tácita" que el Art. 34 LDC justamente neutraliza (el plazo es de 10 días, no de 2).',
      },
      {
        id: '2D',
        text: 'Don Ricardo, los considerandos los vemos al final. Vamos directo a la propuesta económica.',
        angerDelta: 9,
        feedback:
          'Cortás la exposición y vas al número. Don Ricardo siente que no te interesa entender su lado y se cierra exactamente cuando más necesitabas que se abriera.',
      },
    ],
  },
  {
    id: 3,
    title: 'La defensa con Términos y Condiciones',
    harvardPrinciple: 'Reformular el contrato de adhesión sin pelearte con el letrado',
    meetingType: 'joint',
    speaker: 'drPerez',
    speakerLine:
      'Permítame, doctor/a. Soy el Dr. Pérez, letrado patrocinante de Suavecito. Sus Términos y Condiciones fueron aceptados expresamente por la Sra. Gómez al hacer la compra: cláusula 7.3, no hay reembolsos a tarjeta para compras en promoción. Es un contrato de adhesión válido, ejecutado por ambas partes. Acá no hay nada que reformar.',
    options: [
      {
        id: '3A',
        text: 'Doctor Pérez, le entiendo el planteo. Un contrato de adhesión es válido como contrato. La discusión no es si hubo aceptación, sino si esa cláusula puntual no encaja en el supuesto del Art. 37 LDC y del Art. 1119 CCyCN — desnaturalización de la obligación del proveedor y restricción de un derecho irrenunciable. ¿Le parece que lo veamos cláusula por cláusula con el mediador?',
        angerDelta: -7,
        feedback:
          'Le hablás al letrado en su mismo registro técnico: no negás el contrato, ubicás el debate donde corresponde (control de abusividad). Lo invitás a un análisis ordenado en vez de a una pelea. Es exactamente lo que un agente de la realidad espera.',
        isBest: true,
      },
      {
        id: '3B',
        text: 'Doctor, con todo respeto, sus T&C son papel mojado. El Art. 34 LDC es de orden público (Art. 65 LDC) y se les pasa por arriba a sus cláusulas. No hay más que discutir.',
        angerDelta: 12,
        feedback:
          '"Papel mojado" es exactamente el tipo de frase que radicaliza al letrado de enfrente. El argumento jurídico es válido pero lo presentás como un golpe, no como una invitación al análisis. Dr. Pérez se va a poner peor.',
      },
      {
        id: '3C',
        text: 'Doctor Pérez, si sus T&C dicen eso, mi clienta puede revisar la posición — capaz que lo de la Gift Card no es tan desproporcionado.',
        angerDelta: 10,
        feedback:
          'Capitulación frente a un argumento que ni siquiera resiste un control de cláusulas abusivas. Acabás de bajar la pretensión sin haber peleado el punto central de la mediación.',
      },
      {
        id: '3D',
        text: 'Doctor, mi clienta no recuerda haber leído eso. Si no leyó, no aceptó.',
        angerDelta: 8,
        feedback:
          'Argumento débil. Las cláusulas de adhesión se aceptan por el solo hecho de la operación, leídas o no. El problema no es la falta de lectura — es la nulidad por abusividad. Te estás peleando en el terreno equivocado.',
      },
    ],
  },
  {
    id: 4,
    title: 'La pregunta del mediador: qué solución sería justa',
    harvardPrinciple: 'Pregunta abierta — comunicar interés sin anclarse en la cifra',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      'El mediador acaba de preguntarle a usted qué solución le parecería justa para su clienta. Yo escucho. Pero le pido una cosa: no me venga con los $1.350.000 enteros porque ahí nos paramos y nos vamos.',
    options: [
      {
        id: '4A',
        text: 'Lo que Florencia necesita son tres cosas concretas: que el reintegro del precio del colchón vuelva a la tarjeta —no un voucher—, que la logística inversa no le caiga a ella, y un reconocimiento de que el reclamo fue legítimo. La cifra de $1.350.000 traduce eso; no es un techo cerrado.',
        angerDelta: -10,
        feedback:
          'Comunicás intereses, no posiciones. Distinguís la cifra (posición) de lo que hay detrás (recuperar liquidez, no asumir costos que no le corresponden, reconocimiento). Le abrís a Don Ricardo la puerta para que él también separe su posición de su interés real.',
        isBest: true,
      },
      {
        id: '4B',
        text: 'Mi clienta pide exactamente $1.350.000: $980.000 de capital y $370.000 de daño punitivo según Art. 52 bis LDC. Es lo que corresponde.',
        angerDelta: 13,
        feedback:
          'Reafirmaste la posición numérica entera, justo después de que Don Ricardo te avisó que se levanta. Lo encerrás al regateo posicional puro y perdés la oportunidad de comunicar el interés real detrás de la cifra.',
      },
      {
        id: '4C',
        text: 'Mi clienta lo que quiere es justicia. La cifra es accesoria, en realidad.',
        angerDelta: 7,
        feedback:
          '"Justicia" como abstracción no le sirve a nadie en una mesa de negociación. Soltaste la cifra sin pedir nada y dejaste el mensaje vacío. Don Ricardo va a tirar un primer número bajo.',
      },
      {
        id: '4D',
        text: 'Don Ricardo, mejor proponga usted primero y mi clienta evalúa.',
        angerDelta: 8,
        feedback:
          'Cediste el primer movimiento sin haber comunicado nada. En mediación esto se llama "perder el ancla": el primer número que entra a la mesa fija el marco mental del resto de la negociación, y vos lo regalaste.',
      },
    ],
  },
  {
    id: 5,
    title: 'Caucus con Florencia: el verdadero interés',
    harvardPrinciple: 'Distinguir intereses de posiciones en reunión privada con la propia clienta',
    meetingType: 'private-florencia',
    speaker: 'florencia',
    privateContext:
      'El mediador convocó a una reunión privada con vos y Florencia, sin la otra parte. Es el momento de explorar qué necesita realmente tu clienta.',
    speakerLine:
      'Doctor/a, le voy a ser sincera. Yo el daño punitivo lo pedí porque me lo sugirieron, pero lo que necesito de verdad es el dinero a la tarjeta esta semana. Ya compré otro colchón, estoy en plena mudanza, tengo el cupo bloqueado. Si me ofrecen el reintegro completo y se llevan ellos el colchón, yo firmo y me olvido. Pero no quiero el voucher ni quiero pagar el envío.',
    options: [
      {
        id: '5A',
        text: 'Florencia, gracias por la sinceridad. Lo que me decís me sirve mucho: tu interés real es liquidez inmediata y que el costo de la devolución no te caiga a vos. El daño punitivo entonces lo manejamos como carta de negociación, no como objetivo en sí. ¿Estás dispuesta a desistir de esa acción si recuperás el capital íntegro a la tarjeta y la logística inversa la asume Suavecito?',
        angerDelta: -10,
        feedback:
          'Pregunta cerrada bien usada en privada: confirmás el interés real y conseguís el mandato preciso de tu clienta. Ahora podés volver a la mesa conjunta con margen claro: cuánto podés ceder y a cambio de qué. Es exactamente lo que el método Harvard pide.',
        isBest: true,
      },
      {
        id: '5B',
        text: 'Florencia, te recomiendo no soltar el daño punitivo. Es nuestra única carta de presión real, y por más que vos lo veas accesorio, sin eso Suavecito no se mueve.',
        angerDelta: 12,
        feedback:
          'Le imponés a tu clienta una estrategia que la aleja de su interés real. La estás llevando a una negociación más larga por una cifra que ella misma te dijo que no le importa. Florencia se va a sentir poco escuchada por su propio abogado/a.',
      },
      {
        id: '5C',
        text: 'Bueno, si lo único que querés es la plata, le decimos que aceptamos la Gift Card y resolvemos rápido.',
        angerDelta: 14,
        feedback:
          'Le tradujiste mal el interés. Florencia te dijo "dinero a la tarjeta", no "Gift Card". Le ofrecés justo lo que ella rechazó desde el día uno. Está perdiendo confianza en vos en tiempo real.',
      },
      {
        id: '5D',
        text: 'Florencia, tranquila, vos confiá en mí. Yo manejo la cifra y el daño punitivo. Vos no te preocupes por los detalles.',
        angerDelta: 10,
        feedback:
          'Paternalismo. La mediación es de la parte, no del abogado. La estás dejando afuera de su propia decisión y eso, en un caucus, es exactamente lo opuesto a empowerment. Florencia se cierra.',
      },
    ],
  },
  {
    id: 6,
    title: 'Abogado del diablo sobre el MAAN',
    harvardPrinciple: 'Evaluar honestamente la MAAN de tu clienta antes de volver a la mesa',
    meetingType: 'private-florencia',
    speaker: 'florencia',
    privateContext:
      'Seguís en reunión privada con Florencia. Antes de volver a la conjunta, hay que dimensionar qué pasa si no acuerdan.',
    speakerLine:
      'Doctor/a, ¿y si no aceptan? El mediador me dijo que el fuero del Consumidor es gratis para mí por el Art. 53 LDC. Tengo todas las de ganar. ¿No conviene plantarme y ir a juicio?',
    options: [
      {
        id: '6A',
        text: 'Florencia, el fuero te es favorable en el fondo: el Art. 34 LDC y el Art. 1110 CCyCN están claros, y tu MAAN judicial es legalmente sólido. Pero el problema es el tiempo: en CABA estamos hablando de entre 2 y 4 años hasta sentencia firme, y los $980.000 se licúan por inflación. Tu interés era liquidez ahora. Si acordamos algo que cumpla ese interés, conviene más que el juicio.',
        angerDelta: -8,
        feedback:
          'Aplicás abogado del diablo Harvard: no le decís que el juicio es malo, le mostrás que su MAAN tiene una debilidad temporal que no se condice con su interés real. La ayudás a tomar una decisión informada, no a seguir tu corazonada.',
        isBest: true,
      },
      {
        id: '6B',
        text: 'Florencia, tenés razón: vamos a juicio. El daño punitivo en estos casos puede ser el triple del capital. Vas a salir mucho mejor parada.',
        angerDelta: 11,
        feedback:
          'Le vendés un MAAN que no sabés si se va a cumplir: el daño punitivo no es automático, depende del juez. Y le ignorás el dato central que te dio: necesita el dinero esta semana, no en 3 años. La estás llevando a su peor escenario.',
      },
      {
        id: '6C',
        text: 'Florencia, vos hacé lo que sientas. Si te plantás, te plantás; si firmás, firmás. Yo te acompaño.',
        angerDelta: 9,
        feedback:
          'Abdicaste de tu rol como letrado/a. Tu trabajo no es ser neutral, es darle a tu clienta el análisis técnico para que decida con información. "Vos hacé lo que sientas" es delegarle a Florencia una decisión que ella no tiene los datos para tomar.',
      },
      {
        id: '6D',
        text: 'Florencia, te tengo que decir que ir a juicio es carísimo y vas a perder. Mejor aceptemos lo que ofrezcan.',
        angerDelta: 13,
        feedback:
          'Mentiste dos veces en una frase: el juicio en fuero del Consumidor es gratuito (Art. 53 LDC) y Florencia no va a perder en el fondo. La acabás de llevar a aceptar cualquier oferta de Suavecito por miedo a un escenario falso.',
      },
    ],
  },
  {
    id: 7,
    title: 'Caucus con Suavecito: pregunta circular',
    harvardPrinciple: 'Pregunta circular en privada — mover a la otra parte hacia su propio interés',
    meetingType: 'private-suavecito',
    speaker: 'donRicardo',
    privateContext:
      'Cambio de caucus. El mediador habla ahora en privado con Don Ricardo, Dr. Pérez y vos. Es el momento de explorar qué hay detrás de la rigidez de Suavecito.',
    speakerLine:
      'Doctor/a, le voy a ser franco acá en privado. No es el colchón. Si yo le devuelvo la plata a esta, mañana tengo cincuenta más con el mismo argumento. Es un tema de flujo de caja. La Gift Card no es para joderla a su clienta — es para que la plata no se vaya de la empresa.',
    options: [
      {
        id: '7A',
        text: 'Don Ricardo, le agradezco la franqueza. Le pregunto algo: si este caso llega a sentencia con daño punitivo, ¿cómo cree que lo vería el resto de sus clientes y sus reviews online? Y si la cláusula 7.3 se declara abusiva en una causa colectiva del Art. 55 LDC, ¿qué pasaría con esos otros cincuenta clientes que usted me menciona?',
        angerDelta: -12,
        feedback:
          'Pregunta circular doble: desplazamiento subjetivo (cómo lo verían los clientes) + desplazamiento temporal (qué pasa con la cláusula a futuro). Lo movés a evaluar el verdadero costo de no acordar sin que el mediador le diga nada. Es la jugada más fina del repertorio en caucus.',
        isBest: true,
        questionType: 'circular',
      },
      {
        id: '7B',
        text: '¿Su empresa cumple con el Art. 34 LDC o no?',
        angerDelta: 5,
        feedback:
          'Pregunta cerrada acusatoria. Don Ricardo no te va a contestar "no, no cumplimos". Cerrás la conversación cuando justamente estaba abriéndose: él te acaba de confesar su interés real (flujo de caja) y vos lo cortás con un sí/no jurídico.',
        questionType: 'closed',
      },
      {
        id: '7C',
        text: '¿Qué se imagina pagando, Don Ricardo, en un escenario realista?',
        angerDelta: -3,
        feedback:
          'Pregunta abierta razonable, pero llegó demasiado pronto. Don Ricardo todavía está justificando su política, no evaluando qué pagaría. Le pedís el número antes de haberlo movido del interés posicional al interés real.',
        questionType: 'open',
      },
      {
        id: '7D',
        text: 'Don Ricardo, ya que lo dice usted: si tiene cincuenta más como mi clienta, eso es exactamente lo que el Art. 55 LDC sanciona como acción colectiva. Le acabo de tomar la declaración.',
        angerDelta: 18,
        feedback:
          'Convertiste una confesión en caucus en una amenaza pública. Rompiste la confidencialidad de la reunión privada (Art. 7 inc. b Ley 26.589) y le pasaste a Don Ricardo el mensaje de que cualquier cosa que diga será usada en su contra. No vuelve a hablar en mediación.',
        questionType: 'statement',
      },
    ],
  },
  {
    id: 8,
    title: 'Agente de la realidad con el letrado',
    harvardPrinciple: 'Agente de la realidad — que el letrado de enfrente extraiga las conclusiones',
    meetingType: 'private-suavecito',
    speaker: 'drPerez',
    privateContext:
      'Seguís en caucus con Suavecito. Dr. Pérez te interpela en su rol técnico para defender la posición.',
    speakerLine:
      'Doctor/a, vamos a sincerar la discusión jurídica. Yo entiendo lo del Art. 34 LDC, pero esta es una discusión interpretable. ¿Usted está realmente convencido/a de que un juez del fuero del Consumidor le va a hacer lugar al daño punitivo en un caso de un colchón? Yo en mis casos similares vi sentencias para todos lados.',
    options: [
      {
        id: '8A',
        text: 'Doctor Pérez, déjeme devolverle la pregunta: en su experiencia, ¿cuál suele ser el criterio del fuero del Consumidor cuando una empresa, conociendo el Art. 34 LDC, lo desconoce con una cláusula de adhesión declarada nula por el Art. 37 LDC, y como política aplicada a todos los clientes? ¿Le parece un caso donde el juez modera el daño punitivo, o uno donde lo agrava?',
        angerDelta: -10,
        feedback:
          'Agente de la realidad en su forma más pura: no le decís a Dr. Pérez que está equivocado, le pedís a él que extraiga la conclusión. Y ubicás los tres factores agravantes del Art. 52 bis (conducta deliberada, sistemática, sobre derecho irrenunciable). Él no puede contestar sin reconocer que el escenario judicial es desfavorable.',
        isBest: true,
        questionType: 'circular',
      },
      {
        id: '8B',
        text: 'Doctor, no me importa lo que usted vio. La ley es clara y el daño punitivo se va a otorgar.',
        angerDelta: 11,
        feedback:
          'Cerraste la conversación con una afirmación sin sustento concreto. Dr. Pérez te puso una hipótesis razonable y vos contestaste con una certeza que no podés probar. Pierdes el momentum técnico que venías construyendo.',
        questionType: 'statement',
      },
      {
        id: '8C',
        text: 'Doctor, es cierto que es interpretable. Quizás podríamos pensar en un acuerdo sin daño punitivo.',
        angerDelta: 9,
        feedback:
          'Mordiste el anzuelo. Dr. Pérez te tendió el "es interpretable" para que vos mismo soltaras la carta principal en privado, antes de la mesa conjunta. Acabás de regalar tu mejor herramienta de presión sin contrapartida.',
      },
      {
        id: '8D',
        text: 'Doctor, ¿usted le recomendó a su cliente cómo va a explicar en sede judicial que aplica la misma cláusula 7.3 a todos los consumidores?',
        angerDelta: -2,
        feedback:
          'Buena intención pero formulación adversarial: parece más una pulla al letrado que una invitación a evaluar la realidad. Funciona a medias — Dr. Pérez se pone defensivo en vez de reflexivo.',
        questionType: 'closed',
      },
    ],
  },
  {
    id: 9,
    title: 'La amenaza de demanda cruzada',
    harvardPrinciple: 'Jujitsu de la negociación: convertir el ataque en agenda compartida',
    meetingType: 'joint',
    speaker: 'drPerez',
    speakerLine:
      'Doctor/a, volvemos a la mesa conjunta. Le aviso formalmente: si su clienta insiste con el daño punitivo, mi cliente Suavecito S.A. va a iniciar acción por daño a la imagen comercial. Tenemos guardadas las capturas del WhatsApp donde la Sra. Gómez nos llamó "estafadores". Eso es injuria.',
    options: [
      {
        id: '9A',
        text: 'Doctor Pérez, entiendo el planteo. Si Suavecito quiere ejercer una acción propia, está en su derecho — pero eso es otra mediación, otro expediente. Acá estamos los cuatro porque hay dos cosas que resolver: el reintegro del colchón y el clima del reclamo. No son problemas opuestos; son dos lados de la misma mesa. ¿Las trabajamos así?',
        angerDelta: -10,
        feedback:
          'Jujitsu Harvard: no negás la amenaza, la convertís en agenda. La encuadrás procesalmente (no procede en esta mediación) y al mismo tiempo le ofrecés a Suavecito un canal para tratar su preocupación. Dr. Pérez no tiene contra qué pegar.',
        isBest: true,
      },
      {
        id: '9B',
        text: 'Doctor, llamar "estafadores" a una empresa que retiene plata indebidamente no es injuria, es opinión protegida por el Art. 14 CN. Adelante con la demanda, la vamos a contestar.',
        angerDelta: 16,
        feedback:
          'Contraataque puro. Tenés razón en el fondo pero escalaste la trinchera. La mediación se cae y los dos se van a tribunales: justamente lo que tu clienta no quería.',
      },
      {
        id: '9C',
        text: 'Doctor Pérez, ¿qué les parece si Florencia se compromete a no hablar más públicamente del caso y ustedes ofrecen el reintegro? Cambiamos confidencialidad por dinero.',
        angerDelta: 6,
        feedback:
          'Soltaste una carta importante (la "amenaza" reputacional) sin haber explorado primero qué valor le da Suavecito. Convertiste el conflicto en transacción rápida y dejaste plata sobre la mesa.',
      },
      {
        id: '9D',
        text: 'Doctor, eso no procede acá. Su demanda tiene que ir por carril separado.',
        angerDelta: 4,
        feedback:
          'Procesalmente correcto pero usaste el tecnicismo para esquivar el conflicto en vez de procesarlo. Don Ricardo y Dr. Pérez sienten que no los escuchás.',
      },
    ],
  },
  {
    id: 10,
    title: 'Replanteo: de posiciones a intereses',
    harvardPrinciple: 'Pregunta de replanteo — reformular las posiciones como intereses compatibles',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      'Bueno, está bien. Yo no me voy a parar más en la Gift Card si usted no se planta más en los $1.350.000 enteros. Pero todavía no veo cómo salimos. Lo escucho.',
    options: [
      {
        id: '10A',
        text: 'Don Ricardo, déjeme ponerlo en términos de intereses: usted necesita que esto no comprometa el flujo de caja de Suavecito y no abra la puerta a cincuenta reclamos más. Florencia necesita el dinero a la tarjeta esta semana y que el colchón se lo retiren sin costo. Esos dos intereses no son opuestos. ¿Le parece que trabajemos sobre cómo combinarlos?',
        angerDelta: -10,
        feedback:
          'Pregunta de replanteo Harvard impecable: tomás las dos posiciones declaradas y las traducís al interés real de cada parte, mostrando que no son incompatibles. El mediador no podría haberlo hecho mejor.',
        isBest: true,
      },
      {
        id: '10B',
        text: 'Don Ricardo, mi clienta podría bajar a $1.100.000 si ustedes suben de la Gift Card a un pago real.',
        angerDelta: 8,
        feedback:
          'Regateo posicional clásico: das un número, pedís otro, sin tocar los intereses. Te quedaste en la superficie del iceberg.',
      },
      {
        id: '10C',
        text: 'Don Ricardo, le propongo que cada uno ceda un 50% y cerramos.',
        angerDelta: 10,
        feedback:
          '"50/50" suena justo pero es vacío: ¿50% de qué? Sin definir intereses, partir por la mitad es repartir frustración. Ninguno de los dos sale con lo que necesita.',
      },
      {
        id: '10D',
        text: 'Don Ricardo, le propongo que mi clienta retira la mediación si ustedes garantizan que no vuelve a pasar.',
        angerDelta: 12,
        feedback:
          'Le pediste a Florencia que renuncie a su reclamo a cambio de una promesa intangible. No hay reparación, no hay reintegro, no hay nada. Florencia no firma esto.',
      },
    ],
  },
  {
    id: 11,
    title: 'Brainstorming Harvard',
    harvardPrinciple: 'Generación de opciones: separar generar de decidir',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      'A ver, póngale ideas a la mesa. Sin compromiso, nomás para ver qué hay. ¿Qué opciones tenemos?',
    options: [
      {
        id: '11A',
        text: 'Don Ricardo, le tiro varias y vemos cuáles encajan. Una: reintegro íntegro a la tarjeta en un pago, Suavecito retira el colchón sin costo, Florencia desiste del daño punitivo. Dos: reintegro en dos cuotas con compromiso de no aplicar más la cláusula 7.3 a futuros reclamos similares. Tres: reintegro + cupón de descuento simbólico en otro comercio aliado. Cuatro: acuerdo homologado que incluya cláusula de no repetición. ¿Por dónde miramos primero?',
        angerDelta: -13,
        feedback:
          'Brainstorming Harvard puro. Cuatro opciones diferenciadas, todas viables, ninguna con compromiso. Separás generar de decidir y abrís el espacio creativo. Es exactamente lo que el mediador necesita para avanzar.',
        isBest: true,
      },
      {
        id: '11B',
        text: 'Reintegro de $980.000 más $370.000 de daño punitivo y mi clienta firma. Esa es la opción.',
        angerDelta: 14,
        feedback:
          'Una sola opción presentada en una etapa de brainstorming no es brainstorming: es ultimátum. Cerraste la mesa cuando el mediador la estaba abriendo.',
      },
      {
        id: '11C',
        text: 'Don Ricardo, mejor proponga usted opciones y mi clienta las analiza.',
        angerDelta: 7,
        feedback:
          'Cediste la iniciativa creativa. En brainstorming quien propone más opciones modela el rango del acuerdo. Te quedaste afuera de esa palanca.',
      },
      {
        id: '11D',
        text: 'Mi clienta podría hacer un posteo positivo sobre Suavecito a cambio del reintegro íntegro y el daño punitivo.',
        angerDelta: 11,
        feedback:
          'Suena creativo pero une mal las cosas: pedís todo el dinero Y le sumás un servicio de comunicación de tu clienta. Don Ricardo lo lee como manipulación y se cierra.',
      },
    ],
  },
  {
    id: 12,
    title: 'Criterios objetivos #1: la nulidad de la cláusula 7.3',
    harvardPrinciple: 'Criterios objetivos — fundar el acuerdo en normas externas, no en voluntad',
    meetingType: 'joint',
    speaker: 'drPerez',
    speakerLine:
      'Doctor/a, antes de avanzar con cualquier opción, quiero dejar sentado que la cláusula 7.3 de nuestros T&C sigue vigente. Cualquier acuerdo que firmemos no implica reconocimiento de su nulidad.',
    options: [
      {
        id: '12A',
        text: 'Doctor Pérez, ahí tenemos que ser ordenados. El Art. 34 LDC dice expresamente que el derecho de arrepentimiento no puede ser dispensado ni renunciado, y que los gastos de devolución son por cuenta del vendedor. El Art. 37 LDC y el Art. 1119 CCyCN tienen por no escritas las cláusulas que desnaturalicen las obligaciones del proveedor. No es una opinión de Florencia ni mía — es el texto de la ley. ¿Sobre qué criterio objetivo distinto le parece que podríamos asentar el acuerdo?',
        angerDelta: -9,
        feedback:
          'Criterios objetivos Harvard: invocás tres normas concretas, las articulás con el caso, y le devolvés la pelota al letrado pidiéndole que proponga un criterio externo distinto. No queda margen para "es interpretable" sin que él tenga que aportar contenido jurídico.',
        isBest: true,
      },
      {
        id: '12B',
        text: 'Doctor, su cláusula es abusiva y punto. No hay nada que discutir.',
        angerDelta: 11,
        feedback:
          '"Y punto" en una mediación es como dar un portazo. Tenés razón pero no le diste fundamento concreto, solo conclusión. Dr. Pérez tiene espacio para seguir defendiendo la cláusula.',
      },
      {
        id: '12C',
        text: 'Doctor Pérez, está bien. Podemos firmar dejando sentado que la cláusula no es nula, si eso destraba el reintegro.',
        angerDelta: 12,
        feedback:
          'Acabás de regalar el criterio objetivo central del caso. Suavecito puede aplicar la misma cláusula a los próximos 50 clientes y vos firmaste que es válida. Falla grave de patrocinio.',
      },
      {
        id: '12D',
        text: 'Doctor, dejemos los T&C de lado y vamos al número final.',
        angerDelta: 8,
        feedback:
          'Esquivás el criterio objetivo. El acuerdo sin asentar la nulidad de la cláusula es un acuerdo blando: Suavecito lo cumple acá y mañana hace lo mismo con otro cliente. La función pedagógica del Art. 52 bis LDC queda neutralizada.',
      },
    ],
  },
  {
    id: 13,
    title: 'Criterios objetivos #2: plazos bancarios y valor de mercado',
    harvardPrinciple: 'Criterios objetivos — anclar números en estándares externos',
    meetingType: 'joint',
    speaker: 'drPerez',
    speakerLine:
      'Bien. Si avanzamos con un eventual reintegro a la tarjeta, le aclaro que el proceso de reversión por la procesadora demora hasta 60 días hábiles. Y respecto del daño punitivo, $370.000 me parece desmedido para un colchón de $980.000.',
    options: [
      {
        id: '13A',
        text: 'Doctor Pérez, dos cosas. Sobre los plazos: el contracargo a tarjeta por reversión voluntaria del comerciante, con instrucción al banco emisor, se acredita en 5 a 10 días hábiles. 60 días es la baja unilateral del consumidor. Le pido que verifiquemos eso con el mediador. Sobre el daño punitivo: $370.000 es aproximadamente un 38% del capital. La jurisprudencia del fuero del Consumidor, en casos por desconocimiento del Art. 34 LDC con cláusula de adhesión sistémica, condena entre el 50% y el 200% del capital. La cifra que pedimos está en el borde inferior del rango.',
        angerDelta: -10,
        feedback:
          'Criterios objetivos en estado puro: distinguís plazos bancarios reales del mito comercial, y anclás el daño punitivo en jurisprudencia comparable. Le mostrás al letrado que sabés más que él de ambos terrenos y que su propuesta no resiste un control externo.',
        isBest: true,
      },
      {
        id: '13B',
        text: 'Doctor, 60 días es lo que ustedes deciden, no la procesadora. Y los $370.000 son los $370.000.',
        angerDelta: 9,
        feedback:
          'Tenés razón intuitivamente en lo primero pero no lo fundamentaste, y en lo segundo cerrás sin ofrecer criterio. Quedaste en pelea de afirmaciones, no en discusión técnica.',
      },
      {
        id: '13C',
        text: 'Si son 60 días bancarios, está bien. Y podemos bajar el daño punitivo a $200.000 para acelerar el acuerdo.',
        angerDelta: 13,
        feedback:
          'Cediste en los dos puntos sin pelear ni verificar. Florencia esperaba el dinero esta semana — 60 días la deja sin liquidez. Y $200.000 es exactamente el techo que Dr. Pérez quería instalar.',
      },
      {
        id: '13D',
        text: 'Doctor, no me importa lo que diga la jurisprudencia. Mi clienta pide lo que pide.',
        angerDelta: 14,
        feedback:
          'Acabás de despreciar el criterio objetivo central del Método Harvard. Negociás sobre voluntad pura: "porque mi clienta lo pide". Dr. Pérez no tiene nada con qué dialogar y la mediación se traba.',
      },
    ],
  },
  {
    id: 14,
    title: 'Desistimiento del daño punitivo como moneda',
    harvardPrinciple: 'Intercambio diferencial: usar lo que vos valoras poco y la otra parte mucho',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      'Le voy a ser franco, doctor/a. El reintegro a la tarjeta lo podemos hacer. Lo que no puedo cerrar es un acuerdo donde quede el daño punitivo abierto: si firmamos y mañana su clienta sigue la acción, no nos sirve. Necesito que ella desista de eso.',
    options: [
      {
        id: '14A',
        text: 'Don Ricardo, Florencia está dispuesta a desistir formalmente de la acción de daño punitivo, con cláusula expresa en el acuerdo homologado, siempre que se cumplan tres condiciones: reintegro íntegro de $980.000 a la tarjeta dentro de los 10 días hábiles, retiro del colchón a domicilio por logística de Suavecito sin costo, y compromiso por escrito de revisión de la cláusula 7.3 a futuro. ¿Vamos por ahí?',
        angerDelta: -12,
        feedback:
          'Intercambio diferencial Harvard: usaste el desistimiento del daño punitivo —que Florencia valora poco y Suavecito mucho— como moneda para conseguir las tres cosas que tu clienta sí valora. Le sumás un criterio objetivo (revisión de la cláusula) que protege a futuros consumidores. Acuerdo gana-gana.',
        isBest: true,
      },
      {
        id: '14B',
        text: 'Don Ricardo, mi clienta no desiste del daño punitivo. Le pagan los $1.350.000 enteros o vamos a juicio.',
        angerDelta: 17,
        feedback:
          'Te aferraste a la cifra justo cuando Don Ricardo te abría el reintegro. Florencia te dijo en el caucus que no le importaba el daño punitivo. Estás peleando contra el interés real de tu propia clienta.',
      },
      {
        id: '14C',
        text: 'Don Ricardo, si paga los $980.000 ya, Florencia firma desistimiento total sin más condiciones.',
        angerDelta: 6,
        feedback:
          'Conseguiste el reintegro pero soltaste la logística inversa, la cláusula a futuro y cualquier compensación. Florencia paga el envío y Suavecito sigue aplicando la misma cláusula a los próximos 50 clientes.',
      },
      {
        id: '14D',
        text: 'Don Ricardo, mi clienta evalúa eso si ustedes admiten por escrito que la cláusula 7.3 es nula.',
        angerDelta: 13,
        feedback:
          'Le pedís a Suavecito que firme su propia condena pública. Ni Dr. Pérez ni Don Ricardo aceptan eso jamás — los expondría a las acciones colectivas del Art. 55 LDC. Bloqueás el acuerdo por un símbolo.',
      },
    ],
  },
  {
    id: 15,
    title: 'Cierre con MAAN comunicada con firmeza',
    harvardPrinciple: 'MAAN comunicada con firmeza, sin amenaza, mostrando que entendés el del otro',
    meetingType: 'joint',
    speaker: 'donRicardo',
    speakerLine:
      'Doctor/a, estamos cerca. Pero antes de firmar cualquier cosa, necesito saber: ¿qué hace su clienta si nos paramos acá? Porque yo tengo equipo legal, no me asusta el juicio. Quiero ver con qué cartas viene.',
    options: [
      {
        id: '15A',
        text: 'Don Ricardo, prefiero cerrar hoy y le explico por qué para los dos lados. Si no acordamos, Florencia tiene la vía del fuero del Consumidor de CABA (Ley 6.286/2020), gratuita por el Art. 53 LDC, con daño punitivo en agenda. Es un MAAN sólido. Pero también sé que su MAAN —ir a juicio, ganar parcialmente y exponer la cláusula 7.3 a una nulidad firme con efecto sobre otros clientes— es peor que cualquier acuerdo razonable que firmemos hoy. Por eso le insisto: cerremos hoy, no porque ninguno tenga miedo, sino porque a los dos nos conviene más.',
        angerDelta: -10,
        feedback:
          'MAAN comunicada con firmeza Harvard: presentás tu propio MAAN con fundamento legal concreto (no como amenaza), mostrás que entendiste el MAAN de la otra parte mejor que ellos mismos, y cerrás con propuesta de futuro común. Es exactamente el cierre que Fisher y Ury describen en Sí... ¡de acuerdo!',
        isBest: true,
      },
      {
        id: '15B',
        text: 'Si no acuerdan hoy, vamos a juicio y pedimos capital, daño punitivo, daño moral y costas. Les sale tres veces más caro.',
        angerDelta: 18,
        feedback:
          'MAAN como amenaza pura en el cierre. Tiraste todo el trabajo Harvard de las 14 fases anteriores justo en la última. Don Ricardo no firma bajo amenaza: se levanta.',
      },
      {
        id: '15C',
        text: 'Y bueno, veremos qué hacemos. Florencia decide.',
        angerDelta: 11,
        feedback:
          'Le mostraste a Don Ricardo que no tenés MAAN clara y que tu clienta tampoco. Le diste a entender que cualquier oferta es mejor que ninguna, justo cuando estabas a un paso del cierre. Suavecito va a empeorar la propuesta.',
      },
      {
        id: '15D',
        text: 'Si no acuerdan, Florencia hace prensa con el caso. Tiene seguidores en redes.',
        angerDelta: 16,
        feedback:
          'Amenaza con uso reputacional como si fuera MAAN. No es alternativa al acuerdo —es chantaje. Activás justo el miedo de Suavecito a la prensa, pero por la peor vía: la mediación se cae y Suavecito sí inicia la acción por daño a la imagen comercial.',
      },
    ],
  },
];

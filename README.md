# Mediación con Don Ricardo

Simulación interactiva de una audiencia de **mediación prejudicial obligatoria** (Ley 26.589) sobre el derecho de arrepentimiento en el comercio electrónico, aplicando el método de negociación de Harvard.

La mediación es **autocomposición indirecta asistida**: las partes resuelven por sí mismas su conflicto con la ayuda de un tercero que **no decide ni asesora** — solo facilita el diálogo. El juego se para sobre ese rol.

Material académico del **Trabajo Práctico Integrador "Resolución de Controversias y Compras Online"** — UADE, Abogacía, 1C 2026, docente Pablo Adrián Langholz. El caso es ficticio.

## El caso

**Gómez c/ Suavecito S.A. s/ Daños y Perjuicios**

Florencia Gómez compró online un colchón de $980.000. Al recibirlo notó que no era lo que esperaba y, dentro del plazo legal de 10 días corridos (Art. 34 LDC, Art. 1110 CCyCN), notificó a Suavecito S.A. que ejercía el derecho de arrepentimiento. La empresa se negó a reintegrar el dinero a la tarjeta amparándose en sus Términos y Condiciones: solo ofreció una Gift Card por 3 meses y le exigió pagar el envío de devolución. Florencia inició mediación prejudicial reclamando **$1.350.000** (capital $980.000 + daño punitivo Art. 52 bis LDC $370.000).

## Doble rol del jugador

- **12 fases como mediador/a** — imparcial. Hacés el discurso de apertura (legitimación, empowerment, principios del Art. 7), conducís la reunión conjunta inicial con preguntas abiertas y parafraseo, convocás las reuniones privadas con cada parte para indagar intereses (preguntas cerradas y circulares, agente de la realidad, abogado del diablo), replanteás el problema de posiciones a intereses, facilitás el brainstorming, anclás el acuerdo en criterios objetivos.
- **3 fases como abogado/a de Florencia** — momentos picantes donde te ponés del lado de la requirente y aplicás el método Harvard (ni suave ni duro: duro con el problema, suave con las personas). Te toca cuando el Dr. Pérez ataca con los T&C, cuando hay que tirar la propuesta de cierre y al cerrar con MAAN.

## Tres medidores

Vas a manejar 3 indicadores en paralelo. Si cualquiera llega a 100, la mediación se cae:

- **Clima del proceso** — el ambiente general. Sube si perdés imparcialidad, violás confidencialidad, forzás la mano o escalás como abogada/o.
- **Don Ricardo** — cómo se siente el dueño de Suavecito.
- **Florencia** — cómo se siente la parte requirente / tu clienta.

## Las 8 etapas estructurales del proceso

Según los apuntes del curso y la Ley 26.589:

1. **Discurso de apertura** — legitimación, empowerment, principios del Art. 7 y agenda de trabajo.
2. **Reunión conjunta inicial** — las partes narran. El mediador hace escucha activa, preguntas abiertas y parafraseo.
3. **Reunión privada con Florencia** — exploración de intereses reales y MAAN.
4. **Reunión privada con Suavecito** — pregunta circular, agente de la realidad, abogado del diablo.
5. **Replanteo del problema** — reformular las posiciones declaradas como intereses compatibles.
6. **Brainstorming** — generar opciones sin compromiso. Separar generar de decidir.
7. **Criterios objetivos** — anclar el acuerdo en normas externas, jurisprudencia, valor de mercado.
8. **Acuerdo** — redacción Harvard de la cláusula final, con MAAN comunicada con firmeza.

## Herramientas del mediador y técnicas de negociación que cubre el juego

- Discurso de apertura: **legitimación** + **empowerment**.
- Preguntas: **abierta** (libre), **cerrada** (sí/no), **circular** (desplazamiento temporal o subjetivo).
- **Escucha activa** y **parafraseo** (sin connotación negativa, no afirmar como cierto lo que la parte dijo, terminar con "¿es así?").
- **Confidencialidad** (Art. 7 inc. e + Art. 8 Ley 26.589): regla central de las reuniones privadas.
- **Agente de la realidad** dirigido al letrado de la contraparte.
- **Abogado del diablo** sobre el MAAN en privada con la propia parte.
- **Replanteo** de posiciones → intereses.
- **Brainstorming** Harvard.
- **Criterios objetivos** (valor de mercado, jurisprudencia, plazos bancarios, ley).
- **MAAN** comunicada con firmeza, sin amenaza.
- Errores típicos modelados: pérdida de imparcialidad, violación de confidencialidad, acusación, regateo posicional, negociador suave, negociador duro, esquive procesal.

## Marco normativo central

- **Constitución Nacional**: Art. 42 (derechos del consumidor).
- **Código Civil y Comercial**: Arts. 1092 (relación de consumo), 1093 (contrato de consumo), 1097 (trato digno), 1100 (deber de información), 1105-1110 (contratos a distancia y derecho de revocación), 1119 (cláusulas abusivas).
- **Ley 24.240 de Defensa del Consumidor**: Arts. 4, 8 bis, 34 (derecho de arrepentimiento), 37 (cláusulas no escritas), 52 bis (daño punitivo), 53 (gratuidad), 55 (acciones colectivas), 65 (orden público).
- **Ley 26.589**: mediación prejudicial obligatoria. Arts. 1, 2, 4-7 (principios), 8 (confidencialidad), 10-14, 19-23, 25-28, 31.
- **Ley 6.286/2020 (CABA)**: fuero del Consumidor.

## Estructura del juego

- **15 fases** distribuidas en las 8 etapas del proceso.
- En cada fase elegís 1 de 4 opciones. Las opciones se **barajan al cargar cada fase** (la mejor no está siempre en la misma posición).
- Cada opción tiene 3 deltas independientes (uno por medidor).
- Al final, trazabilidad pedagógica decisión-por-decisión con etapa, rol, técnica y los 3 deltas.

### Dos modos

- **Aprendizaje** — muestra la herramienta o estilo de cada opción antes de elegir.
- **Examen** — sin hints, opciones barajadas, feedback al final fase por fase.

## Stack

- Next.js 14 (App Router)
- TypeScript estricto
- TailwindCSS
- Framer Motion
- Sin backend (estado en cliente, persistencia en `sessionStorage`)

## Correr localmente

```bash
npm install
npm run dev
```

Se levanta en [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Deploy a Vercel

Cero configuración:

1. Importar el repo en [vercel.com/new](https://vercel.com/new), o
2. Desde la terminal: `vercel --prod`

No usa variables de entorno.

## Créditos

- Método Harvard: **Fisher, Ury &amp; Patton — _Sí... ¡de acuerdo!_ Cómo negociar sin ceder**
- Caso base: **Trabajo Práctico Integrador "Resolución de Controversias y Compras Online"** — UADE 1C 2026, docente Pablo Adrián Langholz. Integrantes del TP: Martina Abeijón, Ezequiel Díaz, Agustina Medina Insua, Agustina Morales, Giuliana Valente.
- Marco legal argentino: Ley 24.240, Ley 26.589, Ley 6.286/2020, CCyCN.

---

Material académico. Caso ficticio.

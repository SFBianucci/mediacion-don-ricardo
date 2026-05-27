# Mediación con Don Ricardo

Simulación interactiva de una audiencia de mediación prejudicial obligatoria (Ley 26.589) sobre el **derecho de arrepentimiento en compras online** (Art. 34 LDC / Art. 1110 CCyCN), aplicada al método de negociación de Harvard.

Material académico del **Trabajo Práctico Integrador "Resolución de Controversias y Compras Online"** — UADE, Abogacía, 1C 2026, docente Pablo Adrián Langholz. El caso es ficticio.

## El caso

**Gómez c/ Suavecito S.A. s/ Daños y Perjuicios**

Florencia Gómez compró online un colchón de $980.000. Al recibirlo notó que no era lo que esperaba y, dentro del plazo legal de 10 días corridos, notificó a Suavecito S.A. que ejercía el derecho de arrepentimiento. La empresa se negó a reintegrar el dinero a la tarjeta amparándose en sus Términos y Condiciones: solo ofreció una Gift Card por 3 meses y le exigió pagar el envío de devolución. Florencia inició mediación prejudicial reclamando **$1.350.000** (capital $980.000 + daño punitivo Art. 52 bis LDC $370.000).

## Qué hace

Es un single-player donde el jugador es **abogado/a de Florencia Gómez** y negocia frente a dos personajes del lado requerido:

- **Don Ricardo Almeyda**, dueño de Suavecito S.A. — costado emocional, de negocio y flujo de caja.
- **Dr. Pérez**, letrado patrocinante de Suavecito — costado técnico-jurídico: cláusulas, jurisprudencia, defensa procesal.

El juego tiene **15 fases** siguiendo el arco completo de una mediación según el TP: discurso de apertura, reunión conjunta inicial, caucus con cada parte, replanteo, criterios objetivos, brainstorming de opciones y cierre con MAAN.

En cada fase se elige 1 de 4 opciones de respuesta. **El orden A/B/C/D se baraja al entrar a cada fase**: la mejor respuesta no está siempre en la misma posición. Cada opción tiene un delta de tensión (positivo o negativo), Don Ricardo / Dr. Pérez / Florencia reaccionan visualmente, y al final hay una trazabilidad pedagógica decisión-por-decisión vinculada al principio Harvard que se aplicó o se violó.

### Cuatro modos de reunión

- **Reunión conjunta** — Don Ricardo y Dr. Pérez del otro lado de la mesa.
- **Caucus con Suavecito** (×2) — reunión privada con Don Ricardo y Dr. Pérez, sin Florencia.
- **Caucus con Florencia** (×2) — reunión privada con tu propia clienta, sin la otra parte. El medidor se reinterpreta como tensión con tu clienta (si la subestimás, la mal informás o le ofrecés malos acuerdos, te pierde).

### Dos modos de juego

- **Aprendizaje** — muestra el principio Harvard y el tipo de pregunta antes de elegir.
- **Examen** — sin hints, opciones barajadas, feedback completo al final fase por fase.

## Técnicas de mediación y negociación cubiertas

- Discurso de apertura, legitimación del mediador, empowerment, agenda de trabajo.
- Preguntas: **abierta**, **cerrada**, **circular** (desplazamiento temporal y subjetivo).
- **Parafraseo** y escucha activa con neutralización afectiva.
- **Agente de la realidad** dirigido al letrado de la contraparte.
- **Abogado del diablo** sobre el propio MAAN en caucus con la clienta.
- **Replanteo**: reformular posiciones declaradas como intereses compatibles.
- **Brainstorming** Harvard: separar generar de decidir.
- **Criterios objetivos**: anclar el acuerdo en normas, jurisprudencia y procedimientos externos.
- **MAAN comunicada con firmeza**, sin amenaza, mostrando comprensión del MAAN del otro.
- **Jujitsu de la negociación**: convertir amenazas en agenda compartida.
- Distinguir **posiciones de intereses**, **opciones de alternativas**.

## Marco normativo central

- **Constitución Nacional**: Art. 42 (derechos del consumidor).
- **Código Civil y Comercial**: Arts. 1092 (relación de consumo), 1093 (contrato de consumo), 1097 (trato digno), 1100 (deber de información), 1105-1110 (contratos a distancia y derecho de revocación), 1119 (cláusulas abusivas), 1122 (control judicial de oficio).
- **Ley 24.240 de Defensa del Consumidor**: Arts. 4 (información), 8 bis (trato digno), 34 (derecho de arrepentimiento, 10 días, gastos a cuenta del vendedor), 37 (cláusulas que se tienen por no escritas), 38 (control de adhesión), 52 bis (daño punitivo), 53 (gratuidad del proceso), 55 (acciones colectivas), 65 (orden público).
- **Ley 26.589**: mediación prejudicial obligatoria.
- **Ley 6.286/2020 (CABA)**: fuero del Consumidor.

## Stack

- Next.js 14 (App Router)
- TypeScript estricto
- TailwindCSS
- Framer Motion
- Sin backend (estado todo en cliente, persistencia por `sessionStorage` para la trazabilidad final)

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
2. Desde la terminal con la CLI: `vercel --prod`

No usa variables de entorno.

## Créditos

- Método Harvard: **Fisher, Ury &amp; Patton — _Sí... ¡de acuerdo!_ Cómo negociar sin ceder**
- Caso base: **Trabajo Práctico Integrador "Resolución de Controversias y Compras Online"**, UADE 1C 2026 — docente Pablo Adrián Langholz. Integrantes del TP: Martina Abeijón, Ezequiel Díaz, Agustina Medina Insua, Agustina Morales, Giuliana Valente.
- Marco legal argentino: Ley 24.240, Ley 26.589, Ley 6.286/2020, CCyCN.

---

Material académico. Caso ficticio.

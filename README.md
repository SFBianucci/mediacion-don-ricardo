# Mediación con Don Ricardo

Simulación interactiva de una audiencia de mediación prejudicial obligatoria (Ley 26.589), aplicada al método de negociación de Harvard.

Material académico — **UADE, Resolución de Controversias** (Abogacía). El caso es ficticio.

## Qué hace

Es un single-player donde el usuario es **abogado/a de Camila Vidal** (consumidora) y negocia frente a **Don Ricardo Almeyda**, dueño de Almeyda Tech (e-commerce). El juego tiene 8 fases. En cada fase se elige 1 de 4 opciones de respuesta, cada una con un delta de enojo. Don Ricardo reacciona visualmente (cambia su cara), la barra de enojo se mueve, y al final hay una trazabilidad pedagógica decisión-por-decisión vinculada al principio Harvard que se aplicó o se violó.

Dos modos:

- **Aprendizaje** — muestra el principio Harvard de cada opción antes de elegir.
- **Examen** — sin hints. Feedback completo al final.

Fases 3 y 4 son **reunión privada** (badge visible y ambientación distinta). El resto son reunión conjunta.

## Stack

- Next.js 14 (App Router)
- TypeScript estricto
- TailwindCSS
- Framer Motion
- Sin backend (estado todo en cliente)

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

- Método Harvard: **Fisher, Ury & Patton — _Sí... ¡de acuerdo!_ Cómo negociar sin ceder**
- Marco legal argentino: Ley 26.589 (mediación prejudicial obligatoria), Ley 24.240 (defensa del consumidor)
- Curso: **UADE — Resolución de Controversias**

---

Material académico. Caso ficticio.

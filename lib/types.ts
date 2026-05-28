export type EmotionalState = 0 | 1 | 2 | 3 | 4;

export type GameMode = 'learning' | 'exam';

export type MeetingType = 'joint' | 'private-suavecito' | 'private-florencia';

export type Speaker = 'donRicardo' | 'drPerez' | 'florencia' | 'mediator';

export type PlayerRole = 'mediador' | 'abogada';

export type MediationStage =
  | 'apertura'
  | 'conjunta-inicial'
  | 'privada-florencia'
  | 'privada-suavecito'
  | 'replanteo'
  | 'brainstorming'
  | 'criterios-objetivos'
  | 'acuerdo';

export type Technique =
  // Mediador
  | 'pregunta-abierta'
  | 'pregunta-cerrada'
  | 'pregunta-circular'
  | 'parafraseo'
  | 'escucha-activa'
  | 'agente-realidad'
  | 'abogado-diablo'
  | 'legitimacion'
  | 'empowerment'
  | 'replanteo'
  | 'brainstorming'
  | 'criterios-objetivos'
  | 'confidencialidad'
  // Abogada
  | 'harvard'
  | 'negociador-suave'
  | 'negociador-duro'
  | 'esquive'
  | 'regateo-posicional'
  // Errores típicos
  | 'perdida-imparcialidad'
  | 'violacion-confidencialidad'
  | 'acusacion'
  | 'carga-emocional';

export interface Deltas {
  climate: number;
  donRicardo: number;
  florencia: number;
}

export interface Meters {
  climate: number;
  donRicardo: number;
  florencia: number;
}

export interface Option {
  id: string;
  text: string;
  deltas: Deltas;
  feedback: string;
  isBest?: boolean;
  technique?: Technique;
}

export interface Phase {
  id: number;
  title: string;
  stage: MediationStage;
  playerRole: PlayerRole;
  meetingType: MeetingType;
  speaker: Speaker;
  speakerLine?: string; // diálogo de la otra parte
  situation?: string; // descripción cuando el mediador interviene (speaker === 'mediator')
  privateContext?: string;
  options: Option[];
}

export interface Decision {
  phaseId: number;
  optionId: string;
  metersBefore: Meters;
  metersAfter: Meters;
}

export type GameOverReason = 'climate' | 'donRicardo' | 'florencia' | null;

export function getEmotionalState(value: number): EmotionalState {
  if (value <= 20) return 0;
  if (value <= 40) return 1;
  if (value <= 60) return 2;
  if (value <= 80) return 3;
  return 4;
}

export function getStateName(state: EmotionalState): string {
  return ['Receptivo', 'Neutral', 'Tenso', 'Molesto', 'Furioso'][state];
}

export function getStateNameForFlorencia(state: EmotionalState): string {
  return ['Confiada', 'Atenta', 'Dubitativa', 'Frustrada', 'Sin paciencia'][state];
}

export function getClimateLabel(state: EmotionalState): string {
  return ['Distendido', 'Cordial', 'Tenso', 'Crispado', 'Roto'][state];
}

export function isPrivate(meetingType: MeetingType): boolean {
  return meetingType === 'private-suavecito' || meetingType === 'private-florencia';
}

export function speakerName(speaker: Speaker): string {
  return {
    donRicardo: 'Don Ricardo Almeyda',
    drPerez: 'Dr. Pérez',
    florencia: 'Florencia Gómez',
    mediator: 'Mediación en curso',
  }[speaker];
}

export function speakerRole(speaker: Speaker): string {
  return {
    donRicardo: 'Dueño de Suavecito S.A.',
    drPerez: 'Letrado de Suavecito S.A.',
    florencia: 'Parte requirente — consumidora',
    mediator: 'Vos estás conduciendo',
  }[speaker];
}

export function playerRoleLabel(role: PlayerRole): string {
  return role === 'mediador'
    ? 'Sos el/la mediador/a — imparcial'
    : 'Sos abogado/a de Florencia';
}

export function playerRoleShort(role: PlayerRole): string {
  return role === 'mediador' ? 'Mediador/a' : 'Abogado/a de Florencia';
}

const STAGE_NAMES: Record<MediationStage, string> = {
  apertura: 'Discurso de apertura',
  'conjunta-inicial': 'Reunión conjunta inicial',
  'privada-florencia': 'Reunión privada con Florencia',
  'privada-suavecito': 'Reunión privada con Suavecito',
  replanteo: 'Replanteo del problema',
  brainstorming: 'Brainstorming',
  'criterios-objetivos': 'Criterios objetivos',
  acuerdo: 'Acuerdo',
};

const STAGE_NUMBERS: Record<MediationStage, number> = {
  apertura: 1,
  'conjunta-inicial': 2,
  'privada-florencia': 3,
  'privada-suavecito': 4,
  replanteo: 5,
  brainstorming: 6,
  'criterios-objetivos': 7,
  acuerdo: 8,
};

export function stageName(stage: MediationStage): string {
  return STAGE_NAMES[stage];
}

export function stageNumber(stage: MediationStage): number {
  return STAGE_NUMBERS[stage];
}

export const TOTAL_STAGES = 8;

const TECHNIQUE_LABELS: Record<Technique, string> = {
  'pregunta-abierta': 'Pregunta abierta',
  'pregunta-cerrada': 'Pregunta cerrada',
  'pregunta-circular': 'Pregunta circular',
  parafraseo: 'Parafraseo',
  'escucha-activa': 'Escucha activa',
  'agente-realidad': 'Agente de la realidad',
  'abogado-diablo': 'Abogado del diablo',
  legitimacion: 'Legitimación',
  empowerment: 'Empowerment',
  replanteo: 'Replanteo',
  brainstorming: 'Brainstorming',
  'criterios-objetivos': 'Criterios objetivos',
  confidencialidad: 'Confidencialidad',
  harvard: 'Método Harvard',
  'negociador-suave': 'Negociador suave',
  'negociador-duro': 'Negociador duro',
  esquive: 'Esquive procesal',
  'regateo-posicional': 'Regateo posicional',
  'perdida-imparcialidad': 'Pérdida de imparcialidad',
  'violacion-confidencialidad': 'Violación de confidencialidad',
  acusacion: 'Acusación',
  'carga-emocional': 'Carga emocional',
};

export function techniqueLabel(t: Technique): string {
  return TECHNIQUE_LABELS[t];
}

export function maxMeter(meters: Meters): {
  value: number;
  which: 'climate' | 'donRicardo' | 'florencia';
} {
  let max = meters.climate;
  let which: 'climate' | 'donRicardo' | 'florencia' = 'climate';
  if (meters.donRicardo > max) {
    max = meters.donRicardo;
    which = 'donRicardo';
  }
  if (meters.florencia > max) {
    max = meters.florencia;
    which = 'florencia';
  }
  return { value: max, which };
}

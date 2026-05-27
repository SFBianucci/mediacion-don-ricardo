export type EmotionalState = 0 | 1 | 2 | 3 | 4;

export type GameMode = 'learning' | 'exam';

export type MeetingType = 'joint' | 'private-suavecito' | 'private-florencia';

export type Speaker = 'donRicardo' | 'drPerez' | 'florencia';

export type QuestionType = 'circular' | 'open' | 'closed' | 'statement';

export interface Option {
  id: string;
  text: string;
  angerDelta: number;
  feedback: string;
  isBest?: boolean;
  questionType?: QuestionType;
}

export interface Phase {
  id: number;
  title: string;
  harvardPrinciple: string;
  meetingType: MeetingType;
  speaker: Speaker;
  privateContext?: string;
  initialAngerOnEnter?: number;
  speakerLine: string;
  options: Option[];
}

export interface Decision {
  phaseId: number;
  optionId: string;
  angerBefore: number;
  angerAfter: number;
}

export function getEmotionalState(anger: number): EmotionalState {
  if (anger <= 20) return 0;
  if (anger <= 40) return 1;
  if (anger <= 60) return 2;
  if (anger <= 80) return 3;
  return 4;
}

export function getStateName(state: EmotionalState): string {
  return ['Receptivo', 'Neutral', 'Tenso', 'Molesto', 'Furioso'][state];
}

export function getStateNameForFlorencia(state: EmotionalState): string {
  return ['Confiada', 'Atenta', 'Dubitativa', 'Frustrada', 'Sin paciencia'][state];
}

export function isPrivate(meetingType: MeetingType): boolean {
  return meetingType === 'private-suavecito' || meetingType === 'private-florencia';
}

export function speakerName(speaker: Speaker): string {
  return {
    donRicardo: 'Don Ricardo Almeyda',
    drPerez: 'Dr. Pérez',
    florencia: 'Florencia Gómez',
  }[speaker];
}

export function speakerRole(speaker: Speaker): string {
  return {
    donRicardo: 'Dueño de Suavecito S.A.',
    drPerez: 'Letrado de Suavecito S.A.',
    florencia: 'Tu clienta — consumidora',
  }[speaker];
}

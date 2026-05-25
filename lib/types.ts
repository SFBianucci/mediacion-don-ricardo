export type EmotionalState = 0 | 1 | 2 | 3 | 4;

export type GameMode = 'learning' | 'exam';

export type MeetingType = 'joint' | 'private';

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
  privateContext?: string;
  initialAngerOnEnter?: number;
  donRicardoLine: string;
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

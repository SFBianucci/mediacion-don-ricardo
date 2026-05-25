'use client';
import { Decision, GameMode } from './types';

const KEY = 'mediacion-result';

export interface SavedResult {
  mode: GameMode;
  anger: number;
  decisions: Decision[];
  gameOver: boolean;
}

export function saveResult(data: SavedResult) {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(KEY, JSON.stringify(data));
}

export function loadResult(): SavedResult | null {
  if (typeof window === 'undefined') return null;
  const raw = sessionStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SavedResult;
  } catch {
    return null;
  }
}

export function clearResult() {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(KEY);
}

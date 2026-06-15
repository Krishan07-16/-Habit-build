import { getTodayString } from './utils.js';

const TIMER_DURATION_KEY = 'habit-build-timer-duration';
const TIMER_HISTORY_KEY = 'habit-build-timer-history';
const TIMER_STATE_KEY = 'habit-build-timer-state';
const RESISTANCE_SETS_KEY = 'habit-build-resistance-sets';
const RESISTANCE_MINUTES_KEY = 'habit-build-resistance-minutes';

export const timerState = {
  seconds: 300,
  interval: null,
  status: 'idle',
  earlyExit: false,
};

export function getSavedTimerDuration() {
  try {
    const val = parseInt(localStorage.getItem(TIMER_DURATION_KEY), 10);
    return val > 0 ? val : 300;
  } catch { return 300; }
}

export function saveTimerDuration(seconds) {
  try { localStorage.setItem(TIMER_DURATION_KEY, String(seconds)); } catch {}
}

function getTimerHistory() {
  try { return JSON.parse(localStorage.getItem(TIMER_HISTORY_KEY)) || []; } catch { return []; }
}

function saveTimerToHistory() {
  const history = getTimerHistory();
  history.push({ date: getTodayString(), completed: true, timestamp: new Date().toISOString() });
  localStorage.setItem(TIMER_HISTORY_KEY, JSON.stringify(history));
}

export function getResistanceSets() {
  try { return JSON.parse(localStorage.getItem(RESISTANCE_SETS_KEY)) || {}; } catch { return {}; }
}

export function getTodayResistanceSets() {
  const sets = getResistanceSets();
  return sets[getTodayString()] || 0;
}

export function incrementResistanceSets() {
  const sets = getResistanceSets();
  const today = getTodayString();
  sets[today] = (sets[today] || 0) + 1;
  localStorage.setItem(RESISTANCE_SETS_KEY, JSON.stringify(sets));
}

export function getResistanceMinutes() {
  try { return JSON.parse(localStorage.getItem(RESISTANCE_MINUTES_KEY)) || {}; } catch { return {}; }
}

export function getTodayResistanceMinutes() {
  const mins = getResistanceMinutes();
  return mins[getTodayString()] || 0;
}

export function addTodayResistanceMinutes(additional) {
  const mins = getResistanceMinutes();
  const today = getTodayString();
  mins[today] = (mins[today] || 0) + additional;
  localStorage.setItem(RESISTANCE_MINUTES_KEY, JSON.stringify(mins));
}

export function formatTimer(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m + ':' + String(s).padStart(2, '0');
}

export function saveTimerState(status) {
  const state = {
    remaining: timerState.seconds,
    status: status,
    timestamp: new Date().toISOString(),
  };
  try { localStorage.setItem(TIMER_STATE_KEY, JSON.stringify(state)); } catch {}
}

export function clearTimerState() {
  try { localStorage.removeItem(TIMER_STATE_KEY); } catch {}
}

export function restoreTimerState() {
  try {
    const raw = localStorage.getItem(TIMER_STATE_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    if (!saved || !saved.status) {
      clearTimerState();
      return false;
    }

    timerState.seconds = saved.remaining;

    if (saved.status === 'running') {
      const elapsed = (Date.now() - new Date(saved.timestamp).getTime()) / 1000;
      if (elapsed > 0) timerState.seconds -= Math.floor(elapsed);
      if (timerState.seconds <= 0) {
        clearTimerState();
        timerState.seconds = getSavedTimerDuration();
        timerState.status = 'idle';
        return false;
      }
      timerState.status = 'running';
      return true;
    }

    if (saved.status === 'paused') {
      timerState.status = 'paused';
      return true;
    }

    return false;
  } catch {
    clearTimerState();
    return false;
  }
}

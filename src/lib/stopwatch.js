import { getTodayString } from './utils.js';

const STOPWATCH_SESSIONS_KEY = 'habit-build-stopwatch-sessions';
const STOPWATCH_STATE_KEY = 'habit-build-stopwatch-state';

export const stopwatchState = {
  seconds: 0,
  interval: null,
  status: 'idle',
};

export function formatStopwatch(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}

function getStopwatchSessions() {
  try { return JSON.parse(localStorage.getItem(STOPWATCH_SESSIONS_KEY)) || []; } catch { return []; }
}

export function saveStopwatchSession(durationSeconds) {
  clearStopwatchState();
  const sessions = getStopwatchSessions();
  sessions.push({ date: getTodayString(), durationSeconds: durationSeconds, timestamp: new Date().toISOString() });
  localStorage.setItem(STOPWATCH_SESSIONS_KEY, JSON.stringify(sessions));
}

export function saveStopwatchState(status) {
  const state = {
    seconds: stopwatchState.seconds,
    status: status,
    timestamp: new Date().toISOString(),
  };
  try { localStorage.setItem(STOPWATCH_STATE_KEY, JSON.stringify(state)); } catch {}
}

export function clearStopwatchState() {
  try { localStorage.removeItem(STOPWATCH_STATE_KEY); } catch {}
}

export function restoreStopwatchState() {
  try {
    const raw = localStorage.getItem(STOPWATCH_STATE_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    if (!saved || !saved.status) {
      clearStopwatchState();
      return false;
    }

    stopwatchState.seconds = saved.seconds;

    if (saved.status === 'running') {
      const elapsed = (Date.now() - new Date(saved.timestamp).getTime()) / 1000;
      if (elapsed > 0) stopwatchState.seconds += Math.floor(elapsed);
      stopwatchState.status = 'running';
      return true;
    }

    if (saved.status === 'paused') {
      stopwatchState.status = 'paused';
      return true;
    }

    return false;
  } catch {
    clearStopwatchState();
    return false;
  }
}

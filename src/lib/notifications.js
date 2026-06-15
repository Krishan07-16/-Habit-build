import { getTodayString, getSavedPlan } from './utils.js';

const NOTIF_TIME_KEY = 'habit-build-notif-time';
const NOTIF_ENABLED_KEY = 'habit-build-notif-enabled';
const NOTIF_FIRED_KEY = 'habit-build-notif-fired';

export function getNotifTime() {
  try {
    const val = localStorage.getItem(NOTIF_TIME_KEY);
    return val || null;
  } catch { return null; }
}

export function saveNotifTime(time) {
  try { localStorage.setItem(NOTIF_TIME_KEY, time); } catch {}
}

export function isNotifEnabled() {
  try {
    return localStorage.getItem(NOTIF_ENABLED_KEY) === 'true';
  } catch { return false; }
}

export function setNotifEnabled(enabled) {
  try { localStorage.setItem(NOTIF_ENABLED_KEY, String(enabled)); } catch {}
}

export function hasFiredToday() {
  try {
    return localStorage.getItem(NOTIF_FIRED_KEY) === getTodayString();
  } catch { return false; }
}

export function markFiredToday() {
  try { localStorage.setItem(NOTIF_FIRED_KEY, getTodayString()); } catch {}
}

export async function requestNotifPermission() {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;
  const result = await Notification.requestPermission();
  return result === 'granted';
}

export function sendNotification(title, body) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  try {
    new Notification(title, {
      body: body,
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      tag: 'habit-build-reminder',
      requireInteraction: false,
    });
  } catch {}
}

let notifTimerId = null;

export function scheduleReminder() {
  clearScheduledReminder();

  if (!isNotifEnabled()) return;

  const time = getNotifTime();
  if (!time) return;

  const plan = getSavedPlan();
  if (!plan || !plan.habit) return;

  const now = new Date();
  const [hours, minutes] = time.split(':').map(Number);
  const target = new Date();
  target.setHours(hours, minutes, 0, 0);

  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }

  const delay = target.getTime() - now.getTime();

  notifTimerId = setTimeout(function () {
    if (!hasFiredToday()) {
      sendNotification(
        'Time for ' + plan.habit,
        'Your ' + plan.target + '-minute session is waiting. Just start for 5 minutes.'
      );
      markFiredToday();
    }
    scheduleReminder();
  }, delay);
}

export function clearScheduledReminder() {
  if (notifTimerId) {
    clearTimeout(notifTimerId);
    notifTimerId = null;
  }
}

export function checkAndFireImmediateReminder() {
  if (!isNotifEnabled()) return;

  const time = getNotifTime();
  if (!time) return;

  if (hasFiredToday()) return;

  const now = new Date();
  const [hours, minutes] = time.split(':').map(Number);
  const todayTarget = new Date();
  todayTarget.setHours(hours, minutes, 0, 0);

  const fiveMinAfter = new Date(todayTarget.getTime() + 5 * 60 * 1000);

  if (now >= todayTarget && now <= fiveMinAfter) {
    const plan = getSavedPlan();
    if (plan && plan.habit) {
      sendNotification(
        'Time for ' + plan.habit,
        'Your ' + plan.target + '-minute session is waiting. Just start for 5 minutes.'
      );
      markFiredToday();
    }
  }
}

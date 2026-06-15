const ASSESSMENT_KEY = 'habit-build-assessment';
const PLAN_KEY = 'habit-build-plan';
const PREVIOUS_PLAN_KEY = 'habit-build-previous-plan';
const PREVIOUS_CHECKINS_KEY = 'habit-build-previous-checkins';
const CHECKINS_KEY = 'habit-build-checkins';
const ADJUSTMENTS_KEY = 'habit-build-adjustments';
const RESISTANCE_SETS_KEY = 'habit-build-resistance-sets';

export function getDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getTodayString() {
  return getDateString(new Date());
}

export function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

export function safeGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    if (e.name === 'QuotaExceededError' || e.code === 22) {
      console.warn('Habit Build: Storage full. Data may not be saved.');
      try { localStorage.removeItem(key); } catch {}
      try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
    }
  }
}

export function safeRemove(key) {
  try { localStorage.removeItem(key); } catch {}
}

export function getAssessmentAnswers() { return safeGet(ASSESSMENT_KEY, null); }
export function saveAssessmentAnswers(answers) { safeSet(ASSESSMENT_KEY, answers); }
export function clearAssessment() { safeRemove(ASSESSMENT_KEY); }

export function getSavedPlan() { return safeGet(PLAN_KEY, null); }
export function savePlan(plan) { safeSet(PLAN_KEY, plan); }

export function getPreviousPlan() { return safeGet(PREVIOUS_PLAN_KEY, null); }
export function savePreviousPlan(plan) { safeSet(PREVIOUS_PLAN_KEY, plan); }

export function getPreviousCheckIns() { return safeGet(PREVIOUS_CHECKINS_KEY, {}); }
export function savePreviousCheckIns(checkins) { safeSet(PREVIOUS_CHECKINS_KEY, checkins); }

export function getSavedCheckIns() { return safeGet(CHECKINS_KEY, {}); }
export function saveCheckIns(checkIns) { safeSet(CHECKINS_KEY, checkIns); }

export function getAdjustments() { return safeGet(ADJUSTMENTS_KEY, []); }
export function saveAdjustments(adj) { safeSet(ADJUSTMENTS_KEY, adj); }

export function getResistanceSets() { return safeGet(RESISTANCE_SETS_KEY, {}); }

export function getWeekStart() {
  const now = new Date(); now.setHours(0, 0, 0, 0);
  const day = now.getDay(); const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(now); monday.setDate(diff); monday.setHours(0, 0, 0, 0);
  return monday;
}

export function daysSince(startDate) {
  const start = new Date(startDate.split('T')[0] + 'T00:00:00');
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return Math.floor((today - start) / 86400000) + 1;
}

export function getTodayCheckIn() {
  const checkIns = getSavedCheckIns();
  return checkIns[getTodayString()] || null;
}

export function saveCheckInMinutes(plan, minutes, note) {
  const todayStr = getTodayString();
  const checkIns = getSavedCheckIns();
  const feedback = getFeedback(minutes, plan.target, plan.minimum, plan.maximum);

  checkIns[todayStr] = {
    date: todayStr,
    actualMinutes: minutes,
    feedback: feedback,
    target: plan.target,
    minimum: plan.minimum,
    maximum: plan.maximum,
    note: note || '',
  };

  saveCheckIns(checkIns);
  return checkIns[todayStr];
}

export function getFeedback(actual, target, minimum, maximum) {
  if (actual < minimum) {
    return 'That counts. You showed up. That\'s the win. Building habits is hard for everyone \u2014 what matters is that you showed up.';
  }
  if (actual < target) {
    return 'You kept the habit alive today. That\'s enough. This is hard for everyone \u2014 showing up is what builds the habit.';
  }
  if (actual <= maximum) {
    return 'Consistency is building. You did what you planned.';
  }
  return 'You did more than planned. That\'s fine, but tomorrow\'s target stays the same. Protect your energy.';
}

export function getCurrentDay(startDate) {
  const start = new Date(startDate.split('T')[0] + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, Math.min(30, diff));
}

export function getPlanElapsedDays(startDate) {
  const start = new Date(startDate.split('T')[0] + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
}

export function isPlanComplete(plan) {
  if (plan.status === 'continuing') return false;
  return getPlanElapsedDays(plan.startDate) >= 30;
}

export function hasThreeDayStreak() {
  const checkIns = getSavedCheckIns();
  const entries = Object.entries(checkIns)
    .filter(function (_ref) { return _ref[1].actualMinutes >= 0; })
    .sort(function (_ref2, _ref3) { return _ref2[0].localeCompare(_ref3[0]); });

  const last3 = entries.slice(-3);
  if (last3.length < 3) return false;

  for (let i = 0; i < last3.length; i++) {
    if (last3[i][1].actualMinutes < last3[i][1].target) return false;
  }
  return true;
}

export function hasCantStartObstacle() {
  try {
    const raw = localStorage.getItem(ASSESSMENT_KEY);
    if (!raw) return false;
    const answers = JSON.parse(raw);
    return Array.isArray(answers.obstacles) && answers.obstacles.indexOf("I know what to do but can't start") !== -1;
  } catch { return false; }
}

export function computeWeeklyRamp(t, m) {
  const diff = t - m;
  const weeks = [];
  for (let w = 1; w <= 4; w++) {
    if (w === 4) { weeks.push(t); break; }
    const val = Math.round((m + (diff * w / 4)) / 5) * 5;
    weeks.push(Math.max(3, val));
  }
  return weeks;
}

export function buildExplanation(target, minimum, maximum, answers) {
  const { habit, time, consistency, obstacles, goal } = answers;
  const bullets = [];

  if (time === 'None' || consistency === 'Not at all' || consistency === 'A few times') {
    bullets.push(`For ${escapeHtml(habit)}: Start with ${target} min/day.`);
  } else {
    bullets.push(`For ${escapeHtml(habit)}: Aim for ${target} min/day.`);
  }

  if (minimum < target) {
    bullets.push(`On hard days, do ${minimum} min.`);
  }

  if (maximum > target) {
    bullets.push(`Max ${maximum} min to avoid burnout.`);
  }

  bullets.push('Protect the habit, not the day. Missed days are part of the process.');
  bullets.push('Do your habit before the activity you look forward to.');

  const learningKeywords = ['read', 'learn', 'study', 'practice', 'code', 'program', 'language', 'instrument', 'write', 'draw', 'paint', 'skill'];
  const text = (habit + ' ' + (goal || '')).toLowerCase();
  if (learningKeywords.some(function (kw) { return text.indexOf(kw) !== -1; })) {
    bullets.push('Complete it once. Understanding comes with repetition.');
  }

  return bullets;
}

export function generatePlan(answers) {
  const { habit, time, consistency, obstacles, situation, goal, timeSlot } = answers;

  if (!habit || !time) {
    throw new Error('Assessment answers are incomplete.');
  }

  const baseTargetMap = {
    'None': 10,
    'Less than 15 minutes': 15,
    '15\u201330 minutes': 25,
    '30\u201360 minutes': 40,
    'More than 60 minutes': 60,
  };

  let target = baseTargetMap[time] || 10;

  if (consistency === 'Every day') target += 5;
  if (situation === "I'm doing well but need more structure") target += 5;

  if (Array.isArray(obstacles)) {
    if (obstacles.includes('It feels overwhelming')) target = Math.min(target, 15);
    if (obstacles.includes("I know what to do but can't start")) target = Math.min(target, 20);
  }

  target = Math.round(target / 5) * 5;
  target = Math.max(5, Math.min(120, target));

  const minimum = Math.max(3, Math.round(target * 0.5));
  const maximum = Math.round(target * 1.5);

  const explanation = buildExplanation(target, minimum, maximum, answers);
  const weeklyRamp = computeWeeklyRamp(target, minimum);

  return {
    habit,
    goal: goal || `Build a consistent ${habit} habit`,
    target,
    minimum,
    maximum,
    explanation,
    startDate: new Date().toISOString(),
    timeSlot: timeSlot || null,
    weeklyRamp,
  };
}

export function exportAllData() {
  return {
    assessment: getAssessmentAnswers(),
    plan: getSavedPlan(),
    checkIns: getSavedCheckIns(),
    adjustments: getAdjustments(),
    resistanceSets: getResistanceSets(),
    previousPlan: getPreviousPlan(),
    previousCheckIns: getPreviousCheckIns(),
    exportedAt: new Date().toISOString(),
    version: 1,
  };
}

export function importAllData(data) {
  if (!data || typeof data !== 'object') throw new Error('Invalid backup file');
  if (data.assessment) safeSet(ASSESSMENT_KEY, data.assessment);
  if (data.plan) safeSet(PLAN_KEY, data.plan);
  if (data.checkIns) safeSet(CHECKINS_KEY, data.checkIns);
  if (data.adjustments) safeSet(ADJUSTMENTS_KEY, data.adjustments);
  if (data.resistanceSets) safeSet(RESISTANCE_SETS_KEY, data.resistanceSets);
  if (data.previousPlan) safeSet(PREVIOUS_PLAN_KEY, data.previousPlan);
  if (data.previousCheckIns) safeSet(PREVIOUS_CHECKINS_KEY, data.previousCheckIns);
}

export function downloadBackup() {
  var data = exportAllData();
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'habit-build-backup-' + getTodayString() + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

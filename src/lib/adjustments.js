import { getSavedCheckIns, getAdjustments, saveAdjustments, savePlan, getAssessmentAnswers, getTodayString, buildExplanation, computeWeeklyRamp } from './utils.js';

export function evaluateAdjustment(plan) {
  const checkIns = getSavedCheckIns();
  const adjustments = getAdjustments();

  const entries = Object.entries(checkIns)
    .filter(function (_ref) { return _ref[1].actualMinutes >= 0; })
    .sort(function (_ref2, _ref3) { return _ref2[0].localeCompare(_ref3[0]); });

  if (entries.length < 5) return false;

  const window = entries.slice(-7);
  let hitCount = 0;
  for (let i = 0; i < window.length; i++) {
    if (window[i][1].actualMinutes >= window[i][1].target) {
      hitCount++;
    }
  }

  const hitRate = hitCount / window.length;
  let adjustment = 0;

  if (hitRate > 0.8) {
    adjustment = Math.floor(Math.random() * 4) + 2;
  } else if (hitRate < 0.4) {
    adjustment = -(Math.floor(Math.random() * 4) + 2);
  }

  if (adjustment === 0) return false;

  const lastAdj = adjustments.length > 0 ? adjustments[adjustments.length - 1] : null;
  if (lastAdj) {
    const lastDate = new Date(lastAdj.date + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const daysSince = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
    if (daysSince < 5) return false;
  }

  const prevTarget = plan.target;
  const prevMin = plan.minimum;
  const prevMax = plan.maximum;

  let newTarget = prevTarget + adjustment;
  newTarget = Math.round(newTarget / 5) * 5;
  newTarget = Math.max(5, Math.min(120, newTarget));

  if (newTarget === prevTarget) return false;

  plan.target = newTarget;
  plan.minimum = Math.max(3, Math.round(newTarget * 0.5));
  plan.maximum = Math.round(newTarget * 1.5);

  const answers = getAssessmentAnswers();
  plan.explanation = buildExplanation(newTarget, plan.minimum, plan.maximum, answers || {});
  plan.weeklyRamp = computeWeeklyRamp(plan.target, plan.minimum);

  savePlan(plan);

  adjustments.push({
    date: getTodayString(),
    previousTarget: prevTarget,
    newTarget: newTarget,
    previousMinimum: prevMin,
    newMinimum: plan.minimum,
    previousMaximum: prevMax,
    newMaximum: plan.maximum,
    hitRate: Math.round(hitRate * 100),
    direction: adjustment > 0 ? 'increased' : 'decreased',
    amount: Math.abs(adjustment),
  });
  saveAdjustments(adjustments);

  return true;
}

export function calculateAdaptedTarget() {
  const checkIns = getSavedCheckIns();
  const entries = Object.entries(checkIns)
    .filter(function (_ref) { return _ref[1].actualMinutes >= 0; })
    .sort(function (_ref2, _ref3) { return _ref2[0].localeCompare(_ref3[0]); });

  const last7 = entries.slice(-7);
  if (last7.length === 0) return null;

  let total = 0;
  for (let i = 0; i < last7.length; i++) {
    total += last7[i][1].actualMinutes;
  }
  const avg = total / last7.length;
  const target = Math.round(avg / 5) * 5;
  return Math.max(5, Math.min(120, target));
}

export function getPlanStats() {
  const checkIns = getSavedCheckIns();
  const entries = Object.entries(checkIns)
    .filter(function (_ref) { return _ref[1].actualMinutes >= 0; })
    .sort(function (_ref2, _ref3) { return _ref2[0].localeCompare(_ref3[0]); });

  let totalMinutes = 0;
  let activeDays = 0;
  for (let i = 0; i < entries.length; i++) {
    totalMinutes += entries[i][1].actualMinutes;
    activeDays++;
  }

  const first7 = entries.slice(0, 7).filter(function (e) { return e; });
  const last7 = entries.slice(-7).filter(function (e) { return e; });

  function avg(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let j = 0; j < arr.length; j++) sum += arr[j][1].actualMinutes;
    return sum / arr.length;
  }

  const firstAvg = avg(first7);
  const lastAvg = avg(last7);
  const trendPct = firstAvg > 0 ? Math.round(((lastAvg - firstAvg) / firstAvg) * 100) : 0;

  const consistencyPct = Math.min(100, Math.round((activeDays / 30) * 100));

  return {
    totalMinutes: totalMinutes,
    activeDays: activeDays,
    consistencyPct: consistencyPct,
    avgMinutes: activeDays > 0 ? Math.round(totalMinutes / activeDays) : 0,
    trendPct: trendPct,
    trendLabel: trendPct > 5 ? 'increased' : trendPct < -5 ? 'decreased' : 'stable',
  };
}

import { getSavedPlan, getSavedCheckIns, getTodayString, getDateString, escapeHtml } from './utils.js';

const GENERIC_SUGGESTIONS = [
  { label: 'Read 1 page', duration: '2\u20135 min', category: 'light' },
  { label: 'Solve 3 easy questions', duration: '5\u201310 min', category: 'light' },
  { label: 'Revise yesterday\'s notes', duration: '5\u201310 min', category: 'light' },
  { label: 'Write 3 key points from memory', duration: '3\u20135 min', category: 'light' },
  { label: 'Explain one concept out loud', duration: '2\u20135 min', category: 'light' },
  { label: 'Review flashcards or formulas', duration: '5\u201310 min', category: 'light' },
];

const STUDY_SUGGESTIONS = [
  { label: 'Solve 3 easy questions', duration: '5\u201310 min', category: 'light' },
  { label: 'Watch one short lecture', duration: '5\u201315 min', category: 'light' },
  { label: 'Revise yesterday\'s notes', duration: '5\u201310 min', category: 'light' },
  { label: 'Write 3 key points from memory', duration: '3\u20135 min', category: 'light' },
  { label: 'Sketch a mind map of one topic', duration: '5\u201310 min', category: 'light' },
  { label: 'Review flashcards or formulas', duration: '5\u201310 min', category: 'light' },
];

const EXERCISE_SUGGESTIONS = [
  { label: '5-minute stretch', duration: '5 min', category: 'light' },
  { label: 'Walk for 10 minutes', duration: '10 min', category: 'light' },
  { label: '10 push-ups or squats', duration: '2\u20133 min', category: 'light' },
  { label: 'Yoga flow for beginners', duration: '5\u201310 min', category: 'light' },
  { label: 'March in place for 5 minutes', duration: '5 min', category: 'light' },
];

const READING_SUGGESTIONS = [
  { label: 'Read 1 page', duration: '2\u20135 min', category: 'light' },
  { label: 'Read 1 paragraph and summarize it', duration: '2\u20133 min', category: 'light' },
  { label: 'Browse table of contents', duration: '2 min', category: 'light' },
  { label: 'Read back cover or intro', duration: '3 min', category: 'light' },
  { label: 'Re-read yesterday\'s last page', duration: '2\u20133 min', category: 'light' },
];

const CODING_SUGGESTIONS = [
  { label: 'Write 5 lines of code', duration: '5 min', category: 'light' },
  { label: 'Read documentation for 5 min', duration: '5 min', category: 'light' },
  { label: 'Fix one small bug', duration: '5\u201310 min', category: 'light' },
  { label: 'Review yesterday\'s code', duration: '5 min', category: 'light' },
  { label: 'Type out a simple exercise', duration: '5\u201310 min', category: 'light' },
];

function getSuggestionsForHabit(habit) {
  if (!habit) return GENERIC_SUGGESTIONS;
  var h = habit.toLowerCase();
  if (/exercise|workout|gym|run|jog|push|squat|fitness|yoga|stretch/.test(h)) return EXERCISE_SUGGESTIONS;
  if (/read|book|novel|literature|chapter/.test(h)) return READING_SUGGESTIONS;
  if (/code|program|develop|software|app|python|javascript|hack/.test(h)) return CODING_SUGGESTIONS;
  if (/study|learn|practice|math|physics|chemistry|biology|exam|lecture|class/.test(h)) return STUDY_SUGGESTIONS;
  return GENERIC_SUGGESTIONS;
}

export function shouldShowTaskSwitch() {
  var checkIns = getSavedCheckIns();
  var plan = getSavedPlan();
  if (!plan || !plan.habit) return false;

  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var belowCount = 0;
  for (var i = 1; i <= 3; i++) {
    var d = new Date(today.getTime() - i * 86400000);
    var ds = getDateString(d);
    var entry = checkIns[ds];
    if (entry && entry.actualMinutes < entry.minimum) {
      belowCount++;
    }
  }
  return belowCount >= 2;
}

export function getRandomSuggestion(exclude) {
  var plan = getSavedPlan();
  var suggestions = getSuggestionsForHabit(plan ? plan.habit : '');
  var filtered = exclude
    ? suggestions.filter(function (s) { return s.label !== exclude; })
    : suggestions;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export function renderTaskSwitchPanel() {
  var plan = getSavedPlan();
  if (!plan || !plan.habit) return '';
  if (!shouldShowTaskSwitch()) return '';

  var suggestion = getRandomSuggestion();

  return `
    <div id="task-switch-panel" class="bg-canvas rounded-md p-5" style="box-shadow: 0px 2px 2px rgba(0,0,0,0.04), 0px 8px 8px -8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.06) inset;">
      <div class="flex items-center gap-2 mb-3">
        <span class="font-mono text-xs text-mute tracking-normal uppercase">Feeling stuck?</span>
      </div>
      <p class="text-sm text-body leading-relaxed mb-3">
        You don't have to do the same thing. Switch to something lighter and keep the habit alive.
      </p>
      <div class="bg-canvas-soft rounded-md p-3 mb-3">
        <p class="text-sm text-ink font-medium">${escapeHtml(suggestion.label)}</p>
        <p class="text-xs text-mute mt-0.5">${escapeHtml(suggestion.duration)}</p>
      </div>
      <div class="flex items-center gap-2">
        <button id="btn-switch-task" class="inline-flex items-center h-8 px-3 bg-primary text-on-primary text-xs font-medium rounded-[100px] no-underline transition-opacity hover:opacity-90">Try This</button>
        <button id="btn-dismiss-task" class="inline-flex items-center h-8 px-3 bg-canvas text-ink text-xs font-medium rounded-[100px] no-underline border border-hairline transition-colors hover:bg-canvas-soft">Dismiss</button>
      </div>
    </div>
  `;
}

export function dismissTaskSwitchPanel() {
  var panel = document.getElementById('task-switch-panel');
  if (panel) {
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(-4px)';
    panel.style.transition = 'opacity 0.2s, transform 0.2s';
    setTimeout(function () {
      if (panel.parentNode) panel.parentNode.removeChild(panel);
    }, 200);
  }
}

export function refreshTaskSuggestion() {
  var panel = document.getElementById('task-switch-panel');
  if (!panel) return;

  var suggestion = getRandomSuggestion();
  var inner = panel.querySelector('.bg-canvas-soft');
  if (inner) {
    inner.innerHTML = `
      <p class="text-sm text-ink font-medium">${escapeHtml(suggestion.label)}</p>
      <p class="text-xs text-mute mt-0.5">${escapeHtml(suggestion.duration)}</p>
    `;
  }
}

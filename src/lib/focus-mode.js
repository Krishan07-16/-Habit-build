function focusButtonsHtml(type, status) {
  if (type === 'timer') {
    if (status === 'running') {
      return '<div class="flex items-center justify-center gap-3 mt-10"><button id="act-timer-pause" class="inline-flex items-center h-10 px-5 bg-canvas text-ink text-sm font-medium rounded-full border border-hairline transition-colors hover:bg-canvas-soft">Pause</button><button id="act-timer-reset" class="inline-flex items-center h-10 px-5 bg-canvas text-ink text-sm font-medium rounded-full border border-hairline transition-colors hover:bg-canvas-soft">Reset</button></div>';
    } else if (status === 'paused') {
      return '<div class="flex items-center justify-center gap-3 mt-10"><button id="act-timer-resume" class="timer-action-btn inline-flex items-center h-10 px-5 bg-primary text-on-primary text-sm font-medium rounded-full transition-opacity hover:opacity-90">Resume</button><button id="act-timer-reset" class="inline-flex items-center h-10 px-5 bg-canvas text-ink text-sm font-medium rounded-full border border-hairline transition-colors hover:bg-canvas-soft">Reset</button></div>';
    } else if (status === 'idle') {
      return '<div class="flex items-center justify-center gap-3 mt-10"><button id="act-timer-start" class="timer-action-btn inline-flex items-center h-10 px-6 bg-primary text-on-primary text-sm font-medium rounded-full transition-opacity hover:opacity-90">Start Timer</button></div>';
    } else if (status === 'completed') {
      return '<div class="flex items-center justify-center gap-3 mt-10"><button id="act-timer-start" class="timer-action-btn inline-flex items-center h-10 px-6 bg-primary text-on-primary text-sm font-medium rounded-full transition-opacity hover:opacity-90">Start Another</button></div>';
    }
  } else if (type === 'stopwatch') {
    if (status === 'running') {
      return '<div class="flex items-center justify-center gap-3 mt-10"><button id="act-sw-pause" class="inline-flex items-center h-10 px-5 bg-canvas text-ink text-sm font-medium rounded-full border border-hairline transition-colors hover:bg-canvas-soft">Pause</button><button id="act-sw-stop" class="inline-flex items-center h-10 px-5 bg-canvas text-ink text-sm font-medium rounded-full border border-hairline transition-colors hover:bg-canvas-soft">Stop</button></div>';
    } else if (status === 'paused') {
      return '<div class="flex items-center justify-center gap-3 mt-10"><button id="act-sw-resume" class="timer-action-btn inline-flex items-center h-10 px-5 bg-primary text-on-primary text-sm font-medium rounded-full transition-opacity hover:opacity-90">Resume</button><button id="act-sw-reset-p" class="inline-flex items-center h-10 px-5 bg-canvas text-ink text-sm font-medium rounded-full border border-hairline transition-colors hover:bg-canvas-soft">Reset</button></div>';
    } else if (status === 'stopped') {
      return '<div class="flex items-center justify-center gap-3 mt-10"><button id="act-sw-save" class="timer-action-btn inline-flex items-center h-10 px-6 bg-primary text-on-primary text-sm font-medium rounded-full transition-opacity hover:opacity-90">Save Session</button><button id="act-sw-reset" class="inline-flex items-center h-10 px-5 bg-canvas text-ink text-sm font-medium rounded-full border border-hairline transition-colors hover:bg-canvas-soft">Reset</button></div>';
    } else if (status === 'idle') {
      return '<div class="flex items-center justify-center gap-3 mt-10"><button id="act-sw-start" class="timer-action-btn inline-flex items-center h-10 px-6 bg-primary text-on-primary text-sm font-medium rounded-full transition-opacity hover:opacity-90">Start Stopwatch</button></div>';
    }
  }
  return '';
}

export function showFocusMode(label, timeHtml, plan, subtitle, type, status) {
  const overlay = document.getElementById('focus-overlay');
  const content = document.getElementById('focus-content');
  if (!overlay || !content) return;
  content.innerHTML = `
    <div class="text-xs text-body mb-6">${label}</div>
    <div class="text-7xl md:text-8xl font-semibold text-ink tabular-nums leading-none mb-6">${timeHtml}</div>
    ${subtitle ? '<p class="text-sm text-body max-w-[260px] mx-auto">' + subtitle + '</p>' : ''}
    ${focusButtonsHtml(type, status)}
  `;
  overlay.classList.add('active');
}

export function updateFocusMode(label, timeHtml, plan, subtitle, type, status) {
  const overlay = document.getElementById('focus-overlay');
  const content = document.getElementById('focus-content');
  if (!overlay || !content || !overlay.classList.contains('active')) return;
  content.innerHTML = `
    <div class="text-xs text-body mb-6">${label}</div>
    <div class="text-7xl md:text-8xl font-semibold text-ink tabular-nums leading-none mb-6">${timeHtml}</div>
    ${subtitle ? '<p class="text-sm text-body max-w-[260px] mx-auto">' + subtitle + '</p>' : ''}
    ${focusButtonsHtml(type, status)}
  `;
}

export function hideFocusMode() {
  const overlay = document.getElementById('focus-overlay');
  if (overlay) overlay.classList.remove('active');
}

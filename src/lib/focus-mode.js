export function showFocusMode(label, timeHtml, plan, subtitle) {
  const overlay = document.getElementById('focus-overlay');
  const content = document.getElementById('focus-content');
  if (!overlay || !content) return;
  content.innerHTML = `
    <div class="font-mono text-xs text-mute tracking-normal uppercase mb-6">${label}</div>
    <div class="text-7xl md:text-8xl font-semibold tracking-[-2.4px] text-ink tabular-nums leading-none mb-6">${timeHtml}</div>
    ${subtitle ? '<p class="text-sm text-body max-w-[260px] mx-auto">' + subtitle + '</p>' : ''}
  `;
  overlay.classList.add('active');
}

export function updateFocusMode(label, timeHtml, plan, subtitle) {
  const overlay = document.getElementById('focus-overlay');
  const content = document.getElementById('focus-content');
  if (!overlay || !content || !overlay.classList.contains('active')) return;
  content.innerHTML = `
    <div class="font-mono text-xs text-mute tracking-normal uppercase mb-6">${label}</div>
    <div class="text-7xl md:text-8xl font-semibold tracking-[-2.4px] text-ink tabular-nums leading-none mb-6">${timeHtml}</div>
    ${subtitle ? '<p class="text-sm text-body max-w-[260px] mx-auto">' + subtitle + '</p>' : ''}
  `;
}

export function hideFocusMode() {
  const overlay = document.getElementById('focus-overlay');
  if (overlay) overlay.classList.remove('active');
}

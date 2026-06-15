export function playChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99];
    for (let ni = 0; ni < notes.length; ni++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(notes[ni], now + ni * 0.12);
      gain.gain.setValueAtTime(0.08, now + ni * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + ni * 0.12 + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + ni * 0.12);
      osc.stop(now + ni * 0.12 + 0.8);
    }
  } catch {}
}

export function spawnSparkles(container) {
  if (!container) return;
  for (let si = 0; si < 16; si++) {
    const el = document.createElement('div');
    el.className = 'sparkle';
    const angle = Math.random() * 360;
    const dist = 30 + Math.random() * 50;
    el.style.setProperty('--dx', Math.cos(angle * Math.PI / 180) * dist + 'px');
    el.style.setProperty('--dy', Math.sin(angle * Math.PI / 180) * dist + 'px');
    el.style.left = (container.offsetWidth / 2 - 2) + 'px';
    el.style.top = (container.offsetHeight / 2 - 2) + 'px';
    el.style.background = ['#0070f3', '#171717', '#50e3c2', '#7928ca'][Math.floor(Math.random() * 4)];
    el.style.animationDelay = (Math.random() * 0.3) + 's';
    el.style.width = (2 + Math.random() * 4) + 'px';
    el.style.height = el.style.width;
    container.appendChild(el);
  }
  setTimeout(function () {
    const sparks = container.querySelectorAll('.sparkle');
    for (let sj = 0; sj < sparks.length; sj++) sparks[sj].remove();
  }, 1500);
}

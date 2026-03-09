// Script to simulate AI learning and speedrunning Doom 1993

(function() {
  const logContent = document.getElementById('log-content');
  if (!logContent) return;

  // Predefined messages to simulate the AI's thought process
  const messages = [
    'Initializing AI environment...',
    'Loading DOOM (1993) game assets...',
    "Studying DOOM's controls and mechanics...",
    'AI: Learning how to move and shoot...',
    'AI: First demon defeated!',
    'AI: Learning to manage health and ammo...',
    'AI: Exploring levels for optimal paths...',
    'AI: Mastery achieved. Preparing to speedrun...',
    'AI: Starting speedrun attempt 1...',
    'AI: Finished run in 15:00. Room for improvement.',
    'AI: Starting speedrun attempt 2...',
    'AI: Finished run in 12:45. Getting faster...',
    'AI: Targeting world record...',
  ];

  let idx = 0;

  function addMessage() {
    let text;

    if (idx < messages.length) {
      text = messages[idx++];
    } else {
      // After exhausting predefined messages, generate dynamic speedrun update
      const minutes = 10 + Math.floor(Math.random() * 6); // 10-15 minutes
      const seconds = Math.floor(Math.random() * 60);
      const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      text = `AI: New speedrun attempt completed in ${timeString}.`;
    }

    const p = document.createElement('p');
    const timestamp = new Date().toLocaleTimeString();
    p.textContent = `[${timestamp}] ${text}`;
    logContent.appendChild(p);
    // Keep the log scrolled to the bottom
    logContent.scrollTop = logContent.scrollHeight;
  }

  // Add a message every 3 seconds
  setInterval(addMessage, 3000);
})();

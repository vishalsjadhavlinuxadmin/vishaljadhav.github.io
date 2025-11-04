
// Dark mode toggle + typing animation
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const current = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', current === 'dark' ? 'dark' : 'light');
themeToggle.textContent = current === 'dark' ? 'Light' : 'Dark';
themeToggle.addEventListener('click', () => {
  const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', now);
  localStorage.setItem('theme', now);
  themeToggle.textContent = now === 'dark' ? 'Light' : 'Dark';
});

// Typing animation
const messages = ['Linux & HPC Administrator', 'RHCE • Slurm • DDN/Lustre', 'Ansible • AWS • GitHub Actions'];
let index = 0, pos = 0, dir = 1;
const el = document.getElementById('typing');
function step() {
  el.textContent = messages[index].substring(0, pos);
  pos += dir;
  if (pos > messages[index].length) { dir = -1; setTimeout(step, 1500); return; }
  if (pos < 0) { dir = 1; index = (index+1)%messages.length; pos = 0; }
  setTimeout(step, 80);
}
if(el) step();

const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
const modal = document.querySelector('.modal');
const modalPanel = document.querySelector('.modal-panel');
const form = modal.querySelector('form');
const success = modal.querySelector('.success');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('open', !open);
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

function openModal() {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => modal.querySelector('input').focus(), 20);
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('.open-demo').forEach(button => button.addEventListener('click', openModal));
document.querySelector('.close').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
modalPanel.addEventListener('click', event => event.stopPropagation());
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  localStorage.setItem('magicreview-demo-request', JSON.stringify({ ...data, createdAt: new Date().toISOString() }));
  form.hidden = true;
  success.hidden = false;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelectorAll('.chips button').forEach(button => button.addEventListener('click', () => {
  button.classList.toggle('selected');
  button.style.background = button.classList.contains('selected') ? '#c9f7ff' : '#eef9ff';
}));

// /* Paste this in your <script> */
setTimeout(() => {
  const splash = document.getElementById('splash');
  splash.style.opacity = '0';
  setTimeout(() => splash.remove(), 600);
}, 3800)
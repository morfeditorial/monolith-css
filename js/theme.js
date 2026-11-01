// Theme: "light" | "dark" | "auto". Persists in localStorage and sets <html data-theme>.
const KEY = 'monolith-theme';

export function getTheme() {
  try {
    return localStorage.getItem(KEY) || 'auto';
  } catch {
    return 'auto';
  }
}

export function setTheme(theme) {
  const root = document.documentElement;
  if (theme === 'light' || theme === 'dark') root.dataset.theme = theme;
  else root.removeAttribute('data-theme');

  try {
    if (theme === 'auto') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, theme);
  } catch {
    /* storage unavailable (private mode, embedded webview) */
  }
}

// [data-theme-toggle] cycles auto -> light -> dark
export function initTheme(root = document) {
  setTheme(getTheme());

  root.addEventListener('click', (event) => {
    if (!event.target.closest('[data-theme-toggle]')) return;
    const order = ['auto', 'light', 'dark'];
    setTheme(order[(order.indexOf(getTheme()) + 1) % order.length]);
  });
}

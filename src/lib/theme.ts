// The initial theme is applied by an inline script in Base.astro before first paint.
export const toggleTheme = (): void => {
  const next = document.documentElement.dataset['theme'] === 'light' ? 'dark' : 'light';
  document.documentElement.dataset['theme'] = next;
  try {
    localStorage.setItem('theme', next);
  } catch {
    // Storage blocked (private mode); the toggle still works for this page view.
  }
};

export const withBase = (path = ''): string => `${import.meta.env.BASE_URL}${path}`;

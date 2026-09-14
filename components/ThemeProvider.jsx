'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

export const THEMES = [
  { id: 'obsidian', name: 'Obsidian Blue', badge: 'Signature', c1: '#6FA8F5', c2: '#1E56B0' },
];

const ThemeContext = createContext({ theme: 'obsidian', setTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('obsidian');

  useEffect(() => {
    const saved = window.localStorage.getItem('embra_theme') || 'obsidian';
    const valid = THEMES.some((t) => t.id === saved) ? saved : 'obsidian';
    setThemeState(valid);
    document.documentElement.setAttribute('data-theme', valid);
  }, []);

  const setTheme = useCallback((t) => {
    if (!THEMES.some((x) => x.id === t)) return;
    setThemeState(t);
    document.documentElement.setAttribute('data-theme', t);
    window.localStorage.setItem('embra_theme', t);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeProvider;

'use client';

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

function useTheme(): { theme: Theme | 'light' | 'dark'; toggleTheme: () => void } {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark' || (theme === 'system' && window?.matchMedia('(prefers-color-scheme: dark)')?.matches);
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Cleanup function to remove the class when the component unmounts or the theme changes
    return () => {
      root.classList.remove('dark');
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') {
        return 'dark';
      } else if (prevTheme === 'dark') {
          return 'system'
      }
      return 'light';
    });
  };

  const currentTheme = theme === 'system' ? (window?.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light') : theme;

  return { theme: currentTheme, toggleTheme };
}

export default useTheme;

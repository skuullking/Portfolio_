'use client';

import React from 'react';
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from "lucide-react";
import useTheme from '@/hooks/use-theme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const currentTheme = theme === 'system'
    ? (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : theme;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container flex items-center justify-end p-4">
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {currentTheme === 'dark' ? (
            <SunIcon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}

export default Header;

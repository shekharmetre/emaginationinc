'use client'
import { useTheme } from 'next-themes';
import React from 'react';

const ToggleTheme: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log("toggel then")
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        background: resolvedTheme === 'dark' ? '#222' : '#eee',
        color: resolvedTheme === 'dark' ? '#fff' : '#222',
      }}
    >
      {resolvedTheme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ToggleTheme;
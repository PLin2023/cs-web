// app/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // app/components/ThemeSwitcher.tsx
  // ...

  return (
    <div style={{ position: 'fixed', top: '60%', right: '20px', transform: 'translateY(-50%)' }}>
      <button
        onClick={() => setTheme('light')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '10px',
          backgroundColor: '#291F64', // 将颜色值更改为实际的背景色
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
        }}
      >
        <MdOutlineLightMode style={{ color: 'white', fontSize: '20px' }} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px',
          backgroundColor: '#291F64', // 将颜色值更改为实际的背景色
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
        }}
      >
        <MdOutlineDarkMode style={{ color: 'white', fontSize: '20px' }} />
      </button>
    </div>
  );
}

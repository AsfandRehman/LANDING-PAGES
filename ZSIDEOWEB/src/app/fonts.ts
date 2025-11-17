// src/app/fonts.ts
import localFont from 'next/font/local';

export const generalSans = localFont({
  src: [
    {
      path: '../fonts/GeneralSans/GeneralSans-Variable.woff2', // ✅ relative to this file!
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-general',
  display: 'swap',
});

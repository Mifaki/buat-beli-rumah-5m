'use client';

import { ThemeProvider } from './theme/theme-provider';

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        {children}
      </ThemeProvider>
    </>
  );
}

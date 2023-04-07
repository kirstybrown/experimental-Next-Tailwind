'use client'

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from 'react';

export interface ProvidersProps {
}

const Providers = ({children}: { children: ReactNode }) => {
  return (
    <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
    >
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}

export default Providers;
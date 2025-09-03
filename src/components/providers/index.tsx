'use client'
import { ThemeProvider } from "next-themes";

import QueryProvider from "@/lib/poroviders/query-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
        {children}
      </ThemeProvider>
    </QueryProvider>
  )
}

'use client'
import QueryProvider from "@/lib/poroviders/query-provider";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
        {children}
      </ThemeProvider>
    </QueryProvider>
  )
}

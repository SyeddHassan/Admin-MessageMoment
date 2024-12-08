import { NextThemeProvider } from "@/providers/next-theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";

import AppSidebar from "@/components/layouts/app-sidebar";
import AppHeader from "@/components/layouts/app-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <AppHeader />
          {children}
        </main>
      </SidebarProvider>
    </NextThemeProvider>
  );
}

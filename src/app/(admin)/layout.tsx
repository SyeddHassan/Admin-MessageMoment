import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/layouts/app-sidebar";
import AppHeader from "@/components/layouts/app-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <AppHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}

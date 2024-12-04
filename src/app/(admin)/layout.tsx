import { SidebarProvider } from "@/components/ui/sidebar";
import { DrawerProvider } from "@/providers/drawer-provider";

import { AppSidebar } from "@/components/layouts/app-sidebar";
import AppHeader from "@/components/layouts/app-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DrawerProvider>
        <AppSidebar />
        <main className="w-full">
          <AppHeader />
          {children}
        </main>
      </DrawerProvider>
    </SidebarProvider>
  );
}

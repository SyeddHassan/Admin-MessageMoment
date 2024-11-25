import { DrawerProvider } from "@/contexts/drawer-context";
import { SidebarProvider } from "@/components/ui/sidebar";

import Sidebar from "@/layouts/sidebar";
import Header from "@/layouts/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DrawerProvider>
        <Sidebar />
        <main className="w-full">
          <Header />
          {children}
        </main>
      </DrawerProvider>
    </SidebarProvider>
  );
}

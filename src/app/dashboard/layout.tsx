// import Aside from "../../components/Aside";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DropdNotications } from "@/components/Notifications";

import { DropProfileMenu } from "@/components/Profile";
import { ModeToggle } from "@/components/Theme";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard de administrador",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  const session = cookieStore.get("bearer-token")?.value;
  if (!session) {
    redirect("/login");
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex flex-col flex-1">
          <header className="sticky top-0 z-20 border-b bg-background px-4 py-3 shadow-sm w-full">
            <nav className="flex items-center justify-between gap-4">
              <SidebarTrigger />
              <div className="flex items-center gap-2">
                <ModeToggle />
                <DropdNotications />
                <DropProfileMenu />
              </div>
            </nav>
          </header>
          <main className="p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

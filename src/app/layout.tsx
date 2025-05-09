
import type { Metadata } from "next";
import "@/app/globals.css";
import { Toast } from "@/components/Toast";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Login",
  description: "Dashboard",
};
export default async function LayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toast />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

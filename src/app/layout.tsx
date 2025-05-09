import "@/app/globals.css";
import { Toast } from "@/components/Toast";
import { Providers } from "@/app/Provider";

export default async function LayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-900">
        <Providers>
          <Toast />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

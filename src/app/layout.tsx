import "@/app/globals.css";
import { Toast } from "@/components/Toast";
import { Providers } from "@/app/Provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Pagina de login",
};


export default async function LayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body >
        <Providers>
          <Toast />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

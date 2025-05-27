import "@/app/globals.css";
import { Toast } from "@/components/Toast";
import { Providers } from "@/app/Provider";
import { Metadata } from "next";
import {Lato} from "next/font/google" 

export const metadata: Metadata = {
  title: "Login",
  description: "Pagina de login",
};

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  preload: true,
  adjustFontFallback: true,
  variable: "--font-lato",
})

export default async function LayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={lato.className} >
      <body>
        <Providers>
          <Toast />
          {children}
        </Providers>
      </body>
    </html>
  );
}

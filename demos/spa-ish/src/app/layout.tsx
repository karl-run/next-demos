import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/all-providers";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Spa-ish Next App",
  description: "Who needs full blown SPA",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="container mx-auto mt-8">
        <h1 className="text-2xl">Spa-ish Next.js app</h1>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

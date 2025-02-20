import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  console.info("Statisk root layout");

  return (
    <html lang="en">
      <body className="container mx-auto mt-8 max-w-prose">
        <h1 className="text-2xl">Statisk layout header</h1>
        {children}
      </body>
    </html>
  );
}

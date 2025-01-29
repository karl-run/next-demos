import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Logging eksempel",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }: PropsWithChildren) {
  console.info("Log from layout");

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

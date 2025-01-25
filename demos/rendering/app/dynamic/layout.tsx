import { headers } from "next/headers";
import { PropsWithChildren } from "react";

export default async function DynamicLayout({ children }: PropsWithChildren) {
  // Bruk av headers() eller cookies() gjør denne layouten dynamisk
  const requestHeaders = await headers();

  console.log("Dynamisk layout, agent:", requestHeaders.get("user-agent"));

  return (
    <div>
      <h2>Dynamisk layout header</h2>
      {children}
    </div>
  );
}

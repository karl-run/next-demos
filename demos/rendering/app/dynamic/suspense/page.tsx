import { headers } from "next/headers";
import { ClientComponent } from "@/app/dynamic/client-component";
import { Suspense } from "react";

export default async function DynamicPage() {
  // Bruk av headers() eller cookies() gjør denne layouten dynamisk
  const requestHeaders = await headers();

  console.log("Dynamisk page, agent", requestHeaders.get("user-agent"));

  return (
    <div>
      <h3>Page (leaf node)</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <ServerComponentWithData />
      </Suspense>
      <ClientComponent />
    </div>
  );
}

async function ServerComponentWithData() {
  const { data } = await noeData();

  return <div>Data: {JSON.stringify(data, null, 2)}</div>;
}

async function noeData(): Promise<{ data: string[] }> {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    data: ["a", "b", "c"],
  };
}

import { headers } from "next/headers";
import { ClientComponent } from "@/app/dynamic/client-component";

export default async function DynamicPage() {
  // Bruk av headers() eller cookies() gjør denne layouten dynamisk
  const requestHeaders = await headers();

  console.log("Dynamisk page, agent", requestHeaders.get("user-agent"));

  const { data } = await noeData();

  return (
    <div>
      <h3>Page (leaf node)</h3>
      <div>Data: {JSON.stringify(data, null, 2)}</div>
      <ClientComponent />
    </div>
  );
}

async function noeData(): Promise<{ data: string[] }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    data: ["a", "b", "c"],
  };
}

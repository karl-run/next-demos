import { headers } from "next/headers";
import { ClientComponent } from "@/app/dynamic/client-component";
import { Suspense } from "react";
import Link from "next/link";

export default async function DynamicPage() {
  // Bruk av headers() eller cookies() gjør denne layouten dynamisk
  const requestHeaders = await headers();

  console.log("Dynamisk page, agent", requestHeaders.get("user-agent"));

  return (
    <div>
      <h3 className="font-bold">Page med suspensed data (leaf node)</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <ServerComponentWithData />
      </Suspense>
      <p>Her kommer en klient-komponent</p>
      <div className="border p-2">
        <ClientComponent />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Link href="/dynamic" className="underline">
          Gå til dynamisk side uten suspense
        </Link>
        <Link href="/" className="underline">
          Tilbake til statisk side
        </Link>
      </div>
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

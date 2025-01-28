import { headers } from "next/headers";
import { ClientComponent } from "@/app/dynamic/client-component";
import Link from "next/link";

export default async function DynamicPage() {
  // Bruk av headers() eller cookies() gjør denne layouten dynamisk
  const requestHeaders = await headers();

  console.log("Dynamisk page, agent", requestHeaders.get("user-agent"));

  // Dette blokkerer renderingen av siden
  const { data } = await noeData();

  return (
    <div>
      <h3 className="font-bold">Page med blokkerende data (leaf node)</h3>
      <div>Data: {JSON.stringify(data, null, 2)}</div>
      <p>Her kommer en klient-komponent</p>
      <div className="border p-2">
        <ClientComponent />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Link href="/dynamic/suspense" className="underline">
          Gå til dynamisk side med suspense
        </Link>
        <Link href="/" className="underline">
          Tilbake til statisk side
        </Link>
      </div>
    </div>
  );
}

async function noeData(): Promise<{ data: string[] }> {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    data: ["a", "b", "c"],
  };
}

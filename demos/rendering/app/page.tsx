import Link from "next/link";
import {ClientComponent} from "@/app/dynamic/client-component";

export default function Home() {
  console.info("Statisk page");

  return (
    <main>
      <h3 className="font-bold">Statisk page (leaf node)</h3>
      <div className="flex flex-col gap-2">
          <div className="h-28">
              <p>Her er alt statisk, men det kan fint ha klient-komponenter</p>
              <ClientComponent />
          </div>
        <Link href="/dynamic" className="underline">
          Gå til dynamisk side
        </Link>
        <Link href="/dynamic/suspense" className="underline">
          Gå til dynamisk side med suspense
        </Link>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto mt-8">
      <h2 className="text-2xl mb-2">Velkommen til root</h2>
      <ul className="list-disc ml-8">
        <li>
          <Link className="underline" href="/react-query">
            Gå til React Query eksempel
          </Link>
        </li>
        <li>
          <Link className="underline" href="/redux">
            Gå til Redux eksempel
          </Link>
        </li>
        <li>
          <Link className="underline" href="/foo-bar-baz">
            Gå til en side som ikke finnes
          </Link>
        </li>
      </ul>
    </main>
  );
}

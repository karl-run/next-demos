import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  console.info("Log from page");

  return (
    <main>
      <div>Hello world!</div>
        <Link href="/error" className="underline">Go to server error page</Link>
    </main>
  );
}

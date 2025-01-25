"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Oj det skjedde en feil som bobblet hele veien opp. :|</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

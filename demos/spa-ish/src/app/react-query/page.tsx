"use client";

import React, { ReactElement } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

function Page(): ReactElement {
  const [waitTime, setWaitTime] = React.useState<number | null>(null);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["eksempel"],
    queryFn: async (): Promise<{ message: string }> => {
      const params = waitTime != null ? `?wait=${waitTime}` : "";
      return fetch(`/api/eksempel${params}`).then((res) => res.json());
    },
  });

  const [shouldCrash, setShouldCrash] = React.useState(false);

  return (
    <div className="mt-8">
      <div className="my-2">
        <div>Dette er en verdi fra React Query:</div>
        <div className="border p-1">{data?.message ?? "ingenting enda"}</div>
      </div>
      <div>Laster det? {isLoading ? "Ja" : "Nei"}</div>
      <div>Skjedde det en feil? {error ? `Ja, ${error.message}` : "Nei"}</div>
      <div>
        Ventetid:{" "}
        {waitTime != null ? waitTime.toFixed(2) : "Ingen (default 1000ms)"}
      </div>
      <div className="flex gap-2 mt-4">
        <button className="border p-1" onClick={() => refetch()}>
          Hent på nytt
        </button>
        <button className="border p-1" onClick={() => setWaitTime(5000)}>
          Skru på venting i 3 sekunder
        </button>
        <button
          className="border p-1"
          onClick={() => setWaitTime(Math.random() * 5000)}
        >
          Skru på tilfeldig venting
        </button>
        <button className="border p-1" onClick={() => setWaitTime(null)}>
          Skru av venteparameter
        </button>
      </div>
      <div className="mt-8">
        <button
          className="border border-red-500 p-2"
          onClick={() => setShouldCrash(true)}
        >
          Gjør noe som får siden til å kræsje
        </button>
        {shouldCrash &&
          // @ts-ignore
          null.toString()}
      </div>
      <div className="mt-8">
        <Link className="underline" href="/">
          Tilbake til forsiden
        </Link>
      </div>
    </div>
  );
}

export default Page;

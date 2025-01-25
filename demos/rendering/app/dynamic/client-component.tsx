"use client";

import { useState } from "react";

export function ClientComponent() {
  console.info(
    `Client component! Har jeg window? ${typeof window !== "undefined"}`,
  );

  const [state, setState] = useState("Initial value");

  return (
    <div>
      <h2>Dette er en klient-komponent!</h2>
      <div>State: {state}</div>
      <button
        className="border"
        onClick={() => {
          setState(`Noe annet: ${Math.random()}`);
        }}
      >
        Endre state
      </button>
    </div>
  );
}

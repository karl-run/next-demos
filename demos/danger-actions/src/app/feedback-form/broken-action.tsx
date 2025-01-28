"use client";

import React, { ReactElement, startTransition, useState } from "react";
import { myGenericAction } from "@/app/feedback-form/my-actions";

function BrokenAction(): ReactElement {
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="mt-4">
      <h2 className="ml-4 mb-2">Knekk en action</h2>
      <button
        className="p-2 border bg-red-200"
        onClick={() => {
          startTransition(async () => {
            const resultat = await myGenericAction("Hello", "World");

            setResult(resultat);
          });
        }}
      >
        Klikk på meg for å kjøre en server action
      </button>
      {result != null ? (
        <div className="mt-2">Resultat: {result}</div>
      ) : (
        <div className="mt-2 text-sm">Klikk på knappen da vel</div>
      )}
    </div>
  );
}

export default BrokenAction;

"use client";

import React, { ReactElement, useActionState } from "react";
import { submitMyForm } from "@/app/feedback-form/my-actions";

const initialState = {
  success: false,
};

function FeedbackForm(): ReactElement {
  const [state, formAction, pending] = useActionState(
    submitMyForm,
    initialState,
  );
  const [epost, setEpost] = React.useState("");
  const [melding, setMelding] = React.useState("");

  return (
    <div className="mt-4">
      <h2 className="ml-4 mb-2">Send tilbakemelding</h2>
      <form action={formAction} className="max-w-prose">
        <div className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            placeholder="E-post"
            className="border p-2 grow"
            value={epost}
            onChange={(e) => setEpost(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Melding"
            className="border p-2"
            value={melding}
            onChange={(e) => setMelding(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            disabled={pending}
            className="border p-2 bg-blue-400 text-white"
          >
            Send melding
          </button>
          {pending && <p>Sender...</p>}
        </div>
        {"success" in state && state.success && (
          <p className="mt-4">
            Melding sendt! (Server action sa: {JSON.stringify(state, null, 2)})
          </p>
        )}
        {"errors" in state && (
          <div className="text-red-700 border border-red-500 p-2 mt-2">
            <p>Oops :( Action sa:</p>
            <pre>{JSON.stringify(state, null, 2)}</pre>
          </div>
        )}
      </form>
    </div>
  );
}

export default FeedbackForm;

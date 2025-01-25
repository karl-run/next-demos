import React, { ReactElement } from "react";
import Link from "next/link";

function NotFound(): ReactElement {
  return (
    <div className="mt-8">
      <p>Oops! Fant ikke siden. :(</p>
      <div className="mt-8">
        <Link className="underline" href="/">
          Tilbake til forsiden
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

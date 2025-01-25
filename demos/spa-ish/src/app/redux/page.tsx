"use client";

import React, { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment, incrementByAmount } from "@/redux/demo-slice";
import Link from "next/link";

function ReduxPage(): ReactElement {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-8">
      <div>Dette er en verdi fra Redux: {counter.value}</div>
      <div className="flex gap-2 mt-2">
        <button className="border p-1" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="border p-1" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button
          className="border p-1"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
      <div className="mt-8">
        <Link className="underline" href="/">
          Tilbake til forsiden
        </Link>
      </div>
    </div>
  );
}

export default ReduxPage;

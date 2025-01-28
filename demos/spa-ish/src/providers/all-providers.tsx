"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StoreProvider from "@/providers/store-provider";

export function Providers({ children }: PropsWithChildren) {
  const [client] = useState(() => new QueryClient());

  return (
    <StoreProvider>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </StoreProvider>
  );
}

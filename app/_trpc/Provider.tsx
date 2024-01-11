import { QueryClient } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}));
  return <div>provider</div>;
}

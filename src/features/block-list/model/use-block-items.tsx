import { useState } from "react";

import { useBlockListQuery } from "@/entities/block-list";
import { useDebouncedValue } from "@/shared/lib/react-standart";

export function useBlockItems() {
  const [q, setQ] = useState("");

  const blockListQuery = useBlockListQuery({ q: useDebouncedValue(q, 400) });

  const items = blockListQuery.data?.items ?? [];

  return { items, isLoading: blockListQuery.isLoading, q, setQ };
}

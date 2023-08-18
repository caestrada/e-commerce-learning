"use client";

import { useAccountModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function RootPage() {
  const onOpen = useAccountModal((state) => state.onOpen);
  const isOpen = useAccountModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}

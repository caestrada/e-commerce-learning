"use client";

// Global imports
import { useEffect, useState } from "react";

// Local imports
import { AccountModal } from "@/components/modals/account-modal";

// This component is for hydration errors.
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // This only runs on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If in server, return null
  if (!isMounted) return null;

  // If in client, return children
  return (
    <>
      <AccountModal />
    </>
  );
};

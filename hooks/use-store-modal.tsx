import { create } from "zustand";

interface useAccountModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useAccountModal = create<useAccountModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

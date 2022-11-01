import create from "zustand";
import { firstPrompt } from "./utils/utils";

export const useConversationStore = create((set) => ({
  currentProduct: null,
  conversation: [firstPrompt],
  setCurrentProduct: (product) => set({ currentProduct: product }),
  appendToConversation: (chat) =>
    set((state) => ({ conversation: [...state.conversation, chat] })),
}));

export const useProductStore = create((set) => ({
  currentProduct: null,
  products: ["Chitty Chitty Bang Bang"],
  setCurrentProduct: (product) => set({ currentProduct: product }),
}));

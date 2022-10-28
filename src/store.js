import create from "zustand";
import { firstPrompt } from "../utils";

export const useConversationStore = create((set) => ({
  currentProduct: null,
  conversation: [firstPrompt],
  setCurrentProduct: (product) => set({ currentProduct: product }),
  appendToConversation: (chat) =>
    set((state) => ({ conversation: [...state.conversation, chat] })),
}));

import create from "zustand";

const firstPrompt = {
  system: true,
  message: "Hello, Dave. What would you like to do today?",
  options: [
    {
      key: 1,
      message: "I would like to make a new product.",
      action: "requestProductName",
    },
    {
      key: 2,
      message: "I would like to review and / or modify a product.",
      action: "getProductList",
    },
    {
      key: 3,
      message: "I would like info about the process.",
      action: "getInfoList",
    },
  ],
};

export const useConversationStore = create((set) => ({
  currentProduct: null,
  conversation: [firstPrompt],
  setCurrentProduct: (product) => set({ currentProduct: product }),
  appendToConversation: (chat) =>
    set((state) => ({ conversation: [...state.conversation, chat] })),
}));

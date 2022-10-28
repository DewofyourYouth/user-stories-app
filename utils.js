const cannedResponses = {
  getProductList: {
    message: "Great! Which product would you like to review?",
    options: [
      { key: 1, message: "Peanut Butter and Jelly Sandwich Maker" },
      { key: 2, message: "Flux capacitor" },
    ],
  },
  requestProductName: {
    message: "Awesome! What would you like to call this new product?",
  },
  getInfoList: { message: "Sure! What would you like to know?" },
};

export const makeUserInput = (message) => ({ system: false, message });
export const makeSystemResponse = (message, options = []) => ({
  system: true,
  message,
  options,
});

export const makeCannedResponse = (action) => {
  const response = cannedResponses[action];
  return makeSystemResponse(response.message, response?.options ?? []);
};

export const firstPrompt = {
  system: true,
  message: "Hello, Dave. What would you like to do today?",
  options: [
    {
      key: 1,
      message: "I would like to make a new product, HAL.",
      action: "requestProductName",
    },
    {
      key: 2,
      message: "I would like to review and / or modify a product, HAL.",
      action: "getProductList",
    },
    {
      key: 3,
      message: "I would like info about the process, HAL.",
      action: "getInfoList",
    },
  ],
};

const cannedResponses = {
  getProductList: {
    message: "Great! Which of your products would you like to review?",
    options: [
      { key: 1, message: "Peanut Butter and Jelly Sandwich Maker" },
      { key: 2, message: "Flux capacitor" },
      { key: 3, message: "Chitty Chitty Bang Bang" },
    ],
  },
  requestProductName: {
    message: "Awesome! What would you like to call this new product?",
  },
  getInfoList: {
    message: "Sure! What would you like to know?",
    options: [
      { key: 1, message: "frequently asked questions" },
      { key: 2, message: "what are black holes?" },
      { key: 3, message: "am I adopted?" },
      { key: 4, message: "what is a HAL 9000?" },
    ],
  },
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

export const questionState = {
  "Awesome! What would you like to call this new product?": "expectProductName",
};

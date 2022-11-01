import { useEffect, useState } from "react";

import { makeUserInput } from "../utils/utils";
import { questionState } from "../utils/utils";
import { useConversationStore } from "../store";
import { useProductStore } from "../store";

export function InputBar() {
  const [msg, setMsg] = useState("");
  const [expected, setExpected] = useState(null);
  const [placeholder, setPlaceholder] = useState(
    "Our chatbot doesn't understand free text yet."
  );
  const { appendToConversation, conversation } = useConversationStore(
    (state) => state
  );
  const { setCurrentProduct } = useProductStore((state) => state);
  useEffect(() => {
    const lastConvo = conversation[conversation.length - 1];

    if (Object.keys(questionState).includes(lastConvo.message)) {
      setExpected(questionState[lastConvo.message]);
      if (expected === "expectProductName") console.log(expected);
      setPlaceholder("Please type a product name");
    } else {
      setExpected(null);
      setPlaceholder("Our chatbot doesn't understand free text yet.");
    }
  }, [conversation]);
  return (
    <form
      className="inputBox"
      onSubmit={(e) => {
        e.preventDefault();
        if (expected === "expectProductName") setCurrentProduct(msg);
        appendToConversation(makeUserInput(msg));
        if (expected === "expectProductName")
          appendToConversation({
            system: true,
            message: (
              <span>
                Great! Your current product is <strong>{msg}</strong>!
              </span>
            ),
          });
        setMsg("");
      }}
    >
      <input
        type="text"
        name="userInput"
        placeholder={placeholder}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        id="userInput"
      />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}

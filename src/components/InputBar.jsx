import { useEffect, useState } from "react";

import { makeUserInput } from "../../utils";
import { questionState } from "../../utils";
import { useConversationStore } from "../store";

export function InputBar() {
  const [msg, setMsg] = useState("");
  const [expected, setExpected] = useState(null);
  const { appendToConversation, conversation, setCurrentProduct } =
    useConversationStore((state) => state);

  useEffect(() => {
    const lastConvo = conversation[conversation.length - 1];

    if (Object.keys(questionState).includes(lastConvo.message)) {
      setExpected(questionState[lastConvo.message]);
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
                Great! Your current product name is <strong>{msg}</strong>!
              </span>
            ),
          });
        setMsg("");
      }}
    >
      <input
        type="text"
        name="userInput"
        placeholder="Our chatbot doesn't understand free text yet."
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

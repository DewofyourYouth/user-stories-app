import { makeUserInput } from "../../utils";
import { useConversationStore } from "../store";
import { useState } from "react";

export function InputBar() {
  const [msg, setMsg] = useState("");
  const appendToConversation = useConversationStore(
    (state) => state.appendToConversation
  );
  return (
    <form
      className="inputBox"
      onSubmit={(e) => {
        e.preventDefault();
        appendToConversation(makeUserInput(msg));
        setMsg("");
      }}
    >
      <input
        type="text"
        name="userInput"
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

import { makeUserInput } from "../../utils";
import { useConversationStore } from "../store";
import { useState } from "react";

export function InputBar() {
  const [msg, setMsg] = useState("");
  const appendToConversation = useConversationStore(
    (state) => state.appendToConversation
  );
  return (
    <div className="inputBox">
      <input
        type="text"
        name="userInput"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        id="userInput"
      />
      <button
        className="submit"
        onClick={() => {
          appendToConversation(makeUserInput(msg));
          setMsg("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

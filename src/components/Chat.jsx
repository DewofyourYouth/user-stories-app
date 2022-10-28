import { makeUserInput } from "../../utils";
// import HAL from "../assets/HAL.jpeg";
import { useConversationStore } from "../store";
import { useState } from "react";

export function Chat({ system, message, options = [], action = null }) {
  const appendToConversation = useConversationStore(
    (state) => state.appendToConversation
  );
  const [optionSelected, setOptionSelected] = useState(false);
  const divCls = system ? "chat systemPrompt" : "chat userResponse";
  const cls = system ? "systemHandle" : "userHandle";
  const userName = system ? "HAL" : "Dave";
  return (
    <div className={divCls}>
      <p>
        <span className={cls}>{userName}:</span> {message}
      </p>
      {options.length > 0 && (
        <div className="buttonGroup">
          <ul>
            {optionSelected === false &&
              options.map((option) => (
                <li key={option.key}>
                  <button
                    onClick={(e) => {
                      const userInput = makeUserInput(option.message);
                      appendToConversation(userInput);
                      setOptionSelected(true);
                    }}
                  >
                    {option.message}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

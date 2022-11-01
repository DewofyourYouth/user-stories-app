import { makeCannedResponse, makeUserInput } from "../utils/utils";

import HAL from "../assets/HAL.jpeg";
import dave from "../assets/dave.jpg";
import { useConversationStore } from "../store";
import { useState } from "react";

export function Chat({ system, message, options = [] }) {
  const appendToConversation = useConversationStore(
    (state) => state.appendToConversation
  );

  const [optionSelected, setOptionSelected] = useState(false);
  const divCls = system ? "chat systemPrompt" : "chat userResponse";
  const cls = system ? "systemHandle" : "userHandle";
  const userIcon = system ? HAL : dave;
  return (
    <div className={divCls}>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          gap: "10px",
          padding: "10px 0",
        }}
      >
        <div className={cls}>
          <img src={userIcon} className={system ? "systemIcon" : "userIcon"} />
        </div>{" "}
        <div style={{ padding: "10px" }}>{message}</div>
      </div>
      {options.length > 0 && (
        <div className="buttonGroup">
          <ul>
            {optionSelected === false &&
              options.map((option) => (
                <li key={option.key}>
                  <button
                    onClick={(e) => {
                      const userInput = makeUserInput(option.message);
                      const response = makeCannedResponse(option?.action);
                      appendToConversation(userInput);
                      appendToConversation(response);
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

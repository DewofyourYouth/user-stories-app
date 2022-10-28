import { makeUserInput } from "../../utils";
// import HAL from "../assets/HAL.jpeg";
import { useConversationStore } from "../store";

export function Chat({ system, message, options = [] }) {
  const appendToConversation = useConversationStore(
    (state) => state.appendToConversation
  );
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
            {options.map((option) => (
              <li key={option.key}>
                <button
                  onClick={(e) => {
                    appendToConversation(makeUserInput(option.message));
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

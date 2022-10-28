import "./App.css";

import { Chat } from "./components/Chat";
import { InputBar } from "./components/InputBar";
import { useConversationStore } from "./store";

function App() {
  const conversation = useConversationStore((state) => state.conversation);
  return (
    <div>
      <div className="chatBox">
        <div className="chatArea">
          <div className="chatContainer">
            {conversation.map((chat, i) => (
              <Chat key={i} {...chat} />
            ))}
          </div>
        </div>
        <InputBar />
      </div>
    </div>
  );
}

export default App;

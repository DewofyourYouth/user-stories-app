import { Chat } from "../components/Chat";
import { InputBar } from "../components/InputBar";
import { useConversationStore } from "../store";

export function ChatPage() {
  const conversation = useConversationStore((state) => state.conversation);

  return (
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
  );
}

import { ArrowUpIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { useState } from "react";

const ChatBox = ({ onSend }: { onSend: (text: string) => void }) => {
  const [text, setText] = useState("");

  const sendMessages = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <InputGroup className="flex flex-row px-3 items-center justify-center">
      <InputGroupTextarea
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        placeholder="Ask, Search or Chat..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessages();
          }
        }}
      />

      <InputGroupButton
        variant="default"
        className="rounded-full ml-auto"
        size="icon-xs"
        onClick={sendMessages}
        disabled={!text.trim()}
      >
        <ArrowUpIcon />
      </InputGroupButton>
    </InputGroup>
  );
};

export default ChatBox;

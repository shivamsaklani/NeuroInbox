"use client";

import { useState } from "react";
import ChatBox from "@/components/custom/ChatBox";
import { Card } from "@/components/ui/card";

type Message = {
  id: number;
  role: "user" | "ai";
  content: string;
};

const AIPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "ai",
      content: "Hello! How can I help you today?",
    },
  ]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "user",
        content: text,
      }
    ]);
  };

  return (
    <Card className="flex h-full w-full flex-col overflow-hidden p-0">
      {/* Header */}
      <div className="flex justify-center ring-1 ring-primary/30 shadow shadow-primary/30 bg-background/40 mb-1 items-center px-4 py-3 text-sm font-medium">
        AI Assistant
      </div>

      {/* Messages */}
      <div className="flex-1 scrollbar overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-xl px-4 py-2 text-sm ${
                msg.role === "user"
                  ? "bg-primary text-secondary"
                  : "bg-secondary"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3">
        <ChatBox onSend={handleSend} />
      </div>
    </Card>
  );
};

export default AIPage;

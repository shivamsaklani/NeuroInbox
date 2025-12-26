"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const messages = [
  {
    id: 1,
    role: "ai",
    content: "Hello! How can I help you today?",
  },
  {
    id: 2,
    role: "user",
    content: "Build me an AI inbox",
  },
  {
    id: 3,
    role: "ai",
    content: "Sure. I can help you design that.",
  },
  {
    id: 1,
    role: "ai",
    content: "Hello! How can I help you today?",
  },
  {
    id: 2,
    role: "user",
    content: "Build me an AI inbox",
  },
  {
    id: 3,
    role: "ai",
    content: "Sure. I can help you design that.",
  },{
    id: 1,
    role: "ai",
    content: "Hello! How can I help you today?",
  },
  {
    id: 2,
    role: "user",
    content: "Build me an AI inbox",
  },
  {
    id: 3,
    role: "ai",
    content: "Sure. I can help you design that.",
  },
  {
    id: 1,
    role: "ai",
    content: "Hello! How can I help you today?",
  },
  {
    id: 2,
    role: "user",
    content: "Build me an AI inbox",
  },
  {
    id: 3,
    role: "ai",
    content: "Sure. I can help you design that.",
  },
];

const AIPage = () => {
  return (
    <Card className="flex h-full w-full flex-col overflow-hidden p-0">
      {/* Header */}
      <div className="flex justify-center items-center px-4 py-3 text-sm font-medium">
        AI Assistant
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
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

      {/* Input area */}
      <div className="p-3">
        <div className="flex items-center gap-2">
          <Input placeholder="Type a message..." className="flex-1" />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AIPage;

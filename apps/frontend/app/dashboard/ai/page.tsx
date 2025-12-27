"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpIcon, Plus } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

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
    id: 4,
    role: "ai",
    content: "Hello! How can I help you today?",
  },
  {
    id: 5,
    role: "user",
    content: "Build me an AI inbox",
  },
  {
    id: 6,
    role: "ai",
    content: "Sure. I can help you design that.",
  },{
    id: 7,
    role: "ai",
    content: "Hello! How can I help you today?",
  },
  {
    id: 8,
    role: "user",
    content: "Build me an AI inbox",
  },
  {
    id: 9,
    role: "ai",
    content: "Sure. I can help you design that.",
  },
  {
    id: 10,
    role: "ai",
    content: "Hello! How can I help you today?",
  },
  {
    id:11,
    role: "user",
    content: "Build me an AI inbox",
  },
  {
    id: 12,
    role: "ai",
    content: "Sure. I can help you design that.",
  },
];

const AIPage = () => {
  return (
    <Card className="flex h-full w-full flex-col overflow-hidden p-0">
      {/* Header */}
      <div className="flex justify-center ring-1 ring-primary/30 shadow shadow-primary/30 bg-background/40 mb-1 items-center px-4 py-3 text-sm font-medium">
        AI Assistant
      </div>

      {/* Chat messages */}
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

      {/* Input area */}
      <div className="p-3">
        <div className="flex justify-center items-center gap-2 ">
          <InputGroup>
          <InputGroupTextarea placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
          >
            <Plus/>
          </InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">Free</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="start"
              className="[--radius:0.95rem]"
            >
              <DropdownMenuItem>Free</DropdownMenuItem>
              <DropdownMenuItem>Pro</DropdownMenuItem>
              <DropdownMenuItem>Bussiness</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupButton
            variant="default"
            className="rounded-full ml-auto"
            size="icon-xs"
            disabled
          >
            <ArrowUpIcon/>
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
        </div>
      </div>
    </Card>
  );
};

export default AIPage;

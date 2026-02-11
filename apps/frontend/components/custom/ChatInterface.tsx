"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
}

interface ChatInterfaceProps {
    messages: Message[];
    onSendMessage: (content: string) => void;
}

export function ChatInterface({ messages, onSendMessage }: ChatInterfaceProps) {
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        onSendMessage(input.trim());
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-full w-full bg-background">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto">
                {messages.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center space-y-2 px-4">
                            <h2 className="text-2xl font-semibold text-foreground">
                                Start a conversation
                            </h2>
                            <p className="text-muted-foreground">
                                Type your message below to begin chatting
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="pb-32">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={cn(
                                    "flex w-full py-6 px-6",
                                    message.role === "user" ? "bg-background" : "bg-muted"
                                )}
                            >
                                <div className="max-w-3xl mx-auto w-full flex gap-6">
                                    {/* Avatar */}
                                    <div
                                        className={cn(
                                            "shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold",
                                            message.role === "user"
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
                                        )}
                                    >
                                        {message.role === "user" ? "U" : "AI"}
                                    </div>

                                    {/* Message Content */}
                                    <div className="flex-1 min-w-0 space-y-2 pt-1">
                                        <p className="text-base whitespace-pre-wrap break-words text-foreground">
                                            {message.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background to-transparent pb-6 pt-12">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="relative flex items-end gap-2 bg-card border border-border rounded-2xl shadow-lg p-2">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Send a message..."
                            className="min-h-[52px] max-h-[200px] resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:outline-none p-3 flex-1 text-foreground placeholder:text-muted-foreground"
                            rows={1}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            className="h-10 w-10 shrink-0 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                        >
                            <Send className="h-5 w-5 text-primary-foreground" />
                        </button>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-2">
                        Press Enter to send, Shift + Enter for new line
                    </p>
                </div>
            </div>
        </div>
    );
}
